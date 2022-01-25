// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')
fastify.register(require('fastify-formbody'))
// Declare a route
/*fastify.get('/', async (request, reply) => {
  reply.redirect('/public/index.html')
  return { hello: 'world' }
})
 */

fastify.get('/index', async (request, reply) => {
  return { mushuning: 'cow' }
})
fastify.get('*', function (req, reply) {
  reply.sendFile('index.html')
})


// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}


fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
  decorateReply: false
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'mychina/build/'),
  prefix: '/' , // optional: default '/'
  wildcard:false
})

fastify.register(require('fastify-mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: false,

  url: 'mongodb://148.251.6.252:27018/mushuning'
})



const ObjectID = require("mongodb").ObjectID;

async function listUsers(req, reply) {
  const users = this.mongo.db.collection("users");
  const result = await users.find({}).toArray();
  var result2 = '<html><body>';
  var comment = '';
  console.log(result);
  for (comment of result) {
    result2+=comment['Name'] +comment['Email'] + comment['Subject'] + comment['Message'] + '<br/><br/>'
  }
  reply.send(result2);
}
async function addUser(req, reply) {
  const users = this.mongo.db.collection("users");
  console.log(req.body);
  const { Name, Email, Subject, Message } = req.body;
  const data = { Name, Email, Subject, Message  };
  console.log(data);
  const result = await users.insertOne(data);
  reply.redirect('/')
  reply.code(201).send(result.ops);
}


fastify.get("/comments", listUsers);
fastify.post("/comments", addUser);


fastify.listen(3000, err => {
  if (err) throw err
})



start()
