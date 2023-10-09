import React, { useState } from "react";
import { LogBox } from "react-native";
import { StyleSheet, View } from "react-native";
import { FormScreen } from "./src/screen/Form/FormScreen";
import { EmpleadosScreen } from "./src/screen/Empleados/EmpleadosScreen";

export default function App() {
  const [empleados, setEmpleados] = useState([]);
  const [showTodos, setShowTodos] = useState(false);

  const onShowHideTodos = () => setShowTodos((prevState) => !prevState);

  LogBox.ignoreAllLogs();

  return (
    <View style={styles.container}>
      {!showTodos ? (
        <FormScreen
          empleados={empleados}
          setEmpleados={setEmpleados}
          showTodosEmpleados={onShowHideTodos}
        />
      ) : (
        <EmpleadosScreen
          empleados={empleados}
          showTodosEmpleados={onShowHideTodos}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
});
