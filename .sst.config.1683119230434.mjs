import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// sst.config.ts
import * as s3Deploy from "aws-cdk-lib/aws-s3-deployment";
import * as ssm from "aws-cdk-lib/aws-ssm";
import { Bucket } from "sst/constructs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "node:path";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var sst_config_default = {
  config(_input) {
    return {
      name: "changelog",
      region: "eu-west-1"
    };
  },
  stacks(app) {
    app.stack(/* @__PURE__ */ __name(function Site({ stack }) {
      const bucket = new Bucket(stack, "changelog-bucket", {
        cdk: {
          bucket: {
            websiteIndexDocument: "index.html",
            publicReadAccess: true
          }
        }
      });
      new s3Deploy.BucketDeployment(stack, "deploy-changelog", {
        sources: [s3Deploy.Source.asset(path.join(__dirname, "dist"))],
        destinationBucket: bucket.cdk.bucket,
        destinationKeyPrefix: "changelog"
      });
      new ssm.StringParameter(this, "changelogUrlParameter", {
        parameterName: `/${stack.stage}/baselime/changelog/s3/url`,
        stringValue: bucket.cdk.bucket.bucketWebsiteDomainName,
        description: "The url of the command queue in the vega service",
        tier: ssm.ParameterTier.STANDARD,
        allowedPattern: ".*"
      });
      stack.addOutputs({
        url: `${bucket.cdk.bucket.bucketWebsiteUrl}/changelog/` || "http://localhost:3000"
      });
    }, "Site"));
  }
};
export {
  sst_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3N0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBTU1RDb25maWcgfSBmcm9tIFwic3N0XCI7XG5pbXBvcnQgKiBhcyBzM0RlcGxveSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXMzLWRlcGxveW1lbnRcIjtcbmltcG9ydCAqIGFzIHNzbSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXNzbVwiO1xuXG5pbXBvcnQgeyBCdWNrZXQgfSBmcm9tIFwic3N0L2NvbnN0cnVjdHNcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwidXJsXCI7XG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSBcInBhdGhcIjtcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoX19maWxlbmFtZSk7XG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbmZpZyhfaW5wdXQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZTogXCJjaGFuZ2Vsb2dcIixcblx0XHRcdHJlZ2lvbjogXCJldS13ZXN0LTFcIixcblx0XHR9O1xuXHR9LFxuXHRzdGFja3MoYXBwKSB7XG5cdFx0YXBwLnN0YWNrKGZ1bmN0aW9uIFNpdGUoeyBzdGFjayB9KSB7XG5cdFx0XHRjb25zdCBidWNrZXQgPSBuZXcgQnVja2V0KHN0YWNrLCBcImNoYW5nZWxvZy1idWNrZXRcIiwge1xuXHRcdFx0XHRjZGs6IHtcblx0XHRcdFx0XHRidWNrZXQ6IHtcblx0XHRcdFx0XHRcdHdlYnNpdGVJbmRleERvY3VtZW50OiBcImluZGV4Lmh0bWxcIixcblx0XHRcdFx0XHRcdHB1YmxpY1JlYWRBY2Nlc3M6IHRydWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXG5cdFx0XHRuZXcgczNEZXBsb3kuQnVja2V0RGVwbG95bWVudChzdGFjaywgXCJkZXBsb3ktY2hhbmdlbG9nXCIsIHtcblx0XHRcdFx0c291cmNlczogW3MzRGVwbG95LlNvdXJjZS5hc3NldChwYXRoLmpvaW4oX19kaXJuYW1lLCBcImRpc3RcIikpXSxcblx0XHRcdFx0ZGVzdGluYXRpb25CdWNrZXQ6IGJ1Y2tldC5jZGsuYnVja2V0LFxuXHRcdFx0XHRkZXN0aW5hdGlvbktleVByZWZpeDogXCJjaGFuZ2Vsb2dcIixcblx0XHRcdH0pO1xuXG5cdFx0XHRuZXcgc3NtLlN0cmluZ1BhcmFtZXRlcih0aGlzLCBcImNoYW5nZWxvZ1VybFBhcmFtZXRlclwiLCB7XG5cdFx0XHRcdHBhcmFtZXRlck5hbWU6IGAvJHtzdGFjay5zdGFnZX0vYmFzZWxpbWUvY2hhbmdlbG9nL3MzL3VybGAsXG5cdFx0XHRcdHN0cmluZ1ZhbHVlOiBidWNrZXQuY2RrLmJ1Y2tldC5idWNrZXRXZWJzaXRlRG9tYWluTmFtZSxcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiVGhlIHVybCBvZiB0aGUgY29tbWFuZCBxdWV1ZSBpbiB0aGUgdmVnYSBzZXJ2aWNlXCIsXG5cdFx0XHRcdHRpZXI6IHNzbS5QYXJhbWV0ZXJUaWVyLlNUQU5EQVJELFxuXHRcdFx0XHRhbGxvd2VkUGF0dGVybjogXCIuKlwiLFxuXHRcdFx0fSk7XG5cblx0XHRcdHN0YWNrLmFkZE91dHB1dHMoe1xuXHRcdFx0XHR1cmw6IGAke2J1Y2tldC5jZGsuYnVja2V0LmJ1Y2tldFdlYnNpdGVVcmx9L2NoYW5nZWxvZy9gIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcbn0gc2F0aXNmaWVzIFNTVENvbmZpZztcblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFDQSxZQUFZLGNBQWM7QUFDMUIsWUFBWSxTQUFTO0FBRXJCLFNBQVMsY0FBYztBQUN2QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLGVBQWU7QUFJeEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sYUFBYSxjQUFjLFlBQVksR0FBRztBQUNoRCxJQUFNLFlBQVksUUFBUSxVQUFVO0FBRXBDLElBQU8scUJBQVE7QUFBQSxFQUNkLE9BQU8sUUFBUTtBQUNkLFdBQU87QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNUO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTyxLQUFLO0FBQ1gsUUFBSSxNQUFNLGdDQUFTLEtBQUssRUFBRSxNQUFNLEdBQUc7QUFDbEMsWUFBTSxTQUFTLElBQUksT0FBTyxPQUFPLG9CQUFvQjtBQUFBLFFBQ3BELEtBQUs7QUFBQSxVQUNKLFFBQVE7QUFBQSxZQUNQLHNCQUFzQjtBQUFBLFlBQ3RCLGtCQUFrQjtBQUFBLFVBQ25CO0FBQUEsUUFDRDtBQUFBLE1BQ0QsQ0FBQztBQUVELFVBQWEsMEJBQWlCLE9BQU8sb0JBQW9CO0FBQUEsUUFDeEQsU0FBUyxDQUFVLGdCQUFPLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFBQSxRQUM3RCxtQkFBbUIsT0FBTyxJQUFJO0FBQUEsUUFDOUIsc0JBQXNCO0FBQUEsTUFDdkIsQ0FBQztBQUVELFVBQVEsb0JBQWdCLE1BQU0seUJBQXlCO0FBQUEsUUFDdEQsZUFBZSxJQUFJLE1BQU07QUFBQSxRQUN6QixhQUFhLE9BQU8sSUFBSSxPQUFPO0FBQUEsUUFDL0IsYUFBYTtBQUFBLFFBQ2IsTUFBVSxrQkFBYztBQUFBLFFBQ3hCLGdCQUFnQjtBQUFBLE1BQ2pCLENBQUM7QUFFRCxZQUFNLFdBQVc7QUFBQSxRQUNoQixLQUFLLEdBQUcsT0FBTyxJQUFJLE9BQU8saUNBQWlDO0FBQUEsTUFDNUQsQ0FBQztBQUFBLElBQ0YsR0EzQlUsT0EyQlQ7QUFBQSxFQUNGO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
