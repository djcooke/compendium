---
name: Deep Palace Manticore
nickname: Manticore
image: manticore.png
start_floor: 141
end_floor: 143
patrol: true
agro: Sight
hp: 17266
attack_damage: 1219
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Wild Charge
    potency: 130
    description: 'instant gap closer; used immediately on pull, and again when
    its damage down debuff (see next ability) wears off'
  - name: 'Bloodboil'
    potency: n/a
    description: 'grants damage up (50%, 30s) to self; used immediately after
    Wild Charge. When the buff expires, it changes to a physical damage down
    debuff (60%, 30s)'
  - name: Ripper Claw
    potency: 300
    description: 'untelegraphed conal AoE - don''t stand in front!'
  - name: Fireball
    potency: 300
    description: 'telegraphed circle AoE'
notes:
  - 'Hits pretty hard with the attack bonus'
job_specifics:
  MCH:
    difficulty: Medium
  SGE:
    difficulty: Medium
---
