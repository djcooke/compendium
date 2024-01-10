---
name: Deep Palace Sasquatch
nickname: Sasquatch
image: sasquatch.png
start_floor: 175
end_floor: 179
agro: Proximity
hp: 25899
attack_damage: 2264
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Browbeat
    potency: 200
    type: Physical
    description: 'instant'
  - name: Ripe Banana
    potency: n/a
    description: 'grants physical damage up (100%, 15s) to self and heals 20%
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
  - Hits VERY hard
  - DO NOT pull while it has the attack bonus
  - Be very careful fighting other enemies nearby
job_specifics:
  GNB:
    difficulty: Medium
  MCH:
    difficulty: Medium
    notes:
      - 'Can be VERY painful. Only pull with Sprint and burst unless you have
        steel active'
  PLD:
    difficulty: Medium
  RDM:
    difficulty: Hard
    notes:
      - 'Steel recommended'
  RPR:
    difficulty: Hard
    notes:
      - 'Steel, Bloodbath, and Potion required'
      - 'Browbeat + auto can almost kill from 100%, so keep your HP up'
  SGE:
    difficulty: Hard
    notes:
      - 'Steel recommended'
      - 'Without steel, a Browbeat + auto-attack double crit will one-shot you.
        Make sure to kite and have a shield ready for Browbeat'
  SMN:
    difficulty: Hard
    notes:
      - "Steel recommended any time, but required in Gloom, HP Penalty, and/or
      Item Penalty enchantments"
      - "Strength recommended"
      - "Doable without steel IF. There is no Gloom, HP Penalty, or Item Penalty enchantment. Dreadwyrm or Titan and Garuda are up. You have room to kite and sprint/shield before the pull"
  WAR:
    difficulty: Medium
---
