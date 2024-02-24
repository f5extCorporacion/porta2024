import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { getDatabase, provideDatabase } from '@angular/fire/database';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions(),withComponentInputBinding()),
 importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"porta2024","appId":"1:240866843427:web:4b8bb880ec5e89de4cca96","storageBucket":"porta2024.appspot.com","apiKey":"AIzaSyBAageXj66-H7L5fbgxfj5ORAD0b9SITN8","authDomain":"porta2024.firebaseapp.com","messagingSenderId":"240866843427"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"porta2024","appId":"1:240866843427:web:4b8bb880ec5e89de4cca96","storageBucket":"porta2024.appspot.com","apiKey":"AIzaSyBAageXj66-H7L5fbgxfj5ORAD0b9SITN8","authDomain":"porta2024.firebaseapp.com","messagingSenderId":"240866843427"}))), importProvidersFrom(provideDatabase(() => getDatabase()))
  ]
};
