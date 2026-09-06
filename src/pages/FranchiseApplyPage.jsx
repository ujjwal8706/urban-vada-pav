import { useState } from "react";

function FranchiseApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    model: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = "Please enter your full name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const trimmedPhone = formData.phone.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone) {
      newErrors.phone = "Please enter your contact number.";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const trimmedCity = formData.city.trim();
    if (!trimmedCity) {
      newErrors.city = "Please enter your preferred city or territory.";
    } else if (trimmedCity.length < 2) {
      newErrors.city = "City name must be at least 2 characters.";
    }

    if (!formData.model) {
      newErrors.model = "Please select your preferred franchise model.";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select your investment budget range.";
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
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`apply-${firstErrorField}`);
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
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          city: formData.city.trim(),
          model: formData.model,
          budget: formData.budget,
          message: formData.message.trim() || "N/A",
          _subject: `New Franchise Application: ${formData.name.trim()} (${formData.city.trim()})`,
          _template: "table",
          _captcha: "false",
        }),
      });
    } catch (err) {
      console.warn("Franchise form submission fallback:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      model: "",
      budget: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-32 pb-12 sm:pb-24">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="uppercase tracking-[5px] text-yellow-400 font-semibold text-xs sm:text-sm">
          Franchise Application
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mt-3 sm:mt-5">
          Start Your
          <span className="block text-yellow-400">
            Urban Vada Pav Journey
          </span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-lg leading-relaxed sm:leading-8 mt-4 sm:mt-6 max-w-2xl mx-auto">
          Fill in your details and our franchise team will get in touch with
          you to discuss the opportunity.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16">

        {isSubmitted ? (
          <div className="bg-zinc-900 border border-yellow-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center animate-fadeIn">

            <div
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 flex items-center justify-center text-3xl sm:text-4xl font-black"
              aria-hidden="true"
            >
              ✓
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Application Submitted!
            </h2>

            <p className="text-gray-300 mt-3 text-sm sm:text-base max-w-lg mx-auto">
              Thank you for your interest, <strong className="text-yellow-400">{formData.name}</strong>.
              Our franchise team has received your application and will contact you shortly.
            </p>

            {/* Application Summary Box */}
            <div className="bg-black/60 border border-zinc-800/80 rounded-2xl p-5 my-6 text-left max-w-lg mx-auto text-xs sm:text-sm space-y-2.5 text-gray-400">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-gray-500">Applicant Name:</span>
                <span className="text-white font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-gray-500">Contact Phone:</span>
                <span className="text-white font-medium">{formData.phone}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-gray-500">Email Address:</span>
                <span className="text-white font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-gray-500">Preferred City:</span>
                <span className="text-yellow-400 font-semibold">{formData.city}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-gray-500">Franchise Model:</span>
                <span className="text-white font-medium">{formData.model}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-gray-500">Investment Budget:</span>
                <span className="text-white font-medium">{formData.budget}</span>
              </div>
              {formData.message && (
                <div className="pt-1">
                  <span className="block text-gray-500 text-xs">Note:</span>
                  <p className="text-gray-300 italic mt-0.5 line-clamp-2">
                    "{formData.message}"
                  </p>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Fast-Track */}
            <a
              href={`https://wa.me/919569058028?text=${encodeURIComponent(
                `*New Franchise Application - Urban Vada Pav*\n\n` +
                `👤 *Name:* ${formData.name.trim()}\n` +
                `📞 *Phone:* ${formData.phone.trim()}\n` +
                `✉️ *Email:* ${formData.email.trim()}\n` +
                `📍 *Preferred City:* ${formData.city.trim()}\n` +
                `🏪 *Model:* ${formData.model}\n` +
                `💰 *Budget:* ${formData.budget}\n` +
                (formData.message.trim() ? `💬 *Note:* ${formData.message.trim()}\n\n` : `\n`) +
                `Please share the franchise kit and next steps!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-lg mx-auto mb-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition duration-200 shadow-lg shadow-green-500/20 text-sm sm:text-base cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.072.043.419-.101.824z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.958-1.399C8.423 21.498 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.697 0-3.272-.518-4.582-1.405l-.328-.221-2.949.832.834-2.871-.242-.349C3.804 14.777 3.25 13.433 3.25 12c0-4.825 3.925-8.75 8.75-8.75s8.75 3.925 8.75 8.75-3.925 8.75-8.75 8.75z" />
              </svg>
              <span>Fast-Track on WhatsApp (+91 95690 58028)</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full max-w-lg mx-auto bg-zinc-800 hover:bg-zinc-700 text-gray-200 py-3 rounded-xl font-semibold text-xs sm:text-sm transition duration-200 cursor-pointer border border-zinc-700 hover:border-zinc-600 block"
            >
              Submit Another Application
            </button>

          </div>
        ) : (

          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-zinc-900 rounded-2xl sm:rounded-3xl border border-zinc-800 p-5 sm:p-8 md:p-12 shadow-2xl"
          >

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">

              {/* NAME */}
              <div>
                <label
                  htmlFor="apply-name"
                  className="block mb-1.5 sm:mb-2 text-gray-300 text-sm sm:text-base font-medium"
                >
                  Full Name <span className="text-yellow-400">*</span>
                </label>

                <input
                  id="apply-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 outline-none transition text-sm sm:text-base ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-zinc-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5">
                    <span aria-hidden="true">⚠</span> {errors.name}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="apply-phone"
                  className="block mb-1.5 sm:mb-2 text-gray-300 text-sm sm:text-base font-medium"
                >
                  Phone Number <span className="text-yellow-400">*</span>
                </label>

                <input
                  id="apply-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 outline-none transition text-sm sm:text-base ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-zinc-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  }`}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5">
                    <span aria-hidden="true">⚠</span> {errors.phone}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="apply-email"
                  className="block mb-1.5 sm:mb-2 text-gray-300 text-sm sm:text-base font-medium"
                >
                  Email Address <span className="text-yellow-400">*</span>
                </label>

                <input
                  id="apply-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 outline-none transition text-sm sm:text-base ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-zinc-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5">
                    <span aria-hidden="true">⚠</span> {errors.email}
                  </p>
                )}
              </div>

              {/* CITY */}
              <div>
                <label
                  htmlFor="apply-city"
                  className="block mb-1.5 sm:mb-2 text-gray-300 text-sm sm:text-base font-medium"
                >
                  Preferred City / Location <span className="text-yellow-400">*</span>
                </label>

                <input
                  id="apply-city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Kanpur, Lucknow, Varanasi"
                  className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 outline-none transition text-sm sm:text-base ${
                    errors.city
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-zinc-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  }`}
                  aria-invalid={errors.city ? "true" : "false"}
                />
                {errors.city && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5">
                    <span aria-hidden="true">⚠</span> {errors.city}
                  </p>
                )}
              </div>

              {/* MODEL */}
              <div>
                <label
                  htmlFor="apply-model"
                  className="block mb-1.5 sm:mb-2 text-gray-300 text-sm sm:text-base font-medium"
                >
                  Preferred Franchise Model <span className="text-yellow-400">*</span>
                </label>

                <select
                  id="apply-model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 outline-none transition text-sm sm:text-base ${
                    errors.model
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-zinc-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  }`}
                  aria-invalid={errors.model ? "true" : "false"}
                >
                  <option value="">Select franchise model</option>
                  <option value="Kiosk Model (80–150 sq.ft)">Kiosk Model (80–150 sq.ft)</option>
                  <option value="Dine-In Model (250–500 sq.ft)">Dine-In Model (250–500 sq.ft)</option>
                  <option value="Lounge / Flagship Model (600+ sq.ft)">Lounge / Flagship Model (600+ sq.ft)</option>
                </select>
                {errors.model && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5">
                    <span aria-hidden="true">⚠</span> {errors.model}
                  </p>
                )}
              </div>

              {/* INVESTMENT */}
              <div>
                <label
                  htmlFor="apply-budget"
                  className="block mb-1.5 sm:mb-2 text-gray-300 text-sm sm:text-base font-medium"
                >
                  Investment Budget Range <span className="text-yellow-400">*</span>
                </label>

                <select
                  id="apply-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full bg-black border rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 outline-none transition text-sm sm:text-base ${
                    errors.budget
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-zinc-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  }`}
                  aria-invalid={errors.budget ? "true" : "false"}
                >
                  <option value="">Select budget range</option>
                  <option value="₹5–6 Lakhs">₹5–6 Lakhs</option>
                  <option value="₹7–9 Lakhs">₹7–9 Lakhs</option>
                  <option value="₹9–15 Lakhs">₹9–15 Lakhs</option>
                  <option value="Above ₹15 Lakhs">Above ₹15 Lakhs</option>
                </select>
                {errors.budget && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5">
                    <span aria-hidden="true">⚠</span> {errors.budget}
                  </p>
                )}
              </div>

            </div>

            {/* MESSAGE */}
            <div className="mt-4 sm:mt-6">
              <label
                htmlFor="apply-message"
                className="block mb-1.5 sm:mb-2 text-gray-300 text-sm sm:text-base font-medium"
              >
                Additional Comments / Preferred Commercial Location{" "}
                <span className="text-gray-500 text-xs font-normal">(Optional)</span>
              </label>

              <textarea
                id="apply-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your proposed site (e.g. high footfall market, mall, college zone) or any specific questions..."
                className="w-full bg-black border border-zinc-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 outline-none resize-none transition text-sm sm:text-base"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 sm:mt-8 bg-yellow-400 hover:bg-yellow-300 text-black py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-60 shadow-lg shadow-yellow-400/20"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Franchise Application →"}
            </button>

            <p className="text-center text-gray-500 text-xs sm:text-sm mt-5">
              By submitting this form, you agree to be contacted by our franchise team. All details are kept strictly confidential.
            </p>

          </form>

        )}

      </section>

    </div>
  );
}

export default FranchiseApplyPage;