# Design Engineer Note

**Name:** Substrata
**Sector:** Regulated Utilities (Thames Water)
**Feeling:** "Absolute, audited control over our hidden liabilities without data leakage."

**Design Decisions:**
1. **Austere, High-Contrast Aesthetics:** I rejected modern SaaS trends (gradients, soft shadows, rounded corners) in favor of deep navy, slate gray, and rigid 1px borders. This signals that Substrata is a secure, enterprise-grade vault rather than a lightweight consumer app.
2. **"Show, Don't Tell" UI Mockup:** Instead of abstract product illustrations, I placed a highly realistic UI mockup in the center of the page. It demonstrates a plain-English query ("How many pollution incidents...") returning a cited answer, directly addressing the CRO's need for actionable, verifiable intelligence.

**Cut for time:**
With another hour, I would implement dynamic micro-animations (e.g., a simulated typing effect in the search bar and a cryptographic "verifying sources" loading state) to make the security aspect feel active rather than static.

**AI Usage:**
I used the Google Stitch tool to generate the initial structural design and layout ideas by prompting for a "highly secure, austere B2B dashboard for a regulated sector." I then intervened by hand to build the final Next.js + Tailwind implementation, refining the typography, contrast ratios, and adding the interactive Lucide icons to lock in the "secure terminal" feel.
