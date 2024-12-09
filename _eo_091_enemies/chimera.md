---
name: Servomechanical Orthochimera
nickname: Chimera
image: chimera.png
start_floor: 95
end_floor: 98
patrol: true
agro: Sight
hp: 354304
attack_damage: 11415
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
abilities:
  - name: Feral Lunge
    potency: 80
    type: Physical
    description: "instant gap closer"
  - name: "The Ram's Voice"
    description: "untelegraphed pointblank AoE - get out"
    warning: pointblank
  - name: "The Dragon's Voice"
    potency: 3500
    type: Magic
    description: "untelegraphed donut AoE - get in"
    warning: donut
  - name: "The Dragon's Breath"
    description: "conal AoE to the front and left with late telegraph - get
    behind"
    warning: directional
  - name: Engulfing Ice
    description: "conal AoE to the front and right with late telegraph - get
    behind"
    warning: directional
  - name: "The Scorpion's Sting"
    description: "backward conal AoE with quick cast - get in front; used when
    someone is close behind"
    warning: directional
---
