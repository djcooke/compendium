---
name: Traverse Talos
image: talos.png
start_floor: 61
end_floor: 69
agro: Sight
patrol: true
hp: 574315
attack_damage: 21000
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: false
abilities:
  - name: Accelerate
    potency: 1600
    type: Physical
    description: "circle AoE with late telegraph on random player"
    warning: pointblank
  - name: Subduction
    potency: 1600
    type: Physical
    description: "untelegraphed donut AoE used immediately after Accelerate"
    warning: donut
---
