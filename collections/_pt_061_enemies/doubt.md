---
name: Forgiven Doubt
image: doubt.png
family: Iguana
start_floor: 61
end_floor: 64
agro: Sight
hp: 547953
attack_damage: 21000
attack_type: Physical
vulnerabilities:
  bind: 
  heavy: 
  sleep: true
  slow: 
  stun: true
abilities:
  - name: Concealed
    potency: n/a
    description: "buff applied to self on spawn; cannot be seen or targeted by
    players until close by"
    warning: other
  - name: Slip of the Tongue
    potency: 150
    type: Physical
    description: "instant gap-closer; removes Concealed buff from self"
  - name: Body Press
    potency: 1600
    type: Physical
    description: "pointblank AoE with late telegraph and quick cast; used
    immediately after Slip of the Tongue"
    warning: pointblank
notes:
  - "Spawns in with the Concealed buff, which prevents you from seeing the
    enemy until you get close (it will see you first if it's looking at you)"
  - "Concealed enemies cannot be targeted when invisible, but AoE abilities
    will hit them as usual, so be careful using AoEs if one of these might be
    around"
  - "Once Concealed is removed, it is never reapplied, so if you deaggro one of
    these (with sleep, death and Raising, etc.), it will be visible normally
    afterwards"
---
