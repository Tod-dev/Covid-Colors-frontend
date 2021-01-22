import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import DataContext from "../components/DataContext";
import Colors from "../styles/Colors";
import { convertDateToString } from "../utils";

const DatePicker = () => {
  const { currentDate, setCurrentDate } = useContext(DataContext);
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    const newdate = selectedDate || currentDate;
    setShow(Platform.OS === "ios");
    setCurrentDate(newdate);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <View>
        <TouchableOpacity onPress={() => setShow(true)} style={style.container}>
          <Text style={{ color: Colors.special, ...style.text }}>
            Data: {convertDateToString(currentDate)}
          </Text>
          <Text style={{ color: Colors.primary, ...style.text }}>
            Scegli un'altra data
          </Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={currentDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default DatePicker;

const style = StyleSheet.create({
  text: { fontSize: 17, padding: 2, fontWeight: "bold" },
  container: {
    borderWidth: 4,
    borderColor: Colors.primary,
    borderRadius: 20,
    padding: 10,
  },
});
