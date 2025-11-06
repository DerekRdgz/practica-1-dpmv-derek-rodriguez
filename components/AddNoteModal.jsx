import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddNoteModal = ({ modalVisible, setModalVisible, newNote, setNewNote, addNewNote }) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Agregar una Nota Nueva</Text>
          <TextInput
            style={styles.input}
            placeholder="Teclea una descripción"
            placeholderTextColor={"#aaa"}
            onChangeText={setNewNote}
          />
          <View style={styles.modalButtons}>
            {/* Boton Cancelar */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>

            {/* Boton Aceptar */}
            <TouchableOpacity
              style={styles.saveButton}
              onPress={addNewNote}
            >
              <Text style={styles.saveButtonText}>Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNoteModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontSize: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: "#333",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
});
