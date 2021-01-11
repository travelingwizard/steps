// Dialogue logic extensions for the Steps project, Lars Gottlieb 2018-20
/*jshint esversion: 6 */

UI.ShowDialogue = function() 
{
    let $dialogue = $("<div>", {"class" : "dialogue", id : "Dialogue"});
    $("body").append($dialogue);
};

UI.HideDialogue = function() 
{
    $("#Dialogue").remove();
};

UI.ShowOptionsDialogue = function()
{
    let $builder = $("<div>",    {"class" : "optionsWrapper"});
    $builder.append($("<h1>", {text : "Options", "class" : "dialogueHeader"}));
    
//    $builder.append($("<p>", {text : "INCOMPLETE", "style" : "position: absolute;z-index:-1;top:0;bottom:0;left:0;right:0;font-size:216pt;-webkit-text-stroke: 3px #d8d8d8; color: transparent;"}));

    // Themes
    let $themeWrapper = $("<div>", {"id" : "ThemeWrapper", "class" : "themeWrapper"}); 
    $themeWrapper.append($("<span>", {"html" : "Theme :"}));
    let $themeSelect = $("<select>", {"id" : "ThemeSelect", "class" : "themeSelect"}); 
    for (let themeIndex = 0; themeIndex < Library.Themes.length; themeIndex++) 
        $themeSelect.append($("<option>", {value : Library.Themes[themeIndex].ID, text : Library.Themes[themeIndex].Name}));
    $themeSelect.val(UI.theme);
    $themeWrapper.append($themeSelect);
    $builder.append($themeWrapper);

    const Books = Library.Options.find(o => o.Name = "Books");

    let $bookWrapper = $("<div>",{id : "BookWrapper", class : "bookWrapper", html : Books.Text});

    let $topList  = $("<ul>");
    let $allItem  = $("<li>");
    let $allInput = $("<input>", {id : "OptionsAll", "type" : "checkbox", "data-id":"All", "data-name" : "All"})
    if (Character.Options.Books.toLowerCase().includes("all"))
        $allInput.prop('checked', true);

    $allItem.append($allInput);
    $allItem.append($("<label>", {"for" : "OptionsAll", "text" : " All"}));
    $topList.append($allItem);

    let $allList  = $("<ul>");
    let $officialItem  = $("<li>");
    let $officialInput = $("<input>", {id : "OptionsOfficial", "type" : "checkbox", "data-id":"Official", "data-name" : "Official"})
    if (Character.Options.Books.toLowerCase().includes("all") || Character.Options.Books.toLowerCase().includes("official"))
        $officialInput.prop('checked', true);
    $officialItem.append($officialInput);
    $officialItem.append($("<label>", {"for" : "OptionsOfficial", "text" : " Official"}));

    let $officialList = $("<ul>");
    let BookItems = ["Races","Talents","Knacks","Skills","ArtisanSkills","KnowledgeSkills","Spells","Disciplines","Equipment","Magic","Paths"]; // Unused - yet =P
 
    for (var i = 0; i < Books.All.Official.length; i++) 
    {
        if(Books.All.Official[i].Required != "true")
        {
            let $thisItem = $("<li>");
            let $thisInput, $thisLabel;
            $thisInput = $("<input>", {id : "Options"+Books.All.Official[i].ID, "type" : "checkbox", "data-id" : Books.All.Official[i].ID, "data-name" : Books.All.Official[i].Description})
            if (Character.Options.Books.toLowerCase().includes("all") || Character.Options.Books.toLowerCase().includes("official") || Character.Options.Books.toLowerCase().includes(Books.All.Official[i].ID.toLowerCase()))
                $thisInput.prop('checked', true);
            $thisLabel = $("<label>", {"for" : "Options"+Books.All.Official[i].ID, "text" : " " + Books.All.Official[i].Description});
            $thisItem.append($thisInput);
            $thisItem.append($thisLabel);
            $officialList.append($thisItem);
        }
    }
    $officialItem.append($officialList.clone());
    $allList.append($officialItem);

    let $unOfficialItem  = $("<li>");
    let $unOfficialInput = $("<input>", {id : "OptionsUnofficial", "type" : "checkbox", "data-id":"Unofficial", "data-name" : "Unofficial"})
    if (Character.Options.Books.toLowerCase().includes("all") || Character.Options.Books.toLowerCase().includes("unfficial"))
        $unOfficialInput.prop('checked', true);
    $unOfficialItem.append($unOfficialInput);
    $unOfficialItem.append($("<label>", {"for" : "OptionsUnofficial", "text" : " Unofficial"}));

    let $unOfficialList = $("<ul>");
    for (var i = 0; i < Books.All.Unofficial.length; i++) 
    {
        let $thisItem = $("<li>");
        let $thisInput = $("<input>", {id : "Options"+Books.All.Unofficial[i].ID, "type" : "checkbox", "data-id" : Books.All.Unofficial[i].ID, "data-name" : Books.All.Unofficial[i].Description})
        if (Character.Options.Books.toLowerCase().includes("all") || Character.Options.Books.toLowerCase().includes("unfficial") || Character.Options.Books.toLowerCase().includes(Books.All.Unofficial[i].ID.toLowerCase()))
            $thisInput.prop('checked', true);
        $thisItem.append($thisInput);
        $thisItem.append($("<label>", {"for" : "Options"+Books.All.Unofficial[i].ID, "text" : " " + Books.All.Unofficial[i].Description}));
        $unOfficialList.append($thisItem);
    }
    $unOfficialItem.append($unOfficialList.clone());

    $allList.append($unOfficialItem);
    $allItem.append($allList);

    $bookWrapper.append($topList);

    $builder.append($bookWrapper);

    // Loop over options 
    const libOptions = Library.Options;
    let $tableWrapper = $("<div>", {"class" : "dialogueTableWrapper"});
    let $table = $("<table>",    {"class" : "dialogueTable"});

    let $thisLine, $thisCell;

    for (let thisOptionIndex = 0; thisOptionIndex < libOptions.length; thisOptionIndex++) 
    {
        let $thisLine = $("<tr>", {class : (thisOptionIndex %2 != 1 ? "shaded" : "")})
        switch (libOptions[thisOptionIndex].Type)
        {
            case "String":
                $thisLine.append($("<td>", {text : libOptions[thisOptionIndex].Text, class : "dialogueOptionLabel"}));
                $thisCell = $("<td>");
                $stringSelect = $("<select>", {id : "DialogueOption_"+libOptions[thisOptionIndex].Name, class : "dialogueOptionSelect"});
                for (var thisValueIndex = 0; thisValueIndex < libOptions[thisOptionIndex].Values.length; thisValueIndex++) 
                    if (libOptions[thisOptionIndex].Values[thisValueIndex].Disabled == "true")
                        $stringSelect.append($("<option>", {value : libOptions[thisOptionIndex].Values[thisValueIndex].ID, text : libOptions[thisOptionIndex].Values[thisValueIndex].Description + (libOptions[thisOptionIndex].Values[thisValueIndex].Default == "true" ? " (default)" : ""), disabled : "disabled"}));
                    else
                        $stringSelect.append($("<option>", {value : libOptions[thisOptionIndex].Values[thisValueIndex].ID, text : libOptions[thisOptionIndex].Values[thisValueIndex].Description + (libOptions[thisOptionIndex].Values[thisValueIndex].Default == "true" ? " (default)" : "")}));
                $stringSelect.val(Character.Options[libOptions[thisOptionIndex].Name]);
                $thisCell.append($stringSelect);
                $thisLine.append($thisCell);
                $table.append($thisLine);
                break;
            case "Number":
                $thisLine.append($("<td>", {text : libOptions[thisOptionIndex].Text, class : "dialogueOptionLabel"}));
                $thisCell = $("<td>");
                $thisCell.append(UI.BuildNumbersSelect(libOptions[thisOptionIndex].min, libOptions[thisOptionIndex].max, Character.Options[libOptions[thisOptionIndex].Name], "DialogueOption_"+libOptions[thisOptionIndex].Name, "dialogueOptionSelect"));
                $thisLine.append($thisCell);
                $table.append($thisLine);
                break;
        }
    }
    $tableWrapper.append($table);
    $builder.append($tableWrapper);
  
    let $buttonWrapper = $("<div>", {class : "dialogueButtonWrapper"});
    $buttonWrapper.append($("<div>", {"id" : "CancelButton", "class" : "menuButton", "style" : "display: inline-block;", "html" : "Cancel", "onClick" : "UI.HideDialogue();"}));
    $buttonWrapper.append($("<div>", {"id" : "OKButton",     "class" : "menuButton", "style" : "display: inline-block;", "html" : "OK",     "onClick" : "UI.ParseDialogueOptions();"}));
    $builder.append($buttonWrapper);

    UI.ShowDialogue();
    $("#Dialogue").append($builder);

    $('#BookWrapper li :checkbox').on('click', UI.HandleNestedCheckboxes); 
}

