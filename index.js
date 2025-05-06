const express = require("express");
const app = express();
app.use(express.json());
app.get("/api/health", (req, res) => {
  res.send({ status: "ok" });
});
app.post("/api/user", (req, res) => {
  const { name } = req.body;
    if (!name) {
        return res.status(400).send({ error: "Name is required" });
    }

    res.status(201).send({ message: `User ${name} created` });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
module.exports= app;
