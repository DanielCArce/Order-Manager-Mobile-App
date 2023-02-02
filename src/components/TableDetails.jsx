import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
function renderItem({ item }) {
    const lineTotal = (item.quantity * item.price)
    return (
        <View style={[styles.tableRow, item.id % 2 === 0 ? styles.tablePattern : styles.tableUnPattern ]} key={item.id}>
          <View>
            <Text>{Intl.NumberFormat('es').format(item.quantity)}</Text>
          </View>
          <View>
                <Text>{`${item.name} ${item.size}"`}</Text>
          </View>
          <View>
            <Text>{item.unit}</Text>
          </View>
          <View>
                <Text>{ Intl.NumberFormat('es').format(item.price)}</Text>
          </View>
          <View>
                <Text>{Intl.NumberFormat('es').format(lineTotal)}</Text>
          </View>
        </View>
    )
}
const TableDetails = ({ data }) => {
    return (
      <View>            
      <View style={styles.table}>
          <View>
            <Text style={ styles.tableHeader}>Cantidad</Text>
          </View>
          <View>
            <Text style={ styles.tableHeader}>Descripción</Text>
          </View>
          <View>
            <Text style={ styles.tableHeader}>Unidad</Text>
          </View>
          <View>
            <Text style={ styles.tableHeader}>Precio</Text>
          </View>
          <View>
            <Text style={ styles.tableHeader}>Total</Text>
          </View>
        </View>
                <ScrollView>
                    <FlatList data={data} renderItem={renderItem}/>
                </ScrollView>
      </View>
      
  )
}
const styles = StyleSheet.create({
    table: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }, tablePattern: {
        backgroundColor: 'lightblue',
        color: 'black',
        fontWeight:500
    },
    tableUnPattern: {
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 400,
        paddingVertical:15
    },
    tableHeader: {
        fontWeight: 800,
        color: 'black',
        textAlign:'center'
    }

})

export default TableDetails