/**
 * Created by tudv on 5/30/2017.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native'

import {
    Container, Header, Body, Content, Left, Right, Button, Icon, Title, Drawer,
} from 'native-base'

import TodoListView from '../../components/TodoList'

class ControlPanel extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text>Control panel</Text>
            </View>
        );
    }
}

export default class MainView extends Component {
    render() {
        return (
            <Drawer
                ref={(ref) => {
                    this.drawer = ref
                }}
                content={<ControlPanel/>}
                onClose={() => this.closeDrawer()}>

                <Container>
                    {/*<Header>
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
                    </Header>*/}

                    <Content>
                        <TodoListView/>
                    </Content>
                </Container>
            </Drawer>
        );
    }

    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() {
        this.drawer._root.open()
    };
}