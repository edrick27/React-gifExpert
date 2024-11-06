import { useState } from "react"

export const AddCategory = ({ onAddNewCategory }) => {

    const [inputValue, setInputValue] = useState('juan caballo')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length < 1) return;

        onAddNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Buscar Gifts..."
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button></button>
            </form>
        </>
    )
}