document.addEventListener("DOMContentLoaded", function () {
    var toggleArrow = document.getElementById("toggleSkills");
    var skillsContent = document.getElementById("skillsContent");
    toggleArrow.addEventListener("click", function () {
        if (skillsContent.style.display === "none") {
            skillsContent.style.display = "block";
            toggleArrow.innerHTML = "&#9652;"; // Up arrow
        }
        else {
            skillsContent.style.display = "none";
            toggleArrow.innerHTML = "&#9662;"; // Down arrow
        }
    });
});
