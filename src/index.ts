import { GitHubApiService } from './gitHubApiservice';
import * as _ from 'lodash';
import { Repo } from './repo';
import { User } from './user';


let svc = new GitHubApiService();

if(process.argv.length < 3){
    console.log('Please pass the username as an arguement');
}
else {
    let username = process.argv[2]; 
    svc.getUserInfo(username, (user : User)=> {
        svc.getRepos(username, (repos : Repo[])=> {
            let sortedRepos = _.sortBy(repos,[(repo : Repo) => repo.size * -1]);
            let filteredRepos = _.take(sortedRepos,2);
            user.repos = filteredRepos;
            console.log(user)
        });
    });
}