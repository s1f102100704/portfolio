// backend/index.ts
import { Hono } from "hono";
// import projects from './projects.json'

const app = new Hono();

// app.get("/api/projects", (c) => c.json(projects));

export default app;
