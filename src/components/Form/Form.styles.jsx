import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#213555",
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#4F709C",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  btnContent: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
