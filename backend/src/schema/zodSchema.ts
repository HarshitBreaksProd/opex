import z from "zod";

export const userSignupSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const userSigninSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const createTradeSchema = z.object({
  asset: z.string(),
  type: z.enum(["buy", "sell"]),
  margin: z.int(),
  leverage: z.int(),
  takeProfit: z.int().optional(),
  stopLoss: z.int().optional(),
});

export const closeTradeSchema = z.object({
  orderId: z.string(),
});
