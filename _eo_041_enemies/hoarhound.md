---
name: Orthos Hoarhound
nickname: Hoarhound
image: hoarhound.png
start_floor: 46
end_floor: 49
patrol: true
agro: Sight
hp: 175076
attack_damage: 5643
attack_type: Physical
vulnerabilities:
  bind: unknown
  heavy: unknown
  sleep: false
  slow: unknown
  stun: false
abilities:
  - name: Abyssal Cry
    potency: 200
    type: Magic
    description: "huge untelegraphed pointblank AoE; inflicts stun (5s); can be
    LoSed. Fully shielding damage will NOT block the stun"
  - name: Ecliptic Bite
    potency: 5000
    type: Physical
    description: "used on players stunned by Abyssal Cry; explicit instant
    death (150% of max HP) if still stunned when it lands"
notes:
  - "You'll be safe from Ecliptic Bite if the stun from Abyssal Cry wears off
    before the Hoarhound reaches you. This generally will only happen in pit
    rooms where it has to run around the pit"
job_specifics:
  SGE:
    difficulty: Easy
  WHM:
    difficulty: Easy
---
