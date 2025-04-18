import fastify from 'fastify'
import { appRoutes } from './http/routes'

export const app = fastify()

app.register(appRoutes)

// app.register(appRoutes)

// app.setErrorHandler((error, _, reply) => {
//   if (error instanceof ZodError) {
//     reply
//       .status(400)
//       .send({ message: 'Validation error.', issues: error.format() })
//   }

//   if (env.NODE_ENV !== 'production') {
//     console.error(error)
//   } else {
//     // TODO: Here we should log an external tools like DataDog/NewRelic/Sentry
//   }

//   return reply.status(500).send({ message: 'Internal server error.' })
// })
