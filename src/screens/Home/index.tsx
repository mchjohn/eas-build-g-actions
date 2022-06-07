import React, { useState } from 'react';
import * as Linking from 'expo-linking';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export function Home() {
  const [name, setName] = useState('');

  function goGithubProfile() {
    Linking.openURL(`https://github.com/${name}`);

    setName('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome do usuário no GitHub'
        autoCapitalize='none'
        placeholderTextColor='#555'
        onChangeText={setName}
      />

      <Pressable
        style={styles.button}
        android_ripple={{color: '#222222'}}
        onPress={goGithubProfile}
      >
        <Text>Buscar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  label: {
    fontSize: 24,
    width: '100%',
    color: '#ddd',
    textAlign: 'left',
  },
  input: {
    padding: 8,
    width: '100%',
    fontSize: 24,
    color: '#ddd',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#ddd'
  },
  button: {
    margin: 20,
    padding: 16,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#ddd',
  }
})