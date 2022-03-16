import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
};

const labels = [
  "00:00",
  "02:00",
  "04:00",
  "06:00",
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
  "24:00",
];

const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [2, 2.5, 3, 4, 3.5, 3, 2.5, 3, 5, 4, 2, 1.5, 1],
      borderColor: "#99e8c6",
      backgroundColor: "#99e8c6",
    },
  ],
};

const LineCharts = () => {
  return (
    <div style={{ height: 300, width: 600 }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineCharts;
