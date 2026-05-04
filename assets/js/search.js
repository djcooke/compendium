const search = (() => {
  const MIN_QUERY_LENGTH = 2;
  const MAX_RESULTS = 25;
  const DEBOUNCE_MS = 80;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  function init() {
    const input = document.getElementById('searchInput');
    const resultsList = document.getElementById('searchResults');

    if (!input || !resultsList || typeof MiniSearch === 'undefined') {
      return;
    }

    let miniSearch = null;
    let loadPromise = null;
    let debounceHandle = null;

    function loadIndex() {
      if (loadPromise) {
        return loadPromise;
      }

      const indexUrl = input.dataset.indexUrl || '/search.json';

      loadPromise = fetch(indexUrl, { credentials: 'same-origin' })
        .then((response) => {
          if (!response.ok) {
            return null;
          }
          return response.json();
        })
        .then((entries) => {
          if (!entries) {
            loadPromise = null;
            return null;
          }
          // This uses minisearch loaded as a global.
          // Expected DOM:
          //   <input id="searchInput" type="search">
          //   <ul id="searchResults"></ul>
          miniSearch = new MiniSearch({
            fields: ['title', 'subtitle', 'keywords'],
            storeFields: ['title', 'subtitle', 'url', 'kind'],
            searchOptions: {
              boost: { title: 3, keywords: 1.5 },
              prefix: true,
              fuzzy: 0.2,
              combineWith: 'AND',
            },
          });
          miniSearch.addAll(entries);
          return miniSearch;
        })
        .catch(() => {
          loadPromise = null;
          miniSearch = null;
          return null;
        });

      return loadPromise;
    }

    function clearResults() {
      resultsList.replaceChildren();
    }

    function renderEmpty(message) {
      const li = document.createElement('li');
      li.className = 'searchEmpty';
      li.textContent = message;
      resultsList.replaceChildren(li);
    }

    function renderResults(results) {
      if (!results.length) {
        renderEmpty('No results');
        return;
      }

      const fragment = document.createDocumentFragment();
      for (const result of results) {
        const li = document.createElement('li');
        li.className = 'searchResult searchResult--' + result.kind;

        const link = document.createElement('a');
        link.href = result.url;

        const title = document.createElement('span');
        title.className = 'searchResultTitle';
        title.textContent = result.title;
        link.appendChild(title);

        if (result.subtitle) {
          const subtitle = document.createElement('span');
          subtitle.className = 'searchResultMeta';
          subtitle.textContent = result.subtitle;
          link.appendChild(subtitle);
        }

        li.appendChild(link);
        fragment.appendChild(li);
      }

      resultsList.replaceChildren(fragment);
    }

    function runSearch(query) {
      if (!miniSearch) {
        return;
      }
      const results = miniSearch.search(query).slice(0, MAX_RESULTS);
      renderResults(results);
    }

    function onInput() {
      const query = input.value.trim();

      if (debounceHandle !== null) {
        clearTimeout(debounceHandle);
        debounceHandle = null;
      }

      if (query.length < MIN_QUERY_LENGTH) {
        clearResults();
        return;
      }

      debounceHandle = setTimeout(() => {
        debounceHandle = null;
        loadIndex().then((index) => {
          if (!index) {
            renderEmpty('Search is unavailable');
            return;
          }
          runSearch(query);
        });
      }, DEBOUNCE_MS);
    }

    input.addEventListener('input', onInput);
    input.addEventListener('focus', loadIndex, { once: true });
})();
