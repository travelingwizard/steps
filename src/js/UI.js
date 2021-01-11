// UI object for the Steps project, Lars Gottlieb 2018-20
/*jshint esversion: 6 */

let UI = new function()
{
    "use strict";

    this.Charactertouched = false;

    this.state = "Edit";
    this.theme = "0";

    this.SetTheme = function(theme)
    {
        if (theme == "papyrus")
            theme = "1";

        this.theme = theme;

        $("html").removeClass("grey");
        $("html").removeClass("blue");
        $("html").removeClass("green");
        $("html").removeClass("dark");
        $("html").removeClass("teal");
        $("html").removeClass("beige");
        $("html").removeClass("roman");
        $("html").removeClass("willow");

        if (theme + "" == "0")
        {
            $("html").removeClass("themed");
            $("html").addClass("beige");
            $("#Earthdawn_Sheet").css("background", "white");

            console.log("Basic theme set");

            return;
        }

        let libTheme = Library.GetTheme(this.theme);

        $("html").addClass("themed");

        $("#Earthdawn_Sheet").css("background-image","url('"+ libTheme.img + "')");
        $("#Earthdawn_Sheet").css("background-size", libTheme.Scaling);
        $(".container"      ).css("background", "rgba(255,255,255," + libTheme.Transparency + ")");

        $("html").addClass(libTheme.AccentBackground);

        if (libTheme.roman != undefined)
            $("html").addClass("roman");

        if (libTheme.Willow != undefined)
            $("html").addClass("willow");

        console.log("Theme '" + libTheme.Name + "' set");
    };

    this.PopulateSelects = function()
    {
        this.PopulateSheetSelects();
        this.PopulatePlaySelects();
    }

    this.PopulateSheetSelects = function()
    {
        $('#Race').html("");
        $('#DexPts').html(""); $('#DexInc').html("");
        $('#StrPts').html(""); $('#StrInc').html("");
        $('#TouPts').html(""); $('#TouInc').html("");
        $('#PerPts').html(""); $('#PerInc').html("");
        $('#WilPts').html(""); $('#WilInc').html("");
        $('#ChaPts').html(""); $('#ChaInc').html("");

        if (Library.Races.find(o => o.Unofficial != undefined) != undefined)
        {
            let previousOptGroupLabel = "Official";
            let $thisOptgroup = $("<optgroup>", {label : previousOptGroupLabel});


            for (let i = 0; i < Library.Races.length; i++) 
            {
                if (Library.Races[i].Unofficial != undefined && previousOptGroupLabel == "Official")
                {
                    $('#Race').append($thisOptgroup.clone());
                    previousOptGroupLabel = "Unofficial"
                    $thisOptgroup = $("<optgroup>", {label : previousOptGroupLabel});
                }
                $thisOptgroup.append($('<option>', {value:Library.Races[i].ID, text:Library.Races[i].Name}));
            }
            if ($thisOptgroup != undefined)
                $('#Race').append($thisOptgroup.clone());

        }
        else
            for (let i = 0; i < Library.Races.length; i++) 
                $('#Race').append($('<option>', {value:Library.Races[i].ID, text:Library.Races[i].Name}));

        for (let i = 0; i < Library.AttributeCost.length; i++) 
        {
            $('#DexPts').append($('<option>', {value:Library.AttributeCost[i].Cost, text:Library.AttributeCost[i].Modifier + " (" + Library.AttributeCost[i].Cost + " pts)"}));
            $('#StrPts').append($('<option>', {value:Library.AttributeCost[i].Cost, text:Library.AttributeCost[i].Modifier + " (" + Library.AttributeCost[i].Cost + " pts)"}));
            $('#TouPts').append($('<option>', {value:Library.AttributeCost[i].Cost, text:Library.AttributeCost[i].Modifier + " (" + Library.AttributeCost[i].Cost + " pts)"}));
            $('#PerPts').append($('<option>', {value:Library.AttributeCost[i].Cost, text:Library.AttributeCost[i].Modifier + " (" + Library.AttributeCost[i].Cost + " pts)"}));
            $('#WilPts').append($('<option>', {value:Library.AttributeCost[i].Cost, text:Library.AttributeCost[i].Modifier + " (" + Library.AttributeCost[i].Cost + " pts)"}));
            $('#ChaPts').append($('<option>', {value:Library.AttributeCost[i].Cost, text:Library.AttributeCost[i].Modifier + " (" + Library.AttributeCost[i].Cost + " pts)"}));
        }

        for (let i = 0; i <= Character.Options.MaxAttributeIncrease; i++) 
        {
            $('#DexInc').append($('<option>', {value:i, text:i}));
            $('#StrInc').append($('<option>', {value:i, text:i}));
            $('#TouInc').append($('<option>', {value:i, text:i}));
            $('#PerInc').append($('<option>', {value:i, text:i}));
            $('#WilInc').append($('<option>', {value:i, text:i}));
            $('#ChaInc').append($('<option>', {value:i, text:i}));
        }
    }

    this.PopulatePlaySelects = function()
    {
        $('#SituationDamageWrapper'         ).html(UI.BuildNumbersSelect(0, 500, Character.Damage, "SituationDamage", "situationInput situationInputWide situationSelect"));
        $('#SituationWoundWrapper'          ).html(UI.BuildNumbersSelect(0, 100, Character.Wounds, "SituationWound",  "situationInput situationInputWide situationSelect"));
        $('#SituationUncBuffWrapper'        ).html(UI.BuildNumbersSelect(0, 100, Character.Wounds, "SituationUncBuff",  "situationInput situationSelect"));
        $('#SituationDthBuffWrapper'        ).html(UI.BuildNumbersSelect(0, 100, Character.Wounds, "SituationDthBuff",  "situationInput situationSelect"));

        $('#SituationalDamageApplierWrapper').html(UI.BuildNumbersSelect(0, 100, 0,    "SituationalDamageApplier",    "situationInput situationInputWide situationSelect"));
        $('#SubtractArbitraryWrapper'       ).html(UI.BuildNumbersSelect(0, 100, 0,    "SubtractArbitrary",           "situationInput situationInputWide situationSelect"));
        $('#PhysArmorModWrapper'            ).html(UI.BuildNumbersSelect(-20, 100, 0,  "PhysArmorMod",                "situationInput situationSelect"));
        $('#MystArmorModWrapper'            ).html(UI.BuildNumbersSelect(-20, 100, 0,  "MystArmorMod",                "situationInput situationSelect"));

        $('#SituationKarmaWrapper'          ).html(UI.BuildNumbersSelect(-5,   100, 0, "SituationKarma",              "situationNumber"));
        
        $('#TargetNumberWrapper'            ).html(UI.BuildNumbersSelect(1,   100, 6,  "TargetNumber",                "situationNumber"));
        $('#RolledNumberWrapper'            ).html(UI.BuildNumbersSelect(0,   100, 6,  "RolledNumber",                "situationNumber"));
        $('#HitSuccessNumberWrapper'        ).html(UI.BuildNumbersSelect(0,   15,  0,  "HitSuccessNumber",            "situationNumber"));
        $('#DexterityModWrapper'            ).html(UI.BuildNumbersSelect(-50, 50,  0,  "DexterityMod",                "situationInput situationNumber"));
        $('#StrengthModWrapper'             ).html(UI.BuildNumbersSelect(-50, 50,  0,  "StrengthMod",                 "situationInput situationNumber"));
        $('#ToughnessModWrapper'            ).html(UI.BuildNumbersSelect(-50, 50,  0,  "ToughnessMod",                "situationInput situationNumber"));
        $('#PerceptionModWrapper'           ).html(UI.BuildNumbersSelect(-50, 50,  0,  "PerceptionMod",               "situationInput situationNumber"));
        $('#WillpowerModWrapper'            ).html(UI.BuildNumbersSelect(-50, 50,  0,  "WillpowerMod",                "situationInput situationNumber"));
        $('#CharismaModWrapper'             ).html(UI.BuildNumbersSelect(-50, 50,  0,  "CharismaMod",                 "situationInput situationNumber"));
        $('#PhysDefModWrapper'              ).html(UI.BuildNumbersSelect(-50, 50,  0,  "PhysDefMod",                  "situationInput situationNumber"));
        $('#MystDefModWrapper'              ).html(UI.BuildNumbersSelect(-50, 50,  0,  "MystDefMod",                  "situationInput situationNumber"));
        $('#SociDefModWrapper'              ).html(UI.BuildNumbersSelect(-50, 50,  0,  "SociDefMod",                  "situationInput situationNumber"));
        $('#InitiativeModWrapper'           ).html(UI.BuildNumbersSelect(-50, 50,  0,  "InitiativeMod",               "situationInput situationNumber"));
        $('#MiscActionModWrapper'           ).html(UI.BuildNumbersSelect(-50, 50,  0,  "MiscActionMod",               "situationInput situationNumber"));
        $('#MiscAttackModWrapper'           ).html(UI.BuildNumbersSelect(-50, 50,  0,  "MiscAttackMod",               "situationInput situationNumber"));
        $('#MiscDamageModWrapper'           ).html(UI.BuildNumbersSelect(-50, 50,  0,  "MiscDamageMod",               "situationInput situationNumber"));
        $('#MiscSpellCastModWrapper'        ).html(UI.BuildNumbersSelect(-50, 50,  0,  "MiscSpellCastMod",            "situationInput situationNumber"));
        $('#MiscSpellEffectModWrapper'      ).html(UI.BuildNumbersSelect(-50, 50,  0,  "MiscSpellEffectMod",          "situationInput situationNumber"));


        $('.situationInput').prop('disabled', 'disabled');
     };

    this.Redraw = function()
    {   
        let t0 = performance.now();

        CharacterManager.ResetBuffer();        let t1 = performance.now();
        CharacterManager.CheckSpells();
        CharacterManager.CheckKnacks();
        CharacterManager.RebuildTalentList();  let t2 = performance.now();
        this.PushBasics();                     let t3 = performance.now();
        this.PushLP();                         let t4 = performance.now();
        this.PushAttributes();                 let t5 = performance.now();
        this.PushDerived();                    let t6 = performance.now();
        this.PushTalents();                    let t7 = performance.now();
        this.PushKnacks();                     let t8 = performance.now();
        this.PushDevotions();
        this.PushSkills();                     let t9 = performance.now();
        this.PushMagic();                      let t10 = performance.now();
        this.PushSpells();                     let t11 = performance.now();
        this.PushAbilities();
        this.PushEquipment();                  let t12 = performance.now();
        this.PushSpellMatrices();              let t13 = performance.now();
        this.ApplySituational();               let t14 = performance.now();
        this.AttachEvents();                   let t15 = performance.now();
        this.ApplyState();                     let tfinished = performance.now();

        $(".ArtisanSkillInput").autocomplete({lookup: Library.ArtisanSkills.map(o => o.Name), minChars : 0, onSelect : UI.PullSkillInput});
        $(".KnowledgeSkillInput").autocomplete({lookup: Library.KnowledgeSkills.map(o => o.Name), minChars : 0, onSelect : UI.PullSkillInput});


        if(Settings.debug)
        {
            console.log("UI.Redraw() took " + Math.floor(tfinished - t0) + " milliseconds.");

            console.log("CharacterManager.ResetBuffer() took "       + Math.floor(t1  - t0)  + " milliseconds.");
            console.log("CharacterManager.RebuildTalentList() took " + Math.floor(t2  - t1)  + " milliseconds.");
            console.log("UI.PushBasics() took "                      + Math.floor(t3  - t2)  + " milliseconds.");
            console.log("UI.PushLP() took "                          + Math.floor(t4  - t3)  + " milliseconds.");
            console.log("UI.PushAttributes() took "                  + Math.floor(t5  - t4)  + " milliseconds.");
            console.log("UI.PushDerived() took "                     + Math.floor(t6  - t5)  + " milliseconds.");
            console.log("UI.PushTalents() took "                     + Math.floor(t7  - t6)  + " milliseconds.");
            console.log("UI.PushKnacks() took "                      + Math.floor(t8  - t7)  + " milliseconds.");
            console.log("UI.PushSkills() took "                      + Math.floor(t9  - t8)  + " milliseconds.");
            console.log("UI.PushMagic() took "                       + Math.floor(t10 - t9)  + " milliseconds.");
            console.log("UI.PushSpells() took "                      + Math.floor(t11 - t10) + " milliseconds.");
            console.log("UI.PushEquipment() took "                   + Math.floor(t12 - t11) + " milliseconds.");
            console.log("UI.PushSpellMatrices() took "               + Math.floor(t13 - t12) + " milliseconds.");
            console.log("UI.ApplySituational() took "                + Math.floor(t14 - t13) + " milliseconds.");
            console.log("UI.AttachEvents() took "                    + Math.floor(t15 - t14) + " milliseconds.");
            console.log("UI.ApplyState() took "                      + Math.floor(tfinished - t15) + " milliseconds.");

            console.log("UI.Redraw() took " + Math.floor(tfinished - t0) + " milliseconds.");
        }
    };

    this.PushCharacter = function()
    {
        this.PushStepDice();

        CharacterManager.CheckSpells();
        CharacterManager.CheckKnacks();

        this.PushBasics();
        this.PushDetails();
        this.PushPortrait();
        this.PushAttributes();
        this.PushDerived();
        this.PushTalents();
        this.PushKnacks();
        this.PushDevotions();
        this.PushSkills();
        this.PushMagic();
        this.PushSpells();
        this.PushEquipment();
        this.PushAbilities();
        this.PushSpellMatrices();
        this.ApplySituational();

        this.AttachEvents();
    };

    this.PushStepDice = function()
    {
        let $tbody = $("<tbody>");

        let rows = Math.floor(Library.StepDice.length/5);
        for (let i = 1; i<=rows; i++)
        {
            let $line = $("<tr>", {"id" : "StepDice_Line" + i});
            $line.append($("<td>", {"id" : "step" + i, "html" : i}));
            $line.append($("<td>", {"id" : "dice" + i, "html" : Library.GetDice(i)}));
            $line.append($("<td>", {"id" : "step" + (i+rows), "html" : (i+rows)}));
            $line.append($("<td>", {"id" : "dice" + (i+rows), "html" : Library.GetDice((i+rows))}));
            $line.append($("<td>", {"id" : "step" + (i+rows*2), "html" : (i+rows*2)}));
            $line.append($("<td>", {"id" : "dice" + (i+rows*2), "html" : Library.GetDice((i+rows*2))}));
            $line.append($("<td>", {"id" : "step" + (i+rows*3), "html" : (i+rows*3)}));
            $line.append($("<td>", {"id" : "dice" + (i+rows*3), "html" : Library.GetDice((i+rows*3))}));
            $line.append($("<td>", {"id" : "step" + (i+rows*4), "html" : (i+rows*4)}));
            $line.append($("<td>", {"id" : "dice" + (i+rows*4), "html" : Library.GetDice((i+rows*4))}));
            $tbody.append($line);
        }
        $("#StepDiceTable > tbody").remove("");
        $("#StepDiceTable").append($tbody);
    };

    this.PushBasics = function()
    {
        $("#Name"       ).val((Character.Basic.Name   + "" == "" ? '' : Character.Basic.Name));
        $("#Player"     ).val((Character.Basic.Player + "" == "" ? '' : Character.Basic.Player));
        $("#Race"       ).val((Character.Basic.Race   + "" == "" ? 'ED4Dwarf' : Character.Race));

        if (Character.Basic.Name != "")
            document.title = Character.Basic.Name + " - Steps " + version;
        else
            document.title = "Steps " + version;

        this.PushLP();

        $("#Disciplines").html("");
        for (let i = 0; i < Character.Disciplines.length; i++) 
        {

            $("#Disciplines").append(UI.BuildDisciplineLine(i));
            $("#DisciplineSelect"+i).val(Character.Disciplines[i].ID);
            $("#Circle"+i).val(Character.Disciplines[i].Circle);
            if (i>0)
                if (Character.Disciplines[i].StartedAt != undefined)
                    $("#StartedAt"+i).val(Character.Disciplines[i].StartedAt);
                else
                    $("#StartedAt"+i).val(1);
        }

        $("#Paths").html("");
        if (CharacterManager.GetPathsQualifiedFor().length > 0)
        {
            $("#Paths").append($("<div>",{ "class" : "statistics_subheader", "text" : "Paths"}));
            if (Character.Paths != undefined)
                for (let i = 0; i < Character.Paths.length; i++)
                    $("#Paths").append(UI.BuildPathLine(i, Character.Paths[i].ID, Character.Paths[i].Rank));
            if (Character.Paths == undefined || (CharacterManager.GetPathsQualifiedFor().length - Character.Paths.length) > 0)
            $("#Paths").append($("<div>",{"ID" : "AddPath", "class" : "AddButton hideInPlay", "text" : "+"}));
        }

        $("#Questor").html("");
        if (Character.Options.Books == "All" || Character.Options.Books.includes("Official") || Character.Options.Books.includes("Questors"))
        {
            $("#Questor").append($("<div>",{ "class" : "statistics_subheader", "text" : "Questor"}));

            let $QuestorWrapper = $("<div>", {"id" : "QuestorWrapper", "style" : "display: flex; justify-content: space-between;"})

            $QuestorWrapper.append($("<div>", {"text" : "Passion "}));

            let $PassionSelect = $("<select>", {"id" : "QuestorPassionSelect", "class" : "lockInPlay"});
            $PassionSelect.append($('<option>', {value:"Empty", text: "(Not a Questor)"}));
            for (let i=0; i < Library.Doctrines.length; i++)
                $PassionSelect.append($('<option>', {value:Library.Doctrines[i].ID, text:Library.Doctrines[i].Name}));
            $QuestorWrapper.append($PassionSelect);

            $QuestorWrapper.append($("<div>", {"text" : " Rank "}));
            $QuestorWrapper.append(UI.BuildNumbersSelect(0, 12,  0,  "QuestorRank", "lockInPlay"));

            $("#Questor").append($QuestorWrapper)
            if (Character.Questor != undefined && Character.Questor.Doctrine != "Empty")
            {
                $("#QuestorPassionSelect").val(Character.Questor.Doctrine);
                $("#QuestorRank").val(Character.Questor.Rank);
                $("#QuestorRank").prop('disabled', false);
            }
            else
            {
                $("#QuestorPassionSelect").val("Empty");
                $("#QuestorRank").val(0);
                $("#QuestorRank").prop('disabled', true);
            }
        }
    };

    this.PushDetails = function()
    {
        $("#Gender"     ).val ((Character.Basic.Gender      + "" == "" ? '' : Character.Basic.Gender));
        $("#Age"        ).val ((Character.Basic.Age         + "" == "" ? '' : Character.Basic.Age));
        $("#Height"     ).val ((Character.Basic.Height      + "" == "" ? '' : Character.Basic.Height));
        $("#Weight"     ).val ((Character.Basic.Weight      + "" == "" ? '' : Character.Basic.Weight));
        $("#Hair"       ).val ((Character.Basic.Hair        + "" == "" ? '' : Character.Basic.Hair));
        $("#Skin"       ).val ((Character.Basic.Skin        + "" == "" ? '' : Character.Basic.Skin));
        $("#Eyes"       ).val ((Character.Basic.Eyes        + "" == "" ? '' : Character.Basic.Eyes));
        $("#Passion"    ).val ((Character.Basic.Passion     + "" == "" ? '' : Character.Basic.Passion));
        $("#Traits"     ).val ((Character.Basic.Traits      + "" == "" ? '' : Character.Basic.Traits));
        $("#Description").html((Character.Basic.Description + "" == "" ? '' : Character.Basic.Description));
        $("#LogText"    ).html((Character.Basic.LogText     + "" == "" ? '' : Character.Basic.LogText));
    };

    this.PushPortrait = function()
    {
        if (Character.PortraitURL == undefined)
            Character.PortraitURL = "./img/portraits/Empty.jpg";

        UI.imageExists(Character.PortraitURL, function(exists) 
        {
            if (exists)
                $("#Portrait").attr('src', Character.PortraitURL);
            else 
            {  
                $("#Portrait").attr('src', "./img/portraits/Empty.jpg");
                console.log("'" + Character.PortraitURL + "' appears to be an invalid image url )o:");
            }
        });
    }

    this.imageExists = function(url, callback) 
    {
        let img = new Image(); //$("<img>");

        $(img).on("load", function() 
        {
            if (img.width > 0) 
                callback(true); 
            else 
                callback(false);
        });

        img.addEventListener('error', function(){callback(false);});

        img.src = url;
    }
        
    this.PushLP = function()
    {
        $("#LpCurrent").val(CharacterManager.GetRemainingLegendPoints());
        $("#LpTotal").val(Character.LegendPoints);
    };

    this.PushAttributes = function()
    {
        let attAbbrevs = ["Dex", "Str", "Tou", "Per", "Wil", "Cha"];
        let attObjs = CharacterManager.GetAttributes(); 
        let race = Library.GetRace(Character.Race);
        let attBonuses = CharacterManager.GetAttributeBonuses();

        let attPtsRmdr = parseInt(Character.Options.Attributepoints);
        
        for (let i=0; i<6; i++)
        {

            // Race Base
            $("#"+attAbbrevs[i]+"Base").text(race[attAbbrevs[i]]);

            let thisBld = Character.Attributes[attAbbrevs[i]].Buildpoints;
            $("#"+attAbbrevs[i]+"Pts").val(thisBld);
            attPtsRmdr -= parseInt(thisBld);

            $("#"+attAbbrevs[i]+"Inc" ).val(Character.Attributes[attAbbrevs[i]].Increases);
            $("#"+attAbbrevs[i]+"Mod" ).html(attBonuses[i]);

            let currentStep = Library.GetAttribute(attObjs[i]).Step;

            $("#"+attAbbrevs[i]+"Val" ).text(attObjs[i]);
            $("#"+attAbbrevs[i]+"Step").text(currentStep);
            $("#"+attAbbrevs[i]+"Dice").text(Library.GetDice(currentStep));
        }
        $("#AttPtsRemainder").html(attPtsRmdr);
    };

    this.UpdateAttributeValues = function(attributeAbbreviation)
    {
        switch (attributeAbbreviation)
        {
            case "Dex": 
                $("#DexVal").html (CharacterManager.GetDex());
                $("#DexStep").html(CharacterManager.GetDexStep());
                $("#DexDice").html(Library.GetDice(CharacterManager.GetDexStep()));
                break;
            case "Str": 
                $("#StrVal").html (CharacterManager.GetStr());
                $("#StrStep").html(CharacterManager.GetStrStep());
                $("#StrDice").html(Library.GetDice(CharacterManager.GetStrStep()));
                break;
            case "Tou": 
                $("#TouVal").html (CharacterManager.GetTou());
                $("#TouStep").html(CharacterManager.GetTouStep());
                $("#TouDice").html(Library.GetDice(CharacterManager.GetTouStep()));
                break;
            case "Per": 
                $("#PerVal").html (CharacterManager.GetPer());
                $("#PerStep").html(CharacterManager.GetPerStep());
                $("#PerDice").html(Library.GetDice(CharacterManager.GetPerStep()));
                break;
            case "Wil": 
                $("#WilVal").html (CharacterManager.GetWil());
                $("#WilStep").html(CharacterManager.GetWilStep());
                $("#WilDice").html(Library.GetDice(CharacterManager.GetWilStep()));
                break;
            case "Cha": 
                $("#ChaVal").html (CharacterManager.GetCha());
                $("#ChaStep").html(CharacterManager.GetChaStep());
                $("#ChaDice").html(Library.GetDice(CharacterManager.GetChaStep()));
                break;
            default:
                console.log("UI.UpdateAttributeValues: Unknown attribute '"+attributeAbbreviation+"'; falling back to updating them all");
                $("#DexVal").html (CharacterManager.GetDex());
                $("#DexStep").html(CharacterManager.GetDexStep());
                $("#DexDice").html(Library.GetDice(CharacterManager.GetDexStep()));
                $("#StrVal").html (CharacterManager.GetStr());
                $("#StrStep").html(CharacterManager.GetStrStep());
                $("#StrDice").html(Library.GetDice(CharacterManager.GetStrStep()));
                $("#TouVal").html (CharacterManager.GetTou());
                $("#TouStep").html(CharacterManager.GetTouStep());
                $("#TouDice").html(Library.GetDice(CharacterManager.GetTouStep()));
                $("#PerVal").html (CharacterManager.GetPer());
                $("#PerStep").html(CharacterManager.GetPerStep());
                $("#PerDice").html(Library.GetDice(CharacterManager.GetPerStep()));
                $("#WilVal").html (CharacterManager.GetWil());
                $("#WilStep").html(CharacterManager.GetWilStep());
                $("#WilDice").html(Library.GetDice(CharacterManager.GetWilStep()));
                $("#ChaVal").html (CharacterManager.GetCha());
                $("#ChaStep").html(CharacterManager.GetChaStep());
                $("#ChaDice").html(Library.GetDice(CharacterManager.GetChaStep()));
                break;
        }
        $("#AttPtsRemainder").html(CharacterManager.GetRamainingAttributePoints());
    };

    this.PushDerived = function()
    {
        // find shield in use: 
        let phString = "", myString = "", iniString = "", shield;
        for (let i = 0; i < Character.Equipment.length; i++) {
            if(Character.Equipment[i].Type == "Shield")
            {
                shield = Character.Equipment[i];
                break;
            }
        }
        $("#phDef").html(CharacterManager.GetPhDef());
        $("#myDef").html(CharacterManager.GetMyDef());
        $("#soDef").html(CharacterManager.GetSoDef());

        $("#phArm").html(CharacterManager.GetPhArm());
        $("#myArm").html(CharacterManager.GetMyArm());

        $("#Move").html(CharacterManager.GetMvmtRate());
        $("#Carry").html(CharacterManager.GetCarryingCapacity());

        $("#iniBase").html(CharacterManager.GetDexStep() + " / " + Library.GetDice(CharacterManager.GetDexStep()));

        let baseIni = CharacterManager.GetBaseIni();
        let ModifiedIni = CharacterManager.GetModifiedIni();

        if (baseIni == ModifiedIni)
            $("#ModifiedIni").hide();
        else 
            $("#ModifiedIni").show();

        $("#Ini").html(baseIni + " / " + Library.GetDice(baseIni));
        $("#ArmoredIni").html((ModifiedIni + " / " + Library.GetDice(ModifiedIni)));
        // Perhaps (omg) even Ini boost talents?  

        if (Character.Disciplines.length > 0 && Character.Disciplines[0].ID != "Empty")
        {
            $("#Karma").html((Character.KarmaPoints == undefined ? CharacterManager.GetKarmaPoints() : Character.KarmaPoints) + " / " + CharacterManager.GetKarmaPoints() + " (" + Library.GetDice(CharacterManager.GetKarmaStep()) + ")");
            $("#KarmaPointsLine").show();
        }
        else
            $("#KarmaPointsLine").hide();

        if (Character.Questor != undefined && Character.Questor.devotionPoints != undefined && CharacterManager.GetDevotionPointsMax() != 0) 
        {
            $("#DevotionPoints").html(Character.Questor.devotionPoints + " / " + CharacterManager.GetDevotionPointsMax() + " (" + CharacterManager.GetDevotionDiceType() + ")");
            $("#DevotionPointsLine").show();
        }
        else
            $("#DevotionPointsLine").hide();

        $("#Unc").html(CharacterManager.GetUnconsciousRating() + " / " + CharacterManager.GetDeathRating());


        if (CharacterManager.GetBloodDamage() != 0)
        {
            $("#ModHlth").html((CharacterManager.GetUnconsciousRating() - CharacterManager.GetBloodDamage())+ " / " + (CharacterManager.GetDeathRating() - CharacterManager.GetBloodDamage()));
            $("#HealtWithBlood").show();
        }
        else
            $("#HealtWithBlood").hide();

        $("#wndTh").html(CharacterManager.GetWoundThreshold());
        $("#recTst").html(CharacterManager.GetRecoveryTestCount());
        let recStep = CharacterManager.GetRecoveryStep();
        $("#recStp").html(recStep + " / " + Library.GetDice(recStep));

        $("#bloodDmg").html(CharacterManager.GetBloodDamage() + " / " + CharacterManager.GetBloodWounds());

        if(Character.Damage == undefined)
            Character.Damage = 0;
        if(Character.Wounds == undefined)
            Character.Wounds = 0;

        $("#curDmg").html(Character.Damage + " / " + Character.Wounds)

        $("#HealthTable tr").removeClass("shaded"); 
        $("#HealthTable tr:visible:even").addClass("shaded"); 
    };

    this.PushTalents = function()
    {
        if (Character.Talents.length > 0)
        {
            let $discTbody = $("<tbody>");
            let $othrTbody = $("<tbody>");
    
            // Header
            let $hline = $("<tr>", {"id" : "DTalentTBody"});
            $hline.append($("<th>", {"html" : "Talent Name"}));
            $hline.append($("<th>", {"html" : "Source"}));
            $hline.append($("<th>", {"html" : "📚",        "class": "hideInPlay"}));
            $hline.append($("<th>", {"html" : "Action"}));
            $hline.append($("<th>", {"html" : "Strain"}));
            $hline.append($("<th>", {"html" : "Free",      "class": "hideInPlay" }));
            $hline.append($("<th>", {"html" : "Rank"}));
            $hline.append($("<th>", {"html" : "Attribute"}));
            $hline.append($("<th>", {"html" : "Bonus"}));
            $hline.append($("<th>", {"html" : "Step"}));
            $hline.append($("<th>", {"html" : "Dice"}));
    
            $discTbody.append($hline);
            $othrTbody.append($hline.clone());
    
            for (let thisTalentIndex = 0; thisTalentIndex < Character.Talents.length; thisTalentIndex++) 
            {
                let libTalent = Library.GetTalent(Character.Talents[thisTalentIndex].ID);

                let $line =  $("<tr>", {"id" : "Talent_Line"  + thisTalentIndex});
    
                if (Character.Talents[thisTalentIndex].Type == "Optional")
                {
                    let $TalentSelect = UI.BuildTalentSelect(thisTalentIndex, Character.Talents[thisTalentIndex].ID, Character.Talents[thisTalentIndex].DisciplineId, Character.Talents[thisTalentIndex].Circle);
                    $TalentSelect.val(Character.Talents[thisTalentIndex].ID);
                    let $td = $("<td>", {"id" : "TalentName"   + thisTalentIndex});
                    $td.append($TalentSelect);
                    $line.append($td);
                }
                else
                    if (Character.Talents[thisTalentIndex].Type == "Versatility")
                    {
                        let $td = $("<td>", {"id" : "TalentName"   + thisTalentIndex, "style" : "white-space: nowrap;"});
    
                        let $TalentSelect = UI.BuildVersatilityTalentSelect(thisTalentIndex); 
    
                        $TalentSelect.val(Character.Talents[thisTalentIndex].ID);
                        $td.append($TalentSelect);
    
                        let $tierSelect = $("<select>", { "id" : "VersatilityTierSelect" + thisTalentIndex, "class" : "hideInPlay talentTierSelect", "style": "text-align:left;"});
                        $tierSelect.append($('<option>', {value:"1", text:"Novice"}));
                        $tierSelect.append($('<option>', {value:"2", text:"Journeyman"}));
                        $tierSelect.append($('<option>', {value:"3", text:"Warden"}));
                        $tierSelect.append($('<option>', {value:"4", text:"Master"}));
                        $tierSelect.val(Character.Talents[thisTalentIndex].VersatilityTier);
    
                        $td.append($tierSelect);
    
                        $line.append($td);
                    }
                    else
                        if (Character.Talents[thisTalentIndex].Type == "PathGrantedTalent")
                        {
                            let $td = $("<td>", {"id" : "TalentName"   + thisTalentIndex, "style" : "white-space: nowrap;"});
        
                            let $TalentSelect = UI.BuildPathTalentSelect(Character.Talents[thisTalentIndex].PathID, Character.Talents[thisTalentIndex].PathRank, thisTalentIndex); 
                            $td.append($TalentSelect);
       
                            $line.append($td);
                        }
                        else
                            $line.append($("<td>", {"id" : "TalentName"   + thisTalentIndex, "html"  : (libTalent == undefined ? "Empty" : libTalent.Name)}));
    
                $line.append($("<td>", {"id" : "TalentSource" + thisTalentIndex, "html" : Character.Talents[thisTalentIndex].Source, "class": "hideInPlay"}));
                $line.append($("<td>", {"id" : "TalentPage"   + thisTalentIndex, "html" : (libTalent == undefined ? "-" : libTalent.Reference), "class": "talentSlim"}));
                $line.append($("<td>", {"id" : "TalentAction" + thisTalentIndex, "html" : (libTalent == undefined ? "-" : libTalent.Action), "class": "talentMedium"}));
                $line.append($("<td>", {"id" : "TalentStrain" + thisTalentIndex, "html" : (libTalent == undefined ? "-" : libTalent.Strain), "class": "talentSlim"}));

                let rank = 0;
                if (Character.Talents[thisTalentIndex].Type == "Free" || Character.Talents[thisTalentIndex].Type == "Item" ||  Character.Talents[thisTalentIndex].Type == "PathTalent")
                {
                    if (Character.Talents[thisTalentIndex].Type == "Free")
                    {
                        for (let i = 0; i < Character.Disciplines.length; i++) 
                            if(Character.Talents[thisTalentIndex].DisciplineId.includes(Character.Disciplines[i].ID) && parseInt(Character.Disciplines[i].Circle) > rank)
                                rank = parseInt(Character.Disciplines[i].Circle);
                    }
                    else
                        rank = parseInt(Character.Talents[thisTalentIndex].Rank);
    
                    $line.append($("<td>", {"id" : "TalentFreeRank" + thisTalentIndex,   "html" : "-", "class": "talentSlim hideInPlay" }));
                    $line.append($("<td>", {"id" : "TalentRank" + thisTalentIndex, "html" : "("  + rank + ")", "class": "lockInPlay talentSlim"}));
                }
                else
                {
                    rank = Character.Talents[thisTalentIndex].Rank;
    
                    let $FreeRankCell = $("<td>", {"class": "talentSlim hideInPlay"});
                    let $RankCell     = $("<td>", {"class": "talentSlim"});
    
                    if(Character.Talents[thisTalentIndex].TalentPointsUseable == "True")
                        $FreeRankCell.append(UI.BuildNumbersSelect(0, 3, Character.Talents[thisTalentIndex].Freerank, "TalentFreeRank" + thisTalentIndex, "TalentFreeRankInput lockInPlay"));
                    else
                        $FreeRankCell.html("&nbsp;");
    
                    $line.append($FreeRankCell);
                    
                    $RankCell.append(UI.BuildNumbersSelect(0, 15, rank, "TalentRank" + thisTalentIndex, "TalentRankInput lockInPlay"));
                    $line.append($RankCell);
                }
    
                let thisTalentStep, thisAttribute = "", thisTalentBonus = 0;
                rank = parseInt(rank);
                if (libTalent != undefined)
                    thisTalentBonus = CharacterManager.GetTalentBonus(thisTalentIndex);

                if (libTalent == undefined)
                    thisTalentStep = "-";
                else

                    if (libTalent.Step == "-")
                        thisTalentStep = libTalent.Step;
                    else
                    {
                        thisTalentStep = 0;
                        let stepSplit = libTalent.Step.toLowerCase().split('+');
                        for (let j = 0; j < stepSplit.length; j++) 
                        {
                            switch (stepSplit[j])
                            {
                                case "rank":
                                    thisTalentStep += rank;
                                    break;
                                case "dex":
                                    thisTalentStep += parseInt(CharacterManager.GetDexStep());
                                    thisAttribute = "Dexterity";
                                    break;
                                case "str":
                                    thisTalentStep += parseInt(CharacterManager.GetStrStep());
                                    thisAttribute = "Strength";
                                    break;
                                case "tgh":
                                case "tou":
                                    thisTalentStep += parseInt(CharacterManager.GetTouStep());
                                    thisAttribute = "Toughness";
                                    break;
                                case "per":
                                    thisTalentStep += parseInt(CharacterManager.GetPerStep());
                                    thisAttribute = "Perception";
                                    break;
                                case "wil":
                                    thisTalentStep += parseInt(CharacterManager.GetWilStep());
                                    thisAttribute = "Willpower";
                                    break;
                                case "cha":
                                    thisTalentStep += parseInt(CharacterManager.GetChaStep());
                                    thisAttribute = "Charisma";
                                    break;
                                case "ini":
                                    thisTalentStep += parseInt(CharacterManager.GetModifiedIni());
                                    thisAttribute = "(Initiative)";
                                    break;
                                case "onehdmax":
                                    thisTalentStep += CharacterManager.GetOneHandedMax();
                                    thisAttribute += " + " + CharacterManager.GetOneHandedMax() + "*";
                                    break;
                                case "weapon size":
                                    thisTalentStep = "(Not calculated)";
                                    thisAttribute += " + Weapon Size*";
                                    break;
                                default:
                                    if (!isNaN(stepSplit[j]))
                                    {
                                        thisTalentStep += parseInt(stepSplit[j]);
                                        thisAttribute += " + " + parseInt(stepSplit[j]);
                                    }
                                    else
                                        throw "Unknown Talent Step component: "+ stepSplit[j];
                                    break;
                            }
                        }
                    if (!isNaN(thisTalentStep))
                        thisTalentStep += thisTalentBonus;
                }
    
                Character.Talents[thisTalentIndex].Step = thisTalentStep;
                $line.append($("<td>", {"id" : "TalentAttribute" + thisTalentIndex, "html" : (thisAttribute == "" ? "-" : thisAttribute), "class": "talentMedium"}));
                $line.append($("<td>", {"id" : "TalentBonus" + thisTalentIndex, "html" : (thisTalentBonus != 0 ? thisTalentBonus : ""), "class": "talentSlim"}));
                $line.append($("<td>", {"id" : "TalentStep" + thisTalentIndex, "html" : thisTalentStep, "class": "talentSlim"}));
    
                let theseDice; 
                if (isNaN(thisTalentStep) || thisTalentStep == 0)
                    theseDice = "-";
                else
                    theseDice = Library.GetDice(thisTalentStep+"");
    
                $line.append($("<td>", {"id" : "TalentDice" + thisTalentIndex, "html" : theseDice, "class": "talentMedium"}));
    
                if (Character.Talents[thisTalentIndex].Type == "Discipline")
                    $discTbody.append($line);
                else
                    $othrTbody.append($line);
            }
            let $TalentPointsRemainingLine = $("<tr>", {"class" : "hideInPlay"});
            $TalentPointsRemainingLine.append($("<td>", {"colspan": "100%", "style" : "text-align: right;", "html" : "Remaining Talent Points: <span id='TalentPointsRemaining'>" + CharacterManager.GetRemainingTalentPoints() + "</span>"}));
            $othrTbody.append($TalentPointsRemainingLine);
    
            $("#DiscTalentTable > tbody").remove("");
            $("#DiscTalentTable").append($discTbody);
            $("#othrTalentTable > tbody").remove("");
            $("#othrTalentTable").append($othrTbody);
            $("#Talents").show();
        }    
        else
            $("#Talents").hide();
    };

    this.UpdateTalentFreeRank = function(thisTalentIndex)
    {
        if (0 > thisTalentIndex || thisTalentIndex > Character.Talents.length)
        {
            throw "UI.UpdateTalentFreeRank: Input invalid or out of range: " + thisTalentIndex;
            return;
        }

        if (Character.Talents[thisTalentIndex].TalentPointsUseable == "True")
            $("#TalentFreeRank" + thisTalentIndex).val(Character.Talents[thisTalentIndex].Freerank);
    };

    this.UpdateTalentRank = function(thisTalentIndex)
    {
        if (0 > thisTalentIndex || thisTalentIndex > Character.Talents.length)
        {
            console.log("UI.UpdateTalentRank: Input invalid or out of range: " + thisTalentIndex);
            return;
        }

        if (Character.Talents[thisTalentIndex].Type == "Free" || Character.Talents[thisTalentIndex].Type == "Item")
        {
            let Rank;
            if (Character.Talents[thisTalentIndex].Type == "Free")
                Rank = Character.Disciplines.find(o => o.ID === Character.Talents[thisTalentIndex].DisciplineId).Circle;
            else
                Rank = Character.Talents[thisTalentIndex].Rank;

            $("#TalentRank" + thisTalentIndex).html("("  + Rank + ")");
        }
        else
        {
            $("#TalentRank" + thisTalentIndex).val(Character.Talents[thisTalentIndex].Rank);
        }
    };

    this.UpdateTalentSteps = function(attributeAbbreviation)
    {
        for (let thisTalentIndex = 0; thisTalentIndex < Character.Talents.length; thisTalentIndex++) 
            if(Character.Talents[thisTalentIndex].ID != "Empty") 
                if(Library.GetTalent(Character.Talents[thisTalentIndex].ID).Attribute.toLowerCase() == attributeAbbreviation.toLowerCase() || (attributeAbbreviation.toLowerCase() == "dex" && Library.GetTalent(Character.Talents[thisTalentIndex].ID).Attribute.toLowerCase() == "ini"))
                    UI.UpdateTalentStepDice(thisTalentIndex);
    };

    this.UpdateTalentStepDice = function(thisTalentIndex)
    {
        if(0 > thisTalentIndex || thisTalentIndex > Character.Talents.length)
        {
            console.log("UI.UpdateTalentStepDice: Input invalid or out of range: " + thisTalentIndex);
            return;
        }

        let thisTalent = Library.GetTalent(Character.Talents[thisTalentIndex].ID);

        let Rank;
        if (Character.Talents[thisTalentIndex].Type == "Free")
            Rank = parseInt(Character.Disciplines.find(o => o.ID === Character.Talents[thisTalentIndex].DisciplineId).Circle);
        else
            Rank = parseInt(Character.Talents[thisTalentIndex].Rank);

        let thisTalentStep = CharacterManager.GetTalentStep(thisTalentIndex);
        $("#TalentStep" + thisTalentIndex).html(thisTalentStep);

        let theseDice; 
        if (isNaN(thisTalentStep) || thisTalentStep == 0)
            theseDice = "-";
        else
            theseDice = Library.GetDice(thisTalentStep+"");
        $("#TalentDice" + thisTalentIndex).html(theseDice);
    };

    this.UpdateRemainingTalentPoints = function()
    {
        $("#TalentPointsRemaining").html(CharacterManager.GetRemainingTalentPoints());
    };

    this.PushKnacks = function()
    {
        if (Character.Knacks != undefined && Character.Knacks.length > 0 || CharacterManager.CountKnacksAvailable() > 0)
        {
            let $Tbody = $("<tbody>");

            // Header
            let $hline = $("<tr>");
            $hline.append($("<th>", {"html" : "", "class": "hideInPlay"}));
            $hline.append($("<th>", {"html" : "Knack Name"}));
            $hline.append($("<th>", {"html" : "📚"}));
            $hline.append($("<th>", {"html" : "Talent"}));
            $hline.append($("<th>", {"html" : "Min Rank", "class": "hideInPlay"}));
            $hline.append($("<th>", {"html" : "Action"}));
            $hline.append($("<th>", {"html" : "Strain"}));
            $hline.append($("<th>", {"html" : "Attribute"}));
            $hline.append($("<th>", {"html" : "Step"}));
            $hline.append($("<th>", {"html" : "Dice"}));

            $Tbody.append($hline);

            for (let thisKnackIndex = 0; thisKnackIndex < Character.Knacks.length; thisKnackIndex++) 
            {
                let $line;
                let extraLine = "";
                if (Character.Knacks[thisKnackIndex].ID == "Empty")
                {
                    $line =  $("<tr>", {"id" : "Knack_Line"      + thisKnackIndex, "class" : "Knack" + (thisKnackIndex % 2 == 1 ? " shaded" : "")});
                    $line.append($("<td>", {"id" : "KillKnack"       + thisKnackIndex, "html"  : "✕", "class": "killKnack hideInPlay"}));

                    let $nameTd = $("<td>");
                    let $knackselect;
                    $knackselect = UI.BuildKnackSelect(thisKnackIndex);
                    $knackselect.attr('id', "KnackSelect" + thisKnackIndex);
                    $knackselect.val("Empty");
                    $nameTd.append($knackselect);
                    $line.append($nameTd);

                    $line.append($("<td>", {"id" : "KnackPage"       + thisKnackIndex, "html" : "-"}));
                    $line.append($("<td>", {"id" : "KnackTalent"     + thisKnackIndex, "html" : "-"}));
                    $line.append($("<td>", {"id" : "KnackRankReq"    + thisKnackIndex, "html" : "-", "class": "hideInPlay"}));
                    $line.append($("<td>", {"id" : "KnackAction"     + thisKnackIndex, "html" : "-"}));
                    $line.append($("<td>", {"id" : "KnackStrain"     + thisKnackIndex, "html" : "-", "class": "talentSlim"}));
                    $line.append($("<td>", {"id" : "KnackAttribute"  + thisKnackIndex, "html" : "-"}));
                    $line.append($("<td>", {"id" : "KnackStep"       + thisKnackIndex, "html" : "-"}));
                    $line.append($("<td>", {"id" : "KnackDice"       + thisKnackIndex, "html" : "-"}));
                }
                else
                {            
                    let libKnack = Library.GetKnack(Character.Knacks[thisKnackIndex].ID);
                    if (libKnack == undefined)
                        throw "UI.PushKnacks(): Undefined Knack" + Character.Knacks[thisKnackIndex].ID;

                    let thisTalent, thisRank = 0;
    
                    let chaTalent = Character.Talents.find(o => o.ID === libKnack.Talent || o.ID.includes(libKnack.Talent));

                    if(chaTalent == undefined)
                        throw "Knack " + libKnack.ID + " targets a Talent the Character doesn't have: "+ libKnack.Talent;


                    let libTalent = Library.GetTalent(chaTalent.ID);
                    thisRank  = chaTalent.Rank;
    
                    if(libTalent == undefined || thisRank == undefined)
                        console.log ("PushKnacks: Talent not found '" + libKnack.Talent + "'");
    
                    $line =  $("<tr>", {"id" : "Knack_Line"   + thisKnackIndex, "class" : "Knack" + libKnack.Attribute + (thisKnackIndex % 2 == 1 ? " shaded" : "")});
                    $line.append($("<td>", {"id" : "KillKnack"    + thisKnackIndex, "html"  : "✕", "class": "killKnack hideInPlay"}));

                    let $nameTd = $("<td>");
                    let $knackselect;
                    $knackselect = UI.BuildKnackSelect(thisKnackIndex);
                    $knackselect.attr('id', "KnackSelect" + thisKnackIndex);
                    $knackselect.val(Character.Knacks[thisKnackIndex].ID);
                    $nameTd.append($knackselect);
                    $line.append($nameTd);

                    $line.append($("<td>", {"id" : "KnackPage"       + thisKnackIndex, "html" : libKnack.Reference, "class": "talentSlim"}));
                    $line.append($("<td>", {"id" : "KnackTalent"     + thisKnackIndex, "html" : (libTalent.CountsAs == "ED4ThreadWeaving" ? "Thread Weaving" : libTalent.Name )}));
                    $line.append($("<td>", {"id" : "KnackRankReq"    + thisKnackIndex, "html" : libKnack.RequiredRank, "class": "hideInPlay"}));

                    // Build Requirements string
                    let requirements = "";
                    for (let thisRequirement = 0; thisRequirement < libKnack.Requirements.length; thisRequirement++) 
                    {
                        if (thisRequirement != 0)
                            requirements += ", "
                        switch(libKnack.Requirements[thisRequirement].Type)
                        {
                            case "Knack":
                                requirements += "Knack '" + Library.GetKnack(libKnack.Requirements[thisRequirement].ID).Name + "'";
                                break;
                            case "Talent":
                                requirements += "Talent '" + Library.GetTalent(libKnack.Requirements[thisRequirement].ID).Name + "' Rank " + libKnack.Requirements[thisRequirement].Rank;
                                break;
                            case "Speak":
                                requirements += "Speak '" + libKnack.Requirements[thisRequirement].Language + "'";
                                break;
                            case "ReadWrite":
                                requirements += "Read/Write '" + libKnack.Requirements[thisRequirement].Language + "'";
                                break;
                            case "Skill":
                                requirements += "Skill '" + Library.GetSkill(libKnack.Requirements[thisRequirement].ID).Name + (libKnack.Requirements[thisRequirement].Name == undefined ? "" : " (" + libKnack.Requirements[thisRequirement].Name + ")") + " Rank " + libKnack.Requirements[thisRequirement].Rank;
                                break;
                            case "Ordeal":
                                requirements += libKnack.Requirements[thisRequirement].Text;
                                break;
                            case "Spell":
                                requirements += "Spell '" + Library.GetSpell(libKnack.Requirements[thisRequirement].ID).Name + "'";
                                break;
                            default:
                                console.log(libKnack);
                                console.log(libKnack.Name + " Unknown Knack Requirement Type: '" + libKnack.Requirements[thisRequirement].Type + "")
                                break;
                        }
                    }
                    if (requirements != "")
                        requirements = "Requirements: " + requirements;

                    let restrictions = "";
                    for (let thisRestriction = 0; thisRestriction < libKnack.Restrictions.length; thisRestriction++)
                    {
                        if (thisRestriction != 0)
                            restrictions += ", "
                        switch (libKnack.Restrictions[thisRestriction].Type)
                        {
                            case "Knack":
                                restrictions += "Knack '" + Library.GetKnack(libKnack.Restrictions[thisRestriction].ID).Name + "'";
                                break;
                            case "Talent":
                                restrictions += "Talent '" + Library.GetTalent(libKnack.Restrictions[thisRestriction].ID).Name + "' Rank " + libKnack.Restrictions[thisRestriction].Rank;
                                break;
                            case "Speak":
                                restrictions += "Speak '" + libKnack.Restrictions[thisRestriction].Language + "'";
                                break;
                            case "ReadWrite":
                                restrictions += "Read/Write '" + libKnack.Restrictions[thisRestriction].Language + "'";
                                break;
                            case "Skill":
                                restrictions += "Skill '" + Library.GetSkill(libKnack.Restrictions[thisRestriction].ID).Name + (libKnack.Restrictions[thisRestriction].Name == undefined ? "" : " (" + libKnack.Restrictions[thisRestriction].Name + ")") + " Rank " + libKnack.Requirements[thisRequirement].Rank;
                                break;
                            case "Race":
                                restrictions += "Race '" + Library.GetRace(libKnack.Restrictions[thisRestriction].ID).Name + "'";
                                break;
                            case "Discipline":
                                if (libKnack.Restrictions[thisRestriction].ID == "Any")
                                    restrictions += "Any Discipline Circle " + libKnack.Restrictions[thisRestriction].Circle;
                                else
                                    restrictions += "Discipline '" + Library.GetDiscipline(libKnack.Restrictions[thisRestriction].ID).Name + "' Circle " + libKnack.Restrictions[thisRestriction].Circle;
                                break;
                            default:
                                console.log(libKnack.Name + " Unknown Knack Restriction Type: '" + libKnack.Restrictions[thisRestriction].Type + "'")
                        }
                    }
                    if (restrictions != "")
                        restrictions = "Restrictions: " + restrictions;

                    if (requirements != "" || restrictions != "")
                        extraLine = (requirements + " " +  restrictions).trim();

                    $line.append($("<td>", {"id" : "KnackAction"     + thisKnackIndex, "html" : (libKnack.Action != undefined ? libKnack.Action : "&nbsp;")}));
                    $line.append($("<td>", {"id" : "KnackStrain"     + thisKnackIndex, "html" : (libKnack.Strain != undefined ? libKnack.Strain : "&nbsp;"), "class": "talentSlim"}));
    
                    let thisStep, thisAttribute = "&nbsp;";
                    if (libKnack.Step == undefined || libKnack.Step == "-" || libKnack.Step == "N/A")
                        thisStep = "-";
                    else
                    {
                        thisStep = 0, thisAttribute = "";
                        let stepSplit = libKnack.Step.toLowerCase().split('+');
                        for (let j = 0; j < stepSplit.length; j++) 
                        {
                            switch (stepSplit[j])
                            {
                                case "rank":
                                    thisStep += parseInt(thisRank);
                                    break;
                                case "dex":
                                    thisStep += parseInt(CharacterManager.GetDexStep());
                                    thisAttribute += (thisAttribute == "" ? "" : ", ") + "Dexterity";
                                    break;
                                case "str":
                                    thisStep += parseInt(CharacterManager.GetStrStep());
                                    thisAttribute += (thisAttribute == "" ? "" : ", ") + "Strength";
                                    break;
                                case "tgh":
                                case "tou":
                                    thisStep += parseInt(CharacterManager.GetTouStep());
                                    thisAttribute += (thisAttribute == "" ? "" : ", ") + "Toughness";
                                    break;
                                case "per":
                                    thisStep += parseInt(CharacterManager.GetPerStep());
                                    thisAttribute += (thisAttribute == "" ? "" : ", ") + "Perception";
                                    break;
                                case "wil":
                                    thisStep += parseInt(CharacterManager.GetWilStep());
                                    thisAttribute += (thisAttribute == "" ? "" : ", ") + "Willpower";
                                    break;
                                case "cha":
                                    thisStep += parseInt(CharacterManager.GetChaStep());
                                    thisAttribute += (thisAttribute == "" ? "" : ", ") + "Charisma";
                                    break;
                                case "ini":
                                    thisStep += parseInt(CharacterManager.GetModifiedIni());
                                    thisAttribute += (thisAttribute == "" ? "" : ", ") + "(Initiative)";
                                    break;
                                case "pathrank":
                                    let thisPath = Character.Paths.find(o => o.ID == chaTalent.PathID);
                                    if (thisPath != undefined)
                                        thisStep += parseInt(thisPath.Rank);
                                    else
                                        console.log("UI.PushKnacks(): Knack " + libKnack.Name + " tries to pull a Path Rank that doesn't work for its step")
                                    thisAttribute += (thisAttribute == "" ? "" : ", ") + "(Path Rank)";
                                    break;
                                default:
                                    if (!isNaN(stepSplit[j]))
                                    {
                                        thisStep += parseInt(stepSplit[j]);
                                        thisAttribute += " + " + parseInt(stepSplit[j]);
                                    }
                                    else
                                        console.log("UI.PushKnacks(): Knack " + libKnack.Name + " has an unknown step component: " + stepSplit[j]);
                                    break;
                            }
                        }
                    }
    
                    Character.Knacks[thisKnackIndex].Step = thisStep;
    
                    $line.append($("<td>", {"id" : "KnackAttribute"  + thisKnackIndex, "html" : thisAttribute}));
                    $line.append($("<td>", {"id" : "KnackStep"       + thisKnackIndex, "html" : thisStep}));
                    $line.append($("<td>", {"id" : "KnackDice"       + thisKnackIndex, "html" : (!isNaN(thisStep) ? Library.GetDice(thisStep) : "-")}));
                }
                $Tbody.append($line);
                if (extraLine != "") 
                {
                    let $ExtraLine = $("<tr>", {"id" : "Knack_Line" + thisKnackIndex + "Extras", "class" : "knackAdd hideInPlay" + (thisKnackIndex % 2 == 1 ? " shaded" : "") });
                    $ExtraLine.append($("<td>",{"html" : "&nbsp;"}));
                    $ExtraLine.append($("<td>",{"colspan" : "9", style : "padding-left: 1vw; text-align: left;", "html" : extraLine}));
                    $Tbody.append($ExtraLine)
                }

            }

            let knacksQualifiedFor = CharacterManager.GetKnacksQualifiedFor();

            if(CharacterManager.CountKnacksAvailable() > 0 || knacksQualifiedFor.find(o => o.Retakable == "Yes") != undefined)
            {
                let $AddKnackLine = $("<tr>", {"class" : "hideInPlay"});
                let $AddKnackTd = $("<td>", {"colspan" : "12", "Style" : "text-align: center;"});
                $AddKnackTd.append($("<div>",{"id" : "AddKnackButton", "class" : "AddButton", "html" : "+"}));
                $AddKnackLine.append($AddKnackTd);
                $Tbody.append($AddKnackLine);
            }


            $("#KnackTable > tbody").remove("");
            $("#KnackTable").append($Tbody);
            $("#Knacks").show();
        }
        else
            $("#Knacks").hide();
    };   

    this.UpdateKnackSteps = function()
    {
        if(Character.Knacks != undefined)
            for (let thisKnackIndex = 0; thisKnackIndex < Character.Knacks.length; thisKnackIndex++) 
                if(Character.Knacks[thisKnackIndex].ID != "Empty") 
                        UI.UpdateKnackStepDice(thisKnackIndex);
    };
    
    this.UpdateKnackStepDice = function(thisKnackIndex)
    {
        if(Character.Knacks != undefined && Character.Knacks[thisKnackIndex].ID != "Empty")
        {
            let libKnack = Library.GetKnack(Character.Knacks[thisKnackIndex].ID);
            let libTalent, thisRank = 0;

            thisRank = Character.Talents.find(o => o.ID === libKnack.Talent || o.ID.includes(libKnack.Talent)).Rank;
            libTalent = Library.GetTalent(libKnack.Talent);

            if(libTalent == undefined || thisRank == undefined)
                console.log ("PushKnacks: Talent not found '" + libKnack.Talent + "'");

            let thisStep;
            if (libKnack.Step == undefined || libKnack.Step == "-" || libKnack.Step == "N/A")
                thisStep = "-";
            else
            {
                thisStep = 0;
                let stepSplit = libKnack.Step.toLowerCase().split('+');
                for (let j = 0; j < stepSplit.length; j++) 
                {
                    switch (stepSplit[j])
                    {
                        case "rank":
                            thisStep += parseInt(thisRank);
                            break;
                        case "dex":
                            thisStep += parseInt(CharacterManager.GetDexStep());
                            break;
                        case "str":
                            thisStep += parseInt(CharacterManager.GetStrStep());
                            break;
                        case "tgh":
                        case "tou":
                            thisStep += parseInt(CharacterManager.GetTouStep());
                            break;
                        case "per":
                            thisStep += parseInt(CharacterManager.GetPerStep());
                            break;
                        case "wil":
                            thisStep += parseInt(CharacterManager.GetWilStep());
                            break;
                        case "cha":
                            thisStep += parseInt(CharacterManager.GetChaStep());
                            break;
                        case "ini":
                            thisStep += parseInt(CharacterManager.GetModifiedIni());
                            break;
                        default:
                            if (!isNaN(stepSplit[j]))
                                thisStep += parseInt(stepSplit[j]);
                            break;
                    }
                }
            }
            Character.Knacks[thisKnackIndex].Step = thisStep;

            $("#KnackStep" + thisKnackIndex).html(thisStep);
            $("#KnackDice" + thisKnackIndex).html(!isNaN(thisStep) ? Library.GetDice(thisStep) : "-");
        }
    };

    // Questor Devotions
    this.PushDevotions = function()
    {
        if (Character.Questor == undefined || Character.Questor.Devotion == "Empty")
        {
            $("#Devotions").hide();
            return;
        }

        // Header
        let $hline = $("<tr>");
        $hline.append($("<th>", {"html" : "Rank"}));
        $hline.append($("<th>", {"html" : "Name"}));
        $hline.append($("<th>", {"html" : "📚"}));
        $hline.append($("<th>", {"html" : "Action"}));
        $hline.append($("<th>", {"html" : "Strain"}));
        $hline.append($("<th>", {"html" : "Devotion Required"}));
        $hline.append($("<th>", {"html" : "Rank"}));
        $hline.append($("<th>", {"html" : "Attribute"}));
        $hline.append($("<th>", {"html" : "Step"}));
        $hline.append($("<th>", {"html" : "Dice"}));

        let $Tbody = $("<tbody>");
        $Tbody.append($hline);

        // Questor Devotion
        $Tbody.append(this.BuildDevotionLine())

        // Rank Devotions
        for (let thisDoctrineRank = 0; thisDoctrineRank < Character.Questor.Rank; thisDoctrineRank++)
        {
            $Tbody.append(this.BuildDevotionLine(thisDoctrineRank))
            if ([0,4,8].includes(thisDoctrineRank))
                $Tbody.append(this.BuildDevotionAbilityLine(thisDoctrineRank))
        }

        $("#DevotionTable > tbody").remove("");
        $("#DevotionTable").append($Tbody);

        $("#Devotions").show();
    }

    this.BuildDevotionLine = function(thisDoctrineRank)
    {
        let libDevotion, devotionRank;

        if (thisDoctrineRank == undefined) // Questor Devotion
        {
            libDevotion = Library.GetDevotion("ED4Questor");
            devotionRank = Character.Questor.Rank;
            thisDoctrineRank = "-";
        }
        else
        {
            if (Character.Questor.Ranks[thisDoctrineRank].devotionID == "Empty")
            {
                libDevotion = {"ID" : "Empty", "Name" : "(Not Selected)", "Reference" : "-", "Action" : "-", "Strain" : "-", "DevRq" : "-", "Step" : "-"}
                devotionRank = 0;
            }
            else
            {
                libDevotion = Library.GetDevotion(Character.Questor.Ranks[thisDoctrineRank].devotionID);
                devotionRank = Character.Questor.Ranks[thisDoctrineRank].devotionRank;
            }
        }

        let $line =  $("<tr>", {"id" : "Devotion_Line"    + thisDoctrineRank, "class" : "devotionLine"+ (thisDoctrineRank == "-" || thisDoctrineRank % 2 == 1 ? " shaded" : "")});

        $line.append($("<td>", {"id" : "DevotionRank"     + thisDoctrineRank, "html" : (thisDoctrineRank == "-" ? " - " : (thisDoctrineRank + 1)), "rowspan" : ([0,4,8].includes(thisDoctrineRank) ? "2" : "1"), "style" : "vertical-align : middle;"}));

        if (thisDoctrineRank == "-")
            $line.append($("<td>", {"id" : "DevotionNameQ", "html" : "Questor"}));
        else
            $line.append($("<td>", {"id" : "DevotionName" + thisDoctrineRank, "html" : UI.BuildDevotionSelect(thisDoctrineRank)}));

        $line.append($("<td>", {"id" : "DevotionReference" + thisDoctrineRank, "html" : libDevotion.Reference}));
        $line.append($("<td>", {"id" : "DevotionAction"    + thisDoctrineRank, "html" : libDevotion.Action}));
        $line.append($("<td>", {"id" : "DevotionStrain"    + thisDoctrineRank, "html" : libDevotion.Strain}));
        $line.append($("<td>", {"id" : "DevotionDevRq"     + thisDoctrineRank, "html" : libDevotion.DevRq}));

        if (thisDoctrineRank == "-")
            $line.append($("<td>", {"html" : Character.Questor.Rank}));
        else
            $line.append($("<td>", {"html" : UI.BuildNumbersSelect(0, Character.Questor.Rank, Character.Questor.Ranks[thisDoctrineRank].devotionRank, "DevotionRank" + thisDoctrineRank, "devotionRankInput lockInPlay")}));
                    
        let thisStep, thisAttribute = "-";
        if (libDevotion.Step == undefined || libDevotion.Step == "-" || libDevotion.Step == "N/A")
            thisStep = "-";
        else
        {
            thisStep = 0;
            let stepSplit = libDevotion.Step.toLowerCase().split('+');
            for (let j = 0; j < stepSplit.length; j++) 
            {
                switch (stepSplit[j])
                {
                    case "rank":
                        if (thisDoctrineRank == "-")
                            thisStep += parseInt(Character.Questor.Rank);
                        else
                            thisStep += parseInt(Character.Questor.Ranks[thisDoctrineRank].devotionRank);
                        break;
                    case "dex":
                        thisStep += parseInt(CharacterManager.GetDexStep());
                        thisAttribute = "Dexterity";
                        break;
                    case "str":
                        thisStep += parseInt(CharacterManager.GetStrStep());
                        thisAttribute = "Strength";
                        break;
                    case "tgh":
                    case "tou":
                        thisStep += parseInt(CharacterManager.GetTouStep());
                        thisAttribute = "Toughness";
                        break;
                    case "per":
                        thisStep += parseInt(CharacterManager.GetPerStep());
                        thisAttribute = "Perception";
                        break;
                    case "wil":
                        thisStep += parseInt(CharacterManager.GetWilStep());
                        thisAttribute = "Willpower";
                        break;
                    case "cha":
                        thisStep += parseInt(CharacterManager.GetChaStep());
                        thisAttribute = "Charisma";
                        break;
                    case "ini":
                        thisStep += parseInt(CharacterManager.GetModifiedIni());
                        thisAttribute = "(Initiative)";
                        break;
                    default:
                        if (!isNaN(stepSplit[j]))
                        {
                            thisStep += parseInt(stepSplit[j]);
                            thisAttribute += " + " + parseInt(stepSplit[j]);
                        }
                        break;
                }
            }
        }

        if (thisDoctrineRank == "-")
            Character.Questor.questorDevotionStep = thisStep;
        else
            Character.Questor.Ranks[thisDoctrineRank].devotionStep = thisStep;


        $line.append($("<td>", {"id" : "DevotionAttribute" + thisDoctrineRank, "html" : thisAttribute}));
        $line.append($("<td>", {"id" : "DevotionStep"      + thisDoctrineRank, "html" : thisStep}));
        $line.append($("<td>", {"id" : "DevotionDice"      + thisDoctrineRank, "html" : !isNaN(thisStep) ? Library.GetDice(thisStep) : "-"}));

        return $line;
    }

    this.UpdateDevotionLine = function(thisDoctrineRank)
    {
        let libDevotion, devotionRank;

        if (Character.Questor.Ranks[thisDoctrineRank].devotionID == "Empty")
        {
            libDevotion = {"Reference" : "-", "Action" : "-", "Strain" : "-", "DevRq" : "-", "Step" : "-"}
            devotionRank = 0;
        }
        else
        {
            libDevotion = Library.GetDevotion(Character.Questor.Ranks[thisDoctrineRank].devotionID);
            devotionRank = Character.Questor.Ranks[thisDoctrineRank].devotionRank;
        }

        $("#DevotionReference" + thisDoctrineRank).html(libDevotion.Reference);
        $("#DevotionAction"    + thisDoctrineRank).html(libDevotion.Action);
        $("#DevotionStrain"    + thisDoctrineRank).html(libDevotion.Strain);
        $("#DevotionDevRq"     + thisDoctrineRank).html(libDevotion.DevRq);
        $("#DevotionRank"      + thisDoctrineRank).val(Character.Questor.Ranks[thisDoctrineRank].devotionRank);
                    
        this.UpdateDevotionStepDice(thisDoctrineRank);
    }

    this.UpdateDevotionStepDice = function(thisDoctrineRank)
    {
        let libDevotion, devotionRank;

        if (Character.Questor.Ranks[thisDoctrineRank].devotionID == "Empty")
        {
            libDevotion = {"Step" : "-"}
            devotionRank = 0;
        }
        else
        {
            libDevotion = Library.GetDevotion(Character.Questor.Ranks[thisDoctrineRank].devotionID);
            devotionRank = Character.Questor.Ranks[thisDoctrineRank].devotionRank;
        }

        let thisStep, thisAttribute = "-";
        if (libDevotion.Step == undefined || libDevotion.Step == "-" || libDevotion.Step == "N/A")
            thisStep = "-";
        else
        {
            thisStep = 0;
            let stepSplit = libDevotion.Step.toLowerCase().split('+');
            for (let j = 0; j < stepSplit.length; j++) 
            {
                switch (stepSplit[j])
                {
                    case "rank":
                        if (thisDoctrineRank == "Q")
                            thisStep += parseInt(Character.Questor.Rank);
                        else
                            thisStep += parseInt(Character.Questor.Ranks[thisDoctrineRank].devotionRank);
                        break;
                    case "dex":
                        thisStep += parseInt(CharacterManager.GetDexStep());
                        thisAttribute = "Dexterity";
                        break;
                    case "str":
                        thisStep += parseInt(CharacterManager.GetStrStep());
                        thisAttribute = "Strength";
                        break;
                    case "tgh":
                    case "tou":
                        thisStep += parseInt(CharacterManager.GetTouStep());
                        thisAttribute = "Toughness";
                        break;
                    case "per":
                        thisStep += parseInt(CharacterManager.GetPerStep());
                        thisAttribute = "Perception";
                        break;
                    case "wil":
                        thisStep += parseInt(CharacterManager.GetWilStep());
                        thisAttribute = "Willpower";
                        break;
                    case "cha":
                        thisStep += parseInt(CharacterManager.GetChaStep());
                        thisAttribute = "Charisma";
                        break;
                    case "ini":
                        thisStep += parseInt(CharacterManager.GetModifiedIni());
                        thisAttribute = "(Initiative)";
                        break;
                    default:
                        if (!isNaN(stepSplit[j]))
                        {
                            thisStep += parseInt(stepSplit[j]);
                            thisAttribute += " + " + parseInt(stepSplit[j]);
                        }
                        break;
                }
            }
        }
        $("#DevotionAttribute" + thisDoctrineRank).html(thisAttribute);
        $("#DevotionStep"      + thisDoctrineRank).html(thisStep);
        $("#DevotionDice"      + thisDoctrineRank).html(!isNaN(thisStep) ? Library.GetDice(thisStep) : "-");
    }
    
    this.BuildDevotionAbilityLine = function(thisDoctrineRank)
    {
        if (Character.Questor.Ranks[thisDoctrineRank].devotionAbility == undefined)
            CharacterManager.SetDevotionAbility(thisDoctrineRank, "");

        let $line =  $("<tr>", {"class" : "devotionAbilityLine" + (thisDoctrineRank % 2 == 1 ? " shaded" : "")});
        $line.append($("<td>", {"html" : "Devotion Ability"}));
        let $inputTd = $("<td>", {"colspan" : "8"});
        $inputTd.append($("<input>", {"id" : "DevotionAbility" + thisDoctrineRank, "type" : "text", "class" : "devotionAbilityInput lockInPlay", "value" : Character.Questor.Ranks[thisDoctrineRank].devotionAbility}));
        $line.append($inputTd);

        return $line;
    }

    // Skills
    this.PushSkills = function()
    {
        let $Tbody = $("<tbody>");

        // Header
        let $hline = $("<tr>");
        $hline.append($("<th>", {"html" : "", "class": "hideInPlay"}));
        $hline.append($("<th>", {"html" : "Skill Name"}));
        $hline.append($("<th>", {"html" : "Category"}));
        $hline.append($("<th>", {"html" : "📚"}));
        $hline.append($("<th>", {"html" : "Action"}));
        $hline.append($("<th>", {"html" : "Strain"}));
        $hline.append($("<th>", {"html" : "Free", "class": "hideInPlay"}));
        $hline.append($("<th>", {"html" : "Rank"}));
        $hline.append($("<th>", {"html" : "Attribute"}));
        $hline.append($("<th>", {"html" : "Step"}));
        $hline.append($("<th>", {"html" : "Dice"}));

        $Tbody.append($hline);

        let $CategorySelect = $("<select>", {"class" : "skillCategorySelect lockInPlay wideInPlay"});
        $CategorySelect.append($('<option>', {value : "Empty",     text:"(Not Selected)"}));
        $CategorySelect.append($('<option>', {value : "General",   text:"General"}));
        $CategorySelect.append($('<option>', {value : "Knowledge", text:"Knowledge"}));
        $CategorySelect.append($('<option>', {value : "Artisan",   text:"Artisan"}));

        for (let i = 0; i < Character.Skills.length; i++) 
        {
            if (Character.Skills[i].ID == "Empty" && !["General","Artisan","Knowledge"].includes(Character.Skills[i].Category))
            {
                let $line = $("<tr>");

                $line.append($("<td>", {"id" : "KillSkill"     + i, "html"  : "✕", "class": "killSkill hideInPlay"}));
                $line.append($("<td>", {"id" : "SkillName"     + i, "html"  : "(Select Category)"}));

                let $categoryTd = $("<td>", {"id" : "SkillCategory"+ i});
                let $thisCategorySelect = $CategorySelect.clone();
                $thisCategorySelect.attr('id',  "SkillCategorySelect"+ i);
                $thisCategorySelect.val("Empty");
                $categoryTd.append($thisCategorySelect);
                $line.append($($categoryTd));

                $line.append($("<td>", {"id" : "SkillPage"   + i, "html"  : "-"}));
                $line.append($("<td>", {"id" : "SkillAction"   + i, "html"  : "-"}));
                $line.append($("<td>", {"id" : "SkillStrain"   + i, "html"  : "-"}));
                $line.append($("<td>", {"id" : "SkillFreeRank" + i, "html"  : "-", "class": "hideInPlay"}));
                $line.append($("<td>", {"id" : "SkillRank"     + i, "html"  : "-"}));
                $line.append($("<td>", {"id" : "SkillAttribute"+ i, "html"  : "-"}));
                $line.append($("<td>", {"id" : "SkillStep"     + i, "html"  : "-"}));
                $line.append($("<td>", {"id" : "SkillDice"     + i, "html"  : "-"}));

                $Tbody.append($line);
            }
            else
            {
                let libSkill;
                if(Character.Skills[i].ID == "Empty")
                    libSkill = {"ID" : "Empty", "Name" : "(Not Selected)", "Type" : "-", "Reference" : "-", "Step" : "-", "Attribute" : "-", "Action" : "-", "Strain" : "-", "Cost" : "free", "Category" : "General"};
                else
                    libSkill = Library.GetSkill(Character.Skills[i].ID);

                let $line = $("<tr>");

                $line.append($("<td>", {"id" : "KillSkill"     + i, "html"  : "✕", "class": "killSkill hideInPlay"}));

                let $nameTd = $("<td>");
                if (libSkill.Category == "General")
                {
                    let $skillselect;
                    $skillselect = UI.BuildGeneralSkillSelect(i);
                    $skillselect.attr('id', "SkillSelect" + i);
                    $skillselect.val(libSkill.ID);
                    $nameTd.append($skillselect);
                }
                else
                    $nameTd.append($("<input>", {"id" : "SkillName" + i, "type" : "text", "class" : libSkill.Category + "SkillInput SkillInput lockInPlay wideInPlay", "placeholder" : "Skill Name", "value" : Character.Skills[i].Name}));

                $line.append($nameTd);

                let $categoryTd = $("<td>", {"id" : "SkillCategory"+ i});
                let $thisCategorySelect = $CategorySelect.clone();
                $thisCategorySelect.attr('id',  "SkillCategorySelect"+ i);
                $thisCategorySelect.val(libSkill.Category);
                $categoryTd.append($thisCategorySelect);
                $line.append($($categoryTd));

                $line.append($("<td>", {"id" : "SkillPage"   + i, "html"  : libSkill.Reference}));
                $line.append($("<td>", {"id" : "SkillAction" + i, "html"  : libSkill.Action}));
                $line.append($("<td>", {"id" : "SkillStrain" + i, "html"  : libSkill.Strain}));

                let Rank = parseInt(Character.Skills[i].Rank);

                let $FreeRankCell = $("<td>", {"class": "hideInPlay"});
                let $RankCell     = $("<td>");

                if ((Character.Options.SkillFreeRanksLimit == "All")
                 || (Character.Options.SkillFreeRanksLimit == "Novice"     &&  libSkill.Cost == "Novice")
                 || (Character.Options.SkillFreeRanksLimit == "Journeyman" && (libSkill.Cost == "Novice" || libSkill.Cost == "Journeyman"))
                 || (Character.Options.SkillFreeRanksLimit == "Warden"     && (libSkill.Cost == "Novice" || libSkill.Cost == "Journeyman" || libSkill.Cost == "Warden")))
                    $FreeRankCell.append(UI.BuildNumbersSelect(0, 3, Character.Skills[i].Freerank, "SkillFreeRank" + i, "skillFreeRank hideInPlay"));
                else 
                    $FreeRankCell.html("&nbsp;");

                $line.append($FreeRankCell);
                
                $RankCell.append(UI.BuildNumbersSelect(0, 10, Character.Skills[i].Rank, "SkillRank" + i, "skillRank"));
                $line.append($RankCell);

                let thisStep, thisAttribute = "-";
                if (libSkill.Step == "-")
                    thisStep = libSkill.Step;
                else
                {
                    thisStep = 0;
                    let stepSplit = libSkill.Step.toLowerCase().split('+');
                    for (let j = 0; j < stepSplit.length; j++) 
                    {
                        switch (stepSplit[j])
                        {
                            case "rank":
                                thisStep += Rank;
                                break;
                            case "dex":
                                thisStep += parseInt(CharacterManager.GetDexStep());
                                thisAttribute = "Dexterity";
                                break;
                            case "str":
                                thisStep += parseInt(CharacterManager.GetStrStep());
                                thisAttribute = "Strength";
                                break;
                            case "tgh":
                            case "tou":
                                thisStep += parseInt(CharacterManager.GetTouStep());
                                thisAttribute = "Toughness";
                                break;
                            case "per":
                                thisStep += parseInt(CharacterManager.GetPerStep());
                                thisAttribute = "Perception";
                                break;
                            case "wil":
                                thisStep += parseInt(CharacterManager.GetWilStep());
                                thisAttribute = "Willpower";
                                break;
                            case "cha":
                                thisStep += parseInt(CharacterManager.GetChaStep());
                                thisAttribute = "Charisma";
                                break;
                            case "ini":
                                thisStep += parseInt(CharacterManager.GetModifiedIni());
                                thisAttribute = "(Initiative)";
                                break;
                            default:
                                if (!isNaN(stepSplit[j]))
                                {
                                    thisStep += parseInt(stepSplit[j]);
                                    thisAttribute += " + " + parseInt(stepSplit[j]);
                                }
                                break;
                        }
                    }

                    thisStep += CharacterManager.GetSkillBonus(i);

                    Character.Skills[i].Step = thisStep;
                }

                $line.append($("<td>", {"id" : "SkillAttribute" + i, "html"  : (thisAttribute == "" ? "-" : thisAttribute)}));
                $line.append($("<td>", {"id" : "SkillStep"      + i, "html"  : thisStep}));


                let theseDice; 
                if (isNaN(thisStep))
                    theseDice = "-";
                else
                    theseDice = Library.GetDice(thisStep+"");

                $line.append($("<td>", {"id" : "SkillDice"      + i, "html"  : theseDice}));

                $Tbody.append($line);
            }
        }

        let $AddSkillLine = $("<tr>", {"class" : "hideInPlay"});
        let $AddSkillTd = $("<td>", {"colspan" : "11", "Style" : "text-align: center;"});
        $AddSkillTd.append($("<div>",{"id" : "AddSkillButton", "class" : "AddButton", "html" : "+"}));
        $AddSkillLine.append($AddSkillTd);
        $Tbody.append($AddSkillLine);

        let $SkillPointsRemainingLine = $("<tr>", {"class" : "hideInPlay"});
        $SkillPointsRemainingLine.append($("<td>", {"colspan": "100%", "style" : "text-align: right;", "html" : "Remaining Skill Points: <span id='SkillPointsRemaining'>" + CharacterManager.GetRemainingSkillPoints() + "</span>"}));
        $Tbody.append($SkillPointsRemainingLine);

        $("#SkillTable > tbody").remove("");
        $("#SkillTable").append($Tbody);

        $(".ArtisanSkillInput").autocomplete({lookup: Library.ArtisanSkills.map(o => o.Name), minChars : 0, onSelect : UI.PullSkillInput});
        $(".KnowledgeSkillInput").autocomplete({lookup: Library.KnowledgeSkills.map(o => o.Name), minChars : 0, onSelect : UI.PullSkillInput});
    };

    this.UpdateRemainingSkillPoints = function()
    {
        $("#SkillPointsRemaining").html(CharacterManager.GetRemainingSkillPoints());
    };

    this.UpdateSkillFreeRank = function(thisSkillIndex)
    {
        if (0 > thisSkillIndex || thisSkillIndex > Character.Skills.length)
        {
            console.log("UI.UpdateSkillFreeRank: Input invalid or out of range: " + thisSkillIndex);
            return;
        }

        $("#SkillFreeRank" + thisSkillIndex).val(Character.Skills[thisSkillIndex].Freerank);
    };

    this.UpdateSkillRank = function(thisSkillIndex)
    {
        if (0 > thisSkillIndex || thisSkillIndex > Character.Skills.length)
        {
            console.log("UI.UpdateSkillRank: Input invalid or out of range: " + thisSkillIndex);
            return;
        }

        $("#SkillRank" + thisSkillIndex).val(Character.Skills[thisSkillIndex].Rank);
    };

    this.UpdateSkillSteps = function(attributeAbbreviation)
    {
        for (let thisSkillIndex = 0; thisSkillIndex < Character.Skills.length; thisSkillIndex++) 
        {
            if(Character.Skills[thisSkillIndex].ID != "Empty") 
                if(Library.GetSkill(Character.Skills[thisSkillIndex].ID).Attribute.toLowerCase() == attributeAbbreviation.toLowerCase() || (attributeAbbreviation.toLowerCase() == "dex" && Library.GetSkill(Character.Skills[thisSkillIndex].ID).Attribute.toLowerCase() == "ini"))
                    UI.UpdateSkillStepDice(thisSkillIndex);
        }
    };

    this.UpdateSkillStepDice = function(thisSkillIndex) 
    {
        if (isNaN(thisSkillIndex) || thisSkillIndex < 0 || thisSkillIndex > Character.Skills.length)
        {
            console.log("UI.UpdateSkillStepDice(): Input invalid or out of range: " + thisSkillIndex);
            return; 
        }

        let libSkill = Library.GetSkill(Character.Skills[thisSkillIndex].ID);

        let Rank = parseInt(Character.Skills[thisSkillIndex].Rank);

        let thisStep, thisAttribute = "";
        if (libSkill.Step == "-")
            thisStep = libSkill.Step;
        else
        {
            thisStep = 0;
            let stepSplit = libSkill.Step.toLowerCase().split('+');
            for (let j = 0; j < stepSplit.length; j++) 
            {
                switch (stepSplit[j])
                {
                    case "rank":
                        thisStep += Rank;
                        break;
                    case "dex":
                        thisStep += parseInt(CharacterManager.GetDexStep());
                        break;
                    case "str":
                        thisStep += parseInt(CharacterManager.GetStrStep());
                        break;
                    case "tgh":
                    case "tou":
                        thisStep += parseInt(CharacterManager.GetTouStep());
                        break;
                    case "per":
                        thisStep += parseInt(CharacterManager.GetPerStep());
                        break;
                    case "wil":
                        thisStep += parseInt(CharacterManager.GetWilStep());
                        break;
                    case "cha":
                        thisStep += parseInt(CharacterManager.GetChaStep());
                        break;
                    case "ini":
                        thisStep += parseInt(CharacterManager.GetModifiedIni());
                        break;
                    default:
                        if (!isNaN(stepSplit[j]))
                            thisStep += parseInt(stepSplit[j]);
                        break;
                }
            }
            thisStep += CharacterManager.GetSkillBonus(thisSkillIndex);

            Character.Skills[thisSkillIndex].Step = thisStep;
        }

        let theseDice; 
        if (isNaN(thisStep))
            theseDice = "-";
        else
            theseDice = Library.GetDice(thisStep+"");

        $("#SkillStep" + thisSkillIndex).html(thisStep);
        $("#SkillDice" + thisSkillIndex).html(theseDice);
    };

    this.PushSpells = function()
    {
        if(CharacterManager.IsSpellCaster() == false)
        {
            $("#Spells").hide();
            return;
        }

         
        let $Tbody = $("<tbody>");

        // Header
        let $hline = $("<tr>");
        $hline.append($("<th>", {"html" : "", "class" : "hideInPlay"}));
        $hline.append($("<th>", {"html" : "Spell Name"}));
        $hline.append($("<th>", {"html" : "Discipline"}));
        $hline.append($("<th>", {"html" : "Circle"}));
        $hline.append($("<th>", {"html" : "📚"}));

        $Tbody.append($hline);

        let $line = ""; 

        for (let thisSpellIndex = 0; thisSpellIndex < Character.Spells.length; thisSpellIndex++) 
        {
            if (Character.Spells[thisSpellIndex].ID == "Empty")
            {
                $line  = $("<tr>", {"id" : "Spell_Line"  + thisSpellIndex});
                $line.append($("<td>", {"id" : "KillSpell"   + thisSpellIndex, "html"  : "✕", "class" : "killSpell hideInPlay"}));

                let $nameTd = $("<td>");
                let $spellselect;
                $spellselect = UI.BuildSpellSelect(thisSpellIndex);
                $spellselect.attr('id', "SpellSelect" + thisSpellIndex);
                $spellselect.val(Character.Spells[thisSpellIndex].ID);
                $nameTd.append($spellselect);
                $line.append($nameTd);

                $line.append($("<td>", {"id" : "SpellDisc"   + thisSpellIndex, "html"  : "-"}));
                $line.append($("<td>", {"id" : "SpellCircle" + thisSpellIndex, "html"  : "-"}));
                $line.append($("<td>", {"id" : "SpellPage"   + thisSpellIndex, "html"  : "-"}));
            }
            else
            {
                let thisSpell = Library.GetSpell(Character.Spells[thisSpellIndex].ID);

                $line  = $("<tr>", {"id" : "Spell_Line"  + thisSpellIndex});
                $line.append($("<td>", {"id" : "KillSpell"   + thisSpellIndex, "html"  : "✕", "class" : "killSpell hideInPlay"}));

                let $nameTd = $("<td>");
                let $spellselect;
                $spellselect = UI.BuildSpellSelect(thisSpellIndex);
                $spellselect.attr('id', "SpellSelect" + thisSpellIndex);
                $spellselect.val(Character.Spells[thisSpellIndex].ID);
                $nameTd.append($spellselect);
                $line.append($nameTd);

                $line.append($("<td>", {"id" : "SpellDisc"   + thisSpellIndex, "html"  : Library.GetDiscipline(thisSpell.Discipline).Name}));
                $line.append($("<td>", {"id" : "SpellCircle" + thisSpellIndex, "html"  : thisSpell.Circle}));
                $line.append($("<td>", {"id" : "SpellPage"   + thisSpellIndex, "html"  : thisSpell.Reference}));
            }
            $Tbody.append($line);
        }

        let $AddSpellLine = $("<tr>", {"class" : "hideInPlay"});
        let $AddSpellTd = $("<td>", {"colspan" : "5", "Style" : "text-align: center;"});
        $AddSpellTd.append($("<div>",{"id" : "AddSpellButton", "class" : "AddButton", "html" : "+"}));
        $AddSpellLine.append($AddSpellTd);
        $Tbody.append($AddSpellLine);

        let $SpellPointsRemainingLine = $("<tr>", {"class" : "hideInPlay"});
        $SpellPointsRemainingLine.append($("<td>", {"colspan": "100%", "style" : "text-align: right;", "html" : "Remaining Spell Points: <span id='SpellPointsRemaining'>" + CharacterManager.GetRemainingSpellPoints() + "</span>"}));
        $Tbody.append($SpellPointsRemainingLine);


        $("#SpellTable > tbody").remove("");
        $("#SpellTable").append($Tbody);
        $("#Spells").show();
    };    

    this.PushEquipment = function()
    {
        let $Tbody = $("<tbody>");

        // Header
        let $hline = $("<tr>");
        $hline.append($("<th>", {"html" : "", "class" : "hideInPlay"}));
        $hline.append($("<th>", {"html" : "In Use"}));
        $hline.append($("<th>", {"html" : "Type"}));
        $hline.append($("<th>", {"html" : "Equipment"}));
        $hline.append($("<th>", {"html" : "Name / description"}));
        $hline.append($("<th>", {"html" : "#"}));
        $hline.append($("<th>", {"html" : "📚"}));
        $hline.append($("<th>", {"html" : "💰"}));
        $hline.append($("<th>", {"html" : "Weight"}));

        $Tbody.append($hline);

        let typeSelect = UI.BuildEquipmentTypeSelect();

        for (let thisEqIndex = 0; thisEqIndex < Character.Equipment.length; thisEqIndex++) 
        {
            let chaEq = Character.Equipment[thisEqIndex];
            let libEq = Library.GetEquipment(chaEq.ID);

            if(libEq == undefined)
                libEq = {"Cost" : "-", "Weight" : "-"};
            if (chaEq.Type != undefined && chaEq.ID != "Empty")
                libEq.Type = chaEq.Type;
            if (chaEq.Type == undefined && chaEq.ID != "Empty")
                chaEq.Type = libEq.Type;

            let shading = (thisEqIndex%2 != 1 ? "eqEven" : "eqOdd");

            let $line = $("<tr>", {"id" : "Eq_Line"  + thisEqIndex, "class" : shading});
            $line.append($("<td>", {"id" : "KillEq"   + thisEqIndex, "html"  : "✕", "class" : "killEq hideInPlay"}));

            let $InUseCell = $("<td>");
            if (["Armor", "Shield", "Blood Charm", "Thread Item"].includes(libEq.Type))
                $InUseCell.append($("<input>", {"id" : "EqInUse" + thisEqIndex, "class" : "checkbox-custom eqInUse", "type" : "checkbox", "checked" : (chaEq.InUse == "Yes" ? true : false) }));
            else
                $InUseCell.html("&nbsp;");
            $line.append($InUseCell);

            let $typeTd = $("<td>");
            let $eqTypeselect = typeSelect.clone();
            $eqTypeselect.attr('id', "EqTypeSelect" + thisEqIndex);
            $eqTypeselect.val(chaEq.Type);
            $typeTd.append($eqTypeselect);
            $line.append($typeTd);

            let $selectTd = $("<td>");
            let $eqselect = UI.BuildEquipmentSelect(chaEq.Type);
            $eqselect.attr('id', "EqSelect" + thisEqIndex);
            $eqselect.val(chaEq.ID);
            $selectTd.append($eqselect);
            $line.append($selectTd);

            $line.append($("<td>", {"html"  : "<input type='Text' id='EqName" + thisEqIndex + "',  class='eqName lockInPlay' value='" + (chaEq.Name != undefined ? chaEq.Name : "") + "' />"}));
            
            $line.append($("<td>", {"html"  : "<input id='EqCount" + thisEqIndex + "' type='Number' class='eqCount lockInPlay' value='" + chaEq.Count + "' />" }));
            $line.append($("<td>", {"id" : "EqPage"   + thisEqIndex, "html"  : (libEq.Reference == undefined ? "-" : libEq.Reference)}));
            $line.append($("<td>", {"id" : "EqValue"  + thisEqIndex, "html"  :  libEq.Cost}));
            $line.append($("<td>", {"id" : "EqWeight" + thisEqIndex, "html"  :  libEq.Weight}));
            $Tbody.append($line);

            let thisMisc = "";

            for (let key in libEq)
            { 
                if (libEq.hasOwnProperty(key)) 
                {
                    switch(key)
                    {
                        case "ID":
                        case "Name":
                        case "Type":
                        case "Cost":
                        case "Weight":
                        case "Availability":
                        case "Reference":
                            break;
                        case "Ranks":
                            let thisRank = 0;
                            if (!isNaN(chaEq.Rank))
                                thisRank = parseInt(chaEq.Rank);
                            if (thisMisc != "")
                                thisMisc += ", ";

                            let $rankSelect = UI.BuildNumbersSelect(0, libEq.Ranks.length, thisRank, "EqRank" + thisEqIndex, "eqRank");
                            thisMisc +="<br />Rank: " + $rankSelect[0].outerHTML + ": ";
                            let rankDescription = ""; 
                            let libRank = libEq.Ranks.find(o => o.Rank === thisRank+"");
                            if (libRank != undefined)
                            {
                                if (libRank.Modifiers != undefined)
                                    for (let RankModifierKey in libRank.Modifiers) 
                                        if (libRank.Modifiers.hasOwnProperty(RankModifierKey)) 
                                        {
                                            if (rankDescription != "")
                                                rankDescription += ", ";
                                            switch (RankModifierKey)
                                            {
                                                case "Talents":
                                                    rankDescription += "Talents: ";
                                                    for (let RankTalentKey in libRank.Modifiers.Talents) 
                                                    {
                                                        if (RankTalentKey != 0)
                                                            rankDescription += ", ";
                                                        if (libRank.Modifiers.Talents[RankTalentKey].ID == "ED4ThreadWeaving")
                                                            rankDescription += "Thread Weaving (all) +" + libRank.Modifiers.Talents[RankTalentKey].Modifier;
                                                        else
                                                            rankDescription += Library.GetTalent(libRank.Modifiers.Talents[RankTalentKey].ID).Name + " +" + libRank.Modifiers.Talents[RankTalentKey].Modifier;
                                                    }
                                                    break;
                                                case "Skills": 
                                                    rankDescription += "Skills: ";
                                                    for (let RankSkillKey in libRank.Modifiers.Skills) 
                                                    {
                                                        if (RankSkillKey != 0)
                                                            rankDescription += ", ";
                                                        rankDescription += Library.GetSkill(libRank.Modifiers.Skills[RankSkillKey].ID).Name + " +" + libRank.Modifiers.Skills[RankSkillKey].Modifier;
                                                    }
                                                    break;
                                                default:
                                                    rankDescription += Library.GetFullName(RankModifierKey) + ": " + libRank.Modifiers[RankModifierKey];
                                            }
                                            
                                        }
                                if (libRank.BonusTalent != undefined)
                                        {
                                            if (rankDescription != "")
                                                rankDescription += ", ";
                                            rankDescription += "Bonus Talent: " + Library.GetTalent(libRank.BonusTalent.ID).Name + " rank " + libRank.BonusTalent.Rank;
                                        }
                                if (libRank.Effect != undefined)
                                        {
                                            if (rankDescription != "")
                                                rankDescription += ", ";
                                            rankDescription += libRank.Effect;
                                        }
                            }
                            thisMisc += rankDescription;
                            break;
                        case "DmgStep":
                            if (thisMisc != "")
                                thisMisc += ", ";

                            let dmgStep = parseInt(libEq[key]) + (!isNaN(chaEq.Forged) ? parseInt(chaEq.Forged) : 0);

                            if (libEq.Ranks != undefined && chaEq.Rank != undefined)
                            {
                                let libRank = libEq.Ranks.find(o => o.Rank == chaEq.Rank);
                                if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.DmgStep != undefined)
                                    dmgStep += parseInt(libRank.Modifiers.DmgStep);
                            }

                            if (libEq.Type == "Melee Weapon" || (libEq.Type == "Thread Item" && "BaseType" == "Melee Weapon"))
                                dmgStep += CharacterManager.GetMeleeDamageBonus();

                            let finalDamageStep = dmgStep + parseInt(CharacterManager.GetStrStep());

                            chaEq.DamageStep = finalDamageStep;

                            thisMisc += "Damage Step: <span id='Equipment" + thisEqIndex + "DamageStep'>" + dmgStep +"</span> (<span id='Equipment" + thisEqIndex + "FinalDamageStep'>" + finalDamageStep + " </span> / <span id='Equipment" + thisEqIndex + "FinalDamageDice'>" + Library.GetDice(finalDamageStep) + "</span>)";
                            break;
                        case "StrMin":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += "Strength Requirement: " + libEq[key];
                            break;
                        case "DexMin":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += "Dexterity Requirement: " + libEq[key];
                            break;
                        case "PhArm":
                            if (thisMisc != "")
                                thisMisc += ", ";

                            let thisPhArm = parseInt(libEq[key]) + (!isNaN(chaEq.PhForge) ? parseInt(chaEq.PhForge) : 0);

                            if (libEq.Ranks != undefined && chaEq.Rank != undefined)
                            {
                                let libRank = libEq.Ranks.find(o => o.Rank == chaEq.Rank);
                                if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.PhArm != undefined)
                                    thisMisc += "Physical Armor: <span id='Equipment" + thisEqIndex + "PhArm'>(" + thisPhArm + " " + (libRank.Modifiers.PhArm >= 0 ? "+" : "") + libRank.Modifiers.PhArm + ") " + (parseInt(thisPhArm) + parseInt(libRank.Modifiers.PhArm)) + "</span>";
                                else
                                    thisMisc += "Physical Armor: <span id='Equipment" + thisEqIndex + "PhArm'>" + thisPhArm + "</span>";
                            }
                            else
                                thisMisc += "Physical Armor: <span id='Equipment" + thisEqIndex + "PhArm'>" + thisPhArm + "</span>";
                            break;
                        case "MyArm":
                            if (thisMisc != "")
                                thisMisc += ", ";

                            let thisMyArm = parseInt(libEq[key]) + (!isNaN(chaEq.MyForge) ? parseInt(chaEq.MyForge) : 0);

                            if (libEq.Ranks != undefined && chaEq.Rank != undefined)
                            {
                                let libRank = libEq.Ranks.find(o => o.Rank == chaEq.Rank);
                                if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.MyArm != undefined)
                                    thisMisc += "Mystical Armor: <span id='Equipment" + thisEqIndex + "MyArm'>(" + thisMyArm + " " + (libRank.Modifiers.MyArm >= 0 ? "+" : "") + libRank.Modifiers.MyArm + ") " + (parseInt(thisMyArm) + parseInt(libRank.Modifiers.MyArm)) + "</span>";
                                else
                                    thisMisc += "Mystical Armor: <span id='Equipment" + thisEqIndex + "MyArm'>" + thisMyArm + "</span>";
                            }
                            else
                                thisMisc += "Mystical Armor: <span id='Equipment" + thisEqIndex + "MyArm'>" + thisMyArm + "</span>";
                            break;

                            break;
                        case "IniPen":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            if (libEq.Ranks != undefined && chaEq.Rank != undefined)
                            {
                                let libRank = libEq.Ranks.find(o => o.Rank == chaEq.Rank);
                                if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.IniPen != undefined)
                                    thisMisc += "Intiative penalty: (" + libEq[key] + " " + (libRank.Modifiers.IniPen >= 0 ? "+" : "") + libRank.Modifiers.IniPen + ") " + (parseInt(libEq[key]) + parseInt(libRank.Modifiers.IniPen)) + "*";
                                else
                                    thisMisc += "Intiative penalty: " + libEq[key];
                            }
                            else
                                thisMisc += "Intiative penalty: " + libEq[key];
                            break;
                        case "PhRating":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            if (libEq.Ranks != undefined && chaEq.Rank != undefined)
                            {
                                let libRank = libEq.Ranks.find(o => o.Rank == chaEq.Rank);
                                if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.PhRating != undefined)
                                    thisMisc += "Physical Rating: (" + libEq[key] + " " + (libRank.Modifiers.PhRating >= 0 ? "+" : "") + libRank.Modifiers.PhRating + ") " + (parseInt(libEq[key]) + parseInt(libRank.Modifiers.PhRating)) + "*";
                                else
                                    thisMisc += "Physical Rating: " + libEq[key];
                            }
                            else
                                thisMisc += "Physical Rating: " + libEq[key];
                            break;
                        case "MyRating":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            if (libEq.Ranks != undefined && chaEq.Rank != undefined)
                            {
                                let libRank = libEq.Ranks.find(o => o.Rank == chaEq.Rank);
                                if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.MyRating != undefined)
                                    thisMisc += "Mystical Rating: (" + libEq[key] + " " + (libRank.Modifiers.MyRating >= 0 ? "+" : "") + libRank.Modifiers.MyRating + ") " + (parseInt(libEq[key]) + parseInt(libRank.Modifiers.MyRating)) + "*";
                                else
                                    thisMisc += "Mystical Rating: " + libEq[key];
                                }
                            else
                                thisMisc += "Mystical Rating: " + libEq[key];
                            break;
                        case "SpellDefense":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += "Spell Defense: " + libEq[key];
                            break;
                        case "BaseLPCost":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += "Rank 1 Cost: " + libEq[key];
                            break;
                        case "Modifiers":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += "Modifiers: ";
                            let modifierString = "";
                            for (let modifier in libEq.Modifiers)
                            { 
                                if (libEq.Modifiers.hasOwnProperty(modifier)) 
                                {
                                    if (modifierString != "")
                                        modifierString += ", ";
                                    modifierString += Library.GetFullName(modifier) + " : " + libEq.Modifiers[modifier];
                                }
                            }
                            thisMisc += modifierString;
                            break;
                        case "Description":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += "<br/>" + key + ": " + libEq[key];
                            break;
                        case "BaseType":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += "Base Type" + ": " + libEq[key];
                            break;
                        case "Shatter":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += "Shatter Theshold" + ": " + libEq[key];
                            break;
                        case "BloodDamage":
                        case "Size":
                        case "Special":
                        case "BaseType":
                        case "Forgeable":
                        case "Deal":
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += key + ": " + libEq[key];
                            break; 
                        default:
                            if (thisMisc != "")
                                thisMisc += ", ";
                            thisMisc += key + ": " + libEq[key];
                            console.log("unknown Item property:" + libEq.ID + ": " + key + ": " + libEq[key])
                            break; 
                    }
                }
            }

            if (["Melee Weapon", "Missile Weapon", "Thrown"].includes(libEq.Type) || (libEq.Forgeable != undefined && ["Weapon", "Both"].includes(libEq.Forgeable)))
            {
                let Forged  = (!isNaN(chaEq.Forged)  ? chaEq.Forged  : 0);
                thisMisc += "<br />Forged : +" + UI.BuildNumbersSelect(0, 15, Forged, "EqForge" + thisEqIndex, "eqForge")[0].outerHTML;
            }

            if (libEq.Type == "Armor" || (libEq.Forgeable != undefined && ["Armor", "Both"].includes(libEq.Forgeable)))
            {
                let phForge = (!isNaN(chaEq.PhForge) ? chaEq.PhForge : 0);
                let myForge = (!isNaN(chaEq.MyForge) ? chaEq.MyForge : 0);

                thisMisc += "<br />Forged : (";
                thisMisc += UI.BuildNumbersSelect(0, 15, phForge, "EqPhForge" + thisEqIndex, "eqPhForge")[0].outerHTML + "/"; 
                thisMisc += UI.BuildNumbersSelect(0, 15, myForge, "EqMyForge" + thisEqIndex, "eqMyForge")[0].outerHTML + ")"; 
            }

            if (thisMisc != "")
            {
                let $add = $("<tr>", {"id" : "Eq_Line_Additional"  + thisEqIndex, "class" : shading});
                $add.append($("<td>", {"html" : "", "class" : "hideInPlay"}));
                $add.append($("<td>", {"html" : ""}));
                $add.append($("<td>", {"html" : ""}));
                $add.append($("<td>", {"id" : "EqAdd"+ thisEqIndex, "colspan" : "6", "class" : "eqAdd", "html" : thisMisc}));
                $Tbody.append($add);
            }

        }

        let $AddEqLine = $("<tr>", {"class" : "hideInPlay"});
        let $AddEqTd = $("<td>", {"colspan" : "9", "Style" : "text-align: center;"});
        $AddEqTd.append($("<div>",{"id" : "AddEqButton", "class" : "AddButton", "html" : "+"}));
        $AddEqLine.append($AddEqTd);
        $Tbody.append($AddEqLine);

        $("#EquipmentTable > tbody").remove("");
        $("#EquipmentTable").append($Tbody);
    };

    this.UpdateDamageStep = function(thisEqIndex)
    {
        if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
        {
            console.log("UI.UpdateDamageStep(): Input invalid or out of range: " + thisEqIndex);
            return; 
        }
        let chaEq = Character.Equipment[thisEqIndex];
        let libEq = Library.GetEquipment(chaEq.ID);

        if (libEq.DmgStep == undefined)
        {
            console.log("UI.UpdateDamageStep(): The item: " + libEq.Name + " doesn't appear to have a damage step. Why am I trying to update it then?");
            return; 
        }

        let dmgStep = parseInt(libEq.DmgStep) + (!isNaN(chaEq.Forged) ? parseInt(chaEq.Forged) : 0);

        if (libEq.Ranks != undefined && chaEq.Rank != undefined)
        {
            let libRank = libEq.Ranks.find(o => o.Rank == chaEq.Rank);
            if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.DmgStep != undefined)
                dmgStep += parseInt(libRank.Modifiers.DmgStep);
        }

        if (libEq.Type == "Melee Weapon" || (libEq.Type == "Thread Item" && "BaseType" == "Melee Weapon"))
            dmgStep += CharacterManager.GetMeleeDamageBonus();

        let finalDamageStep = dmgStep + parseInt(CharacterManager.GetStrStep());

        chaEq.DamageStep = finalDamageStep;

        $("#Equipment" + thisEqIndex + "DamageStep").html(dmgStep);
        $("#Equipment" + thisEqIndex + "FinalDamageStep").html(finalDamageStep);
        $("#Equipment" + thisEqIndex + "FinalDamageDice").html(Library.GetDice(finalDamageStep));
    };

    this.UpdateArmorValues = function(thisEqIndex)
    {
        if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
        {
            console.log("UI.UpdateArmorValues(): Input invalid or out of range: " + thisEqIndex);
            return; 
        }

        let chaEq = Character.Equipment[thisEqIndex];

        if  (chaEq.ID == "Empty")
        {
            console.log("UI.UpdateArmorValues(): The selected item is unselected. How am I trying to update it's armor values again? " + thisEqIndex);
            return; 
        }

        let libEq = Library.GetEquipment(chaEq.ID);

        let thisPhArm = parseInt(libEq.PhArm) + (!isNaN(chaEq.PhForge) ? parseInt(chaEq.PhForge) : 0);

        if (libEq.Ranks != undefined && chaEq.Rank != undefined)
        {
            let libRank = libEq.Ranks.find(o => o.Rank == chaEq.Rank);
            if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.PhArm != undefined)
                $("#Equipment" + thisEqIndex + "PhArm").html("(" + thisPhArm + " " + (libRank.Modifiers.PhArm >= 0 ? "+" : "") + libRank.Modifiers.PhArm + ") " + (parseInt(thisPhArm) + parseInt(libRank.Modifiers.PhArm)));
            else
                $("#Equipment" + thisEqIndex + "PhArm").html(thisPhArm);
        }
        else
            $("#Equipment" + thisEqIndex + "PhArm").html(thisPhArm);

        let thisMyArm = parseInt(libEq.MyArm) + (!isNaN(chaEq.MyForge) ? parseInt(chaEq.MyForge) : 0);

        if (libEq.Ranks != undefined && chaEq.Rank != undefined)
        {
            let libRank = libEq.Ranks.find(o => o.Rank == chaEq.Rank);
            if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.MyArm != undefined)
                $("#Equipment" + thisEqIndex + "MyArm").html("(" + thisMyArm + " " + (libRank.Modifiers.MyArm >= 0 ? "+" : "") + libRank.Modifiers.MyArm + ") " + (parseInt(thisMyArm) + parseInt(libRank.Modifiers.MyArm)));
            else
                $("#Equipment" + thisEqIndex + "MyArm").html(thisMyArm);
        }
        else
            $("#Equipment" + thisEqIndex + "MyArm").html(thisMyArm);
    }

    this.PushMagic = function()
    {
        // Thread and Blood Magic

        let $Tbody = $("<tbody>");

        // Header
        let $hline = $("<tr>");
        $hline.append($("<th>", {"html" : "", "class" : "hideInPlay"}));
        $hline.append($("<th>", {"html" : "Applicable"}));
        $hline.append($("<th>", {"html" : "Name"}));
        $hline.append($("<th>", {"html" : "Target"}));
        $hline.append($("<th>", {"html" : "📚"}));
        $hline.append($("<th>", {"html" : "Effect(s)"}));

        $Tbody.append($hline);

        if (Character.Magic != undefined)
            for (let thisMagicIndex = 0; thisMagicIndex < Character.Magic.length; thisMagicIndex++) 
            {
                let chaMagic = Character.Magic[thisMagicIndex];
                let libMagic = Library.GetMagic(chaMagic.ID);

                if (libMagic == undefined)
                    libMagic = {};

                let $line = $("<tr>", {"id" : "Magic_Line"  + thisMagicIndex});
                $line.append($("<td>", {"id" : "KillMagic"   + thisMagicIndex, "html"  : "✕", "class" : "killMagic hideInPlay"}));

                let $ApplicableCell = $("<td>");
                if (libMagic.Situational != undefined && libMagic.Situational == "Yes")
                    $ApplicableCell.append($("<input>", {"id" : "MagicApplicable" + thisMagicIndex, "class" : "checkbox-custom magicApplicable", "type" : "checkbox", "checked" : (chaMagic.Applicable == "Yes" ? true : false) }));
                else
                    $ApplicableCell.html("&nbsp;");
                $line.append($ApplicableCell);

                let $selectTd = $("<td>");
                let $magicSelect;
                $magicSelect = UI.BuildMagicIDSelect();
                $magicSelect.attr('id', "MagicSelect" + thisMagicIndex);
                $magicSelect.val(chaMagic.ID);
                $selectTd.append($magicSelect);
                $line.append($selectTd);

                $line.append($("<td>", {"html"  : "<input type='Text' id='MagicTarget" + thisMagicIndex + "',  class='magicTarget lockInPlay' value='" + (chaMagic.Target != undefined ? chaMagic.Target : "") + "' />"}));
                $line.append($("<td>", {"id" : "MagicPage"   + thisMagicIndex, "html"  : (libMagic.Reference == undefined ? "-" : libMagic.Reference), "style" : "white-space:nowrap;"}));
    
                let $effectTd = $("<td>");

                if(libMagic.Damage != undefined)
                    $effectTd.append($("<span>",{"html" : ($effectTd.html().length > 0 ? ", " : "" ) + "Blood Damage: " + libMagic.Damage}));
                if(libMagic.Wound != undefined)
                    $effectTd.append($("<span>",{"html" : ($effectTd.html().length > 0 ? ", " : "" ) + "Blood Wound: " + libMagic.Wound}));
                if(libMagic.Limit != undefined)
                    $effectTd.append($("<span>",{"html" : ($effectTd.html().length > 0 ? ", " : "" ) + "Limit: " + libMagic.Limit}));
                if(libMagic.BonusTalent != undefined)
                    $effectTd.append($("<span>",{"html" : ($effectTd.html().length > 0 ? ", " : "" ) + "Bonus Talent: " + Library.GetTalent(libMagic.BonusTalent).Name}));
                if(libMagic.Modifier != undefined)
                {
                    if (libMagic.Modifier.Dth != undefined)
                        $effectTd.append($("<span>",{"html" : ($effectTd.html().length > 0 ? ", " : "" ) + "Death Rating: +" + libMagic.Modifier.Dth}));
                    if (libMagic.Modifier.OneTalentorSkill != undefined)
                    {
                        $effectTd.append($("<span>",{"html" : ($effectTd.html().length > 0 ? ", " : "" ) + "Talent or Skill: "}));
                        let $talentorSkillSelect = UI.BuildTalentOrSkillSelect();
                        $talentorSkillSelect.attr('id', "MagicTalentOrSkillSelect" + thisMagicIndex);
                        if(chaMagic.TalentOrSkill != undefined)
                            $talentorSkillSelect.val(chaMagic.TalentOrSkill);
                        $effectTd.append($talentorSkillSelect);
                        $effectTd.append($("<span>",{"html" : " +2"}));
                    }
                    if (libMagic.Modifier.Attribute1 != undefined)
                    {
                        $effectTd.append($("<span>",{"html" : ($effectTd.html().length > 0 ? ", " : "" )}));
                        let $attribute1Select = UI.BuildAttributeSelect();
                        $attribute1Select.attr('id', "MagicAttribute1Select" + thisMagicIndex);
                        if(chaMagic.Attribute1 != undefined)
                            $attribute1Select.val(chaMagic.Attribute1);
                        $effectTd.append($attribute1Select);
                        $effectTd.append($("<span>",{"html" : " +2"}));
                    }
                    if (libMagic.Modifier.Attribute2 != undefined)
                    {
                        $effectTd.append($("<span>",{"html" : ($effectTd.html().length > 0 ? ", " : "" )}));
                        let $attribute2Select = UI.BuildAttributeSelect();
                        $attribute2Select.attr('id', "MagicAttribute2Select" + thisMagicIndex);
                        if(chaMagic.Attribute2 != undefined)
                            $attribute2Select.val(chaMagic.Attribute2);
                        $effectTd.append($attribute2Select);
                        $effectTd.append($("<span>",{"html" : " +1"}));
                    }
                }
                if (libMagic.Threadable != undefined)
                {
                    for (let i = 0; i < parseInt(libMagic.Threadable); i++) 
                    {
                        let $ThreadTargetSelect = UI.BuildThreadTargetSelect(thisMagicIndex, libMagic.Threadable, i);
                        $effectTd.append($("<span>",{"html" : ($effectTd.html().length > 0 ? "<br/>" : "" )}));
                        $ThreadTargetSelect.attr('id', "MagicThreadTarget" + i + "Select" + thisMagicIndex);
                        if (chaMagic.Threads != undefined && chaMagic.Threads[i] != undefined && chaMagic.Threads[i].Target != undefined)
                            $ThreadTargetSelect.val(chaMagic.Threads[i].Target);
                        $effectTd.append($ThreadTargetSelect);

                        let rank = 0;
                        if (chaMagic.Threads != undefined && chaMagic.Threads[i] != undefined && chaMagic.Threads[i].Rank != undefined)
                            rank = parseInt(chaMagic.Threads[i].Rank);

                        $effectTd.append($("<span>", {"html" : " +"}));
                        $effectTd.append(UI.BuildNumbersSelect(0, libMagic.MaxRank, rank, "MagicThreadRank" + i + "Input" + thisMagicIndex, "magicThreadRank lockInPlay"));
                    }
                }

                $line.append($effectTd);

                $Tbody.append($line);
            }

        let $AddMagicLine = $("<tr>", {"class" : "hideInPlay"});
        let $AddMagicTd = $("<td>", {"colspan" : "6", "Style" : "text-align: center;"});
        $AddMagicTd.append($("<div>",{"id" : "AddMagicButton", "class" : "AddButton", "html" : "+"}));
        $AddMagicLine.append($AddMagicTd);
        $Tbody.append($AddMagicLine);

        $("#MagicTable > tbody").remove("");
        $("#MagicTable").append($Tbody);
    };

    this.PushAbilities = function()
    {
        let $Tbody = $("<tbody>");
        let builder;

        // Race
        if (Library.GetRace(Character.Race).Abilities != undefined)
        {   
            let libRace = Library.GetRace(Character.Race);
            let $line =  $("<tr>");
            $line.append($("<td>", {"html" : libRace.Name}));
            $line.append($("<td>", {"html" : libRace.Abilities}));
            $Tbody.append($line);
        }

        // Circle
        for (let thisDiscipline = 0; thisDiscipline < Character.Disciplines.length; thisDiscipline++) 
            if (Character.Disciplines[thisDiscipline].ID != "Empty") 
                for (let thisCircle = 0; thisCircle < parseInt(Character.Disciplines[thisDiscipline].Circle); thisCircle++) 
                {
                    let thisLibraryDiscipline = Library.GetDiscipline(Character.Disciplines[thisDiscipline].ID);
                    let thisLibraryCircle = thisLibraryDiscipline.Circles[thisCircle];

                    builder = "";

                    if (thisLibraryCircle.Ability != undefined)
                        builder += thisLibraryCircle.Ability;
                    if (thisLibraryCircle.Modifiers != undefined)
                        for (let i = 0; i < Object.keys(thisLibraryCircle.Modifiers).length; i++) 
                        {
                            if (builder != "")
                                builder += ", ";

                            let key = Object.keys(thisLibraryCircle.Modifiers)[i];
                            let keyName = Library.GetFullName(key);
        
                            builder += keyName + " " + thisLibraryCircle.Modifiers[key];
                        }

                    if (builder != "")
                    {                    
                        let $line =  $("<tr>");
                        $line.append($("<td>", {"html" : thisLibraryDiscipline.Name + " " + thisLibraryCircle.Circle}));
                        $line.append($("<td>", {"html" : builder}));
                        $Tbody.append($line);
                    }
                }

        // Paths
        for (let i = 0; i < Character.Paths.length; i++) 
        {
            if (Character.Paths[i].ID != "Empty") 
                for (let j = 1; j <= parseInt(Character.Paths[i].Rank); j++) 
                {
                    let thisRank = Library.GetPath(Character.Paths[i].ID).Ranks[j-1];
                    builder = "";

                    if(thisRank.Modifiers != undefined)
                    {
                        for (const modifier in thisRank.Modifiers)
                        {
                            if (builder != "")
                                builder += ", ";
                            builder += Library.GetFullName(modifier) + " " + thisRank.Modifiers[modifier]; 
                        }
                    }
                    if (builder != "")
                    {
                        let $line = $("<tr>");
                        $line.append($("<td>", {"html" : Library.GetPath(Character.Paths[i].ID).Name + " " + j}));
                        $line.append($("<td>", {"html" : builder}));
                        $Tbody.append($line);
                    }
                }
        }

        // Questor
        if (Character.Questor != undefined && Character.Questor.Doctrine != "Empty" && Character.Questor.Rank > 0) 
        {
            let libRank = Library.GetDoctrine(Character.Questor.Doctrine).Ranks[Character.Questor.Rank-1];
            builder = "";

            if (libRank.Modifiers != undefined)
            {
                for (const modifier in libRank.Modifiers)
                {
                    if (builder != "")
                        builder += ", ";
                    builder += Library.GetFullName(modifier) + " " + libRank.Modifiers[modifier]; 
                }
            }
            if (builder != "")
            {
                let $line = $("<tr>");
                $line.append($("<td>", {"html" : "Questor of " + Library.GetDoctrine(Character.Questor.Doctrine).Name + " " + Character.Questor.Rank}));
                $line.append($("<td>", {"html" : builder}));
                $Tbody.append($line);
            }
        }


        if (Character.Disciplines.length + Character.Paths.length > 1)
        {
            builder = "";
            let CombinedBonuses = CharacterManager.CalculateDisciplineBonuses();

            for (const modifier in CombinedBonuses)
            {
                if (builder != "")
                    builder += ", ";
                builder += Library.GetFullName(modifier) + " +" + CombinedBonuses[modifier]; 
            }
            if (builder != "")
            {
                let $line = $("<tr>", {"style" : "border-top: 1px solid black;"});
                $line.append($("<td>", {"html" : "Combined stat bonuses"}));
                $line.append($("<td>", {"html" : builder}));
                $Tbody.append($line);
            }
        }

        $("#AbilityTable > tbody").remove("");
        $("#AbilityTable").append($Tbody);
    };

    this.PushSpellMatrices = function()
    {
        $("#MatrixCardsWrapper").html("");

        let MatricesFound = false; 
        // Look up the Matrices
        for (let i = 0; i < Character.Talents.length; i++) 
        {   
            if (Character.Talents[i].ID != "Empty")
            {

                let thisTalent = Library.GetTalent(Character.Talents[i].ID);
                if (thisTalent.Type == "Matrix")
                {
                    this.AddMatrix(i, Character.Talents[i], thisTalent);
                    MatricesFound = true;
                }
            }
        }
        if(MatricesFound == false)
        {
            $("#Matrix").css("display","none");
            $("#Matrix").css("Visibility","Collapsed");
            return;
        }
        else
            $("#Matrix").css("display","block");
    };

    this.AddMatrix = function(index, characterTalent, libraryTalent)
    {
        // Get Matrix rank
        let rank = 0;
        if (characterTalent.Type == "Free")
        {    
            for (let i = 0; i < Character.Disciplines.length; i++) 
                if(Character.Talents[index].DisciplineId.includes(Character.Disciplines[i].ID) && parseInt(Character.Disciplines[i].Circle) > rank)
                    rank = parseInt(Character.Disciplines[i].Circle);
        }
        else 
            rank = parseInt(characterTalent.Rank);

        let $card = $("<div>", {id : "MatrixCard" + index, "class" : "MatrixCard"});
        $card.append($("<div>", {"class" : "MatrixCardName",         "text" : libraryTalent.Name}));
        $card.append($("<div>", {"class" : "MatrixCardRank",         "text" : "Source: " + characterTalent.Source + " " + characterTalent.Type + ", Rank: " + rank}));

        // Build Select statement
        let $select = $("<select>", {"class" : "MatrixCardSelect", id : "MatrixCardSelect" + index}); 
        $select.append($("<option>", {"value": "", "text": "(Empty)"}));
        for(let i = 0; i< Character.Spells.length; i++)
        {   
            if (Character.Spells[i].ID != "Empty")
            {
                let librarySpell = Library.GetSpell(Character.Spells[i].ID);
                if (parseInt(librarySpell.Circle) <= rank)
                    if (librarySpell.ID == characterTalent.Spell)
                        $select.append($("<option>", {"value": Character.Spells[i].ID, "selected" : "selected", text: librarySpell.Name}));
                    else
                        $select.append($("<option>", {"value": Character.Spells[i].ID, "text": librarySpell.Name}));
            }
        }
        $card.append($select);

        let $SpellcardWrapper = $("<div>", {"class" : "MatrixCardSpellWrapper", "id": "MatrixSpellWrapper" + index});
            $card.append($SpellcardWrapper);

        if(characterTalent.Spell != undefined)
            if (Library.GetSpell(characterTalent.Spell) != undefined)
                $SpellcardWrapper.append(UI.MakeSpellCard(Library.GetSpell(characterTalent.Spell), parseInt(CharacterManager.GetWillforceStep()), index));

        $("#MatrixCardsWrapper").append($card);
    };
};













