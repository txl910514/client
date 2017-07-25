import {combineReducers} from 'redux';

import {ADD} from '../actions/testAction'

function addTodo(state = [], action)
{
    switch (action.type)
    {
        case ADD :
            return [
                ...state,
                {
                    text: action.text,
                }
            ]
        default:
            return state
    }
}
const todoAPP = combineReducers({
                                    addTodo
                                });
export default todoAPP;