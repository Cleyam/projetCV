// Function to generate skill table
function comp(a, b, c) {
    $.ajax({
               url: a,
               method: "GET"
           }).done(function (data) {
        $.each(data, function (key, val) {
            $(b).append("<ul id=\'" + c + "" + key + "\' class=\'whiteText col-12 list-unstyled\'><li class=\'row justify-content-center\'>" + (val.iconClass != undefined ? "<i class=\'" + val.iconClass + " cvIcons text-right col-5 px-0\'></i>" : "") + "<p class=\'font-weight-bold text-dark my-auto col-7 list-unstyled\'>" + val.name + "</p>" + (val.info != undefined ? "<p class=\' text-dark my-auto col-5 list-unstyled\'>" + val.info + "</p>" : "") + "</li></ul>")
        })
    });
}

$(function () {
    // Append structure into HTML
    $("body").prepend("<div id=\"structure\" class=\"container-fluid px-0\"><header id=\"header\" class=\"row text-center bgDarkBlue text-light justify-content-center shadow-sm\"></header><div class=\"d-md-flex justify-content-around\"><div id=\"leftBarMd\" class=\"col-md-4\"><section id=\"profile\" class=\"justify-content-center col-12 bg-light px-0 text-center shadow-sm\"></section><section id=\"accordion\" class=\"col-12\"></section></div><div class=\"col-md-8\"><section id=\"formation\" class=\"col-12 text-center bg-light shadow-sm\"></section><section id=\"experience\" class=\"col-12 text-center bg-light shadow-sm\"></section><section id=\"hobbies\" class=\"col-12 text-center bg-light shadow-sm\"></section></div></div><div id='contact' class='justify-content-center bg-light'></div></div>");

    // Append Header into HTML
    $("#header").append("<h1 class=\'col-12\'>Curriculum Vitae<br><span class=\'font-weight-bold\'>Thomas HERMANT</span></h1><img id=\'profilePicture\' src=\'libs/img/profilePicture.png\' alt=\'Photo Thomas Hermant\' title=\'Photo Thomas Hermant\'><p id=\'intro\' class=\'col-12 font-italic\'>Développeur Web & Web Mobile junior, diplômé de lettres, avec l\'expérience d'internet et de la vie en entreprise.</p>");

    // Append profile.json into HTML
    $.ajax({
               url: "ajax/profile.json",
               method: "GET"
           }).done(function (data) {
        $.each(data, function (key, val) {
            $("#profile").append("<div><h3>" + val.name + "</h3><div><p>" + val.info + "</p></div></div>")
        })
    });

    // Append accordion into HTML
    let accordion = $("#accordion");
    accordion.append(" <h3>Langages</h3><div id=\"languages\" class=\"col-12 px-0\"></div><h3>Frameworks</h3><div id=\"frameworks\" class=\"col-12 px-0\"></div><h3>Technologies</h3><div id=\"technologies\" class=\"col-12 px-0\"></div><h3>CMS</h3><div id=\"cms\" class=\"col-12 px-0\"></div><h3>Outils de développement</h3><div id=\"devTools\" class=\"col-12 px-0\"></div><h3>Outils de graphisme</h3><div id=\"graphicTools\" class=\"col-12 px-0\"></div><h3>Outils bureautiques</h3><div id=\"desktopTools\" class=\"col-12 px-0\"></div><h3>Langues</h3><div id=\"spokenLanguages\" class=\"col-12 px-0\"></div>");

    // Menu Accordeon JQuery UI
    accordion.accordion({
                            heightStyle: "content"
                        });

    // Append skill tables into HTML
    $.ajax({
               url: "ajax/skills/skills.json",
               method: "GET"
           }).done(function (data) {
        $.each(data, function (key, val) {
            comp(val.json, val.anchor, val.ul);
        });
    });

    // Append formation.json into HTML
    $("#formation").append($("<h3>", {class: "font-weight-bold", text: "Formations"}));
    $.ajax({
               url: "ajax/formation.json",
               method: "GET"
           }).done(function (data) {
        $.each(data, function (key, val) {
            $("#formation").append("<hr><div id=\'formation" + key + "\' class=\'formation row\'><div id=\'periode" + key + "\' class=\'col-12\'>" + val.periode + "</div><div class=\'col-12\'><p  id=\'name" + key + "\' class=\'font-weight-bold\'>" + val.name + "</p><div id=\'place" + key + "\'>" + val.place + "</div></div></div>")
        })
    });

    // Append experience.json into HTML
    $("#experience").append("<h3 class=\"font-weight-bold\">Expériences professionnelles</h3>");
    $.ajax({
               url: "ajax/experience.json",
               method: "GET"
           }).done(function (data) {
        $.each(data, function (key, val) {
            let ajout = "<hr><div id=\'experience" + key + "\' class=\'formation row\'><div id=\'periode" + key + "\' class=\'col-12\'>" + val.periode + "</div><div class=\'col-12\'><p  id=\'name" + key + "\' class=\'font-weight-bold\'>" + val.name + "</p><div id=\'place" + key + "\' class=\'font-weight-bold\'>" + val.place + "</div><div id=\'detail" + key + "\'><button id=\'buttonDetail" + key + "\' class=\'btn btn-primary bgDarkBlue btn-lg btnMission\'>Missions</button></div></div></div>";

            $("#experience").append(ajout);
            $("#buttonDetail" + key).on("click", function () {
                let popin = $("<ul>", {id: "detailList"});
                for (let loop = 0; loop < val.detail.length; loop++) {
                    popin.append("<li class=\'experienceDetail\'>" + val.detail[loop] + "</li>")
                }
                popin.dialog({
                                 classes: {
                                     "ui-dialog-titlebar": "bgDarkBlue",
                                     "ui-dialog": "modalWidth"
                                 },
                                 position: {
                                     my: "center", at: "center"
                                 },
                                 resizable: false
                             });
            });
        })

    });

    // Append hobbies.json into HTML
    $("#hobbies").append("<h3 class=\"font-weight-bold\">Centres d'intérêt</h3>");
    $.ajax({
               url: "ajax/hobbies.json",
               method: "GET"
           }).done(function (data) {
        $.each(data, function (key, val) {
            $("#hobbies").append("<hr><div id=\'hobby" + key + "\' class=\'hobbies row\'><div id=\'name" + key + "\' class=\'col-12 font-weight-bold\'>" + val.name + "</div><div class=\'col-12\'><p  id=\'detail" + key + "\'>" + val.detail + "</p></div></div>")
        })
    });

    // Insert contact form into HTML on scroll to page bottom
    let contactLoaded = false;
    $.ajax({
               url: "ajax/contact.html",
               method: "GET"
           }).done(function (data) {
        $(window).on("scroll", function () {
            if (!contactLoaded) {
                if ($(window).scrollTop() == ($(document).height() - window.innerHeight)) {
                    $("#contact").html(data);
                    contactLoaded = true;
                    // Generate sub-select on selection
                    $.ajax({
                               url: "ajax/contactSelect.json",
                               method: "GET"
                           }).done(function (data) {
                        $("#objet").on("change", function () {
                            $("#subSelect").html("");
                            for (let loop = 0; loop < data.length; loop++) {
                                if ($("#objet").val() == data[loop].id) {
                                    $("#subSelect").append($("<select>", {id: "subObject", class: "form-control"}));
                                    $.each(data[loop].options, function (key, val) {
                                        $("#subObject").append($("<option>", {value: key, text: val}))
                                    });
                                }
                            }
                        })
                    })
                }
            }
        });
    });


});
