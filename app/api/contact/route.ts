import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key is not configured')
      // Fallback: just log the submission
      console.log('Contact form submission (SendGrid not configured):', {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString(),
      })
      
      return NextResponse.json(
        {
          success: true,
          message: 'Your message has been received. We will get back to you soon!',
        },
        { status: 200 }
      )
    }

    // Send email via SendGrid
    const msg = {
      to: 'info@griffin-finance.com', // Your company email
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@griffin-finance.com', // Verified sender email in SendGrid
      replyTo: email, // Allow replying directly to the sender
      subject: `Contact Form: ${subject}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Griffin Finance Limited contact form.
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #A2783A; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
              .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #A2783A; }
              .message-box { background-color: white; padding: 15px; border-left: 4px solid #A2783A; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span> ${name}
                </div>
                <div class="field">
                  <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
                </div>
                <div class="field">
                  <span class="label">Phone:</span> ${phone || 'Not provided'}
                </div>
                <div class="field">
                  <span class="label">Subject:</span> ${subject}
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p style="font-size: 12px; color: #666;">
                  This message was sent from the Griffin Finance Limited contact form.<br>
                  You can reply directly to this email to respond to ${name}.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    await sgMail.send(msg)

    // Also send a confirmation email to the user (optional)
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      const confirmationMsg = {
        to: email,
        from: process.env.SENDGRID_FROM_EMAIL || 'noreply@griffin-finance.com',
        subject: 'Thank you for contacting Griffin Finance Limited',
        text: `
Dear ${name},

Thank you for contacting Griffin Finance Limited. We have received your message and will get back to you as soon as possible.

Your message:
Subject: ${subject}
${message}

Best regards,
Griffin Finance Limited
        `,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #A2783A; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>Thank You for Contacting Us</h2>
                </div>
                <div class="content">
                  <p>Dear ${name},</p>
                  <p>Thank you for contacting Griffin Finance Limited. We have received your message and will get back to you as soon as possible.</p>
                  <p><strong>Your message:</strong><br>
                  Subject: ${subject}<br>
                  ${message.replace(/\n/g, '<br>')}</p>
                  <p>Best regards,<br><strong>Griffin Finance Limited</strong></p>
                </div>
              </div>
            </body>
          </html>
        `,
      }

      try {
        await sgMail.send(confirmationMsg)
      } catch (confirmationError) {
        // Log but don't fail the main request if confirmation email fails
        console.error('Failed to send confirmation email:', confirmationError)
      }
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    
    // Provide more specific error messages
    let errorMessage = 'An error occurred while sending your message. Please try again later.'
    
    if (error.response) {
      console.error('SendGrid API error:', error.response.body)
      errorMessage = 'There was an issue sending your email. Please try again or contact us directly at info@griffin-finance.com'
    }

    return NextResponse.json(
      {
        error: errorMessage,
      },
      { status: 500 }
    )
  }
}
