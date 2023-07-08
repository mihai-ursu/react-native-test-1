import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import EventItem from "src/components/EventItem/EventItem";

interface Event {
  key: string;
  value: string;
}

export default function App() {
  const [event, setEvent] = useState("");
  const [eventList, setEventList] = useState<Event[]>([]);

  const eventInputHandler = (text: string) => {
    setEvent(text);
  };

  const addEventHandler = () => {
    if (event.length === 0) return;

    setEventList((currentEventList) => [
      ...currentEventList,
      { key: Math.random().toString(), value: event },
    ]);

    setEvent("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput
          placeholder="Event"
          style={styles.input}
          value={event}
          onChangeText={eventInputHandler}
        />
        <Button title="Add Event" onPress={addEventHandler} />
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={eventList}
          renderItem={(itemData) => (
            <EventItem eventText={itemData.item.value} />
          )}
          keyExtractor={(item) => item.key}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },
  input: {
    width: "64%",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    padding: 10,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  bottomContainer: {
    flex: 3,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
