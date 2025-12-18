// ATELIER STELLA - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactions
    initializeFilters();
    initializeViewDetails();
});

// ============================================
// FILTER FUNCTIONALITY
// ============================================

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    if (filterButtons.length === 0 || productItems.length === 0) {
        return; // Not on shop page
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            productItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.classList.remove('hidden');
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.3s ease';
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// ============================================
// VIEW DETAILS TOGGLE
// ============================================

function initializeViewDetails() {
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    if (viewDetailsButtons.length === 0) {
        return; // Not on shop page
    }

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const extraDetails = this.nextElementSibling;
            
            // Toggle visibility
            extraDetails.classList.toggle('show');
            
            // Update button text and style
            if (extraDetails.classList.contains('show')) {
                this.textContent = 'Hide Details';
                this.style.backgroundColor = '#2c2c2c';
                this.style.color = '#fff';
            } else {
                this.textContent = 'View Details';
                this.style.backgroundColor = 'transparent';
                this.style.color = '#2c2c2c';
            }
        });
    });
}