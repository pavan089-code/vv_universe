import { useEffect, useMemo, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const PAYMENT_STATUSES = ["pending", "verified", "rejected"];

const formatDate = (date) => {
  if (!date) return "N/A";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "N/A";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getValue = (value) => value || "N/A";

const getPaymentStatus = (registration) => {
  if (PAYMENT_STATUSES.includes(registration?.paymentStatus)) {
    return registration.paymentStatus;
  }

  return registration?.verified ? "verified" : "pending";
};

const statusStyles = {
  pending: "bg-yellow-500/15 text-yellow-300 ring-yellow-500/30",
  verified: "bg-green-500/15 text-green-300 ring-green-500/30",
  rejected: "bg-red-500/15 text-red-300 ring-red-500/30",
};

const AdminJamRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);
  const [updatingId, setUpdatingId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRegistrations = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/jam/registrations`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Unable to fetch registrations");
      }

      setRegistrations(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      setError(err.message || "Unable to fetch registrations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const updatePaymentStatus = async (id, paymentStatus) => {
    if (!id) return;

    setUpdatingId(id);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/jam/registrations/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentStatus }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Unable to update payment status");
      }

      setRegistrations((current) =>
        current.map((registration) =>
          registration._id === id ? data.registration : registration,
        ),
      );
    } catch (err) {
      setError(err.message || "Unable to update payment status");
    } finally {
      setUpdatingId("");
    }
  };

  const filteredRegistrations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return registrations.filter((registration) => {
      const name = registration?.name || "";
      const phone = registration?.phone || "";
      const email = registration?.email || "";
      const token = registration?.registrationToken || "";
      const matchesSearch =
        !query ||
        name.toLowerCase().includes(query) ||
        phone.toLowerCase().includes(query) ||
        email.toLowerCase().includes(query) ||
        token.toLowerCase().includes(query);
      const matchesStatus =
        statusFilter === "all" ||
        getPaymentStatus(registration) === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [registrations, search, statusFilter]);

  return (
    <div className="p-0 text-white sm:p-4 lg:p-6">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">
            Jam Session Registrations
          </h1>
          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            {registrations.length} total registrations
          </p>
        </div>

        <button
          onClick={fetchRegistrations}
          disabled={loading}
          className="min-h-11 w-full rounded bg-gray-800 px-4 py-2 hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          Refresh
        </button>
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-[minmax(0,1fr)_220px]">
        <div>
          <label className="sr-only" htmlFor="jam-registration-search">
            Search registrations by name or phone
          </label>
          <input
            id="jam-registration-search"
            type="text"
            placeholder="Search by name, email, phone or token..."
            className="min-h-11 w-full rounded bg-gray-800 p-3 text-white outline-none ring-1 ring-gray-700 focus:ring-yellow-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="jam-status-filter">
            Filter by verification status
          </label>
          <select
            id="jam-status-filter"
            className="min-h-11 w-full rounded bg-gray-800 p-3 text-white outline-none ring-1 ring-gray-700 focus:ring-yellow-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All statuses</option>
            <option value="pending">Pending</option>
            <option value="verified">Verified</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {error && (
        <p role="alert" className="mb-4 rounded bg-red-500/10 p-3 text-red-300">
          {error}
        </p>
      )}

      <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px]">
            <thead className="border-b border-gray-700 text-gray-400">
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Instagram</th>
                <th>Token</th>
                <th>Registration Date</th>
                <th>Screenshot</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="py-10 text-center text-gray-400">
                    Loading registrations...
                  </td>
                </tr>
              ) : filteredRegistrations.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-12 text-center text-gray-500">
                    {search || statusFilter !== "all"
                      ? "No registrations match your filters."
                      : "No Jam Session registrations yet."}
                  </td>
                </tr>
              ) : (
                filteredRegistrations.map((registration) => {
                  const paymentStatus = getPaymentStatus(registration);
                  const screenshot = registration?.screenshot;

                  return (
                    <tr
                      key={registration?._id}
                      className="border-b border-gray-800 transition hover:bg-gray-800"
                    >
                      <td className="px-4 py-3 font-medium">
                        {getValue(registration?.name)}
                      </td>

                      <td className="px-4 py-3">
                        {getValue(registration?.phone)}
                      </td>

                      <td className="px-4 py-3">
                        {getValue(registration?.email)}
                      </td>

                      <td className="px-4 py-3">
                        {getValue(registration?.instagram)}
                      </td>

                      <td className="max-w-52 truncate px-4 py-3 font-mono text-sm">
                        {registration?.registrationToken ? (
                          <div className="flex items-center gap-2">
                            <span className="text-green-400 font-semibold">
                              {registration.registrationToken}
                            </span>

                            <button
                              onClick={() =>
                                navigator.clipboard.writeText(
                                  registration.registrationToken,
                                )
                              }
                              className="rounded bg-blue-600 px-2 py-1 text-xs hover:bg-blue-500"
                            >
                              Copy
                            </button>
                          </div>
                        ) : (
                          <span className="text-yellow-400">
                            Pending Verification
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {formatDate(registration?.createdAt)}
                      </td>
                      <td className="px-4 py-3">
                        {screenshot ? (
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedScreenshot({
                                src: screenshot,
                                name:
                                  registration?.name || "Payment screenshot",
                              })
                            }
                            className="block h-16 w-16 overflow-hidden rounded-lg ring-1 ring-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          >
                            <img
                              src={screenshot}
                              alt={`Payment screenshot for ${getValue(
                                registration?.name,
                              )}`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </button>
                        ) : (
                          <span className="text-sm text-gray-500">Missing</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ring-1 ${
                            statusStyles[paymentStatus]
                          }`}
                        >
                          {paymentStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            disabled={
                              updatingId === registration?._id ||
                              paymentStatus === "verified"
                            }
                            onClick={() =>
                              updatePaymentStatus(registration?._id, "verified")
                            }
                            className="min-h-10 rounded bg-green-600 px-3 py-2 text-sm hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Verify
                          </button>

                          <button
                            type="button"
                            disabled={
                              updatingId === registration?._id ||
                              paymentStatus === "rejected"
                            }
                            onClick={() =>
                              updatePaymentStatus(registration?._id, "rejected")
                            }
                            className="min-h-10 rounded bg-red-600 px-3 py-2 text-sm hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Payment screenshot preview"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl bg-gray-950 ring-1 ring-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-gray-800 p-4">
              <p className="min-w-0 truncate font-medium">
                {selectedScreenshot.name}
              </p>
              <button
                type="button"
                onClick={() => setSelectedScreenshot(null)}
                className="min-h-10 rounded bg-gray-800 px-4 py-2 hover:bg-gray-700"
              >
                Close
              </button>
            </div>

            <div className="max-h-[75vh] overflow-auto p-4">
              <img
                src={selectedScreenshot.src}
                alt={`Payment screenshot for ${selectedScreenshot.name}`}
                className="mx-auto max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminJamRegistrations;
