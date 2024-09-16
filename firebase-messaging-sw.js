// Importar los scripts de Firebase para el modo "compat"
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Inicializar Firebase en el Service Worker con la configuración de tu proyecto
firebase.initializeApp({
    apiKey: "AIzaSyAixCF2Yr_qeGOd-OMBmlSLPf58bO-EyOk",
    authDomain: "voucher-notification.firebaseapp.com",
    projectId: "voucher-notification",
    storageBucket: "voucher-notification.appspot.com",
    messagingSenderId: "747970218549",
    appId: "1:747970218549:web:ce176319d803848d123f7c",
    measurementId: "G-NM0JMWZ815"
});

// Inicializar el servicio de mensajería en el Service Worker
const messaging = firebase.messaging();

// Manejar mensajes entrantes cuando la página está en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Notificación en segundo plano recibida: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // Mostrar la notificación
  self.registration.showNotification(notificationTitle, notificationOptions);
});