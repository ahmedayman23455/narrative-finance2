"use client";
import {AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const AreaStakingChart = () => {
  return (
    <div style={{position: "relative", width: "100%", height: "280px"}}>
      {/* Rest of the JSX */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#1A3EFF" fill="#1A3EFF" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaStakingChart;
