import express from "express";
import authenticate from "../middleware/authenticate";
import Game from "../models/Game";
import parseErrors from "../utils/parseErrors";

const router = express.Router();
router.use(authenticate);

router.post("/", (req, res) => {
  Game.create({ ...req.body.game, userId: req.currentUser._id })
    .then(game => res.json({ game }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

router.get("/", (req, res) => {
  Game.find({ userId: req.currentUser._id }).then(games => res.json({ games }));
});


export default router;
