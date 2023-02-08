import Fastify from 'fastify'
import { PrismaClient } from "@prisma/client"
import cors  from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()
// cors permite que qualquer aplicação consuma os dados do meu backend - Aqui deixo qualquer app consumir.
app.register(cors)

//caso preciso dar acesso a aplicações apenas passo o caminho 
// app.register(cors, {
//     origin: ['hhtp://localhost:3333']
// })


app.get('/', async () => {
    const habist = await prisma.habit.findMany({
        // where: {
        //     title: {
        //         startsWith: 'beber'
        //     }
        // }
    })

    return  habist
})

app.listen({
    port: 3333,
}).then(() => {
    console.log("running server")
})