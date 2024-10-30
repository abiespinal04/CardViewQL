import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const CameraScreen: React.FC = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const cameraRef = useRef<Camera>(null);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  const capturePhoto = React.useCallback(async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto();
      setCapturedPhoto(photo.path);
    }
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          Camera permission is required.
        </Text>
        <Button title="Request Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {device ? (
        <>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
          />
          {capturedPhoto && (
            <Image source={{uri: capturedPhoto}} style={styles.capturedImage} />
          )}
          <Button title="Capture Picture" onPress={capturePhoto} />
        </>
      ) : (
        <Text style={styles.loadingText}>Loading camera...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  permissionText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: 'gray',
  },
  capturedImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default CameraScreen;
