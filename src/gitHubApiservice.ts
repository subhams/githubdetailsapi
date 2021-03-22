import * as request from 'request';
import { Repo } from './repo';
import { User } from './user';

export class GitHubApiService{
    
    getUserInfo(userName:string, cb:(user: User) => any ){
        let OPTIONS: any = {
            host: 'api.github.com',
            method: 'GET',
            headers: {'user-agent': 'node.js'}
        }
        
        request.get('https://api.github.com/users/'+ userName, OPTIONS, (error: any,response: any, body: any)=>{
            let user = new User(JSON.parse(body));
            cb(user);
            //console.log(error);
            //console.log(user); 
            //console.log(body);
            }
        )
    }
    getRepos(userName:string, cb:(repos: Repo[]) => any ){
        let OPTIONS: any = {
            host: 'api.github.com',
            method: 'GET',
            headers: {'user-agent': 'node.js'}
        }
        request.get('https://api.github.com/users/'+ userName + '/repos', OPTIONS, (error: any,response: any, body: any)=>{
            let reposArray = JSON.parse(body);
            let repos =  reposArray.map((repo: any) => new Repo(repo));
            cb(repos);
            //console.log(error);
            //console.log(user); 
            //console.log(body);
            }
        )
    }
}