/**
 * Helper functions for submitting forms with reCAPTCHA v3 integration
 */

export interface FormSubmissionOptions {
  endpoint: string;
  action: string;
  getToken: (action: string) => Promise<string | null>;
  data: Record<string, any>;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
}

/**
 * Submit form data with reCAPTCHA token verification
 * @param options Configuration for form submission
 * @returns Promise that resolves to the response data
 */
export async function submitFormWithRecaptcha(
  options: FormSubmissionOptions
): Promise<any> {
  const { endpoint, action, getToken, data, onSuccess, onError } = options;

  try {
    // Get reCAPTCHA token
    const token = await getToken(action);

    if (!token) {
      const error = new Error("Failed to get reCAPTCHA token");
      onError?.(error);
      throw error;
    }

    // Prepare payload with token
    const payload = {
      ...data,
      recaptchaToken: token,
    };

    // Submit to backend
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error = new Error(
        errorData.error || `Form submission failed with status ${response.status}`
      );
      onError?.(error);
      throw error;
    }

    const responseData = await response.json();
    onSuccess?.(responseData);
    return responseData;
  } catch (error) {
    onError?.(error);
    throw error;
  }
}

/**
 * Get the API endpoint based on environment
 */
export function getApiEndpoint(path: string): string {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  if (baseUrl) {
    return `${baseUrl}${path}`;
  }

  // Default to relative path (same origin)
  return path;
}

/**
 * Create form submission handler for React components
 */
export function createFormSubmissionHandler(options: {
  endpoint: string;
  action: string;
  getToken: (action: string) => Promise<string | null>;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
}) {
  return async (formData: Record<string, any>) => {
    return submitFormWithRecaptcha({
      endpoint: getApiEndpoint(options.endpoint),
      action: options.action,
      getToken: options.getToken,
      data: formData,
      onSuccess: options.onSuccess,
      onError: options.onError,
    });
  };
}
