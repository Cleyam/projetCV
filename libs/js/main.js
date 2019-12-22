$(function () {
    // Append formation.json into HTML
    $.ajax({
        url: "ajax/formation.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#formation").append("<hr><div id=\'formation" + loop + "\' class=\'formation row\'>\n" +
                "            <div id=\'periode" + loop + "\' class=\'col-12\'>" + data[loop].periode + "</div>\n" +
                "            <div class=\'col-12\'>\n" +
                "                <p  id=\'name" + loop + "\'class=\'font-weight-bold\'>" + data[loop].name + "</p>\n" +
                "                <div id=\'place" + loop + "\'>" + data[loop].place + "</div>\n" +
                "            </div>\n" +
                "        </div>"
            )

        }
    });
    // Append experience.json into HTML
    $.ajax({
        url: "ajax/experience.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            let ajout = "<hr><div id=\'experience" + loop + "\' class=\'formation row\'>\n";
            ajout += "<div id=\'periode" + loop + "\' class=\'col-12\'>" + data[loop].periode + "</div>\n";
            ajout += "<div class=\'col-12\'>\n";
            ajout += "<p  id=\'name" + loop + "\' class=\'font-weight-bold\'>" + data[loop].name + "</p>\n";
            ajout += "<div id=\'place" + loop + "\' class=\'font-weight-bold\'>" + data[loop].place + "</div>\n";
            ajout += "<div id=\'detail" + loop + "\'><ul class=\'text-left\'>";
            for (let loopLI = 0; loopLI <= data[loop].detail.length - 1; loopLI++) {
                ajout += "<li class=\'experienceDetail\'>" + data[loop].detail[loopLI] + "</li>"
            };
            ajout += "</ul></div>\n";
            ajout += "</div>\n";
            ajout += "</div>";
            $("#experience").append(ajout)

        }
    });
    // Append languages.json into HTML
    $.ajax({
        url: "ajax/skills/languages.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#languages").append("<ul id=\'language" + loop + "\' class=\'whiteText col-12 list-unstyled\'>\n" +
                "                <li class=\'row justify-content-center\'>\n" +
                "                    <i class=\'" + data[loop].iconClass + " cvIcons text-right col-5 px-0\'></i><p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + data[loop].name + "</p></li>\n" +
                "            </ul>")

        }
    });
    // Append frameworks.json into HTML
    $.ajax({
        url: "ajax/skills/frameworks.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#frameworks").append("<ul id=\'framework" + loop + "\' class=\'whiteText col-12 list-unstyled\'>\n" +
                "                <li class=\'row justify-content-center\'>\n" +
                "                    <i class=\'" + data[loop].iconClass + " cvIcons text-right col-5 px-0\'></i><p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + data[loop].name + "</p></li>\n" +
                "            </ul>")

        }
    });
    // Append skills.json into HTML
    $.ajax({
        url: "ajax/skills/technologies.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#technologies").append("<ul id=\'techno" + loop + "\' class=\'whiteText col-12 list-unstyled\'>\n" +
                "                <li class=\'row justify-content-center\'>\n" +
                "                    <i class=\'" + data[loop].iconClass + " cvIcons text-right col-5 px-0\'></i><p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + data[loop].name + "</p></li>\n" +
                "            </ul>")

        }
    });
    // Append devTools.json into HTML
    $.ajax({
        url: "ajax/skills/devTools.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#devTools").append("<ul id=\'devTool" + loop + "\' class=\'whiteText col-12 list-unstyled\'>\n" +
                "                <li class=\'row justify-content-center\'>\n" +
                "                    <i class=\'" + data[loop].iconClass + " cvIcons text-right col-5 px-0\'></i><p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + data[loop].name + "</p></li>\n" +
                "            </ul>")

        }
    });
    // Append graphicTools.json into HTML
    $.ajax({
        url: "ajax/skills/graphicTools.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#graphicTools").append("<ul id=\'graphicTool" + loop + "\' class=\'whiteText col-12 list-unstyled\'>\n" +
                "                <li class=\'row justify-content-center\'>\n" +
                "                    <i class=\'" + data[loop].iconClass + " cvIcons text-right col-5 px-0\'></i><p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + data[loop].name + "</p></li>\n" +
                "            </ul>")

        }
    });
    // Append desktopTools.json into HTML
    $.ajax({
        url: "ajax/skills/desktopTools.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#desktopTools").append("<ul id=\'desktopTool" + loop + "\' class=\'whiteText col-12 list-unstyled\'>\n" +
                "                <li class=\'row justify-content-center\'>\n" +
                "                    <i class=\'" + data[loop].iconClass + " cvIcons text-right col-5 px-0\'></i><p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + data[loop].name + "</p></li>\n" +
                "            </ul>")

        }
    });
    // Append spokenLanguages.json into HTML
    $.ajax({
        url: "ajax/skills/spokenLanguages.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#spokenLanguages").append("<ul id=\'spokenLanguage" + loop + "\' class=\'whiteText col-12 list-unstyled\'>\n" +
                "                <li class=\'row justify-content-center\'>\n" +
                "                    <p class=\'font-weight-bold text-dark my-auto col-5 list-unstyled\'>" + data[loop].name + "</p><p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + data[loop].info + "</p></li>\n" +
                "            </ul>")

        }
    });
    // Append cms.json into HTML
    $.ajax({
        url: "ajax/skills/cms.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#cms").append("<ul id=\'cms" + loop + "\' class=\'whiteText col-12 list-unstyled\'>\n" +
                "                <li class=\'row justify-content-center\'>\n" +
                "                    <i class=\'" + data[loop].iconClass + " cvIcons text-right col-5 px-0\'></i><p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + data[loop].name + "</p></li>\n" +
                "            </ul>")

        }
    });

    // Append profile.json into HTML
    $.ajax({
        url: "ajax/profile.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#profile").append("<div>\n" +
                "   <h3>" + data[loop].name + "</h3>\n" +
                "   <div>\n" +
                "        <p>" + data[loop].info + "</p>\n" +
                "    </div>\n" +
                "</div>")

        }
    });

    // Append Header into HTML
    $("#header").append("<h1 class=\'col-12\'>Curriculum Vitae<br><span class=\'font-weight-bold\'>Thomas HERMANT</span></h1>\n" +
        "<img id=\'profilePicture\' src=\'libs/img/profilePicture.jpg\' alt=\'Photo Thomas Hermant\'\n" +
        "    title=\'Photo Thomas Hermant\'>\n" +
        " <p id=\'intro\' class=\'col-12 font-italic\'>Développeur Web & Web Mobile junior, diplômé de lettres, avec l\'expérience d'internet et de la vie en entreprise.</p>");

    // Menu Accordeon JQuery UI
    $("#accordion").accordion({
        heightStyle: "content"
    });

    // Append formation.json into HTML
    $.ajax({
        url: "ajax/hobbies.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#hobbies").append("<hr><div id=\'hobby" + loop + "\' class=\'hobbies row\'>\n" +
                "            <div id=\'name" + loop + "\' class=\'col-12 font-weight-bold\'>" + data[loop].name + "</div>\n" +
                "            <div class=\'col-12\'>\n" +
                "                <p  id=\'detail" + loop + "\'>" + data[loop].detail + "</p>\n" +
                "            </div>\n" +
                "        </div>"
            )

        }
    });

});