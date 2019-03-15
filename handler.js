module.exports.hello = (event, context, callback) => {
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Hello ...',
        input: event
      })
    }
  
    callback(null, response)
}
