#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkPocStack } from '../lib/cdk-poc-stack';
import { Configuration } from '../lib/config';

let config = new Configuration()
const app = new cdk.App();
async function Main() {
  let buildconfig = config.getConfig(app);

  const deploystack = new CdkPocStack(app, 'MyStack',{
    env : {
      account : String(buildconfig.AWSAccountID),
      region : String(buildconfig.Region),
    }
    
  },buildconfig);
}
Main();