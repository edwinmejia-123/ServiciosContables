import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./TablaEmpleados.styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export function TablaEmpleados(props) {
  const { empleados, verMas, itemsPerPage } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = empleados.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < empleados.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View>
      <View>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>Nombre</Text>
          <Text style={styles.columnHeader}>Apellido</Text>
          <Text style={styles.columnHeader}>Sueldo</Text>
          <Text style={styles.columnHeader}>Descuento total</Text>
          {/* 
          <Text style={styles.columnHeader}>Sueldo neto</Text> */}
          <Text style={styles.columnHeader}></Text>
        </View>
        <FlatList
          data={displayedData}
          keyExtractor={(item) => item.index.toString()}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>{item.apellido}</Text>
              <Text style={styles.tableCell}>
                ${parseFloat(item.sueldo).toFixed(2)}
              </Text>
              <Text style={styles.tableCell}>
                ${parseFloat(item.descuento).toFixed(2)}
              </Text>

              <TouchableOpacity
                onPress={() => verMas(item)}
                style={styles.viewMoreButton}
              >
                <Icon name="search" size={15} color="white" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={handlePrevPage}>
          <Text style={styles.pageButton}>Anterior</Text>
        </TouchableOpacity>
        <Text>{currentPage}</Text>
        <TouchableOpacity onPress={handleNextPage}>
          <Text style={styles.pageButton}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
