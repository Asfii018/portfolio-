# 📧 Contact Form Setup Guide

## Overview

Your contact form can save/send data in 3 ways:

1. **EmailJS** - Sends to your email (Recommended - No backend)
2. **Backend API** - Save to database (Node.js/Express)
3. **Third-party Services** - Formspree, Netlify Forms, etc.

---

## ✅ Option 1: EmailJS (Recommended - Easiest)

**Best for:** Simple portfolios, no backend needed
**Cost:** Free (200 emails/month)
**Setup Time:** 5 minutes

### Step-by-Step Setup:

#### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" (free)
3. Verify your email

#### 2. Add Email Service

1. Go to **Email Services** tab
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email account
5. Copy your **Service ID** (e.g., `service_abc123`)

#### 3. Create Email Template

1. Go to **Email Templates** tab
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save and copy your **Template ID** (e.g., `template_xyz789`)

#### 4. Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_abc123xyz`)

#### 5. Update Your Code

Open `src/components/Contact.js` and update line 30-40:

```javascript
emailjs
  .send(
    'service_abc123',      // Your Service ID
    'template_xyz789',     // Your Template ID
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    'user_abc123xyz'       // Your Public Key
  )
```

#### 6. Test It!

1. Save the file
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox!

### ✅ Done! You'll receive all form submissions via email.

---

## 🔧 Option 2: Backend API (Advanced)

**Best for:** Saving to database, advanced features
**Cost:** Free (self-hosted) or paid hosting
**Setup Time:** 30-60 minutes

### Quick Backend Setup (Node.js + Express + MongoDB)

#### 1. Create Backend Folder

```bash
mkdir portfolio-backend
cd portfolio-backend
npm init -y
```

#### 2. Install Dependencies

```bash
npm install express mongoose cors dotenv nodemailer
```

#### 3. Create `server.js`

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to database
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

#### 4. Create `.env` file

```env
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=5000
```

#### 5. Update Frontend (`Contact.js`)

Replace the EmailJS code with:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }

  setTimeout(() => setStatus(''), 5000);
};
```

#### 6. Run Backend

```bash
node server.js
```

---

## 🌐 Option 3: Third-Party Services (No Code)

### A. Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Create free account
3. Create new form
4. Get your form endpoint

Update `Contact.js`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }

  setTimeout(() => setStatus(''), 5000);
};
```

### B. Netlify Forms (If deploying to Netlify)

1. Add `netlify` attribute to form:

```javascript
<form onSubmit={handleSubmit} className="space-y-6" name="contact" netlify>
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form fields */}
</form>
```

2. Deploy to Netlify
3. View submissions in Netlify dashboard

### C. Google Sheets (Via Apps Script)

1. Create Google Sheet
2. Tools → Script Editor
3. Add this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.subject,
    data.message
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy as web app
5. Use the URL in your fetch request

---

## 📊 Comparison Table

| Feature | EmailJS | Backend API | Formspree | Netlify Forms |
|---------|---------|-------------|-----------|---------------|
| **Setup Time** | 5 min | 60 min | 5 min | 2 min |
| **Cost** | Free | Free/Paid | Free/Paid | Free |
| **Database** | ❌ | ✅ | ✅ | ✅ |
| **Email Notifications** | ✅ | ✅ | ✅ | ✅ |
| **Backend Required** | ❌ | ✅ | ❌ | ❌ |
| **Customization** | Medium | High | Low | Low |
| **Best For** | Simple portfolios | Complex apps | Quick setup | Netlify users |

---

## 🎯 Recommendation

**For your portfolio, I recommend EmailJS because:**

✅ No backend needed  
✅ Free and easy to set up  
✅ Reliable email delivery  
✅ Perfect for portfolios  
✅ 5-minute setup  

---

## 🚀 Quick Start with EmailJS

1. **Sign up:** [emailjs.com](https://www.emailjs.com)
2. **Add Gmail service**
3. **Create template**
4. **Copy credentials**
5. **Update Contact.js** (lines 30-40)
6. **Test the form**

That's it! You'll receive all messages in your email inbox.

---

## 🔒 Security Tips

1. **Never commit API keys** to GitHub
2. **Use environment variables** for sensitive data
3. **Add rate limiting** to prevent spam
4. **Validate input** on both frontend and backend
5. **Use HTTPS** in production

---

## 📧 Email Template Example

```
Subject: 🚀 New Portfolio Contact from {{from_name}}

Hi Asif,

You have a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {{from_name}}
📧 Email: {{from_email}}
📝 Subject: {{subject}}

💬 Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{from_email}}

Sent from: asifnazeer.liveblog365.com
Date: {{sent_date}}
```

---

## 🆘 Troubleshooting

### EmailJS not working?

1. Check credentials are correct
2. Verify email service is connected
3. Check browser console for errors
4. Test with EmailJS dashboard first

### Backend not receiving data?

1. Check CORS is enabled
2. Verify MongoDB connection
3. Check network tab in browser
4. Test API with Postman first

### Form not submitting?

1. Check browser console
2. Verify form validation
3. Test network connection
4. Check status state updates

---

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Formspree Docs](https://help.formspree.io/)
- [Netlify Forms Guide](https://docs.netlify.com/forms/setup/)
- [Node.js Email Tutorial](https://nodemailer.com/)

---

## ✅ Next Steps

1. Choose your preferred method (EmailJS recommended)
2. Follow the setup guide above
3. Test the form thoroughly
4. Deploy your portfolio
5. Start receiving messages!

---

**Need help? Check the troubleshooting section or create an issue on GitHub.**

Good luck! 🚀
