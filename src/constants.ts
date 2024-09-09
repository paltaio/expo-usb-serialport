import { NativeModules } from 'react-native'

export const {
  CODE_DEVICE_NOT_FOND,
  CODE_DRIVER_NOT_FOND,
  CODE_NOT_ENOUGH_PORTS,
  CODE_PERMISSION_DENIED,
  CODE_OPEN_FAILED,
  CODE_DEVICE_NOT_OPEN,
  CODE_SEND_FAILED,
  CODE_READ_FAILED,
  CODE_DEVICE_NOT_OPEN_OR_CLOSED,
} = NativeModules.UsbSerialportForAndroid.getConstants()

export const Codes = {
  DEVICE_NOT_FOND: CODE_DEVICE_NOT_FOND,
  DRIVER_NOT_FOND: CODE_DRIVER_NOT_FOND,
  NOT_ENOUGH_PORTS: CODE_NOT_ENOUGH_PORTS,
  PERMISSION_DENIED: CODE_PERMISSION_DENIED,
  OPEN_FAILED: CODE_OPEN_FAILED,
  DEVICE_NOT_OPEN: CODE_DEVICE_NOT_OPEN,
  SEND_FAILED: CODE_SEND_FAILED,
  READ_FAILED: CODE_READ_FAILED,
  DEVICE_NOT_OPEN_OR_CLOSED: CODE_DEVICE_NOT_OPEN_OR_CLOSED,
}

export enum Parity {
  None = 0,
  Odd,
  Even,
  Mark,
  Space,
};

export const DataReceivedEvent = 'usbSerialPortDataReceived'
