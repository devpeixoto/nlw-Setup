import Fastify from 'fastify'
import cors  from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()
// cors permite que qualquer aplicação consuma os dados do meu backend - Aqui deixo qualquer app consumir.
app.register(cors)
app.register(appRoutes)

//caso preciso dar acesso a aplicações apenas passo o caminho 
// app.register(cors, {
//     origin: ['hhtp://localhost:3333']
// })




app.listen({
    port: 3333,
}).then(() => {
    console.log("running server")
})