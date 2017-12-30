import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const backgroundColors = {noChange: '#cc8e00', negativeChange: '#d63333', positiveChange: '#419950'}

class Box extends React.Component {
  render () {
    return (

      <View style={[BoxContainer, {backgroundColor: this.getBackgroundColor(this.props.percent_change_1h)}]}>
        <Text style={[BoxText, {fontWeight: 'bold'}]}>{this.props.name}</Text>
        <Text style={BoxText}>{this.props.symbol}</Text>
        <Text style={BoxText}>${this.props.price_usd}</Text>
        <Text style={BoxText}>1h: {this.props.percent_change_1h}%</Text>
      </View>
    )
  }

  getBackgroundColor (value) {
    value = Number(value)
    if (value > 0) {
      return backgroundColors.positiveChange  // greenish
    } else if (value < 0) {
      return backgroundColors.negativeChange  // redish
    } else {
      return backgroundColors.noChange  // yellowish
    }
  }
}

const styles = StyleSheet.create({

  BoxContainer: {
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,.1)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4
  },
  BoxText: {
    flex: 1,
    color: 'white'
  }
})

const {BoxContainer, BoxText} = styles
export default Box
