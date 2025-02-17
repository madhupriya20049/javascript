document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search-container');

    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    searchContainer.appendChild(searchResults);
    const libraries = [
        {
            name: 'react-is',
            version: '@19.0.0',
            stars: '231k',
            description: 'Brand checking of React Elements.'
        },
        {
            name: 'react',
            version: '@19.0.0',
            stars: '231k',
            description: 'React is a JavaScript library for building user interfaces.'
        },
        {
            name: 'react-dom',
            version: '@19.0.0',
            stars: '231k',
            description: 'The entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React.'
        },
        {
            name: 'vue',
            version: '@3.5.13',
            stars: '208k',
            description: 'Simple, Fast & Composable MVVM for building interactive interfaces'
        },
        {
            name: 'bootstrap',
            version: '@5.3.3',
            stars: '167k',
            description: 'The most popular front-end framework for developing responsive, mobile first projects on the web.'
        }
    ];

    function showSearchResults() {
        searchResults.classList.add('active');
        renderResults(libraries);
    }

    function hideSearchResults() {
        searchResults.classList.remove('active');
    }

    function renderResults(results) {
        searchResults.innerHTML = results.map(lib => `
            <div class="library-item">
                <div class="library-name">
                    ${lib.name}
                    <span class="library-version">${lib.version}</span>
                </div>
                <div class="library-description">${lib.description}</div>
                <div class="library-stats">
                    <div class="library-stat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        ${lib.stars}
                    </div>
                </div>
            </div>
        `).join('');
    }
    searchInput.addEventListener('focus', showSearchResults);
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredLibraries = libraries.filter(lib => 
            lib.name.toLowerCase().includes(query) || 
            lib.description.toLowerCase().includes(query)
        );
        renderResults(filteredLibraries);
    });
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            hideSearchResults();
        }
    });

    searchButton.addEventListener('click', () => {
        showSearchResults();
        searchInput.focus();
});
});
