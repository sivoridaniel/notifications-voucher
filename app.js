// Configuración de Firebase (obtenida desde Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyAixCF2Yr_qeGOd-OMBmlSLPf58bO-EyOk",
    authDomain: "voucher-notification.firebaseapp.com",
    projectId: "voucher-notification",
    storageBucket: "voucher-notification.appspot.com",
    messagingSenderId: "747970218549",
    appId: "1:747970218549:web:ce176319d803848d123f7c",
    measurementId: "G-NM0JMWZ815"
};


// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar el servicio de mensajería
const messaging = firebase.messaging();

// Referencia al botón de habilitar notificaciones
const enableNotificationsButton = document.getElementById('enable-notifications');

// Obtener el token directamente con getToken() usando vapidKey
enableNotificationsButton.addEventListener('click', () => {
  messaging.getToken({ vapidKey: 'BHGroePBttxMqEY7kpcS8oxB-H7xEuAQFvAfT9w4os3v7sQ87TN4PxJYCuna_scHYK0h0oGJMa94H_LHIEXNDtY' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('Token FCM del dispositivo:', currentToken);
        // Aquí puedes enviar este token a tu servidor para almacenarlo
      } else {
        console.log('No se pudo obtener el token.');
      }
    })
    .catch((err) => {
      if (err.code === 'messaging/permission-blocked') {
        alert('Permiso para recibir notificaciones ha sido bloqueado. Por favor, habilítalo en la configuración del navegador.');
      } else {
        console.error('Error al obtener el token de FCM:', err);
      }
    });
});

// Manejar notificaciones cuando la página está abierta
messaging.onMessage((payload) => {
  console.log('Notificación recibida:', payload);
  alert(`Notificación: ${payload.notification.title}`);
});