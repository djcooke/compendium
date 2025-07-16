---
name: Palace Worm
nickname: Worm
image: worm.png
start_floor: 84
end_floor: 88
agro: Sound
hp: 7858
attack_damage: 753
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: 'Sand Cyclone'
    potency: 90
    type: Magic
    description: 'instant; inflicts sludge (magic DoT potency 20, 12s)'
  - name: Sand Breath
    potency: 300
    type: Unique
    description: 'telegraphed conal AoE; inflicts blind (10s)'
job_specifics:
  SGE:
    difficulty: Easy
---
