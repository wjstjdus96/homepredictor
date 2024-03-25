import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import { temp_graph_data } from "../../../consts/tempData";
import { calPriceUnit } from "../../../utils/calPriceUnit";
import { convertDate } from "../../../utils/convertDate";

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
          x: convertDate(graphData[predictedIndex].date),
          borderColor: "#c2c2c2",
        },
      ],
    },
    chart: {
      type: "area",
      stacked: true,
      height: 900,
      width: 500,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      zoom: {
        type: "x",
      },
      brush: {},
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    fill: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },
    // colors: ["#008FFB", "#00E396"],
    stroke: {
      width: 2,
      curve: "stepline",
    },

    xaxis: {
      categories: graphData.map((item) => item.date),
      labels: {
        formatter: (value) => convertDate(value),
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
      name: "average price",
      data: graphData.map((item) => item.average),
    },
  ];

  return <ReactApexChart options={options} series={series} />;
}
