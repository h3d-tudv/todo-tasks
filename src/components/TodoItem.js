/**
 * Created by tudv on 5/27/2017.
 */

import React, {Component, PropTypes} from 'react'
import {
    Text, Icon, ListItem, CheckBox, Left, Right, Body
} from 'native-base'

/*const TodoItem = ({toggle, remove, item}) => {
    <ListItem style={{flex:1}}>
        <CheckBox onPress={toggle} checked={item.completed}/>
        <Text style={{ alignSelf: 'center' }}>
            {item.text}
        </Text>
        <Icon name="md-trash" style={{ color: '#000000' }} onPress={remove} />
    </ListItem>
}

TodoItem.propTypes = {
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired, //eslint-disable-line
};*/

export default class TodoItem extends Component {
    render() {
        return (
            <ListItem>
                <Left>
                    <CheckBox/>
                </Left>
                <Body>
                    <Text>
                        hehe dfghjkl fghjkl ghjk
                    </Text>
                </Body>
                <Right>
                    <Icon name="md-trash" style={{ color: '#000000' }}/>
                </Right>
            </ListItem>
        );
    }
}
/*const TodoItem = ({item}) => {
    <ListItem style={{flex:1}}>
        <CheckBox/>
        <Text style={{ alignSelf: 'center' }}>
            hehe
        </Text>
        <Icon name="md-trash" style={{ color: '#000000' }}/>
    </ListItem>
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired, //eslint-disable-line
};

export default TodoItem;*/
