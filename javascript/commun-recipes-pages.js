let visibleRecipes = 4;

function renderRecipes(recipes) {

    const container = document.getElementById("algerien-cards");
    container.innerHTML = "";

    recipes.slice(0, visibleRecipes).forEach(recipe => {
        container.innerHTML += createRecipeCard(recipe);
    });

    if (visibleRecipes >= recipes.length) {
        document.getElementById("loadMoreBtn").style.display = "none";
    }

}

document.getElementById("loadMoreBtn").addEventListener("click", function() {

    visibleRecipes += 4;

    renderRecipes(allRecipes);

});