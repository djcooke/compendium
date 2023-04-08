---
name: Nightmare Manticore
nickname: Manticore
image: manticore.png
start_floor: 41
end_floor: 43
patrol: true
agro: Sight
hp: 3984
attack_damage: 459
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
abilities:
  - name: Ripper Claw
    potency: 300
    type: Physical
    description: 'untelegraphed conal AoE - don''t stand in front!'
    warning: directional
  - name: Fireball
    potency: 300
    type: Magic
    description: 'telegraphed circle AoE'
job_specifics:
  SGE:
    difficulty: Easy
---
