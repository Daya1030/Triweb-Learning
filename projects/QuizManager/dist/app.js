"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routers/user"));
const auth_1 = __importDefault(require("./routers/auth"));
const quiz_1 = __importDefault(require("./routers/quiz"));
const exam_1 = __importDefault(require("./routers/exam"));
const report_1 = __importDefault(require("./routers/report"));
const app = (0, express_1.default)();
const connectionString = process.env.connection_string || "";
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Working");
});
app.use("/user", user_1.default);
app.use("/auth", auth_1.default);
app.use("/quiz", quiz_1.default);
app.use("/exam", exam_1.default);
app.use("/report", report_1.default);
app.use((err, req, res, next) => {
    let message;
    let statusCode;
    let data;
    if (!!err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    }
    else {
        message = "Something went wrong please try after sometime!";
        statusCode = 600;
    }
    let resp = { status: "error", message, data: {} };
    if (!!err.data) {
        resp.data = err.data;
    }
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
});
const connect = mongoose_1.default.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connect.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server Connected");
    });
});
