---
name: Deep Palace Soulflayer
nickname: Soulflayer
image: soulflayer.png
start_floor: 156
end_floor: 159
agro: Sight
hp: 22578
attack_damage: 1584
attack_type: Magic
vulnerabilities:
  bind: true
  heavy: true
  sleep: false
  slow: false
  stun: true
  resolution: false
abilities:
  - name: Mind Blast
    potency: 300
    type: Magic
    description: 'telegraphed pointblank AoE; inflicts paralysis (15s)'
  - name: Drain Touch
    potency: 130
    type: Physical
    description: 'instant; absorbs 100% of damage dealt'
notes:
  - Caster - kiting doesn't help to mitigate damage
  - 'Can be slowed if transfigured via Pomander of Witching'
job_specifics:
  GNB:
    difficulty: Medium
    notes:
      - 'Stun the first Mind Blast and then mitigate the Drain Touch that comes
      slightly after to reduce the HP drain. Brutal Shell shield is especially
      effective'
  MCH:
    difficulty: Hard
    notes:
      - The worst thing to fight in this set - avoid if possible
      - Can move in close to bait the AoE for a little breathing room
  PLD:
    difficulty: Medium
    notes:
      - 'Annoying/slow to fight due to the HP drain'
  RPR:
    difficulty: Medium
    notes:
      - 'Strength recommended'
  SGE:
    difficulty: Medium
    notes:
      - 'Slow to fight due to the HP drain, especially with no steel. Avoid if
        possible'
  WAR:
    difficulty: Easy
---
