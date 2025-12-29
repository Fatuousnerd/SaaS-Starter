// const mongoose = ('mongoose');
// const express = require('express');
const router = express.Router();

router.post("", async (req: Request, res) => {
  try {
  } catch (err) {
    console.error("Error..", err);
    res.status(500).json({ error: `Error... ${err}` });
  }
});

module.exports = router;
