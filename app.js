const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('helo this is kuldeep rna and resurmt he onitering for this '));

app.listen(port, () => console.log(`App running on port ${port}`));

