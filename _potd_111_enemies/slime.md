---
name: Deep Palace Slime
nickname: Slime
image: slime.png
start_floor: 113
end_floor: 116
agro: Sound
hp: 13502
attack_damage: 941
attack_type: Magic
attack_name: Acid Spray
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: false
  stun: true
  resolution: false
abilities:
  - name: 'Rapture'
    potency: 100% of max HP
    description: 'instant AoE sacrificial enrage; used 37 seconds after pull'
notes:
  - 'Acid Spray inflicts stacking physical vulnerability up (+10% per stack,
    max 8 stacks, 5s); this ability does magic damage, so its own damage is
    not affected'
  - 'Can be slowed if transfigured via Pomander of Witching'
---
