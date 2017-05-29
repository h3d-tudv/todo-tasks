/**
 * Created by tudv on 5/27/2017.
 */

import React, {Component} from 'react'

import {
    Header, Body, Left, Right, Button, Icon, Title,
} from 'native-base'

export default class HeaderComponent extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={()=>this.openDrawer()}>
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
        );
    }
}