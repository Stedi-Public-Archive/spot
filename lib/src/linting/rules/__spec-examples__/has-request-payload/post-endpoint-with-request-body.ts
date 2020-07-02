import {
  api,
  body,
  endpoint,
  request,
  response,
  String
} from "@stediinc/spot";

@api({ name: "contract" })
class Contract {}

@endpoint({
  method: "POST",
  path: "/users"
})
class PostEndpoint {
  @request
  request(
    @body
    body: Body
  ) {}

  @response({ status: 201 })
  successResponse(@body body: Body) {}
}

interface Body {
  body: String;
}
