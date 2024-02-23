import {test, expect} from '@playwright/test'
import { DataStore } from '../source/data-store';

const data: DataStore = {
    "id": 10,
    "petId": 198772,
    "quantity": 7,
    "shipDate": "2024-02-23T13:27:23.459Z",
    "status": "approved",
    "complete": true
  }

test('returns pet inventories by status', async({request})=>{
    const inventory = await request.get('/api/v3/store/inventory');
    expect(inventory.status()).toBe(200);
    expect(await inventory.json()).toHaveProperty('approved');
    expect(await inventory.json()).toHaveProperty('placed');
    expect(await inventory.json()).toHaveProperty('delivered');
    console.log(await inventory.json())
});

test('place a new order for a pet', async({request})=>{
    const newOrder = await request.post('/api/v3/store/order',{data});
    expect(newOrder.status()).toBe(200);
    expect(await newOrder.json()).toHaveProperty('status','approved');
});