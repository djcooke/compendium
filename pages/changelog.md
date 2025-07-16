---
layout: default
title: Change Log
---

<div class="surfacePane" markdown="1">

{% for change in site.data.changelog %}
  <h3>{{ change.date }}</h3>
  <ul>
  {% for update in change.updates %}
    <li>{{ update }}</li>
  {% endfor %}
  </ul>
{% endfor %}

</div>