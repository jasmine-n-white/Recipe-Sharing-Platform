import {useState} from 'react';
import validator from 'validator';

function Form({addRecipe}) {
  const [formData, setFormData] = useState({recipeName: "", ingredients: "", instructions: "", imageURL: ""});
  const [errors, setErrors] = useState({recipeName: "", ingredients: "", instructions: "", imageURL: "", overallForm: ""});
  const handleRecipeName = (event) => {
    const {value} = event.target;
    if (value.length < 2) {
      setErrors({ ...errors, recipeName: "Recipe name is required." });
    } else {
      setErrors({ ...errors, recipeName: "" });
  }
  setFormData({ ...formData, recipeName: value });
}

const handleIngredients = (event) => {
  const {value} = event.target;
  if (value.length < 2) {
    setErrors({ ...errors, ingredients: "Ingredients are required." });
  } else {
    setErrors({ ...errors, ingredients: "" });
}
setFormData({ ...formData, ingredients: value });
}

const handleInstructions = (event) => {
  const {value} = event.target;
  if (value.length < 2) {
    setErrors({ ...errors, instructions: "Instructions are required." });
  } else {
    setErrors({ ...errors, instructions: "" });
}
setFormData({ ...formData, instructions: value });
}

const handleImageURL = (event) => {
  const {value} = event.target;
  if (!validator.isURL(value)) {
    setErrors({ ...errors, imageURL: "A valid URL for the image is required."});
  } else {
    setErrors({ ...errors, imageURL: ""});
  }
  setFormData({ ... formData, imageURL: value});
}

const handleSubmission = (event) => {
  event.preventDefault();
  const {recipeName, ingredients, instructions, imageURL} = formData;
  if (recipeName && !errors.recipeName && ingredients && !errors.ingredients && instructions && !errors.instructions && imageURL && !errors.imageURL) {
    addRecipe(formData);
    setFormData({recipeName: "", ingredients:"", instructions:"", imageURL:""});
    setErrors({recipeName: "", ingredients:"", instructions:"", imageURL:""});
  } else {
    setErrors({...errors, overallForm: "Something is wrong with your form!"});
  }
}
  return (
    <div className="recipeForm">
    <h1>Share Your Recipe!</h1>
    <form onSubmit={handleSubmission}>
        <input id="recipeName" name="recipeName" type="text" placeholder="Recipe Name" value={formData.recipeName} onChange={handleRecipeName} />
        <textarea id="ingredients" name="ingredients" type="text" placeholder="Ingredients (ex. 2 cups water, 3 tsp salt, 1/2 white onion, etc.)" value={formData.ingredients} onChange={handleIngredients} />
        <textarea id="instructions" name="instructions" type="text" placeholder="Instructions (click 'enter' on your keyboard to begin a new line of text for each step)" value={formData.instructions} onChange={handleInstructions} />
        <input id="imageURL"name="imageURL" type="text" placeholder="Image URL" value={formData.imageURL} onChange={handleImageURL} />
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