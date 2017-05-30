/**
 * Created by tudv on 5/27/2017.
 */

import { combineReducers } from 'redux'

import {
    TOGGLE,ADD_TASK,DELETE_TASK,VisibilityFilters,SET_VISIBILITY_FILTER
} from '../actions/actionTypes'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todoTasks:  [{"id":1,"name":"Task1","completed":true},{"id":2,"name":"Nathaniel Clyne","completed":false}],
}

function todoTasks(state=[], action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, {text: action.text, completed: false}]

        case TOGGLE:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })

        default:
            return state
    }
}

function visibilityFilter(state=VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default function mainReducer(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todoTasks: todoTasks(state.todoTasks, action)
    }
}

/*const mainReducer = combineReducers({
    visibilityFilter,
    todoTasks
})

export default mainReducer;*/