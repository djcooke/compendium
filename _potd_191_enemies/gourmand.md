---
name: Deep Palace Gourmand
nickname: Gourmand
image: gourmand.png
start_floor: 196
end_floor: 199
agro: Proximity
hp: 32097
attack_damage: 3140
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
    potency: 70
    type: Magic
    description: 'instant conal AoE; used immediately after Inhale on the same
    target'
job_specifics:
  GNB:
    difficulty: Medium
  MCH:
    difficulty: Medium
    notes:
      - Steel required
      - Can be painful. Sprint and Leg Graze recommended
  RDM:
    difficulty: Hard
    notes:
      - Steel required
  RPR:
    difficulty: Hard
    notes:
      - 'Requires steel or Bloodbath and Potion'
  SGE:
    difficulty: Hard
    notes:
      - 'Steel or timely shields required'
---
