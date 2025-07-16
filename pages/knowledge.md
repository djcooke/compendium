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
    HP for 20 seconds. Beware snakes while you are toaded, as they will use
    Devour to instantly kill a toad'
  - name: Otter
    image: otter.png
    only_in: HoH
    description: 'Turns you into an otter, preventing all actions and reducing
    max HP for 30 seconds'
  - name: Owlet
    image: owlet.png
    only_in: EO
    description: 'Turns you into an owlet, preventing all actions and reducing
    max HP for 30 seconds'
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
Note: these are called "Cairns" in PotD, "Beacons"  in HoH, and "Pylons" in EO.

The number of enemies you must kill to activate the Cairns is random, with a
range that varies depending on the floorset. The range for the Cairn of Passage
is listed on each floorset page. The Cairn of Return generally has a lower
limit of 2-3 kills more than the Cairn of Passage. Both Cairns likely have the
same upper limit for a given floorset, but this is unverified.

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
  importantly, potsherds. Potsherds can be exchanged for several items,
  including Sustaining/Empyrean/Orthos Potions, which grant a potent regen
  effect and are essential for soloing
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
      <td class="align-center">All</td>
    </tr>
    <tr>
      <td>Blind</td>
      <td>Encroaching darkness is lowering accuracy</td>
      <td class="align-center">All</td>
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
      <td class="align-center">All</td>
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
      <td class="align-center">HoH + EO</td>
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
      <td class="align-center">PotD + EO</td>
    </tr>
    <tr>
      <td>Sprint Penalty</td>
      <td>Unable to sprint</td>
      <td class="align-center">All</td>
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
</div>
