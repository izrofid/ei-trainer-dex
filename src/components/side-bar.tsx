import getTrainerSprite from "@/utils/getTrainerSprite";
import React from "react";

type SideBarProps = {
  trainerName: string;
  trainerClass: string;
};

const SideBar: React.FC<SideBarProps> = (trainer) => {
  return (
    <div className="flex flex-1 h-[100dvh] bg-zinc-800 text-foreground justify-center p-4">
<div className="flex flex-col items-center justify-center h-full w-full">
          <div className="flex flex-col">
        {" "}
        <div className="rounded-full bg-zinc-700 size-[192px] items-center flex flex-col justify-center">
          <img src={getTrainerSprite()} className="size-[128px]" />
        </div>
        <div className= "w-full items-center flex justify-center flex-col text-left py-2">
          {" "}
          <span className="font-bold text-3xl">{trainer.trainerName}</span>
          <span className="text-regular text-muted-foreground">
            {trainer.trainerClass}
          </span>
        </div>
      </div>
      </div>
</div>
  );
};

export default SideBar;
