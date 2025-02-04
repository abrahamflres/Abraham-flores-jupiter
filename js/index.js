document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded successfully!");

    const today = new Date();
    const thisYear = today.getFullYear();

    const footer = document.createElement("footer");
    const copyright = document.createElement("p");
    copyright.innerHTML = `&copy; Abraham Flores ${thisYear}`;

    footer.appendChild(copyright);
    document.body.appendChild(footer);

    const skills = ["JavaScript", "HTML", "CSS", "Python", "SQL"];
    const skillsList = document.querySelector("#Skills ul");

    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });


    const projectSection = document.getElementById("Projects");
    if (!projectSection) {
        console.error("projects could not be found");
        return;
    }

    const projectList = document.getElementById("projectList");
  


    fetch("https://api.github.com/users/abrahamflres/repos")
        .then(response => {
            if (!response.ok) throw new Error(`API error: ${response.status}`);
            return response.json();
        })
        .then(repositories => {
            console.log("respository's", repositories);
            displayRepositories(repositories);
        })
        .catch(error => {
            console.error("Error fetching repositories:", error);
            projectList.innerHTML = `<p style="color: red;">could not load respositories</p>`;
        });

    function displayRepositories(repositories) {
        projectList.innerHTML = ""; 

        if (repositories.length === 0) {
            projectList.innerHTML = "<p>no projects</p>";
            return;
        }

        repositories.forEach(repo => {
            const projectItem = document.createElement("li");
            projectItem.classList.add("project-item");
            projectItem.innerHTML = `
                <strong>${repo.name}</strong><br>
                <p>${repo.description || "null description"}</p>
                <a href="${repo.html_url}" target="_blank">View Repository</a>
            `;
            projectList.appendChild(projectItem);
        });
    }
});

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}

