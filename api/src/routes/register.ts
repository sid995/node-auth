import { guest } from "./../middleware/auth";
import { logIn } from "./../auth";
import { User } from "../models/user";
import { Router } from "express";
import { registerSchema } from "../validation";

const router = Router();

router.post("/register", guest, async (req, res) => {
	await registerSchema.validateAsync(req.body, { abortEarly: false });

	const { email, name, password } = req.body;

	const found = await User.exists({ email });

	if (found) {
		throw new Error("Invalid email or password");
	}

	const user = await User.create({
		email,
		name,
		password
	});

	logIn(req, user.id);

	res.json({ message: "OK" });
});

export default router;
