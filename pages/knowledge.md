---
layout: default
title: Knowledge
traps:
  - name: Enfeebling
    image: enfeebling.png
    description: 'Increases damage taken by 30% and reduces damage dealt by 20%'
  - name: Impeding
    image: impeding.png
    description: 'Applies silence and pacification to everyone nearby (enemies
    included)'
  - name: Landmine
    image: landmine.png
    description: 'Deals damage equal to 80% of current health to everyone nearby
    (enemies included)'
  - name: Luring
    image: luring.png
    description: 'Spawns 3 enemies with agro on the person who hit the trap'
  - name: Toading
    image: toading.png
    only_in: PotD
    description: 'Turns you into a toad, preventing all actions and reducing max
    HP by 30% for 20 seconds. Beware snakes while you are toaded, as they will
    use Devour to instantly kill a toad'
  - name: Otter
    image: otter.png
    only_in: HoH
    description: 'Turns you into an otter, preventing all actions and reducing
    max HP by 50% for 30 seconds'
  - name: Owlet
    image: owlet.png
    only_in: EO
    description: 'Turns you into an owlet, preventing all actions and reducing
    max HP by 50% for 30 seconds'
  - name: Faerie
    only_in: PT
    description: 'Turns you into a faerie, preventing all actions and reducing
    max HP by 50% for 30 seconds'
---

