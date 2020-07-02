import {
  api,
  body,
  endpoint,
  headers,
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
class EndpointWithResponseHeaders {
  @request
  request(@body body: { name: String }) {}

  @response({ status: 201 })
  successResponse(
    @headers
    headers: {
      Location: String;
      Link?: String;
    },
    @body body: { id: String; name: String }
  ) {}
}
