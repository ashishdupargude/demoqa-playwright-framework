import {expect,test} from "@playwright/test"

test('FirstApi', async ({ request }) => {

await request.get('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0')


})