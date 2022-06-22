import React, {useState, memo, useCallback} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native'

const { width, height} = Dimensions.get('window');

const Child1 = memo((props:any) => {
  console.log("Child1");
  return (
    <View style={{position: 'absolute', top: height/4*1, height: height/4*2, width: width, backgroundColor: 'lightgreen'}}>
      <TouchableOpacity onPress={props.countUp} style={{backgroundColor: 'white', margin: 2}}><Text>カウントアップ</Text></TouchableOpacity>
      <TouchableOpacity onPress={props.reset} style={{backgroundColor: 'white', margin: 2}}><Text>リセット</Text></TouchableOpacity>

       <Text style={{color: 'black', fontSize:30}}>   Child1.Count = {props.count}</Text>
      <GrandChild />
    </View>
  )
})
const Child2 = memo((props:any) => {
  console.log("Child2");
  return (
    <View style={{position: 'absolute', top: height/4*3, height: height/4*2, width: width, backgroundColor: 'lightgreen'}}>
      <TouchableOpacity onPress={props.countUp2} style={{backgroundColor: 'white', margin: 2}}><Text>カウントアップ２</Text></TouchableOpacity>
      <TouchableOpacity onPress={props.reset2} style={{backgroundColor: 'white', margin: 2}}><Text>リセット２</Text></TouchableOpacity>

       <Text style={{color: 'black', fontSize:30}}>   Child2.Count = {props.count2}</Text>
    </View>
  )
})

const GrandChild = (props:any) => {
  console.log("GrandChild");
  return (
    <View style={{position: 'absolute', top: height/4*1, height: height/4, width: width, backgroundColor: 'lightblue'}}>
    </View>
  )
}

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2 ] = useState(0);
  console.log("Parent")

  const countUp = useCallback(() => {
    setCount( count + 1 );
  },[count])
  const countUp2 = useCallback(() => {
    setCount2( count2 + 1);
  },[count2])

  const reset = useCallback(() => {
    setCount(0);
  },[count])
  const reset2 = useCallback(() => {
    setCount2(0);
  },[count2])

  return(
    <View style = {{flex: 1, flexDirection: 'column', backgroundColor: 'gray'}}>
      <Child1 countUp={countUp} reset={reset} count={count} />
      <Child2 countUp2={countUp2} reset2={reset2} count2={count2}/>
    </View>
  )
}



export default App;