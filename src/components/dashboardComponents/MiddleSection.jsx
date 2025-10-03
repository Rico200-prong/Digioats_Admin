import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  BarChart,
  Legend,
} from "recharts";

const MiddleSection = () => {
  const data = [
    { month: "Jan", applications: 40 },
    { month: "Feb", applications: 55 },
    { month: "Mar", applications: 30 },
    { month: "Apr", applications: 80 },
    { month: "May", applications: 60 },
  ];
  const barData = [
    { month: "Jan", crypto: 4000, fiat: 2400 },
    { month: "Feb", crypto: 3000, fiat: 1398 },
    { month: "Mar", crypto: 2000, fiat: 9800 },
    { month: "Apr", crypto: 2780, fiat: 3908 },
    { month: "May", crypto: 1890, fiat: 4800 },
  ];
  const tableData = [
    { date: "01-09-2025", client: "Client", status: "Pending" },
    { date: "05-09-2025", client: "Client", status: "Verified" },
    { date: "10-09-2025", client: "Client", status: "Closed" },
  ];

  return (
    <section className=" flex flex-col gap-y-[20px] my-[30px] px-[25px] 2xl:px-[300px] ">
      <div className="bg-white shadow-md rounded-2xl p-4 shadow-blue-950 border border-solid ">
        <h2 className="text-lg font-semibold mb-4">
          📈 Monthly Applications Trendss
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="applications"
              stroke="#007bff"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-4 border border-solid  shadow-blue-950">
        <h2 className="text-lg font-semibold mb-4">
          💰 Donations (Crypto vs Fiat)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="crypto" fill="#007BFF" name="Crypto" />
            <Bar dataKey="fiat" fill="#6C757D" name="Fiat" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white shadow-md shadow-blue-950 border border-solid rounded-2xl p-4">
        <h2 className="text-lg font-semibold mb-4">📊 Latest OTC Inquiries</h2>
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.client}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                    ${
                      row.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : row.status === "Verified"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MiddleSection;
