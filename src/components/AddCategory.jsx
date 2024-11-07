import { useState } from "react"
import { PropTypes } from "prop-types";

export const AddCategory = ({ onAddNewCategory }) => {

    const [inputValue, setInputValue] = useState('juan caballo')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length < 1) return;

        setInputValue('');
        onAddNewCategory(inputValue.trim());
    }

    return (
        <>
            <form onSubmit={ onSubmit } aria-label="form">
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

AddCategory.propTypes = {
    onAddNewCategory: PropTypes.func.isRequired
}
