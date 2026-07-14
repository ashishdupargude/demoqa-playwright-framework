import { expect, request, test } from "@playwright/test"

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

//FirstLogin run login API
//capture the token from the login API response
//use that token while calling the create artical API
test('API - Create, Update and delete article workflow', async ({ request }) => {

    const tokenRespnse = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {

        data: {
            "user": {
                "email": "Panda@gmail.com",
                "password": "Panda@08"
            }
        }
    })
    const tokenRespnseJSON = await tokenRespnse.json()
    //console.log(tokenRespnseJSON)


    //const authtoken = tokenRespnseJSON.user.token

    const { token: authtoken } = tokenRespnseJSON.user  //Destructuring syntax
    console.log(authtoken)

    const newArticleCreate = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {

        data: {
            "article": {
                "title": "asdf2",
                "description": "asdf",
                "body": "asdf",
                "tagList": [
                    "asdf"
                ]
            }
        },
        headers: {
            authorization: `Token ${authtoken}`
        }


    })

    const newArticleRespnseJSON = await newArticleCreate.json()
    console.log(tokenRespnseJSON)
    expect(newArticleCreate.status()).toBe(201)
    expect(newArticleRespnseJSON.article.title).toBe('asdf2')


    const slug = newArticleRespnseJSON.article.slug



    const UpdateArticleCreate = await request.put(`https://conduit-api.bondaracademy.com/api/articles/${slug}`, {

        data: {
            "article": {
                "title": "asdf 12 updated",
                "description": "asdf 12",
                "body": "asdf 12",
                "tagList": [
                    "asdf"
                ],
                "slug": "asdf-123-54760"
            }
        },
        headers: {
            authorization: `Token ${authtoken}`
        }


    })
    const updatedArticlesResponseJSON = await UpdateArticleCreate.json()
    //console.log(articlesResponseJSON)
    expect(UpdateArticleCreate.status()).toBe(200)
    expect(updatedArticlesResponseJSON.article.title).toBe('asdf 12 updated')

    const Newslug = updatedArticlesResponseJSON.article.slug




    const articlesResponse = await request.get('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', {
        headers: {
            authorization: `Token ${authtoken}`
        }
    })

    const articlesResponseJSON = await articlesResponse.json()
    //console.log(articlesResponseJSON)
    expect(articlesResponse.status()).toBe(200)
    expect(articlesResponseJSON.articles[0].title).toBe('asdf 12 updated')



    const deleteArticle = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${Newslug}`, {
        headers: {
            authorization: `Token ${authtoken}`
        }

    })
    //204 no content
    //expect(deleteArticle.status()).toBe(204)

})