UI.ParseDialogueOptions = function()
{
    // Build books string 
    let bookOptions = "";
    const Books = Library.Options.find(o => o.Name = "Books");

    if ($("#OptionsAll").is(':checked'))
        bookOptions = "All";
    else
    {
        if ($("#OptionsOfficial").is(':checked'))
            bookOptions = "Official";
        else
        {
            for (var i = 0; i < Books.All.Official.length; i++) 
                if ($("#Options"+Books.All.Official[i].ID).is(':checked'))
                    bookOptions += " " + Books.All.Official[i].ID;
        }
        if ($("#OptionsUnofficial").is(':checked'))
            bookOptions += " Unofficial";
        else
        {
            for (var i = 0; i < Books.All.Unofficial.length; i++) 
                if ($("#Options"+Books.All.Unofficial[i].ID).is(':checked'))
                    bookOptions += " " + Books.All.Unofficial[i].ID;
        }
    }

    bookOptions = bookOptions.trim();
 
    // Check if something's been killed
    let TestLibrary = _.cloneDeep(Library);
    let TestCharacter = _.cloneDeep(Character);

    TestCharacter.Options.Books = bookOptions;

    console.log("Grabbing books to test for things no longer available");

    TestLibrary.GrabBooks(bookOptions);

    let killedOptions = "";
    // Races
    if (TestLibrary.GetRace(Character.Race) == undefined)
    {
        killedOptions += "\nRace: " + Library.GetRace(Character.Race).Name;
        TestCharacter.Race = "ED4Dwarf";
    }

    // Talents
    for (let i=0; i<Character.Talents.length; i++)
        if (Character.Talents[i].ID != "Empty" && TestLibrary.GetTalent(Character.Talents[i].ID) == undefined)
        {
            killedOptions += "\nTalent: " + Library.GetTalent(Character.Talents[i].ID).Name;
            TestCharacter.Talents[i].ID = "Empty";
        }

    // Versatility Talents
    if (Character.Versatility != undefined)
        for (let i=0; i<Character.Versatility.length; i++)
            if (Character.Versatility[i].ID != "Empty" && TestLibrary.GetTalent(Character.Versatility[i].ID) == undefined)
                TestCharacter.Versatility[i].ID = "Empty";


    // Knacks
    if (Character.Knacks != undefined)
        for (let i=0; i<Character.Knacks.length; i++)
            if (Character.Knacks[i].ID != "Empty" && TestLibrary.GetKnack(Character.Knacks[i].ID) == undefined)
            {
                killedOptions += "\nKnack: " + Library.GetKnack(Character.Knacks[i].ID).Name;
                TestCharacter.Knacks[i].ID = "Empty";
            }

    // Skills
    for (let i=0; i<Character.Skills.length; i++)
        if (Character.Skills[i].ID != "Empty" && TestLibrary.GetSkill(Character.Skills[i].ID) == undefined)
        {
            killedOptions += "\nSkill: " + Library.GetSkill(Character.Skills[i].ID).Name;
            TestCharacter.Skills[i].ID = "Empty";
        }

    // Spells
    if (Character.Spells != undefined)
        for (let i=0; i<Character.Spells.length; i++)
            if (Character.Spells[i].ID != "Empty" && TestLibrary.GetSpell(Character.Spells[i].ID) == undefined)
            {
                killedOptions += "\nSpell: " + Library.GetSpell(Character.Spells[i].ID).Name;
                TestCharacter.Spells[i].ID = "Empty";
            }

    // Disciplines
    for (let i=0; i<Character.Disciplines.length; i++)
        if (Character.Disciplines[i].ID != "Empty" && TestLibrary.GetDiscipline(Character.Disciplines[i].ID) == undefined)
        {
            killedOptions += "\nDiscipline: " + Library.GetDiscipline(Character.Disciplines[i].ID).Name;
            TestCharacter.Disciplines[i].ID = "Empty";
        }

    // Equipment
    for (let i=0; i<Character.Equipment.length; i++)
        if (Character.Equipment[i].ID != "Empty" && TestLibrary.GetEquipment(Character.Equipment[i].ID) == undefined)
        {
            killedOptions += "\nEquipment: " + Library.GetEquipment(Character.Equipment[i].ID).Name;
            TestCharacter.Equipment[i].ID = "Empty";
        }

    // Magic
    if (Character.Magic != undefined)
        for (let i=0; i<Character.Magic.length; i++)
            if (Character.Magic[i].ID != "Empty" && TestLibrary.GetMagic(Character.Magic[i].ID) == undefined)
            { 
                killedOptions += "\nThread / Blood Magic: " + Library.GetMagic(Character.Magic[i].ID).Name;
                TestCharacter.Magic[i].ID = "Empty";
            }                

    // Paths
    if (Character.Paths != undefined)
        for (let i=0; i<Character.Paths.length; i++)
            if (Character.Paths[i].ID != "Empty" && TestLibrary.GetPath(Character.Paths[i].ID) == undefined)
            {
                killedOptions += "\nPath: " + Library.GetPath(Character.Paths[i].ID).Name;
                TestCharacter.Paths[i].ID = "Empty";
            }

    if (killedOptions != "" && !confirm("The character has used the following things from books no longer selected:\n" + killedOptions + "\n\nAre you sure?"))
        return; 

    const libOptions = Library.Options;
    for (let thisOptionIndex = 0; thisOptionIndex < libOptions.length; thisOptionIndex++) 
        if(libOptions[thisOptionIndex].Type == "String" || libOptions[thisOptionIndex].Type == "Number")
            TestCharacter.Options[libOptions[thisOptionIndex].Name] = $("#DialogueOption_"+libOptions[thisOptionIndex].Name).val();

    Character = TestCharacter;

    Library.GrabBooks(Character.Options.Books);
    Library.GrabStepDice(Character.Options.StepDice);
    CharacterManager.ResetBuffer();
    CharacterManager.CheckPaths();
    CharacterManager.RebuildTalentList();
    CharacterManager.CheckKnacks();

    UI.SetTheme($("#ThemeSelect").val());

    history.replaceState({}, null, window.location.origin + window.location.pathname + "?" + (IO.qs("Character")+"" == "" || IO.qs("Character") == null ? "" : "Character="+IO.qs("Character")+"&") + (UI.theme == "0" ? "" : "theme=" +UI.theme));

    UI.PopulateSelects();
    UI.PushCharacter();
    UI.Redraw();

    UI.HideDialogue();
}

