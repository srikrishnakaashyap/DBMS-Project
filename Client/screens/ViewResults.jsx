import React, { useState } from "react";
import { StyleSheet } from "react-native";

const ViewResults = (props) => {
  return (
    <View style={styles.container}>
      <Table></Table>
    </View>
  );
};

export default ViewResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});
