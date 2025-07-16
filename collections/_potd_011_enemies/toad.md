---
name: Palace Toad
nickname: Toad
image: toad.png
start_floor: 11
end_floor: 15
agro: Sight
hp: 833
attack_damage: 62
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Sticky Tongue
    potency: 50
    type: Physical
    description: 'instant; draws the target in'
    warning: movement
  - name: Labored Leap
    potency: 500
    type: Physical
    description: 'telegraphed pointblank AoE; used immediately after Sticky
    Tongue'
job_specifics:
  SGE:
    difficulty: Easy
---