UI.HandleNestedCheckboxes = function() // Logic from http://jsfiddle.net/2qd3zh1p/
{    
    var $chk = $(this), $li = $chk.closest('li'), $ul, $parent;
    if ($li.has('ul')) {
        $li.find(':checkbox').not(this).prop('checked', this.checked)
    }
    do {
        $ul = $li.parent();
        $parent = $ul.siblings(':checkbox');
        if ($chk.is(':checked')) {
            $parent.prop('checked', $ul.has(':checkbox:not(:checked)').length == 0)
        } else {
            $parent.prop('checked', false)
        }
        $chk = $parent;
        $li = $chk.closest('li');
    } while ($ul.is(':not(.someclass)'));
}

UI.PopUpSelectPregen = function()
{
    let $builder = $("<div>",    {"id" : "Dialogue",     "style" : "position:fixed; left:2.3vw; right:2.3vw; top:2.3vw; bottom:2.3vw; padding: 3vw;"});
    let $Select  = $("<select>", {"id" : "selectPregen", "style" : "border: 1px solid darkgrey;"});
    $Select.append($("<option>", {value : "Empty", text : "(Select pregen)"}));
    
    for (const key of Object.keys(pregens)) 
        $Select.append($("<option>", {value : key, text : pregens[key].Basic.Name}));

    $builder.append($Select);   
    $builder.append($("<br>"));

    $builder.append($("<div>", {"id" : "CloseButton", "class" : "menuButton", "style" : "display: inline-block;", "html" : "Cancel"}));
    $builder.append($("<div>", {"id" : "OKButton",    "class" : "menuButton", "style" : "display: inline-block;", "html" : "OK"}));

    $("#OverlayContent").html("");
    $("#OverlayContent").append($builder);

    $("#Dialogue").click(function(event){event.stopPropagation();});
    $("#CloseButton").click(UI.HideOverlay);
    $("#OKButton").click(function(event)
        {
            if ($("#selectPregen").val() != "Empty") 
                IO.GrabCharacter($("#selectPregen").val()); 
            UI.HideOverlay();
        });

    UI.ShowOverlay();
};


