export default function Insights({ applications }) {
  if (applications.length === 0) return null;

  const total = applications.length;
  const interviews = applications.filter(
    (a) => a.status === "Interview"
  ).length;

  const conversion = ((interviews / total) * 100).toFixed(1);

  // source performance
  const sourceMap = {};

  applications.forEach((app) => {
    if (!sourceMap[app.source]) {
      sourceMap[app.source] = 0;
    }
    if (app.status === "Interview") {
      sourceMap[app.source]++;
    }
  });

  let bestSource = "N/A";
  let max = 0;

  for (let src in sourceMap) {
    if (sourceMap[src] > max) {
      max = sourceMap[src];
      bestSource = src;
    }
  }

  return (
  <div className="bg-white p-5 rounded-xl shadow mb-6">
    <h2 className="text-lg font-semibold mb-2">
      📊 Smart Insights
    </h2>

    <p className="text-gray-700">
      Interview conversion rate: <b>{conversion}%</b>
    </p>

    <p className="text-gray-700">
      Best performing platform: <b>{bestSource}</b>
    </p>

    <p className="mt-2 text-sm text-gray-500">
      Insight: Applications from {bestSource} are converting better.
    </p>
  </div>
 );
}
