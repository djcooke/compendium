---
name: Palace Gremlin
nickname: Gremlin
image: gremlin.png
start_floor: 51
end_floor: 55
agro: Sight
hp: 4759
attack_damage: 516
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Bad Mouth
    potency: n/a
    description: 'inflicts vulnerability up (25%, 10s) on random player'
  - name: Fire II
    potency: 300
    type: Magic
    description: 'telegraphed circle AoE'
job_specifics:
  SGE:
    difficulty: Medium
    notes:
      - 'Vulnerability up makes multipulls hurt'
---