UI.ChoosePortraitURL = function()
{
    let $builder = $("<div>", {"class" : "ChoosePortraitURLWrapper"});
 
    $builder.append($("<h3>", {"text" : "Choose portrait", "style" : "width:100%; text-align:center;"}));

    let $left  = $("<div>", {"class" : "portraitsLeftWrapper"});
    let $right = $("<div>", {"class" : "portraitsRightWrapper"});

    $left.append($("<h4>", {"text" : "Paste in your portrait URL: "}));
    $left.append($("<input>", {"id" : "PortraitURLCandidate", "type" : "text", "value" : (Character.PortraitURL != undefined ? Character.PortraitURL : ""), "style" : "border-bottom: 1px solid black;width:55vw; text-align: left;text-align-last: left; padding: .2vw;"}));
    $left.append($("<div>", {"id" : "TestPortraitURL", "class" : "menuButton", "style" : "display: inline-block;", "html" : ">>", "onClick" : "UI.TestPortraitURL();"}));

    $left.append($("<h4>", {"text" : "Or choose a preset: "}));

    let $thumbsWrapper = $("<div>", {"class" : "thumbsWrapper"});
    for (let i = 1; i <= 43; i++) 
    {
        let $thumbWrapper = $("<div>", {"class" : "portraitThumbnail", id : "thumb" + i});
        $thumbWrapper.append($("<img>", {"src" : "./img/portraits/Thumb"+i+".jpg"}));
        $thumbsWrapper.append($thumbWrapper);
    }
//    $thumbsWrapper.append($("<div>", {id : "DoxThumb", "class" : "portraitThumbnail", "html": "<img src='./img/portraits/ThumbDox.jpg'></img>"}));
    
    $left.append($thumbsWrapper);
    $builder.append($left);
    
    $right.append($("<div>", {"class" : "portraitPreview", "html": "<p>Preview</p><img id='PortraitPreview' src='" + Character.PortraitURL + "'></img>"}));

    let $buttonWrapper = $("<div>", {class : "dialogueButtonWrapper"});
    $buttonWrapper.append($("<div>", {"id" : "CancelButton", "class" : "menuButton", "style" : "display: inline-block;", "html" : "Cancel", "onClick" : "UI.HideDialogue();"}));
    $buttonWrapper.append($("<div>", {"id" : "OKButton",     "class" : "menuButton", "style" : "display: inline-block;", "html" : "OK",     "onClick" : "UI.SetPortrait();"}));
    $builder.append($buttonWrapper);

    $right.append($buttonWrapper);
    $builder.append($right);

    UI.ShowDialogue();

    $("#Dialogue").append($builder);

    $(".portraitThumbnail").click(function(event)
        {
            if ($(this).attr('id') == "DoxThumb") 
                $("#PortraitPreview").prop("src", "./img/portraits/Dox.jpg"); 
            else 
                $("#PortraitPreview").prop("src", "./img/portraits/Sade" + $(this).attr('id').slice(5) + ".jpg")
        });
}

