---
name: Palace Claw
nickname: Claw
image: claw.png
family: Scorpion
start_floor: 85
end_floor: 89
agro: Sight
hp: 7858
attack_damage: 762
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: 'Inspire'
    potency: n/a
    description: 'instant; draws the target in and inflicts prey. Knockback
    immunity does not work against the draw-in'
    warning: movement
  - name: Impale
    potency: 130
    type: Physical
    description: 'used against players with prey; clears prey status'
job_specifics:
  SGE:
    difficulty: Medium
    notes:
      - 'Draw-in can be dangerous in multipulls'
---
