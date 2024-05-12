// İç içe bir dizi
const recipes = [
    {
      name: "Spaghetti Bolognese",
      ingredients: [
        { name: "Spaghetti", amount: "200g" },
        { name: "Ground beef", amount: "300g" },
        { name: "Tomato sauce", amount: "400g" },
        { name: "Onion", amount: "1" },
        { name: "Garlic cloves", amount: "2" },
        { name: "Olive oil", amount: "2 tbsp" },
        { name: "Salt", amount: "to taste" },
        { name: "Black pepper", amount: "to taste" }
      ],
      instructions: "..."
    },
    {
      name: "Caesar Salad",
      ingredients: [
        { name: "Romaine lettuce", amount: "1 head" },
        { name: "Chicken breast", amount: "1" },
        { name: "Bacon", amount: "4 slices" },
        { name: "Parmesan cheese", amount: "50g" },
        { name: "Croutons", amount: "1 cup" },
        { name: "Caesar dressing", amount: "4 tbsp" },
        { name: "Lemon", amount: "1" }
      ],
      instructions: "..."
    }
  ];
  
  // print every recipe and ingredients
  recipes.forEach(recipe => {
    let name =recipe.name
    console.log(`Recipe: ${name}`);
    console.log("Ingredients:");
    recipe.ingredients.forEach(ingredient => {
        let ingredients=ingredient.name
        let amount=ingredient.amount
        console.log(`  - ${ingredients}: ${amount}`);
    });
    console.log("Instructions:", recipe.instructions);
    console.log("-------------");
  });
  