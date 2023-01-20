---
name: Heavenly Morbol
nickname: Morbol
image: morbol.png
start_floor: 64
end_floor: 66
patrol: true
agro: Sight
hp: 38066
attack_damage: 3707
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: true
abilities:
  - name: 'Quaver'
    potency: 700
    type: Physical
    description: 'telegraphed pointblank AoE; inflicts heavy (20s)'
  - name: 'Offal Breath'
    potency: n/a
    description: 'telegraphed circle AoE; inflicts many debuffs'
notes:
  - note: 'Offal Breath inflicts these debuffs:'
    subnotes:
      - 'Poison (magic DoT potency 10, 20s)'
      - 'Nausea (20s)'
      - 'Slow (20s)'
      - 'Blind (30s)'
      - 'Heavy (20s)'
      - 'Silence (10s)'
      - 'Paralysis (30s)'
job_specifics:
  DRK:
    difficulty: Easy
  GNB:
    difficulty: Easy
  MCH:
    difficulty: Easy
  PLD:
    difficulty: Easy
  WAR:
    difficulty: Easy
---
