document.addEventListener("DOMContentLoaded", () => {
    const toggleArrow = document.getElementById("toggleSkills") as HTMLSpanElement;
    const skillsContent = document.getElementById("skillsContent") as HTMLDivElement;

    toggleArrow.addEventListener("click", () => {
        if (skillsContent.style.display === "none") {
            skillsContent.style.display = "block";
            toggleArrow.innerHTML = "&#9652;"; // Up arrow
        } else {
            skillsContent.style.display = "none";
            toggleArrow.innerHTML = "&#9662;"; // Down arrow
        }
    });
});