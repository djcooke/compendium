---
name: Mimic
nickname: Mimic
image: ../mimic.png
start_floor: 31
end_floor: 39
agro: Proximity
hp: 5268
attack_damage: 492
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: false
  stun: true
sort_order: 10
abilities:
  - name: Infatuation
    potency: n/a
    description: 'inflicts pox (magic DoT potency 5, 10m); can be interrupted'
  - name: Deathtrap
    potency: 300
    type: Physical
    description: 'telegraphed pointblank AoE'
notes:
  - 'Sometimes found in silver chests'
  - 'Pomander of Alteration transforms all enemies in a random room on the next
  floor into either mimics or mandragoras'
job_specifics:
  SGE:
    difficulty: Easy
---
