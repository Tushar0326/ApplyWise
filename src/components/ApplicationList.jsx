export default function ApplicationList({ applications }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-3">Applications</h2>

      <div className="grid grid-cols-4 font-semibold text-sm text-gray-600 border-b pb-2 mb-2">
        <span>Company</span>
        <span>Role</span>
        <span>Source</span>
        <span>Status</span>
      </div>

      {applications.map(app => (
        <div
          key={app.id}
          className="grid grid-cols-4 py-2 border-b text-sm"
        >
          <span>{app.company}</span>
          <span>{app.role}</span>
          <span>{app.source}</span>
          <span>{app.status}</span>
        </div>
      ))}
    </div>
  );
}
