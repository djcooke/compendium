---
name: Heavenly Garula
nickname: Garula
family: Buffalo
image: garula.png
start_floor: 81
end_floor: 84
patrol: true
agro: Sight
hp: 62921
attack_damage: 5858
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
abilities:
  - name: 'Rush'
    potency: 130
    type: Physical
    description: 'instant gap closer; used immediately on pull'
  - name: 'Heave'
    potency: 800
    type: Physical
    description: 'telegraphed conal AoE'
  - name: 'Disorienting Groan'
    potency: 300
    type: Magic
    description: 'telegraphed large pointblank AoE; inflicts vulnerability up
    (25%, 30s); can be LoSed'
    warning: pointblank
  - name: 'Earthquake'
    potency: 50 (x6)
    type: Magic
    description: 'stands in place and does 6 stomps, each an untelegraphed
    huge pointblank AoE; can be LoSed'
    warning: pointblank
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
    notes:
      - 'Use TBN for the pull'
      - 'Stand behind during Earthquake'
  GNB:
    difficulty: Easy
    notes:
      - 'Stand behind during Earthquake'
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
