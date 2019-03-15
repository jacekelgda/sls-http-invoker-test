const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
// above can be extracted

const { expect } = chai
const ServerlessInvoker = require('serverless-http-invoker')
const path = require('path')

describe('test', function () {
  let sls = new ServerlessInvoker(__dirname)

  it('should invoke simple path', function () {
    let response = sls.invoke('GET api/hello')
    return expect(response).to.eventually.have.property('statusCode', 200)
  })

})
