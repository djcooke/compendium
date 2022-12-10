---
name: Heavenly Kubinashi
nickname: Kubinashi
family: Dullahan
image: kubinashi.png
start_floor: 94
end_floor: 96
patrol: true
agro: Sight
hp: 72326
attack_type: Physical
vulnerabilities:
  bind: unknown
  heavy: unknown
  sleep: false
  slow: true
  stun: false
abilities:
  - name: 'Iron Justice'
    description: 'Cleave'
  - name: 'Drainstrikes'
    potency: n/a
    description: 'grants drainstrikes (30s) - attacks drain HP from target,
    healing self'
  - name: 'Cloudcover'
    description: 'telegraphed circle AoE; can be interrupted'
notes:
  - 'Each time it grows, it gains a stacking damage up buff'
  - note: 'Pattern:'
    subnotes:
      - 'Drainstrikes'
      - 'Iron Justice'
      - 'Cloudcover x2'
      - 'Grows'
      - 'Iron Justice x2'
      - 'Grows'
job_specifics:
  MCH:
    difficulty: 'Extreme'
    notes:
      - 'Avoid'
  PLD:
    difficulty: 'Extreme'
    notes:
      - 'Steel required'
      - 'Witching recommended at start to delay growing'
      - 'Consider Strength and/or Frailty'
---
