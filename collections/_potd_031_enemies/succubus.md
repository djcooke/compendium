---
name: Nightmare Succubus
nickname: Succubus
image: succubus.png
start_floor: 31
end_floor: 35
patrol: true
agro: Sight
hp: 3890
attack_damage: 351
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: true
abilities:
  - name: Dark Mist
    potency: 300
    type: Magic
    description: 'large telegraphed pointblank AoE; inflicts terror (10s)'
  - name: Void Fire II
    potency: 300
    type: Magic
    description: 'telegraphed circle AoE; used immediately after Dark Mist'
job_specifics:
  SGE:
    difficulty: Easy
    notes:
      - 'Be careful in multipulls not to mistake Dark Mist AoE for an ogre''s
      Heartburn'
---
