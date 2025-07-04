import abilityData from "../data/abilityData.json"

export interface Ability {
  abilityId: number;
  name: string;
  description: string;
}

const getAbilityName = (abilityId: number) => {
    const ability = abilityData[abilityId.toString() as keyof typeof abilityData]
    return ability.name
}

export {getAbilityName}