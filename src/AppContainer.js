/**
 * Created by tudv on 5/24/2017.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native'

import {
    Provider
} from 'react-redux'

import {createStore} from 'redux'
import mainReducer from './reducers/reducers'

import {
    Container, Header, Body, Content, Left, Right, Button, Icon, Title, Drawer,
} from 'native-base'

import TodoListView from './components/TodoList'

class ControlPanel extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text>Control panel</Text>
            </View>
        );
    }
}

let store = createStore(mainReducer)

export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <Drawer
                    ref={(ref) => {
                        this.drawer = ref
                    }}
                    content={<ControlPanel/>}
                    onClose={() => this.closeDrawer()}>
                    <Container>
                        <Header>
                            <Left>
                                <Button transparent onPress={() => this.openDrawer()}>
                                    <Icon name='menu'/>
                                </Button>
                            </Left>
                            <Body>
                            <Title>Today</Title>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon name='settings'/>
                                </Button>
                            </Right>
                        </Header>
                        <Content>
                            <TodoListView/>
                        </Content>
                    </Container>
                </Drawer>
            </Provider>
        );
    }

    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() {
        this.drawer._root.open()
    };
}