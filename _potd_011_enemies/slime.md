---
name: Palace Slime
nickname: Slime
image: slime.png
start_floor: 13
end_floor: 16
agro: Sound
hp: 904
attack_damage: 67
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: true
abilities:
  - name: Digest
    potency: 100
    type: Physical
    description: 'absorbs 100% of damage dealt'
  - name: Rupture
    potency: 170% of max HP
    type: Unique
    description: 'instant AoE sacrificial enrage; used 20 seconds after pull
    (immediately after the second Digest)'
    warning: explosion
job_specifics:
  SGE:
    difficulty: Easy
---
