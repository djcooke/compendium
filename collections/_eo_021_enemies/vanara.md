---
name: Orthos Vanara
nickname: Vanara
image: vanara.png
start_floor: 27
end_floor: 29
patrol: true
agro: Sight
hp: 134940
attack_damage: 3007
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: true
  slow: true
  stun: false
abilities:
  - name: Scythe Tail
    potency: 1200
    type: Physical
    description: 'pointblank AoE with late telegraph; inflicts stun (4s) and
    knockback - get away. Fully blocking the damage also blocks the stun and
    knockback'
    warning: pointblank
  - name: 'Barreling Smash'
    potency: 150
    type: Physical
    description: 'instant charge attack; used immediately after Scythe Tail if
    it hits (and is not fully blocked)'
  - name: 'Ripper Claw (?)'
    potency: 500
    type: Physical
    description: 'instant; used immediately after Barreling Smash'
job_specifics:
  SGE:
    notes:
      - "Be careful of Scythe Tail in multipulls"
  WHM:
    notes:
      - "Be careful of Scythe Tail in multipulls"
---
