import StatsCard from "@components/UI/StatsCard";
import React from "react";

import dynamic from "next/dynamic";
import SkillsChart from "@components/UI/charts/SkillsChart";
const GaugeChart = dynamic(() => import("react-gauge-chart"), { ssr: false });

interface IPerformanceProps {}

const Performance: React.FunctionComponent<IPerformanceProps> = (props) => {
  const chartStyle = {
    height: 150,
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-4xl tracking-tighter ">Performance</h1>
        <p className="tracking-tighter font-normal text-muted-foreground mt-1">
          Performance Over Time and Competency Evaluation
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-xl racking-tighter  text-muted-foreground">
          Overall
        </h2>
        <div className="flex gap-8 flex-wrap justify-start">
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <div className="flex flex-col justify-center items-center w-full md:w-auto">
            <GaugeChart
              id="gauge-chart1"
              colors={["#EA4228", "#FFC371", "#5BE12C"]}
              percent="0.10"
              style={chartStyle}
            />
            <div className="text-center text-muted-foreground tracking-tight">
              Interview Ready!
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-xl racking-tighter  text-muted-foreground">
          Skills
        </h2>
        <div className="flex gap-8 flex-wrap justify-start h-[15rem] w-[15rem] border">
          <SkillsChart />
        </div>
      </div>
    </div>
  );
};

export default Performance;
