import React, { useState } from "react";
import CheckBox from "expo-checkbox";
import { RadioButton } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
const Header = ({database, setDatabase}) => {
    // const [getQuery, setQuery] = useState("");
    // const [sql, setSql] = useState(true);
    // const [rs, setRs] = useState(false);
    // Improve the UI Here,
    return (
        <View>
          <Text style={styles.title}>DBDS Project Task 1</Text>
            <View style={styles.buttons}>
            {/* <Text style={styles.dbs}>Database:</Text> */}
            <View style={styles.btn}>
            <Text style={styles.dbs}>Database:</Text>
            <Text>My Sql </Text>
            <RadioButton
                value="MySQL"
                status={ database === 'MySQL' ? 'checked' : 'unchecked' }
                onPress={() => setDatabase('MySQL')}
            />
            </View>
            <View style={styles.btn}>
            <Text> Red Shift </Text>
            <RadioButton
                value="RDS"
                status={ database === 'RDS' ? 'checked' : 'unchecked' }
                onPress={() => setDatabase('RDS')}
            />
            </View>
            </View>
        </View>
    );
  };
  
  export default Header;
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
      fontWeight: "bold",
      marginTop: 5,
    },
  
    checkbox: {
      alignSelf: "center",
    },
  
    querytext: {
      padding: 10,
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
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 20
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    },
    title: {
      textAlign: "center",
      fontSize: 20,
      marginBottom: 10,
      fontWeight: "bold"
    },
    dbs: {
      fontWeight: "bold",
      marginRight: 20,
    },
    btn: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
