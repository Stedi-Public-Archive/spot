import { config } from "@stediinc/spot";

class NotConfigClass {}

@config({
  paramSerializationStrategy: {
    query: {
      array: "comma"
    }
  }
})
class ConfigClass {}

@config({
  paramSerializationStrategy: {}
})
class MinimalConfigClass {}
