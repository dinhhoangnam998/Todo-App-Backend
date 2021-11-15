const router = require("express").Router();
const { connection } = require("../db");

router.get("/todos", async (req, res) => {
  const todos = await (await connection).db().collection("Todos").find({}).toArray();
  return res.json({ todos });
});

router.post("/todos", async (req, res) => {
  const newTodo = req.body;
  const result = await (await connection).db().collection("Todos").insertOne(newTodo);
  return res.json(result);
});

router.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  console.log("🚧 --> router.delete --> id", id);
  const result = await (
    await connection
  )
    .db()
    .collection("Todos")
    .deleteOne({ id: Number(id) });
  return res.json(result);
});

module.exports = router;
