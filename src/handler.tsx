export async function handleRequest(request: Request) {
  return new Response("Hello, Worker!", {
    headers: {
      "content-type": "text/plain"
    }
  });
}
