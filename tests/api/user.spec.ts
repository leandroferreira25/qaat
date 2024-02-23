import {test, expect} from '@playwright/test'
import { User } from '../source/user'

const user: User ={
  "id": 10,
  "username": "user1",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1,
}

test.skip('create user', async ({request})=>{
    const newUser = await request.post('/api/v3/user', {user});
    expect(newUser.status()).toBe(200);
});

test('user login', async({request})=>{
    const newLogin = await request.get(`/api/v3/user/login?username=${user.username}&password=${user.password}`);
    expect(newLogin.status()).toBe(200);
    expect(await newLogin.statusText()).toEqual('OK');
    console.log(await newLogin.text())
});

test('user logout', async({request})=>{
    const newLogout = await request.get('/api/v3/user/logout');
    expect(newLogout.status()).toBe(200);
    expect(await newLogout.text()).toEqual('User logged out');
});

test('get user by username', async({request})=>{
    const getUserByUsername = await request.get(`/api/v3/user/${user.username}`);
    expect(getUserByUsername.status()).toBe(200);
});