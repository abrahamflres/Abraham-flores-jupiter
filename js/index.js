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
            console.log("repositories", repositories);
            displayRepositories(repositories);
        })
        .catch(error => {
            console.error("Error fetching repositories:", error);
            projectList.innerHTML = `<p style="color: red;">Could not load repositories</p>`;
        });

    function displayRepositories(repositories) {
        projectList.innerHTML = ""; 

        if (repositories.length === 0) {
            projectList.innerHTML = "<p>No projects</p>";
            return;
        }

        repositories.forEach(repo => {
            const projectItem = document.createElement("li");
            projectItem.classList.add("project-item");
            projectItem.innerHTML = `
                <strong>${repo.name}</strong><br>
                <p>${repo.description || "No description available"}</p>
                <a href="${repo.html_url}" target="_blank">View Repository</a>
            `;
            projectList.appendChild(projectItem);
        });
    }


    const messageForm = document.forms['leave_message'];

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        console.log("Name:", usersName);
        console.log("Email:", usersEmail);
        console.log("Message:", usersMessage);

        
        messageForm.reset();

        
        const messageSection = document.getElementById("messages");
        const messageList = messageSection.querySelector("ul");

        const newMessage = document.createElement("li");
        newMessage.innerHTML = `
            <a href=" ${usersEmail}">${usersName}</a>:
            <span>${usersMessage}</span>
        `;

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.type = "button";

        removeButton.addEventListener('click', () => {
            const entry = removeButton.parentNode;
            entry.remove();
        });

        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);
    });

});

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}