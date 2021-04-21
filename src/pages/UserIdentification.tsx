import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";

export function UserIdentification() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emoji}>😃</Text>
            <Text style={styles.title}>How can we call you?</Text>
            <TextInput style={styles.input} placeholder="Type your name" />
            <View style={styles.buttonWrapper}>
              <Button />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 54,
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  buttonWrapper: {
    marginTop: 60,
    width: "90%",
  },
});
