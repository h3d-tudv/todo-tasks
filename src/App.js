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
    Container,
    Header,
    Body,
    Content,
    Left,
    Right,
    Button,
    Icon,
    Title,
    Drawer,
    List,
    ListItem,
} from 'native-base'

class ControlPanel extends Component{
    render() {
        return (
            <View style={{flex:1, backgroundColor: 'white'}}>
                <Text>Control panel</Text>
            </View>
        );
    }
}

export default class App extends Component {
    render() {
        var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref }}
                content={<ControlPanel/>}
                onClose={() => this.closeDrawer()} >
                <Container>
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
                    <Content>
                        <List dataArray={items}
                              renderRow={(item) =>
                                  <ListItem>
                                      {/*<TouchableHighlight>
                                          {item}
                                      </TouchableHighlight>*/}
                                      <Text>{item}</Text>
                                  </ListItem>
                              }>
                        </List>
                    </Content>
                </Container>
            </Drawer>
        );
    }

    closeDrawer() {
        this.drawer._root.close()
    };
    openDrawer(){
        this.drawer._root.open()
    };
}