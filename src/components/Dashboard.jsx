export default function Dashboard({ applications }) {
  const total = applications.length;
  const interviews = applications.filter(a => a.status === "Interview").length;
  const offers = applications.filter(a => a.status === "Offer").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500 text-sm">Applications</p>
        <h2 className="text-3xl font-bold">{total}</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500 text-sm">Interviews</p>
        <h2 className="text-3xl font-bold">{interviews}</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500 text-sm">Offers</p>
        <h2 className="text-3xl font-bold">{offers}</h2>
      </div>
    </div>
  );
}
