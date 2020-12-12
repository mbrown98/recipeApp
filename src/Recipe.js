import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ recipe, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>Title: {recipe.recipe.label}</h1>
      <ol>
        {ingredients.map((ing) => (
          <li>{ing.text}</li>
        ))}
      </ol>
      <p>Calories: {recipe.recipe.calories}</p>
      <img className={style.image} src={`${recipe.recipe.image}`} alt=""></img>
    </div>
  );
};

export default Recipe;
