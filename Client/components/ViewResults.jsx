import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const ViewResults = ({col,data,time}) => {
  console.log(data);
  // const [numCols, setNumCols] = useState(0);
  // const [cols, setCols] = useState([]);
  // const cols = [];

  // useEffect(()=>{
  //   // console.log(data.data);
  //   // let col = [];
  //   if(data.data && data.data.length>0) {
  //     let numCols = data.data[0].length;
  //     console.log(data.data[0].length);
  //     console.log(numCols);
  //     for(let i=0;i<numCols;i++) {
  //       cols.push("Column "+String(i));
  //     }
  //   }
  //   console.log(cols);
  //   // setCols(col);
  // });

  return (
    // <View onStartShouldSetResponder={() => true}>
    //   <ScrollView>
    //   <ScrollView horizontal = {true}>
    //     <Table borderStyle={{borderWidth: 1}}>
    //       <Row data={col} style={styles.HeadStyle} textStyle={styles.TableText}/>
    //       <Rows data={data} style={styles.RowStyle} textStyle={styles.TableText}/>
    //     </Table>
    //   </ScrollView>
    //   </ScrollView>
    //   </View>
    // <ScrollView>
    <View onStartShouldSetResponder={() => true} >
      <Text style={styles.elapsedTime}>Elapsed Time: {time}</Text>
      {/* <ScrollView> */}
      <ScrollView horizontal = {true}>
      <DataTable>
        <DataTable.Header style={styles.databeHeader}>
          {
            col.map((colName, index) => {
              return (
                <DataTable.Title key={index}>{colName}</DataTable.Title>
              )
            })
          }
        </DataTable.Header>
        <ScrollView style={styles.dataWrapper}>
        {
          data.map((row, index) => {
            return (
              <DataTable.Row key={index} style={styles.databeBox}>
                {
                  row.map((cell,index) => {
                    return (
                      <DataTable.Cell key={index}>{cell}</DataTable.Cell>
                    )
                  })
                }
              </DataTable.Row>
            )
          })
        }
        </ScrollView>

        {/* <DataTable.Row>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row> */}

      </DataTable>
      </ScrollView>
      {/* </ScrollView> */}
    </View>
    // </ScrollView>

    // <View style={styles.container}>
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
    //                   style={styles.row}
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
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  // container: {
  //   paddingTop: 100,
  //   paddingHorizontal: 30,
  // },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  RowStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 3,
  },
  TableText: { 
    margin: 10
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
