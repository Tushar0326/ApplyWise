import { useState } from "react";

export default function ApplicationForm({ addApplication }) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    source: "",
    status: "Applied",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication({ ...form, id: Date.now() });
    setForm({ company: "", role: "", source: "", status: "Applied" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-xl shadow mb-6 grid grid-cols-1 md:grid-cols-5 gap-3"
    >
      <input
        className="border rounded p-2"
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <input
        className="border rounded p-2"
        placeholder="Role"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />

      <input
        className="border rounded p-2"
        placeholder="Source"
        value={form.source}
        onChange={(e) => setForm({ ...form, source: e.target.value })}
      />

      <select
        className="border rounded p-2"
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800">
        Add
      </button>
    </form>
  );
}
