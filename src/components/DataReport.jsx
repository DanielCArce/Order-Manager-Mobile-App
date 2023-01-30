import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DataReport = ({name, data}) => {
  return (
    <View style={styles.container}>
          <View style={styles.card}>
              <Text>
                {name}
              </Text>
              <Text>
                  {Intl.NumberFormat('es').format(data)}
              </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: '15',
        padding: '8',
        backgroundColor: 'white',
    color: '#6df740',
    borderColor: '#363636',
        borderWidth:'6'
}})
export default DataReport