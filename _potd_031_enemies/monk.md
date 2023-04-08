---
name: Nightmare Monk
nickname: Monk
family: Kraken
image: monk.png
start_floor: 36
end_floor: 39
agro: Proximity
hp: 4148
attack_damage: 389
attack_type: Magic
attack_name: Water
vulnerabilities:
  bind: true
  heavy: false
  sleep: false
  slow: true
  stun: true
abilities:
  - name: Sucker
    potency: n/a
    description: 'large untelegraphed pointblank AoE; draws players in'
  - name: Flood
    potency: 250
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
