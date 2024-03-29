import React, { useEffect } from "react";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

import Constants from "expo-constants";

const AdBanner = (props) => {
  const bannerSize = props.size;
  const testID = "ca-app-pub-3940256099942544/6300978111";
  const productionId = "ca-app-pub-5618837515872371/9432038202";
  // Is a real device and running in production.
  const adUnitID = Constants.isDevice && !__DEV__ ? productionId : testID;
  /*
  useEffect(() => {
    const setDev = async () => {
      await setTestDeviceIDAsync();
    };
    setDev();
  }, []);
  */
  const bannerError = (e) => {
    console.log(e);
  };

  return (
    <AdMobBanner
      bannerSize={bannerSize}
      adUnitID={adUnitID}
      servePersonalizedAds={false}
      onDidFailToReceiveAdWithError={(e) => bannerError(e)}
    />
  );
};
export default AdBanner;
