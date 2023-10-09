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
    width: 100,
    height: 30,
    fontSize: 12,
  },
  btnContent: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
});
