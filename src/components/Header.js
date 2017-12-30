import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Header extends React.Component {
  render () {
    return (
      <View style={HeaderContainer}>
        <Text style={HeaderText}>{this.props.title}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({

  HeaderContainer: {
    borderBottomColor: '#03A',
    borderBottomWidth: 1,
    marginTop: '10%',
    flex: 0.1,
    alignItems: 'center'
  },
  HeaderText: {
    color: '#25A',
    fontSize: 20,
    fontWeight: '200',
    flex: 1
  }
})

const {HeaderContainer, HeaderText} = styles
export default Header
