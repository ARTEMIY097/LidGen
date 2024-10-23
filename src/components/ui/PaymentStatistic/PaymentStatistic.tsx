import { Legend } from "@headlessui/react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  // Rectangle,
  // ResponsiveContainer,
  // Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Январь",
    uv: 4000,
  },
  {
    name: "Февраль",
    uv: 3000,
  },
  {
    name: "Март",
    uv: 2000,
  },
  {
    name: "Апрель",
    uv: 1000,
  },
  {
    name: "Май",
    uv: 500,
  },
  {
    name: "Июнь",
    uv: 100,
  },
  {
    name: "Июль",
    uv: 1230,
  },
  {
    name: "Август",
    uv: 3230,
  },
  {
    name: "Сентябрь",
    uv: 820,
  },
  {
    name: "Октябрь",
    uv: 690,
  },
  {
    name: "Ноябрь",
    uv: 980,
  },
  {
    name: "Декабрь",
    uv: 400,
  },
];

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const PaymentStatistic = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col gap-8 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">График пополнений</h3>
          <div className="join gap-4">
            <button className="join-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="join-item">2024</button>
            <button className="join-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            width={1200}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="uv" radius={6} className=" fill-primary" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PaymentStatistic;
