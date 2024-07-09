import React from 'react';
import { View } from 'react-native'
import Header from './src/componentes/Header';
import Post from './src/componentes/Post';

export default props => {
  const comments = [{
    nickname: 'Harry Styles',
    comment: 'Nice pic!'
  }, {
    nickname: 'Louis Tomlinson',
    comment: 'Lovely.'
  }]

  return (
    <View style={{flex: 1}}>
      <Header/>
      <Post image={require('./assets/imgs/fence.jpg')}
        comments={comments} />
    </View>
  )
}