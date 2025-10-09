---
layout: default
title: Analysis
scripts:
  - charts.js
---

## On this Page:

* [PotD Chest Contents by Floor](#potd-chest-contents-by-floor)
* [HoH Chest Contents by Floor](#hoh-chest-contents-by-floor)
* [Drop Rates](#drop-rates)
* [Alteration Effects](#alteration-effects)

{% include note.html title="Incomplete Page" content="This page is incomplete, help us by finding out how to [contribute](contributing.html)!" %}

## PotD Chest Contents by Floor

<div class="surfacePane">

  <p>Click a column or legend entry to display finds by floor statistics. Click
  a floorset line or select from the dropdown below to display chest content
  statistics for that floorset.</p>

  <table class="unstyled">
    <tr>
      <td></td>
      <td style="width: 100%; text-align: center;">Contents</td>
    </tr>
    <tr>
      <td><span class="rotated">Floors</span></td>
      <td id="potdChestContentsChart" style="padding: 0"></td>
    </tr>
    <tr>
      <td></td>
      <td id="potdChestContentsLegend"></td>
    </tr>
  </table>

  <h3 id="potdChestContentsDataTitle"></h3>
  <table id="potdChestContentsDataTable"></table>

  <h3>Notes</h3>

  <ul>
    <li>
      This is based mostly on data I [Daleven] collected from my own runs and
      supplemented with a few runs from Angelus Demonus VODs. The data for
      floors 181+ and 191+ is likely to be a bit off as at this time, it's only
      based on about 530 chests from 181-189 and about 420 from 191-199. Data
      for floors 1-179 is based on 1000-2000 chests per set, so should be more
      accurate.
    </li>
    <li>
      Distribution of chest types (gold/silver/bronze) is based on non-drops on
      floors where I opened all chests or at least saw all rooms to know what
      was on the floor. Drops were not included, as there is some collection
      bias and I do not record drop types if I don't collect. I do record chest
      types for non-drops even if I don't collect them, as long as I saw them
    </li>
    <li>
      Distribution of chest types dropped seems to be the same as non-drops.
    </li>
    <li>
      Distribution of contents within dropped chests seems to be the same as
      non-drops, so dropped chests were included for determining distribution
      of chest contents per chest type.
    </li>
    <li>
      Floors 1-6 are separated from 7-9 because there are several items that
      only start appearing at floor 7. Affluence, flight, and alteration do not
      drop on the 9th floor of each set from 1-99, but those floors are not
      separated in the above data. As a result, the first 8 floors of each set
      have a slightly higher drop chance for these 3 items than shown above to
      account for the 9th floor not dropping them at all.
    </li>
  </ul>

</div>

## HoH Chest Contents by Floor

<div class="surfacePane">

  <p>Click a column or legend entry to display finds by floor statistics. Click
  a floorset line or select from the dropdown below to display chest content
  statistics for that floorset.</p>

  <table class="unstyled">
    <tr>
      <td></td>
      <td style="width: 100%; text-align: center;">Contents</td>
    </tr>
    <tr>
      <td><span class="rotated">Floors</span></td>
      <td id="hohChestContentsChart" style="padding: 0"></td>
    </tr>
    <tr>
      <td></td>
      <td id="hohChestContentsLegend"></td>
    </tr>
  </table>

  <h3 id="hohChestContentsDataTitle"></h3>
  <table id="hohChestContentsDataTable"></table>

  <h3>Notes</h3>

  <ul>
    <li>
      This is based on data I [Daleven] collected from my own runs only. The
      data for floors 91+ is likely to be a bit off as at this time, it's only
      based on about 750 chests. Data for floors 1-89 is based on 1400-3000
      chests per set, so should be more accurate.
    </li>
    <li>
      Distribution of chest types (gold/silver/bronze) is based on non-drops on
      floors where I opened all chests or at least saw all rooms to know what
      was on the floor. Drops were not included, as there is some collection
      bias and I do not record drop types if I don't collect. I do record chest
      types for non-drops even if I don't collect them, as long as I saw them.
    </li>
    <li>
      Distribution of chest types dropped seems to be the same as non-drops
    </li>
    <li>
      Distribution of contents within dropped chests seems to be the same as
      non-drops, so dropped chests were included for determining distribution
      of chest contents per chest type.
    </li>
    <li>
      Floors 1-6 are separated from 7-9 because there are several items that
      only start appearing at floor 7. Affluence, flight, and alteration do not
      drop on floors 9, 19, 29, 39, or 49, but those floors are not separated
      in the above data. As a result, floors 21-28 have a slightly higher drop
      chance for these 3 items than shown above to account for floor 29 not
      dropping them at all.
    </li>
  </ul>

</div>

## Drop Rates

<div class="surfacePane">

  <h3>Palace of the Dead</h3>

  <div class="hscroll">
    <table id="potd_droprates">
      <thead>
        <tr>
          <th rowspan="2">Enemy Type</th>
          <th colspan="3">Normal</th>
          <th colspan="3">Fortuned</th>
        </tr>
        <tr>
          <th>Drops</th>
          <th>Kills</th>
          <th>Rate (%)</th>
          <th>Drops</th>
          <th>Kills</th>
          <th>Rate (%)</th>
        </tr>
      </thead>
      <!-- tbody added via script -->
    </table>
  </div>

  <h3>Heaven on High</h3>

  <div class="hscroll">
    <table id="hoh_droprates">
      <thead>
        <tr>
          <th rowspan="2">Enemy Type</th>
          <th colspan="3">Normal</th>
          <th colspan="3">Fortuned</th>
        </tr>
        <tr>
          <th>Drops</th>
          <th>Kills</th>
          <th>Rate (%)</th>
          <th>Drops</th>
          <th>Kills</th>
          <th>Rate (%)</th>
        </tr>
      </thead>
      <!-- tbody added via script -->
    </table>
  </div>

  <h3>Notes</h3>

  <ul>
    <li>
      Drop rate does not seem to vary by floor.
    </li>
    <li>
      Based on the data, I'd guess that Pomander of Fortune increases drop rate
      from all enemies by roughly 12-13%
    </li>
    <li>
      I have very little data on PotD special mobs since they are very rare.
      As such, those numbers aren't likely to be accurate.
    </li>
  </ul>

</div>

## Alteration Effects

<div class="surfacePane">

  <h3>Palace of the Dead</h3>

  <div class="hscroll">
    <table id="potd_alteration">
      <thead>
        <tr>
          <th>Floorset</th>
          <th>Mimics</th>
          <th>% Mimics</th>
          <th>Korrigans</th>
          <th>% Korrigans</th>
        </tr>
      </thead>
      <!-- tbody added via script -->
    </table>
  </div>

  <h3>Heaven on High</h3>

  <div class="hscroll">
    <table id="hoh_alteration">
      <thead>
        <tr>
          <th>Floorset</th>
          <th>Mimics</th>
          <th>% Mimics</th>
          <th>Korrigans</th>
          <th>% Korrigans</th>
        </tr>
      </thead>
      <!-- tbody added via script -->
    </table>
  </div>

  <h3>Notes</h3>

  <ul>
    <li>
      I don't have a lot of data on this as it depends on alteration drops and
      usage. Based on the data so far, I'm guessing it's the same for every
      floor, and either 50/50 or slightly in favour of korrigans. Sets where
      it's far from 50/50 mostly have very little data. It looks like I've been
      pretty lucky on HoH 81+ though!
    </li>
    <li>
      The counts here are the number of times alteration produced mimics or
      korrigans - not the count of how many were in the room.
    </li>
  </ul>

</div>

<script>
  const potd_chest_data = {{ site.data.potd_chests | jsonify }};
  charts.drawPotdChestDistribution(potd_chest_data);

  const hoh_chest_data = {{ site.data.hoh_chests | jsonify }};
  charts.drawHohChestDistribution(hoh_chest_data);

  const potd_droprate_data = {{ site.data.potd_drops | jsonify }};
  charts.writeDropRatesTable(potd_droprate_data, 'potd_droprates');

  const hoh_droprate_data = {{ site.data.hoh_drops | jsonify }};
  charts.writeDropRatesTable(hoh_droprate_data, 'hoh_droprates');

  const potd_alter_data = {{ site.data.potd_alteration | jsonify }};
  charts.writeAlterationTable(potd_alter_data, 'potd_alteration');

  const hoh_alter_data = {{ site.data.hoh_alteration | jsonify }};
  charts.writeAlterationTable(hoh_alter_data, 'hoh_alteration');
</script>
