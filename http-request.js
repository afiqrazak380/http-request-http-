const http = require("http");

const option = {
  hostname: "roadmap.sh",
  port: 80,
  path: "/path",
  method: "GET",
};

const req = http.request(option, (res) => {
  let data = "";

  // A chunk of data has been received
  res.on("data", (chunk) => {
    data += chunk;
  });

  // The whole response has been received
  res.on("end", () => {
    console.log(data);
  });
});

// Handle errors
req.on("error", (error) => {
  console.log(`Error: ${error.message}`);
});

// End the request
req.end();
