import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EventItem = ({ eventText }) => {
  return (
    <View style={styles.eventItem}>
      <Text>{eventText}</Text>
    </View>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  eventItem: {
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 14,
  },
});
