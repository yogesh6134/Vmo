import * as ImagePicker from "expo-image-picker";
import uuid from "react-native-uuid";

import { storage, storageRef, uploadBytes, getDownloadURL } from "../firebase";

export const showImagePicker = async () => {
  const permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access gallery is required!");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.2,
    presentationStyle: 0,
  });

  if (!result.cancelled) {
    return result.uri;
  }
};

export const openCamera = async () => {
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    quality: 0.2,
    presentationStyle: 0,
  });

  if (!result.cancelled) {
    return result.uri;
  }
};

export const getPictureBlob = (imageUri) => {
  if (!imageUri) {
    return;
  }

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      alert("Some error occured!");
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", imageUri, true);
    xhr.send(null);
  });
};

export const uploadImageToBucket = async (imageUri) => {
  if (!imageUri) {
    return;
  }

  let blob;
  try {
    blob = await getPictureBlob(imageUri);

    const imgRef = storageRef(storage, uuid.v4());
    const snapshot = await uploadBytes(imgRef, blob);

    return await getDownloadURL(imgRef);
  } catch (e) {
    console.log(e);
    alert("Unable to upload profile image!");
  } finally {
    blob.close();
  }
};
