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
    potency: 120
    type: Physical
    description: 'cleave'
  - name: 'Drainstrikes'
    potency: n/a
    description: 'grants drainstrikes (3m), causing auto-attacks to heal self
    for 28.6% of damage dealt'
  - name: 'Cloudcover'
    description: 'telegraphed circle AoE; can be interrupted'
  - name: '?'
    description: 'grants stacking damage up (+10% per stack)'
  - name: 'Black Nebula'
    description: 'untelegraphed enrage; used about 1 minute after pull; can be
    interrupted'
    warning: explosion
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
