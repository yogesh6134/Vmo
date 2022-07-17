import {
  signInWithCredential,
  signOut,
  PhoneAuthProvider,
} from "firebase/auth";
import { auth } from "@libraries/firebase";
import { logUserIdentify } from "@utils/helper";

export const logoutFromFirebase = async (user) => {
  if (!user) {
    return;
  }
  try {
    await signOut(auth);
    logUserIdentify(null);
    return "success";
  } catch (error) {
    console.log(error);
    return "failed";
  }
};

export const sendOTPToPhoneNumber = async (phoneNumber, recaptchaVerifier) => {
  try {
    const phoneProvider = new PhoneAuthProvider(auth);
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      recaptchaVerifier.current
    );
    return verificationId;
  } catch (err) {
    console.log(err);
    alert(`Error: ${err.message}`);
    return "failed";
  }
};

export const signInWithPhoneNumber = async (
  verificationId,
  verificationCode
) => {
  try {
    const credential = PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    await signInWithCredential(auth, credential);

    return "success";
  } catch (err) {
    return err.message;
  }
};
