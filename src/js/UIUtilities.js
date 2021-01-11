// UI Utility extensions for the Steps project, Lars Gottlieb 2018-20
/*jshint esversion: 6 */

UI.MakeSpellCard = function(thisSpell, thisWillforceStep, id)
{
    "use strict";

    let $card = $("<div>", {"id" : "SpellCard" + id, "class" : "SpellCard"});
    $card.append($("<div>", {"class" : "SpellCardCircle",   "html" : thisSpell.Circle}));
    $card.append($("<div>", {"class" : "SpellCardName",     "html" : thisSpell.Name}));
    $card.append($("<div>", {"class" : "SpellCardThreads",  "html" : "<b>Threads: </b>"  + thisSpell.Threads}));
    $card.append($("<div>", {"class" : "SpellCardWeaving",  "html" : "<b>Weaving: </b>"  + thisSpell.Weaving}));
    $card.append($("<div>", {"class" : "SpellCardCasting",  "html" : "<b>Casting: </b>"  + thisSpell.Casting}));
    $card.append($("<div>", {"class" : "SpellCardDuration", "html" : "<b>Duration: </b>" + thisSpell.Duration}));
    $card.append($("<div>", {"class" : "SpellCardRange",    "html" : "<b>Range: </b>"    + thisSpell.Range}));
    if(thisSpell.AoE != undefined) $card.append($("<div>", {"class" : "SpellCardAoE", "html" : "<b>AoE: </b>" + thisSpell.AoE}));
    let thisEffect = thisSpell.Effect;

    if(thisWillforceStep != undefined)
    {
        // Do something smart about Effect
        if (thisEffect.includes("WIL"))
        {
            // Get the right substring 
            let insertpoint = thisEffect.indexOf("WIL");
            let mod = 0;

            if (thisEffect[insertpoint+3] != '+')
                insertpoint += 3;
            else
            {                    
                if (isNaN(thisEffect[insertpoint+5]))
                {
                    mod += parseInt(thisEffect[insertpoint+4]);
                    insertpoint += 5;
                }
                else // wil+10 or more
                {
                    mod += parseInt(thisEffect[insertpoint+4])*10+parseInt(thisEffect[insertpoint+5]);
                    insertpoint += 6;
                }
            }
            let ThisSpellEffectStep = thisWillforceStep + mod;

            Character.Spells.find(o => o.ID === thisSpell.ID).defaultEffect = ThisSpellEffectStep;

            thisEffect = thisEffect.slice(0, insertpoint) + "<span id='MatrixSpellEffectStepDice" + id + "''> (" + ThisSpellEffectStep + "/" + Library.GetDice((thisWillforceStep + mod), true) + ") </span>" + thisEffect.slice(insertpoint);
        }
    }
    $card.append($("<div>", {"class" : "SpellCardEffect",        "html" : "<b>Effect: </b>" + thisEffect}));
    if (thisSpell.Description != undefined)
        $card.append($("<div>", {"class" : "SpellCardDescription",   "html" : "<b>Description: </b>" + thisSpell.Description}));
    $card.append($("<div>", {"class" : "SpellCardExtraThreads",  "html" : "<b>Extra Threads: </b>" + thisSpell.ExtraThreads}));
    $card.append($("<div>", {"class" : "SpellCardSuccessLevels", "html" : "<b>Success Levels: </b>" + thisSpell.SuccessLevels}));
    $card.append($("<div>", {"class" : "SpellCardType",          "text" : thisSpell.Type}));
    $card.append($("<div>", {"class" : "SpellCardReference",     "text" : thisSpell.Reference}));
    $card.append($("<div>", {"class" : "SpellCardDiscipline",    "text" : Library.GetDiscipline(thisSpell.Discipline).Name}));

    return $card;
};

