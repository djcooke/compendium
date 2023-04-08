---
name: Deep Palace Badguy # full name in game; required
nickname: Badguy # short name
image: badguy.png # within /assets/images/<dungeon>/<floorset>/); optional
family: Bomb # type of enemy; optional. Omit if it's already in the name
start_floor: 3 # first floor it appears on; required
end_floor: 8 # last floor it appears on; required
patrol: true # Optional (default: false)
sort_order: true # Optional (default: 0); used to group special enemies at the
                 # end of the enemy list. Regular enemies should default to 0,
                 # so they sort at the top of the list by floor numbers
agro: Sight # Sight, Sound, or Proximity; required
hp: 12345 # Optional
attack_name: Blizzard # Name of auto-attack, if applicable (mainly for
                      # casters); optional
attack_damage: 3297 # Average auto-attack damage; optional
attack_type: Physical # Physical, Magic, or Unique; optional
vulnerabilities: # For each, true=vulnerable, false=immune, otherwise unknown
  bind: true
  heavy: true
  sleep: true
  slow: true
  stun: true
  resolution: true # true=weak to, false=not weak to
abilities: # any skills used by the enemy; optional
  - name: Fierce Attack
    potency: 120 # optional; 'n/a' if ability does no damage, omit if unknown
    type: Physical # Physical, Magic, or Unique; optional
    description: 'telegraphed conal AoE'
  - name: Knockout
    potency: 300
    type: Physical
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
