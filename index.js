import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// saúde
app.get("/health", (req, res) => {
  res.json({ ok: true, service: "BRILHAH IA API" });
});

// raiz
app.get("/", (req, res) => {
  res.send("BRILHAH IA SHOP API ativa ✅");
});

// (opcional) Stripe ping para testar que a key existe (não faz cobrança)
app.get("/stripe/test", (req, res) => {
  const hasPub = !!process.env.TRIPE_PUBLISHABLE_KEY || !!process.env.STRIPE_PUBLISHABLE_KEY;
  const hasSec = !!process.env.STRIPE_SECRET_KEY;
  res.json({
    stripe_publishable_present: hasPub,
    stripe_secret_present: hasSec
  });
});

const PORT = process.env.PORT || 10000; // Render usa esta env
app.listen(PORT, () => {
  console.log(`API on http://0.0.0.0:${PORT}`);
});
