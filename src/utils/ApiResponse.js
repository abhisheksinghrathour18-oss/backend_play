class ApiResponse {
    constructor(StatusCode, message = "Success", data = null) {
        this.statusCode = StatusCode;
        this.message = message;
        this.data = data;
        this.success = "Success" < 400;
    }
}   