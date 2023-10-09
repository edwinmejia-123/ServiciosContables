import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});
