/**
 * Created by tudv on 5/27/2017.
 */

import { combineReducers } from 'redux'

import {
    TOGGLE_TASK,ADD_TASK,DELETE_TASK,VisibilityFilters,SET_VISIBILITY_FILTER,TOGGLE_FAB,
} from '../actions/actionTypes'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todoTasks:  [{"id":1,"name":"Task1","completed":true},{"id":2,"name":"Nathaniel Clyne","completed":false}],
    viewState:{"fabActive":false}
}

function todoTasks(state=[], action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, {text: action.text, completed: false}]

        case TOGGLE_TASK:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            });
        case DELETE_TASK:
            var newState = [];
            for (var i = 0, len = state.length; i < len; i++) {
                if (i !== action.index)
                    newState.push(state[i]);
            }
            return newState;

        default:
            return state
    }
}

function visibilityFilter(state=VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

function viewState(state={"fabActive":false}, action) {
    switch (action.type) {
        case TOGGLE_FAB:
            var  newState = Object.assign({}, state);
            if (newState.hasOwnProperty("fabActive"))
                newState["fabActive"] = !(newState["fabActive"])
            else
                newState["fabActive"] = true;

            return newState;
        default:
            return state;
    }
}

export default function mainReducer(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todoTasks: todoTasks(state.todoTasks, action),
        viewState:viewState(state.viewState,action)
    }
}