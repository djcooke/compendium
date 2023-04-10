---
name: Heavenly Hyoga
nickname: Hyoga
family: Tiger
image: hyoga.png
start_floor: 71
end_floor: 74
patrol: true
agro: Sight
hp: 53740
attack_damage: 5043
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
abilities:
  - name: 'Absolute Zero'
    potency: 400
    type: Magic
    description: 'telegraphed huge conal AoE; inflicts deep freeze (magic DoT
    potency 10, 9s)'
    warning: directional
  - name: 'Eyeshine'
    potency: 100
    type: Magic
    description: '360 degree gaze inflicting deep freeze (magic DoT potency 50,
    15s) - look away'
    warning: gaze
  - name: 'Jaws (?)'
    potency: n/a
    description: 'instant death; used on players with deep freeze'
job_specifics:
  DRK:
    difficulty: Medium
    notes:
      - 'A good time to use TBN is as the Eyeshine cast finishes'
  MCH:
    difficulty: Medium
    notes:
      - 'Painful, but its abilities give you time to recover'
      - 'Use Sprint after Eyeshine if needed rather than before pull, as you
      need to be close for Absolute Zero. Stay close enough for the next one
      too though!'
  PLD:
    difficulty: Easy
  WAR:
    difficulty: Easy
---
