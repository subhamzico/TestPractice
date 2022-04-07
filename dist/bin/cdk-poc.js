#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const cdk_poc_stack_1 = require("../lib/cdk-poc-stack");
const config_1 = require("../lib/config");
let config = new config_1.Configuration();
const app = new cdk.App();
async function Main() {
    let buildconfig = config.getConfig(app);
    const deploystack = new cdk_poc_stack_1.CdkPocStack(app, 'MyStack', {
        env: {
            account: String(buildconfig.AWSAccountID),
            region: String(buildconfig.Region),
        }
    }, buildconfig);
}
Main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Jpbi9jZGstcG9jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMsd0RBQW1EO0FBQ25ELDBDQUE4QztBQUU5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFhLEVBQUUsQ0FBQTtBQUNoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixLQUFLLFVBQVUsSUFBSTtJQUNqQixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhDLE1BQU0sV0FBVyxHQUFHLElBQUksMkJBQVcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFDO1FBQ2pELEdBQUcsRUFBRztZQUNKLE9BQU8sRUFBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztZQUMxQyxNQUFNLEVBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDcEM7S0FFRixFQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFDRCxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IENka1BvY1N0YWNrIH0gZnJvbSAnLi4vbGliL2Nkay1wb2Mtc3RhY2snO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2xpYi9jb25maWcnO1xuXG5sZXQgY29uZmlnID0gbmV3IENvbmZpZ3VyYXRpb24oKVxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbmFzeW5jIGZ1bmN0aW9uIE1haW4oKSB7XG4gIGxldCBidWlsZGNvbmZpZyA9IGNvbmZpZy5nZXRDb25maWcoYXBwKTtcblxuICBjb25zdCBkZXBsb3lzdGFjayA9IG5ldyBDZGtQb2NTdGFjayhhcHAsICdNeVN0YWNrJyx7XG4gICAgZW52IDoge1xuICAgICAgYWNjb3VudCA6IFN0cmluZyhidWlsZGNvbmZpZy5BV1NBY2NvdW50SUQpLFxuICAgICAgcmVnaW9uIDogU3RyaW5nKGJ1aWxkY29uZmlnLlJlZ2lvbiksXG4gICAgfVxuICAgIFxuICB9LGJ1aWxkY29uZmlnKTtcbn1cbk1haW4oKTsiXX0=