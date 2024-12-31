---
name: Quivering Coffer
nickname: Mimic
family: Mimic
image: ../mimic_gold.png
start_floor: 71
end_floor: 79
agro: Proximity
hp: 53740
attack_damage: 6554
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
  GNB:
    difficulty: Medium
  MCH:
    difficulty: Medium
  PLD:
    difficulty: Medium
  WAR:
    difficulty: Medium
  VPR:
    difficulty: Easy
    notes:
      - 'Spinning mimics perfectly will make this fight easy as VPR has very high melee damage'
---
