---
name: Onyx Dragon
nickname: Dragon
image: dragon.png
start_floor: 147
end_floor: 149
agro: Sight
hp: 18926
attack_damage: 1201
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
  resolution: true
abilities:
  - name: Evil Eye
    potency: 300
    type: Magic
    description: 'conal gaze AoE inflicting terror (5s) - look away, get
    behind, or get away'
    warning: gaze
  - name: Miasma Breath
    potency: 300
    type: Magic
    description: 'telegraphed conal AoE; inflicts disease (15s)'
  - name: 'Chaos Breath (?)' #doesn't look like this one ever uses it at all
    description: 'large telegraphed conal AoE; not used against solo
    adventurers'
job_specifics:
  MCH:
    difficulty: Easy
  SGE:
    difficulty: Easy
---
