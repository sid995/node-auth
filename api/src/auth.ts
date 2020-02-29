import { Request } from "express";

export const logIn = (req: Request, userId: String) => {
	req.session!.userId = userId;
};

export const isLoggedIn = (req: Request) => !!req.session!.userId;
