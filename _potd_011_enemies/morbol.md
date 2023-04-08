---
name: Palace Morbol
nickname: Morbol
image: morbol.png
start_floor: 17
end_floor: 19
agro: Proximity
hp: 1772
attack_damage: 134
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: false
  slow: true
  stun: true
abilities:
  - name: Bad Breath
    potency: n/a
    description: 'large telegraphed conal AoE on random player; inflicts many
    debuffs'
    warning: directional
notes:
  - note: 'Bad Breath inflicts these debuffs:'
    subnotes:
      - 'Poison (unique DoT potency 50, 30s)'
      - 'Nausea (20s)'
      - 'Slow (10s)'
      - 'Blind (30s)'
      - 'Heavy (20s)'
      - 'Silence (10s)'
      - 'Paralysis (30s)'
job_specifics:
  SGE:
    difficulty: Medium
    notes:
      - 'Hurts in multipulls'
---
