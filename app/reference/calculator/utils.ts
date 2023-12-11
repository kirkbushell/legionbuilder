import { UNIT_DATASHEET, WEAPON_DATASHEET } from "@/app/types"
import { Fraction, fraction, number } from "mathjs"

export const calculateDamage = (weapon: WEAPON_DATASHEET, target: UNIT_DATASHEET): number => {
	const save = calculateSaves(weapon, target)
	return Number(number(save).toFixed(2))
}

const calculateSaves = (weapon: WEAPON_DATASHEET, target: UNIT_DATASHEET): Fraction => {
	let save = target.save

	return fraction(save - 1, 6)
}
