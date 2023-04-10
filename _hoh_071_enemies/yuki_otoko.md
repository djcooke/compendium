---
name: Heavenly Yuki-Otoko
nickname: Yuki-Otoko
family: Yeti
image: yuki_otoko.png
start_floor: 77
end_floor: 79
agro: Sight
hp: 53740
attack_damage: 4728
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: 'Frozen Mist'
    potency: 500
    type: Magic
    description: 'telegraphed huge conal AoE; inflicts deep freeze (magic DoT
    potency 10, 10s). Deals double damage to frozen players'
    warning: directional
  - name: 'Northerlies'
    potency: 400
    type: Magic
    description: 'telegraphed huge pointblank AoE; inflicts deep freeze (magic
    DoT potency 10, 10s); can be interrupted or LoSed. Used 21 seconds after
    pull, then at 50-second intervals'
    warning: explosion
job_specifics:
  DRK:
    difficulty: Easy
  GNB:
    difficulty: Easy
  MCH:
    difficulty: Medium
    notes:
      - 'Need to stay close to dodge all the conals'
  PLD:
    difficulty: Easy
  WAR:
    difficulty: Easy
---
