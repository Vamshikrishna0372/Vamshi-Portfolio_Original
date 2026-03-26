# Portfolio Contact Form Backend Implementation

This implementation provides a production-ready Node.js/Express server that integrates with SendGrid to handle portfolio contact form submissions.

## Backend Architecture

- **Framework**: Express.js
- **Email Service**: SendGrid (@sendgrid/mail)
- **Security**: CORS enabled, Environment variables via dotenv

## Files Created

1.  `server.js`: The main Express server logic using SendGrid.
2.  `.env`: Environment variable configuration file.

## Setup Instructions

### 1. Install Dependencies
Run the following command in the project root:
```bash
npm install express cors dotenv @sendgrid/mail
```

### 2. Configure Environment Variables
Open the `.env` file and fill in your SendGrid credentials:
- `SENDGRID_API_KEY`: Your SendGrid API Key.
- `EMAIL_FROM`: The email address you verified in SendGrid as a "Single Sender".
- `PORT`: Default is 5000.

### 3. Run the Server
Start the backend server using Node.js:
```bash
node server.js
```

## API Documentation

### POST `/api/contact`
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I would like to collab!"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response (500/400):**
```json
{
  "success": false,
  "message": "Failed to send email"
}
```

## React Frontend Integration

Use the following `fetch` code in your React component to send form data to the backend:

```javascript
const handleSubmit = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message: ' + data.message);
    }
  } catch (error) {
    console.error('Error sending message:', error);
    alert('An error occurred. Please try again later.');
  }
};
```

## Deployment Notes
- **Render/Railway**: This backend is ready to be deployed. Ensure you set the `GMAIL_APP_PASSWORD` and `EMAIL_FROM` in the deployment platform's environment variable settings.
- **Security**: Never commit your real `.env` file to GitHub. Use the deployment platform's dashboard to manage sensitive credentials.
- **Verification**: If using Gmail, ensure you have 2-Factor Authentication enabled on your Google account to generate an App Password.
