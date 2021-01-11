// Popup logic extensions for the Steps project, Lars Gottlieb 2018-20
/*jshint esversion: 6 */

let timeouts = [];

UI.ShowOverlay = function() {$("#Overlay").show();};
UI.HideOverlay = function(event) 
{
    if (event == undefined ||  !$(event.target).hasClass("DontCloseOverlay"))
    {
        $("#Overlay").hide();    
        for (let i=0; i<timeouts.length; i++) 
            clearTimeout(timeouts[i]);
    }
    else
        if ($(event.target).hasClass("maillink"))
            window.open("mailto:lars@secondstep.dk");
};

UI.PopUpLP = function()
{
	$("#OverlayContent").html("<h3>Legend Points breakdown</h3>");
    $("#OverlayContent").append($("<div>", {id : "LpBreakdownWrapper", html : CharacterManager.GetLPBreakdown() }));
    $("#OverlayContent").append($("<div>", {"id" : "note", "html" : "Click anywhere to close", style : "position: fixed; top: 2.5vw; right: 4vw;"}));

	UI.ShowOverlay();
};

UI.PopUpHealth = function()
{
	$("#OverlayContent").html(CharacterManager.GetHealthBreakdown().replace(/\n/g,"<br/>"));
    $("#OverlayContent").append($("<div>", {"id" : "note", "html" : "Click anywhere to close", style : "position: fixed; top: 2.5vw; right: 4vw;"}));

	UI.ShowOverlay();
};

UI.PopUpBlood = function()
{
    $("#OverlayContent").html(CharacterManager.GetBloodBreakdown().replace(/\n/g,"<br/>"));
    $("#OverlayContent").append($("<div>", {"id" : "note", "html" : "Click anywhere to close", style : "position: fixed; top: 2.5vw; right: 4vw;"}));

    UI.ShowOverlay();
};

UI.PopUpAbout = function()
{
	let $builder = $("<div>", {"id" : "AboutBody"});
    $builder.append($("<p>",  {"class" : "Logo",  "html" : "Steps"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "An interactive character sheet for Earthdawn, 4th edition"}));
    $builder.append($("<p>",  {"class" : "legalese", "html" : "Version " + version}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "Made by Lars Gottlieb, 2018-20"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "With help from"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "Sebastian Kahrs, Jonathan Foster and João Isidro"}));
    $builder.append($("<p>",  {"class" : "legalese", "html" : "Bart Osz, Belenus, Ben Lawson, Brandon Hinkle, BTL, Gortatrien, James Hunt, Jean-Baptiste Faure, Joel Fowler"}));
    $builder.append($("<p>",  {"class" : "legalese", "html" : "John Burroughs, Jonathan Barrette, Matthew Holtz, Michael Olsen, Péter Simon, Randi Rasmussen, Rob Porter"}));
    $builder.append($("<p>",  {"class" : "legalese", "html" : "Jeppe Hansen, Mads Boie Pedersen, Dominik Ziga, Lars Thorsen, Ann Louise Gottlieb"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "Character Portraits: Sade, Kirstine Wistrup"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"html" : "Please report any problems you encounter or just thoughts and ideas in general to <a 'href'='mailto:lars@secondstep.dk' class='maillink DontCloseOverlay'>lars@secondstep.dk</a>"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "legalese", "html" : "Steps is written in Sublime Text 3 using html and js with jQuery, lodash, uuidv4, Bowser, and AutoComplete libraries."}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "legalese DontCloseOverlay", "html" : "Click here to see the dev log", id : "ShowLog"}));
    $builder.append($("<p>",  {"class" : "legalese", "html" : "Click anywhere else to close"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "legalese", "html" : "This is a piece of fan work"}));
    $builder.append($("<p>",  {"class" : "legalese", "html" : "Care has been taken to make sure the players need the books to play"}));
    $builder.append($("<p>",  {"class" : "legalese", "html" : "This project is in no way intended as a challenge to the creators copyright"}));


	$("#OverlayContent").html("");
	$("#OverlayContent").append($builder);

    $("#ShowLog").click(function(event){UI.PopUpDevLog();});
    $(".maillink").click(function(event){window.open("mailto:lars@secondstep.dk");event.stopPropagation();});

	UI.ShowOverlay();
};

