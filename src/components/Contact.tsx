import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xrerqbba", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("sent");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's Build Something Together</h3>
        <p className="contact-sub">
          Open to AI Engineering roles and real-world AI product collaborations.
        </p>

        <div className="contact-cta-row">
          <a href="mailto:shahharshit777@gmail.com" className="contact-cta-primary" data-cursor="disable">
            Send me an email <MdArrowOutward />
          </a>
          <a href="/Akash_Malhotra.pdf" target="_blank" rel="noreferrer" className="contact-cta-secondary" data-cursor="disable">
            Download Resume <MdArrowOutward />
          </a>
        </div>

        <div className="contact-body">
          <div className="contact-form-wrap">
            <p className="contact-form-label">Or send a message directly</p>
            {formState === "sent" ? (
              <div className="contact-form-success">
                Message sent — I'll get back to you soon.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                  <input type="text" name="name" placeholder="Your name" required className="contact-input" data-cursor="disable" />
                  <input type="email" name="email" placeholder="Your email" required className="contact-input" data-cursor="disable" />
                </div>
                <textarea name="message" placeholder="What are you building?" required rows={4} className="contact-input contact-textarea" data-cursor="disable" />
                <button type="submit" className="contact-form-submit" disabled={formState === "sending"} data-cursor="disable">
                  {formState === "sending" ? "Sending…" : "Send Message"}
                </button>
                {formState === "error" && (
                  <p className="contact-form-error">Something went wrong. Try emailing directly.</p>
                )}
              </form>
            )}
          </div>

          <div className="contact-flex">
            <div className="contact-box">
              <h4>Education</h4>
              <p>B.Tech Biomedical Engineering, MIT ADT University, Pune — 2021–2025</p>
              <h4>Publication</h4>
              <p>
                <a href="https://doi.org/10.1016/j.esmoop.2025.105588" target="_blank" rel="noreferrer" data-cursor="disable">
                  Bhosale, B., Shah, H., et al. (2025). Profiling of PD-L1 and HER2 overexpression on cancer cells using AI-based automation. ESMO Open, 10(3), 105588.
                </a>
              </p>
            </div>
            <div className="contact-box">
              <h4>Connect</h4>
              <a href="https://github.com/harshit21-shah" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                GitHub <MdArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/harshit-shah-1b3416270/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                LinkedIn <MdArrowOutward />
              </a>
              <a href="mailto:shahharshit777@gmail.com" data-cursor="disable" className="contact-social">
                Email <MdArrowOutward />
              </a>
            </div>
            <div className="contact-box">
              <h2>Designed and Developed <br /> by <span>Harshit Shah</span></h2>
              <h5><MdCopyright /> 2026</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
