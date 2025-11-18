---
name: Traverse Pegasus
nickname: Pegasus
image: pegasus.png
start_floor: 31
end_floor: 33
agro: Sight
hp: 224077
attack_damage: 6542
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Gallop
    potency: 150
    type: Physical
    description: "telegraphed wide line AoE charge attack; inflicts knockback"
    warning: movement
  - name: Nicker
    potency: 900
    type: Magic
    description: "pointblank AoE with late telegraph - get away! Used after
    Gallop if any player is within range, such as if the knockback was blocked"
    warning: pointblank
---
