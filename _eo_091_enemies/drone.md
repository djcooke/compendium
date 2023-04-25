---
name: Orthodrone
nickname: Drone
image: drone.png
start_floor: 91
end_floor: 98
agro: Proximity
hp: 319704
attack_damage: 7787
attack_type: Magic
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
abilities:
  - name: Auto-cannons
    description: "telegraphed huge line AoE"
  - name: Self-detonate
    potency: 5000
    type: Magic
    description: "untelegraphed pointblank AoE used AFTER DEATH - get away"
    warning: explosion
notes:
  - "Can only be slowed with Arm's Length if transfigured via Pomander of
  Witching since it doesn't normally do melee auto-attacks"
---
