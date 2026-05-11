# ⚡ EmailJS Quick Setup (5 Minutes)

## 🎯 What You'll Get

When someone fills out your contact form, you'll receive an email like this:

```
From: EmailJS <noreply@emailjs.com>
To: your-email@gmail.com
Subject: New Contact from John Doe

From: John Doe
Email: john@example.com
Subject: Project Inquiry

Message:
Hi Asif, I'd like to hire you for a React project...

---
Sent from your portfolio website
```

---

## 📝 Step-by-Step Setup

### Step 1: Create EmailJS Account (1 minute)

1. Go to: **https://www.emailjs.com**
2. Click **"Sign Up"** (top right)
3. Choose **"Sign up with Google"** (easiest)
4. Verify your email

✅ **Done!** You now have an EmailJS account.

---

### Step 2: Add Email Service (2 minutes)

1. In EmailJS dashboard, click **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with your Gmail
6. Allow EmailJS permissions
7. **Copy your Service ID** (looks like: `service_abc1234`)

📋 **Save this:** `service_abc1234`

---

### Step 3: Create Email Template (1 minute)

1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. **Delete everything** and paste this:

```
Subject: New Contact from {{from_name}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {{from_name}}
📧 Email: {{from_email}}
📝 Subject: {{subject}}

💬 Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{from_email}}
Sent from your portfolio
```

4. Click **"Save"**
5. **Copy your Template ID** (looks like: `template_xyz5678`)

📋 **Save this:** `template_xyz5678`

---

### Step 4: Get Public Key (30 seconds)

1. Click **"Account"** (left sidebar)
2. Scroll to **"General"** section
3. **Copy your Public Key** (looks like: `user_def9012`)

📋 **Save this:** `user_def9012`

---

### Step 5: Update Your Code (1 minute)

1. Open your project in VS Code
2. Open file: `src/components/Contact.js`
3. Find **line 30-40** (the EmailJS section)
4. Replace with your credentials:

**BEFORE:**
```javascript
emailjs
  .send(
    'service_xxxxxxx', // Your EmailJS service ID
    'template_xxxxxxx', // Your EmailJS template ID
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    'YOUR_PUBLIC_KEY' // Your EmailJS public key
  )
```

**AFTER (with your actual IDs):**
```javascript
emailjs
  .send(
    'service_abc1234', // ← Your Service ID here
    'template_xyz5678', // ← Your Template ID here
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    'user_def9012' // ← Your Public Key here
  )
```

5. **Save the file** (Ctrl+S)

---

### Step 6: Test It! (30 seconds)

1. Your dev server should auto-reload
2. Go to: **http://localhost:3000**
3. Scroll to **Contact section**
4. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Testing
   - Message: This is a test message
5. Click **"Send Message"**
6. Check your email inbox!

✅ **You should receive the email within seconds!**

---

## 🎉 That's It!

Your contact form is now fully functional!

### What Happens Now?

1. Visitors fill out your contact form
2. EmailJS sends the data to your email
3. You receive it in your inbox
4. You can reply directly to their email

---

## 📊 Your Credentials Summary

Keep these safe (don't share publicly):

```
Service ID:  service_abc1234
Template ID: template_xyz5678
Public Key:  user_def9012
```

---

## 🔒 Security Note

These credentials are **safe to use in frontend code** because:
- They're public keys (not secret)
- EmailJS has rate limiting
- They can only send emails, not read them
- You can regenerate them anytime

---

## 🆘 Troubleshooting

### "Failed to send message"

**Check:**
1. Are all 3 IDs correct?
2. Is your Gmail service connected?
3. Check browser console for errors
4. Try testing in EmailJS dashboard first

### Not receiving emails?

**Check:**
1. Spam folder
2. Gmail promotions tab
3. EmailJS service is active
4. Template variables are correct

### Form not submitting?

**Check:**
1. Browser console for errors
2. Network tab shows the request
3. Dev server is running
4. File was saved after changes

---

## 🎯 Quick Test in EmailJS Dashboard

Before testing on your site:

1. Go to **Email Templates**
2. Click your template
3. Click **"Test It"** button
4. Fill in test values
5. Click **"Send Test Email"**
6. Check your inbox

If this works, your setup is correct!

---

## 📧 Free Tier Limits

EmailJS Free Plan:
- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ All features included
- ✅ No credit card required

**Perfect for a portfolio!**

---

## 🚀 Alternative: Environment Variables (Optional)

For extra security, use environment variables:

1. Create `.env` file in project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc1234
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz5678
REACT_APP_EMAILJS_PUBLIC_KEY=user_def9012
```

2. Update Contact.js:

```javascript
emailjs
  .send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  )
```

3. Add `.env` to `.gitignore` (already done)

4. Restart dev server: `npm start`

---

## ✅ Checklist

- [ ] Created EmailJS account
- [ ] Added Gmail service
- [ ] Created email template
- [ ] Got all 3 credentials
- [ ] Updated Contact.js
- [ ] Tested the form
- [ ] Received test email

---

## 🎊 Success!

Your contact form is now live and working!

Every message sent through your portfolio will arrive in your email inbox.

**No backend, no database, no hassle!**

---

## 📚 Need More Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Video Tutorial](https://www.youtube.com/watch?v=dgcYOm8n8ME)
- Check `CONTACT_FORM_SETUP.md` for other options

---

**Happy coding! 🚀**
