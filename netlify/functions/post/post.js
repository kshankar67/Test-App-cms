// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
	  console.log('post.js');
    const subject = event.queryStringParameters
    return {
      statusCode: 200,
      body:'<html><head><title>Test</title>   </head><body><h1>Hello World!!<h1><br /><p>test</p> </body></html>',
      // // more keys you can return:
	  // headers: ' ',
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
