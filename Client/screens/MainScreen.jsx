import React, { useState } from "react";

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
} from "react-native";

import CheckBox from "expo-checkbox";

import SendQuery from "../services/SendQuery";

import ViewResults from "./ViewResults";

const MainScreen = () => {
  const [getQuery, setQuery] = useState("");
  const [getSqlBtn, setSqlBtn] = useState(true);
  const [getRsBtn, setRsBtn] = useState(false);
  const [getQueryProcess, setQueryProcess] = useState(false);

  handleExecuteQueryButton = () => {
    console.log("BUTTON PRESS");
    // Disable the button
    if (getQuery === "") {
      setQueryProcess(false);
      alert("Please enter a query");
    } else {
      SendQuery(getQuery, getSqlBtn, getRsBtn);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>Database</Text>
        <View style={styles.buttons}>
          <Text>My Sql </Text>
          <CheckBox
            value={getSqlBtn}
            onValueChange={(val) => {
              setSqlBtn(!getSqlBtn);
              setRsBtn(!getRsBtn);
            }}
            style={styles.checkbox}
          />
          <Text> Red Shift </Text>
          <CheckBox
            value={getRsBtn}
            onValueChange={(val) => {
              setSqlBtn(!getSqlBtn);
              setRsBtn(!getRsBtn);
            }}
            style={styles.checkbox}
          />
        </View>
      </View>
      <Text>Query:</Text>
      <View style={{ flex: 9 }}>
        <TextInput
          multiline
          numberOfLines={10}
          style={styles.querytext}
          onChangeText={setQuery}
          value={getQuery}
          placeholder="Enter the Query"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          disabled={getQueryProcess}
          title="Execute Query"
          onPress={() => {
            setQueryProcess(true);
            handleExecuteQueryButton();
          }}
        />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
    padding: 10,
  },
});
