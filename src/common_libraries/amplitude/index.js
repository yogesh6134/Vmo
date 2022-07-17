import Constants from "expo-constants";
import { AMPLITUDE_KEY } from "@env";

let ampInstance;
let identify;

if (Constants.appOwnership !== "expo") {
  const { Amplitude, Identify } = require("@amplitude/react-native");
  identify = new Identify();
  ampInstance = Amplitude.getInstance();
  ampInstance.init(AMPLITUDE_KEY);
}

export { ampInstance, identify };
