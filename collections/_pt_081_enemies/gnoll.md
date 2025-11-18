---
name: Traverse Gnoll
nickname: Gnoll
image: gnoll.png
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
  slow: 
  stun: true
abilities:
  - name: Nox Blast
    potency: 4000
    type: Magic
    description: "wide conal AoE with late telegraph"
    warning: directional
  - name: Maul
    potency: 4000
    type: Physical
    description: "single-target ranged enrage with long cast; used when HP goes
    below 30%, but not until 30 seconds after pull. Can be interrupted or
    LoSed"
    warning: explosion
---
