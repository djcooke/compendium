---
name: Deep Palace Gourmand
nickname: Gourmand
image: gourmand.png
start_floor: 131
end_floor: 134
patrol: true
agro: Proximity
hp: 15937
attack_damage: 1058
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
  resolution: true
abilities:
  - name: Beatdown
    potency: 130
    type: Physical
    description: 'instant'
  - name: Inhale
    potency: n/a
    description: 'instant conal AoE draw-in; inflicts stun (2s). Only used
    against lower-enmity party members (not used against solo adventurers)'
  - name: Dirty Sneeze
    potency: 100
    type: Magic
    description: 'instant conal AoE; used immediately after Inhale on the same
    target'
job_specifics:
  SGE:
    difficulty: Easy
---
