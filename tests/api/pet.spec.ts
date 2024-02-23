import {test, expect} from '@playwright/test'
import { Pets } from '../source/pet-data';

const data: Pets = {
    "id": 10,
    "name": "doggie",
    "category": {
      "id": 1,
      "name": "Dogs"
    },
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  };

const wrongData:Pets = {
    "id": 10,
    "name": "doggie",
    "category": {
      "id": 1,
      "name": "Dogs"
    },
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  };

test('pet can be successfully added to the store', async({request})=>{
    const newPet = await request.post(`/api/v3/pet`, {data});
    expect(newPet.status()).toBe(200);
    expect(newPet.statusText()).toEqual('OK');
    expect (await newPet.json()).toEqual(data);   
});

test('validate the response to an invalid input', async({request})=>{
    const newPet = await request.post('/api/v3/pet', {wrongData});
    expect(newPet.status()).toBe(400);
    expect(newPet.statusText()).toEqual('Bad Request');
});

test('verify that a pet can be successfully found by its ID', async({request})=>{
    const petId= 10; //dogs
    const findPetById = await request.get(`/api/v3/pet/${petId}`);
    expect(findPetById.status()).toBe(200);
    expect(await findPetById.json()).toHaveProperty('name','doggie');
});

test('verify that a pet can be successfully deleted', async({request})=>{
    const petId = 5;
    const deletePetById= await request.delete(`/api/v3/pet/${petId}`);
    expect(deletePetById.status()).toBe(200);
    expect(await deletePetById.text()).toEqual('Pet deleted');
});

test('verify that an error is returned if the id is invalid', async({request})=>{
    const petId = "asdf";
    const deletePetById= await request.delete(`/api/v3/pet/${petId}`);
    expect(deletePetById.status()).toBe(400);
});
