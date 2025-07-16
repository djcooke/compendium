---
name: Orthosystem γ
nickname: System γ
image: system_gamma.png
start_floor: 91
end_floor: 94
patrol: true
agro: Proximity
hp: 336312
attack_damage: 8200
attack_type: Magic
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
abilities:
  - name: High Voltage
    description: "huge pointblank AoE with late telegraph - get out; can be
    interrupted"
    warning: pointblank
  - name: Repelling Cannons
    description: "pointblank AoE with late telegraph - get out"
    warning: pointblank
  - name: Ring Cannon
    potency: 4500
    type: Magic
    description: "donut AoE with late telegraph - get in"
    warning: donut
notes:
  - "Can only be slowed with Arm's Length if transfigured via Pomander of
  Witching since it doesn't normally do melee auto-attacks"
---
