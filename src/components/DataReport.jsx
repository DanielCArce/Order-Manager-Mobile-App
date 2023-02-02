import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DataReport = ({name, data}) => {
  return (
    <View style={styles.container}>
          <View style={styles.card}>
        <Text style={ styles.text}>
                {name}
              </Text>
              <Text style={styles.content}>
                  {Intl.NumberFormat('es').format(data)}
              </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical:8,
    backgroundColor: 'white',
    color: '#6df740',
    borderColor: '#363636',
    borderWidth: 2
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content:{
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 200,
  }
})
export default DataReport