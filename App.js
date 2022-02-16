import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Increment,
  Decrement,
  IncrementByAmount,
  Reset,
} from './Components/Counter';
import {ScrollView} from 'react-native';

export default function App() {
  const {count} = useSelector(state => state.Counter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const onHandlerChange = e => {
    setAmount(parseInt(e));
  };
  const RestFunction = () => {
    dispatch(IncrementByAmount(amount));
    setAmount('');
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView style={styles.scroll}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.Screen}>
            <View style={styles.Card}>
              <Text style={styles.countText}>{count}</Text>
            </View>
            <View style={styles.Flex}>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => dispatch(Increment())}>
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => dispatch(Decrement())}>
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Flex2}>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={onHandlerChange}
                value={amount.toString()}
              />
              <TouchableOpacity style={styles.Button} onPress={RestFunction}>
                <Text style={styles.text2}>Add Amount</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Reset}>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => dispatch(Reset())}>
                <Text style={styles.text2}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: '#fff',
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 45,
  },
  text: {
    color: '#764ABC',
    fontSize: 35,
  },
  countText: {
    color: '#764ABC',
    fontSize: 60,
  },
  Card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0EDF8',
    width: Platform.OS === 'ios' ? '50%' : wp(50),
    height: Platform.OS === 'ios' ? hp(23) : hp(29),
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

    // marginTop: -200,
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0EDF8',
    color: '#764ABC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  Flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: '8%',
  },
  Flex2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '54%',
    marginTop: 35,
  },
  Reset: {
    marginTop: 35,
  },
  text2: {
    color: '#764ABC',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#F0EDF8',
    width: 55,
    maxWidth: 55,
    paddingHorizontal: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#764ABC',
    color: '#764ABC',
    fontSize: 20,
  },
  scroll: {
    backgroundColor: '#fff',
  },
});
