import { IN_PROD } from "./app";
import { SessionOptions } from "express-session";

const HALF_HOUR = 1000 * 60 * 30;

const {
	SESSION_SECRET = "please keep this secret",
	SESSION_NAME = "sid",
	SESSION_IDLE_TIMEOUT = HALF_HOUR
} = process.env;

export const SESSION_OPTIONS: SessionOptions = {
	secret: SESSION_SECRET,
	name: SESSION_NAME,
	cookie: {
		maxAge: +SESSION_IDLE_TIMEOUT,
		secure: IN_PROD,
		sameSite: true
	},
	rolling: true,
	resave: true,
	saveUninitialized: false
};
