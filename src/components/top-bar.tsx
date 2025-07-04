import React from "react";
import { TrainerCombobox } from "./trainer-combobox";
import { StatSelector } from "./stat-selector";

const TopBar: React.FC = () => {
  return (
    <div className="flex w-full bg-background text-foreground items-center justify-between px-4 py-8">
      <span className="font-bold text-3xl">
        <span className="text-blue-500">Trainer</span>
        <span>Dex</span>
      </span>
<span className="flex gap-2">      <TrainerCombobox/>
      <StatSelector/></span>
    </div>
  );
};

export default TopBar;
