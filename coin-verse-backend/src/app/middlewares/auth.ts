import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import config from '../../config'
import ApiError from '../../errors/ApiErrors'
import { JwtHelpers } from '../../helpers/JwtHelpers'

const auth =
  (...roles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // get a token and check it
      const token = req.cookies.token

      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorize', '')
      }

      // verify user token
      const verifyToken = JwtHelpers.verifyToken(
        token,
        config.jwt_secret as string,
      )

      if (!verifyToken) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorize', '')
      }

      // after verification user are auth for this route?
      if (!roles.includes(verifyToken?.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden', '')
      }

      req.user = verifyToken

      next()
    } catch (error) {
      next(error)
    }
  }

export default auth
