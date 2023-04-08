import type { SSTConfig } from "sst";
import * as s3Deploy from "aws-cdk-lib/aws-s3-deployment";
import * as ssm from "aws-cdk-lib/aws-ssm";

import { AstroSite, Bucket } from "sst/constructs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import path from "node:path";
export default {
	config(_input) {
		return {
			name: "changelog",
			region: "eu-west-1",
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const bucket = new Bucket(stack, "changelog-bucket", {
				cdk: {
					bucket: {
						websiteIndexDocument: "index.html",
						publicReadAccess: true,
					},
				},
			});

			new s3Deploy.BucketDeployment(stack, "deploy-changelog", {
				sources: [s3Deploy.Source.asset(path.join(__dirname, "dist"))],
				destinationBucket: bucket.cdk.bucket,
				destinationKeyPrefix: "changelog",
			});

			new ssm.StringParameter(this, "changelogUrlParameter", {
				parameterName: `/${stack.stage}/baselime/changelog/s3/url`,
				stringValue: bucket.cdk.bucket.bucketWebsiteUrl,
				description: "The url of the command queue in the vega service",
				tier: ssm.ParameterTier.STANDARD,
				allowedPattern: ".*",
			});

			stack.addOutputs({
				url: `${bucket.cdk.bucket.bucketWebsiteUrl}/changelog/` || "http://localhost:3000",
			});
		});
	},
} satisfies SSTConfig;
