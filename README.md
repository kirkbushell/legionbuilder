# Legions Imperiallis list builder

### Notes

#### todo - pages

/references/specialrules - list - links to /[name] ? hover info display?
/references/weapontraits - list
/references/damagecalculator? - choose a weapon vs a unit av damage per shot?

#### - special rules / weapon traits

Convert to objects. {name: string, value?:number}

#### - buider/components/BuilderFormation.tsx

Issue with the compulsory/optional/choice sections. When passing slot: BUILDER_DETACHMENT_SLOT into BuilderDetachment will cause crash if the slot references are not correct. Add check to not render detachment if slot is not correct.

This isn't an issue if the data is entered correctly.
