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
    StackNavigator
} from 'react-navigation'
import {
    Provider
} from 'react-redux'

import {
    Scene, NavBar, Router
} from 'react-native-router-flux'

import {createStore} from 'redux'
import mainReducer from './reducers/reducers'

import {
    Container, Header, Body, Content, Left, Right, Button, Icon, Title, Drawer,
} from 'native-base'

import TodoListView from './components/TodoList'
import DetailView from './components/view/DetailView'

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

class MainScreen extends Component {
    render() {
        return (
            <Provider store={store}>
                <Drawer  style={{marginTop:128}}
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

export default class AppContainer extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="mainView" component={MainScreen} initial="true" hideNavBar="false"/>
                    <Scene key="detailView" title="sdsd" component={DetailView} hideNavBar="true"/>
                </Scene>
            </Router>
        );
    }
}