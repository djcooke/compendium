---
name: Deep Palace Demon
nickname: Demon
image: demon.png
start_floor: 141
end_floor: 143
agro: Sight
hp: 17266
attack_damage: 1132
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Dark Dome
    potency: 90
    type: Magic
    description: 'instant'
  - name: Charybdis
    potency: 90% of current HP
    type: Unique
    description: 'enrage; can be interrupted'
    warning: explosion
job_specifics:
  MCH:
    difficulty: Medium
  SGE:
    difficulty: Easy
---
