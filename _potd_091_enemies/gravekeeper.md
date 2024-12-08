---
name: Palace Gravekeeper
nickname: Gravekeeper
image: gravekeeper.png
start_floor: 97
end_floor: 99
patrol: true
agro: Sound
hp: 12617
attack_damage: 908
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: false
  resolution: true
abilities:
  - name: Nail in the Coffin
    potency: 150
    type: Physical
    description: 'instant'
  - name: Vengeful Soul
    potency: 130
    description: 'instant circle AoE; only used against lower-enmity party
    members (not used against solo adventurers)'
job_specifics:
  SGE:
    difficulty: Medium
    notes:
      - 'Hurts in multipulls'
---
