---
name: Invoked Humbaba
nickname: Humbaba
family: Muud Suud
start_floor: 86
end_floor: 89
patrol: true
agro: 
hp: 
attack_damage: 22000
attack_type: Physical
vulnerabilities:
  bind: 
  heavy: 
  sleep: 
  slow: 
  stun: 
abilities:
  - name: Triple Blow
    potency: 50 (x3)
    type: Physical
    description: "3 attacks on the target, followed by Bellows"
  - name: Quadruple Blow
    potency: 50 (x4)
    type: Physical
    description: "4 attacks on the target, followed by Bellows"
  - name: Bellows
    potency: 4000
    type: Magic
    description: "instant conal AoE"
    warning: directional
notes:
  - "Uses either Triple or Quadruple Blow followed by Bellows. Count the hits
    and move behind IMMEDIATELY after the last hit to avoid Bellows"
  - "The hits from Triple/Quadruple Blow cannot be LoS'd or outranged (the
    Humbaba will chase after the target until it gets in range)"
---
