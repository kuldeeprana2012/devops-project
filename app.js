const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello DevOps from Jenkins + Docker + Git + RHEL 8!'));

app.listen(port, () => console.log(`App running on port ${port}`));

