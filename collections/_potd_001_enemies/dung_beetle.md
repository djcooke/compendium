---
name: Palace Dung Beetle
nickname: Dung Beetle
image: dung_beetle.png
start_floor: 6
end_floor: 9
patrol: true
agro: Proximity
hp: 513
attack_damage: 32
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: true
abilities:
  - name: Rhino Attack
    potency: 250
    type: Physical
    description: 'gap closer (can be LoSed)'
job_specifics:
  SGE:
    difficulty: Medium
    notes:
      - 'Rhino Attack hurts at lower levels'
---
