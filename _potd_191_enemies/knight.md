---
name: Deep Palace Knight
nickname: Knight
image: knight.png
start_floor: 195
end_floor: 199
agro: Proximity
hp: 31211
attack_damage: 3144
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: true
  stun: false
  resolution: true
abilities:
  - name: Skullsplinter
    potency: 130
    description: 'instant'
  - name: Death Spiral
    description: scary-looking telegraphed donut AoE
  - name: Ossify
    potency: n/a
    description: 'grants physical damage up (100%, 8s) to self'
  - name: '?'
    potency: n/a
    description: 'grants physical vulnerability down (20s) to self'
notes:
  - 'Do not fight one of these with a Wraith nearby, as the Wraith can cast
    Accursed Pox outside of combat and fill in the safe spot normally left
    by Death Spiral'
job_specifics:
  GNB:
    difficulty: Medium
  MCH:
    difficulty: Medium
    notes:
      - Steel required
  RDM:
    difficulty: Hard
    notes:
      - Steel required
      - Strength recommended
  RPR:
    difficulty: Medium
    notes:
      - 'Requires steel or Bloodbath and Potion'
---
