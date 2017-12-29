import React from 'react';
import { StyleSheet, Text, View, ScrollView,  ActivityIndicator } from 'react-native'; //todo sort these in alph

import {Header,Box} from "./src/components"

const currency_api_url = "https://api.coinmarketcap.com/v1/ticker/?limit=50";


export default class App extends React.Component {
  
  extractData(obj){
    var data  = {}; 
    data.name = obj.name;
    data.symbol = obj.symbol; 
    data.price_usd = obj.price_usd; 
    data.percent_change_1h = obj.percent_change_1h; 
    return data; 
  };

  constructor(props){
    super(props);

    this.state = {currencies: [], loading: true} ; 
    var comp = this ; 
    fetch(currency_api_url)
        .then(function(data) {
          var currencies = JSON.parse(data._bodyText) ; 
          var extractedCurrencies = [] ;
          
          currencies.forEach(function extract(currency){
              extractedCurrencies.push(comp.extractData(currency)) ; 
          });
          comp.setState(previousState => {
              return {currencies: (extractedCurrencies), loading: false} 
          }); 
        });
    
  };

  render() {

    return (
      <View style={{ flex: 1 }}>
        <Header title="Cryptocurrency Changes: Past Hour"/>
        <ScrollView style={styles.Body, {flex: 4}}>
              
              {this.state.loading ? <ActivityIndicator style={styles.Loader} size="large" color="#03A" /> : null }
              {this.state.currencies.map(function draw(currency){
                  return <Box percent_change_1h = {currency.percent_change_1h} symbol={currency.symbol} price_usd={currency.price_usd} key={currency.name} name={String(currency.name)}></Box> ; 
                }) 
              }
        </ScrollView>
      </View>
    );
  }
}



// class Box extends React.Component{
  
//   getBackgroundColor(value){
//     value = Number(value)
//     if (value > 0){
//       return "#419950"; //greenish
//     }
//     else if (value < 0){
//        return "#d63333" ;  //redish
//     }
//     else{
//       return "#cc8e00" ; //yellowish
//     }
//   }

//   render(){
//       return (

//           <View style={[styles.Box, {backgroundColor: this.getBackgroundColor(this.props.percent_change_1h)}]}>   
//              <Text style={{flex:1, fontWeight:"bold", color: "white"}}>{this.props.name}</Text>
//              <Text style={{flex:1 ,color: "white"}}>{this.props.symbol}</Text>
//              <Text style={{flex:1,  color: "white"}}>${this.props.price_usd}</Text>  
//              <Text style={{flex:1, color: "white"}}>1h: {this.props.percent_change_1h}%</Text>
//           </View>
//       );
//   }
// }

/**
  Declare Styles Here
**/
const styles = StyleSheet.create({
  Body:{
      backgroundColor: "#efefef",
      flex: 10,
      flexGrow: 1,
      marginTop: "10%",
  },
  Loader:{
      flex: 1,
      marginTop: "60%",
  }
});
