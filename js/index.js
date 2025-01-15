document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    
    const footer = document.createElement("footer");

    const copyright = document.createElement("p");
    copyright.innerHTML = `© Abraham Flores ${thisYear}`;

    footer.appendChild(copyright);
    document.body.appendChild(footer);

    const footerElement = document.querySelector("footer")
    console.log(footerElement); 



    
    const skills = ["javaScript", "HTML", "CSS", "Python", "MySQL"];
    const skillsSection = document.querySelector("#Skills");
    const skillsList = skillsSection.querySelector("ul");

    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
});


function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}