import { useState } from "react";
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    instagram: "",
    email: "",
  });

  const [screenshotFile, setScreenshotFile] =
    useState(null);

  const [fileKey, setFileKey] = useState(0);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      setStatus({
        type: "error",
        message:
          "Only JPG, JPEG, PNG and WEBP files are allowed.",
      });

      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setStatus({
        type: "error",
        message:
          "Image size must be less than 2MB.",
      });

      return;
    }

    setScreenshotFile(file);

    setStatus({
      type: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (!screenshotFile) {
      setStatus({
        type: "error",
        message:
          "Please upload a payment screenshot.",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append(
        "instagram",
        form.instagram
      );
      formData.append("email", form.email);
      formData.append(
        "screenshot",
        screenshotFile
      );

      const res = await axios.post(
        `${API_BASE_URL}/api/jam/register`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setStatus({
        type: "success",
        message:
          res.data.message ||
          "Registration submitted successfully. Awaiting verification.",
      });

      setForm({
        name: "",
        phone: "",
        instagram: "",
        email: "",
      });

      setScreenshotFile(null);

      setFileKey((prev) => prev + 1);
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
        <h2 className="text-2xl font-semibold text-white">
          Register
        </h2>

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

        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 rounded bg-black text-white"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full p-3 rounded bg-black text-white"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Instagram ID"
          className="w-full p-3 rounded bg-black text-white"
          value={form.instagram}
          onChange={(e) =>
            setForm({
              ...form,
              instagram: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-3 rounded bg-black text-white"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <div>
          <label
            htmlFor="jam-screenshot"
            className="block text-white text-sm mb-2"
          >
            Payment Screenshot
          </label>

          <input
            key={fileKey}
            id="jam-screenshot"
            type="file"
            accept=".jpg,.jpeg,.png,.webp"
            required
            className="w-full p-3 rounded bg-black text-white"
            onChange={handleFileChange}
          />

          <p className="text-xs text-gray-400 mt-2">
            Upload payment screenshot
            (JPG, PNG, WEBP • Max 2MB)
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 text-black py-3 rounded font-semibold disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting
            ? "Submitting..."
            : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;