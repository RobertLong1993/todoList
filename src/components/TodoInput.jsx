import PropTypes from 'prop-types';
import {useState} from "react";


function TodoInput(props) {
    const {handleAddTodos} = props;
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim() === '') return;
        handleAddTodos(inputValue);
        setInputValue('');
    };


    return <header>
        <div className="add-todo-form">
            <input
                type="text"
                placeholder="请输入待办事项"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>添加+</button>
        </div>
    </header>
}

TodoInput.propTypes = {
    handleAddTodos: PropTypes.func.isRequired,
}

export default TodoInput;