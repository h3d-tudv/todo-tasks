/**
 * Created by tudv on 5/27/2017.
 */

import React, {Component} from 'react'
import {
    Text,
} from 'react-native'
import {
    List,
    ListItem,
    Left, Right, Body, CheckBox, Icon
} from 'native-base'

import TodoItem from './TodoItem'
import {connect} from 'react-redux'

import {
    toggleTask, addTodo,
} from '../actions/actionCreator'

import {
    Actions
} from 'react-native-router-flux'


class TodoList extends Component{
    render(){
        const onTaskPress = (rowData)=> {
            Actions.detailView(rowData)
        }

        var {items,toggle,remove,add} = this.props;
        return (
            <List dataArray={items}
                  renderRow={(rowData, sectionId, rowId) =>

                      <ListItem icon>
                          <Left>
                              <CheckBox onPress={()=>toggle(rowId)} checked={rowData.completed} />
                          </Left>
                          <Body>
                          <Text onPress={()=>onTaskPress(rowData)}>
                              {rowData.name}
                          </Text>
                          </Body>
                          <Right>
                              <Icon name="md-trash" style={{ color: '#000000' }} onPress={remove} />
                          </Right>
                      </ListItem>

                  }>
            </List>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.todoTasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (rowId) => {
            dispatch(toggleTask(parseInt(rowId)))
        }
    }
}

const TodoListView = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListView