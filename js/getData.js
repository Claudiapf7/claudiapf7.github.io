window.onload = function(){
    getUserInfo();
    getRepos();
    const repos = document.getElementById("repos");
    const dropdown = document.getElementById("dropdown");
    console.log(dropdown);

    dropdown.addEventListener("click", function(){
      console.log("si");
      if(repos.style.display === "inline-flex"){
        repos.style.display = "none";
        dropdown.style.transform = "rotate(0deg)";
      }else{
        repos.style.display = "inline-flex";
        dropdown.style.transform = "rotate(180deg)";
      }
      
    })
}


async function getUserInfo(){
    const container = document.getElementById("user");
    return await fetch("https://api.github.com/users/claudiapol")
      .then((res) => res.json())
      .then(
        (result) => {
            console.log(result);

        },
        (error) => {
          console.log(error);
        }
      );

}

async function getRepos(){
    const container = document.getElementById("repos");
    return await fetch("https://api.github.com/users/claudiapol/repos")
      .then((res) => res.json())
      .then(
        (result) => {
            console.log(result);
            result.forEach(element => {
                const section = document.createElement("section");
                section.className = "card";
                //titulo
                const h2 = document.createElement("h2");
                h2.appendChild(document.createTextNode(element.name))
                section.append(h2);
                //descripcion
                const descripcion = document.createElement("div");
                descripcion.className = "container";
                descripcion.appendChild(document.createTextNode(element.description))
                //lenguajes
                descripcion.append(document.createElement("br"));
                descripcion.appendChild(document.createTextNode("Creado con: "+element.language))
                const urlLenguajes = element.languages_url;
                //url
                const url = document.createElement("a");
                url.style.display = "block";
                url.href = element.html_url;
                url.appendChild(document.createTextNode("Proyecto en GitHub"));
                descripcion.append(url);
                section.append(descripcion);
                container.append(section);

            });
        },
        (error) => {
          console.log(error);
        }
      );
}

async function getLanguages(url){

    const langs = getLanguages(urlLenguajes);
    const list = document.createElement("ul");
    console.log(typeof(langs));
    console.log(langs);
    for (var key in langs) {
        console.log(key + ': ' + langs[key]);
        }
    
    const languages = await fetch(url)
      .then((res) => res.json())
      .then(
        (result) => result,
        (error) => {
          console.log(error);
        }
      );

      return languages;

}
