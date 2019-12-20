$(function () {
    $.ajax({
               url: "ajax/formation.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#formation").append("<div id=\'formation" + loop + "\' class=\'formation row\'>\n" +
                                       "            <div id=\'periode" + loop + "\' class=\'col-4\'>" + data[loop].periode + "</div>\n" +
                                       "            <div class=\'col-8\'>\n" +
                                       "                <div  id=\'name" + loop + "\'>" + data[loop].name + "</div>\n" +
                                       "                <div id=\'place" + loop + "\'>" + data[loop].place + "</div>\n" +
                                       "            </div>\n" +
                                       "        </div>"
            )

        }
    });
    $.ajax({
               url: "ajax/experience.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            let ajout = "<div id=\'experience" + loop + "\' class=\'formation row\'>\n";
            ajout += "<div id=\'periode" + loop + "\' class=\'col-4\'>" + data[loop].periode + "</div>\n";
            ajout += "<div class=\'col-8\'>\n";
            ajout += "<div  id=\'name" + loop + "\'>" + data[loop].name + "</div>\n";
            ajout += "<div id=\'place" + loop + "\'>" + data[loop].place + "</div>\n";
            ajout += "<div id=\'detail" + loop + "\'><ul class=\'list-unstyled\'>";
             for (let loopLI = 0; loopLI<= data[loop].detail.length; loopLI++){
                 ajout +=    "<li>"+data[loop].detail[loopLI]+"</li>"
            };
            ajout += "</ul></div>\n";
            ajout += "</div>\n";
            ajout += "</div>";
            $("#experience").append(ajout)

        }
    });
    $.ajax({
               url: "ajax/skills/languages.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
        $("#languages").append("<ul id=\'language"+loop+"\' class=\'whiteText col-12\'>\n" +
                               "                <li class=\'row justify-content-center col-12\'><i class=\'"+data[loop].iconClass+" cvIcons text-right col-4 px-0\'></i>\n" +
                               "                    <p class=\'font-weight-bold my-auto col-3\'>"+data[loop].name+"</p><p class=\'col-3\'>"+data[loop].level+"</p></li>\n" +
                               "            </ul>")

        }
    });

    $.ajax({
               url: "ajax/skills/frameworks.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#frameworks").append("<ul id=\'framework"+loop+"\' class=\'whiteText col-12\'>\n" +
                                       "                <li class=\'row justify-content-center col-12\'>\n" +
                                       "                    <p class=\'font-weight-bold my-auto col-3 offset-4\'>"+data[loop].name+"</p><p class=\'col-3\'>"+data[loop].level+"</p></li>\n" +
                                       "            </ul>")

        }
    });
    $.ajax({
               url: "ajax/skills/technologies.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#technologies").append("<ul id=\'techno"+loop+"\' class=\'whiteText col-12\'>\n" +
                                        "                <li class=\'row justify-content-center col-12\'>\n" +
                                        "                    <p class=\'font-weight-bold my-auto col-3 offset-4\'>"+data[loop].name+"</p><p class=\'col-3\'>"+data[loop].level+"</p></li>\n" +
                                        "            </ul>")

        }
    });
    $.ajax({
               url: "ajax/skills/devTools.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#devTools").append("<ul id=\'devTool"+loop+"\' class=\'whiteText col-12\'>\n" +
                                        "                <li class=\'row justify-content-center col-12\'>\n" +
                                        "                    <p class=\'font-weight-bold my-auto col-3 offset-4\'>"+data[loop].name+"</p><p class=\'col-3\'>"+data[loop].level+"</p></li>\n" +
                                        "            </ul>")

        }
    });
    $.ajax({
               url: "ajax/skills/graphicTools.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#graphicTools").append("<ul id=\'graphicTool"+loop+"\' class=\'whiteText col-12\'>\n" +
                                        "                <li class=\'row justify-content-center col-12\'>\n" +
                                        "                    <p class=\'font-weight-bold my-auto col-3 offset-4\'>"+data[loop].name+"</p><p class=\'col-3\'>"+data[loop].level+"</p></li>\n" +
                                        "            </ul>")

        }
    });
    $.ajax({
               url: "ajax/skills/desktopTools.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#desktopTools").append("<ul id=\'desktopTool"+loop+"\' class=\'whiteText col-12\'>\n" +
                                        "                <li class=\'row justify-content-center col-12\'>\n" +
                                        "                    <p class=\'font-weight-bold my-auto col-3 offset-4\'>"+data[loop].name+"</p><p class=\'col-3\'>"+data[loop].level+"</p></li>\n" +
                                        "            </ul>")

        }
    });


});