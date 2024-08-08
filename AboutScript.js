function openSection(evt, sectionName) {
    var i, aboutcontent, aboutlink;
    aboutcontent = document.getElementsByClassName("about-content");
    for (i = 0; i < aboutcontent.length; i++) {
        aboutcontent[i].style.display = "none";
    }
    aboutlink = document.getElementsByClassName("about-link");
    for (i = 0; i < aboutsections.length; i++) {
        aboutlink[i].className = aboutlink[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
