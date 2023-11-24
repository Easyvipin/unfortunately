import StatsCard from "@components/UI/StatsCard";
import React from "react";

import dynamic from "next/dynamic";
const GaugeChart = dynamic(() => import("react-gauge-chart"), { ssr: false });

interface IPerformanceProps {}

const chartStyle = {
  height: 250,
};

const Performance: React.FunctionComponent<IPerformanceProps> = (props) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl tracking-tighter">Performance</h1>
        <p className="tracking-tighter font-normal text-muted-foreground mt-1">
          Performance Over Time and Competency Evaluation
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-xl racking-tighter  text-muted-foreground">
          Overall
        </h2>
        <div className="flex gap-8">
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <GaugeChart
            id="gauge-chart1"
            colors={["#EA4228", "#FFC371", "#5BE12C"]}
            style={chartStyle}
            percent="0.10"
          />
        </div>
      </div>
    </div>
  );
};

export default Performance;
