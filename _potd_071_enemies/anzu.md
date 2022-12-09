---
name: Palace Anzu
nickname: Anzu
image: anzu.png
start_floor: 71
end_floor: 73
patrol: true
agro: Sight
hp: 6198
attack_damage: 597
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: 'Sonic Boom (?)'
    description: 'instant; inflicts windburn (DoT potency 30, 20s)'
  - name: Flying Frenzy
    potency: 180
    description: 'instant circle AoE gap closer; inflicts stun (2s) and
    vulnerability up (50%, 10s); used when HP is below 30%. Diminishing returns
    do NOT apply to this stun (it is always 2s)'
---
