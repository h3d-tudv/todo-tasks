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


class TodoList extends Component{
    render(){
        var items = [{"name":"Simon Mignolet","completed":true},{"name":"Nathaniel Clyne","completed":false}];
        var {toggle,remove,add} = this.props;
        return (
            <List dataArray={items}
                  renderRow={(item) =>

                      <ListItem icon>
                          <Left>
                              <CheckBox onPress={toggle} checked={item.completed} />
                          </Left>
                          <Body>
                          <Text>
                              {item.name}
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
        toggle: () => {
            dispatch(toggleTask())
        }
    }

}

const TodoListView = connect(
    mapStateToProps,

    mapDispatchToProps
)(TodoList)

export default TodoListView