//import {test,expect} from '@playwright/test'

import { test } from "../fixtures/MyCoustomFixture"



test("practice Test 1", async ({fixture1, workerFixture1 }) => {

    console.log(fixture1)
    console.log(workerFixture1)

})

test('practice Test 2', async ({ fixture1}) => {
    console.log(fixture1)

})