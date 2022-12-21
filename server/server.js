import "./mongoose/moongose.connect.js";
import express from "express";
import cors from "cors";
import router from "./Routes/routes.js";
const PORT = process.env.PORT || 5000;
const server = express();
server.use(express.json());
server.use(cors());
server.use("/api", router);
server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
