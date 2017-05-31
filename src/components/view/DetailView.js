/**
 * Created by tudv on 5/31/2017.
 */

import React, {Component} from 'react'
import {
    View, Text
} from 'react-native'
import {
    Container, Left, Icon, Header,Content,Button,Body,Title
} from 'native-base'

import {Actions} from 'react-native-router-flux'

export default class DetailView extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.backAction()}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{this.props.name}</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>{this.props.name}</Text>
                </Content>
            </Container>
        )
    }

    backAction() {
        Actions.mainView()
    };
}