---
name: Deep Palace Marolith
nickname: Marolith
image: marolith.png
start_floor: 154
end_floor: 157
patrol: true
agro: Proximity
hp: 21693
attack_damage: 1491
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Carpomission
    potency: 130
    type: Physical
    description: 'instant'
  - name: Isle Drop
    potency: 300
    type: Physical
    description: 'telegraphed circle AoE on random player; inflicts stun (5s)'
job_specifics:
  GNB:
    difficulty: Easy
  MCH:
    difficulty: Easy
    notes:
      - Can do some burst damage, so you do have to be a bit careful
  PLD:
    difficulty: Easy
  RPR:
    difficulty: Medium
    notes:
      - 'Steel recommended'
  SGE:
    difficulty: Easy
    notes:
      - 'Uses its instant fairly frequently, so be prepared for cast
        interruptions'
  WAR:
    difficulty: Easy
---
