---
name: Invoked Arch Demon
nickname: Arch Demon
image: archdemon.png
start_floor: 84
end_floor: 86
agro: Sight
hp: 579964
attack_damage: 21000
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
abilities:
  - name: Abyssal Swing
    potency: 4000
    type: Physical
    description: "conal AoE with late telegraph"
    warning: directional
  - name: Abyssal Transfixion
    potency: 150
    type: Physical
    description: "ranged attack on random player; inflicts paralysis (15s).
    Used when below 20% HP. Can be interrupted"
    warning: movement
---
