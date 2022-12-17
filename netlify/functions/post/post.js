// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
	  console.log('post.js');
    const subject = event.queryStringParameters
    return {
      statusCode: 200,
      body:'<html><head><title>Test</title>   </head><body><h1>Hello World!!<h1><br /><p>test</p> </body></html>',
      // // more keys you can return:
       headers: ' <title>Woman Refuses To Invite Out-Of-Control Nephew To Her Wedding, Sister Shames Her Online</title>    <meta property="og:locale" content="en_US">    <meta property="og:type" content="article">    <meta property="og:title" content="Woman Refuses To Invite Out-Of-Control Nephew To Her Wedding, Sister Shames Her Online">    <meta property="og:description" content="Throw-This-Away33 on Reddit is undecided on whether she should invite her 9-year-old nephew to her wedding. According to a post she shared on the AITA subreddit, her nephew is out of control, doesn&#039;t listen, and can&#039;t sit still for even a minute.Throw-This-Away33, who is a fashion designer, also nar...">    <meta property="og:url" content="https://beautifulanimalsdaily.netlify.app/.netlify/functions/post/19458">    <meta property="og:site_name" content="We love animals">    <meta property="article:section" content="Interesting">    <meta property="og:image" content="https://static.dailysquared.com/posts/2dae3ed7968ca9ed0b624f14716c6d5c_19458_1200.jpg">    <meta property="og:image:alt" content="Woman Refuses To Invite Out-Of-Control Nephew To Her Wedding, Sister Shames Her Online"> ',
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
