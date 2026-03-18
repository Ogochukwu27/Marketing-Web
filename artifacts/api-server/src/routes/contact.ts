import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { contactsTable } from "@workspace/db/schema";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed: " + parsed.error.message });
    return;
  }

  const { name, email, company, message } = parsed.data;

  await db.insert(contactsTable).values({
    name,
    email,
    company: company ?? null,
    message,
  });

  const response = SubmitContactResponse.parse({
    success: true,
    message: "Thanks for reaching out! We'll get back to you shortly.",
  });

  res.json(response);
});

export default router;
