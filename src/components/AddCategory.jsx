import React, { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = ({ target }) => {
        setInputValue(target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const clearInputValue = inputValue.trim();
        if (clearInputValue.length <= 1) return;

        onAddCategory(clearInputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input 
                    type='text'
                    placeholder='Search Gifs'
                    value={ inputValue }
                    onChange={ onChangeInput }
                />
            </form>
        </>
    )
}
