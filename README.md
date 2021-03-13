Learning NodeJS and its Workflows.

## Http module of core NodeJS

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

### API ENDPOINTS a.k.a Route Structure

- /api/v1/bootcamps
- /api/v1/courses
- /api/v1/reviews
- /api/v1/auth
- /api/v1/users

where v1 = version1

### Note:

we are keeping versions of API endpoints because suppose we want to update our api then we can make v2 -version2 without affecting v1 and if v2 is our new api then we can say v1 is deprecated use V2 onwards.

### Basic Routes

```js
const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const app = express();

// For getting all bootcamps
app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all Bootcamps" });
});

// For getting single bootcamp with its id
app.get("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show the bootcamp with ${req.params.id}` });
});

// For adding a new bootcamp
app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: `Add a new bootcamp.` });
});

// For updating bootcamp with id
app.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Update the bootcamp with Id ${req.params.id}`,
    });
});

// For deleting bootcamp with id

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete the bootcamp with ${req.params.id}` });
});

const port = 5000 || process.env.PORT;

app.listen(port, () =>
  console.log(
    `Server up and running in ${process.env.NODE_ENV} mode at port ${port}.`
  )
);
```

### Note : Difference between PUT and PATCH
- The main difference between the PUT and PATCH method is that the PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource.

- In short - put replaces original content and patch modifies the original content.
