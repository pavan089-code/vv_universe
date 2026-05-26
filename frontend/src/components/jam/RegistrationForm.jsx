import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    instagram: "",
    utr: "",
    screenshot: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/jam/register",
        form
      );

      alert(res.data.message);

      setForm({
        name: "",
        phone: "",
        instagram: "",
        utr: "",
        screenshot: "",
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-6 rounded-2xl space-y-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 rounded bg-black"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          required
          className="w-full p-3 rounded bg-black"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
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

        <input
          type="text"
          placeholder="UTR Number"
          required
          className="w-full p-3 rounded bg-black"
          value={form.utr}
          onChange={(e) =>
            setForm({ ...form, utr: e.target.value })
          }
        />

        <input
          type="text"
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
          className="w-full bg-yellow-500 text-black py-3 rounded font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;