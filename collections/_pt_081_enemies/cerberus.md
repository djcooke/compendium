---
name: Invoked Cerberus
nickname: Cerberus
image: cerberus.png
start_floor: 86
end_floor: 89
agro: Sight
hp: 608209
attack_damage: 22000
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: 
  stun: true
abilities:
  - name: Lightning Bolt
    potency: 4000
    type: Magic
    description: "circle AoE with late telegraph directly in front of the
    enemy"
  - name: Hellclaw
    description: "forward conal AoE with late telegraph"
    warning: directional
  - name: Tail Blow
    potency: 4000
    type: Physical
    description: "backward conal AoE with late telegraph"
    warning: directional
notes:
  - "Uses Lightning Bolt followed by either Hellclaw or Tail Blow"
---
