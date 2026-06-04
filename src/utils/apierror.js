class ApiError extends Error {
    constructor(message = "Something went wrong", StatusCode, error = [], stack = "") {
        super(message);
        this.statusCode = StatusCode;
        this.data = null;
        this.message = message
        this.error = this.error;
        this.stack = stack;
    }
}

export default ApiError;