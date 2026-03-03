// cardRenderer.js
function renderCard(recipe) {
    return `
        <div class="card" data-category="${recipe.category}">
            <div class="card-image">
                <img src="${recipe.image}" alt="${recipe.title}">
                <span class="card-badge ${recipe.badgeClass}">${recipe.badge}</span>
            </div>
            <div class="card-content">
                <h3>${recipe.title}</h3>
                <p class="ingredients">${recipe.ingredients}</p>
                <div class="card-footer">
                    <span class="date"><i class="far fa-calendar-alt"></i> ${recipe.date}</span>
                    <span class="author">نشر: ${recipe.author}</span>
                </div>
            </div>
        </div>
    `;
}