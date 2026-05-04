---
title: Search
external_scripts:
  - https://cdn.jsdelivr.net/npm/minisearch@7.1.2/dist/umd/index.min.js
scripts:
  - search.js
---

<div class="surfacePane" markdown="0">
  <input
    type="search"
    id="searchInput"
    class="searchInput"
    placeholder="Search pages, floorsets, bosses, enemies…"
    autocomplete="off"
    spellcheck="false"
    autofocus
    data-index-url="{{ '/search.json' | relative_url }}"
  />
  <ul id="searchResults" class="searchResults"></ul>
</div>
