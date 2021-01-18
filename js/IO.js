// IO object for the Steps project, Lars Gottlieb 2018-20
/*jshint esversion: 6 */

let IO = new function()
{
    "use strict";
        
/*    this.BookList = 
    [
        {"ID" : "Core",         "Loaded" : "False", "FileName" : "./Data/ED4/Core.json"}, 
        {"ID" : "MysticPaths",  "Loaded" : "False", "FileName" : "./Data/ED4/MysticPaths.json"}, 
        {"ID" : "ElvenNations", "Loaded" : "False", "FileName" : "./Data/ED4/ElvenNations.json"}, 
        {"ID" : "Travar",       "Loaded" : "False", "FileName" : "./Data/ED4/Travar.json"}, 
        {"ID" : "Iopos",        "Loaded" : "False", "FileName" : "./Data/ED4/Iopos.json"}, 
        {"ID" : "Questors",     "Loaded" : "False", "FileName" : "./Data/ED4/Questors.json"}, 
        {"ID" : "LarsGottlieb", "Loaded" : "False", "FileName" : "./Data/ED4/LarsGottlieb.json"},
        {"ID" : "Sebastian",    "Loaded" : "False", "FileName" : "./Data/ED4/Sebastian.json"},
        {"ID" : "Panda",        "Loaded" : "False", "FileName" : "./Data/ED4/Panda.json"}
    ];

    this.StepDiceList = 
    [
        {"ID" : "Ed12C",     "Loaded" : "False", "FileName" : "./Data/Ed12CStepDice.json"}, 
        {"ID" : "EdCOption", "Loaded" : "False", "FileName" : "./Data/EdCOptionStepDice.json"}, 
        {"ID" : "ED3",       "Loaded" : "False", "FileName" : "./Data/ED3StepDice.json"}, 
        {"ID" : "ED4",       "Loaded" : "False", "FileName" : "./Data/ED4StepDice.json"}
    ];*/

    this.StartLoading = function()
    {
        UI.PopUpWelcome();

        Library.PopulateFibonacci();

        this.LoadSystemJson();

    };

    this.LoadSystemJson = function()
    {
        $.getJSON("./Data/System.json", function(json, success)
        {
            Library.StepDiceList = json.StepDiceList;
            Library.BookList     = json.BookList;

            Library.Abbreviations = json.Abbreviations;
            Library.Options       = json.Options;
            Library.Themes        = json.Themes;
            Library.Portraits     = json.Portraits;

            IO.LoadStepDice();
        });
    }

    this.LoadStepDice = function()
    {
        for (let i = 0; i < Library.StepDiceList.length; i++) 
            $.getJSON(Library.StepDiceList[i].FileName, function(json, success)
            {
                Library.StepDiceTables.push({"ID" : json.ID, "json" : json.Table});
                Library.StepDiceList.find(o => o.ID == json.ID).Loaded = (success == "success");
                console.log("Stepdice json " + json.ID + " loaded");

                IO.StepDiceComplete();
            }
        );
    }

    this.StepDiceComplete = function()
    {
        if (Library.StepDiceList.find(o => o.Loaded == "False") == undefined)
            this.LoadBooks();
    };

    this.LoadBooks = function()
    {
        for (let i = 0; i < Library.BookList.length; i++) 
            $.getJSON(Library.BookList[i].FileName, function(json, success)
            {
                Library.Books.push({"ID" : json.ID, "json" : json});
                Library.BookList.find(o => o.ID == json.ID).Loaded = (success == "success");
                console.log("Book json " + json.ID + " loaded");

                IO.BooksComplete();
            });

    };

    this.BooksComplete = function()
    {
        if (Library.BookList.find(o => o.Loaded == "False") == undefined)
        {
            Library.SortBooks();
            this.LoadSheet();
        }
    };

    this.LoadSheet = function()
    {
        $("#content").load("Data/"+Settings.Game+"/sheet.html", function(responseTxt, statusTxt, xhr)
        {
            if(statusTxt == "success")
            {
                $("<link>").attr("rel","stylesheet").attr("type","text/css").attr("href","Data/"+Settings.Game+"/Sheet.css").appendTo("head");

                IO.GrabCharacter();
            }
        });
    };

    this.GrabCharacter = function(selectedCharacter)
    {
        if (selectedCharacter == undefined)
            selectedCharacter = IO.qs("Character");

        if (selectedCharacter == "Dox")
            selectedCharacter = "Pterradox";

        if (Object.keys(pregens).includes(selectedCharacter))
        {
            console.log("Grabbing pregen " + pregens[selectedCharacter].Basic.Name);
            Character = JSON.parse(JSON.stringify(pregens[selectedCharacter]));

            this.FixGuidProblem();  
        }
        else
        {
            console.log("Grabbing blank character");
            Character = JSON.parse(JSON.stringify(Blank4ed));
        }

        if (Character.Options == undefined)
            Character.Options = [];
        if (Character.Options.Books == undefined)
            Character.Options.Books = "all";
        if (Character.Paths == undefined)
            Character.Paths = [];

        Library.GrabBooks(Character.Options.Books);
        IO.MergeOptions();
        Library.GrabStepDice(Character.Options.StepDice);

        UI.PopulateSelects();

        if (Character.Damage == undefined)
            Character.Damage = 0;
        if (Character.Wounds == undefined)
            Character.Wounds = 0;

        $("#SituationDamage").val(Character.Damage);
        $("#SituationWound").val(Character.Wounds);

        if(IO.qs("papyrus") != undefined) 
            UI.SetTheme("1");
        else
            if (IO.qs("theme") != null)                    
                UI.SetTheme(IO.qs("theme").toLowerCase());
    
        UI.Charactertouched = false;
        CharacterManager.RebuildTalentList();

        $("#content").scrollTop(0);
        UI.PushCharacter();
    };

    this.MergeOptions = function()
    {
        if (Character.Options == undefined)
            Character.Options = [];

        // Loop over options 
        const libOptions = Library.Options;

        for (let i = 0; i < libOptions.length; i++) 
            if(!Character.Options.hasOwnProperty(libOptions[i].Name))
            {
                if (libOptions[i].Type == "String" || libOptions[i].Type == "Multiple")
                    Character.Options[libOptions[i].Name] = libOptions[i].Values.find(o => o.Default == "true").ID;
                if (libOptions[i].Type == "Number")
                    Character.Options[libOptions[i].Name] = libOptions[i].Default;
            }
    };

    this.LoadCharacterFromFile = function()
    {
        // files that user has chosen
        if(document.getElementById('load_btn').files.length == 0) 
        {
            alert('Error : No file selected');
            return;
        }

        // first file selected by user
        let file = document.getElementById('load_btn').files[0]; // this.files[0];

        // files types allowed
        let allowed_types = ['.json','application/json'];
        if(allowed_types.indexOf(file.type) == -1)
        {
            alert('Error : Incorrect file type');
            return;
        }

        // Max 4 MB allowed
        let max_size_allowed = 4 * 1024 * 1024;
        if(file.size > max_size_allowed) 
        {
            alert('Error : Exceeded size 2MB');
            return;
        }

        // file validation is successfull
        // we will now read the file

        let reader = new FileReader();

        // file reading finished successfully
        reader.addEventListener('load', function(e) 
        {
            let text = e.target.result;
            let LoadedCharacter;
            try 
            {
                LoadedCharacter = JSON.parse(text);
            }
            catch(err) 
            {
                throw "Load failed: "+err.message+"\n\nIf it's really critical, you can send the file to lars@secondstep.dk, and I'll have a look. No promises, though. ";
            }
            if (LoadedCharacter != undefined)
                IO.GrabCharacterFromFile(LoadedCharacter);
        });

        // file reading failed
        reader.addEventListener('error', function() 
        {
            alert('Error : Failed to read file');
        });

        // read as text file
        reader.readAsText(file);
    };

    this.GrabCharacterFromFile = function(fromFile)
    {
        console.log("Loading from file " + fromFile.Basic.Name);
    
        UI.Charactertouched = false;

        Character = fromFile;

        this.FixGuidProblem();  

        if (Character.Options == undefined)
            Character.Options = [];
        if (Character.Options.Books == undefined)
            Character.Options.Books = "all";
        if (Character.Paths == undefined)
            Character.Paths = [];

        IO.MergeOptions();
        Library.GrabBooks(Character.Options.Books);
        Library.GrabStepDice(Character.Options.StepDice);

        if (Library.GetRace(Character.Race) == undefined && Library.GetRace("ED4"+Character.Race) != undefined)
            Character.Race = "ED4"+Character.Race;

        if (Character.Damage == undefined)
            Character.Damage = 0;
        if (Character.Wounds == undefined)
            Character.Wounds = 0;

        $("#SituationDamage").val(Character.Damage);
        $("#SituationWound").val(Character.Wounds);

        CharacterManager.ResetBuffer();
        CharacterManager.RebuildTalentList();

        UI.PopulateSelects();
        $("#content").scrollTop(0);
        UI.PushCharacter();
    };

    this.FixGuidProblem = function()
    {
        // Up to beta9, there was a problem with generating guids that meant all optional talents got the same guid (!)
        if (Character.StepsVersion != undefined && Character.StepsVersion >= 902) 
            return;

        let fixcount = 0;

        for (var i = 0; i < Character.Talents.length; i++) 
        {
            let GuidGroup = Character.Talents.filter(o => o.UID == Character.Talents[i].UID);
            if (GuidGroup.length > 1)
                for (var i = 1; i < GuidGroup.length; i++) 
                {
                    GuidGroup[i].UID = uuidv4();
                    fixcount++;
                }
        }

        if (fixcount > 0)
            console.log("Guid problems fixed; " + fixcount + " problems fixed");
    }

    this.download = function(content, fileName, contentType) 
    {
        let blob = new Blob([content], {type: "application/json"});
        saveAs(blob, fileName);
    };

    this.qs = function(key) 
    {
        if (key == undefined)
            return "";
        key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
        let match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
        return match && decodeURIComponent(match[1].replace(/\+/g, " "));
    };
};











