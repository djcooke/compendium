---
name: Invoked Succubus
nickname: Succubus
image: succubus.png
start_floor: 84
end_floor: 86
patrol: true
agro: Sight
hp: 579964
attack_damage: 21000
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: 
  stun: true
abilities:
  - name: "Passions' Heat"
    potency: 150
    type: Magic
    description: "untelegraphed circle AoE on random player (the player is
    indicated with an arrow marker but the circle is not telegraphed). Inflicts
    Pyretic (3s); taking any action (including moving or facing a different
    direction) before the debuff runs out inflicts damage at potency 5000,
    which is generally a one-shot. The attack can be LoSed"
    warning: other
notes:
  - note: 'As of patch 7.35, the Pyretic debuff can trigger even if you remain
    perfectly still. This seems to be caused by the "Automatically face target
    when using action" setting in the character target settings, so if you do
    get hit, make sure to untarget the succubus before it starts moving'
    subnotes:
      - "It's still safer to LoS or stun"
---