UI.Emoticonify = function(str)
{
    let worker = str;
    worker = worker.replace(/Increase /g, "↑");
    worker = worker.replace(/Duration /g, "🕒");
    worker = worker.replace(/Effect /g, "💥");
    worker = worker.replace(/Area /g, "⭕");
    worker = worker.replace(/Additional Target /g, "+🎯"); 
    worker = worker.replace(/Additional Targets /g, "+🎯"); 
    worker = worker.replace(/Remove Targets /g, "-🎯"); 
    worker = worker.replace(/Additional /g, "+"); 
    worker = worker.replace(/ \(ritual; see text\)/g, "*"); 
    worker = worker.replace(/ \(see text\)/g, "*"); 
    worker = worker.replace("See text", "*"); 

    worker = worker.replace(", no greater than 20 yards in any dimension", "*"); 
    worker = worker.replace("; +2 bonus to one type of Action test for friendly characters", "*"); 
    worker = worker.replace(" for a price paid in blood", "*"); 
    worker = worker.replace("(requires 2 threads, Concentration for this spell as Simple Action.)", "*"); 
    worker = worker.replace("; additional target threads do not count toward the normal extra thread maximum", "*"); 

    worker = worker.replace(/Difficulty/g, "Diff"); 

    worker = worker.replace(/Rank/g, "Rnk");
    worker = worker.replace(/rounds/g, "rnds");
    worker = worker.replace(/round/g, "rnd");
    worker = worker.replace(/minutes/g, "mins");
    worker = worker.replace(/minute/g, "min");
    worker = worker.replace(/hours/g, "hrs");
    worker = worker.replace(/hour/g, "hr");
    worker = worker.replace(/Range/g, "Rng");

    worker = worker.replace(/Damage/g, "Dmg");
    worker = worker.replace(/Step/g, "Stp");
    worker = worker.replace(/Yards/g, "Yrd");
    worker = worker.replace(/yards/g, "yrd");
    worker = worker.replace(/radius/g, "r");
    worker = worker.replace(/circle/g, "◯");
    worker = worker.replace(/ and /g, ", ");
    worker = worker.replace(/reduces/g, "-");
    worker = worker.replace(/movement rate/g, "mov");
    worker = worker.replace(/Adds/g, "+");
    worker = worker.replace(/words/g, "wrds");
    worker = worker.replace(/months/g, "mnth");
    worker = worker.replace(/target’s /g, "");

    worker = worker.replace(/Physical Armor/g, "PhArm");
    worker = worker.replace(/Mystic Armor/g, "MyArm");
    worker = worker.replace(/Physical Defense/g, "PhDef");
    worker = worker.replace(/Mystic Defense/g, "MyDef");
    worker = worker.replace(/Physical/g, "Phys");
    worker = worker.replace(/close combat/g, "cc");
    worker = worker.replace(/weapon/g, "wpn");

    worker = worker.replace(/damage/g, "dmg");

    worker = worker.replace(/Dexterity/g,  "Dex");
    worker = worker.replace(/Strength/g,   "Str");
    worker = worker.replace(/Toughness/g,  "Tgh");
    worker = worker.replace(/Willpower/g,  "Wil");
    worker = worker.replace(/Perception/g, "Per");
    worker = worker.replace(/Charisma/g,   "Cha");

    return worker;
};

