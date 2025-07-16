---
name: Heavenly Jellyfish
nickname: Jellyfish
image: jellyfish.png
start_floor: 63
end_floor: 67
agro: Sight
hp: 35155
attack_damage: 3307
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: false
  slow: true
  stun: true
abilities:
  - name: 'Irritating Tendrils'
    potency: 750
    type: Physical
    description: 'telegraphed short line AoE; inflicts stun (3s)'
    warning: directional
  - name: 'Numbing Tendrils'
    potency: 750
    type: Physical
    description: 'telegraphed short line AoE; inflicts paralysis (30s)'
    warning: directional
notes:
  - 'Its line AoEs are quick, so be ready to move fast'
job_specifics:
  DRK:
    difficulty: Easy
  GNB:
    difficulty: Easy
  MCH:
    difficulty: Easy
    notes:
      - 'You can avoid almost all damage by kiting these back and forth in a
      straight line. Get some distance when it does an AoE, then run straight
      through it a couple seconds later. Usually it''ll do another AoE without
      even hitting you in-between'
  PLD:
    difficulty: Easy
  WAR:
    difficulty: Easy
---
