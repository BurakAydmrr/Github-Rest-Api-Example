class UI {
    constructor(){
        this.profileDiv = document.getElementById("profile")
        this.repoDiv = document.getElementById("repos")
        this.lastUsers = document.getElementById("last-users")
        this.inputFiled = document.getElementById("githubname")
        this.cardBody = document.querySelector(".card-body")
        this.orgsDiv = document.getElementById("organization")
    }

    clearInput(){
        this.inputFiled.value = "";
    }

    ShowUserInfo(user){
        this.profileDiv.innerHTML = `
        <div class="row">
        
        
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${user.name}</strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                    <img src="https://img.icons8.com/ios-filled/30/undefined/company.png"/><span id="company">${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                    <img src="https://img.icons8.com/ios-glyphs/30/undefined/marker--v1.png"/> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                    <img src="https://img.icons8.com/ios-glyphs/30/undefined/twitter--v1.png"/> <span id="mail">${user.twitter_username}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>
    
        `
    }

    showErrorMessage(message) {
        const div = document.createElement('div');
        div.className="alert alert-danger";
        div.textContent=message;
        this.cardBody.appendChild(div);

        setTimeout(() => {
            div.remove();
        },3000)

    }

    showorgs(orgs){
        console.log(orgs , "asdasdasd");      
            this.orgsDiv.innerHTML=` <div class="card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    Organizations Adı :  <span>${orgs[0].login}</span>
                    <img  width="100"src="${orgs[0].avatar_url}" alt="">
                  
                   
                </div> <br>
            <br>

            <div class="col-md-6">
            description :  <span>${orgs[0].description}</span>
           
           
        </div>

    
            </div>

        </div>`
            
            


        

    }

    showRepoInfo(repos){

        this.repoDiv.innerHTML="";

        repos.forEach(repo=>{
            this.repoDiv.innerHTML+=`
             <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                <span></span> 
                <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>

                    <button class="btn btn-info">
                        Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                    </button>
                    ${repo.language}
            
                </div>
        </div>

        </div`
        })

        

    }

    
}