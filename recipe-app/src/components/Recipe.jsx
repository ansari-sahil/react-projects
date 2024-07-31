export default function Recipe({recipe}){
    const url = recipe.url
    const ingredients = recipe.ingredientLines;
    console.log(ingredients);
    return (
        <div>
            <h2>{recipe.label}</h2>
            <p>{recipe.description}</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <a href={url} target="_blank" rel="noopener noreferrer">View Recipe</a>
        </div>
    );
};