UI.ToTitleCase = function(str)
{
    return str.replace
    (
        /\w\S*/g,
        function(txt) 
        {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};   

UI.BuildDisciplineLine = function(index)
{
    let $returner = $("<div>", {"class" : "columns_1 disciplineWrapper" + (index %2 == 0 ? "" : " shaded")});
    let $span     = $("<span>", {"class" : "", "style" : "display: flex; justify-content: space-between;"});

    $span.append($("<span>", {"id" : "KillDiscipline" + index, "html"  : "✕", "class": "killDiscipline hideInPlay"}));

    let $select   = $("<select>", { "id" : "DisciplineSelect"+index, "class" : "disciplineSelect value lockInPlay"});
    $select.append ($("<option>", {"value":"Empty", "text":"(Not Selected)"}));

    if (Library.Disciplines.find(o => o.Unofficial != undefined) != undefined)
    {
        let previousOptGroupLabel = "Official";
        let $thisOptgroup = $("<optgroup>", {label : previousOptGroupLabel});

        for (let i = 0; i < Library.Disciplines.length; i++) 
        {
            if (Library.Disciplines[i].Unofficial != undefined && previousOptGroupLabel == "Official")
            {
                $select.append($thisOptgroup.clone());
                previousOptGroupLabel = "Unofficial"
                $thisOptgroup = $("<optgroup>", {label : previousOptGroupLabel});
            }
            $thisOptgroup.append($('<option>', {value:Library.Disciplines[i].ID, text:Library.Disciplines[i].Name}));
        }
        if ($thisOptgroup != undefined)
            $select.append($thisOptgroup.clone());
    }
    else
        for (let i = 0; i < Library.Disciplines.length; i++) 
            if (Character.Disciplines.find(o => o.ID == Library.Disciplines[i].ID) == undefined || Library.Disciplines[i].ID == Character.Disciplines[index].ID)
                $select.append($('<option>', {value:Library.Disciplines[i].ID, text:Library.Disciplines[i].Name}));
    $span.append($select);

    if(index != 0)
    {
        $span.append($("<span>", {text : "Started", "style" : "white-space: nowrap;", "class" : "hideInPlay"}));
        $span.append(UI.BuildNumbersSelect(1, 15, 1, "StartedAt" + index, "disciplineStartedAt value lockInPlay"));
    }        
    $span.append($("<span>", {text : "Circle", "style" : "white-space: nowrap;"}));
    $span.append(UI.BuildNumbersSelect(0, 15, 0, "Circle" + index, "disciplineCircle value lockInPlay"));
    
    $returner.append($span);

    return $returner;
};

UI.BuildPathLine = function(thisPathIndex, thisPathID, rank)
{
    let $returner = $("<div>", { "id" : "Path" + thisPathIndex, "class" : "columns_1 pathWrapper" + (thisPathIndex %2 == 0 ? "" : " shaded"), "style" : "" });

    $returner.append($("<div>", {"id" : "KillPath" + thisPathIndex, "html"  : "✕", "class": "killPath hideInPlay", "style" : ""}));

    let $selectorsWrapper = $("<div>", { "class" : "pathSelectorsWrapper", "style" : ""});
    
    let paths = CharacterManager.GetPathsQualifiedFor();

    let $pathSelect = $("<select>", { "id" : "PathSelect" + thisPathIndex, "class" : "lockInPlay pathSelect"});
    $pathSelect.append ($("<option>", {"value" : "Empty", "text" : "(Not Selected)"}));
    for (let i = 0; i < paths.length; i++) 
    {
        let libPath = Library.GetPathByKnackID(paths[i].ID);

        if (Character.Paths.find(o => o.ID == libPath.ID) == undefined || libPath.ID == thisPathID)
            $pathSelect.append($('<option>', {"value" : libPath.ID, "text" : libPath.Name}));
    }
    $pathSelect.val(thisPathID);

    $selectorsWrapper.append($pathSelect);

    if (thisPathID != "Empty") 
    {
        $selectorsWrapper.append($("<span>", {"html" : "Rank", "style" : "display: inline-block; padding: 0 1vw;"}))
        $selectorsWrapper.append(UI.BuildNumbersSelect(1, parseInt(Library.GetPath(thisPathID).MaxRank), rank, "PathRank" + thisPathIndex, "pathRank"))
        $selectorsWrapper.append($("<span>", {"text" : "Linked Discipline: ", "class" : "hideInPlay", "style" : "display: inline-block; padding: 0 1vw;"}))
        let $discSelect = $("<select>", { "id" : "PathDiscipline" + thisPathIndex, "class" : "hideInPlay pathDiscipline", "style" : ""});
        for (let i = 0; i<Character.Disciplines.length; i++)
            if (Character.Disciplines[i].ID != "Empty" && parseInt(Character.Disciplines[i].Circle) >= 5 && parseInt(Character.Talents.find(o => o.ID == Library.GetThreadWeavingTalentID(Character.Disciplines[i].ID)).Rank) >= 5)
                $discSelect.append($('<option>', {"value" : Character.Disciplines[i].ID, "text" : Library.GetDiscipline(Character.Disciplines[i].ID).Name}));

        $discSelect.val(Character.Paths[thisPathIndex].Linked);

        $selectorsWrapper.append($discSelect); 
    }
    else
        $pathSelect.css("width", "90%");

    $returner.append($selectorsWrapper);

    return $returner;
}

UI.BuildTalentSelect = function(thisTalentIndex, talent, discipline, circle)
{
    let $returner = $("<select>", { "id" : "TalentSelect" + thisTalentIndex, "class" : "lockInPlay talentSelect", "style": "text-align:left; width:100%;"});

    $returner.append ($("<option>", {"value":"Empty", "text":"(Not Selected)"}));

    let libDiscipline = Library.GetDiscipline(discipline);

    let $optGroup = $("<optgroup>", {label : "Novice"});

    for (let i = 0; i < libDiscipline.NoviceTalents.length; i++) 
        if (libDiscipline.NoviceTalents[i] == talent || Character.Talents.find(o => o.ID == libDiscipline.NoviceTalents[i] && o.Type != "Free" && o.Type != "Item") == undefined)
            $optGroup.append($('<option>', {value:libDiscipline.NoviceTalents[i], text:Library.GetTalent(libDiscipline.NoviceTalents[i]).Name}));
    $returner.append($optGroup.clone());

    if (["5","6","7","8","9","10","11","12","13","14","15"].includes(circle))
    {
        $optGroup = $("<optgroup>", {label : "Journeyman"});
        for (let i = 0; i < libDiscipline.JourneymanTalents.length; i++) 
            if (libDiscipline.JourneymanTalents[i] == talent || Character.Talents.find(o => o.ID == libDiscipline.JourneymanTalents[i] && o.Type != "Free" && o.Type != "Item") == undefined)
                $optGroup.append($('<option>', {value:libDiscipline.JourneymanTalents[i], text:Library.GetTalent(libDiscipline.JourneymanTalents[i]).Name}));
        $returner.append($optGroup.clone());
    }

    if (["9","10","11","12","13","14","15"].includes(circle))
    {
        $optGroup = $("<optgroup>", {label : "Warden"});
        for (let i = 0; i < libDiscipline.WardenTalents.length; i++) 
            if (libDiscipline.WardenTalents[i] == talent || Character.Talents.find(o => o.ID == libDiscipline.WardenTalents[i] && o.Type != "Free" && o.Type != "Item") == undefined)
                $optGroup.append($('<option>', {value:libDiscipline.WardenTalents[i], text:Library.GetTalent(libDiscipline.WardenTalents[i]).Name}));
        $returner.append($optGroup.clone());
    }

    if (["13","14","15"].includes(circle))
    {
        $optGroup = $("<optgroup>", {label : "Master"});
        for (let i = 0; i < libDiscipline.MasterTalents.length; i++) 
            if (libDiscipline.MasterTalents[i] == talent || Character.Talents.find(o => o.ID == libDiscipline.MasterTalents[i] && o.Type != "Free" && o.Type != "Item") == undefined)
                $optGroup.append($('<option>', {value:libDiscipline.MasterTalents[i], text:Library.GetTalent(libDiscipline.MasterTalents[i]).Name}));
        $returner.append($optGroup.clone());
    }

    return $returner;
};

UI.BuildVersatilityTalentSelect = function(thisTalentIndex)
{
    let CheckAgainst = [];
    for (let i = 0; i < Character.Talents.length; i++) 
        if (i != thisTalentIndex)
            CheckAgainst.push(Character.Talents[i].ID);
    for (let i = 0; i < Character.Disciplines.length; i++) 
        if (Character.Disciplines[i].ID != "Empty") 
        {
            let libDiscipline = Library.GetDiscipline(Character.Disciplines[i].ID);
            for (j = parseInt(Character.Disciplines[i].Circle)+1; j < libDiscipline.Circles.length; j++)
                if (!CheckAgainst.includes(libDiscipline.Circles[j].DisciplineTalents[0]))
                    CheckAgainst.push(libDiscipline.Circles[j].DisciplineTalents[0]);
        }

    let $returner = $("<select>", { "id" : "VersatilitySelect" + thisTalentIndex, "class" : "lockInPlay wideInPlay versatilitySelect", "style": "text-align:left;"});

    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));

    let previousOptGroupLabel = "";
    let $thisOptgroup;


    for (let i = 0; i < Library.VersatilityTiers.length; i++) 
        if (Character.Talents[thisTalentIndex].ID == Library.VersatilityTiers[i].ID || !CheckAgainst.includes(Library.VersatilityTiers[i].ID))
        {
            if ("Available at Circle " + Library.VersatilityTiers[i].EarliestCircle != previousOptGroupLabel)
            {
                if ($thisOptgroup != undefined)
                    $returner.append($thisOptgroup.clone());
                previousOptGroupLabel = "Available at Circle " + Library.VersatilityTiers[i].EarliestCircle;
                $thisOptgroup = $("<optgroup>", {label : previousOptGroupLabel});
            }
            $thisOptgroup.append($('<option>', {value : Library.VersatilityTiers[i].ID, text : Library.VersatilityTiers[i].Name}));
        }
    if ($thisOptgroup != undefined)
        $returner.append($thisOptgroup.clone());
    
    return $returner;
};

