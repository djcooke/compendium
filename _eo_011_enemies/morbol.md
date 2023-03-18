---
name: Great Orthos Morbol
nickname: Morbol
image: morbol.png
start_floor: 11
end_floor: 14
agro: Sight
hp: 105393
attack_damage: 1001
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Vine Probe
    potency: 175
    type: Physical
    description: 'instant'
  - name: Bad Breath
    potency: 400
    type: Magic
    description: 'telegraphed conal AoE; inflicts various debuffs'
notes:
  - note: 'Bad Breath inflicts these debuffs:'
    subnotes:
      - 'Nausea (20s)'
      - 'Slow (20s)'
      - 'Blind (30s)'
      - 'Heavy (20s)'
      - 'Silence (10s)'
      - 'Paralysis (30s)'
  - 'Unlike the PotD/HoH variants, this Bad Breath does not inflict poison (it
    deals direct damage instead)'
job_specifics:
  SGE:
    difficulty: Easy
  WHM:
    difficulty: Easy
---
