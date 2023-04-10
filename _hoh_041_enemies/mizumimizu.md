---
name: Heavenly Mizumimizu
nickname: Mizumimizu
family: Worm
image: mizumimizu.png
start_floor: 46
end_floor: 49
patrol: true
agro: Sound
hp: 10748
attack_damage: 1137
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Sand Pillar
    potency: 30
    type: Magic
    description: 'instant'
  - name: Bottomless Desert
    potency: 20
    type: Magic
    description: 'quick huge pointblank AoE; draws players in and inflicts
    stun (5s). Used 30 seconds after pull and then at 60-second intervals.
    Knockback immunity does not work, but fully shielding the damage will also
    block the draw-in'
    warning: movement
  - name: Temblor
    potency: 1000
    type: Magic
    description: 'instant pointblank AoE (enrage); used immediately after
    Bottomless Desert'
    warning: explosion
---
