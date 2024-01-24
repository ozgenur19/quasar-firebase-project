<template>
  <div
    class="q-pa-md example-column-row-wrapping"
    style="font-family: 'Verona-Regular', sans-serif"
  >
    <h6 style="text-align: center; margin-top: -50px">Sipariş Takip</h6>
    <div
      style="
        height: 300px;
        width: 700px;

        margin-bottom: -200px;
        background-color: white;
      "
    >
      <div
        style="
          text-align: left;
          margin-left: 130px;
          margin-top: 30px;
          margin-right: 20px;
        "
      >
        <br />E-posta Adresiniz

        <q-input
          style="height: 20px; width: 100%"
          square
          outlined
          v-model="email"
          placeholder="Mail@site.com"
        ></q-input>
        <br /><br /><br />Sipariş numaranız
        <q-input
          style="height: 20px; width: 500px; margin-top: 0px; width: 100%"
          square
          outlined
          v-model="orderNumber"
          placeholder="668CW73351"
        ></q-input>

        <q-btn
          color="green"
          :disable="!orderNumber"
          label="sorgula"
          style="margin-top: 50px; margin-left: 450px"
          @click="checkOrder"
        />
      </div>
    </div>
  </div>
</template>

<style>
.custom-button {
  transition: color 0.3s;
  text-transform: capitalize;
  font: 13px;
  font-weight: bolder;
  cursor: pointer;
  padding: 15px;
  font-family: 'Verona-Regular', sans-serif;
}
.custom-button:hover {
  color: #cbab60;
}
.q-item {
  font-family: 'Verona-Regular', sans-serif;
}
.q-item:hover {
  text-decoration: underline;
}
.gönder {
  background-color: white;
  color: black;
}
.gönder:hover {
  background-color: black;
  color: white;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 350px;
  font-family: 'Verona-Regular', sans-serif;
}
.col-4 {
  color: white;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.q-link-3 {
  text-decoration: none;
  cursor: pointer;
  font-family: 'Verona-Regular', sans-serif;
}
.q-link-3:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
import { useMyStore } from 'src/stores/example-store';

const email = ref<string>('');
const orderNumber = ref<string>('');
const myStore = useMyStore();

const checkOrder = async () => {
  try {
    const userData = await myStore.getData();

    // Sipariş kontrol işlemleri burada gerçekleştirilecek
    const orderToCheck = orderNumber.value;

    const orderExists = userData.some(
      (user) => user.orderNumber === orderToCheck
    );

    if (!orderExists) {
      console.log('Sipariş bulunamadı:', orderToCheck);

      // Firestore'a sadece sipariş numarası ve e-posta ekleniyor
      const newOrderData = {
        orderNumber: orderToCheck,
        email: email.value,
      };

      await myStore.addOrderData(newOrderData);
    } else {
      console.log('Sipariş bulundu:', orderToCheck);
    }
  } catch (error) {
    console.error('Sipariş kontrol hatası:', error);
  }
};
</script>
