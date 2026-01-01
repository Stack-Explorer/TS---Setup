import type { NextFunction } from "express"

async function asyncHandler(requestHandler: Function) { // Async Handler is function accepting requestHandler as function an dretuening asyc function (Which promises are by their side)
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }