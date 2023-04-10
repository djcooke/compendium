---
name: Heavenly Rowan
nickname: Rowan
family: Gorilla
image: rowan.png
start_floor: 81
end_floor: 83
agro: Sight
hp: 60682
attack_damage: 5564
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: true
  slow: true
  stun: unknown
abilities:
  - name: Browbeat
    potency: 110
    type: Physical
    description: 'instant'
  - name: Ripe Banana
    potency: n/a
    description: 'grants physical damage up (100%, 15s) to self and heals ~15%
    of max HP; only used out of combat. After using this, it will use Chest
    Thump every few seconds until the buff expires'
    warning: other
  - name: Chest Thump
    potency: 30
    type: Magic
    description: 'huge 1.5 room instant AoE that inflicts physical
    vulnerability up (5% per stack, max 8 stacks, 8s). Only used out of combat
    during Ripe Banana'
    warning: idle
notes:
  - 'Hits hard, and doesn''t stop to use abilities so the damage is constant'
  - DO NOT pull while it has the attack bonus
  - Be very careful fighting other enemies nearby
job_specifics:
  DRK:
    difficulty: Medium
    notes:
      - 'Steel recommended if gloom'
  GNB:
    difficulty: Medium
    notes:
      - 'Requires good use of defensive cooldowns and potions'
      - 'Steel recommended if gloom'
  MCH:
    difficulty: Hard
    notes:
      - 'Steel required'
  PLD:
    difficulty: Medium
    notes:
      - 'Steel recommended'
  WAR:
    difficulty: 'Medium'
---
