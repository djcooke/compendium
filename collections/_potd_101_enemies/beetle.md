---
name: Deep Palace Dung Beetle
nickname: Beetle
image: beetle.png
start_floor: 106
end_floor: 109
patrol: true
agro: Proximity
hp: 13060
attack_damage: 931
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Rhino Attack
    potency: 250
    type: Physical
    description: 'gap closer (can be LoSed)'
  - name: Rhino Guard
    potency: n/a
    description: 'grants evasion up (8s) to self'
job_specifics:
  SGE:
    difficulty: Easy
---
