import { ConnectionOptions } from "mongoose";

const {
	MONGO_USERNAME = "admin",
	MONGO_PASSWORD = "secret",
	MONGO_HOST = "localhost",
	MONG_PORT = 27017,
	MONGO_DB = "auth"
} = process.env;

export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${encodeURIComponent(
	MONGO_PASSWORD
)}@${MONGO_HOST}:${MONG_PORT}/${MONGO_DB}`;
export const MONGO_OPTIONS: ConnectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};
