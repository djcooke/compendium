---
name: Deep Palace Worm
nickname: Worm
image: worm.png
start_floor: 181
end_floor: 189
agro: Sound
hp: 35749
attack_damage: 2900
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Sand Pillar
    potency: 120
    type: Magic
    description: 'instant circle AoE on random player. Also used out of combat,
    with potency 75; be very careful if there are several worms nearby, as
    getting hit by a few of these at once could kill you'
    warning: idle
  - name: Bottomless Desert
    potency: 20
    description: 'quick huge pointblank AoE; draws players in. Knockback
    immunity does not work, but draw-in will not work on floors with knockback
    penalty'
    warning: movement
  - name: Temblor
    potency: 350
    description: 'instant pointblank AoE; used immediately after Bottomless
    Desert'
    warning: explosion
notes:
  - 'Enrages after 30 seconds, using Bottomless Desert followed by Temblor.
    Knockback penalty blocks the draw-in, making them easier to deal with'
  - 'Can appear on any floor from 181-189, but seems fairly rare in the earlier
    floors, and more common in the later floors'
job_specifics:
  GNB:
    difficulty: Hard
      - 'Can probably stun after the draw-in and run out of AoE range (?);
      otherwise, keep your HP up and use mitigation and the damage isn''t too
      bad'
  MCH:
    difficulty: Hard
    notes:
      - Avoid if possible
  PLD:
    difficulty: Hard
    notes:
      - Strength or steel recommended
      - 'Can probably stun after the draw-in and run out of AoE range (?);
      otherwise, keep your HP up and use mitigation and the damage isn''t too
      bad'
  RDM:
    difficulty: Hard
    notes:
      - Steel required
      - Strength recommended
  RPR:
    difficulty: Hard
    notes:
      - 'Avoid if possible'
      - 'Strength or steel required'
  SGE:
    difficulty: Hard
    notes:
      - 'Avoid if possible'
      - 'Steel required'
      - 'Shield needed to survive Temblor crit + followup auto'
---
