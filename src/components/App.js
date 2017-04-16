import React, { Component } from 'react'
import { View,Text } from 'react-native'

import {Header} from './common'

export default class App extends Component {
  render(){
    return (
      <View>
        <Header headerText="Auth App" />
        <Text>Hello My App</Text>
      </View>
    )
  }
}
