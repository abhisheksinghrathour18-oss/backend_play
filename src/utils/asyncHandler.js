const async = (func) => async(req, res, next) => {
    try {
        await func(req, res, next);
    } catch (err) {
        console.error("Error in async handler:", err);
        res.status(err.code || 500).json({
            success: false,
            message: err.message || "Internal Server Error"
        });
    }
}


/* const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch(err => next(err));
            console.error("Error in async handler:", err);
    }
} */ 