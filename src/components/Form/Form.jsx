import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./Form.styles";

export function Form(props) {
  const { setEmpleados, onOpenCloseTabla, showTodosEmpleados, showTabla } =
    props;
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [sueldo, setSueldo] = useState("");

  const [errors, setErrors] = useState({});

  const validarCampos = () => {
    const newErrors = {};

    if (nombre.trim() === "") {
      newErrors.nombre = "El nombre es obligatorio";
    } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      newErrors.nombre = "El nombre solo puede contener letras y espacios";
    }

    if (apellido.trim() === "") {
      newErrors.apellido = "El apellido es obligatorio";
    } else if (!/^[a-zA-Z\s]+$/.test(apellido)) {
      newErrors.apellido = "El apellido solo puede contener letras y espacios";
    }

    if (sueldo.trim() === "") {
      newErrors.sueldo = "El sueldo es obligatorio";
    } else if (!/^\d+(\.\d{1,2})?$/.test(sueldo)) {
      newErrors.sueldo = "El sueldo debe ser numérico y maximo 2 decimales";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Devuelve true si no hay errores
  };

  const ingresarEmpleado = () => {
    if (!validarCampos()) {
      // Evita agregar empleados con campos vacíos
      return;
    }

    // Crea un nuevo empleado con los datos ingresados
    const nuevoEmpleado = {
      index: Math.random().toString(),
      name: nombre,
      apellido: apellido,
      sueldo: sueldo,
      renta: calculoRenta(),
      afp: calculoAFP,
      isss: calculoISSS,
      descuento: calculoISSS + calculoAFP + calculoRenta(),
      sueldoNeto: sueldo - (calculoISSS + calculoAFP + calculoRenta()),
    };

    // Agrega el nuevo empleado al estado de empleados
    setEmpleados((empleados) => [...empleados, nuevoEmpleado]);

    // Limpia los campos de entrada después de agregar el empleado
    setNombre("");
    setApellido("");
    setSueldo("");
  };

  const calculoRenta = () => {
    if (sueldo <= 325) {
      return 0;
    } else if (sueldo <= 700) {
      return sueldo * 0.15;
    } else if (sueldo <= 1200) {
      return sueldo * 0.17;
    } else if (sueldo <= 2200) {
      return sueldo * 0.21;
    } else if (sueldo <= 3700) {
      return sueldo * 0.25;
    } else {
      return sueldo * 0.29;
    }
  };
  const calculoISSS = sueldo * 0.03;
  const calculoAFP = sueldo * 0.0725;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingreso de empleados</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      {errors.nombre && <Text style={styles.error}>* {errors.nombre}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={(text) => setApellido(text)}
      />
      {errors.apellido && <Text style={styles.error}>* {errors.apellido}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Sueldo mensual"
        keyboardType="numeric"
        value={sueldo}
        onChangeText={(text) => setSueldo(text)}
      />
      {errors.sueldo && <Text style={styles.error}>* {errors.sueldo}</Text>}
      <View style={styles.btnContent}>
        <Button
          style={styles.button}
          styleText={styles.buttonText}
          color="#4F709C"
          title="Ingresar"
          onPress={ingresarEmpleado}
        />
        <Button
          style={styles.button}
          styleText={styles.buttonText}
          color="#4F709C"
          title="Mostrar todos"
          onPress={() => showTodosEmpleados()}
        />
        <Button
          style={styles.button}
          styleText={styles.buttonText}
          color="#4F709C"
          title={showTabla ? "Ocultar tabla" : "Mostrar tabla"}
          onPress={() => onOpenCloseTabla()}
        />
      </View>
    </View>
  );
}
