// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Platform, KeyboardAvoidingView, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";

import Header from "./components/Header";
import Query from "./components/Query";
import ViewResults from "./components/ViewResults";

export default function App() {
  const [data, setData] = useState([[]]);
  const [col, setCol] = useState([]);
  const [time, setTime] = useState([]);
  // const [getSqlBtn, setSqlBtn] = useState(true);
  // const [getRsBtn, setRsBtn] = useState(false);
  const [database, setDatabase] = useState("MySQL");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView>
      <View>
        <Header database={database} setDatabase={setDatabase}/>
        <Query setCol={setCol} setData={setData} setTime={setTime} database={database}/>
        <ViewResults col={col} data={data} time={time}></ViewResults>
      </View>
      </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    flex: 1,
    flexDirection: "column",
  },
});
