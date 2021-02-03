import config from "../data/config";

export const getRegions = () => {
  const string = config.baseApiUrl + "regions";
  // console.log("url: " + string);
  return fetch(string);
};