UI.TestPortraitURL = function()
{
    UI.imageExists($("#PortraitURLCandidate").val(), function(exists) 
    {
        if (exists)
        {
            $("#PortraitPreview").attr('src', $("#PortraitURLCandidate").val());            
            $("#PortraitURLCandidate").css("background","");
        }
        else 
        {  
            $("#PortraitURLCandidate").css("background","pink");
            $("#PortraitPreview").attr('src', "./img/portraits/Empty.jpg");
        }
    });
}

UI.SetPortrait = function()
{
    console.log("Portrait set");
    Character.PortraitURL = $("#PortraitPreview").attr('src');
    UI.PushPortrait();
    UI.HideDialogue();
}

window.onerror = function (msg, url, lineNo, columnNo, error) 
{
    let $builder = $("<div>", {"id" : "ErrorBody"});
    $builder.append($("<h1>",  {"class" : "About", "html" : "Oops, something went wrong", "style" : "text-align: center"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "Error message: " + msg}));
    $builder.append($("<p>",  {"class" : "About", "html" : "URL: " + url}));
    $builder.append($("<p>",  {"class" : "About", "html" : "Line: " + lineNo}));
    $builder.append($("<p>",  {"class" : "About", "html" : "Column: " + columnNo}));
    $builder.append($("<p>",  {"class" : "About", "html" : "Error object: " + error}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"class" : "About", "html" : "&nbsp;"}));
    $builder.append($("<p>",  {"html" : "Please take a screenshot of this, write a description of what made things break, and send both to: <a 'href'='mailto:lars@secondstep.dk' class='maillink DontCloseOverlay'>lars@secondstep.dk</a>"}));
    $builder.append($("<p>",  {"html" : "I will fix it as soon as I can."}));
    $builder.append($("<p>",  {"class" : "About", "html" : "Thank you."}));

    let $buttonWrapper = $("<div>", {"style" : "text-align: center; margin-top: 2vw;"});
    $buttonWrapper.append($("<div>", {"id" : "OKButton",     "class" : "menuButton", "style" : "display: inline-block;", "html" : "OK", "onClick" : "UI.HideDialogue();"}));
    $builder.append($buttonWrapper);

    UI.ShowDialogue();
    $("#Dialogue").append($builder);

    return false;
};























