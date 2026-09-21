// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="contact-section">
      <p className="section-label">Let&apos;s connect</p>
      <div className="contact-content">
        <h2>Have a good<br /><em>idea?</em></h2>
        <div className="contact-card">
          <div className="contact-card-heading">
            <span className="contact-card-label">Direct contact</span>
            <span className="contact-card-mark" aria-hidden="true">RM</span>
          </div>
          <p className="contact-name">Rooney Mwathani</p>
          <div className="contact-details">
            <a className="contact-detail" href="https://wa.me/254759746625" target="_blank" rel="noreferrer">
              <span className="whatsapp-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M20.5 3.5A11.9 11.9 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L.03 24l6.28-1.65a11.87 11.87 0 0 0 5.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.23-6.17-3.44-8.41ZM12.05 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.89 9.89 0 0 1-1.52-5.28c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.14 1.03 7.01 2.91a9.83 9.83 0 0 1 2.9 7c0 5.45-4.45 9.89-9.94 9.89Zm5.43-7.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z" />
                </svg>
              </span>
              <span><small>WhatsApp</small><strong>+254 759 746 625</strong></span>
            </a>
            <a className="contact-detail" href="mailto:mwatahnirooney@gmail.com">
              <span className="email-icon" aria-hidden="true">@</span>
              <span><small>Email</small><strong>mwatahnirooney@gmail.com</strong></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}