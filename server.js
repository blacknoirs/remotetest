const express = require('express');
const app = express();
app.use(express.json());

let currentCommand = { script: "" };

app.get('/commands.json', (req, res) => {
    res.json(currentCommand);
});

app.post('/execute', (req, res) => {
    currentCommand.script = req.body.script || "";
    console.log("📥 New script received!");
    res.json({ success: true });
});

app.listen(3000, () => console.log("✅ API is running!"));
