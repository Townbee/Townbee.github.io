// On page load, highlight menu button
$(document).ready(function() {
    console.log("ready!");
});

$(document).ready(function() {
    path = document.location.pathname.slice(1, -1)
    if (path.length > 0) {
        $("#" + path + "_button").addClass("current-page");
        console.log("adding class to " + "#" + path + "_button")
    }
    console.log("document.location.pathname : " + document.location.pathname);
});