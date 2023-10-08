import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 8,
  },
  columnHeader: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    /* backgroundColor: "#fff",
    marginHorizontal: 4, */
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
    alignItems: "center",
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    /* backgroundColor: "#fff",
    marginHorizontal: 4, */
    textAlign: "center",
  },
  viewMoreButton: {
    backgroundColor: "#4F709C",
    color: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 15,
    borderRadius: 4,
    textAlign: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  pageButton: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#213555",
  },
  button: {
    width: 100, // Ancho deseado
    height: 30, // Alto deseado
    fontSize: 12,
  },
  btnContent: {
    justifyContent: "flex-start", // Alineación del contenido
    alignItems: "flex-start", // Alineación de los items
    marginBottom: 10, // Espacio entre el botón y el siguiente elemento
  },
});
