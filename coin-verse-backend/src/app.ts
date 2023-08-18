import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routers from './app/routes'

const app: Application = express()

// cors middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

// perse middleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// home route
app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({
    status: true,
    message: 'Welcome to express typescript starter',
  })
})

// routes
app.use('/api/v1', routers)

// global error handler
app.use(globalErrorHandler)

// not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: false,
    message: req.originalUrl + ' Url not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: req.originalUrl + ' Url not found',
      },
    ],
  })

  next()
})

export default app
