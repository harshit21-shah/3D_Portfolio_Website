import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import "./styles/Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrerqbba");

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
            {state.succeeded ? (
              <div className="contact-form-success">
                Message sent — I'll get back to you soon.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                  <input type="text" name="name" placeholder="Your name" required className="contact-input" data-cursor="disable" />
                  <div style={{ flex: 1 }}>
                    <input type="email" name="email" placeholder="Your email" required className="contact-input" style={{ width: "100%", boxSizing: "border-box" }} data-cursor="disable" />
                    <ValidationError field="email" prefix="Email" errors={state.errors} className="contact-form-error" />
                  </div>
                </div>
                <textarea name="message" placeholder="What are you building?" required rows={4} className="contact-input contact-textarea" data-cursor="disable" />
                <ValidationError field="message" prefix="Message" errors={state.errors} className="contact-form-error" />
                <button type="submit" className="contact-form-submit" disabled={state.submitting} data-cursor="disable">
                  {state.submitting ? "Sending…" : "Send Message"}
                </button>
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
