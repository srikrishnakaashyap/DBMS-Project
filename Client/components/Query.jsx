import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

// import Tooltip from 'react-native-elements';
import Tooltip from 'react-native-walkthrough-tooltip';

import CheckBox from "expo-checkbox";

import SendQuery from "../services/SendQuery";

import ViewResults from "./ViewResults";

const Query = ({setCol, setData, setTime, database, dataset, setLoading, resetData, activateQueryFunc, setQueryStatus}) => {
  const [getQuery, setQuery] = useState("");
  // const [getSqlBtn, setSqlBtn] = useState(true);
  // const [getRsBtn, setRsBtn] = useState(false);
  const [getQueryProcess, setQueryProcess] = useState(false);
  const [queryOutput, setQueryOutput] = useState("");
  // const [toolTipVisible, setToolTipVisible] = useState(false);
  // const tmp = "";

  useEffect(() => {
    activateQueryFunc.activate = activateQueryProcess
  }, [])

  const activateQueryProcess = () => {
    // console.log("hsghsg");
    setQueryProcess(false);
  }

  const handleClearQueryButton = () => {
    if(getQuery === "") {
      alert("No query to clear");
    } 
    else {
      // resetData;
      setQuery("");
    }
  }

  // const makeToolTipVisible = () => {
  //   console.log("gggg");
  //   setToolTipVisible(true);
  // }

  const handleExecuteQueryButton = () => {
    // console.log(getQuery);
    // Disable the button
    if (getQuery === "") {
      setQueryProcess(false);
      alert("Please enter a query");
    } else {
      SendQuery(getQuery, database, dataset, setData, setCol, setTime, setLoading, setQueryStatus);
      // console.log("tmp: ",tmp);
      console.log(database);
    //   fetch("http://192.168.1.248:5002/request", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: getQuery,
    //     isSqlBtn: database=="MySQL"?true:false,
    //     isRsBtn: database=="RDS"?true:false,
    //   }),
    // })
    //   .then((response) => 
    //     // console.log(response)
    //     response.json()
    //     // console.log(code);
    //   )
    //   .then((responseJson) => {
    //     // console.log(responseJson);
    //     // console.log(code);
    //     // return responseJson;
    //     if (responseJson.Status === 200) {
          
    //       let data = responseJson.Response;
    //       let cols = responseJson.Header;
    //       setData(data);
    //       setCol(cols);
    //       setTime(responseJson.ElapsedTime);
    //     } else {
    //       // We need to display the same screen with the error..
    //       alert(responseJson.Response);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("FROM ERROR");
    //     console.log(error);
    //   });
    }
  };

  changeText = (value) => {
    setQuery(value);
    if(getQueryProcess == true) {
      setQueryProcess(false);
    }
  }

  // Improve the UI Here,
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.querytext}>Query:</Text>
          <View>
            <TextInput
              multiline
              numberOfLines={4}
              style={styles.btnContainer}
              onChangeText={(value) => {
                changeText(value);
              }}
              value={getQuery}
              placeholder="Enter the Query here: "
            />
            {/* <Tooltip
              isVisible={toolTipVisible}
              content={<Text>!</Text>}
              placement="top"
              onClose={() => setToolTipVisible(false)}
            >
              <TouchableHighlight style={styles.touchable}>
                <Text>Press me</Text>
              </TouchableHighlight>
            </Tooltip> */}
          </View>
          <View style={{ flexDirection: "row" ,marginLeft: 20, justifyContent: 'space-evenly' }}>
            <Button
              disabled={getQueryProcess}
              title="Execute Query"
              onPress={() => {
                setQueryProcess(true);
                handleExecuteQueryButton();
              }}
            />
            <Button
              // disabled={getQueryProcess}
              title="Clear Query"
              onPress={() => {
                // setQueryProcess(true);
                handleClearQueryButton();
                resetData();
              }}
            />
          </View>
        </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
};

export default Query;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    flex: 1,
    flexDirection: "column",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  checkbox: {
    alignSelf: "center",
  },

  querytext: {
    fontWeight: "bold",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 2,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 5
  },
  btnContainer: {
    backgroundColor: "white",
    fontFamily: 'monospace',
    color: '#00d1b5',
  }
});