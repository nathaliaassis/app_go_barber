import axios from 'axios';

//localhost funciona normalmente emulando no ios, mas para emular no android
//devemos colocar no terminal: adb reverse tcp:3333 tcp:3333, ou então utilizamos 10.0.2.2
//Se formor utilizar dispositivo (android) físico: IP da máquina
const api = axios.create({
  baseURL: 'http://192.168.0.14:3333',
});

export default api;
