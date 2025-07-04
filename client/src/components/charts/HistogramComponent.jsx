import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

export default function HistogramComponent({ data, xKey, yKey, title }) {
  return (
    <div className="bg-white rounded shadow p-4">
      {title && <h3 className="mb-2 font-semibold">{title}</h3>}

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" /> {/* Adds grid lines */}
          <XAxis dataKey={xKey} /> {/* Bottom axis */}
          <YAxis /> {/* Left numeric axis */}
          <Tooltip /> {/* Hover tooltips */}
          <Legend /> {/* Label legend box */}
          <Bar dataKey={yKey} fill="#818cf8" /> {/* Histogram bars */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
