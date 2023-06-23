---
name: Heavenly Ryujin
nickname: Ryujin
image: ryujin.png
start_floor: 84
end_floor: 87
agro: Sight
hp: 60682
attack_damage: 5564
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: true
  slow: true
  stun: true
abilities:
  - name: 'Straight Punch'
    potency: 130
    type: Physical
    description: 'instant'
  - name: 'Firewater'
    potency: 800
    type: Magic
    description: 'telegraphed circle AoE; inflicts burns'
  - name: 'Elbow Drop'
    potency: 400
    type: Physical
    description: 'untelegraphed backward conal AoE; inflicts stun (6s); used if
    someone is behind'
    warning: directional
notes:
  - 'Elbow Drop can be baited to delay its auto-attacks; just don''t get hit by
  it!'
job_specifics:
  DRK:
    difficulty: Medium
    notes:
      - 'Can be scary without steel'
  MCH:
    difficulty: Hard
    notes:
      - 'Steel recommended'
  PLD:
    difficulty: Medium
  WAR:
    difficulty: 'Medium'
---
