import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prismaClient } from "../prisma";

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    res.status(401).json({
      message: "Not Authorized",
    });
    return;
  }

  const jwtToken = bearerToken.split(" ")[1];

  if (!jwtToken) {
    res.status(401).json({
      message: "Not Authorized",
    });
    return;
  }

  try {
    const userId = jwt.verify(
      jwtToken,
      process.env.JWT_SECRET || "JWTKASECRET"
    ) as string;

    const userFound = prismaClient.users.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userFound) {
      res.status(401).json({
        message: "User does not exist",
      });
      return;
    }

    (req as unknown as { userId: string }).userId = userId;

    next();
  } catch (error) {
    res.status(401).json({
      message: "could not verify the user",
    });
    return;
  }
};
