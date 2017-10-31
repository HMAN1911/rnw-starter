import React from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import styled from 'styled-components/native'

// Components
const Card = ({ children }) => <View>{children}</View>
const Title = ({ children }) => <Text>{children}</Text>
const Photo = ({ uri }) => <Image source={{ uri }} />
const App = () => (
  <Card>
    <Title>App Card</Title>

    <StyledView>
      <StyledText>Hello World!</StyledText>
    </StyledView>
    <Button title="test" color="green" onPress={() => console.log('clicked')} />
  </Card>
)

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') })
