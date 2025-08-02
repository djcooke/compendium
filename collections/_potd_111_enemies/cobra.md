---
name: Deep Palace Cobra
nickname: Cobra
image: cobra.png
start_floor: 114
end_floor: 117
patrol: true
agro: Sight
hp: 13502
attack_damage: 943
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Regorge
    potency: 130
    type: Magic
    description: 'instant; inflicts poison (magic DoT potency 60, 15s)'
  - name: Devour
    potency: 100% of max HP
    type: Unique
    description: 'instant death; only used if you are a toad'
    warning: other
job_specifics:
  SGE:
    difficulty: Easy
---
