---
layout: default
title: Analysis
scripts:
  - charts.js
---

## HoH Chest Contents by Floor

<div class="surfacePane">
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
      data for floors 81+ and especially 91+ is likely to be a bit off as at
      this time, it's only based on about 950 chests from 81-89 and about 280
      from 91-99. Data for floors 1-79 is based on 1000-2000 chests per set, so
      should be more accurate
    </li>
    <li>
      Distribution of chest types (gold/silver/bronze) is based on non-drops on
      floors where I opened all chests or at least saw all rooms to know what
      was on the floor. Drops were not included, as there is some collection
      bias and I do not record drop types if I don't collect. I do record chest
      types for non-drops even if I don't collect them, as long as I saw them
    </li>
    <li>
      Distribution of chest types dropped seems to be the same as non-drops
    </li>
    <li>
      Distribution of contents within dropped chests seems to be the same as
      non-drops, so dropped chests were included for determining distribution
      of chest contents per chest type
    </li>
  </ul>

</div>

<script>
  let data = {{ site.data.hoh_chests | jsonify }};
  charts.drawHoHChestDistribution(data);
</script>