---
name: Deep Palace Morbol
nickname: Morbol
image: morbol.png
start_floor: 117
end_floor: 119
agro: Proximity
hp: 13724
attack_damage: 958
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: 'Sweet Breath'
    potency: n/a
    description: 'large instant conal AoE; inflicts sleep (3s) and slow (10s);
    used immediately before Bad Breath'
    warning: movement
  - name: Bad Breath
    potency: n/a
    description: 'large telegraphed conal AoE on random player; inflicts many
    debuffs'
    warning: directional
notes:
  - 'Stand close so you''ll be able to get out of the Bad Breath AoE after
    waking up from Sweet Breath'
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
---
