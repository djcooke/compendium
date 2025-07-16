---
name: Deep Palace Dahak
nickname: Dahak
image: dahak.png
start_floor: 135
end_floor: 138
agro: Sight
hp: 16491
attack_damage: 1081
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
  resolution: false
abilities:
  - name: 'Rotten Breath'
    potency: 120
    type: Magic
    description: 'inflicts disease (30s)'
    warning: movement
  - name: 'Tail Drive'
    potency: 300
    type: Physical
    description: 'telegraphed backward conal AoE inflicting concussion
    (physical DoT potency 30, 15s); used if someone is behind'
job_specifics:
  SGE:
    difficulty: Easy
---
