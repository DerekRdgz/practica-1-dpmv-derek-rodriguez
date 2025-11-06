import kitty from "@/assets/images/kitty.jpg";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={kitty}
        style={styles.image}
      />
      <Text style={styles.titulo}>gatos</Text>
      <Text styles={styles.subtitulo}> si lees esto eres un gato de patas cortas</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("./notes");
        }}
      >
        <Text style={{ color: "#fff" }}>Presioname papi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default HomeScreen;
