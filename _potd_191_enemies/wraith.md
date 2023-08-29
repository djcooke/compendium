---
name: Deep Palace Wraith
nickname: Wraith
image: wraith.png
start_floor: 191
end_floor: 199
agro: Proximity
hp: 32097
attack_damage: 3206
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: true
  resolution: true
abilities:
  - name: Scream
    potency: 200
    type: Magic
    description: 'huge telegraphed pointblank AoE; inflicts terror (10s); can
    be interrupted'
    warning: pointblank
  - name: Accursed Pox
    potency: 400
    type: Magic
    description: 'telegraphed circle AoE; inflicts disease (30s); can be
    interrupted. Also used outside of combat'
    warning: idle
notes:
  - 'Do not fight a Knight with one of these nearby, as Accursed Pox can fill
    in the safe spot of the Knight''s donut AoE'
job_specifics:
  GNB:
    difficulty: Easy
  MCH:
    difficulty: Easy
    notes:
      - 'Interrupt Scream only if you can''t get out. The long cast gives you
        lots of breathing room'
  RDM:
    difficulty: Easy
    notes:
      - Save Displacement for Scream if possible to move out faster
  RPR:
    difficulty: Easy
    notes:
      - 'Stun Scream for uptime or use Hell''s Egress to get out of range'
  SGE:
    difficulty: Easy
  SMN:
    difficulty: Easy
    notes:
      - "Steel required under Gloom or HP Penalty enchantments"
---
