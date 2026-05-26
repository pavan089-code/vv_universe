import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    instagram: "",
    utr: "",
    screenshot: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/api/jam/register`, form);

      setStatus({
        type: "success",
        message: res.data.message || "Registration submitted",
      });

      setForm({
        name: "",
        phone: "",
        instagram: "",
        utr: "",
        screenshot: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Unable to submit registration. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-4 sm:p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-6 rounded-2xl space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">Register</h2>

        {status.message && (
          <p
            role="status"
            className={`rounded p-3 text-sm ${
              status.type === "error"
                ? "bg-red-500/10 text-red-300"
                : "bg-green-500/10 text-green-300"
            }`}
          >
            {status.message}
          </p>
        )}

        <label className="sr-only" htmlFor="jam-name">
          Full Name
        </label>
        <input
          id="jam-name"
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 rounded bg-black"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <label className="sr-only" htmlFor="jam-phone">
          Phone Number
        </label>
        <input
          id="jam-phone"
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full p-3 rounded bg-black"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <label className="sr-only" htmlFor="jam-instagram">
          Instagram ID
        </label>
        <input
          id="jam-instagram"
          type="text"
          placeholder="Instagram ID"
          className="w-full p-3 rounded bg-black"
          value={form.instagram}
          onChange={(e) =>
            setForm({
              ...form,
              instagram: e.target.value,
            })
          }
        />

        <label className="sr-only" htmlFor="jam-utr">
          UTR Number
        </label>
        <input
          id="jam-utr"
          type="text"
          placeholder="UTR Number"
          required
          className="w-full p-3 rounded bg-black"
          value={form.utr}
          onChange={(e) =>
            setForm({ ...form, utr: e.target.value })
          }
        />

        <label className="sr-only" htmlFor="jam-screenshot">
          Payment Screenshot URL
        </label>
        <input
          id="jam-screenshot"
          type="url"
          placeholder="Payment Screenshot URL"
          className="w-full p-3 rounded bg-black"
          value={form.screenshot}
          onChange={(e) =>
            setForm({
              ...form,
              screenshot: e.target.value,
            })
          }
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 text-black py-3 rounded font-semibold disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
