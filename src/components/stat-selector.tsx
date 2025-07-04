import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const StatSelector = () => {
  return (
    <Select>
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
