// Store checkbox state in localStorage when clicked
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        localStorage.setItem(`checkbox-${checkbox.id}`, checkbox.checked ? 'true' : 'false');
    });
});

// Retrieve checkbox states from localStorage when page is loaded or reloaded
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    const storedState = localStorage.getItem(`checkbox-${checkbox.id}`);
    if (storedState !== null) {
        checkbox.checked = storedState === 'true';
    }
});

// Clear checkboxes when the clear button is clicked
document.getElementById('clear-btn').addEventListener('click', () => {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false; // Clear the checkbox state
        localStorage.removeItem(`checkbox-${checkbox.id}`); // Remove the stored state
    });
    localStorage.clear(); // Clear all localStorage items (optional)
});


