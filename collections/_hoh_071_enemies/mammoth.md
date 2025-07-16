---
name: Heavenly Mammoth
nickname: Mammoth
image: mammoth.png
start_floor: 74
end_floor: 77
agro: Sight
hp: 51277
attack_damage: 4252
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: true
  slow: true
  stun: false
abilities:
  - name: 'Wooly Inspiration'
    potency: n/a
    description: 'telegraphed narrow but long conal AoE draw-in; inflicts stun
    (2s)'
    warning: movement
  - name: 'Tusk Butt'
    potency: 800
    type: Physical
    description: 'untelegraphed conal AoE; used instantly after draw-in, but is
    a wider cone than the draw-in - get behind!'
    warning: directional
  - name: 'Prehistoric Trumpet'
    potency: 75
    type: Magic
    description: 'huge untelegraphed pointblank AoE; only used out of combat'
    warning: idle
notes:
  - 'Be careful near mammoths when you''ve used a Pomander of Concealment, as
  Prehistoric Trumpet will break the effect'
job_specifics:
  DRK:
    difficulty: Easy
  GNB:
    difficulty: Easy
  MCH:
    difficulty: Medium
  PLD:
    difficulty: Easy
  WAR:
    difficulty: Easy
---
