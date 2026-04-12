(function () {
    const input = document.getElementById('search-input');
    const groups = document.querySelectorAll('.tag-group');
    const noResults = document.getElementById('no-results');

    input.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();
        let visible = groups.length;

        groups.forEach(function (group) {
            group.style.display = '';
            if (!query || !group.dataset.tag.includes(query)) {
                group.style.display = 'none';
                visible--;
            }
        });

        noResults.style.display = visible <= 0 ? '' : 'none';
    });

    input.focus();
})();
