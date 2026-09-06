import { useState } from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const trimmedPhone = formData.phone.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      newErrors.message = "Please write your message or enquiry.";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus the first erroneous input
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`contact-${firstErrorField}`);
      if (el) el.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/support@urbanvadapav.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          _subject: `New Contact Enquiry from ${formData.name.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });
    } catch (err) {
      console.warn("Form submission fallback:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div>
      {/* HERO */}
      <section className="pt-24 sm:pt-36 pb-8 sm:pb-20 text-center px-4 sm:px-6">
        <p className="uppercase tracking-[5px] text-yellow-400 font-semibold text-xs sm:text-sm">
          Get In Touch
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mt-3 sm:mt-4">
          Contact <span className="text-yellow-400">Us</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed sm:leading-8">
          Have a question, feedback, franchise enquiry or just want to say
          hello? We would love to hear from you.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-12 sm:py-24 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT - CONTACT INFO */}
          <div>
            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Let's Talk
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              We'd Love To Hear From You
            </h2>

            <p className="text-gray-400 leading-relaxed sm:leading-8 mt-4 sm:mt-6 max-w-xl text-sm sm:text-base">
              Whether you have a franchise enquiry, feedback about our food,
              or need help finding an outlet, our team is here to help.
            </p>

            <div className="space-y-4 sm:space-y-5 mt-6 sm:mt-10">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-yellow-400/40 transition">
                <div className="flex items-center justify-between">
                  <p className="text-yellow-400 text-xs sm:text-sm uppercase tracking-widest font-medium">
                    Phone & WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919569058028?text=Hello%20Urban%20Vada%20Pav%20Team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-green-400 bg-green-500/10 border border-green-500/30 px-2.5 py-1 rounded-full hover:bg-green-500/20 transition flex items-center gap-1"
                  >
                    <span>WhatsApp</span> ↗
                  </a>
                </div>
                <a
                  href="tel:+919569058028"
                  className="text-lg sm:text-xl font-semibold mt-1 sm:mt-2 text-white hover:text-yellow-400 transition inline-block"
                >
                  +91 95690 58028
                </a>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-yellow-400/40 transition">
                <p className="text-yellow-400 text-xs sm:text-sm uppercase tracking-widest font-medium">
                  Official Email
                </p>
                <a
                  href="mailto:support@urbanvadapav.com"
                  className="text-lg sm:text-xl font-semibold mt-1 sm:mt-2 text-white hover:text-yellow-400 transition inline-block"
                >
                  support@urbanvadapav.com
                </a>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-yellow-400/40 transition">
                <p className="text-yellow-400 text-xs sm:text-sm uppercase tracking-widest font-medium">
                  Registered Office
                </p>
                <p className="text-base sm:text-lg font-semibold mt-1 sm:mt-2 text-white leading-snug">
                  112, Khalasi Line, Swaroop Nagar,
                  <span className="block text-gray-400 text-sm font-normal mt-0.5">
                    Kanpur, Uttar Pradesh 208002, India
                  </span>
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Social:</span>
                <a
                  href="https://www.instagram.com/urbanvadapav_official?stkn=bGFzZzVvenlmeXY5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-yellow-400 text-gray-300 hover:text-yellow-400 text-xs font-semibold transition"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/UrbanVadaPavFranchise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-yellow-400 text-gray-300 hover:text-yellow-400 text-xs font-semibold transition"
                  aria-label="Facebook Page"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - CONTROLLED FORM */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-4 sm:py-6 animate-fadeIn">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 flex items-center justify-center text-3xl sm:text-4xl font-black"
                  aria-hidden="true"
                >
                  ✓
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Thank You!
                </h3>

                <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed max-w-md mx-auto">
                  Your enquiry has been recorded, <strong className="text-yellow-400">{formData.name}</strong>. Our team will review your message and reach out to you shortly.
                </p>

                <div className="bg-black/60 border border-zinc-800/80 rounded-2xl p-4 my-6 text-left max-w-md mx-auto text-xs sm:text-sm space-y-2 text-gray-400">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5">
                    <span>Contact Email:</span>
                    <span className="text-white font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5">
                    <span>Contact Phone:</span>
                    <span className="text-white font-medium">{formData.phone}</span>
                  </div>
                  <div className="pt-0.5">
                    <span className="block text-gray-500 text-xs">Message Preview:</span>
                    <p className="text-gray-300 italic mt-0.5 line-clamp-2">
                      "{formData.message}"
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919569058028?text=${encodeURIComponent(
                    `*New Website Enquiry - Urban Vada Pav*\n\n` +
                    `👤 *Name:* ${formData.name.trim()}\n` +
                    `📞 *Phone:* ${formData.phone.trim()}\n` +
                    `✉️ *Email:* ${formData.email.trim()}\n` +
                    `💬 *Message:* ${formData.message.trim()}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md mx-auto mb-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-3 sm:py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition duration-200 shadow-lg shadow-green-500/20 text-sm sm:text-base"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.072.043.419-.101.824z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.958-1.399C8.423 21.498 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.697 0-3.272-.518-4.582-1.405l-.328-.221-2.949.832.834-2.871-.242-.349C3.804 14.777 3.25 13.433 3.25 12c0-4.825 3.925-8.75 8.75-8.75s8.75 3.925 8.75 8.75-3.925 8.75-8.75 8.75z" />
                  </svg>
                  <span>Chat on WhatsApp (+91 95690 58028)</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full max-w-md mx-auto bg-zinc-800 hover:bg-zinc-700 text-gray-200 py-3 rounded-xl font-semibold text-xs sm:text-sm transition duration-200 cursor-pointer border border-zinc-700 hover:border-zinc-600 block"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Send Us A Message
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mt-1 mb-6">
                  Fill in your details below and our team will get in touch with you.
                </p>

                <form
                  className="space-y-4 sm:space-y-5"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-gray-300 mb-1.5 sm:mb-2 text-sm sm:text-base font-medium"
                    >
                      Name <span className="text-yellow-400">*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none transition text-sm sm:text-base text-white placeholder-gray-500 focus:ring-2 ${
                        errors.name
                          ? "border-red-500/80 focus:border-red-400 focus:ring-red-400/20"
                          : "border-zinc-700 focus:border-yellow-400 focus:ring-yellow-400/20"
                      }`}
                    />

                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5"
                      >
                        <span aria-hidden="true">⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-gray-300 mb-1.5 sm:mb-2 text-sm sm:text-base font-medium"
                    >
                      Email <span className="text-yellow-400">*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none transition text-sm sm:text-base text-white placeholder-gray-500 focus:ring-2 ${
                        errors.email
                          ? "border-red-500/80 focus:border-red-400 focus:ring-red-400/20"
                          : "border-zinc-700 focus:border-yellow-400 focus:ring-yellow-400/20"
                      }`}
                    />

                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5"
                      >
                        <span aria-hidden="true">⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-gray-300 mb-1.5 sm:mb-2 text-sm sm:text-base font-medium"
                    >
                      Phone Number <span className="text-yellow-400">*</span>
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number (e.g. 98765 43210)"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                      className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none transition text-sm sm:text-base text-white placeholder-gray-500 focus:ring-2 ${
                        errors.phone
                          ? "border-red-500/80 focus:border-red-400 focus:ring-red-400/20"
                          : "border-zinc-700 focus:border-yellow-400 focus:ring-yellow-400/20"
                      }`}
                    />

                    {errors.phone && (
                      <p
                        id="contact-phone-error"
                        className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5"
                      >
                        <span aria-hidden="true">⚠</span> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-gray-300 mb-1.5 sm:mb-2 text-sm sm:text-base font-medium"
                    >
                      Message <span className="text-yellow-400">*</span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message or inquiry..."
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none transition resize-none text-sm sm:text-base text-white placeholder-gray-500 focus:ring-2 ${
                        errors.message
                          ? "border-red-500/80 focus:border-red-400 focus:ring-red-400/20"
                          : "border-zinc-700 focus:border-yellow-400 focus:ring-yellow-400/20"
                      }`}
                    />

                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5"
                      >
                        <span aria-hidden="true">⚠</span> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-black py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-300 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting Enquiry..." : "Send Message →"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FRANCHISE CTA */}
      <section className="py-12 sm:py-24 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black">
            Interested In A Franchise?
          </h2>

          <p className="mt-3 sm:mt-5 text-base sm:text-lg">
            Take the next step and start your Urban Vada Pav journey.
          </p>

          <Link
            to="/franchise/apply"
            className="mt-6 sm:mt-8 bg-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition text-sm sm:text-base inline-block"
          >
            Apply For Franchise →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;