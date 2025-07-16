---
name: Heavenly Jujishi
nickname: Jujishi
family: Griffin
image: jujishi.png
start_floor: 76
end_floor: 79
agro: Proximity
hp: 53740
attack_damage: 4535
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: true
abilities:
  - name: 'Freefall'
    potency: 500
    type: Physical
    description: 'telegraphed circle AoE jump attack - can also auto-attack
    during the jump'
  - name: 'Golden Talons'
    potency: 130
    type: Physical
    description: 'instant'
  - name: 'Winds of Winter'
    potency: 400
    type: Magic
    description: 'telegraphed huge pointblank AoE; inflicts windburn (magic DoT
    potency 20, 30s); can be LoSed. If this attack hits, it grants haste (25s)
    to the Jujishi, making Freefall an almost instant cast'
    warning: explosion
notes:
  - note: 'Rotation:'
    subnotes:
      - 'Freefall (immediately when pulled)'
      - 'Golden Talons x3'
      - 'Freefall'
      - 'Winds of Winter - Be ready to stun or LoS'
job_specifics:
  DRK:
    difficulty: Easy
    notes:
      - 'A good time to use TBN is after the first Freefall'
  GNB:
    difficulty: Medium
    notes:
      - 'Use a defensive cooldown after the first Freefall'
  MCH:
    difficulty: Hard
    notes:
      - 'Try to bait the first Freefall so you can still be in range to DPS
      while it casts'
      - 'Steel or frailty recommended; have sprint and heals ready otherwise'
  PLD:
    difficulty: 'Medium'
    notes:
      - 'Use a defensive cooldown after the first Freefall'
  WAR:
    difficulty: Medium
    notes:
      - 'Use a defensive cooldown after the first Freefall'
---
