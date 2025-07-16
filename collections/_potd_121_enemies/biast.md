---
name: Deep Palace Biast
nickname: Biast
image: biast.png
start_floor: 121
end_floor: 124
agro: Sight
hp: 14167
attack_damage: 968
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
  resolution: false
abilities:
  - name: Levinfang
    potency: 130
    type: Physical
    description: 'instant; inflicts paralysis (30s); has to be close to use
    this, so ranged DPS can avoid by kiting with Sprint and/or Leg Graze'
    warning: movement
  - name: Electrify
    potency: 300
    type: Unique
    description: 'telegraphed circle AoE; short cast'
notes:
  - 'Uses Levinfang immediately followed by Electrify shortly after pull. If
  paralysis procs early, you won''t be able to escape the AoE'
  - 'Can use Spine Drops to remove paralysis if you''re ok with not using
  Sustaining Potions for 1m30s'
job_specifics:
  SGE:
    difficulty: Medium
---
