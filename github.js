class Github {
    constructor(){
        this.url = "https://api.github.com/users/"
    }

    async getGithubData(username) {
        const responseUser = await fetch(this.url + username);
        const responseRepo = await fetch(this.url+username+ "/repos");
        const responseOrgs = await fetch(this.url+username+ "/orgs");

        const userData = await responseUser.json();
        const repoData = await responseRepo.json();
        const orgsData = await responseOrgs.json();


        return {
            user:userData,
            repo:repoData,
            orgs:orgsData

        }

    }

}