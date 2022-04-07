import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3'
import * as cloudfront from '@aws-cdk/aws-cloudfront'
import { CachePolicy, Distribution, PriceClass } from '@aws-cdk/aws-cloudfront';
import { BlockPublicAccess } from '@aws-cdk/aws-s3';
import { S3Origin } from '@aws-cdk/aws-cloudfront-origins';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkPocStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps, config?:any) {
    super(scope, id, config);

    const tesbucket = new s3.Bucket(this, "MyBucket",{
      bucketName: "assets-ui-"+config.Stage,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      //websiteIndexDocument: 'Coffee.jpg'
    })
    const oai = new cloudfront.OriginAccessIdentity(this, 'MyOAI',{
      comment: "test oai",
    })

    tesbucket.grantRead(oai);

    const mycachepolicy = new CachePolicy(this, 'MyCachePolicy',{
      maxTtl: cdk.Duration.seconds(20),
      minTtl: cdk.Duration.seconds(10),
      defaultTtl: cdk.Duration.seconds(15),
      cachePolicyName: 'TestCachePolicy'+config.Stage,
      comment: 'Created to test the cache behavior'
    });

    const DR = new Distribution(this, 'MyDistribution',{
      defaultBehavior:{
        origin: new S3Origin(tesbucket,{
          originAccessIdentity: oai,
          
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.ALLOW_ALL,
        compress: true,
        cachePolicy: mycachepolicy,
      },
      httpVersion: cloudfront.HttpVersion.HTTP2,
      priceClass: PriceClass.PRICE_CLASS_100,
      defaultRootObject: 'Coffee.jpg'
    })

   
  }
}
