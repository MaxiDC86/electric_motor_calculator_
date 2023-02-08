import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [cosFi, setCosFi] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  const [activePower, setActivePower] = useState(0);
  const [power, setPower] = useState(0);
  const [reactivePower, setReactivePower] = useState(0);

  const calculatePower = () => {
    setPower(1.73205080757 * voltage * current);
    setActivePower(voltage * current * cosFi * 1.73205080756887);
    setReactivePower(
      voltage * current * Math.sin(Math.acos(cosFi)) * 1.73205080757
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calculadora para cargas trifásicas balanceadas
      </Text>
      <Text style={styles.text}>Voltaje de alimentación:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setVoltage(Number(text))}
        />
        <Text style={styles.text}>Volts</Text>
      </View>
      <Text style={styles.text}>Corriente de fase:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="NUMERIC"
          onChangeText={(text) => setCurrent(Number(text))}
        />
        <Text style={styles.text}>Amperes</Text>
      </View>
      <Text style={styles.text}>Coseno Phi:</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        onChangeText={(text) => setCosFi(Number(text))}
      />
      <Text style={styles.text}>Eficiencia:</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        onChangeText={(text) => setEfficiency(Number(text))}
      />

      <TouchableOpacity style={styles.button} onPress={calculatePower}>
        <Text style={styles.buttonText}>Calcular potencias</Text>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        <Text>RESULTADO:</Text>
        <Text style={styles.result}>
          Potencia aparente: {power.toFixed(2)} VA
        </Text>
        <Text style={styles.result}>
          Potencia activa: {activePower.toFixed(2)} W
        </Text>
        <Text style={styles.result}>
          Potencia reactiva: {reactivePower.toFixed(2)} VAr
        </Text>
        <Text style={styles.result}>
          Potencia útil: {(activePower * efficiency).toFixed(2)} W
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "grey",
    fontSize: 16,
    color: "white",
    minWidth: 50,
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  result: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  button: {
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
