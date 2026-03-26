import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import rateLimit from "express-rate-limit";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Stability Middlewares
app.use(cors());
app.use(express.json());

// 10. Rate limiting to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: { success: false, error: "Too many messages. Please try again after 15 minutes." }
});

// Configure SendGrid (Requirement 1)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Root endpoint
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Portfolio Email Server is Live" });
});

/**
 * POST /api/contact
 * Requirement 3: Expose the endpoint
 */
app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' }) + ' UTC';

  // Requirement 9: Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    console.log(`[${new Date().toLocaleTimeString()}] [-] Validation failed: Empty fields.`);
    return res.status(400).json({ 
      success: false, 
      error: "Please fill in your name, email, and message." 
    });
  }

  try {
    const fromEmail = process.env.EMAIL_FROM; // Must be a verified sender in SendGrid
    const toOwner = process.env.EMAIL_TO;    // Portfolio owner's email

    /**
     * Requirement 2: Notification email to the portfolio owner
     * Optimized for Gmail Inbox delivery (Minimalist, correct headers)
     */
    const ownerMsg = {
      to: toOwner,
      from: {
        email: fromEmail,
        name: "Website Portfolio"
      },
      replyTo: email, // Requirement 1: Allow direct reply to the sender
      subject: "New Contact Message from Portfolio Website",
      // Requirement 1: Plain text version for better deliverability
      text: `New Portfolio Message\n\nName: ${name}\nEmail: ${email}\nDate: ${timestamp}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #2563eb; font-size: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px; margin-top: 0;">New Contact Form Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 100px;">SENDER</td>
              <td style="padding: 8px 0; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">EMAIL</td>
              <td style="padding: 8px 0; font-weight: 500;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">DATE</td>
              <td style="padding: 8px 0; color: #4b5563; font-size: 14px;">${timestamp}</td>
            </tr>
          </table>
          <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #f3f4f6;">
            <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 24px;">
            <a href="mailto:${email}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to Sender</a>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #f3f4f6; padding-top: 16px;">
            Submission received from your Portfolio website.
          </p>
        </div>
      `,
    };

    /**
     * Requirement 3: Auto-reply confirmation to the sender
     */
    const senderReply = {
      to: email,
      from: {
        email: fromEmail,
        name: "Vamshi Krishna"
      },
      subject: "Thank you for contacting Vamshi Krishna",
      text: `Hi ${name},\n\nThank you for reaching out through my portfolio. This is to confirm that I've received your message and will get back to you within 24 hours.\n\nBest regards,\nVamshi Krishna`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="padding: 32px 24px; text-align: center; background-color: #f8fafc; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 24px; color: #1e293b;">Message Confirmed</h1>
          </div>
          <div style="padding: 32px 24px;">
            <p style="font-size: 16px; margin-top: 0;">Hi <strong>${name}</strong>,</p>
            <p style="font-size: 15px; line-height: 1.6; color: #475569;">
              Thank you for reaching out through my portfolio. I've successfully received your message and I'm looking forward to connecting with you.
            </p>
            <p style="font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 32px;">
              You can expect a response from me personally within the next <strong>24 hours</strong>.
            </p>
            <div style="border-top: 1px solid #f1f5f9; padding-top: 24px;">
              <p style="margin: 0; color: #94a3b8; font-size: 13px;">Best regards,</p>
              <p style="margin: 4px 0 0 0; font-weight: 700; font-size: 18px; color: #0f172a;">Vamshi Krishna</p>
              <p style="margin: 0; color: #2563eb; font-size: 14px; font-weight: 500;">Full Stack Developer</p>
            </div>
          </div>
          <div style="padding: 24px; text-align: center; background-color: #f8fafc; border-radius: 0 0 12px 12px;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">
              © ${new Date().getFullYear()} Vamshi Krishna. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    // Requirement 5 & 6: Log sending process
    console.log(`\n[${new Date().toLocaleTimeString()}] [...] Sending emails via SendGrid...`);

    // Send both emails
    const responses = await Promise.allSettled([
      sgMail.send(ownerMsg),
      sgMail.send(senderReply)
    ]);

    // Requirement 5: Log results
    const ownerSuccess = responses[0].status === 'fulfilled';
    const senderSuccess = responses[1].status === 'fulfilled';

    if (ownerSuccess) {
      console.log(`[+] Notification sent to owner (ID: ${responses[0].value[0].headers['x-message-id']})`);
    } else {
      console.error(`[-] Owner notification failed: ${responses[0].reason?.message}`);
    }

    if (senderSuccess) {
      console.log(`[+] Auto-reply sent to ${email}`);
    } else {
      console.error(`[-] Auto-reply failed: ${responses[1].reason?.message}`);
    }

    // Requirement 11: Final Response
    if (ownerSuccess) {
      return res.status(200).json({ success: true, message: "Request processed successfully." });
    } else {
      return res.status(500).json({ success: false, error: "Deliverability error. Please check SendGrid status." });
    }

  } catch (error) {
    // Requirement 5: Log SendGrid errors
    const errorMessage = error.response?.body?.errors?.[0]?.message || error.message;
    console.error(`\n[!] CRITICAL ERROR: ${errorMessage}`);
    return res.status(500).json({ success: false, error: "Server error occurred while sending email." });
  }
});

/**
 * Requirement 7: Stability & Start
 */
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n✅ Portfolio Backend Stable & Running`);
  console.log(`   Local Address: http://localhost:${PORT}`);
  console.log(`   Configured From: ${process.env.EMAIL_FROM}`);
  console.log(`   Rate Limiting: 5 messages/15min`);
});

// Graceful Port Error handling
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`\n[!] FAIL: Port ${PORT} is occupied. Please kill the existing process.`);
    process.exit(1);
  }
});
