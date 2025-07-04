import { getSpeciesData } from "@/utils/SpeciesUtils";
import React from "react";

type StatBlockProps = {
  speciesId: number;
};

const StatBlock: React.FC<StatBlockProps> = ({ speciesId }) => { 
    
    const species = getSpeciesData(speciesId);
    return(
<div className="grid grid-cols-3 gap-3 text-sm w-full">
    {[
        { label: "HP", value: species?.stats[0] },
        { label: "Atk", value: species?.stats[1] },
        { label: "Def", value: species?.stats[2] },
        { label: "SpA", value: species?.stats[3] },
        { label: "SpD", value: species?.stats[4] },
        { label: "Spe", value: species?.stats[5], bg: "bg-rose-600" },
    ].map((stat, index) => (
        <div
            key={index}
            className={`rounded-full text-center px-2 py-1 text-white text-xs ${
                stat.bg || "bg-slate-600"
            }`}
        >
            <span>{stat.label}</span>: {stat.value}
        </div>
    ))}
</div>
)};

export default StatBlock;
