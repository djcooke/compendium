---
name: Orthos Yabby
nickname: Yabby
image: yabby.png
start_floor: 54
end_floor: 55
patrol: true
agro: Sight
hp: 249120
attack_damage: 8037
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: false
  stun: false
abilities:
  - name: Scuttling Skewer
    potency: 140
    type: Physical
    description: "instant; inflicts heavy (4s) which cannot be removed with
    Esuna"
  - name: Tail Screw
    potency: 99% of HP
    type: Unique
    description: "telegraphed circle AoE; reduces players' HP to 1% of max.
    Used immediately after Scuttling Skewer if any players are heavied"
notes:
  - "If you shield all the damage from Scuttling Skewer, the heavy will also
    be blocked and Tail Screw will be skipped"
job_specifics:
  SGE:
    difficulty: Easy
  WHM:
    difficulty: Easy
---
