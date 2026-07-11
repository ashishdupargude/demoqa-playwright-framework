import { test, expect, request } from '@playwright/test';

test('GET User Details', async () => {

  const apiContext = await request.newContext();

  const response = await apiContext.get('https://reqres.in/api/users/2');

  console.log("Status:", response.status());
  console.log("Response:", await response.text());

});