// src/stores/ex-store.ts

import { defineStore } from 'pinia';
import { db } from 'src/boot/firebase';
import { addDoc, collection, DocumentData, getDocs } from 'firebase/firestore';

interface OrderData {
  orderNumber: string;
  email: string;
}

export const useMyStore = defineStore({
  id: 'myStore',
  state: () => ({}),
  actions: {
    async addOrderData(payload: OrderData) {
      try {
        await addDoc(collection(db, 'orders'), payload);
        console.log("Sipariş bilgileri Firestore'a eklendi:", payload);
      } catch (error) {
        console.error('Sipariş bilgileri eklenirken hata oluştu:', error);
      }
    },

    async getData(): Promise<DocumentData[]> {
      try {
        const querySnapshot = await getDocs(collection(db, 'orders'));
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log('Data retrieved successfully: ', data);
        return data;
      } catch (error) {
        console.error('Error getting documents: ', error);
        return [];
      }
    },
  },
});
