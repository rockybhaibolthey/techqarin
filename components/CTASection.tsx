"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  comments: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  comments?: string;
}

export default function CTASection() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      newErrors.name = "Name should contain only alphabets";
    }

    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10 digit number";
    }

    if (form.comments.trim().length < 60) {
      newErrors.comments = "Comments must be at least 60 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      setForm({ ...form, [name]: cleaned });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    const res = await fetch("https://0gb8de1kda.execute-api.us-east-1.amazonaws.com/2order/2order/techqarin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        number: form.phone, // backend expects number
        comments: form.comments,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Form submitted successfully!");

      setForm({
        name: "",
        phone: "",
        comments: "",
      });

      setErrors({});
      setOpen(false);
    } else {
      alert(data.message || "Submission failed");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 text-center bg-blue-700">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Ready to Build Something Amazing?
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-blue-700 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 shadow-lg transition"
        >
          Contact Us Today
        </button>
      </section>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          
        <div className="bg-white w-full max-w-md mx-4 p-8 rounded-2xl shadow-2xl relative border border-gray-200">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-3 text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Contact Us
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
             className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"  />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>

                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <span className="px-3 flex items-center bg-gray-100 text-gray-700 border-r">
                    +91
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    maxLength={10}
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={handleChange}
                   className="w-full p-3 text-gray-900 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Comments */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details
                </label>

                <textarea
                  name="comments"
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  value={form.comments}
                  onChange={handleChange}
             className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"  />

                <p className="text-xs text-gray-500 mt-1">
                  Minimum 60 characters
                </p>

                {errors.comments && (
                  <p className="text-red-500 text-sm">{errors.comments}</p>
                )}
              </div>

              {/* Submit */}
             <button
  type="submit"
  disabled={loading}
  className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
>
  {loading && (
    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
  )}

  {loading ? "Submitting..." : "Submit Request"}
</button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}