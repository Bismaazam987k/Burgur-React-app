// src/IngredientManager.js
import React, { useState } from 'react';

const IngredientManager = () => {
    const [ingredients, setIngredients] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addIngredient = () => {
        if (inputValue.trim()) {
            setIngredients(prevIngredients => [...prevIngredients, inputValue.trim()]);
            setInputValue('');
        }
    };

    const removeIngredient = () => {
        setIngredients(prevIngredients => prevIngredients.slice(0, -1));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Burger Ingredient Manager</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add ingredient"
                className="border p-2 mb-2 w-full"
            />
            <div className="flex space-x-2 mb-4">
                <button
                    onClick={addIngredient}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Add Ingredient
                </button>
                <button
                    onClick={removeIngredient}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                    Remove Last Ingredient
                </button>
            </div>
            <h2 className="text-xl font-semibold mb-2">Current Ingredients:</h2>
            <ul className="list-disc pl-5">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-lg">{`${index + 1}. ${ingredient}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientManager;
