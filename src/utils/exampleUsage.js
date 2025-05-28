// Example usage
import axios from "./axios";

axios
  .get("/users")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
