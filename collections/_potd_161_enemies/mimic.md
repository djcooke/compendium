---
name: Mimic
nickname: Mimic
image: ../mimic.png
start_floor: 161
end_floor: 169
agro: Proximity
hp: 32207
attack_damage: 2572
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: false
  stun: false
  resolution: false
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
  - 'Sometimes found in gold chests'
  - 'Pomander of Alteration transforms all enemies in a random room on the next
  floor into either mimics or mandragoras'
job_specifics:
  MCH:
    difficulty: Easy
  PLD:
    difficulty: Medium
  RPR:
    difficulty: Hard
    notes:
      - 'Strength or steel recommended'
      - 'If using no pomanders, kite after the Pox and Deathtrap combo to
      manage incoming damage'
  SGE:
    difficulty: Medium
    notes:
      - 'Can be dangerous without steel. Kite to reduce damage'
  SMN:
    difficulty: Medium
    notes:
      - "Starting to hit harder, so consider a steel if you're not confident"
  WAR:
    difficulty: Easy
---
