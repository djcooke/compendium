---
name: Deep Palace Gigantoad
nickname: Gigantoad
image: gigantoad.png
start_floor: 111
end_floor: 113
patrol: true
agro: Sight
hp: 13392
attack_damage: 941
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Sticky Tongue
    potency: 50
    type: Physical
    description: 'instant; draws the target in, and inflicts stun (6s) if
    looking AWAY from the toad - be sure to face toward the toad so you can
    escape Labored Leap'
  - name: Labored Leap
    potency: 500
    type: Physical
    description: 'telegraphed pointblank AoE; used immediately after Sticky
    Tongue'
job_specifics:
  SGE:
    difficulty: Medium
---
