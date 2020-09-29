import middy from 'middy'
import { jsonBodyParser, httpEventNormalizer } from 'middy/middlewares'
import { APIGatewayProxyResult } from 'aws-lambda'

/**
 * Function that has all the business logic
 *
 * @returns Promise<APIGatewayProxyResult>
 */
async function register (): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!'
    })
  }
}

/**
 * Wrapping register function with middlewares using middy.
 *
 * @see https://github.com/middyjs/middy
 */
const handler = middy(register)
  .use(jsonBodyParser())
  .use(httpEventNormalizer())

export {
  handler,
  register
}
