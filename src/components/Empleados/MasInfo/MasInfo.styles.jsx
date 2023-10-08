import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5, // Mayor separación entre título y contenido
    color: "#213555",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  deductionText: {
    fontSize: 16,
    marginLeft: 20,
  },
  content: {
    marginTop: 10, // Espacio entre el título y el contenido
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
});
