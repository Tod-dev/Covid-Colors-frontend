import React, { useEffect } from "react";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

import Constants from "expo-constants";

const AdBanner = () => {
  const testID = "ca-app-pub-3940256099942544/6300978111";
  const productionID = "ca-app-pub-5618837515872371/9432038202";
  // Is a real device and running in production.
  const adUnitID = Constants.isDevice && !__DEV__ ? productionId : testID;

  useEffect(() => {
    const setDev = async () => {
      await setTestDeviceIDAsync("EMULATOR");
    };
    setDev();
  }, []);
  const bannerError = (e) => {
    console.log(e);
  };

  return (
    <AdMobBanner
      bannerSize="banner"
      adUnitID={adUnitID}
      servePersonalizedAds={false}
      onDidFailToReceiveAdWithError={(e) => bannerError(e)}
    />
  );
};
export default AdBanner;
