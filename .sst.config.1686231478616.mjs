import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// sst.config.ts
import * as s3Deploy from "aws-cdk-lib/aws-s3-deployment";
import * as ssm from "aws-cdk-lib/aws-ssm";
import * as s3 from "aws-cdk-lib/aws-s3";
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
            publicReadAccess: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3N0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBTU1RDb25maWcgfSBmcm9tIFwic3N0XCI7XG5pbXBvcnQgKiBhcyBzM0RlcGxveSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXMzLWRlcGxveW1lbnRcIjtcbmltcG9ydCAqIGFzIHNzbSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXNzbVwiO1xuaW1wb3J0ICogYXMgczMgZnJvbSBcImF3cy1jZGstbGliL2F3cy1zM1wiO1xuaW1wb3J0IHsgQnVja2V0IH0gZnJvbSBcInNzdC9jb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcInVybFwiO1xuaW1wb3J0IHsgZGlybmFtZSB9IGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xuaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuXHRjb25maWcoX2lucHV0KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWU6IFwiY2hhbmdlbG9nXCIsXG5cdFx0XHRyZWdpb246IFwiZXUtd2VzdC0xXCIsXG5cdFx0fTtcblx0fSxcblx0c3RhY2tzKGFwcCkge1xuXHRcdGFwcC5zdGFjayhmdW5jdGlvbiBTaXRlKHsgc3RhY2sgfSkge1xuXHRcdFx0Y29uc3QgYnVja2V0ID0gbmV3IEJ1Y2tldChzdGFjaywgXCJjaGFuZ2Vsb2ctYnVja2V0XCIsIHtcblx0XHRcdFx0Y2RrOiB7XG5cdFx0XHRcdFx0YnVja2V0OiB7XG5cdFx0XHRcdFx0XHR3ZWJzaXRlSW5kZXhEb2N1bWVudDogXCJpbmRleC5odG1sXCIsXG5cdFx0XHRcdFx0XHRwdWJsaWNSZWFkQWNjZXNzOiB0cnVlLFxuXHRcdFx0XHRcdFx0YmxvY2tQdWJsaWNBY2Nlc3M6IHMzLkJsb2NrUHVibGljQWNjZXNzLkJMT0NLX0FDTFNcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cblx0XHRcdG5ldyBzM0RlcGxveS5CdWNrZXREZXBsb3ltZW50KHN0YWNrLCBcImRlcGxveS1jaGFuZ2Vsb2dcIiwge1xuXHRcdFx0XHRzb3VyY2VzOiBbczNEZXBsb3kuU291cmNlLmFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsIFwiZGlzdFwiKSldLFxuXHRcdFx0XHRkZXN0aW5hdGlvbkJ1Y2tldDogYnVja2V0LmNkay5idWNrZXQsXG5cdFx0XHRcdGRlc3RpbmF0aW9uS2V5UHJlZml4OiBcImNoYW5nZWxvZ1wiLFxuXHRcdFx0fSk7XG5cblx0XHRcdG5ldyBzc20uU3RyaW5nUGFyYW1ldGVyKHRoaXMsIFwiY2hhbmdlbG9nVXJsUGFyYW1ldGVyXCIsIHtcblx0XHRcdFx0cGFyYW1ldGVyTmFtZTogYC8ke3N0YWNrLnN0YWdlfS9iYXNlbGltZS9jaGFuZ2Vsb2cvczMvdXJsYCxcblx0XHRcdFx0c3RyaW5nVmFsdWU6IGJ1Y2tldC5jZGsuYnVja2V0LmJ1Y2tldFdlYnNpdGVEb21haW5OYW1lLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJUaGUgdXJsIG9mIHRoZSBjb21tYW5kIHF1ZXVlIGluIHRoZSB2ZWdhIHNlcnZpY2VcIixcblx0XHRcdFx0dGllcjogc3NtLlBhcmFtZXRlclRpZXIuU1RBTkRBUkQsXG5cdFx0XHRcdGFsbG93ZWRQYXR0ZXJuOiBcIi4qXCIsXG5cdFx0XHR9KTtcblxuXHRcdFx0c3RhY2suYWRkT3V0cHV0cyh7XG5cdFx0XHRcdHVybDogYCR7YnVja2V0LmNkay5idWNrZXQuYnVja2V0V2Vic2l0ZVVybH0vY2hhbmdlbG9nL2AgfHwgXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxufSBzYXRpc2ZpZXMgU1NUQ29uZmlnO1xuXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7OztBQUNBLFlBQVksY0FBYztBQUMxQixZQUFZLFNBQVM7QUFDckIsWUFBWSxRQUFRO0FBQ3BCLFNBQVMsY0FBYztBQUN2QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLGVBQWU7QUFJeEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sYUFBYSxjQUFjLFlBQVksR0FBRztBQUNoRCxJQUFNLFlBQVksUUFBUSxVQUFVO0FBRXBDLElBQU8scUJBQVE7QUFBQSxFQUNkLE9BQU8sUUFBUTtBQUNkLFdBQU87QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNUO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTyxLQUFLO0FBQ1gsUUFBSSxNQUFNLGdDQUFTLEtBQUssRUFBRSxNQUFNLEdBQUc7QUFDbEMsWUFBTSxTQUFTLElBQUksT0FBTyxPQUFPLG9CQUFvQjtBQUFBLFFBQ3BELEtBQUs7QUFBQSxVQUNKLFFBQVE7QUFBQSxZQUNQLHNCQUFzQjtBQUFBLFlBQ3RCLGtCQUFrQjtBQUFBLFlBQ2xCLG1CQUFzQixxQkFBa0I7QUFBQSxVQUN6QztBQUFBLFFBQ0Q7QUFBQSxNQUNELENBQUM7QUFFRCxVQUFhLDBCQUFpQixPQUFPLG9CQUFvQjtBQUFBLFFBQ3hELFNBQVMsQ0FBVSxnQkFBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBQUEsUUFDN0QsbUJBQW1CLE9BQU8sSUFBSTtBQUFBLFFBQzlCLHNCQUFzQjtBQUFBLE1BQ3ZCLENBQUM7QUFFRCxVQUFRLG9CQUFnQixNQUFNLHlCQUF5QjtBQUFBLFFBQ3RELGVBQWUsSUFBSSxNQUFNO0FBQUEsUUFDekIsYUFBYSxPQUFPLElBQUksT0FBTztBQUFBLFFBQy9CLGFBQWE7QUFBQSxRQUNiLE1BQVUsa0JBQWM7QUFBQSxRQUN4QixnQkFBZ0I7QUFBQSxNQUNqQixDQUFDO0FBRUQsWUFBTSxXQUFXO0FBQUEsUUFDaEIsS0FBSyxHQUFHLE9BQU8sSUFBSSxPQUFPLGlDQUFpQztBQUFBLE1BQzVELENBQUM7QUFBQSxJQUNGLEdBNUJVLE9BNEJUO0FBQUEsRUFDRjtBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=
