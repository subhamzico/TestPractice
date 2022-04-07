"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkPocStack = void 0;
const cdk = require("@aws-cdk/core");
const s3 = require("@aws-cdk/aws-s3");
const cloudfront = require("@aws-cdk/aws-cloudfront");
const aws_cloudfront_1 = require("@aws-cdk/aws-cloudfront");
const aws_s3_1 = require("@aws-cdk/aws-s3");
const aws_cloudfront_origins_1 = require("@aws-cdk/aws-cloudfront-origins");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
class CdkPocStack extends cdk.Stack {
    constructor(scope, id, props, config) {
        super(scope, id, config);
        const tesbucket = new s3.Bucket(this, "MyBucket", {
            bucketName: "assets-ui-" + config.Stage,
            blockPublicAccess: aws_s3_1.BlockPublicAccess.BLOCK_ALL,
        });
        const oai = new cloudfront.OriginAccessIdentity(this, 'MyOAI', {
            comment: "test oai",
        });
        tesbucket.grantRead(oai);
        const mycachepolicy = new aws_cloudfront_1.CachePolicy(this, 'MyCachePolicy', {
            maxTtl: cdk.Duration.seconds(20),
            minTtl: cdk.Duration.seconds(10),
            defaultTtl: cdk.Duration.seconds(15),
            cachePolicyName: 'TestCachePolicy' + config.Stage,
            comment: 'Created to test the cache behavior'
        });
        const DR = new aws_cloudfront_1.Distribution(this, 'MyDistribution', {
            defaultBehavior: {
                origin: new aws_cloudfront_origins_1.S3Origin(tesbucket, {
                    originAccessIdentity: oai,
                }),
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.ALLOW_ALL,
                compress: true,
                cachePolicy: mycachepolicy,
            },
            httpVersion: cloudfront.HttpVersion.HTTP2,
            priceClass: aws_cloudfront_1.PriceClass.PRICE_CLASS_100,
            defaultRootObject: 'Coffee.jpg'
        });
    }
}
exports.CdkPocStack = CdkPocStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvYy1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jZGstcG9jLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxzQ0FBcUM7QUFDckMsc0RBQXFEO0FBQ3JELDREQUFnRjtBQUNoRiw0Q0FBb0Q7QUFDcEQsNEVBQTJEO0FBQzNELDhDQUE4QztBQUU5QyxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsS0FBSztJQUN4QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCLEVBQUUsTUFBVztRQUMvRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV6QixNQUFNLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUMvQyxVQUFVLEVBQUUsWUFBWSxHQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3JDLGlCQUFpQixFQUFFLDBCQUFpQixDQUFDLFNBQVM7U0FFL0MsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztZQUM1RCxPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDLENBQUE7UUFFRixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLE1BQU0sYUFBYSxHQUFHLElBQUksNEJBQVcsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQzFELE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3BDLGVBQWUsRUFBRSxpQkFBaUIsR0FBQyxNQUFNLENBQUMsS0FBSztZQUMvQyxPQUFPLEVBQUUsb0NBQW9DO1NBQzlDLENBQUMsQ0FBQztRQUVILE1BQU0sRUFBRSxHQUFHLElBQUksNkJBQVksQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7WUFDakQsZUFBZSxFQUFDO2dCQUNkLE1BQU0sRUFBRSxJQUFJLGlDQUFRLENBQUMsU0FBUyxFQUFDO29CQUM3QixvQkFBb0IsRUFBRSxHQUFHO2lCQUUxQixDQUFDO2dCQUNGLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTO2dCQUMvRCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxXQUFXLEVBQUUsYUFBYTthQUMzQjtZQUNELFdBQVcsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDekMsVUFBVSxFQUFFLDJCQUFVLENBQUMsZUFBZTtZQUN0QyxpQkFBaUIsRUFBRSxZQUFZO1NBQ2hDLENBQUMsQ0FBQTtJQUdKLENBQUM7Q0FDRjtBQXhDRCxrQ0F3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBzMyBmcm9tICdAYXdzLWNkay9hd3MtczMnXG5pbXBvcnQgKiBhcyBjbG91ZGZyb250IGZyb20gJ0Bhd3MtY2RrL2F3cy1jbG91ZGZyb250J1xuaW1wb3J0IHsgQ2FjaGVQb2xpY3ksIERpc3RyaWJ1dGlvbiwgUHJpY2VDbGFzcyB9IGZyb20gJ0Bhd3MtY2RrL2F3cy1jbG91ZGZyb250JztcbmltcG9ydCB7IEJsb2NrUHVibGljQWNjZXNzIH0gZnJvbSAnQGF3cy1jZGsvYXdzLXMzJztcbmltcG9ydCB7IFMzT3JpZ2luIH0gZnJvbSAnQGF3cy1jZGsvYXdzLWNsb3VkZnJvbnQtb3JpZ2lucyc7XG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XG5cbmV4cG9ydCBjbGFzcyBDZGtQb2NTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzLCBjb25maWc/OmFueSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgY29uZmlnKTtcblxuICAgIGNvbnN0IHRlc2J1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgXCJNeUJ1Y2tldFwiLHtcbiAgICAgIGJ1Y2tldE5hbWU6IFwiYXNzZXRzLXVpLVwiK2NvbmZpZy5TdGFnZSxcbiAgICAgIGJsb2NrUHVibGljQWNjZXNzOiBCbG9ja1B1YmxpY0FjY2Vzcy5CTE9DS19BTEwsXG4gICAgICAvL3dlYnNpdGVJbmRleERvY3VtZW50OiAnQ29mZmVlLmpwZydcbiAgICB9KVxuICAgIGNvbnN0IG9haSA9IG5ldyBjbG91ZGZyb250Lk9yaWdpbkFjY2Vzc0lkZW50aXR5KHRoaXMsICdNeU9BSScse1xuICAgICAgY29tbWVudDogXCJ0ZXN0IG9haVwiLFxuICAgIH0pXG5cbiAgICB0ZXNidWNrZXQuZ3JhbnRSZWFkKG9haSk7XG5cbiAgICBjb25zdCBteWNhY2hlcG9saWN5ID0gbmV3IENhY2hlUG9saWN5KHRoaXMsICdNeUNhY2hlUG9saWN5Jyx7XG4gICAgICBtYXhUdGw6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDIwKSxcbiAgICAgIG1pblR0bDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgZGVmYXVsdFR0bDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpLFxuICAgICAgY2FjaGVQb2xpY3lOYW1lOiAnVGVzdENhY2hlUG9saWN5Jytjb25maWcuU3RhZ2UsXG4gICAgICBjb21tZW50OiAnQ3JlYXRlZCB0byB0ZXN0IHRoZSBjYWNoZSBiZWhhdmlvcidcbiAgICB9KTtcblxuICAgIGNvbnN0IERSID0gbmV3IERpc3RyaWJ1dGlvbih0aGlzLCAnTXlEaXN0cmlidXRpb24nLHtcbiAgICAgIGRlZmF1bHRCZWhhdmlvcjp7XG4gICAgICAgIG9yaWdpbjogbmV3IFMzT3JpZ2luKHRlc2J1Y2tldCx7XG4gICAgICAgICAgb3JpZ2luQWNjZXNzSWRlbnRpdHk6IG9haSxcbiAgICAgICAgICBcbiAgICAgICAgfSksXG4gICAgICAgIHZpZXdlclByb3RvY29sUG9saWN5OiBjbG91ZGZyb250LlZpZXdlclByb3RvY29sUG9saWN5LkFMTE9XX0FMTCxcbiAgICAgICAgY29tcHJlc3M6IHRydWUsXG4gICAgICAgIGNhY2hlUG9saWN5OiBteWNhY2hlcG9saWN5LFxuICAgICAgfSxcbiAgICAgIGh0dHBWZXJzaW9uOiBjbG91ZGZyb250Lkh0dHBWZXJzaW9uLkhUVFAyLFxuICAgICAgcHJpY2VDbGFzczogUHJpY2VDbGFzcy5QUklDRV9DTEFTU18xMDAsXG4gICAgICBkZWZhdWx0Um9vdE9iamVjdDogJ0NvZmZlZS5qcGcnXG4gICAgfSlcblxuICAgXG4gIH1cbn1cbiJdfQ==