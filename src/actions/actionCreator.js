/**
 * Created by tudv on 5/27/2017.
 */

import {
    TOGGLE_TASK,ADD_TASK,DELETE_TASK,SET_VISIBILITY_FILTER,TOGGLE_FAB,
} from './actionTypes'

/*
 * action creators
 */

export function addTask(text) {
    return {
        type: ADD_TASK,
        name: text
    }
}

export function toggleTask(index) {
    return {
        type: TOGGLE_TASK,
        index: index
    }
}

export function deleteTask(index) {
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

export function onPressFab() {
    return {
        type:TOGGLE_FAB,
    }
}