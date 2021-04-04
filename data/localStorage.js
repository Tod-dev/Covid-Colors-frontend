import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../data/config";
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const getDataBool = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null && (value === "true" || value === "false")) {
      // value previously stored
      if (value === "true") {
        console.log("dentro if");
        return true;
      }
      return false;
    } else {
      return true; //! default
    }
  } catch (e) {
    // error reading value
  }
};

export const getDataString = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // error reading value
  }
};

export const getPreferredRegion = async () => {
  const key = config.starredReg;
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return "";
    }
  } catch (e) {
    // error reading value
  }
};

/* MKKV storage
// import { MMKV } from "react-native-mmkv";

export const SetKey = (key, value) => {
  MMKV.set(key, value);
};

export const GetString = (key) => {
  return MMKV.getString(key);
};

export const GetNumber = (key) => {
  return MMKV.getNumber(key);
};

export const GetBoolean = (key) => {
  return MMKV.getBoolean(key);
};

export const DeleteKey = (key) => {
  MMKV.delete(key);
};

export const getAllKeys = () => {
  return MMKV.getAllKeys();
};

export const setObj = (key, obj) => {
  MMKV.set(key, JSON.stringify(obj));
  //const jsonObj = MMKV.getString(obj)
  //const myObject = JSON.parse(jsonUser)
};

*/
