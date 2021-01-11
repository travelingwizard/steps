
var Me1 = new function()
{
    this.Basic = 
    {
        "Name"        : "Me",
        "Player"      : "1",
        "Gender"      : "M",
        "Age"         : "",
        "Height"      : "",
        "Weight"      : "",
        "Hair"        : "Black",
        "Skin"        : "",
        "Eyes"        : "Brown and empty",
        "Passion"     : "",
        "Traits"      : "",
        "Description" : "Smash bash crush"
    };    

    this.Race = "Ogre";

    this.attributePoints = 25;

    this.Attributes = 
    {
        "Dex": {"FullName" : "Dexterity",  "Buildpoints" :  5, "Increases" : 0},
        "Str": {"FullName" : "Strength",   "Buildpoints" : 15, "Increases" : 0},
        "Tou": {"FullName" : "Toughness",  "Buildpoints" :  5, "Increases" : 0},
        "Per": {"FullName" : "Perception", "Buildpoints" : -2, "Increases" : 0},
        "Wil": {"FullName" : "Willpower",  "Buildpoints" : -2, "Increases" : 0},
        "Cha": {"FullName" : "Charisma",   "Buildpoints" :  2, "Increases" : 0}
    }

    this.LegendPoints = 0;

    this.Disciplines = 
    [];
    this.Talents = 
    [];

    this.Skills = 
    [
        {"ID" : "ED4SpeakLanguage",      "Rank" : "1", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4MeleeWeapons",       "Rank" : "6", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4SecondAttack",       "Rank" : "6", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4UnarmedCombat",      "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4BattleShout",        "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4AnimalHandling",     "Rank" : "2", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Swimming",           "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Climbing",           "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4WildernessSurvival", "Rank" : "2", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Tracking",           "Rank" : "2", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4StealthyStride",     "Rank" : "3", "Freerank" : "1", "Category" : "General"}

    ];

    this.Spells = [];

    this.Equipment = 
    [
        {"ID" : "HardenedLeather", "Name" : "Half a dozen dried up cow hides", "Count" : "1",    "InUse" : "Yes"},
        {"ID" : "PoleAxe",         "Name" : "Big spiky club",              "Count" : "1",    "InUse" : "Yes", "Forged" : "5"}
    ];
}

var Me2 = new function()
{
    this.Basic = 
    {
        "Name"        : "Me",
        "Player"      : "2",
        "Gender"      : "M",
        "Age"         : "",
        "Height"      : "",
        "Weight"      : "",
        "Hair"        : "Brown",
        "Skin"        : "",
        "Eyes"        : "Brown and intelligent",
        "Passion"     : "",
        "Traits"      : "",
        "Description" : "I catch"
    };    

    this.Race = "Ogre";

    this.attributePoints = 25;

    this.Attributes = 
    {
        "Dex": {"FullName" : "Dexterity",  "Buildpoints" : 15, "Increases" : 0},
        "Str": {"FullName" : "Strength",   "Buildpoints" :  7, "Increases" : 0},
        "Tou": {"FullName" : "Toughness",  "Buildpoints" :  5, "Increases" : 0},
        "Per": {"FullName" : "Perception", "Buildpoints" :  7, "Increases" : 0},
        "Wil": {"FullName" : "Willpower",  "Buildpoints" :  3, "Increases" : 0},
        "Cha": {"FullName" : "Charisma",   "Buildpoints" :  0, "Increases" : 0}
    }

    this.LegendPoints = 0;

    this.Disciplines =  [];

    this.Talents = [];

    this.Skills = 
    [
        {"ID" : "ED4Knowledge",          "Name" : "Preywise",    "Rank" : "4", "Freerank" : "1", "Category" : "Knowledge"},
        {"ID" : "ED4Knowledge",          "Name" : "Plantwise",   "Rank" : "1", "Freerank" : "2", "Category" : "Knowledge"},
        {"ID" : "ED4Knowledge",          "Name" : "Local area",  "Rank" : "3", "Freerank" : "1", "Category" : "Knowledge"},
        {"ID" : "ED4SpeakLanguage",      "Rank" : "1", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4MeleeWeapons",       "Rank" : "2", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4ThrowingWeapons",    "Rank" : "6", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4UnarmedCombat",      "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4AnimalHandling",     "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Swimming",           "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Climbing",           "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4WildernessSurvival", "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Tracking",           "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4StealthyStride",     "Rank" : "5", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Alchemy",            "Rank" : "2", "Freerank" : "2", "Category" : "General"},
        {"ID" : "ED4Physician",          "Rank" : "3", "Freerank" : "2", "Category" : "General"},
        {"ID" : "ED4Navigation",         "Rank" : "1", "Freerank" : "2", "Category" : "General"}

    ];

    this.Spells = [];

    this.Equipment = 
    [
        {"ID" : "HideArmor",                                   "Count" : "1", "InUse" : "Yes"},
        {"ID" : "Ferndask",                                    "Count" : "1", "InUse" : "Yes"},
        {"ID" : "ThrowingSpear", "Name" : "Long pointy stick", "Count" : "1", "InUse" : "Yes", "Forged" : "6"}
    ];
}

