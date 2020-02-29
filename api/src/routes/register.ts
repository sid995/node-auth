import { BadRequest } from "./../errors";
import { guest, catchAsync } from "../middleware";
import { logIn } from "../auth";
import { User } from "../models/user";
import { Router } from "express";
import { registerSchema, validate } from "../validation";

const router = Router();

router.post(
	"/register",
	guest,
	catchAsync(async (req, res) => {
		await validate(registerSchema, req.body);

		const { email, name, password } = req.body;

		const found = await User.exists({ email });

		if (found) {
			throw new BadRequest("Invalid email or password");
		}

		const user = await User.create({
			email,
			name,
			password
		});

		logIn(req, user.id);

		res.json({ message: "OK" });
	})
);

export default router;
