import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const ViewResults = ({col,data,time}) => {
  console.log(data);

  return (
    <View onStartShouldSetResponder={() => true}>
      <Text style={styles.elapsedTime}>Elapsed Time: {time}</Text>
      <ScrollView>
      <ScrollView horizontal = {true}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={col} style={styles.HeadStyle} textStyle={styles.HeadText}/>
          <Rows data={data} style={styles.RowStyle} textStyle={styles.RowText}/>
        </Table>
      </ScrollView>
      </ScrollView>
      </View>

    // <ScrollView>
    // <View onStartShouldSetResponder={() => true} >
    //   <Text style={styles.elapsedTime}>Elapsed Time: {time}</Text>
    //   <ScrollView horizontal = {true}>
    //   {/* <View style={styles.tableContainer}> */}
    //   <DataTable>
    //     <DataTable.Header style={styles.databeHeader}>
    //       {
    //         col.map((colName, index) => {
    //           return (
    //             <DataTable.Title style={styles.HeadText} key={index}>{colName}</DataTable.Title>
    //           )
    //         })
    //       }
    //     </DataTable.Header>
    //     <ScrollView style={styles.dataWrapper}>
    //     {
    //       data.map((row, index) => {
    //         return (
    //           <DataTable.Row key={index} style={styles.databeBox}>
    //             {
    //               row.map((cell,index) => {
    //                 return (
    //                   <DataTable.Cell numberOfLines={10} style={styles.RowText} key={index}>{cell}</DataTable.Cell>
    //                 )
    //               })
    //             }
    //           </DataTable.Row>
    //         )
    //       })
    //     }
    //     </ScrollView>
    //   </DataTable>
    //   {/* </View> */}
    //   </ScrollView>
    // </View>
    // </ScrollView>

    // <View style={styles.container}>
    //   <Text style={styles.elapsedTime}>Elapsed Time: {time}</Text>
    //     <ScrollView horizontal={true}>
    //       <View>
    //         <Table borderStyle={{borderColor: '#C1C0B9'}}>
    //           <Row data={col} style={styles.head} textStyle={styles.text}/>
    //         </Table>
    //         <ScrollView style={styles.dataWrapper}>
    //           <Table borderStyle={{borderColor: '#C1C0B9'}}>
    //             {
    //               data.map((dataRow, index) => (
    //                 <Row
    //                   key={index}
    //                   data={dataRow}
    //                   style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
    //                   textStyle={styles.text}
    //                 />
    //               ))
    //             }
    //           </Table>
    //         </ScrollView>
    //       </View>
    //     </ScrollView>
    //   </View>
    // Button to go back to the main screen to enter the query again
  );
};

export default ViewResults;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#ffffff' },
  // container: {
  //   paddingTop: 100,
  //   paddingHorizontal: 30,
  // },
  tableContainer: {paddingTop: 100, paddingHorizontal: 30,},
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' },
  HeadStyle: { 
    // height: 50,
    alignContent: "center",
    backgroundColor: '#00d1b550',
    // minWidth: 130,
    // maxWidth: 150,
  },
  RowStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 3,
    // minWidth: 130,
    // maxWidth: 150,
  },
  HeadText: { 
    // margin: 10,
    paddingLeft: 0,
    // flex: 3,
    minWidth: 130,
    maxWidth: 130,
    minHeight: 40,
    maxHeight: 40,
    // width: '100%',
    // height: 100
  },
  RowText: { 
    // margin: 10,
    paddingLeft: 0,
    // flex: 3,
    minWidth: 130,
    maxWidth: 130,
    minHeight: 80,
    maxHeight: 80,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-around",
    flex: 3,
    // width: '100%',
    // height: 100
  },
  mainbox:{
    textAlign:'center',
    margin: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  databeBox:{
    margin: 10,
    textAlign: 'center',
  },
  databeHeader:{
    margin: 10,
    textAlign: 'center',
    paddingLeft:5,
    backgroundColor: '#DCDCDC',
  },
  elapsedTime:{
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 10,
  },
  // container: { 
  //   flex: 1, 
  //   padding: 16, 
  //   paddingTop: 30, 
  //   backgroundColor: '#ffffff' 
  // },
  // head: { 
  //   height: 50, 
  //   backgroundColor: '#6F7BD9' 
  // },
  // text: { 
  //   textAlign: 'center', 
  //   fontWeight: '200' 
  // },
  dataWrapper: { 
    marginTop: -1 
  },
  // row: { 
  //   height: 40, 
  //   backgroundColor: '#F7F8FA' 
  // }
});
