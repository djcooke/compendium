---
name: Traverse Termite
nickname: Termite
image: termite.png
start_floor: 41
end_floor: 43
patrol: true
agro: Sight
hp: 267386
attack_damage: 7716
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Acid Spray
    potency: 900
    type: Magic
    description: "telegraphed small conal AoE. Can be hard to dodge when
      hasted - keep moving to avoid getting hit"
  - name: Haste
    potency: n/a
    description: "grants permanent haste to self - speeds up auto-attacks and
      Acid Spray casts by a factor of 3. Used below 75% HP, but not until 30
      seconds after being pulled"
    warning: other
---