UI.BuildPathTalentSelect = function(pathID, pathRank, thisTalentIndex)
{
    let $returner = $("<select>", { "id" : "PathTalentSelect" + thisTalentIndex, "class" : "lockInPlay wideInPlay pathTalentSelect", "style": "width: 100%; text-align:left;"});

    let CheckAgainst = [];
    for (let i = 0; i < Character.Talents.length; i++) 
        if (i != thisTalentIndex)
            CheckAgainst.push(Character.Talents[i].ID);

    let libPath = Library.GetPath(pathID);
    let pickFromList = [];
    for (let i = 0; i < pathRank; i++)
        if (libPath.Ranks[i].Talents != undefined)
            pickFromList.push.apply(pickFromList, libPath.Ranks[i].Talents);

    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));
    for (let i = 0; i < pickFromList.length; i++) 
        if(!CheckAgainst.includes(pickFromList[i]))
            $returner.append($('<option>', {value:pickFromList[i], text:Library.GetTalent(pickFromList[i]).Name}));

    if (!CheckAgainst.includes(Character.Talents[thisTalentIndex].ID))
        $returner.val(Character.Talents[thisTalentIndex].ID);

    return $returner;
}

UI.BuildKnackSelect = function(thisKnackIndex)
{
    let $returner = $("<select>", {"class" : "knackSelect lockInPlay", "style": "text-align:left; width: 100%;"});
    
    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));
    
    let KnacksQualifiedFor = CharacterManager.GetKnacksQualifiedFor();

    let previousOptGroupLabel = "";
    let $thisOptgroup;

    for (let i = 0; i < KnacksQualifiedFor.length; i++) 
        if (Character.Knacks == undefined || Character.Knacks[thisKnackIndex].ID == KnacksQualifiedFor[i].ID || Character.Knacks.find(o => o.ID == KnacksQualifiedFor[i].ID) == undefined || KnacksQualifiedFor[i].Retakable == "Yes")
        {
            if (KnacksQualifiedFor[i].Talent != previousOptGroupLabel)
            {
                if ($thisOptgroup != undefined)
                    $returner.append($thisOptgroup.clone());
                previousOptGroupLabel = KnacksQualifiedFor[i].Talent;
                $thisOptgroup = $("<optgroup>", {label : previousOptGroupLabel});
            }
            $thisOptgroup.append($('<option>', {value : KnacksQualifiedFor[i].ID, text : KnacksQualifiedFor[i].Name}));
        }
    if ($thisOptgroup != undefined)
        $returner.append($thisOptgroup.clone());
    return $returner;
};

