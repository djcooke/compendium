---
name: Undead Orthos Dragon
nickname: Dragon
image: dragon.png
start_floor: 8
end_floor: 9
agro: 'Sight'
hp: 78296
attack_damage: 1454
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: true
  slow: '?'
  stun: false
abilities:
  - name: Dragon Breath
    potency: 2000
    type: Magic
    description: 'telegraphed line AoE; inflicts stacking poison (magic DoT
    potency 40 per stack, max 8 stacks, 18s)'
  - name: Toxic Vomit
    potency: 2000
    type: Magic
    description: 'telegraphed circle AoE; inflicts stacking poison (magic DoT
    potency 40 per stack, max 8 stacks, 18s)'
job_specifics:
  SGE:
    difficulty: Easy
  WHM:
    difficulty: Easy
---
