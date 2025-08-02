---
name: Heavenly Dokyu
nickname: Dokyu
family: Dreadnaught
image: dokyu.png
start_floor: 56
end_floor: 59
patrol: true
agro: Sight
hp: 26198
attack_damage: 2705
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
abilities:
  - name: 'Incinerate'
    potency: 900
    type: Magic
    description: 'telegraphed conal AoE; inflicts stacking suppuration
    (max HP -15% and damage taken +15% per stack, 30s)'
  - name: 'Wrecking Ball'
    potency: 900
    type: Magic
    description: 'telegraphed circle AoE; used immediately after Incinerate'
job_specifics:
  MCH:
    difficulty: Easy
  PLD:
    difficulty: Easy
---
