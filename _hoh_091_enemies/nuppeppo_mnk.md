---
name: Heavenly Nuppeppo
nickname: MNK
family: MNK
image: nuppeppo_mnk.png
start_floor: 91
end_floor: 94
agro: Sight
hp: 69191
attack_damage: 3023
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
abilities:
  - name: 'Footwork'
    description: 'grants haste (25s) to self'
  - name: 'Featherfoot'
    description: 'grants evasion up (5s) to self; used immediately after
    Footwork'
  - name: 'Gutripper'
    description: 'inflicts concussion (DoT potency 100, 15s)'
  - name: 'Triple Threat'
    potency: 40 (x3)
    description: 'instant 3-hit attack; used 3 times in a row (9 hits total)'
job_specifics:
  DRK:
    difficulty: Medium
    notes:
      - 'Steel recommended if gloom'
      - 'Make sure to use your mitigations'
      - 'Use TBN for Triple Threats'
  MCH:
    difficulty: 'Hard'
    notes:
      - 'Steel recommended'
      - 'Use Arm''s Length to overwrite its haste with slow'
  PLD:
    difficulty: 'Medium'
    notes:
      - 'Steel recommended'
      - 'Try to stun Featherfoot for uptime'
  WAR:
    difficulty: 'Medium'
    notes:
      - 'Steel recommended'
      - 'Try to stun Featherfoot for uptime'
---
