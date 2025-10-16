import { useState } from "react";
import { Copyright } from "../Components/Copyright";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = `${formData.firstName} ${formData.lastName}`;

    try {
      const res = await fetch("https://stoxpublishing.com/api-stoxposting/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <div className="mx-10 md:mx-20 lg:mx-100" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <div>
        <div className="p-2">
          <h1 className="text-[#FE6E00] text-4xl md:text-6xl font-bold">Contact Us</h1>
        </div>

        <div id="web-from" className="w-full flex flex-col items-center justify-center text-center mt-8">
          <div className="space-y-2 mb-6 text-left text-2xl font-bold">
            <h2>Toll Free: +1-844-477-7869</h2>
            <h2>Local: +1-801-477-7869</h2>
            <h2>Email: orders@emailstox.com</h2>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-left">Web Form</h3>
            <form className="border border-gray-700 p-4 mt-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="border p-2"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="border p-2"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border p-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="border p-2"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  className="w-full border p-2 h-32"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="w-32 bg-gray-700 text-white p-2">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};
