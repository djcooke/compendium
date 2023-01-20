---
name: Heavenly Rakshasa
nickname: Rakshasa
family: Manticore
image: rakshasa.png
start_floor: 86
end_floor: 89
patrol: true
agro: Sight
hp: 62921
attack_damage: 5890
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: true
  slow: unknown
  stun: false
abilities:
  - name: Wild Charge
    potency: 130
    type: Physical
    description: 'instant gap closer; used immediately on pull, and again when
    its damage down debuff (see next ability) wears off'
  - name: Bloodboil
    potency: n/a
    description: 'grants damage up (20%, 30s) to self; used immediately after
    Wild Charge. When the buff expires, it changes to a physical damage down
    debuff (60%, 30s)'
  - name: Ripper Claw
    potency: 600
    type: Physical
    description: 'untelegraphed conal AoE - get away or behind'
  - name: Fireball
    description: 'telegraphed circle AoE'
job_specifics:
  DRK:
    difficulty: Easy
    notes:
      - 'Use TBN for the pull'
  MCH:
    difficulty: Medium
    notes: 'Have heals ready - these hit HARD while the damage bonus is up'
  PLD:
    difficulty: 'Medium'
  WAR:
    difficulty: 'Medium'
---
