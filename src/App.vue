<template>
<ion-app>

    <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>   
          <ion-icon name="grid" slot="start"></ion-icon>
            <ion-label>Dashboard</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="cube" slot="start"></ion-icon>
          <ion-label>Products & Services</ion-label>
          </ion-item>

      <ion-item-divider>
      <ion-label>
        Income
      </ion-label>
    </ion-item-divider>
        <ion-item @click="$router.push('/about')">
          <ion-icon name="cart" slot="start"></ion-icon>
          <ion-label>Cash Sales</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="document" slot="start"></ion-icon>
          <ion-label>Invoices</ion-label>
        </ion-item>

         <ion-item>
          <ion-icon name="reader-outline" slot="start"></ion-icon>
          <ion-label>Quotes</ion-label>
        </ion-item>

        <ion-item>
          <ion-icon name="reader-outline" slot="start"></ion-icon>
          <ion-label>Customers</ion-label>
        </ion-item>
      
       <ion-item>
          <ion-icon name="reader-outline" slot="start"></ion-icon>
          <ion-label>Orther Income</ion-label>
        </ion-item>


      <ion-item-divider>
      <ion-label>
        Expenses
      </ion-label>
    </ion-item-divider>
        <ion-item @click="$router.push('/about')">
          <ion-icon name="reader-outline" slot="start"></ion-icon>
          <ion-label>Cash Expenses</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="add" slot="start"></ion-icon>
          <ion-label>Bills</ion-label>
        </ion-item>

         <ion-item>
          <ion-icon ios="heart-outline" md="heart-sharp" slot="start"></ion-icon>
          <ion-label>Supliers</ion-label>
        </ion-item>

      </ion-list>
    </ion-content>
  </ion-menu>
<div class="ion-page" id="main">
  <ion-header>
    <ion-toolbar color="primary">
<ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
      <ion-title>App Name</ion-title>
    </ion-toolbar>
  </ion-header>

 
<ion-content>
  <router-view main />
</ion-content>
</div>
</ion-app>
</template>


