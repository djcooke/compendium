---
layout: default
title: Contributing
---

Have corrections or additional knowledge to share? Great! I'm open to any
suggestions for improving the site as well. There are several ways to
contribute to the Compendium.

## Make a Pull Request

<div class="surfacePane" markdown="1">

If you can make the changes yourself, submitting a pull request is easiest for
me! If it's a large change or you're not sure it'll be accepted for some
reason, it would be best to open an issue or contact me on Discord to discuss
before you spend the time on it.

[New Pull Requests](https://github.com/djcooke/compendium/compare)

</div>

## Open an Issue

<div class="surfacePane" markdown="1">

If you have a GitHub account or want to make one, this is the best place to
track and discuss any suggestions or requests.

[New Issue](https://github.com/djcooke/compendium/issues/new)

</div>

## Contact me on Discord

<div class="surfacePane" markdown="1">

If you don't have and don't want to make a GitHub account, that's ok too. Feel
free to PM me on Discord with any suggestions.

[Daleven#3598](https://discordapp.com/users/619527328812367872)

</div>

## Info Needed

<div class="surfacePane" markdown="1">

Looking for something to contribute? The most helpful thing is job-specific
stuff - enemy notes and difficulty ratings, boss kill times, and boss notes.
This table shows the completeness of each of these items for each job.

<div class="hscroll">
  <table>
    <thead>
      <th>Job</th><th>PotD 151+ Enemy Notes</th><th>PotD Boss Notes</th><th>PotD Boss Times</th><th>HoH 61+ Enemy Notes</th><th>HoH Boss Notes</th><th>HoH Boss Times</th>
    </thead>
    <tbody>
      {% for job in site.data.jobs %}
        <tr>
          {% assign potd_enemy_count = 0 %}
          {% assign potd_rated_count = 0 %}
          {% assign enemy_collections = "potd_151_enemies, potd_161_enemies, potd_171_enemies, potd_181_enemies, potd_191_enemies" | split: ", " %}
          {% for enemies in enemy_collections %}
            {% for enemy in site[enemies] %}
              {% assign potd_enemy_count = potd_enemy_count | plus: 1 %}
              {% if enemy.job_specifics[job] %}
                {% assign potd_rated_count = potd_rated_count | plus: 1 %}
              {% endif %}
            {% endfor %}
          {% endfor %}

          {% assign potd_boss_notes_count = 0 %}
          {% assign potd_boss_times_count = 0 %}
          {% for floorset in site['potd_floorsets'] %}
            {% if floorset.boss_job_specifics[job] %}
              {% if floorset.boss_job_specifics[job].notes %}
                {% assign potd_boss_notes_count = potd_boss_notes_count | plus: 1 %}
              {% endif %}
              {% if floorset.boss_job_specifics[job].timing %}
                {% assign potd_boss_times_count = potd_boss_times_count | plus: 1 %}
              {% endif %}
            {% endif %}
          {% endfor %}

          {% assign hoh_enemy_count = 0 %}
          {% assign hoh_rated_count = 0 %}
          {% assign enemy_collections = "hoh_061_enemies, hoh_071_enemies, hoh_081_enemies, hoh_091_enemies" | split: ", " %}
          {% for enemies in enemy_collections %}
            {% for enemy in site[enemies] %}
              {% assign hoh_enemy_count = hoh_enemy_count | plus: 1 %}
              {% if enemy.job_specifics[job] %}
                {% assign hoh_rated_count = hoh_rated_count | plus: 1 %}
              {% endif %}
            {% endfor %}
          {% endfor %}

          {% assign hoh_boss_notes_count = 0 %}
          {% assign hoh_boss_times_count = 0 %}
          {% for floorset in site['hoh_floorsets'] %}
            {% if floorset.boss_job_specifics[job] %}
              {% if floorset.boss_job_specifics[job].notes %}
                {% assign hoh_boss_notes_count = hoh_boss_notes_count | plus: 1 %}
              {% endif %}
              {% if floorset.boss_job_specifics[job].timing %}
                {% assign hoh_boss_times_count = hoh_boss_times_count | plus: 1 %}
              {% endif %}
            {% endif %}
          {% endfor %}
          <td>{{ job }}</td>
          {% include percent_cell.html count=potd_rated_count total=potd_enemy_count %}
          {% include percent_cell.html count=potd_boss_notes_count total=19 %}
          {% include percent_cell.html count=potd_boss_times_count total=19 %}
          {% include percent_cell.html count=hoh_rated_count total=hoh_enemy_count %}
          {% include percent_cell.html count=hoh_boss_notes_count total=9 %}
          {% include percent_cell.html count=hoh_boss_times_count total=9 %}

          <!--<td>{{ potd_rated_count | times: 100 | divided_by: potd_enemy_count }}%</td>
          <td>{{ potd_boss_notes_count | times: 100 | divided_by: 19 }}%</td>
          <td>{{ potd_boss_times_count | times: 100 | divided_by: 19 }}%</td>
          <td>{{ hoh_rated_count | times: 100 | divided_by: hoh_enemy_count }}%</td>
          <td>{{ hoh_boss_notes_count | times: 100 | divided_by: 9 }}%</td>
          <td>{{ hoh_boss_times_count | times: 100 | divided_by: 9 }}%</td>-->
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

You can use this Google Sheet to easily submit enemy notes. You may want to
contact me before working on this, so I can make sure there's not someone else
already working on the same job:
<a href="https://docs.google.com/spreadsheets/d/1C4dIfZiOjREitlaCMrBMD0VLRh5WWDd5xqcZlGDNBno/edit?usp=sharing">Enemy Notes Submission</a>

</div>
