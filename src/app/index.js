import { Link } from 'expo-router';
import { View } from 'react-native'
import React from 'react'
import { Button } from '../components';
const index = () => {
  return (
    <View className='flex flex-1 justify-center p-20'>
     <Link href={'/(user)'} asChild>
        <Button text="User" />
      </Link>
      <Link href={'/(admin)'} asChild>
        <Button text="Admin" />
      </Link>
    </View>
  )
}

export default index
 