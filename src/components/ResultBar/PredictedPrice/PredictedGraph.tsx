import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import { temp_graph_data } from "../../../consts/tempData";
import { calPriceUnit } from "../../../utils/calPriceUnit";

interface IPredictedGraph {
  size: number;
}

interface ISeriesIndex {
  value: any;
  seriesIndex: any;
  w: any;
}

export default function PredictedGraph({ size }: IPredictedGraph) {
  const [graphData, setGraphData] = useState(temp_graph_data);
  const predictedIndex = graphData.length - 3;

  const options: ApexOptions = {
    annotations: {
      xaxis: [
        {
          x: graphData[predictedIndex].date,
          borderColor: "#00E396",
          //   label: {
          //     borderColor: "#00E396",
          //     style: {
          //       color: "#fff",
          //       background: "#00E396",
          //     },
          //     text: "Annotation Text",
          //   },
        },
      ],
    },
    chart: {
      type: "area",
      stacked: true,
      height: 500,
      width: 500,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      zoom: {
        type: "x",
      },
    },
    colors: ["#008FFB", "#00E396"],
    stroke: {
      width: 1,
      curve: "stepline",
    },
    fill: {},
    xaxis: {
      categories: graphData.map((item) => item.date),
      labels: {
        style: {
          fontSize: "7px",
        },
      },
      range: 10,
    },
    yaxis: {
      labels: {
        formatter: (value) => calPriceUnit(value),
        style: {
          fontSize: "7px",
        },
        offsetX: -10,
      },

      min: 0,
    },
    grid: {
      padding: {
        left: 0,
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
