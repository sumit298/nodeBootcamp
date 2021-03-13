Learning all about Node Js and its workflows.

#Http modules

```js
// What is http
// => hyper text transfer protocol
// => Communication btween web servers and clients
// => HTTP Requests and responses
// => includes headers and body

const http = require("http");

// Hard coded Json Values
const pokemonAndFinalEvolutions = [
  {
    pokemon: "Bulbasaur",
    evolution: "Venasuar",
  },
  {
    pokemon: "Squirtle",
    evolution: "Blastoise",
  },
  {
    pokemon: "Charmander",
    evolution: "Charizard",
  },
  {
    pokemon: "Beldum",
    evolution: "Metagross",
  },
  {
    pokemon: "Gible",
    evolution: "Garchomp",
  },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "X-Powered-by": "Node.js",
  });
  let body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(Buffer, body);
    });

  //   Todo Add request method with http
  res.write("<h1>Hello World</h1>");
  console.log(req.headers.authorization);
  console.log(req.headers);
  res.end(JSON.stringify({ success: true, data: pokemonAndFinalEvolutions }));
});

const PORT = 6000 || process.env.port;

server.listen(PORT, () => console.log("Server running on Port 6000"));
```

## Working on Bootcamp.
