import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (event) => {
    setInputValue(event.target.value); /* Detecta que tecla se presiono */
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    // setCategories tiene todo el array de categorías, así que solo tenemos que usar una arrow function y usar el spread operator
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange} /* Para que se pueda cambiar el input */
      />
    </form>
  );
};