var Me3 = new function()
{
    this.Basic = 
    {
        "Name"        : "Me",
        "Player"      : "3",
        "Gender"      : "M",
        "Age"         : "",
        "Height"      : "",
        "Weight"      : "",
        "Hair"        : "Black",
        "Skin"        : "",
        "Eyes"        : "Brown and shifty",
        "Passion"     : "",
        "Traits"      : "",
        "Description" : "Sneak"
    };    

    this.Race = "Ogre";

    this.attributePoints = 25;

    this.Attributes = 
    {
        "Dex": {"FullName" : "Dexterity",  "Buildpoints" : 15, "Increases" : 0},
        "Str": {"FullName" : "Strength",   "Buildpoints" :  2, "Increases" : 0},
        "Tou": {"FullName" : "Toughness",  "Buildpoints" :  5, "Increases" : 0},
        "Per": {"FullName" : "Perception", "Buildpoints" :  9, "Increases" : 0},
        "Wil": {"FullName" : "Willpower",  "Buildpoints" : -2, "Increases" : 0},
        "Cha": {"FullName" : "Charisma",   "Buildpoints" :  9, "Increases" : 0}
    }

    this.LegendPoints = 0;

    this.Disciplines = [];

    this.Talents = [];

    this.Skills = 
    [
        {"ID" : "ED4SpeakLanguage",      "Rank" : "1", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4MeleeWeapons",       "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4UnarmedCombat",      "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4SurpriseStrike",     "Rank" : "6", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Climbing",           "Rank" : "1", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4WildernessSurvival", "Rank" : "2", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4StealthyStride",     "Rank" : "6", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Awareness",          "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4DangerSense",        "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Leadership",         "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4SloughBlame",        "Rank" : "5", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Taunt",              "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4FastHand",           "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4PickingPockets",     "Rank" : "3", "Freerank" : "1", "Category" : "General"}
    ];

    this.Spells = [];

    this.Equipment = 
    [
        {"ID" : "HideArmor", "Count" : "1", "InUse" : "Yes"},
        {"ID" : "Club",  "Name" : "Big club", "Count" : "1", "InUse" : "Yes", "Forged" : "5"}
    ];
}

