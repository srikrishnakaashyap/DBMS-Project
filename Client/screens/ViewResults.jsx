import React, { useState } from "react";
import { StyleSheet } from "react-native";

const ViewResults = (props) => {
  return (
    <View style={styles.container}>
      <Table></Table>
    </View>
    // Button to go back to the main screen to enter the query again
  );
};

export default ViewResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});
