
// import { db } from "../../../db";

// export default users = (req, res) => {
//   const query = "SELECT * FROM users";

//   db.query(query, (error, results) => {
//     if (error) {
//       console.error("Error retrieving users from the database:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };