import React from 'react'
import type { RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../reducers/counterReducer'
import { View, Button, Text } from 'react-native';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View>
      <View>
        <Button
          title="Increment"
          onPress={() => dispatch(increment())}
        />
        <Text>{count}</Text>
        <Button
          title="Decrement"
          onPress={() => dispatch(decrement())}
        />
      </View>
    </View>
  )
}