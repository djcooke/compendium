---
name: Heavenly Tofu
nickname: Tofu
family: Pudding
image: tofu.png
start_floor: 75
end_floor: 78
agro: Sight
hp: 49000
attack_damage: 4084
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Blizzard
    potency: 100
    description: 'used frequently in addition to melee auto-attacks'
  - name: Golden Tongue
    potency: n/a
    description: 'grants magic damage up (50%, 30s) to self'
notes:
  - 'Does not make an effort to come into melee range unless Golden Tongue is
  interrupted'
job_specifics:
  MCH:
    difficulty: Easy (IF you LoS well)
    notes:
      - 'Keep at a distance and LoS casts to take no damage'
      - 'Do not interrupt Golden Tongue, or it will come into melee range'
  PLD:
    difficulty: Medium
    notes:
      - 'Make sure to interrupt Golden Tongue'
  WAR:
    difficulty: Easy
    notes:
      - 'Make sure to interrupt Golden Tongue'
---
