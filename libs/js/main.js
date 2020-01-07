// Function to generate skill table
function comp(a, b, c) {
    $.ajax({
               url: a,
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop < data.length; loop++) {

            $(b).append("<ul id=\'" + c + "" + loop + "\' class=\'whiteText col-12 list-unstyled\'><li class=\'row justify-content-center\'>" + (data[loop].iconClass != undefined ? "<i class=\'" + data[loop].iconClass + " cvIcons text-right col-5 px-0\'></i>" : "") + "<p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + data[loop].name + "</p>" + (data[loop].info != undefined ? "<p class=\' text-dark my-auto col-5 list-unstyled\'>" + data[loop].info + "</p>" : "") + "</li></ul>")
        }
    });
}

$(function () {
    // Append structure into HTML
    $("body").prepend("<div id=\"structure\" class=\"container-fluid px-0\"><header id=\"header\" class=\"row text-center bgDarkBlue text-light justify-content-center shadow-sm\"></header><div class=\"d-md-flex justify-content-around\"><div id=\"leftBarMd\" class=\"col-md-4\"><section id=\"profile\" class=\"justify-content-center col-12 bg-light px-0 text-center shadow-sm\"></section><section id=\"accordion\" class=\"col-12\"></section></div><div class=\"col-md-8\"><section id=\"formation\" class=\"col-12 text-center bg-light shadow-sm\"></section><section id=\"experience\" class=\"col-12 text-center bg-light shadow-sm\"></section><section id=\"hobbies\" class=\"col-12 text-center bg-light shadow-sm\"></section></div></div></div>");

    // Append Header into HTML
    $("#header").append("<h1 class=\'col-12\'>Curriculum Vitae<br><span class=\'font-weight-bold\'>Thomas HERMANT</span></h1><img id=\'profilePicture\' src=\'libs/img/profilePicture.jpg\' alt=\'Photo Thomas Hermant\' title=\'Photo Thomas Hermant\'><p id=\'intro\' class=\'col-12 font-italic\'>Développeur Web & Web Mobile junior, diplômé de lettres, avec l\'expérience d'internet et de la vie en entreprise.</p>");

    // Append profile.json into HTML
    $.ajax({
               url: "ajax/profile.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop < data.length; loop++) {
            $("#profile").append("<div><h3>" + data[loop].name + "</h3><div><p>" + data[loop].info + "</p></div></div>")
        }
    });

    // Append accordion into HTML
    $("#accordion").append(" <h3>Langages</h3><div id=\"languages\" class=\"col-12 px-0\"></div><h3>Frameworks</h3><div id=\"frameworks\" class=\"col-12 px-0\"></div><h3>Technologies</h3><div id=\"technologies\" class=\"col-12 px-0\"></div><h3>CMS</h3><div id=\"cms\" class=\"col-12 px-0\"></div><h3>Outils de développement</h3><div id=\"devTools\" class=\"col-12 px-0\"></div><h3>Outils de graphisme</h3><div id=\"graphicTools\" class=\"col-12 px-0\"></div><h3>Outils bureautiques</h3><div id=\"desktopTools\" class=\"col-12 px-0\"></div><h3>Langues</h3><div id=\"spokenLanguages\" class=\"col-12 px-0\"></div>");

    // Menu Accordeon JQuery UI
    $("#accordion").accordion({
                                  heightStyle: "content"
                              });

    // Append skill tables into HTML
    $.ajax({
               url: "ajax/skills/skills.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop < data.length; loop++) {
            comp(data[loop].json, data[loop].anchor, data[loop].ul);
        }
    });

    // Append formation.json into HTML
    $("#formation").append("<h3 class=\"font-weight-bold\">Formations</h3>");
    $.ajax({
               url: "ajax/formation.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop < data.length; loop++) {
            $("#formation").append("<hr><div id=\'formation" + loop + "\' class=\'formation row\'><div id=\'periode" + loop + "\' class=\'col-12\'>" + data[loop].periode + "</div><div class=\'col-12\'><p  id=\'name" + loop + "\'class=\'font-weight-bold\'>" + data[loop].name + "</p><div id=\'place" + loop + "\'>" + data[loop].place + "</div></div></div>")
        }
    });

    // Append experience.json into HTML
    $("#experience").append("<h3 class=\"font-weight-bold\">Expériences professionnelles</h3>");
    $.ajax({
               url: "ajax/experience.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop < data.length; loop++) {
            let ajout = "<hr><div id=\'experience" + loop + "\' class=\'formation row\'><div id=\'periode" + loop + "\' class=\'col-12\'>" + data[loop].periode + "</div><div class=\'col-12\'><p  id=\'name" + loop + "\' class=\'font-weight-bold\'>" + data[loop].name + "</p><div id=\'place" + loop + "\' class=\'font-weight-bold\'>" + data[loop].place + "</div><div id=\'detail" + loop + "\'><ul class=\'text-left\'>";
            for (let loopLI = 0; loopLI < data[loop].detail.length; loopLI++) {
                ajout += "<li class=\'experienceDetail\'>" + data[loop].detail[loopLI] + "</li>"
            }
            ajout += "</ul></div></div></div>";
            $("#experience").append(ajout)
        }
    });

    // Append hobbies.json into HTML
    $("#hobbies").append("<h3 class=\"font-weight-bold\">Centres d'intérêt</h3>");
    $.ajax({
               url: "ajax/hobbies.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop < data.length; loop++) {
            $("#hobbies").append("<hr><div id=\'hobby" + loop + "\' class=\'hobbies row\'><div id=\'name" + loop + "\' class=\'col-12 font-weight-bold\'>" + data[loop].name + "</div><div class=\'col-12\'><p  id=\'detail" + loop + "\'>" + data[loop].detail + "</p></div></div>")
        }
    });
});