var Me4 = new function()
{
    this.Basic = 
    {
        "Name"        : "(Incomplete)",
        "Player"      : "GM",
        "Gender"      : "",
        "Age"         : "",
        "Height"      : "",
        "Weight"      : "",
        "Hair"        : "",
        "Skin"        : "",
        "Eyes"        : "",
        "Passion"     : "",
        "Traits"      : "",
        "Description" : ""
    };    

    this.Race = "Ogre";

    this.attributePoints = 25;

    this.Attributes = 
    {
        "Dex": {"Buildpoints" :  3, "Increases" : 0},
        "Str": {"Buildpoints" :  9, "Increases" : 0},
        "Tou": {"Buildpoints" :  7, "Increases" : 0},
        "Per": {"Buildpoints" :  3, "Increases" : 0},
        "Wil": {"Buildpoints" :  2, "Increases" : 0},
        "Cha": {"Buildpoints" :  0, "Increases" : 0}
    }

    this.LegendPoints = 0;

    this.Disciplines = 
    [];
    this.Talents = 
    [
        {"Order" : "1",  "ID" : "ED4Spellcasting", "Rank" : "5", "Freerank" : "2", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
        {"Order" : "2",  "ID" : "ED4Willforce",    "Rank" : "5", "Freerank" : "2", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"}
    ];

    this.Skills = 
    [
        {"ID" : "ED4SpeakLanguage",      "Rank" : "1", "Freerank" : "2", "Category" : "General"},
        {"ID" : "ED4Knowledge",          "Name" : "Plantwise",  "Rank" : "4", "Freerank" : "1", "Category" : "Knowledge"},
        {"ID" : "ED4Knowledge",          "Name" : "Local area",  "Rank" : "4", "Freerank" : "1", "Category" : "Knowledge"},
        {"ID" : "ED4MeleeWeapons",       "Rank" : "2", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4UnarmedCombat",      "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4AnimalBond",         "Rank" : "1", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Swimming",           "Rank" : "1", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4WildernessSurvival", "Rank" : "2", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4StealthyStride",     "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Alchemy",            "Rank" : "4", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4EmotionSong",        "Rank" : "5", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Haggle",             "Rank" : "2", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Physician",          "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Artisan", "Name" : "Totem",   "Rank" : "3", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4Artisan", "Name" : "Cooking", "Rank" : "2", "Freerank" : "1", "Category" : "General"}

    ];

    this.Spells = [
        {"ID" : "ED4NEtherealDarkness"},
        {"ID" : "ED4NShadowMeld"},
        {"ID" : "ED4NSoulArmor"},
        {"ID" : "ED4WCrushingWill"}
    ];

    this.Equipment = 
    [
        {"ID" : "Fernweave",     "Count" : "1", "InUse" : "Yes"},
        {"ID" : "Quarterstaff",  "Name" : "Big long stick",              "Count" : "1",    "InUse" : "Yes", "Forged" : "5"},
        {"ID" : "misc",          "Name" : "Totems, little charms that count as spell matrices", "Count" : "1", "InUse" : ""}
    ];
}

var Me5 = new function()
{
    this.Basic = 
    {
        "Name"        : "Store Bertha",
        "Player"      : "(Me5)",
        "Gender"      : "M",
        "Age"         : "",
        "Height"      : "",
        "Weight"      : "",
        "Hair"        : "Black",
        "Skin"        : "",
        "Eyes"        : "Brown and steady",
        "Passion"     : "",
        "Traits"      : "",
        "Description" : "I make"
    };    

    this.Race = "Ogre";

    this.attributePoints = 25;

    this.Attributes = 
    {
        "Dex": {"FullName" : "Dexterity",  "Buildpoints" :  1, "Increases" : 0},
        "Str": {"FullName" : "Strength",   "Buildpoints" :  3, "Increases" : 0},
        "Tou": {"FullName" : "Toughness",  "Buildpoints" :  1, "Increases" : 0},
        "Per": {"FullName" : "Perception", "Buildpoints" : 12, "Increases" : 0},
        "Wil": {"FullName" : "Willpower",  "Buildpoints" :  1, "Increases" : 0},
        "Cha": {"FullName" : "Charisma",   "Buildpoints" :  7, "Increases" : 0}
    }

    this.LegendPoints = 0;

    this.Disciplines = 
    [];
    this.Talents = 
    [];

    this.Skills = 
    [
        {"ID" : "ED4SpeakLanguage",      "Rank" : "1", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4MeleeWeapons",       "Rank" : "4", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4UnarmedCombat",      "Rank" : "2", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4AvoidBlow",          "Rank" : "5", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4Climbing",           "Rank" : "1", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4WildernessSurvival", "Rank" : "4", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4StealthyStride",     "Rank" : "3", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4Awareness",          "Rank" : "3", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4CraftWeapon",        "Rank" : "4", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4Craftsman",          "Rank" : "6", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4AssessIntentions",   "Rank" : "4", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4AssessIntentions",   "Rank" : "4", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4Alchemy",            "Rank" : "4", "Freerank" : "0", "Category" : "General"},
        {"ID" : "ED4Flirting",           "Rank" : "4", "Freerank" : "0", "Category" : "General"}
    ];

    this.Spells = [];

    this.Equipment = 
    [
        {"ID" : "HideArmor", "Count" : "1", "InUse" : "Yes"},
        {"ID" : "Club",  "Name" : "Big club", "Count" : "1", "InUse" : "Yes", "Forged" : "5"}
    ];
}