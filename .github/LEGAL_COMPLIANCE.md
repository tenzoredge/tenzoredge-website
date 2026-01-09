# Tenzor Edge – Legal & Compliance Implementation Prompt for Copilot

## Project Context
You are working inside a production-grade web application for **Tenzor Edge**, a company offering:
- Consulting & professional services (current)
- Subscription-based consulting (future)
- SaaS products (future)

The application stack is:
- Vite
- React 18
- TypeScript
- Tailwind CSS

The goal is to implement **India DPDP Act 2023/2025 compliance** and meet **Razorpay & PhonePe payment gateway requirements**.

You must write **clean, readable, production-quality code**, avoiding placeholders unless explicitly instructed.

---

## GLOBAL RULES
1. Do NOT pre-check any consent checkbox
2. All consent must be explicit and revocable
3. All legal pages must be publicly accessible without login
4. All policies must be linked in the footer
5. Code must be reusable and future-proof
6. Do NOT store sensitive payment data
7. Assume routing is already configured

---

## PART 1: COOKIE CONSENT SYSTEM

### Objective
Implement a cookie consent banner compliant with DPDP Act requirements.

### Functional Requirements
- Show banner on first visit only
- Provide Accept and Reject options
- Store consent decision in localStorage
- Store timestamp of consent
- Allow future versioning of consent
- Do not block essential cookies

### Storage Format
Key: `tenzoredge_cookie_consent_v1`
Value:
```json
{
  "accepted": true | false,
  "timestamp": "ISO_STRING"
}
```

### UI Requirements
- Fixed bottom position
- Responsive
- Clear explanation of cookie usage
- Tailwind-only styling

---

## PART 2: LEGAL PAGES

### Pages to Create
Create the following pages under `/pages/legal/`:

1. Privacy Policy
2. Terms & Conditions
3. Cookie Policy
4. Refund & Cancellation Policy
5. Shipping / Delivery Policy
6. Subscription Policy

Each page must:
- Use semantic HTML
- Be readable and accessible
- Contain headings and spacing
- Include company name: **Tenzor Edge**
- Include support email: **support@tenzoredge.com**

---

## PRIVACY POLICY – REQUIRED CONTENT

Must explicitly state:
- Data collected (name, email, phone, business info, usage data)
- Purpose of data collection
- Consent mechanism
- Data retention principle
- Third-party payment processors
- User rights under DPDP Act
- Data deletion request process

### Mandatory Section
Grievance Officer:
- Title: Grievance Officer / Compliance Officer
- Email: support@tenzoredge.com
- Response timeline: 7 business days

---

## TERMS & CONDITIONS – REQUIRED CONTENT

Must include:
- Eligibility (18+)
- Nature of services
- Intellectual property ownership
- Acceptable use
- Limitation of liability
- Governing law: India
- Jurisdiction: India

---

## REFUND & CANCELLATION POLICY

Must clearly state:
- Consulting services are non-refundable once delivered
- Refund requests must be emailed
- Processing timeline: 5–7 business days
- Refund method: original payment method only

This page is mandatory for payment gateway approval.

---

## SHIPPING / DELIVERY POLICY

Even though services are digital, this page is mandatory.

Must state:
- All services are delivered digitally
- Access via email / scheduled calls
- Delivery timelines communicated individually
- Support contact for delivery issues

---

## SUBSCRIPTION POLICY (FUTURE-READY)

Must include:
- Billing cycles (monthly / yearly)
- Explicit opt-in for auto-renewal
- Cancellation before renewal
- No refunds after billing cycle starts (unless stated)
- Notice before renewal

---

## PART 3: FOOTER IMPLEMENTATION

### Footer Must Include Links To:
- Privacy Policy
- Terms & Conditions
- Refund Policy
- Shipping Policy
- Cookie Policy
- Subscription Policy

Footer must appear on all pages.

---

## PART 4: CHECKOUT CONSENT REQUIREMENT

Before initiating payment:
- Require user to check a consent checkbox
- Text must link to Terms & Privacy Policy
- Checkbox must be mandatory

This is REQUIRED for Razorpay & PhonePe compliance.

---

## PART 5: DPDP DATA RIGHTS

Add the following statement in Privacy Policy:

"Users may request access, correction, or deletion of personal data by emailing support@tenzoredge.com with subject 'DPDP Request'."

---

## NON-GOALS
- Do not implement backend storage
- Do not integrate analytics
- Do not add payment gateway SDKs
- Do not add cookies beyond consent logic

---

## OUTPUT EXPECTATION

Copilot should generate:
- Type-safe React components
- Clean Tailwind layouts
- Minimal but legally complete content
- No lorem ipsum
- No TODO comments

This implementation must be production-ready and audit-safe.

---

END OF INSTRUCTIONS
