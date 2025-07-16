---
name: Deep Palace Monk
nickname: Monk
family: Kraken
image: monk.png
start_floor: 136
end_floor: 139
agro: Proximity
hp: 16602
attack_damage: 1091
attack_type: Magic
attack_name: Water
vulnerabilities:
  bind: false
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Sucker
    potency: n/a
    description: 'large untelegraphed pointblank AoE; draws players in'
    warning: movement
  - name: Flood
    potency: 350
    type: Magic
    description: 'telegraphed pointblank AoE; used immediately after Sucker'
notes:
  - "Can only be slowed with Arm's Length if transfigured via Pomander of
  Witching since it doesn't normally do melee auto-attacks"
job_specifics:
  SGE:
    difficulty: Easy
    notes:
      - 'Draw-in can be dangerous in multipulls'
---
