---
name: Orthos Cobra
nickname: Cobra
image: cobra.png
start_floor: 61
end_floor: 64
patrol: true
agro: Sight
hp: 309324
attack_damage: 10847
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Regorge
    description: "telegraphed circle AoE"
  - name: Whip Back
    potency: 2500
    type: Physical
    description: "untelegraphed backward conal AoE; used after Regorge if
    someone is behind"
    warning: directional
  - name: "Disseminate"
    potency: n/a
    description: "instant used on death; inflicts vulnerability up (50% per
    stack, 20s)"
---
