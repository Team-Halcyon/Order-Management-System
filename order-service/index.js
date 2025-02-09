import express from "express";

const app = express();

import orderRoutes from "./routes/order.route.js";

//import cors from "cors";
//import cookieParser from "cookie-parser";


//middleware
app.use(express.json());
//app.use(cookieParser());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }));

app.use("/order", orderRoutes);

app.listen(4001, () => {
    console.log("Backend server is running")
});


