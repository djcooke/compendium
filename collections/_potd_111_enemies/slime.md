---
name: Deep Palace Slime
nickname: Slime
image: slime.png
start_floor: 113
end_floor: 116
agro: Sound
hp: 13502
attack_damage: 941
attack_type: Magic
attack_name: Acid Spray
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: true
  resolution: false
abilities:
  - name: 'Rupture'
    potency: 99% of max HP
    type: Unique
    description: 'instant AoE sacrificial enrage; used 37 seconds after pull'
    warning: explosion
notes:
  - 'Acid Spray inflicts physical vulnerability up (+10% per stack, max 8
    stacks, 5s); this ability does magic damage, so its own damage is not
    affected'
  - "Can only be slowed with Arm's Length if transfigured via Pomander of
  Witching since it doesn't normally do melee auto-attacks"
job_specifics:
  SGE:
    difficulty: Medium
    notes:
      - 'Easy if fought alone, but very risky to multipull'
---