UI.BuildDevotionSelect = function(thisDoctrineRank)
{
    let $returner = $("<select>", {"id" : "DevotionSelect"+thisDoctrineRank, "class" : "devotionSelect lockInPlay wideInPlay", "style": "text-align:left;"});

    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));
    
    let libDoctrine = Library.GetDoctrine(Character.Questor.Doctrine);

    let $optGroup = $("<optgroup>", {label : "Follower"});
    for (let i = 0; i < libDoctrine.FollowerDevotions.length; i++) 
        if (libDoctrine.FollowerDevotions[i] == Character.Questor.Ranks[thisDoctrineRank].devotionID || Character.Questor.Ranks.find(o => o.devotionID == libDoctrine.FollowerDevotions[i]) == undefined)
            $optGroup.append($('<option>', {value:libDoctrine.FollowerDevotions[i], text:Library.GetDevotion(libDoctrine.FollowerDevotions[i]).Name}));
    $returner.append($optGroup.clone());

    if ([4,5,6,7,8,9,10,11,12].includes(thisDoctrineRank))
    {
        $optGroup = $("<optgroup>", {label : "Adherent"});
        for (let i = 0; i < libDoctrine.AdherentDevotions.length; i++) 
            if (libDoctrine.AdherentDevotions[i] == Character.Questor.Ranks[thisDoctrineRank].devotionID || Character.Questor.Ranks.find(o => o.devotionID == libDoctrine.AdherentDevotions[i]) == undefined)
                $optGroup.append($('<option>', {value:libDoctrine.AdherentDevotions[i], text:Library.GetDevotion(libDoctrine.AdherentDevotions[i]).Name}));
        $returner.append($optGroup.clone());
    }

    if ([8,9,10,11,12].includes(thisDoctrineRank))
    {
        $optGroup = $("<optgroup>", {label : "Exemplar"});
        for (let i = 0; i < libDoctrine.ExemplarDevotions.length; i++) 
            if (libDoctrine.ExemplarDevotions[i] == Character.Questor.Ranks[thisDoctrineRank].devotionID || Character.Questor.Ranks.find(o => o.devotionID == libDoctrine.ExemplarDevotions[i]) == undefined)
                $optGroup.append($('<option>', {value:libDoctrine.ExemplarDevotions[i], text:Library.GetDevotion(libDoctrine.ExemplarDevotions[i]).Name}));
        $returner.append($optGroup.clone());
    }

    $returner.val(Character.Questor.Ranks[thisDoctrineRank].devotionID);

    return $returner;
}

