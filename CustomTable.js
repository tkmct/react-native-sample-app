import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Table, TableWrapper, Row, Col } from 'react-native-table-component'

const data = [
  ['Takamichi', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi2', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi3', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi4', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi5', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi6', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi7', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi8', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi9', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi10', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi2', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi3', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi4', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi5', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi6', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi7', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi8', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi9', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
  ['Takamichi10', 'bdgaqh1889@gmail.com', 23, 'NishiNippori', 'Hello, I\'m Takamichi Tsutsumi'],
]

const names = data.map(d => d[0])
const body = data.map(d => d.splice(1))

export default class CustomTable extends Component {
  constructor() {
    super()

    this.state = {
      head: ['Name', 'Email', 'Age', 'Address', 'Message'],
      widthArr: [100, 100, 100, 100, 100, 100]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <View>
            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
              <Row data={this.state.head} widthArr={this.state.widthArr} style={styles.head} />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table style={{ flexDirection: 'row' }}>
                <TableWrapper >
                  <Col data={names} style={{ width: 100 }} />
                </TableWrapper>
                <ScrollView horizontal>
                <TableWrapper>
                  {
                    body.map((row, i) => <Row key={i} data={row} widthArr={this.state.widthArr} style={styles.row} />)
                  }
                </TableWrapper>
                </ScrollView>
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 50, backgroundColor: '#537791' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
})
