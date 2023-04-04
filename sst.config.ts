import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "changelog",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site", {
        
      });
      stack.addOutputs({
        url: site.url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
