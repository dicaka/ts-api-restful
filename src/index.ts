import express, {
  type Request,
  type Response,
  type NextFunction,
  type Application,
  application,
} from "express";
import "dotenv/config";

const app: Application = express();
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World 2");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
