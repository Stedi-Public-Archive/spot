import { api, endpoint } from "@stediinc/spot";

@api({ name: "contract" })
class Contract {}

@endpoint({
  method: "GET",
  path: "/users"
})
class Endpoint {}
