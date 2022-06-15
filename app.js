const github = new Github();
const ui = new UI();
const githubForm = document.querySelector(".arabtn")
const nameInput = document.getElementById("githubname")
const ClearLastUsers = document.getElementById("clear-last-users")
const lastUsers = document.getElementById("last-users")

eventListeners();

function eventListeners() {
    githubForm.addEventListener("click", getData);
    ClearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);


}

function getData(e) {
    e.preventDefault();
    let username = nameInput.value.trim();

    if (username === "") {
        alert("Kullanici adi giriniz");
    } else {
        github.getGithubData(username)
            .then(res => {
                if (res.user.message === "Not Found") {
                    ui.showErrorMessage("Kullanıcı Bulunamadı Doğru Girdiğinizden Emin Olun.")
                } else {

                    ui.ShowUserInfo(res.user);
                    ui.showRepoInfo(res.repo)
                    ui.showorgs(res.orgs)




                }
            })
            .catch(err => console.log(ui.showErrorMessage(err)))
    }

    ui.clearInput();







}

