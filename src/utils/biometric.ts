import * as LocalAuthentication from 'expo-local-authentication';

export class BiometricAuth {
  static async isBiometricAvailable(): Promise<boolean> {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const enrolled = await LocalAuthentication.isEnrolledAsync();
    return compatible && enrolled;
  }

  static async authenticate(): Promise<boolean> {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to confirm transfer',
        fallbackLabel: 'Use passcode',
        cancelLabel: 'Cancel',
      });
      return result.success;
    } catch (error) {
      console.error('Biometric authentication error:', error);
      return false;
    }
  }
} 