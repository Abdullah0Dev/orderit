import {Text, Pressable } from 'react-native'
import { Colors } from '../constants';
import React, { forwardRef } from 'react';
const Button = forwardRef(({ text, ...pressableProps }, ref) => {
  return (
    <Pressable
      className='py-3 align-middle items-center rounded-lg my-10'
      ref={ref} {...pressableProps}
      style={{ backgroundColor: Colors.action }}>
      <Text className='text-white font-semibold text-base' >{text}</Text>
    </Pressable>
  ) 
}
)
export default Button