// Dependencies imports
import React from "react";
import LineChart from "react-linechart";

const LineCharts = () => {
  const data = [
    {
      color: "#e85d12",
      points: [
        { x: 0, y: 0 },
        { x: 5, y: 6 },
        { x: 8, y: 2 },
        { x: 12, y: 8 },
        { x: 16, y: 2 },
      ],
    },
    {
      color: "#fff",
      points: [
        { x: 0, y: 0 },
        { x: 8, y: 1 },
        { x: 14, y: 10 },
      ],
    },
  ];

  return (
    <div>
      <LineChart
        width={1000}
        height={200}
        data={data}
        hideXAxis={true}
        hideYAxis={true}
        yLabel="Efficiency"
        xLabel="Time"
      />
    </div>
  );
};

export default LineCharts;
