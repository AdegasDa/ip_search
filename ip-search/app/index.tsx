import { Link } from "expo-router";
import { Pressable, Text, View, StyleSheet  } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}    >
      <Text style={styles.title}>IP Adresses</Text>

      <Pressable style={styles.button}>
        <Link style={styles.buttonText} href="/ipaddresses">Browse IP Addresses</Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
  },
  button: {
    backgroundColor: "#54d4a1ff",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});