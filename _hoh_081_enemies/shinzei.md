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
attack_damage: 5782
attack_type: Physical
vulnerabilities:
  bind: unknown
  heavy: unknown
  sleep: true
  slow: true
  stun: false
abilities:
  - name: Body Blow
    potency: 100
    description: 'instant; inflicts concussion (DoT potency 50?, 15s)'
  - name: Anoxic Breath
    potency: ?
    description: 'telegraphed conal AoE'
  - name: Thunder II
    potency: 80 + 30x3
    description: 'circle AoE on marked target hitting 3 times after the initial
    cast; inflicts electrocution (DoT potency 10, 30s) on each hit; can be
    interrupted'
job_specifics:
  DRK:
    difficulty: Medium
    notes:
      - 'Steel recommended'
      - 'Don''t interrupt Thunder II as it does less damage than its other
      attacks. Mitigate with Dark Mind instead'
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
