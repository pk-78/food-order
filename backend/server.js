import app from "./app.js";
import cors from "cors";

// Allow all origins (not recommended for production)
// app.use(cors());

// Allow specific origin and handle preflight requests
app.use(
  cors({
    origin: "https://food-order-pk78.netlify.app",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

// Explicitly handle preflight requests
app.options("*", cors());

const PORT = 3200;
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
