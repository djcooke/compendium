---
name: Invoked Succubus
nickname: Succubus
family: Succubus
start_floor: 84
end_floor: 86
patrol: true
agro: Sight
hp: 579964
attack_damage: 21000
attack_type: Physical
vulnerabilities:
  bind: 
  heavy: 
  sleep: false
  slow: 
  stun: true
abilities:
  - name: "Passions' Heat"
    potency: 150
    type: Magic
    description: "ranged attack on random player; inflicts Pyretic (3s). Taking
    any action (including moving or facing a different direction) before the
    debuff runs out inflicts magic damage at potency 4500, which is generally
    a one-shot. The attack can be LoSed"
    warning: other
notes:
  - "As of patch 7.35, the Pyretic debuff can trigger even if you remain
    perfectly still. This is probably a bug, but to be safe, treat this as an
    immediate one-shot and always LoS or stun"
---
