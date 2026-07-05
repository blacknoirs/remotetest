const express = require('express');
const app = express();
app.use(express.json());

let script = "";

app.get('/commands', (req, res) => {
    res.json({script: script});
});

app.post('/execute', (req, res) => {
    script = req.body.script || "";
    res.json({ok: true});
});

app.listen(3000, () => console.log("running"));