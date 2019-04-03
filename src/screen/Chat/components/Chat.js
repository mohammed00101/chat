import React , { Component } from 'react';
import {RecyclerListView, DataProvider,LayoutProvider} from 'recyclerlistview';
import  ChatItem from './ChatItem';
import {Dimensions,StyleSheet} from 'react-native';
import {Card} from 'native-base';


const { width,height } = Dimensions.get("window");

// list of messages
export default class Chat extends Component {

layoutProvider = new LayoutProvider(
    index => 'normal',
    (type,dim)=>{dim.width=width;dim.height=height*0.1}
);

    initListData = () =>{
        this.dataProvider = new DataProvider(
            (r1,r2) => r1 !==r2
        ).cloneWithRows(this.props.messages);
    }


    renderItem = (type,data) =>( 
    <ChatItem
        style={Styles.Item}
        type={type}
        data={data}
    /> );



    render () {

        this.initListData();

        return(
            <Card style={this.props.style}>
            <RecyclerListView
             style={{flex:1}}
             canChangeSize={true}
             dataProvider={ this.dataProvider}
             layoutProvider={this.layoutProvider}
             rowRenderer={this.renderItem}
             ref = {ref => this.recycleRef = ref}
            />
            </Card>
        );

    }

}



const Styles = StyleSheet.create({
    Item:{
        flexDirection:'row',
        backgroundColor:'#000000',
        margin:0,
        padding:0
    }
});
