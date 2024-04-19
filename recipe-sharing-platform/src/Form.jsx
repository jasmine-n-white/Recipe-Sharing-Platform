import {useState} from 'react';

function Form() {
  const [formData, setFormData] = useState({recipeName: "", ingredients: "", instructions: "", imageURL: ""});
  const [errors, setErrors] = useState({recipeName: "", ingredients: "", instructions: "", imageURL: ""});
  const handleRecipeName = (event) => {
    const {value} = event.target;
    if (value.length < 2) {
      setErrors({ ...errors, recipeName: "Recipe name is required." });
    } else {
      setErrors({ ...errors, recipeName: "" });
  }
  setFormData({ ...formData, recipeName: value });
}

  return (
    <div className="recipeForm">
    <h2>Add a Recipe 🍲😋</h2>
    <form>
        <input id="recipeName" name="recipeName" type="text" placeholder="Recipe Name" value={formData.recipeName} onChange={handleRecipeName} />
        <textarea id="ingredients" name="ingredients" type="text" placeholder="Ingredients" value={formData.ingredients} />
        <textarea id="instructions" name="instructions" type="text" placeholder="Instructions" value={formData.instructions} />
        <input id="imageURL"name="imageURL" type="url" placeholder="Image URL" value={formData.imageURL} />
        <section className="errors">
          <ul>
            {Object.values(errors).map((error, i) => (
              <li key = {i}>{error}</li>
            ))}
          </ul>
        </section>
        <button type="submit">Submit!</button>
    </form>
    </div>
  );
}

export default Form