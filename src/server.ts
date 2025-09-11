// src/server.ts
import express, { type Request, type Response } from "express";

const app = express();

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World! 123" });
});

// Export the app (NOT listening here)
export default app;
