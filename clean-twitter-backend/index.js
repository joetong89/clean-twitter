const express = require("express");
const app = express();

require("./startup/routes")(app);

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`App started! Listening on ${port}...`));