UI.BuildGeneralSkillSelect = function(thisSkillIndex)
{
    let $returner = $("<select>", {"class" : "skillSelect lockInPlay wideInPlay", "style": "text-align:left;"});
    
    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));

    let previousOptGroupLabel;
    let $thisOptgroup = $("<optgroup>", {label : "Cost : " + previousOptGroupLabel});

    for (let i = 0; i < Library.Skills.length; i++) 
        if (Library.Skills[i].Category == "General" && (Character.Skills[thisSkillIndex].ID == Library.Skills[i].ID || Character.Skills.find(o => o.ID == Library.Skills[i].ID) == undefined))
        {
            if (Library.Skills[i].Cost != previousOptGroupLabel)
            {
                if (previousOptGroupLabel != undefined) 
                    $returner.append($thisOptgroup.clone());
                previousOptGroupLabel = Library.Skills[i].Cost;
                $thisOptgroup = $("<optgroup>", {label : "Cost : " + previousOptGroupLabel});
            }
            $thisOptgroup.append($('<option>', {value : Library.Skills[i].ID, text : Library.Skills[i].Name}));
        }
    if ($thisOptgroup != undefined)
        $returner.append($thisOptgroup.clone());

    return $returner;
};

UI.BuildSpellSelect = function(thisSpellIndex)
{
    let $returner = $("<select>", {"class" : "spellSelect lockInPlay", "style": "text-align:left; width: 100%;"});
    
    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));

    let SpellList = CharacterManager.GetSpellsQualifiedFor();

    if(SpellList.length == 0)
        return $returner;

    let previousOptGroupLabel = "";
    let $thisOptgroup;
    $returner.append($thisOptgroup);

    for (let i = 0; i < SpellList.length; i++) 
    {
        if (Character.Spells[thisSpellIndex].ID == SpellList[i].ID || Character.Spells.find(o => o.ID == SpellList[i].ID) == undefined)
        {
            if (SpellList[i].Discipline + " - " + SpellList[i].Circle != previousOptGroupLabel)
            {
                if ($thisOptgroup != undefined)
                    $returner.append($thisOptgroup.clone());
                previousOptGroupLabel = SpellList[i].Discipline + " - " + SpellList[i].Circle;
                $thisOptgroup = $("<optgroup>", {label : previousOptGroupLabel});
            }
            $thisOptgroup.append($('<option>', {value: SpellList[i].ID, text: SpellList[i].Name}));
        }
    }
    $returner.append($thisOptgroup.clone());

    return $returner;
};

