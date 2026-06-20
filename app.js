const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        let tasks = [];

        try {
            tasks = JSON.parse(
                fs.readFileSync("tasks.json")
            );
        } catch {}

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(tasks));

    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});