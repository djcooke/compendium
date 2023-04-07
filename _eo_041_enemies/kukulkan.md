---
name: Orthos Kukulkan
nickname: Kukulkan
image: kukulkan.png
start_floor: 46
end_floor: 49
agro: Sight
hp: 173692
attack_damage: 4992
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Aetherial Blast
    description: "telegraphed line AoE"
  - name: Bombination
    potency: 200
    type: Magic
    description: "huge pointblank AoE with late telegraph; inflicts
    vulnerability up (10% per stack, 30s); only used out of combat; can be
    LoSed"
    warning: idle
notes:
  - "Once a Kukulkan decides to use Bombination on a player, it will slowly
    move close enough for the AoE to hit the player before starting the cast.
    It will keep following until it gets within range, even into other rooms!
    Be aware of these when fighting other mobs"
job_specifics:
  SGE:
    difficulty: Easy
  WHM:
    difficulty: Easy
---
