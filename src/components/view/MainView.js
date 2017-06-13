/**
 * Created by tudv on 5/30/2017.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native'
import ActionButton from 'react-native-action-button'

import {
    Container, Header, Body, Content, Left, Right, Button, Icon, Title, Drawer,Fab,Input,Item
} from 'native-base'

import TodoListView from '../../components/TodoList'
import {
    onPressFab
} from '../../actions/actionCreator'

import {connect} from 'react-redux'

import {
    Actions
} from 'react-native-router-flux'

import SearchHeaderComponent from 'react-native-search-header';

const SearchHeader = SearchHeaderComponent();

class ControlPanel extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text>Control panel</Text>
            </View>
        );
    }
}

class ContentView extends Component {
    render() {
        const onAddPress = ()=> {
            //Actions.createNewlView()
        }

        var {fabActive,active} = this.props;
        return (
            <Drawer  style={{marginTop:128}}
                     ref={(ref) => {
                         this.drawer = ref
                     }}
                     content={<ControlPanel/>}
                     onClose={() => this.closeDrawer()}>
                <Container>


                    <Header>
                        <SearchHeader
                            ref = {(searchHeader) => {
                                this.searchHeader = searchHeader;
                            }}
                            statusHeightOffet = { 0 }
                            onGetSearchAutocompletions = {async (text) => {
                                /*if (text) {
                                    const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                        method: `get`
                                    });
                                    const data = await response.json();
                                    return data[1];
                                } else {
                                    return [];
                                }*/
                            }}

                        />
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>Today</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={()=> this.searchHeader.show()}>
                                <Icon name='search'/>
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <TodoListView/>
                    </Content>

                    <View>
                        {/*<Fab
                            active={fabActive}
                            direction="up"
                            containerStyle={{ marginLeft: 10 }}
                            style={{ backgroundColor: '#5067FF' }}
                            position="bottomRight"
                            onPress={() => active()}>

                            <Icon name="add" />
                        </Fab>*/}
                        {/*<Item success>
                            <Input placeholder='Textbox with Success Input'/>
                            <Icon name='checkmark-circle' />
                        </Item>*/}

                    </View>
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

const mapStateToProps = (state) => {
    return {
        fabActive: state.viewState.fabActive,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        active: () => {
            dispatch(onPressFab())
        },
    }
}

const MainView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentView)

export default MainView