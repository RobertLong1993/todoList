import { useState } from 'react';
import PropTypes from 'prop-types';

function TodoList({ todos, onEdit, onDelete }) {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEditChange = (e) => {
        setEditText(e.target.value);
    };

    const handleEditSubmit = (id) => {
        if (editText.trim() === '') return;
        onEdit(id, editText);
        setEditingId(null);
        setEditText('');
    };

    return (
        <ul>
            {todos.map((todo) => (
                <li className="todo-item" key={todo.id}>
                    {editingId === todo.id ? (
                        <>
                            <input
                                type="text"
                                value={editText}
                                onChange={handleEditChange}
                            />
                            <button onClick={() => handleEditSubmit(todo.id)}>保存</button>
                            <button onClick={() => setEditingId(null)}>取消</button>
                        </>
                    ) : (
                        <>
                            <label>{todo.text}</label>
                            <button onClick={() => {
                                setEditingId(todo.id);
                                setEditText(todo.text);
                            }}>编辑</button>
                            <button onClick={() => onDelete(todo.id)}>删除</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoList;
