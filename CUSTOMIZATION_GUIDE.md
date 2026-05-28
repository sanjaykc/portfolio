# Customization Guide

Quick guide to personalize your portfolio with your actual information.

## Step 1: Update Contact Links

Open [`index.html`](index.html) and find the contact section (around line 380). Replace the placeholder URLs with your actual information:

### LinkedIn
```html
<!-- FIND THIS: -->
<a class="contact-link" href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME" ...>

<!-- REPLACE WITH: -->
<a class="contact-link" href="https://www.linkedin.com/in/your-actual-username" ...>
```

### GitHub
```html
<!-- FIND THIS: -->
<a class="contact-link" href="https://github.com/YOUR_GITHUB_USERNAME" ...>

<!-- REPLACE WITH: -->
<a class="contact-link" href="https://github.com/your-actual-username" ...>
```

### Email
```html
<!-- FIND THIS: -->
<a class="contact-link" href="mailto:your.email@example.com" ...>

<!-- REPLACE WITH: -->
<a class="contact-link" href="mailto:your.actual.email@gmail.com" ...>
```

## Step 2: Update Personal Information

### Hero Section (Line ~6)
```html
<!-- Update page title -->
<title>Your Name | Technical Lead Portfolio</title>

<!-- Update meta description -->
<meta name="description" content="Professional portfolio of Your Name, Technical Lead...">
```

### Brand Name (Line ~731)
```html
<!-- FIND THIS: -->
<span class="brand-title">Professional Portfolio</span>

<!-- REPLACE WITH: -->
<span class="brand-title">Your Name</span>
```

### Hero Title (Line ~749)
Update the main heading with your personal pitch or keep it generic.

## Step 3: Update Work Experience

Find the experience section (around line 260) and update:
- Company names (if you want to reveal them)
- Specific dates
- Project details
- Achievements

## Step 4: Update Education

Find the education section (around line 340) and update:
- University names
- Degrees
- Years
- Certifications

## Step 5: Customize Colors (Optional)

Open [`css/styles.css`](css/styles.css) and modify the color variables (line 15-27):

```css
:root {
    --accent: #5eead4;        /* Change primary accent color */
    --accent-strong: #38bdf8;  /* Change secondary accent */
    --accent-warm: #f59e0b;    /* Change warm accent */
    /* ... other colors */
}
```

## Step 6: Test Your Changes

1. Open `index.html` in your browser
2. Click all the contact links to verify they work
3. Test on mobile devices
4. Check that all sections display correctly

## Important Notes

### Best Practices
- ✅ LinkedIn and GitHub links are public and safe to share
- ✅ Use a professional email address
- ✅ Keep content focused on achievements and impact
- ✅ Highlight measurable results and technical expertise

### Content Guidelines
- Emphasize your technical skills and leadership experience
- Focus on technologies, methodologies, and outcomes
- Showcase your problem-solving abilities
- Demonstrate your value to potential employers

### What to Include
- Your name and professional title
- Public social media links
- Detailed work experience and achievements
- Education and certifications
- Technical skills and expertise
- Professional accomplishments

## Quick Checklist

Before deploying, verify:
- [ ] All contact links work correctly
- [ ] LinkedIn URL is correct
- [ ] GitHub URL is correct
- [ ] Email address is correct
- [ ] Personal name is updated (if desired)
- [ ] No sensitive information exposed
- [ ] All sections reviewed and updated
- [ ] Tested on multiple devices
- [ ] No broken links

## Example: Complete Contact Section

Here's how your contact section should look after customization:

```html
<div class="contact-links">
    <a class="contact-link" href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
        <div>
            <strong>Professional Network</strong>
            <span>Connect via LinkedIn</span>
        </div>
        <span>→</span>
    </a>

    <a class="contact-link" href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
        <div>
            <strong>Code Repositories</strong>
            <span>View projects on GitHub</span>
        </div>
        <span>→</span>
    </a>

    <a class="contact-link" href="mailto:john.doe@example.com">
        <div>
            <strong>Get in Touch</strong>
            <span>Send me an email</span>
        </div>
        <span>→</span>
    </a>
</div>
```

## Need Help?

- Review [`README.md`](README.md) for project overview
- Check [`SECURITY_AUDIT.md`](SECURITY_AUDIT.md) for security guidelines
- See [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md) for deployment steps

---

**Remember**: Always test your changes locally before deploying!