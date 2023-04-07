---
name: Orthos Specter
nickname: Specter
image: specter.png
start_floor: 86
end_floor: 89
patrol: true
agro: Proximity
hp: 328008
attack_damage: 10860
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
abilities:
  - name: Left Sweep
    description: "huge 210-degree AoE to the left with late telegraph"
    warning: directional
  - name: Right Sweep
    description: "huge 210-degree AoE to the right with late telegraph"
    warning: directional
  - name: Ringing Burst
    potency: 3000
    type: Magic
    description: "donut AoE with late telegraph - get in"
    warning: donut
  - name: Surrounding Burst
    description: "large pointblank AoE with late telegraph - get out"
    warning: pointblank
notes:
  - note: "Rotation:"
    subnotes:
      - "Left Sweep or Right Sweep"
      - "Ringing Burst or Surrounding Burst"
  - "Left/Right Sweep are 180-degree AoEs with an extra 30 degrees to the
    opposite side in front (for example, Left Sweep hits from directly in
    back, around the left side, to directly in front and 30 degrees beyond)"
---
