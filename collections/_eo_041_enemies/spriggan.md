---
name: Orthos Spriggan
nickname: Spriggan
image: spriggan.png
start_floor: 42
end_floor: 45
agro: Sight
hp: 169540
attack_damage: 4125
attack_type: Physical
vulnerabilities:
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
abilities:
  - name: Frenetic Flurry
    potency: 300
    type: Physical
    description: "instant; spams this under haste"
  - name: Haste
    potency: n/a
    description: "grants haste (1m30s) to self; used 20 seconds after pull"
job_specifics:
  MCH:
    notes:
      - "Save Leg Graze for when it's hasted"
  SGE:
    notes:
      - "Cast Repose 18 seconds after pull to interrupt Haste"
  WHM:
    notes:
      - note: "Cast Repose 18 seconds after pull to interrupt Haste"
        subnotes:
          - "Can also interrupt with Holy. On a non-hasted floor, casting Holy
            as the 8th GCD when pulled with Dia or the 9th GCD when pulled with
            Glare will usually succeed (as of patch 7.16)"
---
