---
name: Heavenly Garula
nickname: Garula
family: Buffalo
image: garula.png
start_floor: 81
end_floor: 84
patrol: true
agro: Sight
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
abilities:
  - name: 'Rush'
    description: 'gap-closer/tankbuster; used immediately on pull'
  - name: 'Heave'
    description: 'telegraphed conal AoE'
  - name: 'Disorienting Groan'
    description: 'telegraphed large pointblank AoE; can be LoS''d'
  - name: 'Earthquake'
    description: 'stands in place and does 6 stomps, each a non-telegraphed
    huge pointblank AoE; can be LoS''d'
notes:
  - 'You can duck behind a corner as it uses Rush to steer it into the wall.
  You''ll still take damage, but it can give you a chance to heal before it''s
  in range to auto-attack'
  - 'If LoSing Earthquake, you can peek out between stomps for uptime, but the
  timing is weird. Damage is applied when it hits the ground as expected, but
  it snapshots your position earlier, as its feet come off the ground'
job_specifics:
  DRK:
    difficulty: Easy
    note: 'Use TBN for the pull'
  MCH:
    difficulty: Medium
  PLD:
    difficulty: Easy
    notes:
      - 'Stand behind during Earthquake'
  WAR:
    difficulty: Easy
    notes:
      - 'Stand behind during Earthquake'
---