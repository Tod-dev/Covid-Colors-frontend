import config from "../data/config";

export const getRegions = () => {
  const string = config.baseApiUrl + "/regions";
  // console.log("url: " + string);
  return fetch(string);
};

export const getRegion = (id) => {
  const string = config.baseApiUrl + "/regions/" + id;
  // console.log("url: " + string);
  return fetch(string);
};
