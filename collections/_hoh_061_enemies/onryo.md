---
name: Heavenly Onryo
nickname: Onryo
image: onryo.png
start_floor: 61
end_floor: 65
agro: Proximity
hp: 35379
attack_damage: 3350
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: 'Tentacle'
    potency: 80
    type: Physical
    description: 'instant; inflicts concussion (physical DoT potency 50, 15s)'
  - name: 'Accursed Sigh'
    potency: 800
    type: Magic
    description: 'telegraphed conal AoE; inflicts reduced immunity (30s)'
job_specifics:
  DRK:
    difficulty: Medium
    notes:
      - 'Make good use of TBN and other mitigations to negate its high damage
      output'
  GNB:
    difficulty: Medium
  MCH:
    difficulty: Medium
    notes:
      - 'Can be painful. Sprint and Leg Graze recommended'
  PLD:
    difficulty: Medium
  WAR:
    difficulty: Medium
---
