import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTrainerStore } from "@/stores/useTrainerStore"

export const StatSelector = () => {
  const defaultStatType = useTrainerStore((state) => state.statType)
  const setStatType = useTrainerStore((state) => state.setStatType)
  return (
    <Select defaultValue={defaultStatType} onValueChange={(value) => setStatType(value as "base" | "actual")}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Stat type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="actual">Actual Stats</SelectItem>
          <SelectItem value="base">Base Stats</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
