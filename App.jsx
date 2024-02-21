import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask("");
    }
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.inputline}
          placeholder="Digite uma nova tarefa"
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity onPress={addTask} style={styles.button} >
          <Text style={styles.buttontext} >Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listTitle}>
        {tasks.length === 0 ? (
          <Text style={styles.empyList}>Nenhuma Tarefa Cadastrada</Text>
        ) : (
          <Text style={styles.fillderList}>Tarefas Cadastradas</Text>
        )}
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {tasks.map((task) => (
          <View
            key={task.id}
            style={styles.listitem}
          >
            <Text style={styles.widthText}>{task.value}</Text>
            <TouchableOpacity
              onPress={() => removeTask(task.id)}
              style={styles.buttonl}
            >
              <Text style={styles.removeBotton}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>

  );

}
const styles = StyleSheet.create({

  container: {
    padding: 30,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputline: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "75%",
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    color: "white",
    borderRadius: 5,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
  },
  listTitle: {
    marginBottom: 10,
  },
  empyList: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
  },
  fillderList: {
    textAlign: "center",
    color: "green",
    fontSize: 20,
  },
  scrollView: {
    marginBottom: 24,

  },
  listitem:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
  },
  widthText: {
    width: "75%",

  },
  removeBotton: {
    color: "white",
    padding: 8,
    borderRadius: 5,
    backgroundColor: "red",
  },
  buttonl: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: "red",
  },

});
