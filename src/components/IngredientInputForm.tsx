export default function IngredientInputForm() {
  return (
    <form className="ingredient-input-form">
      <input
        type="text"
        placeholder="e.g. Oregano"
        area-label="Add Ingredient"
      />
      <button type="submit">+ Add Ingredient</button>
    </form>
  );
}
