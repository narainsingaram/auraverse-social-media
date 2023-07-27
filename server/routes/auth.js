const router = express.Router();

//middleware
import { requireSignIn } from "../middlewares/index.js";

//controllers
import { register, login, currentUser } from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignIn, currentUser);

module.exports = router;
