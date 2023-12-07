import { rest } from "msw";
import { dummyData } from "./data";

export const handlers = [
  rest.get("/api/stocks", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyData));
  }),
];
