import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Handling
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  // Set CORS for regular requests
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Read .env variables (Vercel automatically populates process.env)
  const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
  const SMTP_USERNAME = process.env.SMTP_USERNAME || "";
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD || "";
  
  const toEmail = "contact@agentsvista.com";
  const fromEmail = "noreply@agentsvista.com";
  const fromName = "AgentVista Sales";
  const replyToSales = "support@agentsvista.com";
  const ccEmails = process.env.GMAIL_CC_EMAILS || "";

  if (!SMTP_USERNAME || !SMTP_PASSWORD || !toEmail || !fromEmail) {
    return res.status(500).json({
      success: false,
      message: "Server configuration incomplete. Missing SMTP or email settings. Please check Vercel Environment Variables.",
    });
  }

  // Read & Sanitize input
  const body = req.body || {};
  const formType = body.formType || "contact";
  const name = body.name ? String(body.name).trim() : "";
  const email = body.email ? String(body.email).trim() : "";
  const phone = body.phone ? String(body.phone).trim() : "";
  const message = body.message ? String(body.message).trim() : "";
  const company = body.company ? String(body.company).trim() : "";
  const pageUrl = body.pageUrl ? String(body.pageUrl).trim() : "https://www.agentsvista.com";

  // Validate required fields
  const errors: string[] = [];
  if (!name) errors.push("Name is required");
  if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push("Valid email is required");
  if (!phone) errors.push("Phone is required");

  if (errors.length > 0) {
    return res.status(422).json({ success: false, message: errors.join(", ") });
  }

  // Template builders
  const buildEmailHtml = (isNotificationToTeam: boolean) => {
    let specificRows = "";

    if (formType === "appexchange") {
      specificRows = `
        <tr>
          <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Company:</strong></td>
          <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">${company}</td>
        </tr>`;
    } else {
      specificRows = `
        <tr>
          <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Message:</strong></td>
          <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">${message.replace(/\n/g, "<br>")}</td>
        </tr>`;
    }

    const heading = isNotificationToTeam
      ? (formType === "appexchange" ? "Following message received via AppExchange form" : "Following message received via contact us form")
      : "Thank you for contacting us. We will get back to you shortly. Below is a copy of your message:";

    return `<!DOCTYPE html>
<html>
<head><title></title></head>
<body>
    <table cellspacing="0" cellpadding="0" border="0" width="650" class="mainTable" align="center"
        style="border: 1px solid #e2e2e2;color: #13324b;font-family: Arial,Helvetica,sans-serif;font-size: 12px;font-weight: normal;">
        <tr>
            <td align="center" valign="top">
                <table cellspacing="0" cellpadding="0" width="100%" align="center" class="innerTable"
                    style="color: #000000; font-size: 12px;">
                    <tr>
                        <td valign="top" bgcolor="#f4f9fb"
                            style=" text-align: center; padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                            <a href="https://agentsvista.com/" title="AgentVista" target="_blank">
                                <img src="https://surveyvista.com/wp-content/uploads/2026/01/agent-vista.svg"
                                    style="margin-bottom: 0; padding: 10px 0;display: block; margin: 0 auto;" width="200" border="0" alt="AgentVista" title="AgentVista" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px 10px 20px;" align="center" valign="top">
                            <table width="100%" cellspacing="0" cellpadding="0" align="center" class="innerTable"
                                style=" font-size: 12px; color: #333; ">
                                <tr>
                                    <td align="left" style="padding:10px 0; font-size: 12px;">
                                        <strong style="font-size:18px; color:#333; font-family:Arial, Helvetica, sans-serif;">${heading}</strong>
                                    </td>
                                </tr>
                                <tr><td height="5"></td></tr>
                                <tr>
                                    <td width="100%">
                                        <table class="content" width="100%" align="center" cellpadding="0" cellspacing="0"
                                            style=" font-size: 13px; color: #666666; border-collapse: collapse;border:1px solid #ccc;border-bottom:0;">
                                            <tbody>
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Name:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">${name}</td>
                                                </tr>
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Email:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">${email}</td>
                                                </tr>
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Contact Number:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">${phone}</td>
                                                </tr>
                                                ${specificRows}
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Form Submitted From:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">${pageUrl}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellpadding="0" cellspacing="0" border="0" width="100%"
                                style="line-height:18px; padding:10px; border-top: solid 1px #e2e2e2;" bgcolor="#f4f9fb">
                                <tr>
                                    <td align="left" width="50%"
                                        style="text-align:left; font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
                                        <strong>Thanks &amp; Regards</strong><br /> AgentVista Team<br /><strong>Address: </strong>2040 Martin Ave Santa Clara, CA 95050 United States<br />
                                        <strong>Phone: </strong> 1.669.777.6838 <br /><strong>Email: </strong> <a style="color: #000;" href="mailto:info@ardira.com">info@ardira.com</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
  };

  const bodyNotification = buildEmailHtml(true);
  const bodyAutoReply = buildEmailHtml(false);

  // Configure Nodemailer Transporter
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // usually false for 587
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    // ── Email 1: Team Notification ──────────────────────────────────────
    await new Promise((resolve, reject) => {
      transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: toEmail,
        cc: ccEmails,
        replyTo: `"${name}" <${email}>`,
        subject: "Inquiry from AgentVista website",
        html: bodyNotification,
      }, (err, info) => {
        if (err) reject(err);
        else resolve(info);
      });
    });

    let emailSent2 = true;

    // ── Email 2: Auto-Reply to User ─────────────────────────────────────
    if (formType !== "appexchange") {
      try {
        await new Promise((resolve, reject) => {
          transporter.sendMail({
            from: `"${fromName}" <${fromEmail}>`,
            to: `"${name}" <${email}>`,
            replyTo: `"${fromName}" <${replyToSales}>`,
            subject: "Thank You for contacting us regarding AgentVista",
            html: bodyAutoReply,
          }, (err, info) => {
            if (err) reject(err);
            else resolve(info);
          });
        });
      } catch (err) {
        console.error("Auto-reply error:", err);
        emailSent2 = false;
      }
    }

    if (emailSent2) {
      return res.status(200).json({ success: true, message: "Emails sent successfully" });
    } else {
      return res.status(200).json({ success: true, message: "Notification sent, but auto-reply may have failed" });
    }

  } catch (error: unknown) {
    console.error("Team Notification Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).json({ success: false, message: "Failed to send emails: " + errorMessage });
  }
}
