import cdk = require('@aws-cdk/core');
export declare class Configuration {
    getConfig(app: cdk.App): {
        Stage: String;
        AWSAccountID: String;
        Region: String;
    };
    ensureString(object: Array<String>, propname?: any): String;
}
