import React, { useState, useContext } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import DataContext from "../components/DataContext";

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
        <Button onPress={() => setShow(true)} title="Scegli un'altra data" />
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
