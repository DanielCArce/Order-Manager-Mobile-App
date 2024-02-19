import { View, Text } from 'react-native'
import React from 'react'

const TableDetails = ({ headers: [], data: [] }) => {
    console.log({headers})
  return (
    <View>
          {/* <View style={{flexDirection:'row', alignContent:'space-between'}}>
              {
                  headers.length > 0 && headers.map((head) => {
                      return (<View>
                          <Text>{ head }</Text>
                      </View>)
                  })
              }
        </View> */}
    </View>
  )
}

export default TableDetails