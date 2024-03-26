import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  TooltipProps,
  ReferenceLine,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { temp_graph_data } from "../../../consts/tempData";
import { calPriceUnit } from "../../../utils/calPriceUnit";
import styled from "styled-components";
import { useState } from "react";

export default function PredictedGraph() {
  const [graphData, setGraphData] = useState(temp_graph_data);
  const predictedIndex = graphData.length - 4;

  const formatYAxis = (tickItem: number) => {
    return calPriceUnit(tickItem);
  };

  const formatXAxis = (tickItem: string) => {
    return tickItem.slice(2).replace("-", ".");
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={graphData} margin={{ left: -30, top: 20, right: 10 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="date"
          tickFormatter={formatXAxis}
          tick={{ fontSize: 10, fill: "#B9BABA" }}
        />
        <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 10 }} />
        <ReferenceLine x={graphData[predictedIndex].date} stroke="red" />
        <Tooltip content={CustomTooltip} />
        <Line
          type="stepAfter"
          dataKey="average"
          stroke="#378ce7"
          strokeWidth={1.5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const tootipLabel = label.replace("-", "년 ") + "월";

    return (
      <CustomToolTipContainer>
        <p className="label">{tootipLabel}</p>
        <p className="average">평균: {calPriceUnit(payload[0].value!)}</p>
      </CustomToolTipContainer>
    );
  }
};

const CustomToolTipContainer = styled.div`
  background-color: white;
  font-size: 10px;
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid rgba(${(props) => props.theme.colors.primaryRGB}, 0.5);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 3px;
  .average {
    font-weight: 700;
  }
`;
