---
name: Quivering Coffer
nickname: Mimic
family: Mimic
image: ../mimic_gold.png
start_floor: 81
end_floor: 89
agro: Proximity
hp: 57995
attack_damage: 7621
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: false
  stun: false
sort_order: 10
abilities:
  - name: Malice
    potency: n/a
    description: 'inflicts pox (magic DoT potency 5, 10m); can be interrupted'
  - name: Deathtrap
    potency: 300
    type: Physical
    description: 'telegraphed pointblank AoE'
notes:
  - 'Sometimes found in gold chests'
  - 'Pomander of Alteration transforms all enemies in a random room on the next
  floor into either mimics or mandragoras'
job_specifics:
  DRK:
    difficulty: Medium
    notes:
      - 'Steel recommended if gloom'
  GNB:
    difficulty: Medium
  MCH:
    difficulty: Hard
    notes:
      - 'Steel required'
  PLD:
    difficulty: Hard
    notes:
      - 'Steel recommended'
  WAR:
    difficulty: Medium
---
