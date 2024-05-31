
const jsonServer = require('json-server')

const ToDoServer = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT


ToDoServer.use(middleware)
ToDoServer.use(route)
ToDoServer.listen(PORT,()=>{
    console.log(`ToDo App Server Started at port ${PORT} and waiting for client request`);
})
