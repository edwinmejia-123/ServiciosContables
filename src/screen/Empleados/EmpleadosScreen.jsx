import React from "react";
import { View, Text } from "react-native";
import { Empleados } from "../../components/Empleados/Empleados";
import { styles } from "./EmpleadosScreen.styles";
import { Button } from "react-native";

export function EmpleadosScreen(props) {
  const { empleados, showTodosEmpleados } = props;
  return (
    <View style={styles.container}>
      {empleados.length > 0 ? (
        <Empleados
          itemsPerPage={15}
          empleados={empleados}
          showButton={true}
          showTodosEmpleados={showTodosEmpleados}
        />
      ) : (
        <View style={styles.centeredContainer}>
          <Text style={styles.centeredText}>
            Aun no hay empleados ingresados
          </Text>
          <Button
            title="Agregar Empleados"
            onPress={showTodosEmpleados}
            color="#4F709C"
          />
        </View>
      )}
    </View>
  );
}
