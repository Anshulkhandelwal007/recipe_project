// JavaScript code goes here
// You can use JavaScript to fetch data from a database or JSON file to populate the featured recipes

// Example function to load featured recipes (dummy data)
function loadFeaturedRecipes() {
    const featuredRecipesSection = document.getElementById('featured-recipes');
    // Replace this with the actual data from your backend or JSON file
    const featuredRecipesData = [
        { title: 'Recipe 1', image: 'images/recipe1.png', description: 'This is recipe 1.' },
        { title: 'Recipe 2', image: 'images/recipe2.png', description: 'This is recipe 2.' },
        { title: 'Recipe 2', image: 'images/recipe3.png', description: 'This is recipe 3.' },
        { title: 'Recipe 2', image: 'images/recipe4.png', description: 'This is recipe 4.' },
        { title: 'Recipe 2', image: 'images/recipe5.png', description: 'This is recipe 5.' },
        { title: 'Recipe 2', image: 'images/recipe6.png', description: 'This is recipe 6.' },
    ];

    featuredRecipesData.forEach((recipe) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeCard.appendChild(recipeImage);

        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;
        recipeCard.appendChild(recipeTitle);

        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;
        recipeCard.appendChild(recipeDescription);

        featuredRecipesSection.appendChild(recipeCard);
    });
}

// Function to display individual recipe page
function displayRecipe(recipeData) {
    const recipeSection = document.getElementById('recipe');
    // Replace this with the actual recipe data from your backend or JSON file

    // Example data for illustration purposes
    const recipeHTML = `
        <h2>${recipeData.title}</h2>
        <div class="recipe-details">
            <p>Preparation Time: ${recipeData.prepTime}</p>
            <p>Cook Time: ${recipeData.cookTime}</p>
            <p>Total Time: ${recipeData.totalTime}</p>
            <p>Serving Size: ${recipeData.servingSize}</p>
        </div>
        <div class="recipe-ingredients">
            <h3>Ingredients</h3>
            <ul>
                ${recipeData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        <div class="recipe-instructions">
            <h3>Instructions</h3>
            <ol>
                ${recipeData.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>
        <button class="print-button" onclick="window.print()">Print Recipe</button>
        <div class="social-media-buttons">
            <!-- Add social media sharing buttons here -->
        </div>
    `;

    recipeSection.innerHTML = recipeHTML;
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
    // Load featured recipes on page load
    loadFeaturedRecipes();

    // Example recipe data for illustration purposes
    const exampleRecipeData = {
        title: 'Example Recipe',
        prepTime: '15 minutes',
        cookTime: '30 minutes',
        totalTime: '45 minutes',
        servingSize: '4 servings',
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        instructions: ['Step 1', 'Step 2', 'Step 3'],
    };

    // Display example recipe on click (Replace with actual data when integrated with backend)
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('click', () => {
            displayRecipe(exampleRecipeData);
        });
    });
});
