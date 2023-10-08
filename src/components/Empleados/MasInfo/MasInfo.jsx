import React from "react";
import { View, Text } from "react-native";
import { Modal } from "../../Shared/Modal/Modal";
import { styles } from "./MasInfo.styles";

export function MasInfo(props) {
  const { show, close, info } = props;

  return (
    <Modal show={show} close={close}>
      <View style={styles.container}>
        <Text style={styles.title}>Detalles del Empleado</Text>
        <View style={styles.separator} />
        <View style={styles.content}>
          <Text style={styles.infoText}>
            Nombre del empleado: {info.name} {info.apellido}
          </Text>
          <Text style={styles.infoText}>
            Sueldo: ${parseFloat(info.sueldo).toFixed(2)}
          </Text>
          <View style={styles.separator} />
          <Text style={styles.infoText}>Deducciones:</Text>
          <Text style={styles.deductionText}>
            - Renta: ${parseFloat(info.renta).toFixed(2)}
          </Text>
          <Text style={styles.deductionText}>
            - ISSS: ${parseFloat(info.isss).toFixed(2)}
          </Text>
          <Text style={styles.deductionText}>
            - AFP: ${parseFloat(info.afp).toFixed(2)}
          </Text>
          <View style={styles.separator} />
          <Text style={styles.infoText}>
            Sueldo Neto: ${parseFloat(info.sueldoNeto).toFixed(2)}
          </Text>
          <Text style={styles.infoText}>
            Descuento Realizado: ${parseFloat(info.descuento).toFixed(2)}
          </Text>
        </View>
      </View>
    </Modal>
  );
}
