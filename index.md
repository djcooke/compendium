---
layout: default
supress_title: true
---

# Deep Dungeon Compendium

<div class="surfacePane" markdown="1">
This site is an attempt to collect as much knowledge of FFXIV deep dungeons in
one place as possible. It should serve as a good guide for groups looking to
complete deep dungeons, but even more so for those brave souls looking to solo
them.

This is all about sharing knowledge, so collaboration is most welcome! If you
have additional knowledge or any suggestions at all to share, please see the
[Contributing page](contributing.html). In particular, job-specific information
would be extremely helpful, as I will not likely be soloing on every job!

I would like to give a **special thanks** to Angelus Demonus and Maygi for their
amazing guides that helped me immensely through my own deep dungeon journey.
See the [Resources page](resources.html) for links to these and other great
resources.

-Daleven Vindhler
</div>

## Recent Updates

<div class="surfacePane" markdown="1">

{% for change in site.data.changelog limit:5 %}
  <h3>{{ change.date }}</h3>
  <ul>
  {% for update in change.updates %}
    <li>{{ update }}</li>
  {% endfor %}
  </ul>
{% endfor %}

See [full change log](changelog.html) for older updates.

</div>