Basic information about how deep dungeons work can be found in the official
[Deep Dungeon Play Guide](https://na.finalfantasyxiv.com/lodestone/playguide/contentsguide/deepdungeon/).
This page is meant to expand upon the Play Guide and provide more detailed
information. Knowledge is power!

## On this Page:

* [Rooms](#rooms)
* [Cairns of Passage and Return](#cairns-of-passage-and-return)
* [Enemies](#enemies)
* [Chests](#chests)
* [Traps](#traps)
* [Enchantments](#enchantments)


## Rooms

<div class="surfacePane" markdown="1">
Each floor is composed of multiple rooms connected by halls. The number of
rooms a floor may have is always somewhat random, but depends on the floorset,
with higher floors tending to have more rooms. The floorset pages list the
possible number of rooms per floor.

### Treasure Rooms

Sometimes a treasure room will appear on the floor. A treasure room always
contains four chests, and will have many enemies in it. Enemies that are
normally patrols will stay in the treasure room if they spawned there at the
start of the floor. If a patrol enemy later spawns in the treasure room, it
will roam like normal.

### Hall of Fallacies (HoH only)

Occasionally in HoH, you will encounter a floor that is one huge open room with
many enemies in it. This is called the Hall of Fallacies. The Hall is actually
made up of 12 individual rooms with no walls in-between. These individual rooms
follow all the normal rules of regular rooms - non-patrol enemies stay within
the room they spawned in, there are 0-1 traps per room, one can still be a
treasure room, etc.

[Back to top](#top)
</div>

## Cairns of Passage and Return

<div class="surfacePane" markdown="1">
Note: these are called "Cairns" in PotD, "Beacons" in HoH, and "Pylons" in EO.
PT uses "Pylon of Passage" and "Altar of Return".

The number of enemies you must kill to activate the Cairns is random, with a
range that varies depending on the floorset. The range for the Cairn of Passage
is listed on each floorset page. The Cairn of Return generally has a lower
limit of 2-3 kills more than the Cairn of Passage. Both Cairns likely have the
same upper limit for a given floorset, but this is unverified. The Pomander of
Flight causes each kill to count double toward activation.

The random kill counts seem to follow a roughly normal distribution, such that
numbers in the middle of the range are more common than the low or high ends.
PotD/HoH are very slightly biased toward lower kill counts.

Killing all enemies on a floor will instantly unlock both Cairns, regardless
of the number of kills originally required. If you kill all enemies and the
Cairns don't unlock, then either a new enemy spawned before you got the last
kill, or an enemy is stuck inside a wall somewhere.

The color of the Cairn icons above the map only indicates how many kills you
have already made, and does not reveal how many kills are still needed for
activation - though changing from blue to orange indicates that you have
reached the low end of the random activation range for that Cairn on the
current floorset.

Each Cairn appears in a random room on each floor with the exception that the
Cairn of Passage cannot appear in the starting room.

[Back to top](#top)
</div>

## Enemies

<div class="surfacePane" markdown="1">
Most rooms will begin with 2-3 enemies in them, but there are exceptions:

* The starting room begins with no enemies
* Some floorsets have a different range. e.g. PotD 41-49 has 3-4 enemies per
  room. The range per floorset is listed on each floorset page.
* Pomander of Flight halves the number of enemies (rounded up), so most floors
  end up with 1-2 enemies instead of 2-3
* Treasure rooms contain several additional enemies

### Patrols

Most enemies will stay within the room where they spawn, but each floor has at
least one type of patrol that may spawn. Patrol enemies start within rooms like
the other enemies, and count towards the normal enemy limit, but will then
wander continuously between rooms. Sometimes no patrols will spawn on a floor,
and sometimes many will.

### Respawns

Additional enemies will spawn at regular intervals. The interval varies
depending on the floorset, and is listed on the floorset pages. These
additional enemies may may be patrols or non-patrols, but will always spawn
within a room - never in a hallway.

### PotD Special Enemies

The Palace is haunted by NPCs who have died in the FFXIV storyline. For each
floorset there is one or more of these NPCs who may appear as an enemy. These
enemies are included and detailed more in the floorset pages.

### EO Dread Beasts

"A dread beast stalks this floor..."

This message will occasionally appear in your log at the start of a floor. It
means that one of the three dread beasts have spawned. These hit extremely
hard and can easily one-shot DPS and healers with their normal attacks. You
should usually avoid them, but if you do defeat one, it grants a 30-minute
buff, a piece of the accursed hoard, and a chest.

* Lamia Queen: Grants regen
* Meracydian Clone: Grants damage up
* Demi-Cochma: Grants vulnerability down

More detailed information is included in the enemy descriptions on the floorset
pages.

### Agro

There are three different agro types an enemy may have:

* **Sight**: will only agro if you run within a cone in front of them
* **Sound**: will only agro if you RUN close to them or bump into them while
  walking. You can safely walk past them as long as you don't go into their
  hitbox
* **Proximity**: Similar to sound except they will agro even if you're walking.
  It is often very difficult to get around them without killing them

[Back to top](#top)
</div>

## Chests

<div class="surfacePane" markdown="1">
Most floors will have 4-6 chests, but some floorsets have a different range.
The range is listed on each of the floorset pages. There are three types of
chests:

* **Bronze**: contain items such as potions, phoenix downs, and most
  importantly, potsherds. Potsherds ("Orthos Aetherpool Fragments" in EO) can
  be exchanged for several items, including Sustaining/Empyrean/Orthos Potions,
  which grant a potent regen effect and are essential for soloing
* **Silver**: Can have one of several effects
  * Upgrade your Aetherpool arm or armor
  * Chest explodes, dealing 70% max HP damage to any players and enemies nearby
  * HoH only: chest may contain magicite. There are four types of magicite:
    * Inferno, Crag, and Vortex: Summons Ifrit, Titan, or Garuda respectively,
      instantly killing all enemies on the floor (except bosses, to which they
      deal a large amount of damage). Also grants a 10-second invulnerability
      buff to all party members; this invulnerability takes effect immediately,
      so magicites can be used as a panic button if you can't get out of an
      AoE.
    * Elder: Summons Odin, which has the same effect as the other magicites but
      *also* one-shots bosses. Much rarer than the other types, and does not
      appear at all before floor 31. **Note that elder magicite has been
      reported not to work if you don't engage the boss in battle first!**
  * EO only: chest may contain a demiclone tomestone. Demiclones are NPCs which
    fight alongside you until you die or leave the floor. Each player can only
    summon one demiclone at a time. There are three types of demiclone:
    * Unei (red): Healer-type demiclone. Deals moderate but still respectable
      damage; also casts Cure as needed, and periodically casts Stoneskin for a
      20% max HP shield.
    * Doga (green): DPS-type demiclone. Can easily outdamage players; also
      periodically casts Break (10-second AoE petrify with diminishing
      returns).
    * Onion Knight (orange): All-rounder demiclone. Stronger than Doga and can
      also use Cure. Much rarer than the other types.
  * PT only: chest may contain an incense. Using incense will summon Feo Ul to
    help you in various ways depending on the incense type:
    * Poisonfruit: Grants all party members 10 seconds of invulnerability,
      kills all normal enemies on the floor, and deals damage to bosses (like
      HoH magicite).
    * Barkbalm: Grants all party members double max HP, and summons Feo Ul to
      assist in battle.
    * Mazeroot: Reveals the map (like the Sight pomander), clears all floor
      enchantments (like Serenity), opens the Pylon of Passage and Altar of
      Return, and summons Feo Ul to assist in battle.
    For both barkbalm and mazeroot incense, Feo will attack alongside the
    incense user and heal party members whose HP falls below 70%. She also has
    one unique action for each type:
    * Barkbalm - an AoE lightning spell with a 15-second cooldown which deals
      direct damage and applies a 30-second DoT. This damage does *not* 
      generate aggro.
    * Mazeroot - a wide-angle 20y conal AoE debuff with a 20-second cooldown.
      Applies a 30-second Witching-like transformation to all enemies in the
      cone.
* **Gold**: Contain pomanders - items that help you in the deep dungeon. These
  are detailed in the [Pomanders section](pomanders.html)

Chests may also be mimics, which will attack you when you try to open them, and
can be very dangerous, especially in the deeper floors. The type of chest that
may be a mimic depends on the floorset, and is listed on the floorset pages. In
the later floors, it is always gold chests that may be mimics.

[Back to top](#top)
</div>

## Traps

<div class="surfacePane" markdown="1">
Each room besides the starting room may contain 1 trap. Some rooms have no
traps, but a room cannot have more than 1 trap. Traps are invisible unless you
use a Pomander of Sight to reveal them. They can also be removed from the floor
by using a Pomander of Safety.

<table>
  <thead>
    <th colspan="2">Type</th><th>Description</th>
  </thead>
  <tbody>
    {% for trap in page.traps %}
      <tr>
        <td><img src="{{ '/assets/images/traps/' | append: trap.image | relative_url}}" alt="{{ trap.name }} Trap" width="48" height="48"></td>
        <td>
          {{ trap.name }}
          {% if trap.only_in %}
            <br/>({{ trap.only_in }}&nbsp;Only)
          {% endif %}
        </td>
        <td>{{ trap.description }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

[Back to top](#top)
</div>

## Enchantments

<div class="surfacePane" markdown="1">
When you arrive on a new floor, there is a chance that one or more enchantments
will be applied. These are mostly detrimental, but a few are actually helpful.
These enchantments are divided into three groups, described below. It is
possible to receive zero or one enchantment from each group. It is NOT possible
to receive multiple enchantments from the same group, so enchantments within
the same group will never be stacked.

#### Group 1:

<table>
  <thead>
    <th class="textCell">Enchantment</th>
    <th class="textCell">Description</th>
    <th>Dungeons</th>
  </thead>
  <tbody>
    <tr>
      <td>Amnesia</td>
      <td>Unable to use abilities</td>
      <td class="align-center">PotD + HoH + EO</td>
    </tr>
    <tr>
      <td>Blind</td>
      <td>Encroaching darkness is lowering accuracy</td>
      <td class="align-center">PotD + HoH + EO</td>
    </tr>
    <tr>
      <td>Damage Down</td>
      <td>Damage dealt is reduced</td>
      <td class="align-center">All</td>
    </tr>
    <tr>
      <td>Haste</td>
      <td>Weaponskill cast time and recast time, spell cast time and recast
      time, and auto-attack delay are reduced</td>
      <td class="align-center">PotD + HoH + EO</td>
    </tr>
    <tr>
      <td>HP Penalty</td>
      <td>Maximum HP is decreased</td>
      <td class="align-center">All</td>
    </tr>
    <tr>
      <td>HP & MP Boost</td>
      <td>Maximum HP and MP are increased</td>
      <td class="align-center">All</td>
    </tr>
    <tr>
      <td>Sprint</td>
      <td>Movement speed is increased</td>
      <td class="align-center">HoH + EO + PT</td>
    </tr>
  </tbody>
</table>

#### Group 2:

<table>
  <thead>
    <th class="textCell">Enchantment</th>
    <th class="textCell">Description</th>
    <th>Dungeons</th>
  </thead>
  <tbody>
    <tr>
      <td>Auto-heal Penalty</td>
      <td>HP regeneration has stopped. This also affects enemies, which is
      hugely beneficial in EO when combined with a Protomander of Storms</td>
      <td class="align-center">All</td>
    </tr>
    <tr>
      <td>Demiclone Penalty</td>
      <td>Unable to use demiclone generators</td>
      <td class="align-center">EO</td>
    </tr>
    <tr>
      <td>Incense Penalty</td>
      <td>Unable to use incense</td>
      <td class="align-center">PT</td>
    </tr>
    <tr>
      <td>Item Penalty</td>
      <td>Unable to use items or pomanders. Exception: you can still use a
      Pomander of Serenity to remove all enchantments</td>
      <td class="align-center">All</td>
    </tr>
    <tr>
      <td>Unmagicked</td>
      <td>Unable to use magicite</td>
      <td class="align-center">HoH</td>
    </tr>
    <tr>
      <td>Knockback Penalty</td>
      <td>Unable to use knockback and draw-in effects. This mostly means that
      Pomander of Rage/Dread will not be useful; however, it also prevents
      enemies' knockback and draw-in abilities, which can be beneficial in some
      cases</td>
      <td class="align-center">PotD + EO + PT</td>
    </tr>
    <tr>
      <td>Sprint Penalty</td>
      <td>Unable to sprint</td>
      <td class="align-center">PotD</td>
    </tr>
  </tbody>
</table>

#### Group 3:

<table>
  <thead>
    <th class="textCell">Enchantment</th>
    <th class="textCell">Description</th>
    <th>Dungeons</th>
  </thead>
  <tbody>
    <tr>
      <td>Gloom</td>
      <td>Enemies have increased attack, defense, and movement speed</td>
      <td class="align-center">All</td>
    </tr>
  </tbody>
</table>

[Back to top](#top)

## Votives

<div class="surfacePane" markdown="1">
Votives are objects unique to PT which randomly spawn on a floor. Interacting
with a votive activates it, adding a random effect to the next floor. These
effects are separate from floor enchantments, and are displayed underneath the
map; if the current floor has a votive effect, it will be displayed on the
bottom left next to the votive icon, and if you've activated a votive on the
current floor, the effect it will apply to the next floor will be shown on the
bottom right.

When you enter a floor, if a votive is present on the floor, you will see a
message in the log reading: "Something calls out for warmth..." The room with
the votive is indicated with an icon on the map, which disappears when the
votive is activated. Votives will never spawn on floor 9 of a floorset.

Votives can apply any of the following effects (only one effect is applied per
votive). Negative effects are not applied until floor 31 and later.

#### Positive effects:

* **Anointment**: Grants 100% max HP regen to all party members.
* **Foes' Frailty**: Applies Frailty to all enemies. Unlike the HoH pomander,
  this applies even to enemies which spawn after entering the floor (such as
  respawns, luring traps, or mimics).
* **Mortification**: Grants 22.4% leech (recover 22.4% of damage dealt as HP)
  and 30% vulnerability up to all party members. Cancelling the Mortification
  buff removes both of these effects.
* **Immolation**: Transforms the party into Godmother Bombs, granting a Big
  Burst ability which deals massive damage to enemies in a 15y radius from the
  player. This damage will almost always be a one-shot kill, though at low
  aetherpool levels or with multiple buff/debuff combinations it might still
  take two hits to kill some enemies. Also grants all party members double max
  HP, which is a separate buff and is not removed when you cancel the
  transformation; this can stack with the barkbalm buff for a total of 4x max
  HP.
* **Primordial Flesh**: Transforms the party into mudballs, granting a dash
  ability which inflicts knockback and 100% HP damage to enemies in its path.
  Like PotD's Rage and EO's Dread, this does not kill enemies if the floor has
  the Knockback Penalty enchantment (or if the enemy is immune to knockback),
  but it does much more damage than those pomanders, allowing you to kill
  enemies in typically 2-3 hits.
* **Rapid Recitation**: Grants 50% reduced cooldown time to all party members.
  This does not affect the GCD, but instead reduces abilities' own cooldowns by
  half. Abilities with charges are not affected.
* **Swift Passage**: Grants super sprint to all party members. This sprint is
  significantly faster than regular sprint and generally outspeeds enemy
  movement.

#### Negative effects:

* **Blind Faith**: Hides the map. Sight (or mazeroot incense) will cancel the
  effect.
* **Gathering Gloom**: Forces the floor to include the Gloom enchantment. The
  enchantment can be removed with Serenity (or mazeroot incense) as usual. The
  votive itself has no other effect.
* **Treacherous Ground**: Increases the number of traps which spawn on the
  floor. This does not appear to add more than one trap per room or add traps
  in the starting room or hallways. The traps can be revealed with Sight (or
  mazeroot incense) or removed with Safety as usual.

[Back to top](#top)
</div>
