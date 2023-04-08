---
name: Deep Palace Spriggan
nickname: Spriggan
image: spriggan.png
start_floor: 121
end_floor: 125
agro: Sight
hp: 14277
attack_damage: 976
attack_type: Magic
attack_name: Blizzard
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
  resolution: false
abilities:
  - name: 'Fast Boulder'
    potency: 300
    type: Magic
    description: 'telegraphed circle AoE; also used out of combat'
    warning: idle
  - name: Haste
    potency: n/a
    description: 'grants haste (30s) to self'
notes:
  - "Can only be slowed with Arm's Length if transfigured via Pomander of
  Witching since it doesn't normally do melee auto-attacks"
job_specifics:
  SGE:
    difficulty: Easy
---
