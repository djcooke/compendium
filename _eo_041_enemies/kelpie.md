---
name: Orthos Kelpie
nickname: Kelpie
image: kelpie.png
start_floor: 44
end_floor: 46
patrol: true
agro: Sight
hp: 169540
attack_damage: 4268
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Gallop
    potency: 120
    type: Physical
    description: "charge attack on marked player; can be LoSed"
    warning: other
  - name: Bloody Puddle
    potency: 5000
    type: Magic
    description: "untelegraphed large pointblank AoE; used after Gallop if
    Gallop was not stunned/slept/LoSed"
    warning: pointblank
  - name: Torpedo
    potency: 150
    type: Physical
    description: "instant"
notes:
  - "LoSing the charge is not mandatory if you have room to dodge the followup
    AoE"
---
