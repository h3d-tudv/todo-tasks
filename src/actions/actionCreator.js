/**
 * Created by tudv on 5/27/2017.
 */

import {
    TOGGLE,ADD_TASK,DELETE_TASK,SET_VISIBILITY_FILTER
} from './actionTypes'

export function toggleTask(index) {
    return {
        type: TOGGLE,
        index:index
    }
}

/*
 * action creators
 */

export function addTodo(text) {
    return {
        type: ADD_TASK,
        name: text
    }
}

export function toggleTodo(index) {
    return {
        type: DELETE_TASK,
        index: index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    }
}