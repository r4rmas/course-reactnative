import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  static instance = new Storage();

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  };

  get = async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      return false;
    }
  };

  getAll = async keys => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error) {
      return false;
    }
  };

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      return false;
    }
  };

  remove = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  };
}

export default Storage;
