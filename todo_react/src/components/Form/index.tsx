import React, { useState } from 'react';
import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
// import { Container } from './styles';
interface FormProps{
  setDescription: (text: string) => void,
  onAdd: () => void;
  description: string
}
const Form: React.FC<FormProps> = ({ setDescription, onAdd, description }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <TextInput
      keyboardAppearance='dark'
        value={description}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        style={{ ...styles.input, borderColor: active ? '#5E60CE' : '#0D0D0D' }}
        placeholder={'Add a new task'}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          setDescription(e.nativeEvent.text)
        }
        placeholderTextColor={'#808080'}
      />
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text>
          <AntDesign name="pluscircleo" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;