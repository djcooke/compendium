---
name: Heavenly Shinzei
nickname: Shinzei
family: Suud
image: shinzei.png
start_floor: 84
end_floor: 86
patrol: true
agro: Sight
hp: 62921
attack_damage: 5841
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: true
  slow: true
  stun: false
abilities:
  - name: Body Blow
    potency: 100
    type: Physical
    description: 'instant; inflicts concussion (physical DoT potency 20, 15s)'
  - name: Anoxic Breath
    potency: 800
    type: Magic
    description: 'telegraphed conal AoE; inflicts knockback'
  - name: Thunder II
    potency: 80 + 30x3
    type: Magic
    description: 'circle AoE on marked target hitting 3 times after the initial
    cast; inflicts electrocution (magic DoT potency 10, 30s) on each hit; can
    be interrupted'
job_specifics:
  DRK:
    difficulty: Medium
    notes:
      - 'Steel recommended'
      - 'Don''t interrupt Thunder II as it does less damage than its other
      attacks. Mitigate with Dark Mind instead'
  GNB:
    difficulty: Medium
    notes:
      - 'Don''t interrupt Thunder II as it does less damage than its other
      attacks. Mitigate instead'
  MCH:
    difficulty: Extreme
  PLD:
    difficulty: Hard
    notes:
      - 'Steel recommended'
      - 'Don''t interrupt Thunder II as it does less damage than its other
      attacks'
  WAR:
    difficulty: Hard
    notes:
      - 'Steel recommended'
      - 'Don''t interrupt Thunder II as it does less damage than its other
      attacks'
---
