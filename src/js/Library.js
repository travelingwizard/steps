// Library object for the Steps project, Lars Gottlieb 2018-20
/*jshint esversion: 6 */

let Library = new function()
{
    "use strict";

    this.Books = [];
    this.StepDiceTables = [];

    this.Fibonacci = [];

    this.StepDice = [];  

    this.Abbreviations = [];
    this.Attributes = []; 
    this.AttributeCost = [];
    this.Races = [];
    this.Talents = [];
    this.Knacks = [];
    this.Skills = []; 
    this.ArtisanSkills = [];
    this.KnowledgeSkills = [];
    this.Spells = [];
    this.Equipment = [];
    this.Magic = [];
    this.Disciplines = [];

    this.Paths = [];

    this.Doctrines = [];
    this.Devotions = [];

    this.Options = [];
    this.Themes = [];

    this.VersatilityTiers = [];

    this.SortBooks = function()
    {
        this.Books = this.Books.sort(function(a, b) 
        {
            if (a.ID == "Core")
                return -1;
            if (b.ID == "Core")
                return 1;
            if (a.ID == "Unofficial")
                return 1;
            if (b.ID == "Unofficial")
                return -1;
            return (a.ID < b.ID ? -1 : 1);
        });
    };

    this.GrabBooks = function(books)
    {
        this.Options = [];  

        this.Abbreviations = [];
        this.Attributes = []; 
        this.AttributeCost = [];
        this.Races = [];
        this.Talents = [];
        this.Knacks = [];
        this.Skills = []; 
        this.ArtisanSkills = [];
        this.KnowledgeSkills = [];
        this.Spells = [];
        this.Equipment = [];
        this.Magic = [];
        this.Disciplines = [];

        this.Paths = [];

        this.Doctrines = [];
        this.Devotions = [];

        this.Options = [];  
        this.Themes = [];

        // Unfold 'official' and 'unofficial'
        if (books.includes("Official"))
            books += " Core MysticPaths ElvenNations Travar Iopos Questors"; // Add book files as they're added.
        if (books.includes("Unofficial"))
            books += " LarsGottlieb, Sebastian, Panda"; // Add book files as they're added.
        if (!books.includes("Core") && books.toLowerCase() != "all")
            books += " Core";

        // This is a bit of a patch
        if (books.includes("Sebastian") && !books.includes("MysticPaths"))
            books += " MysticPaths";

        for (let i = 0; i < this.Books.length; i++) 
            if (books.includes(this.Books[i].ID) || books.toLowerCase().includes("all"))
            {
                console.log("Grabbing " + this.Books[i].json.Books);

                if (this.Books[i].json.Abbreviations != undefined)
                    for (let j = 0; j < this.Books[i].json.Abbreviations.length; j++) 
                        this.Abbreviations.push(this.Books[i].json.Abbreviations[j]);

                if (this.Books[i].json.Attributes != undefined)
                    for (let j = 0; j < this.Books[i].json.Attributes.length; j++) 
                        this.Attributes.push(this.Books[i].json.Attributes[j]);

                if (this.Books[i].json.AttributeCost != undefined)
                    for (let j = 0; j < this.Books[i].json.AttributeCost.length; j++) 
                        this.AttributeCost.push(this.Books[i].json.AttributeCost[j]);

                if (this.Books[i].json.Races != undefined)
                    for (let j = 0; j < this.Books[i].json.Races.length; j++) 
                        this.Races.push(this.Books[i].json.Races[j]);

                if (this.Books[i].json.Talents != undefined)
                    for (let j = 0; j < this.Books[i].json.Talents.length; j++) 
                        this.Talents.push(this.Books[i].json.Talents[j]);

                if (this.Books[i].json.Knacks != undefined)
                    for (let j = 0; j < this.Books[i].json.Knacks.length; j++) 
                        this.Knacks.push(this.Books[i].json.Knacks[j]);

                if (this.Books[i].json.Skills != undefined)
                    for (let j = 0; j < this.Books[i].json.Skills.length; j++) 
                        this.Skills.push(this.Books[i].json.Skills[j]);

                if (this.Books[i].json.ArtisanSkills != undefined)
                    for (let j = 0; j < this.Books[i].json.ArtisanSkills.length; j++) 
                        this.ArtisanSkills.push(this.Books[i].json.ArtisanSkills[j]);

                if (this.Books[i].json.KnowledgeSkills != undefined)
                    for (let j = 0; j < this.Books[i].json.KnowledgeSkills.length; j++) 
                        this.KnowledgeSkills.push(this.Books[i].json.KnowledgeSkills[j]);

                if (this.Books[i].json.Spells != undefined)
                    for (let j = 0; j < this.Books[i].json.Spells.length; j++) 
                        this.Spells.push(this.Books[i].json.Spells[j]);

                if (this.Books[i].json.Equipment != undefined)
                    for (let j = 0; j < this.Books[i].json.Equipment.length; j++) 
                        this.Equipment.push(this.Books[i].json.Equipment[j]);

                if (this.Books[i].json.Magic != undefined)
                    for (let j = 0; j < this.Books[i].json.Magic.length; j++) 
                        this.Magic.push(this.Books[i].json.Magic[j]);

                if (this.Books[i].json.Disciplines != undefined)
                    for (let j = 0; j < this.Books[i].json.Disciplines.length; j++) 
                        this.Disciplines.push(this.Books[i].json.Disciplines[j]);

                if (this.Books[i].json.Paths != undefined)
                    for (let j = 0; j < this.Books[i].json.Paths.length; j++) 
                        this.Paths.push(this.Books[i].json.Paths[j]);

                if (this.Books[i].json.Doctrines != undefined)
                    for (let j = 0; j < this.Books[i].json.Doctrines.length; j++) 
                        this.Doctrines.push(this.Books[i].json.Doctrines[j]);

                if (this.Books[i].json.Devotions != undefined)
                    for (let j = 0; j < this.Books[i].json.Devotions.length; j++) 
                        this.Devotions.push(this.Books[i].json.Devotions[j]);

                if (this.Books[i].json.Options != undefined)
                    this.Options = this.Books[i].json.Options;

                if (this.Books[i].json.Themes != undefined)
                    for (let j = 0; j < this.Books[i].json.Themes.length; j++) 
                        this.Themes.push(this.Books[i].json.Themes[j]);
            }

        this.Races = this.Races.sort(function(a,b) {if (a.Unofficial != b.Unofficial) if (a.Unofficial == undefined) return -1; else return 1; return (a.Name > b.Name ? 1 : -1);});
        this.Talents = this.Talents.sort(function(a,b) {return (a.Name > b.Name ? 1 : -1);});
        this.Knacks = this.Knacks.sort(function(a,b) {if (a.Talent != b.Talent) return (a.Talent > b.Talent ? 1 : -1); return (a.Name > b.Name ? 1 : -1);});
        this.Skills = this.Skills.sort(function(a,b) 
            {
                if (a.Cost != b.Cost) 
                { 
                    if (a.Cost == "Novice") 
                        return -1; 
                    if (b.Cost == "Novice") 
                        return 1; 
                    if (a.Cost == "Journeyman") 
                        return -1; 
                    if (b.Cost == "Journeyman") 
                        return 1;
                    if (a.Cost == "Warden") 
                        return 1; 
                    if (b.Cost == "Warden") 
                        return -1;
                } 
                return (a.Name > b.Name ? 1 : -1);
            });
        this.ArtisanSkills = this.ArtisanSkills.sort(function(a,b) {return (a.Name > b.Name ? 1 : -1);});
        this.KnowledgeSkills = this.KnowledgeSkills.sort(function(a,b) {return (a.Name > b.Name ? 1 : -1);});
        this.Spells = this.Spells.sort(function(a,b) {if (a.Discipline != b.Discipline) return (a.Discipline > b.Discipline ? 1 : -1); if (a.Circle != b.Circle) return (a.Circle > b.Circle ? 1 : -1); return (a.Name > b.Name ? 1 : -1);});
        this.Equipment = this.Equipment.sort(function(a,b) {if (a.Type != b.Type){ if (a.Type == "Thread Item") return 1; if (b.Type == "Thread Item") return -1;  return (a.Type > b.Type ? 1 : -1); }if (a.BaseType != b.BaseType) return (a.BaseType > b.BaseType ? 1 : -1); return (a.Name > b.Name ? 1 : -1);});
        this.Disciplines = this.Disciplines.sort(function(a,b) {if (a.Unofficial != b.Unofficial) if (a.Unofficial == undefined) return -1; else return 1; return (a.Name > b.Name ? 1 : -1);});

        if (Settings.debug)
            this.CheckLibrary();

        this.BuildVersatilityTiers();
    };

    this.CheckLibrary = function()
    {
        // Check Knacks
        for (let i = 0; i < this.Knacks.length; i++) 
        {
            if (this.GetTalent(this.Knacks[i].Talent) == undefined && this.Knacks[i].Talent != "ED4ThreadWeaving" && this.Knacks[i].Talent != "ED4PTailDancer")
            {
                console.log("Attention! Knack " + this.Knacks[i].ID + " doesn't have a well-defined Talent " + this.Knacks[i].Talent);
            }

            // Check Requirements and Restrictions too. 
            for (let j =0; j < this.Knacks[i].Requirements.length; j++)
                switch (this.Knacks[i].Requirements[j].Type)
                {
                    case "Race":
                        if (this.Races.find(o => o.ID == this.Knacks[i].Requirements[j].ID) == undefined)
                            console.log("Attention! Knack " + this.Knacks[i].ID + " requires a Race (" + this.Knacks[i].Requirements[j].ID + ") that isn't in the current Library");
                        break;
                    case "Knack":
                        if (this.Knacks.find(o => o.ID == this.Knacks[i].Requirements[j].ID) == undefined)
                            console.log("Attention! Knack " + this.Knacks[i].ID + " requires a Knack (" + this.Knacks[i].Requirements[j].ID + ") that isn't in the current Library");
                        break;
                    case "Talent":
                        if (this.Talents.find(o => o.ID == this.Knacks[i].Requirements[j].ID || o.CountsAs == this.Knacks[i].Requirements[j].ID) == undefined)
                            console.log("Attention! Knack " + this.Knacks[i].ID + " requires a Talent (" + this.Knacks[i].Requirements[j].ID + ") that isn't in the current Library");
                        break;
                    case "Speak":
                        //not tested
                        break;
                    case "ReadWrite":
                        //not tested
                        break;
                    case "Skill":
                        if (this.Skills.find(o => o.ID == this.Knacks[i].Requirements[j].ID) == undefined)
                            console.log("Attention! Knack " + this.Knacks[i].ID + " requires a Skill (" + this.Knacks[i].Requirements[j].ID + ") that isn't in the current Library");
                        break;
                    case "Ordeal":
                        //not tested
                        break;
                    case "Discipline":
                        if (this.Knacks[i].Requirements[j].ID != "Any" && this.Disciplines.find(o.ID == this.Knacks[i].Requirements[j].ID))
                            console.log("Attention! Knack " + this.Knacks[i].ID + " requires a Discipline (" + this.Knacks[i].Requirements[j].ID + ") that isn't in the current Library");
                        //not tested
                        break;
                    case "Spell":
                        if (this.Spells.find(o => o.ID == this.Knacks[i].Requirements[j].ID) == undefined)
                            console.log("Attention! Knack " + this.Knacks[i].ID + " requires a Spell (" + this.Knacks[i].Requirements[j].ID + ") that isn't in the current Library");
                        break;
                    default:
                        console.log(this.Knacks[i].Name + " Unknown Knack Requirement Type: '" + this.Knacks[i].Requirements[j].Type + "'\n")
                }

            for (let j = 0; j < this.Knacks[i].Restrictions.length; j++)
                switch (this.Knacks[i].Restrictions[j].Type)
                {
                    case "Knack":
                        if (this.Knacks.find(o => o.ID == this.Knacks[i].Restrictions[j].ID) == undefined)
                            console.log("Attention! Knack " + this.Knacks[i].ID + " has a Restriction that points to a Knack (" + this.Knacks[i].Restrictions[j].ID + ") that isn't in the current Library");
                        break;
                    case "Talent":
                        if (this.Talents.find(o => o.ID == this.Knacks[i].Restrictions[j].ID || o.CountsAs == this.Knacks[i].Restrictions[j].ID) == undefined)
                            console.log("Attention! Knack " + this.Knacks[i].ID + " has a Restriction that points to a Talent (" + this.Knacks[i].Restrictions[j].ID + ") that isn't in the current Library");
                        break;
                    case "Speak":
                        //not tested
                        break;
                    case "ReadWrite":
                        //not tested
                        break;
                    case "Skill":
                        if (this.Skills.find(o => o.ID == this.Knacks[i].Restrictions[j].ID) == undefined)
                            console.log("Attention! Knack " + this.Knacks[i].ID + " has a Restriction that points to a Skill (" + this.Knacks[i].Restrictions[j].ID + ") that isn't in the current Library");
                        break;
                    case "Race":
                        if (this.Races.find(o => o.ID == this.Knacks[i].Restrictions[j].ID) == undefined)
                            console.log("Attention! Knack " + this.Knacks[i].ID + " has a Restriction that points to a Race (" + this.Knacks[i].Restrictions[j].ID + ") that isn't in the current Library");
                        break;
                    case "Discipline":
                        if (this.Knacks[i].Restrictions[j].ID != "Any")
                            if (this.Disciplines.find(o => o.ID == this.Knacks[i].Restrictions[j].ID) == undefined)
                                console.log("Attention! Knack " + this.Knacks[i].ID + " has a Restriction that points to a Disciplines (" + this.Knacks[i].Restrictions[j].ID + ") that isn't in the current Library");
                        break;
                    case "Attribute":
                        if(!["Dex","Str","Tou","Per","Wil","Cha"].includes(this.Knacks[i].Restrictions[j].ID))
                            console.log("Attention! Knack " + this.Knacks[i].ID + " has a Restriction that points to an Attribute (" + this.Knacks[i].Restrictions[j].ID + ") that doesn't exist");
                        break;
                    default:
                        console.log(this.Knacks[i].Name + " Unknown Knack Restriction Type: '" + this.Knacks[i].Restrictions[j].Type + "'\n")
                }
            // Conflicts
            if (this.Knacks[i].Conflicts != undefined)
                for (let j = 0; j < this.Knacks[i].Conflicts.length; j++)
                {
                    if (this.Knacks.find(o => o.ID == this.Knacks[i].Conflicts[j]) == undefined && this.Talents.find(o => o.ID == this.Knacks[i].Conflicts[j]) == undefined )
                    {
                        console.log("Attention! Knack " + this.Knacks[i].ID + " has a Conflict " + this.Knacks[i].Conflicts[j] + " that doesn't lead anywhere");
                    }
                }
        }

        // Disciplines
        for (let thisDisciplineIndex = 0; thisDisciplineIndex < this.Disciplines.length; thisDisciplineIndex ++) 
        {
            for (let thisTalentIndex = 0; thisTalentIndex < this.Disciplines[thisDisciplineIndex].NoviceTalents.length; thisTalentIndex++)
                if (this.GetTalent(this.Disciplines[thisDisciplineIndex].NoviceTalents[thisTalentIndex]) == undefined)
                    console.log("Attention! Discipline " + this.Disciplines[thisDisciplineIndex].Name + " has a bum Novice Talent reference: " + this.Disciplines[thisDisciplineIndex].NoviceTalents[thisTalentIndex])

            for (let thisTalentIndex = 0; thisTalentIndex < this.Disciplines[thisDisciplineIndex].JourneymanTalents.length; thisTalentIndex++)
                if (this.GetTalent(this.Disciplines[thisDisciplineIndex].JourneymanTalents[thisTalentIndex]) == undefined)
                    console.log("Attention! Discipline " + this.Disciplines[thisDisciplineIndex].Name + " has a faulty Journeyman Talent reference: " + this.Disciplines[thisDisciplineIndex].JourneymanTalents[thisTalentIndex])

            for (let thisTalentIndex = 0; thisTalentIndex < this.Disciplines[thisDisciplineIndex].WardenTalents.length; thisTalentIndex++)
                if (this.GetTalent(this.Disciplines[thisDisciplineIndex].WardenTalents[thisTalentIndex]) == undefined)
                    console.log("Attention! Discipline " + this.Disciplines[thisDisciplineIndex].Name + " has a dead Warden Talent reference: " + this.Disciplines[thisDisciplineIndex].WardenTalents[thisTalentIndex])

            for (let thisTalentIndex = 0; thisTalentIndex < this.Disciplines[thisDisciplineIndex].MasterTalents.length; thisTalentIndex++)
                if (this.GetTalent(this.Disciplines[thisDisciplineIndex].MasterTalents[thisTalentIndex]) == undefined)
                    console.log("Attention! Discipline " + this.Disciplines[thisDisciplineIndex].Name + " has a naughty Master Talent reference: " + this.Disciplines[thisDisciplineIndex].MasterTalents[thisTalentIndex])

            for (let thisCircleIndex = 0; thisCircleIndex < this.Disciplines[thisDisciplineIndex].Circles.length; thisCircleIndex++)
            {
                if (this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].FreeTalents != undefined)
                    for (let thisTalentIndex = 0; thisTalentIndex < this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].FreeTalents.length; thisTalentIndex++)
                        if (this.GetTalent(this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].FreeTalents[thisTalentIndex]) == undefined)
                            console.log("Attention! Discipline " + this.Disciplines[thisDisciplineIndex].Name + " has a broken Free Talent reference in circle: " + (thisCircleIndex+1) + ", " + this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].FreeTalents[thisTalentIndex])
                
                if (this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].DisciplineTalents != undefined)
                    for (let thisTalentIndex = 0; thisTalentIndex < this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].DisciplineTalents.length; thisTalentIndex++)
                        if (this.GetTalent(this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].DisciplineTalents[thisTalentIndex]) == undefined)
                            console.log("Attention! Discipline " + this.Disciplines[thisDisciplineIndex].Name + " has a painful Discipline Talent reference in circle: " + (thisCircleIndex+1) + ", " + this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].DisciplineTalents[thisTalentIndex])
            }
        }

        // Paths
        for (let thisPathIndex = 0; thisPathIndex < this.Paths.length; thisPathIndex++)
        {
            // Check path talent
            if (this.GetTalent(this.Paths[thisPathIndex].Talent) == undefined)
                console.log("Attention! Path " + this.Paths[thisPathIndex].Name + " has a mistake in the Path Talent link: " + this.Paths[thisPathIndex].Talent);

            if (this.GetKnack(this.Paths[thisPathIndex].Knack) == undefined)
                console.log("Attention! Path " + this.Paths[thisPathIndex].Name + " has an eror in the Path Knack link: " + this.Paths[thisPathIndex].Knack);

            if (parseInt(this.Paths[thisPathIndex].MaxRank) != this.Paths[thisPathIndex].Ranks.length) 
                console.log("Attention! Path " + this.Paths[thisPathIndex].Name + " MaxRank " + this.Paths[thisPathIndex].MaxRank + " is not equal to the length of the Ranks arryay" + this.Paths[thisPathIndex].Ranks.length);

            for (let thisRankIndex = 0; thisRankIndex < this.Paths[thisPathIndex].Ranks.length; thisRankIndex++)
                if (this.Paths[thisPathIndex].Ranks[thisRankIndex].Talents != undefined)
                    for (let thisTalentIndex = 0; thisTalentIndex < this.Paths[thisPathIndex].Ranks[thisRankIndex].Talents.length; thisTalentIndex++)
                        if (this.GetTalent(this.Paths[thisPathIndex].Ranks[thisRankIndex].Talents[thisTalentIndex]) == undefined)
                            console.log("Attention! Path " + this.Paths[thisPathIndex].Name + " has an unresolvable Talent link at rank " + (thisRankIndex+1) + ", "+ this.Paths[thisPathIndex].Ranks[thisRankIndex].Talents[thisTalentIndex]);


        }

        // Questors
        for (let thisDoctrineIndex = 0; thisDoctrineIndex < this.Doctrines.length; thisDoctrineIndex++)
        {
            for (let thisDevotionIndex = 0; thisDevotionIndex < this.Doctrines[thisDoctrineIndex].FollowerDevotions.length; thisDevotionIndex++)
            {
                let thisDevotion = this.Devotions.find(o => o.ID == this.Doctrines[thisDoctrineIndex].FollowerDevotions[thisDevotionIndex]);
                if (thisDevotion == undefined)
                    console.log("Attention! Questor of " + this.Doctrines[thisDoctrineIndex].Name + " has an impossible Follower Devotion link " + this.Questors[thisDoctrineIndex].FollowerDevotions[thisDevotionIndex]);
                else thisDevotion.Used = true;
            }
            for (let thisDevotionIndex = 0; thisDevotionIndex < this.Doctrines[thisDoctrineIndex].AdherentDevotions.length; thisDevotionIndex++)
            {
                let thisDevotion = this.Devotions.find(o => o.ID == this.Doctrines[thisDoctrineIndex].AdherentDevotions[thisDevotionIndex]);
                if (thisDevotion == undefined)
                    console.log("Attention! Questor of " + this.Doctrines[thisDoctrineIndex].Name + " has an wrecked Adherent Devotion link " + this.Questors[thisDoctrineIndex].AdherentDevotions[thisDevotionIndex]);
                else thisDevotion.Used = true;
            }
            for (let thisDevotionIndex = 0; thisDevotionIndex < this.Doctrines[thisDoctrineIndex].ExemplarDevotions.length; thisDevotionIndex++)
            {
                let thisDevotion = this.Devotions.find(o => o.ID == this.Doctrines[thisDoctrineIndex].ExemplarDevotions[thisDevotionIndex]);
                if (thisDevotion == undefined)
                    console.log("Attention! Questor of " + this.Doctrines[thisDoctrineIndex].Name + " has an grokked Exemplar Devotion link " + this.Questors[thisDoctrineIndex].ExemplarDevotions[thisDevotionIndex]);
                else thisDevotion.Used = true;
            }
        }

        // Devotions
        for (let thisDevotionIndex = 0; thisDevotionIndex < this.Devotions.length; thisDevotionIndex++)
            if(this.Devotions[thisDevotionIndex].Used != true && this.Devotions[thisDevotionIndex].ID != "ED4Questor")
                console.log("Attention! Devotion " + this.Devotions[thisDevotionIndex].Name + " appears to not be used by any Questors?");

        console.log("Library integrity check complete");
    }

    this.BuildVersatilityTiers = function()
    {
        let listBuilder = []; // {"ID" : "TalentID", "Name" : "TalentName" "EarliestCircle", "Source" : "DisciplineID, "Type" : "Discipline / Optional"}

        for (let thisDisciplineIndex = 0; thisDisciplineIndex < this.Disciplines.length; thisDisciplineIndex++)
        {
            for (let thisNoviceTalentIndex = 0; thisNoviceTalentIndex < this.Disciplines[thisDisciplineIndex].NoviceTalents.length; thisNoviceTalentIndex++)
            {

                let listTalent = listBuilder.find(o => o.ID == this.Disciplines[thisDisciplineIndex].NoviceTalents[thisNoviceTalentIndex]);
                if (listTalent == undefined)
                    listBuilder.push( {"ID" : this.Disciplines[thisDisciplineIndex].NoviceTalents[thisNoviceTalentIndex], "Name" : this.GetTalent(this.Disciplines[thisDisciplineIndex].NoviceTalents[thisNoviceTalentIndex]).Name, "EarliestCircle" : 1, "Source" : this.Disciplines[thisDisciplineIndex].ID, "Type" : "Optional"});
                else 
                    if (listTalent.EarliestCircle > 1)
                    {
                        listTalent.EarliestCircle = 1; 
                        listTalent.Source = this.Disciplines[thisDisciplineIndex].ID;
                        listTalent.Type = "Optional";
                    }
            }
            for (let thisJourneymanTalentIndex = 0; thisJourneymanTalentIndex < this.Disciplines[thisDisciplineIndex].JourneymanTalents.length; thisJourneymanTalentIndex++)
            {

                let listTalent = listBuilder.find(o => o.ID == this.Disciplines[thisDisciplineIndex].JourneymanTalents[thisJourneymanTalentIndex]);
                if (listTalent == undefined)
                    listBuilder.push( {"ID" : this.Disciplines[thisDisciplineIndex].JourneymanTalents[thisJourneymanTalentIndex], "Name" : this.GetTalent(this.Disciplines[thisDisciplineIndex].JourneymanTalents[thisJourneymanTalentIndex]).Name, "EarliestCircle" : 5, "Source" : this.Disciplines[thisDisciplineIndex].ID, "Type" : "Optional"});
                else 
                    if (listTalent.EarliestCircle > 5)
                    {
                        listTalent.EarliestCircle = 5; 
                        listTalent.Source = this.Disciplines[thisDisciplineIndex].ID;
                        listTalent.Type = "Optional";
                    }
            }
            for (let thisWardenTalentIndex = 0; thisWardenTalentIndex < this.Disciplines[thisDisciplineIndex].WardenTalents.length; thisWardenTalentIndex++)
            {

                let listTalent = listBuilder.find(o => o.ID == this.Disciplines[thisDisciplineIndex].WardenTalents[thisWardenTalentIndex]);
                if (listTalent == undefined)
                    listBuilder.push( {"ID" : this.Disciplines[thisDisciplineIndex].WardenTalents[thisWardenTalentIndex], "Name" : this.GetTalent(this.Disciplines[thisDisciplineIndex].WardenTalents[thisWardenTalentIndex]).Name, "EarliestCircle" : 9, "Source" : this.Disciplines[thisDisciplineIndex].ID, "Type" : "Optional"});
                else 
                    if (listTalent.EarliestCircle > 9)
                    {
                        listTalent.EarliestCircle = 9; 
                        listTalent.Source = this.Disciplines[thisDisciplineIndex].ID;
                        listTalent.Type = "Optional";
                    }
            }
            for (let thisMasterTalentIndex = 0; thisMasterTalentIndex < this.Disciplines[thisDisciplineIndex].MasterTalents.length; thisMasterTalentIndex++)
            {

                let listTalent = listBuilder.find(o => o.ID == this.Disciplines[thisDisciplineIndex].MasterTalents[thisMasterTalentIndex]);
                if (listTalent == undefined)
                    listBuilder.push( {"ID" : this.Disciplines[thisDisciplineIndex].MasterTalents[thisMasterTalentIndex], "Name" : this.GetTalent(this.Disciplines[thisDisciplineIndex].MasterTalents[thisMasterTalentIndex]).Name, "EarliestCircle" : 13, "Source" : this.Disciplines[thisDisciplineIndex].ID, "Type" : "Optional"});
                else 
                    if (listTalent.EarliestCircle > 13)
                    {
                        listTalent.EarliestCircle = 13; 
                        listTalent.Source = this.Disciplines[thisDisciplineIndex].ID;
                        listTalent.Type = "Optional";
                    }
            }
            for (let thisCircleIndex = 0; thisCircleIndex < this.Disciplines[thisDisciplineIndex].Circles.length; thisCircleIndex++)
            {
                if (this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].FreeTalents != undefined)
                    for (let thisFreeTalentIndex = 0; thisFreeTalentIndex < this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].FreeTalents.length; thisFreeTalentIndex++)
                    {
                        let listTalent = listBuilder.find(o => o.ID == this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].FreeTalents[thisFreeTalentIndex]);
                        if (listTalent == undefined)
                            listBuilder.push( {"ID" : this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].FreeTalents[thisFreeTalentIndex], "Name" : this.GetTalent(this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].FreeTalents[thisFreeTalentIndex]).Name, "EarliestCircle" : (thisCircleIndex+1), "Source" : this.Disciplines[thisDisciplineIndex].ID, "Type" : "Free"});
                        else 
                            if (listTalent.EarliestCircle > (thisCircleIndex+1))
                            {
                                listTalent.EarliestCircle = (thisCircleIndex+1); 
                                listTalent.Source = this.Disciplines[thisDisciplineIndex].ID;
                                listTalent.Type = "Free";
                            }
                    }
                if (this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].DisciplineTalents != undefined)
                    for (let thisTalentIndex = 0; thisTalentIndex < this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].DisciplineTalents.length; thisTalentIndex++)
                    {
                        let listTalent = listBuilder.find(o => o.ID == this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].DisciplineTalents[thisTalentIndex]);
                        if (listTalent == undefined)
                            listBuilder.push( {"ID" : this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].DisciplineTalents[thisTalentIndex], "Name" : this.GetTalent(this.Disciplines[thisDisciplineIndex].Circles[thisCircleIndex].DisciplineTalents[thisTalentIndex]).Name, "EarliestCircle" : (thisCircleIndex+1), "Source" : this.Disciplines[thisDisciplineIndex].ID, "Type" : "Discipline"});
                        else 
                            if (listTalent.EarliestCircle > (thisCircleIndex+1))
                            {
                                listTalent.EarliestCircle = (thisCircleIndex+1); 
                                listTalent.Source = this.Disciplines[thisDisciplineIndex].ID;
                                listTalent.Type = "Discipline";
                            }
                    }
            }
        }

        listBuilder = listBuilder.sort(function(a,b) {if (a.EarliestCircle != b.EarliestCircle) return (a.EarliestCircle > b.EarliestCircle ? 1 : -1); return (a.Name > b.Name ? 1 : -1)});

        this.VersatilityTiers = listBuilder;
    }

    this.GrabStepDice = function(stepDice)
    {
        this.StepDice = [];  

        this.StepDice = this.StepDiceTables.find(o => o.ID == stepDice).json.slice();
        if (this.StepDice == undefined)
        {
            this.StepDice = this.StepDiceTables.find(o => o.ID == "ED4").json.slice();
            console.log("Fallback Stepdice grabbed");
        }
    };

    // Fibonacci
    this.PopulateFibonacci = function() 
    {
        this.Fibonacci[1] = 1;
        this.Fibonacci[2] = 2;
        for (let i=3; i<30;i++)
            this.Fibonacci[i] = this.Fibonacci[i-1] + this.Fibonacci[i-2];
    };

    this.FibonacciSum = function(start, end)
    {   
        if(isNaN (start) || isNaN(end))
        {
            console.log("FibonacciSum(" + start + "," + end + "): Parameters not recognised as numbers");
            return 0;
        }
        start = parseInt(start + "");
        end   = parseInt(end   + "");

        if(start > end || start < 1 || 30 < end)
        {
            console.log("FibonacciSum(" + start + "," + end + "): Parameters out of range or order");
            return 0;
        }

        let sum = 0;

        if (start == end)
            sum = this.Fibonacci[start];
        else
            for (let i = start; i <= end; i++) 
                sum += this.Fibonacci[i];

        return sum;
    };

    // Step / Dice
    this.GetDice = function(step, condensed)
    {
        if(isNaN(step))
            return step;
        if(step < 1)
            step = 1;
        if(step >= this.StepDice.length)
            step = this.StepDice.length-1;
        if(condensed)
            return this.StepDice.find(o => o.Step === step+"").Dice.replace(/ /g,  ""); 
        return this.StepDice.find(o => o.Step === step+"").Dice; 
    };

    // Abbreviations
    this.GetAbbreviation = function(FullName)
    {
        let lookup = this.Abbreviations.find(o => o.FullName === FullName+""); 
        if (lookup === undefined)
        {
            console.log("Library.GetAbbreviation: Abbreviation for '" + FullName + "' not found!");
            return FullName;
        }
        return lookup.Abbreviation;
    };
    
    this.GetFullName = function(Abbreviation)
    {
        let lookup = this.Abbreviations.find(o => o.Abbreviation === Abbreviation+""); 
        if (lookup === undefined)
        {
            console.log("Library.GetAbbreviation: FullName for '" + Abbreviation + "' not found!");
            return Abbreviation;
        }
        return lookup.FullName;
    };

    // Attribute data
    this.GetAttribute = function(value)
    {
        return this.Attributes.find(o => o.Value === value+""); 
    };

    // Attribute Cost
    this.GetAttributeCost = function(modifier)
    {
        let lookup = this.AttributeCost.find(o => o.Modifier === modifier+"");

        if (lookup === undefined)
            return null;
        return lookup.Cost; 
    };
  
    // Reverse
    this.GetAttributeModifierByCost = function(cost)
    {
        let lookup = this.AttributeCost.find(o => o.Cost === cost+"");

        if (lookup === undefined)
            return null;
        return lookup.Modifier; 
    };

    // Races
    this.GetRace = function(id)
    {
        return this.Races.find(o => o.ID === id+""); 
    };

    // Disciplines
    this.GetDiscipline = function(id)
    {
        return this.Disciplines.find(o => o.ID === id+""); 
    };

    this.GetThreadWeavingTalentID = function(disciplineID)
    {
        return this.GetDiscipline(disciplineID).Circles[0].DisciplineTalents.find(o => this.GetTalent(o).CountsAs == "ED4ThreadWeaving");
    }

    this.GetCircle = function(disciplineID, circle)
    {
        return this.Disciplines.find(o => o.ID === disciplineID + "").Circles.find(p => p.Circle === circle + ""); 
    };

    // Paths
    this.GetPath = function(id)
    {
        if (this.Paths == undefined || this.Paths.length == 0)
            return; 
        return this.Paths.find(o => o.ID === id + ""); 
    }

    this.GetPathByKnackID = function(knackID)
    {
        return this.Paths.find(o => o.Knack === knackID + ""); 
    }

    // Questor Doctrines
    this.GetDoctrine = function(id)
    {
        if (this.Doctrines == undefined || this.Doctrines.length == 0)
            return undefined;
        return this.Doctrines.find(o => o.ID == id);
    }

    // Talents
    this.GetTalent = function(id)
    {
        return this.Talents.find(o => o.ID === id+""); 
    };

    // Knacks
    this.GetKnack = function(id)
    {
        return this.Knacks.find(o => o.ID === id+"");
    };

    // Questor Devotions
    this.GetDevotion = function(id)
    {
        if (this.Devotions == undefined || this.Devotions.length == 0)
            return undefined;
        return this.Devotions.find(o => o.ID == id);
    }

    // Skills
    this.GetSkill = function(id)
    {
        return this.Skills.find(o => o.ID === id+""); 
    };

    this.GetArtisanSkill = function(id)
    {
        return this.ArtisanSkills.find(o => o.ID === id+""); 
    };

    this.GetKnowledgeSkill = function(id)
    {
        return this.KnowledgeSkills.find(o => o.ID === id+""); 
    };

    // Spells
    this.GetSpell = function(id)
    {
        return this.Spells.find(o => o.ID === id+""); 
    };

    // Equipment
    this.GetEquipment = function(id)
    {
        return this.Equipment.find(o => o.ID === id+""); 
    };

    // Magic
    this.GetMagic = function(id)
    {
        return this.Magic.find(o => o.ID === id+""); 
    };

    this.GetTheme = function(id)
    {
        return this.Themes.find(o => o.ID === id+""); 
    };
};














