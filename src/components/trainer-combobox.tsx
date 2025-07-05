"use client";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { getTrainer, getTrainerList } from "@/utils/trainerUtils";
import { useTrainerStore } from "@/stores/useTrainerStore";

export function TrainerCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const trainers = React.useMemo(() => getTrainerList(), []);
  const selectedTrainer = useTrainerStore((state) => state.trainer)
  const setTrainer = useTrainerStore((state) => state.setTrainer);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedTrainer
            ? `${selectedTrainer?.trainerClass} ${selectedTrainer?.trainerName}`
            : "Select trainer..."}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command
          filter={(value, search) => {
            const trainer = trainers.find((t) => t.value.toString() === value);
            if (!trainer) return 0;
            return trainer.label
              .toLowerCase()
              .includes(search.toLowerCase())
              ? 1
              : 0;
          }}
        >
          <CommandInput placeholder="Search trainer..." />
          <CommandList>
            <CommandEmpty>No trainer found.</CommandEmpty>
            <CommandGroup>
              {trainers.map((trainer) => (
                <CommandItem
                  key={trainer.value}
                  value={trainer.value.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    const selectedTrainer = getTrainer(parseInt(currentValue));
                    console.log(`Selected trainer:`, selectedTrainer);
                    setTrainer(selectedTrainer);
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === trainer.value.toString()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {trainer.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
