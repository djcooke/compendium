---
name: Palace Soulflayer
nickname: Soulflayer
image: soulflayer.png
start_floor: 57
end_floor: 59
agro: Sight
hp: 5201
attack_damage: 541
attack_type: Magic
attack_name: Water
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Mind Blast
    potency: 300
    type: Magic
    description: 'telegraphed pointblank AoE; inflicts paralysis (15s)'
  - name: 'Canker'
    potency: n/a
    description: 'enrage; inflicts disease (15s) with strong heavy effect; can
    be interrupted. Used 37 seconds after pull'
    warning: movement
notes:
  - "Can only be slowed with Arm's Length if transfigured via Pomander of
  Witching since it doesn't normally do melee auto-attacks"
job_specifics:
  SGE:
    difficulty: Easy
    notes:
      - 'Beware Canker in multipulls'
---
