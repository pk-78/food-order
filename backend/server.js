import app from "./app.js";
import cors from "cors";

// Allow all origins (not recommended for production)
app.use(cors());

// Or, allow specific origin
app.use(
  cors({
    origin: "https://food-order-pk78.netlify.app",
  })
);

const PORT = 3200;
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
