import React from 'react';
import CryptoContainer from "./src/components/CryptoContainer";
import Header from "./src/components/Header";
import {Provider} from 'react-redux';
import store from "./src/redux/store";
import {View, ScrollView} from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header/>
          <ScrollView style={{ marginBottom: 80 }}>
            <CryptoContainer/>
          </ScrollView>
        </View>
      </Provider>
    );
  }
}