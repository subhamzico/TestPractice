"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
class Configuration {
    getConfig(app) {
        let env = app.node.tryGetContext('config');
        if (!env) {
            throw new Error("Missing Variable");
        }
        let unparsedEnv = app.node.tryGetContext(env);
        let buildconfig = {
            Stage: this.ensureString(unparsedEnv, 'Stage'),
            AWSAccountID: this.ensureString(unparsedEnv, 'AWSAccountID'),
            Region: this.ensureString(unparsedEnv, 'Region')
        };
        return buildconfig;
    }
    ensureString(object, propname) {
        if (!object[propname] || object[propname].trim().length == 0) {
            throw new Error("Does not Exist");
        }
        return object[propname];
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxNQUFhLGFBQWE7SUFFMUIsU0FBUyxDQUFDLEdBQVc7UUFDakIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLEdBQUcsRUFDUjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtTQUN0QztRQUNELElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzdDLElBQUssV0FBVyxHQUFHO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFDLE9BQU8sQ0FBQztZQUM3QyxZQUFZLEVBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUMsY0FBYyxDQUFDO1lBQzVELE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBQyxRQUFRLENBQUM7U0FDbEQsQ0FBQTtRQUNELE9BQU8sV0FBVyxDQUFBO0lBQ3RCLENBQUM7SUFDRCxZQUFZLENBQUMsTUFBb0IsRUFBRSxRQUFhO1FBQzVDLElBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQ3pEO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDM0IsQ0FBQztDQUdBO0FBekJELHNDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjZGsgPSByZXF1aXJlICgnQGF3cy1jZGsvY29yZScpXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9ue1xyXG5cclxuZ2V0Q29uZmlnKGFwcDpjZGsuQXBwKXtcclxuICAgIGxldCBlbnYgPSBhcHAubm9kZS50cnlHZXRDb250ZXh0KCdjb25maWcnKVxyXG4gICAgaWYgKCFlbnYpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBWYXJpYWJsZVwiKVxyXG4gICAgfVxyXG4gICAgbGV0IHVucGFyc2VkRW52ID0gYXBwLm5vZGUudHJ5R2V0Q29udGV4dChlbnYpXHJcbiAgICBsZXQgIGJ1aWxkY29uZmlnID0ge1xyXG4gICAgICAgIFN0YWdlOiB0aGlzLmVuc3VyZVN0cmluZyh1bnBhcnNlZEVudiwnU3RhZ2UnKSxcclxuICAgICAgICBBV1NBY2NvdW50SUQgOiB0aGlzLmVuc3VyZVN0cmluZyh1bnBhcnNlZEVudiwnQVdTQWNjb3VudElEJyksXHJcbiAgICAgICAgUmVnaW9uOiB0aGlzLmVuc3VyZVN0cmluZyh1bnBhcnNlZEVudiwnUmVnaW9uJylcclxuICAgIH1cclxuICAgIHJldHVybiBidWlsZGNvbmZpZ1xyXG59XHJcbmVuc3VyZVN0cmluZyhvYmplY3Q6QXJyYXk8U3RyaW5nPiwgcHJvcG5hbWU/OmFueSl7XHJcbiAgICBpZighb2JqZWN0W3Byb3BuYW1lXSB8fCBvYmplY3RbcHJvcG5hbWVdLnRyaW0oKS5sZW5ndGg9PTApXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9lcyBub3QgRXhpc3RcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0W3Byb3BuYW1lXVxyXG59XHJcblxyXG5cclxufSJdfQ==