UI.BuildEquipmentSelect = function(thisType)
{
    let $returner = $("<select>", {"class" : "eqSelect lockInPlay wideInPlay", "style": "text-align:left; width: 100%;"});
    
    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));

    let previousOptGroupLabel = "";
    let $thisOptgroup;
    $returner.append($thisOptgroup);

    for (let i = 0; i < Library.Equipment.length; i++) 
        if(thisType == undefined || thisType == "" || thisType == "Empty" || Library.Equipment[i].Type == thisType)
        {
            let optGroupCandidate = (Library.Equipment[i].Type + (Library.Equipment[i].Type == "Thread Item" ? " - " + Library.Equipment[i].BaseType : ""))
            if (optGroupCandidate != previousOptGroupLabel) 
            {
                if ($thisOptgroup != undefined)
                    $returner.append($thisOptgroup.clone());
                $thisOptgroup = $("<optgroup>", {label : optGroupCandidate});
                previousOptGroupLabel = optGroupCandidate;
            }
            $thisOptgroup.append($('<option>', {value: Library.Equipment[i].ID, text: Library.Equipment[i].Name}));
        }
    
    $returner.append($thisOptgroup.clone());
    
    return $returner;
};

UI.BuildEquipmentTypeSelect = function(thisType)
{

  let $returner = $("<select>", {"class" : "eqTypeSelect lockInPlay wideInPlay", "style": "text-align:left;"});
    
    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));

    let Types = [];
    for (let i = 0; i < Library.Equipment.length; i++) 
        if (!Types.includes(Library.Equipment[i].Type))
            Types.push(Library.Equipment[i].Type);

    for (let i = 0; i < Types.length; i++) 
        $returner.append($('<option>', {value: Types[i], text: Types[i]}));
    
    return $returner;
};

UI.BuildMagicIDSelect = function()
{
    let $returner = $("<select>", {"class" : "magicSelect lockInPlay", "style": "text-align:left;"});
    
    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));

    for (let i = 0; i < Library.Magic.length; i++) 
        $returner.append($('<option>', {value: Library.Magic[i].ID, text: Library.Magic[i].Name}));

    return $returner;
};

UI.BuildTalentOrSkillSelect = function()
{
    let $returner = $("<select>", {"class" : "magicTalentorSkillSelect lockInPlay", "style": "text-align:left;"});
    
    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));

    for (let i = 0; i < Character.Talents.length; i++) 
        if (Character.Talents[i].ID != "Empty")
        {
            if(Character.Talents[i].UID == undefined)
                Character.Talents[i].UID = uuidv4();
            $returner.append($('<option>', {value: Character.Talents[i].UID, text: "(Talent) " + Library.GetTalent(Character.Talents[i].ID).Name}));
        }

    for (let i = 0; i < Character.Skills.length; i++) 
        if (Character.Skills[i].ID != "Empty")
        {
            if(Character.Skills[i].UID == undefined)
                Character.Skills[i].UID = uuidv4();
            $returner.append($('<option>', {value: Character.Skills[i].UID, text: "(Skill) " + (Character.Skills[i].Category == "General" ? Library.GetSkill(Character.Skills[i].ID).Name : Character.Skills[i].Name)}));
        }

    return $returner;
};

UI.BuildAttributeSelect = function() 
{
    let $returner = $("<select>", {"class" : "magicAttributeSelect lockInPlay", "style": "text-align:left;"});
    
    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));

    $returner.append($('<option>', {value:"Dex", text: Library.GetFullName("Dex")}));
    $returner.append($('<option>', {value:"Str", text: Library.GetFullName("Str")}));
    $returner.append($('<option>', {value:"Tgh", text: Library.GetFullName("Tgh")}));
    $returner.append($('<option>', {value:"Per", text: Library.GetFullName("Per")}));
    $returner.append($('<option>', {value:"Wil", text: Library.GetFullName("Wil")}));
    $returner.append($('<option>', {value:"Cha", text: Library.GetFullName("Cha")}));

    return $returner;
};

