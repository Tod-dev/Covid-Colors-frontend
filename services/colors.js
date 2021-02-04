import config from "../data/config";

export const getZoneByColor = (name) => {
  const string = config.baseApiUrl + "/colors" + "/" + name;
  return fetch(string);
};
