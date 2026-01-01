export const DB_NAME = "backend"
export const HttpStatus = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400, // sever copuld not understand request due to incorrect request syntax,
    UNAUTHORIZED: 401, // Needs Authentication
    PAYMENT_REQUIRED: 402, // Paymnet Required
    FORBIDDEN: 403, // Authentiacted but not authorized
    NOT_FOUND: 404, // Requested Resource not found
    INTERNAL_SERVER_ERROR: 500, // Server Crahsed
    SERVICE_UNAVAILABLE: 503 // Server Temperory Closed
}