import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { images } from '../utils/coinIcons';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,

  },
  name: {
    fontWeight: 'bold',
    marginTop:10,
    marginLeft: 5,
  },
  crypto: {
    textAlign: 'left',
    marginLeft: 5,
    marginTop:10,
  },
  image: {
    width: 35,
    height: 35,
  },
  separator: {
    marginTop:10,
    marginLeft:5,
    marginRight:5,
  },
  price: {
    marginTop: 10,
    marginLeft: 'auto',
    fontWeight: 'bold',
  },
  statsLign: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom:-10,
  },
  percentChangeMinus: {
    fontWeight: 'bold',
    color: "#DD2C00",
  },
  percentChangePlus: {
    fontWeight: 'bold',
    color: "#5ddd33",
  }
});

const CoinCard = (props) => (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <Image style={styles.image} source={{ uri: images[props.data.symbol] }} />
        <Text style={styles.name}>{props.data.name}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.crypto}>{props.data.symbol}</Text>
        <Text style={styles.price}>{props.data.price_usd} $</Text>
      </View>
      <View style={styles.statsLign}>

        <Text>24h:
          <Text style={props.data.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {props.data.percent_change_24h}%</Text>
        </Text>
        <Text>7d:
          <Text style={props.data.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }>{props.data.percent_change_7d}%</Text>
        </Text>

      </View>
    </View>
);

export { CoinCard };
