---
name: Orthokunoichi
nickname: Kunoichi
image: kunoichi.png
start_floor: 71
end_floor: 79
patrol: true
agro: Proximity
hp: 302404
attack_damage: 5510
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
abilities:
  - name: Shukuchi
    potency: n/a
    description: "instant gap closer"
  - name: Triple Slash
    potency: 50 (x3)
    type: Physical
    description: "instant 3-hit attack"
  - name: Assassinate
    potency: 150% of max HP
    type: Unique
    description: "used on players with less than 20% of max HP"
    warning: other    
---
