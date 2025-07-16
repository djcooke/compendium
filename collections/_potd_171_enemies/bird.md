---
name: Bird of the Deep Palace
nickname: Bird
image: bird.png
start_floor: 176
end_floor: 179
patrol: true
agro: Proximity
hp: 26784
attack_damage: 2364
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: true
  stun: false
  resolution: false
abilities:
  - name: Filoplumes
    potency: 130
    type: Physical
    description: 'instant'
  - name: Revelation
    potency: 300
    type: Physical
    description: 'telegraphed circle AoE; inflicts confused (10s)'
  - name: Tropical Wind
    potency: n/a
    description: 'grants physical damage up (80%, 30s) and haste (30s) to self,
    and causes it to spam Revelation. Can be interrupted, but not recommended
    as its casting will give you lots of breathing room'
job_specifics:
  GNB:
    difficulty: Easy
  MCH:
    difficulty: Medium
    note:
      - 'These are usually fairly easy, but can do some burst damage, and are
        more dangerous with enchantments such as HP down or gloom'
  PLD:
    difficulty: Easy
  RDM:
    difficulty: Medium
  RPR:
    difficulty: Medium
    notes:
      - 'Steel recommended'
      - 'Kite to manage Filoplumes damage'
  SGE:
    difficulty: Medium
    notes:
      - 'Beware of auto-attack damage under Tropical Wind'
  SMN:
    difficulty: Medium
    notes:
      - "Steel recommended"
  WAR:
    difficulty: Easy
---
