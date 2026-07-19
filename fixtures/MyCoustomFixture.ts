import { test as baseTest } from "@playwright/test"


type MyFixtures ={

    fixture1: any

}

type MyWorkerFixture = {
   workerFixture1 : any;

}

export const test = baseTest.extend  <MyFixtures, MyWorkerFixture>
    ({

        fixture1:async({}, use ) => {
            
            const fixture1 = "I am fixture1"
            console.log("Before part of fixture 1")
            await use(fixture1)
            console.log("after part of fixture1")

        },

        workerFixture1 : [async({}, use ) =>{
            
            const workerFixture1 = "I am worker fixture1"
            console.log("Before part of worker fixture 1")
            await use(workerFixture1)
            console.log("after part of worker fixture1")

        },{scope:"worker"}]



    })