document.querySelector('.search-bar').addEventListener('input', function(e) {
    console.log('Search query: ', e.target.value);
});

function redirectToPage() {
    const select = document.getElementById('sectionSelect');
    const selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue; // Redirect to the selected page
    }
}
