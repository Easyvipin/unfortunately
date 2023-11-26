import React from "react";
import { FiCalendar } from "react-icons/fi";

interface IStatsCardProps {}

const StatsCard: React.FunctionComponent<IStatsCardProps> = (props) => {
  return (
    <div className="border px-5 py-5 bg-card rounded-lg flex-1 min-w-[100px] md:min-w-[160px]">
      <div className="flex justify-between">
        <h3 className="font-light text-sm md:text-lg tracking-tighter">
          Mocks
        </h3>
        <FiCalendar />
      </div>
      <div className="flex flex-col mt-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl tracking-tighter">
          100
        </h1>
        <h6 className="text-sm font-light tracking-tighter text-muted-foreground">
          +50
        </h6>
      </div>
    </div>
  );
};

export default StatsCard;
