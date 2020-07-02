import { api, body, defaultResponse, endpoint, String } from "@stediinc/spot";

@api({ name: "contract" })
class Contract {}

@endpoint({
  method: "GET",
  path: "/users"
})
class Endpoint {
  @defaultResponse
  defaultResponse(@body body: Body) {}
}

interface Body {
  body: String;
}
