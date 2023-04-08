---
name: Deep Palace Claw
nickname: Claw
family: Scorpion
image: claw.png
start_floor: 185
end_floor: 189
agro: Sight
hp: 28002
attack_damage: 2687
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: 'Inspire'
    potency: n/a
    description: 'instant; draws the target in and inflicts prey. Knockback
    immunity does not work against the draw-in'
    warning: movement
  - name: Impale
    potency: 130
    type: Physical
    description: 'used against players with prey; clears prey status'
  - name: Tail Screw
    potency: 150
    type: Magic
    description: 'untelegraphed pointblank AoE; inflicts slow (20s)'
notes:
  - 'Does a draw-in that inflicts Prey status followed by Impale. Knockback
    immunity does not work, but draw-in will not work on floors with knockback
    penalty, making them easier to deal with'
job_specifics:
  GNB:
    difficulty: Medium
    notes:
      - 'Stun Tail Screw'
      - 'Slower and more difficult to fight with amnesia enchantment due to the
      slow'
  MCH:
    difficulty: Hard
    notes:
      - Steel required unless floor has no knockback debuff
  PLD:
    difficulty: Medium
    notes:
      - 'Stun Tail Screw'
      - 'Slower and more difficult to fight with amnesia enchantment due to the
      slow'
  RDM:
    difficulty: Extreme
    notes:
      - Steel required
  RPR:
    difficulty: Hard
    notes:
      - 'Avoid if possible'
      - 'Steel required'
      - 'Stun Tail Screw'
  WAR:
    difficulty: Easy
    notes:
      - 'Stun Tail Screw'
      - 'Slower and more difficult to fight with amnesia enchantment due to the
      slow'
  SGE:
    difficulty: Medium
    notes:
      - 'Dangerous without steel. Kite between draw-ins to avoid taking an
      auto-attack with Tail Screw'
---
