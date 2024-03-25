import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import { temp_graph_data } from "../../../consts/tempData";

interface IPredictedGraph {
  size: number;
}

export default function PredictedGraph({ size }: IPredictedGraph) {
  const [graphData, setGraphData] = useState(temp_graph_data);

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 500,
      width: 500,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: graphData.map((item) => item.date),
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          const numbers = [];
          return "억";
        },
      },
    },
  };

  const series = [
    {
      name: "price",
      data: graphData.map((item) => item.price),
    },
  ];

  return <ReactApexChart options={options} series={series} />;
}
