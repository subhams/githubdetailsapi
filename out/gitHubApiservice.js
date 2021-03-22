"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubApiService = void 0;
var request = __importStar(require("request"));
var repo_1 = require("./repo");
var user_1 = require("./user");
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfo = function (userName, cb) {
        var OPTIONS = {
            host: 'api.github.com',
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        };
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, body) {
            var user = new user_1.User(JSON.parse(body));
            cb(user);
            //console.log(error);
            //console.log(user); 
            //console.log(body);
        });
    };
    GitHubApiService.prototype.getRepos = function (userName, cb) {
        var OPTIONS = {
            host: 'api.github.com',
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        };
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, function (error, response, body) {
            var reposArray = JSON.parse(body);
            var repos = reposArray.map(function (repo) { return new repo_1.Repo(repo); });
            cb(repos);
            //console.log(error);
            //console.log(user); 
            //console.log(body);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
