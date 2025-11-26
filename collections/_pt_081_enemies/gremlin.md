---
name: Invoked Gremlin
nickname: Gremlin
image: gremlin.png
start_floor: 81
end_floor: 83
agro: Sight
hp: 551719
attack_damage: 20000
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Bad-mouth
    potency: n/a
    description: "inflicts slow (50%, 12s) and cancels any active Haste buff
    on the target. While this debuff is active, Haste cannot be reapplied (it
    will have no effect when used)"
  - name: Claw
    potency: 4000
    type: Physical
    description: "conal AoE with late telegraph"
    warning: directional
notes:
  - "The slow effect of Bad-mouth is curable, so it can be blocked with a
    pomander of purification, which also preserves your Haste buff"
---
