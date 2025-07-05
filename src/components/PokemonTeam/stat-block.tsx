import { useTrainerStore } from "@/stores/useTrainerStore";
import { getSpeciesData } from "@/utils/SpeciesUtils";
import { calculateStats } from "@/utils/statUtils";
import type { TrainerMon } from "@/utils/trainerUtils";
import React from "react";

type StatBlockProps = {
  mon: TrainerMon;
};

const StatBlock: React.FC<StatBlockProps> = ({ mon }) => { 

    const speciesId = mon.species;
    const isActual: boolean = useTrainerStore((state) => state.statType) === "actual";
    const species = getSpeciesData(speciesId);

    const stats = isActual && mon ? calculateStats(mon) : species.stats;
    return(
<div className="grid grid-cols-3 gap-3 text-sm w-full">
    {[
        { label: "HP", value: stats[0] },
        { label: "Atk", value: stats[1] },
        { label: "Def", value: stats[2] },
        { label: "SpA", value: stats[4] },
        { label: "SpD", value: stats[5] },
        { label: "Spe", value: stats[3], bg: "bg-rose-600" },
    ].map((stat, index) => (
        <div
            key={index}
            className={`rounded-full text-center px-2 py-1 text-foreground text-xs ${
                stat.bg || "bg-slate-400 dark:bg-slate-700"
            }`}
        >
            <span>{stat.label}</span>: {stat.value}
        </div>
    ))}
</div>
)};

export default StatBlock;