UI.PopUpWelcome = function()
{
    UI.CheckSafariiOS();

    let $builder =  $("<div>", {"id" : "WelcomeBody", "style" : "text-align: center;"});
    $builder.append($("<p>",   {"html" : "&nbsp;"}));
    $builder.append($("<p>",   {"html" : "&nbsp;"}));
    $builder.append($("<p>",   {"class" : "Logo",  "html" : "Steps"}));
    $builder.append($("<p>",   {"html" : "Welcome to the Steps open beta"}));
    $builder.append($("<p>",   {"html" : "&nbsp;"}));
    $builder.append($("<p>",   {"html" : "Please send any problems you encounter to <a 'href'='mailto:lars@secondstep.dk' class='maillink DontCloseOverlay'>lars@secondstep.dk</a>"}));
    $builder.append($("<p>",   {"html" : "&nbsp;"}));
    $builder.append($("<p>",   {"html" : "&nbsp;"}));
    $builder.append($("<p>",   {"html" : "&nbsp;"}));
    $builder.append($("<p>",   {"html" : "This splash will close in <span id='Countdown'>3</span> seconds", "style" : "font-size: .8em;"}));
    $builder.append($("<div>", {"id" : "note", "html" : "Click anywhere to close", style : "position: fixed; top: 2.5vw; right: 4vw;"}));

    $("#OverlayContent").html("");
    $("#OverlayContent").append($builder);

    UI.ShowOverlay();

    timeouts.push(setTimeout(function(){$("#Countdown").html("2");}, 1000 ));
    timeouts.push(setTimeout(function(){$("#Countdown").html("1");}, 2000 ));
    timeouts.push(setTimeout(UI.HideOverlay, 3000 ));
};

UI.CheckSafariiOS = function()
{
    let browser = bowser.getParser(window.navigator.userAgent);

    if (browser.parsedResult.os.name == "iOS" && browser.parsedResult.browser.name != "Safari")
        alert("Please note that as of now, on iPads and iPhones, save and load doesn't work in anything but Safari\n. As far as I can tell, you're using \n" + browser.parsedResult.browser.name + " on " + browser.parsedResult.os.name + ".");
}

UI.PopUpDevLog = function()
{
    let $builder =  $("<div>", {"id" : "LogBody"});
    $builder.append($("<div>", {"id" : "note", "html" : "Click anywhere to close", style : "position: fixed; top: 2.5vw; right: 4vw;"}));

    $("#OverlayContent").html("");
    $("#OverlayContent").append("Latest update: " + fetchHeader(location.href+"/Notes/Todo.txt", 'Last-Modified'));

    $builder.append($("<div>", {"id" : "Plans"}));
    $builder.append($("<div>", {"id" : "Log"}));

    $("#OverlayContent").append($builder);

    $.get("./Notes/Todo.html", function(response) {let log = response; $("#Log").append(log);});
    $.get("./Notes/Log.html", function(response) {let log = response; $("#Plans").append(log);});

    UI.ShowOverlay();
};

UI.PopUpShareString = function()
{
    let $builder =  $("<div>",   {"id" : "ShareBody"});
    $builder.append($("<input>", {"id" : "Sharelink", "Type" : "Text", "class": "DontCloseOverlay", "style" : "width: 100%;", "value" : "http://Secondstep.dk/Steps/?Link=" + encodeURIComponent(JSON.stringify(Character))}));
    $builder.append($("<div>",   {"id" : "note", "html" : "Click anywhere to close", style : "position: fixed; top: 2.5vw; right: 4vw;"}));

    $("#OverlayContent").html("");
    $("#OverlayContent").append($builder);

    UI.ShowOverlay();
};

UI.PopUpHelp = function()
{
    let $builder = $("<div>", {"id" : "HelpBody"});
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "Logo",  "html" : "Steps"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&npsp;"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "Once the page loads, there is no interaction with the server. Nothing is loaded or saved anywhere. Please save your character often (o:"}));

    $("#OverlayContent").html("");
    $("#OverlayContent").append($builder);

    UI.ShowOverlay();
}























