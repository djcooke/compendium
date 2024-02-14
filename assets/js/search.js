function hideSearchResults() {
  document.getElementById('searchResults').style.display = 'none';
}

function showSearchResults() {
  document.getElementById('searchResults').style.display = 'block';
}

function createResultLink(item) {
  let link = document.createElement('a');
  link.href = item.link;
  link.textContent = item.title;
  link.addEventListener('click', hideSearchResults);
  return link;
}

function handleSearchInput(e) {
  const searchQuery = e.target.value.toLowerCase();
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  if (searchQuery.trim()) {
    fetch('./search_data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch search index data.');
        }
        return response.json();
      })
      .then(data => {
        const filteredData = data.filter(item => item.title.toLowerCase().includes(searchQuery));

        if (filteredData.length) {
          filteredData.forEach(item => resultsContainer.appendChild(createResultLink(item)));
        } else { // TODO: this can be improved a lot
          // Remove any pre-existing no results div
          const noResultsDivPre = document.querySelector('.no-results');
          noResultsDivPre && noResultsDivPre.remove();

          // Display "No results found" with an image
          const noResultsDiv = document.createElement('div');
          noResultsDiv.className = 'no-results';
          noResultsDiv.style.display = 'flex';
          noResultsDiv.style.alignItems = 'center';

          const noResultsImage = document.createElement('img');
          noResultsImage.src = '/assets/images/search_no_results_kupo.png';
          noResultsImage.style.width = '12%';
          noResultsImage.style.padding = '5px';

          const noResultsText = document.createElement('span');
          noResultsText.textContent = 'No results found, consider ';

          const contributingLink = document.createElement('a');
          contributingLink.href = '/contributing.html';
          contributingLink.textContent = 'contributing!';
          contributingLink.style.padding = '0 5px';
          contributingLink.style.fontSize = 'unset';

          noResultsDiv.appendChild(noResultsImage);
          noResultsDiv.appendChild(noResultsText);
          noResultsDiv.appendChild(contributingLink);
          resultsContainer.appendChild(noResultsDiv);
        }
        showSearchResults();
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  } else {
    hideSearchResults();
  }
}

// Document event listeners
document.addEventListener('DOMContentLoaded', hideSearchResults);
document.getElementById('searchTerm').addEventListener('input', handleSearchInput);
document.addEventListener('click', function (event) {
  let searchTermElement = document.getElementById('searchTerm');
  let searchResultsElement = document.getElementById('searchResults');

  if (!searchTermElement.contains(event.target) && !searchResultsElement.contains(event.target)) {
    hideSearchResults();
  }
});