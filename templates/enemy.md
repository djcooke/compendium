---
name: Deep Palace Badguy # full name in game; required
nickname: Badguy # short name; required unless gallery_only == true
image: badguy.png # within /assets/images/<dungeon>/<floorset>/); optional
family: Bomb # type of enemy; optional. Omit if it's already in the name
start_floor: 3 # first floor it appears on; required
end_floor: 8 # last floor it appears on; required
patrol: true # Optional (default: false)
gallery_only: true # Optional (default: false); if true, enemy will only be
                   # shown in the floorset "Enemies" gallery, and hidden
                   # everywhere else. Intended for Mimics and PotD special
                   # enemies
agro: Sight # Sight, Sound, or Proximity; required
abilities: # any skills used by the enemy; optional
  - name: Fierce Attack
    description: 'telegraphed conal AoE'
  - name: Knockout
    description: 'tankbuster'
notes: # tips that apply to all jobs; optional
  - 'First note'
  - 'Second note is really long, but that's ok. can use multiple lines as long
    as it''s within quotes. Double-up the quote character to use within'
job_specifics:
  PLD:
    difficulty: Easy # Easy, Medium, Hard, or Extreme; optional (default: Unrated)
    notes: # Job-specific tips; optional
      - 'Paladin so strong. Badguy cannot hurt you!'
      - 'Stun the pointblank to maintain uptime'
  MCH:
    difficulty: Medium
    notes:
      - 'Hits hard; Use sprint and Leg Graze to kite'
---