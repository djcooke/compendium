---
name: Orthos Wood Golem
nickname: Wood Golem
image: golem.png
start_floor: 14
end_floor: 16
patrol: true
agro: Sight
hp: 104780
attack_damage: 2065
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: false
  slow: '?'
  stun: true
abilities:
  - name: Ovation
    potency: 1750
    type: Physical
    description: 'telegraphed line AoE; inflicts heavy (20s). Diminishing
    returns do NOT apply to this heavy (it is always 20s)'
job_specifics:
  SGE:
    difficulty: Easy
  WHM:
    difficulty: Easy
---
