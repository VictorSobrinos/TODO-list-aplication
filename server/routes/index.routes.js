const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.use('/tasks', (req, res, next) => {
  res.json('All the tasks')
})

module.exports = router;
