import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CoinCard } from './CoinCard';
import { connect } from 'react-redux';
import { fetchCoinData } from "../redux/action/CoinDataActions";

class CryptoContainer extends React.Component {
  constructor() {
      super();
      this.state = {};
  }

  componentWillMount() {
    this.props.fetchCoinData();
  }

  renderCoinCard(){
    return this.props.data.map((item) => (
      <CoinCard
        key={item.id}
        data={item}
      />
    ))
  }

  render() {
    return(
      <View>
        {this.renderCoinCard()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.coinDataReducer.data,
  }
};


export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer);