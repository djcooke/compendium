---
name: Traverse Huldu
image: huldu.png
family: Dynamite
start_floor: 71
end_floor: 74
patrol: true
agro: Sight
hp: 534772
attack_damage: 20000
attack_type: Physical
vulnerabilities:
  bind: 
  heavy: true
  sleep: true
  slow: 
  stun: false
abilities:
  - name: Fracture
    potency: 3500
    type: Magic
    description: "pointblank AoE with late telegraph"
    warning: pointblank
  - name: Self-destruct
    potency: 50-3500
    type: Magic
    description: "large proximity AoE with late telegraph used AFTER DEATH -
      get away after it dies. Damage falls to minimum at 10y (the AoE itself
      has a radius of ~15y)"
    warning: explosion
notes:
  - "Immune to knockback, so it cannot be one-shot with the Primordial Flesh
    votive"
  - "Don't be fooled if you take low damage from the explosion - the damage
    becomes deadly as soon as you cross the 10y line"
  - "The explosion is blocked if the enemy dies while asleep, either from
    damage over time or from direct damage that kills"
---
