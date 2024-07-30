export default function Recipe({recipe}){
    const ingredients = recipe.ingredients;
    console.log(ingredients);
    return (
        <div>
            <h2>{recipe.label}</h2>
            <p>{recipe.description}</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
};