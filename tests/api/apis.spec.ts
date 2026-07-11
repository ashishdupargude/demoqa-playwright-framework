import { expect, test } from "@playwright/test"

test('FirstApi', async ({ request }) => {

    const tagResponse = await request.get('https://conduit-api.bondaracademy.com/api/tags')

    const tagResponseJSON = await tagResponse.json() //convert into JSON for better for reading

    console.log(tagResponseJSON)

    //await expect(tagResponse.status()).toEqual(200)
    expect(tagResponse.status()).toBe(200)  //like stricker equality

    //Verify that the respon cantain the tags key
    expect(tagResponseJSON).toHaveProperty('tags')

    //check that tag array is not empty
    expect(tagResponseJSON.tags.length).toBeGreaterThan(0)

    //check that a specific tag exists eg  gitHub

    expect(tagResponseJSON.tags).toContain('GitHub')

    //check very first tag of the array data
    expect(tagResponseJSON.tags[0]).toBe('Test')

})