UI.BuildThreadTargetSelect = function(thisMagicIndex, threadCount, thisThreadIndex)
{
    let $returner = $("<select>", {"class" : "magicThreadTargetSelect lockInPlay", "style": "text-align:left;"});
    
    $returner.append($('<option>', {value:"Empty", text:"(Not Selected)"}));

    if (threadCount == 1 || (Character.Magic[thisMagicIndex].Threads[thisThreadIndex].Target == "PhDef" || Character.Magic[thisMagicIndex].Threads.find(o => o.Target == "PhDef") == undefined))
        $returner.append($('<option>', {value:"PhDef", text: Library.GetFullName("PhDef")}));
    if (threadCount == 1 || (Character.Magic[thisMagicIndex].Threads[thisThreadIndex].Target == "MyDef" || Character.Magic[thisMagicIndex].Threads.find(o => o.Target == "MyDef") == undefined))
        $returner.append($('<option>', {value:"MyDef", text: Library.GetFullName("MyDef")}));
    if (threadCount == 1 || (Character.Magic[thisMagicIndex].Threads[thisThreadIndex].Target == "SoDef" || Character.Magic[thisMagicIndex].Threads.find(o => o.Target == "SoDef") == undefined))
        $returner.append($('<option>', {value:"SoDef", text: Library.GetFullName("SoDef")}));
    if (threadCount == 1 || (Character.Magic[thisMagicIndex].Threads[thisThreadIndex].Target == "WndTh" || Character.Magic[thisMagicIndex].Threads.find(o => o.Target == "WndTh") == undefined))
        $returner.append($('<option>', {value:"WndTh", text: Library.GetFullName("WndTh")}));
    if (threadCount == 1 || (Character.Magic[thisMagicIndex].Threads[thisThreadIndex].Target == "MyArm" || Character.Magic[thisMagicIndex].Threads.find(o => o.Target == "MyArm") == undefined))
        $returner.append($('<option>', {value:"MyArm", text: Library.GetFullName("MyArm")}));
    if (threadCount == 1 || (Character.Magic[thisMagicIndex].Threads[thisThreadIndex].Target == "Dur"   || Character.Magic[thisMagicIndex].Threads.find(o => o.Target == "Dur") == undefined))
        $returner.append($('<option>', {value:"Dur",   text: Library.GetFullName("Dur")}));

    for (let i = 0; i < Character.Talents.length; i++) 
        if (Character.Talents[i].ID != "Empty")
        {
            if(Character.Talents[i].UID == undefined)
                Character.Talents[i].UID = uuidv4();
            if (threadCount == 1 || Character.Magic[thisMagicIndex].Threads[thisThreadIndex].Target == Character.Talents[i].UID || Character.Magic[thisMagicIndex].Threads.find(o => o.Target == Character.Talents[i].UID) == undefined)
                $returner.append($('<option>', {value: Character.Talents[i].UID, text: "(Talent) " + Library.GetTalent(Character.Talents[i].ID).Name}));
        }
    return $returner;
};

UI.BuildNumbersSelect = function(min, max, selected, id, className)
{
    let $returner = $("<select>", {"id" : id, "class" : (className+"" == "" ? "" : className + " ") + "numberSelect lockInPlay"/*, "style" : "width: 2vw !important;"*/});
    for (let i = min; i <= max; i++)
        if (i == selected)
            $returner.append($('<option>', {value: i , text: i + "", "selected" : "selected"}));
        else            
            $returner.append($('<option>', {value: i , text: i + ""}));
    
    return $returner;
}

function fetchHeader(url, wch) 
{
    try {
        var req=new XMLHttpRequest();
        req.open("HEAD", url, false);
        req.send(null);
        if(req.status== 200){
            return req.getResponseHeader(wch);
        }
        else return false;
    } catch(er) {
        return er.message;
    }
}


















