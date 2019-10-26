/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Login extends Component<Props> {


    constructor(props) {
        super(props);
    }

    //2.实例化阶段
    componentWillMount() {
        //在render之前调用此方法
        //业务逻辑的处理都应该放在这里，如对state的操作等
        console.log("componentWillMount-------------");
    }

    render() {//渲染并返回一个虚拟DOM
        console.log("render------------");
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit Login.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <div className="search-logo"></div>
                <div className="search-input"></div>
                <div className="search-car"></div>
                <div className="search-moreA"></div>
            </View>
        );
    }

    componentDidMount() {
        //该方法发生在render方法之后。在该方法中，
        // ReactJS会使用render方法返回的虚拟DOM对象来创建真实的。
        //DOM结构
        console.log("componentDidMount------------");
    }



    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
    });
}