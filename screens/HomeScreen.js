import React from "react";
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { Tweet } from "../components/Tweet";
import TweetImage from "../components/TweetImage";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={StyleSheet.container}>
          <View style={styles.headerContainer}>
            <Header />
          </View>

          <TweetImage />
          <Tweet />
          <Tweet />
          <TweetImage />
          <TweetImage />
          <Tweet />
          <Tweet />
          <TweetImage />
          <TweetImage />
          <Tweet />
          <Tweet />
          <TweetImage />
          <TweetImage />
          <Tweet />
          <Tweet />
          <TweetImage />
          <TweetImage />
          <Tweet />
          <Tweet />
          <TweetImage />
          <Tweet />
          <Tweet />
          <TweetImage />
          <Tweet />
          <Tweet />
          <TweetImage />
          <Tweet />
          <Tweet />
          <TweetImage />
          <Tweet />
          <Tweet />
          <TweetImage />
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Menu />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    height: 70,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    backgroundColor: "#080808",
  },
});

export default HomeScreen;
