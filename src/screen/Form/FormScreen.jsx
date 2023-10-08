import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Empleados } from "../../components/Empleados/Empleados";
import { Form } from "../../components/Form/Form";
import { View, Text } from "react-native";

export function FormScreen(props) {
  const { empleados, setEmpleados, showTodosEmpleados } = props;
  //const [empleados, setEmpleados] = useState([]);
  const [showTabla, setShowTabla] = useState(true);
  const onOpenCloseTabla = () => setShowTabla((prevState) => !prevState);

  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      <Form
        setEmpleados={setEmpleados}
        onOpenCloseTabla={onOpenCloseTabla}
        showTodosEmpleados={showTodosEmpleados}
        showTabla={showTabla}
      />

      {showTabla ? (
        empleados.length > 0 ? (
          <Empleados
            setEmpleados={setEmpleados}
            empleados={empleados}
            itemsPerPage={5}
          />
        ) : (
          <View>
            <Text>Aun no hay empleados ingresados</Text>
          </View>
        )
      ) : null}
      {/* <Empleados setEmpleados={setEmpleados} empleados={empleados} /> */}
    </ScrollView>
  );
}
