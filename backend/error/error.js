// class ErrorHandler extends Error{
//     constructor(message, statuscode)
//     {
//         super(message);
//         this.statuscode= statuscode;
//     }
// }

// export const errorMiddleware = ( err, req ,res, next)=>{
//     err.message = err.message || "Internal Server Error";
//     err.statuscode= err.statusCode  ||500;

//     return res.status(err.statusCode).json({
//         success:false,
//         message:err.message,
//     });
// };

// export default ErrorHandler;


export class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statuscode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statuscode = err.statuscode || 500;

    return res.status(err.statuscode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;
