// We will be using the request promise module to avoid using callbacks
const req = require('request-promise');

// We will be passing the api routes with status codes or other relevant details here
describe.each([
  ['https://reqres.in/api/users'],
  ['https://jsonplaceholder.typicode.com/albums'],
  ['https://jsonplaceholder.typicode.com/photos'],
  ['https://jsonplaceholder.typicode.com/todos']
])('get all the responses', (route) => {

  // This is the first test which is using the provide api route
  test(`GET for ${ route }` , async () => {
    let opts = {
      method: 'GET',
      uri: route
    }
    let res = await req(opts);
    expect(res.length).toBeGreaterThan(11);
  });

  // This is the first test which is using the provide api route
  test(`POST method for ${ route }`, async () => {
    let opts = {
      method: 'POST',
      uri: route,
      body: {
        some: 'Test data for testing'
      },
      json: true
    }
    let res = await req(opts);
    expect(res.some).toEqual('Test data for testing');
  });
});
