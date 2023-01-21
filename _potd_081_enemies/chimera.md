---
name: Palace Chimera
nickname: Chimera
image: chimera.png
start_floor: 81
end_floor: 89
patrol: true
agro: Proximity
hp: 13060
attack_damage: 1037
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
  resolution: false
abilities:
  - name: 'The Dragon''s Breath'
    potency: 300
    type: Unique
    description: 'telegraphed conal AoE; inflicts paralysis (15s)'
  - name: 'The Lion''s Breath'
    potency: 300
    type: Unique
    description: 'telegraphed conal AoE; inflicts burns (unique DoT potency
    50, 21s)'
  - name: 'The Ram''s Breath'
    potency: 300
    type: Unique
    description: 'telegraphed conal AoE; inflicts heavy (10s)'
notes:
  - 'Can appear on any floor from 81-89, but seems fairly rare in the earlier
    floors, and more common in the later floors'
job_specifics:
  SGE:
    difficulty: Easy
---
