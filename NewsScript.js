function openSection(evt, sectionName) {
    var i, newscontent, aboutsections;
    newscontent = document.getElementsByClassName("news-content");
    for (i = 0; i < newscontent.length; i++) {
        newscontent[i].style.display = "none";
    }
    newslink = document.getElementsByClassName("news-link");
    for (i = 0; i < newslink.length; i++) {
        newslink[i].className = newslink[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
window.onload = function () {
    document.getElementById("defaultOpen").click();
};
