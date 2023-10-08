import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { styles } from "./Empleados.styles";
import { Modal } from "../Shared/Modal/Modal";
import { MasInfo } from "./MasInfo/MasInfo";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TablaEmpleados } from "./TablaEmpleados/TablaEmpleados";

export function Empleados(props) {
  const { empleados, itemsPerPage, showButton, showTodosEmpleados } = props;
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState({});

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  const verMas = (item) => {
    setInfo(item);
    onOpenCloseModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Empleados</Text>
      {showButton ? (
        <View style={styles.btnContent}>
          <Button
            title="Agregar Empleados"
            color="#4F709C"
            onPress={showTodosEmpleados}
            style={styles.button}
          />
        </View>
      ) : null}

      <TablaEmpleados
        empleados={empleados}
        verMas={verMas}
        itemsPerPage={itemsPerPage}
      />
      <MasInfo show={showModal} close={onOpenCloseModal} info={info} />
    </View>
  );
}
