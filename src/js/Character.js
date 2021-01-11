// Characters for the Steps project, Lars Gottlieb 2018-20
/*jshint esversion: 6 */

"use strict";
let pregens = 
{
    Pterradox : 
    {
        "Basic" : 
        {
            "Name"        : "Pterradox",
            "Player"      : "Lars Gottlieb",
            "Gender"      : "Female",
            "Age"         : "28",
            "Height"      : "49cm",
            "Weight"      : "",
            "Hair"        : "Black",
            "Skin"        : "Pasty white",
            "Eyes"        : "Deep purple",
            "Passion"     : "Astendar",
            "Traits"      : "",
            "Description" : "Dark and cheerful"

        },    

        "Race" : "ED4Windling",

        "PortraitURL" : "./img/portraits/Dox.jpg",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : -1, "Increases" : 0},
            "Str": {"Buildpoints" :  0, "Increases" : 0},
            "Tou": {"Buildpoints" :  1, "Increases" : 0},
            "Per": {"Buildpoints" : 15, "Increases" : 0},
            "Wil": {"Buildpoints" :  9, "Increases" : 0},
            "Cha": {"Buildpoints" :  1, "Increases" : 0}
        },

        "LegendPoints" : 6100,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Nethermancer",
                "Circle" : "3",
                "OptionalTalentsChosen" : 
                [
                    {"Circle" : "1", "ID" : "ED4StandardMatrix"},
                    {"Circle" : "2", "ID" : "ED4Awareness"},
                    {"Circle" : "3", "ID" : "ED4StealthyStride"}
                ]
            }
        ],
        "Talents" : 
        [
            {"Order" : "1",  "ID" : "ED4StandardMatrix",           "Rank" : "-", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Free", "FreeTalent" : "0", "Spell" : "ED4NShadowMeld"},
            {"Order" : "2",  "ID" : "ED4StandardMatrix",           "Rank" : "-", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Free", "FreeTalent" : "1", "Spell" : "ED4NChillingCircle"},
            {"Order" : "3",  "ID" : "ED4AstralSight",              "Rank" : "3", "Freerank" : "1", "Source" : "Discipline, Racial", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "4",  "ID" : "ED4Frighten",                 "Rank" : "3", "Freerank" : "1", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "5",  "ID" : "ED4Patterncraft",             "Rank" : "3", "Freerank" : "1", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "6",  "ID" : "ED4Spellcasting",             "Rank" : "3", "Freerank" : "2", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "7",  "ID" : "ED4ThreadWeavingNethermancy", "Rank" : "3", "Freerank" : "2", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "8",  "ID" : "ED4StandardMatrix",           "Rank" : "2", "Freerank" : "1", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Optional",    "Spell" : "ED4NSpiritDart"},
            {"Order" : "9",  "ID" : "ED4SteelThought",             "Rank" : "3", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "10", "ID" : "ED4Awareness",                "Rank" : "2", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "11", "ID" : "ED4SpiritTalk",               "Rank" : "2", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "12", "ID" : "ED4StealthyStride",           "Rank" : "2", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "3", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Knowledge",         "Name" : "Spirit Wise",         "Rank" : "1", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Knowledge",         "Name" : "Plant Wise",          "Rank" : "1", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Knowledge",         "Name" : "Horror Lore",         "Rank" : "1", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Artisan",           "Name" : "Drawing",             "Rank" : "1", "Freerank" : "1", "Category" : "Artisan"},
            {"ID" : "ED4Artisan",           "Name" : "Cat's cradle",        "Rank" : "1", "Freerank" : "0", "Category" : "Artisan"},
            {"ID" : "ED4FirstImpression",                                   "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4Alchemy",                                           "Rank" : "3", "Freerank" : "3", "Category" : "General"},
            {"ID" : "ED4ReadWriteLanguage",                                 "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                                     "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "Empty"}
        ],

        "Spells" : 
        [
            {"ID" : "ED4NAstralSpear"},
            {"ID" : "ED4NBoneCircle"},
            {"ID" : "ED4NDarkMessenger"},
            {"ID" : "ED4NEtherealDarkness"},
            {"ID" : "ED4NLifeCircleofOne"},
            {"ID" : "ED4NShadowMeld"},
            {"ID" : "ED4NSoulArmor"},
            {"ID" : "ED4NSpiritDart"},
            {"ID" : "ED4NAspectoftheFogGhost"},
            {"ID" : "ED4NShadowsWhisper"},
            {"ID" : "ED4NChillingCircle"},
            {"ID" : "ED4NFogofFear"}
        ],

        "Equipment" : 
        [
            {"ID" : "PaddedCloth",         "Count" : "1", "InUse" : "Yes"},
            {"ID" : "AlchemistsKit",       "Count" : "1", "InUse" : "Yes"},
            {"ID" : "TravelersGarb",       "Count" : "1", "InUse" : "Yes"},
            {"ID" : "AdventuringKit",      "Count" : "1", "InUse" : "Yes"},
            {"ID" : "SalveofClosure",      "Count" : "2", "InUse" : "Yes"},
            {"ID" : "BoosterPotion",       "Count" : "0", "InUse" : "Yes"},
            {"ID" : "NHPsychopompSkarabæ", "Count" : "1", "InUse" : "Yes", "Rank" : "2"},
            {"ID" : "DeathCheat",          "Count" : "1", "InUse" : "Yes"}
        ],

        "Magic" : [],
        "Options" : {"FirstWoundFree" : "true", "Books" : "ElvenNations Travar MysticPaths Iopos LarsGottlieb"}
    },

    Ea :
    {
        "Basic" : 
        {
            "Name"        : "Ea Jordvis",
            "Player"      : "Ann Louise",
            "Gender"      : "Female",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Human",

        "Versatility" :
        [
            {
                "ID": "ED4Entertainer",
                "Tier": "1"
            }
        ],


        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  3, "Increases" : 0},
            "Str": {"Buildpoints" : -2, "Increases" : 0},
            "Tou": {"Buildpoints" :  0, "Increases" : 0},
            "Per": {"Buildpoints" : 12, "Increases" : 0},
            "Wil": {"Buildpoints" : 12, "Increases" : 0},
            "Cha": {"Buildpoints" :  0, "Increases" : 0}
        },

        "LegendPoints" : 5600,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Elementalist",
                "Circle" : "3",
                "OptionalTalentsChosen" : 
                [
                    {"Circle" : "1", "ID" : "ED4AstralSight"},
                    {"Circle" : "2", "ID" : "ED4Awareness"},
                    {"Circle" : "3", "ID" : "ED4Tracking"} 
                ]
            }
        ],
        "Talents" : 
        [
            {"Order" : "0",  "ID" : "ED4Versatility", "Rank": "1", "Freerank": "0", "Source": "Human", "DisciplineId": "", "Circle": "", "Type": "Racial", "TalentPointsUseable": "True", "Step": "1", "Cost": "100"},
            {"Order" : "1",  "ID" : "ED4StandardMatrix",            "Rank" : "-", "Freerank" : "0", "DisciplineId" : "ED4Elementalist", "Circle" : "1", "Type" : "Free", "FreeTalent" : "0"},
            {"Order" : "2",  "ID" : "ED4StandardMatrix",            "Rank" : "-", "Freerank" : "0", "DisciplineId" : "ED4Elementalist", "Circle" : "1", "Type" : "Free", "FreeTalent" : "1"},
            {"Order" : "3",  "ID" : "ED4Awareness",                 "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Elementalist", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "4",  "ID" : "ED4Patterncraft",              "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Elementalist", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "5",  "ID" : "ED4Spellcasting",              "Rank" : "4", "Freerank" : "3", "DisciplineId" : "ED4Elementalist", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "6",  "ID" : "ED4ThreadWeavingElementalism", "Rank" : "3", "Freerank" : "3", "DisciplineId" : "ED4Elementalist", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "7",  "ID" : "ED4WoodSkin",                  "Rank" : "3", "Freerank" : "2", "DisciplineId" : "ED4Elementalist", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "8",  "ID" : "ED4AstralSight",               "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Elementalist", "Circle" : "1", "Type" : "Optional"},
            {"Order" : "9",  "ID" : "ED4FireHeal",                  "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Elementalist", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "10", "ID" : "ED4Tracking",                  "Rank" : "2", "Freerank" : "0", "DisciplineId" : "ED4Elementalist", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "11", "ID" : "ED4ElementalTongues",          "Rank" : "1", "Freerank" : "0", "DisciplineId" : "ED4Elementalist", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "12", "ID" : "ED4StandardMatrix",            "Rank" : "2", "Freerank" : "0", "DisciplineId" : "ED4Elementalist", "Circle" : "3", "Type" : "Optional"},
            {"Order" : "13", "ID" : "ED4StandardMatrix",            "Rank" : "2", "Freerank" : "0", "DisciplineId" : "",                "Circle" : "",  "Type" : "Item"},
            {"Order" : "12", "ID" : "ED4Entertainer",               "Rank" : "1", "Freerank" : "0", "Source": "Versatility 1", "DisciplineId": "", "Circle": "", "Type": "Versatility", "VersatilityRank": "0", "VersatilityTier": "1", "TalentPointsUseable": "True", "Step": "6", "Cost": "0"}    
        ],

        "Skills" : 
        [
            {"ID" : "ED4Artisan",           "Name" : "Mapmaking",  "Rank" : "2", "Freerank" : "2", "Category" : "Artisan"},
            {"ID" : "ED4Knowledge",         "Name" : "Plantwise",  "Rank" : "2", "Freerank" : "2", "Category" : "Knowledge"},
            {"ID" : "ED4Knowledge",         "Name" : "Navigation", "Rank" : "1", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Research",                                 "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4Physician",                                "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4ResistTaunt",                              "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4ReadWriteLanguage",                        "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                            "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4Diplomacy",                                "Rank" : "1", "Freerank" : "0", "Category" : "General"}
        ],

        "Spells" : 
        [
             {"ID" : "ED4EAirArmor"},
             {"ID" : "ED4EEarthDarts"},
             {"ID" : "ED4EFlameweapon"},
             {"ID" : "ED4EHeatFood"},
             {"ID" : "ED4EPurifyEarth"},
             {"ID" : "ED4EPurifyWater"},
             {"ID" : "ED4ESnuff"},
             {"ID" : "ED4EAirMattress"},
             {"ID" : "ED4EFingersofWind"},
             {"ID" : "ED4EShieldWillow"},
             {"ID" : "ED4EIcySurface"},
             {"ID" : "ED4ECrunchClimb"},
             {"ID" : "NHNClean"}
             
        ],

        "Equipment" : 
        [
            {"ID" : "PaddedCloth",     "Count" : "1", "InUse" : "Yes"},
            {"ID" : "NHJordvisKåben",  "Count" : "1", "InUse" : "Yes", "Rank" : "2"},
            {"ID" : "SalveofClosure",  "Count" : "2", "InUse" : "Yes"},
            {"ID" : "BoosterPotion",   "Count" : "1", "InUse" : "Yes"},
            {"ID" : "LastChanceSalve", "Count" : "1", "InUse" : "Yes"},
            {"ID" : "AdventuringKit",  "Count" : "1", "InUse" : "Yes"},
            {"ID" : "HorrorFend",      "Count" : "1", "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    Sten : 
    {
        "Basic" : 
        {
            "Name"        : "Sten",
            "Player"      : "Philip",
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
        },    

        "Race" : "ED4Obsidiman",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 15, "Increases" : 0},
            "Str": {"Buildpoints" : 12, "Increases" : 0},
            "Tou": {"Buildpoints" :  3, "Increases" : 0},
            "Per": {"Buildpoints" : -1, "Increases" : 0},
            "Wil": {"Buildpoints" : -2, "Increases" : 0},
            "Cha": {"Buildpoints" : -2, "Increases" : 0}
        },

        "LegendPoints" : 5600,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Warrior",
                "Circle" : "3"
            }
        ],
        "Talents" : 
        [
            {"Order" : "3", "ID" : "ED4MeleeWeapons",              "Rank" : "5", "Freerank" : "3", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "4", "ID" : "ED4ThreadWeavingWarWeaving",   "Rank" : "3", "Freerank" : "3", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "5", "ID" : "ED4TigerSpring",               "Rank" : "2", "Freerank" : "2", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "6", "ID" : "ED4WoodSkin",                  "Rank" : "2", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "7", "ID" : "ED4AvoidBlow",                 "Rank" : "2", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "8", "ID" : "ED4ShieldBash",                "Rank" : "2", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Optional"},

            {"Order" : "7", "ID" : "ED4WoundBalance",              "Rank" : "1", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "8", "ID" : "ED4AcrobaticDefense",          "Rank" : "1", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "2", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Artisan",           "Name" : "Pet Rocks",     "Rank" : "3", "Freerank" : "2", "Category" : "Artisan"},
            {"ID" : "ED4Knowledge",         "Name" : "Rock Wise",     "Rank" : "2", "Freerank" : "2", "Category" : "Knowledge"},
            {"ID" : "ED4ThrowingWeapons",                             "Rank" : "3", "Freerank" : "2", "Category" : "General"},
            {"ID" : "NH4PowerLifting",                                "Rank" : "3", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4ReadWriteLanguage",                           "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                               "Rank" : "2", "Freerank" : "2", "Category" : "General"},
        ],

        "Spells" : 
        [
        ],

        "Equipment" : 
        [
            {"ID" : "TrollSword",                                         "Count" : "1", "InUse" : "Yes"},
            {"ID" : "HideArmor",                                          "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Body",                                               "Count" : "1", "InUse" : "Yes"},
            {"ID" : "HorrorFend",                                         "Count" : "1", "InUse" : "Yes"},
            {"ID" : "LightQuartzSmall",                                   "Count" : "1", "InUse" : "Yes"},
            {"ID" : "SalveofClosure",                                     "Count" : "1", "InUse" : "Yes"},
            {"ID" : "misc",             "Name" : "Pet Rock (Nat Skykke)", "Count" : "1", "InUse" : "Yes"},
            {"ID" : "AdventuringKit",                                     "Count" : "1", "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    Tys : 
    {
        "Basic" : 
        {
            "Name"        : "Tys Gavtyv",
            "Player"      : "Ann Louise",
            "Gender"      : "Female",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Windling",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 12, "Increases" : 1},
            "Str": {"Buildpoints" :  9, "Increases" : 2},
            "Tou": {"Buildpoints" :  2, "Increases" : 0},
            "Per": {"Buildpoints" : -1, "Increases" : 0},
            "Wil": {"Buildpoints" :  0, "Increases" : 0},
            "Cha": {"Buildpoints" :  5, "Increases" : 0}
        },

        "LegendPoints" : 47700,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ESFBeastmaster",
                "Circle" : "5"
            }
        ],

        "Talents" : 
        [
            {"Order" : "1",  "ID" : "ED4AstralSight",               "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Racial"},
            {"Order" : "2",  "ID" : "ED4AvoidBlow",                 "Rank" : "7", "Freerank" : "1", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3",  "ID" : "ED4ClawShape",                 "Rank" : "6", "Freerank" : "2", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "4",  "ID" : "ED4StealthyStride",            "Rank" : "5", "Freerank" : "1", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "5",  "ID" : "ED4ThreadWeavingBeastWeaving", "Rank" : "5", "Freerank" : "1", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "6",  "ID" : "ED4UnarmedCombat",             "Rank" : "7", "Freerank" : "2", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "7",  "ID" : "ED4CreatureAnalysis",          "Rank" : "3", "Freerank" : "1", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Optional"},
            {"Order" : "8",  "ID" : "ED4Awareness",                 "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "9",  "ID" : "ED4AnimalBond",                "Rank" : "4", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "10", "ID" : "ED4DominateBeast",             "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "11", "ID" : "ED4AnimalTraining",            "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "3", "Type" : "Optional"},
            {"Order" : "12", "ID" : "ED4GreatLeap",                 "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "4", "Type" : "Discipline"},
            {"Order" : "13", "ID" : "ED4EnhanceAnimalCompanion",    "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "4", "Type" : "Optional"},
            {"Order" : "14", "ID" : "ED4BloodShare",                "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "5", "Type" : "Discipline"},
            {"Order" : "15", "ID" : "ED4BattleBellow",              "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "5", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Artisan",           "Name" : "Wood carving",   "Rank" : "2", "Freerank" : "1", "Category" : "Artisan"},
            {"ID" : "ED4Knowledge",         "Name" : "Cats",           "Rank" : "2", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Streetwise",                                   "Rank" : "3", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4Bribery",                                      "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4PickingPockets",                               "Rank" : "3", "Freerank" : "3", "Category" : "General"},
            {"ID" : "ED4Knowledge",         "Name" : "Baby Care",      "Rank" : "1", "Freerank" : "0", "Category" : "Knowledge"},
            {"ID" : "ED4ReadWriteLanguage",                            "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                                "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "AdventuringKit",       "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "ArtisanToolsCarving",  "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "Knife",                "Name" : "",                                     "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "TravelersGarb",        "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "RationsTrail1week",    "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "Silver",               "Name" : "",                                     "Count" : "1700", "InUse" : ""},
            {"ID" : "LightQuartzSmall",     "Name" : "",                                     "Count" : "2",    "InUse" : ""},
            {"ID" : "misc",                 "Name" : "Magical cat feeding bowl",             "Count" : "1",    "InUse" : ""},
            {"ID" : "CloakWarm",            "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "misc",                 "Name" : "Windling book translated to Throalic", "Count" : "1",    "InUse" : ""},
            {"ID" : "misc",                 "Name" : "Magical cookie jar",                   "Count" : "1",    "InUse" : ""},
            {"ID" : "misc",                 "Name" : "A piece of wyrmskull",                 "Count" : "1",    "InUse" : ""},
            {"ID" : "ESFGirdleOfMelian",    "Name" : "",                                     "Count" : "1",    "InUse" : "Yes", "Rank" : "2"},
            {"ID" : "HideArmor",            "Name" : "",                                     "Count" : "1",    "InUse" : "Yes", "MyForge" : "2"}
        ],

        "Magic" : 
        [
            {"ID" : "ED4BloodPeace", "Target" : "Mirrah af Landis", "Description" : ""}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    Tys7 : 
    {
        "Basic" : 
        {
            "Name"        : "Tys Gavtyv",
            "Player"      : "Ann Louise",
            "Gender"      : "Female",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Windling",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 12, "Increases" : 1},
            "Str": {"Buildpoints" :  9, "Increases" : 2},
            "Tou": {"Buildpoints" :  2, "Increases" : 1},
            "Per": {"Buildpoints" : -1, "Increases" : 0},
            "Wil": {"Buildpoints" :  0, "Increases" : 0},
            "Cha": {"Buildpoints" :  5, "Increases" : 0}
        },

        "LegendPoints" : 116100,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ESFBeastmaster",
                "Circle" : "7"
            }
        ],

        "Talents" : 
        [
            {"Order" : "1",  "ID" : "ED4AstralSight",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Racial"},
            {"Order" : "2",  "ID" : "ED4AvoidBlow",                 "Rank" : "9", "Freerank" : "1", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3",  "ID" : "ED4ClawShape",                 "Rank" : "8", "Freerank" : "2", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "4",  "ID" : "ED4StealthyStride",            "Rank" : "7", "Freerank" : "1", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "5",  "ID" : "ED4ThreadWeavingBeastWeaving", "Rank" : "7", "Freerank" : "1", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "6",  "ID" : "ED4UnarmedCombat",             "Rank" : "8", "Freerank" : "2", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "7",  "ID" : "ED4CreatureAnalysis",          "Rank" : "5", "Freerank" : "1", "DisciplineId" : "ESFBeastmaster", "Circle" : "1", "Type" : "Optional"},
            {"Order" : "8",  "ID" : "ED4Awareness",                 "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "9",  "ID" : "ED4AnimalBond",                "Rank" : "4", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "10", "ID" : "ED4DominateBeast",             "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "11", "ID" : "ED4AnimalTraining",            "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "3", "Type" : "Optional"},
            {"Order" : "12", "ID" : "ED4GreatLeap",                 "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "4", "Type" : "Discipline"},
            {"Order" : "13", "ID" : "ED4EnhanceAnimalCompanion",    "Rank" : "2", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "4", "Type" : "Optional"},
            {"Order" : "14", "ID" : "ED4BloodShare",                "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "5", "Type" : "Discipline"},
            {"Order" : "15", "ID" : "ED4BattleBellow",              "Rank" : "4", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "5", "Type" : "Optional"},
            {"Order" : "14", "ID" : "ED4AnimalTalk",                "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "6", "Type" : "Discipline"},
            {"Order" : "15", "ID" : "ED4AcrobaticDefense",          "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "6", "Type" : "Optional"},
            {"Order" : "15", "ID" : "ED4DownStrike",                "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "7", "Type" : "Discipline"},
            {"Order" : "15", "ID" : "ED4CobraStrike",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ESFBeastmaster", "Circle" : "7", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Artisan",           "Name" : "Wood carving",   "Rank" : "3", "Freerank" : "1", "Category" : "Artisan"},
            {"ID" : "ED4Knowledge",         "Name" : "Cats",           "Rank" : "2", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Streetwise",                                   "Rank" : "3", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4Bribery",                                      "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4PickingPockets",                               "Rank" : "3", "Freerank" : "3", "Category" : "General"},
            {"ID" : "ED4Knowledge",         "Name" : "Baby Care",      "Rank" : "1", "Freerank" : "0", "Category" : "Knowledge"},
            {"ID" : "ED4ReadWriteLanguage",                            "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                                "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "AdventuringKit",       "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "ArtisanToolsCarving",  "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "Knife",                "Name" : "",                                     "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "TravelersGarb",        "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "RationsTrail1week",    "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "Silver",               "Name" : "",                                     "Count" : "1700", "InUse" : ""},
            {"ID" : "LightQuartzSmall",     "Name" : "",                                     "Count" : "2",    "InUse" : ""},
            {"ID" : "misc",                 "Name" : "Magical cat feeding bowl",             "Count" : "1",    "InUse" : ""},
            {"ID" : "CloakWarm",            "Name" : "",                                     "Count" : "1",    "InUse" : ""},
            {"ID" : "misc",                 "Name" : "Windling book translated to Throalic", "Count" : "1",    "InUse" : ""},
            {"ID" : "misc",                 "Name" : "Magical cookie jar",                   "Count" : "1",    "InUse" : ""},
            {"ID" : "misc",                 "Name" : "A piece of wyrmskull",                 "Count" : "1",    "InUse" : ""},
            {"ID" : "ESFGirdleOfMelian",    "Name" : "",                                     "Count" : "1",    "InUse" : "Yes", "Rank" : "2"},
            {"ID" : "HideArmor",            "Name" : "",                                     "Count" : "1",    "InUse" : "Yes", "MyForge" : "2"}
        ],

        "Magic" : 
        [
            {"ID" : "ED4BloodPeace", "Target" : "Mirrah af Landis", "Description" : ""}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    IopanSoldier : 
    {
        "Basic" : 
        {
            "Name"        : "Iopan Soldier",
            "Player"      : "(NPC)",
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
        },    

        "Race" : "ED4Human",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 0, "Increases" : 0},
            "Str": {"Buildpoints" : 0, "Increases" : 0},
            "Tou": {"Buildpoints" : 0, "Increases" : 0},
            "Per": {"Buildpoints" : 0, "Increases" : 0},
            "Wil": {"Buildpoints" : 0, "Increases" : 0},
            "Cha": {"Buildpoints" : 0, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : 
        [
        ],
        "Talents" : 
        [
        ],

        "Skills" : 
        [
            {"ID" : "ED4MeleeWeapons", "Rank" : "3", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4AirSailing",   "Rank" : "3", "Freerank" : "0", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "ChainMail",  "Name" : "", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "Broadsword", "Name" : "", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "Footmans",   "Name" : "", "Count" : "1",    "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    IopanCaptain : 
    {
        "Basic" : 
        {
            "Name"        : "Valmatar",
            "Player"      : "Iopan Captain",
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
        },    

        "Race" : "ED4Human",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 0, "Increases" : 1},
            "Str": {"Buildpoints" : 0, "Increases" : 0},
            "Tou": {"Buildpoints" : 0, "Increases" : 0},
            "Per": {"Buildpoints" : 0, "Increases" : 0},
            "Wil": {"Buildpoints" : 0, "Increases" : 0},
            "Cha": {"Buildpoints" : 0, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Warrior",
                "Circle" : "6"
            }
        ],
        "Talents" : 
        [
            {"Order" : "3", "ID" : "ED4AvoidBlow",               "Rank" : "6", "Freerank" : "1", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4MeleeWeapons",            "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ThreadWeavingWarWeaving", "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4TigerSpring",             "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4WoodSkin",                "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4WoundBalance",            "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4AirDance",                "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4WaterfallSlam",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "4", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4EarthSkin",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "5", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4TemperFlesh",             "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "6", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ShieldBash",              "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4UnarmedCombat",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4Fireblood",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "3", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4Maneuver",                "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "4", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4Etiquette",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "5", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4Leadership",              "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "6", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Physician",                                "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4ResistTaunt",                              "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "ChainMail",            "Name" : "", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "TrollAxe",             "Name" : "", "Count" : "1",    "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    IopanWizard : 
    {
        "Basic" : 
        {
            "Name"        : "Norbatar",
            "Player"      : "Iopan Captain",
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
        },    

        "Race" : "ED4Human",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 0, "Increases" : 0},
            "Str": {"Buildpoints" : 0, "Increases" : 0},
            "Tou": {"Buildpoints" : 0, "Increases" : 0},
            "Per": {"Buildpoints" : 0, "Increases" : 2},
            "Wil": {"Buildpoints" : 0, "Increases" : 2},
            "Cha": {"Buildpoints" : 0, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Wizard",
                "Circle" : "6"
            }
        ],
        "Talents" : 
        [
            {"Order" : "3", "ID" : "ED4StandardMatrix",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Free"},
            {"Order" : "3", "ID" : "ED4EnhancedMatrix",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Free"},
            {"Order" : "3", "ID" : "ED4DispelMagic",            "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Spellcasting",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ThreadWeavingWizardry",  "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4AstralSight",            "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4TenaciousWeave",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4SteelThought",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Willforce",              "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4StandardMatrix",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "1", "Type" : "Optional"},
            {"Order" : "3", "ID" : "Empty",                     "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "3", "ID" : "Empty",                     "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "3", "Type" : "Optional"},
            {"Order" : "3", "ID" : "Empty",                     "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "4", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4PowerMask",              "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "5", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4EnhancedMatrix",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "6", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage", "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],

        "Spells" : 
        [
            {"ID" : "ED4WFlight"},
            {"ID" : "ED4WRazorOrb"},
            {"ID" : "ED4WRampage"},
            {"ID" : "ED4WDisplaceSelf"},
            {"ID" : "ED4WSleep"}
        ],

        "Equipment" : 
        [
            {"ID" : "PlateArmor",   "Name" : "Really fine silks, with steel breastplate", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "Quarterstaff", "Name" : "Staff of office",                           "Count" : "1",    "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    Hornbori : 
    {
        "Basic" : 
        {
            "Name"        : "Hornbori",
            "Player"      : "Throal gang enforcer",
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
        },    

        "Race" : "ED4Dwarf",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 7, "Increases" : 0},
            "Str": {"Buildpoints" : 7, "Increases" : 0},
            "Tou": {"Buildpoints" : 7, "Increases" : 0},
            "Per": {"Buildpoints" : 3, "Increases" : 0},
            "Wil": {"Buildpoints" : 0, "Increases" : 0},
            "Cha": {"Buildpoints" : 1, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4SkyRaider",
                "Circle" : "4"
            }
        ],
        "Talents" : 
        [
            {"Order" : "3", "ID" : "ED4BattleShout",             "Rank" : "6", "Freerank" : "3", "DisciplineId" : "ED4SkyRaider", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Climbing",                "Rank" : "8", "Freerank" : "3", "DisciplineId" : "ED4SkyRaider", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Fireblood",               "Rank" : "6", "Freerank" : "2", "DisciplineId" : "ED4SkyRaider", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4MeleeWeapons",            "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4SkyRaider", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ThreadWeavingSkyWeaving", "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4SkyRaider", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4GreatLeap",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4SkyRaider", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4WoundBalance",            "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4SkyRaider", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4FireHeal",                "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4SkyRaider", "Type" : "Discipline"},

            {"Order" : "3", "ID" : "ED4AvoidBlow",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4SkyRaider", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4ShieldBash",              "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4SkyRaider", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4WildernessSurvival",      "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4SkyRaider", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4UnarmedCombat",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4SkyRaider", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Physician",                                "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4ResistTaunt",                              "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "ChainMail",            "Name" : "", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "TrollAxe",             "Name" : "", "Count" : "1",    "InUse" : "Yes", "Forged" : "4"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    Acasta : 
    {
        "Basic" : 
        {
            "Name"        : "Acasta",
            "Player"      : "Mads",
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
        },    

        "Race" : "ED4Obsidiman",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  0, "Increases" : 0},
            "Str": {"Buildpoints" :  0, "Increases" : 0},
            "Tou": {"Buildpoints" :  0, "Increases" : 0},
            "Per": {"Buildpoints" : 12, "Increases" : 3},
            "Wil": {"Buildpoints" : 12, "Increases" : 0},
            "Cha": {"Buildpoints" :  1, "Increases" : 0}
        },

        "LegendPoints" : 116000,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Illusionist",
                "Circle" : "7"
            }
        ],
        "Talents" : 
        [
            {"Order" : "3", "ID" : "ED4StandardMatrix",              "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "1", "Type" : "Free", "FreeTalent" : "0", "Spell" : "ED4IDisaster"},
            {"Order" : "3", "ID" : "ED4EnhancedMatrix",              "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "1", "Type" : "Free", "FreeTalent" : "1", "Spell" : "ED4IDancingDragon"},
            {"Order" : "3", "ID" : "ED4FalseSight",                  "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "1", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4FirstImpression",             "Rank" : "7", "Freerank" : "1", "DisciplineId" : "ED4Illusionist", "Circle" : "1", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4Patterncraft",                "Rank" : "7", "Freerank" : "1", "DisciplineId" : "ED4Illusionist", "Circle" : "1", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4Spellcasting",                "Rank" : "8", "Freerank" : "3", "DisciplineId" : "ED4Illusionist", "Circle" : "1", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4ThreadWeavingIllusionism",    "Rank" : "8", "Freerank" : "3", "DisciplineId" : "ED4Illusionist", "Circle" : "1", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4StandardMatrix",              "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "1", "Type" : "Optional",    "Spell" : "ED4ITrueMissiles"},
            {"Order" : "3", "ID" : "ED4TrueSight",                   "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "2", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4AstralSight",                 "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "2", "Type" : "Optional"},   
            {"Order" : "3", "ID" : "ED4Conversation",                "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "3", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4MimicVoice",                  "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "3", "Type" : "Optional"},   
            {"Order" : "3", "ID" : "ED4DisguiseSelf",                "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "4", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4DeadFall",                    "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "4", "Type" : "Optional"},   
            {"Order" : "3", "ID" : "ED4PowerMask",                   "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "5", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4EnhancedMatrix",              "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "5", "Type" : "Optional",    "Spell" : "ED4IPhantomFireball"},
            {"Order" : "3", "ID" : "ED4Willforce",                   "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "6", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4DispelMagic",                 "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "6", "Type" : "Optional"},   
            {"Order" : "3", "ID" : "ED4Hypnotize",                   "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "7", "Type" : "Discipline"}, 
            {"Order" : "3", "ID" : "ED4SteelThought",                "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "7", "Type" : "Optional"},     
            {"Order" : "3", "ID" : "ED4EnhancedMatrix",              "Rank" : "1", "Freerank" : "0", "DisciplineId" : "ED4Illusionist", "Circle" : "-", "Type" : "Item",       "Spell" : "ED4IEphemeralBolt"}
        ],

        "Knacks" : 
        [
            {"ID" : "ED4SpellcastingBefuddle"},
            {"ID" : "ED4SpellcastingCourage"},
            {"ID" : "ED4SpellcastingStutter"},
            {"ID" : "ED4SpellcastingDoubt"},
            {"ID" : "ED4SpellcastingFluster"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Artisan",           "Name" : "Rune Carving",   "Rank" : "1", "Freerank" : "1", "Category" : "Artisan"},
            {"ID" : "ED4Artisan",           "Name" : "Entertainer",    "Rank" : "2", "Freerank" : "1", "Category" : "Artisan"},
            {"ID" : "ED4Knowledge",         "Name" : "Magic",          "Rank" : "2", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Alchemy",                                      "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4Bribery",                                      "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4Disguise",                                     "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                                "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4ReadWriteLanguage",                            "Rank" : "1", "Freerank" : "1", "Category" : "General"}
        ],

        "Spells" : 
        [
            {"ID" : "ED4IAssuringTouch"}, 
            {"ID" : "ED4IBestFace"}, 
            {"ID" : "ED4ICloak"}, 
            {"ID" : "ED4IDisaster"},  
            {"ID" : "ED4IEphemeralBolt"}, 
            {"ID" : "ED4IFunWithDoors"}, 
            {"ID" : "ED4ITrueEphemeralBolt"}, 
            {"ID" : "ED4ITrust"}, 
            {"ID" : "ED4IMindFog"}, 
            {"ID" : "ED4IPhantomFlame"}, 
            {"ID" : "ED4IFogofJeer"},
            {"ID" : "ED4IPhantomWarrior"}, 
            {"ID" : "ED4IClarionCall"}, 
            {"ID" : "ED4IUnmask"}, 
            {"ID" : "ED4IIllusion"}, 
            {"ID" : "ED4IPhantomFireball"}, 
            {"ID" : "ED4IIllusoryMissiles"}, 
            {"ID" : "ED4ITrueMissiles"}, 
            {"ID" : "ED4IDancingDragon"}, 
            {"ID" : "ED4ISilentStampede"}
        ],

        "Equipment" : 
        [
            {"ID" : "BloodPebble",                "Name" : "",                 "Count" : "1",    "InUse" : "Yes", "MyForge" : "2"},
            {"ID" : "Quarterstaff",               "Name" : "Staff of office",  "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "ESFPhedresHarlequinMask",    "Name" : "",                 "Count" : "1",    "InUse" : "Yes", "Rank" : "1"},
            {"ID" : "ED4EnhancedMatrixObject",    "Name" : "",                 "Count" : "1",    "InUse" : "Yes", "Rank" : "1"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    Grrhardt : 
    {
        "Basic" : 
        {
            "Name"        : "G'rrhardt",
            "Player"      : "Bodyguard Swordmaster",
            "Gender"      : "?",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "Floranuus",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Tskrang",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  9, "Increases" : 2},
            "Str": {"Buildpoints" :  9, "Increases" : 0},
            "Tou": {"Buildpoints" :  9, "Increases" : 2},
            "Per": {"Buildpoints" : -2, "Increases" : 2},
            "Wil": {"Buildpoints" : -2, "Increases" : 2},
            "Cha": {"Buildpoints" :  2, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Swordmaster",
                "Circle" : "8"
            }
        ],
        "Talents" : 
        [
            {"Order" : "3", "ID" : "ED4AvoidBlow",                  "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Maneuver",                   "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4MeleeWeapons",               "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Taunt",                      "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ThreadWeavingWeaponWeaving", "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4FirstImpression",            "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Riposte",                    "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4HearteningLaugh",            "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4SecondWeapon",               "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Disarm",                     "Rank" : "9", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ResistTaunt",                "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4SecondAttack",               "Rank" : "8", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Discipline"},

            {"Order" : "3", "ID" : "ED4WinningSmile",               "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4WoundBalance",               "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4TigerSpring",                "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4Distract",                   "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4Etiquette",                  "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4Sprint",                     "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4SwiftKick",                  "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4GracefulExit",               "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Swordmaster", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Physician",                                "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4ResistTaunt",                              "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "PaddedCloth",          "Name" : "", "Count" : "1",    "InUse" : "Yes", "PhForge" : "5"},
            {"ID" : "Broadsword",           "Name" : "", "Count" : "2",    "InUse" : "Yes", "Forged" : "5"},
            {"ID" : "Longbow",              "Name" : "", "Count" : "1",    "InUse" : "Yes", "Forged" : "2"},
            {"ID" : "HawkHatchet",          "Name" : "", "Count" : "1",    "InUse" : "Yes", "Forged" : "6"},
            {"ID" : "SpikedMace",           "Name" : "", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "Trispear",             "Name" : "", "Count" : "1",    "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    DalvölgyPeasant : 
    {
        "Basic" : 
        {
            "Name"        : "Dalvölgy Peasant",
            "Player"      : "",
            "Gender"      : "",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "Garlen",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Dwarf",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  5, "Increases" : 0},
            "Str": {"Buildpoints" :  9, "Increases" : 0},
            "Tou": {"Buildpoints" : 12, "Increases" : 0},
            "Per": {"Buildpoints" :  0, "Increases" : 0},
            "Wil": {"Buildpoints" : -1, "Increases" : 0},
            "Cha": {"Buildpoints" :  0, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : [],
        "Talents" :  [],
        "Skills" : 
        [
            {"ID" : "ED4Artisan",         "Name" : "Rune Carving", "Rank" : "2", "Freerank" : "0", "Category" : "Artisan"},
            {"ID" : "ED4Alchemy",                                  "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4AnimalHandling",                           "Rank" : "4", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4AnimalBond",                               "Rank" : "2", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4AnimalTraining",                           "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Conversation",                             "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Craftsman",                                "Rank" : "3", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Disarm",                                   "Rank" : "2", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4EvidenceAnalysis",                         "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4MeleeWeapons",                             "Rank" : "4", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Physician",                                "Rank" : "2", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4SecondAttack",                             "Rank" : "3", "Freerank" : "0", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "ChainMail",  "Name" : "", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "Footmans",   "Name" : "", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "BattleAxe",  "Name" : "", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "Broadsword", "Name" : "", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "SpikedMace", "Name" : "", "Count" : "1",    "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    Rhothomir : 
    {
        "Basic" : 
        {
            "Name"        : "Rhothomir Sylbalar",
            "Player"      : "Lars Volsgaard",
            "Gender"      : "M",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Elf",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 12, "Increases" : 0},
            "Str": {"Buildpoints" :  0, "Increases" : 0},
            "Tou": {"Buildpoints" :  0, "Increases" : 0},
            "Per": {"Buildpoints" :  7, "Increases" : 0},
            "Wil": {"Buildpoints" : -1, "Increases" : 0},
            "Cha": {"Buildpoints" :  7, "Increases" : 0}
        },

        "LegendPoints" : 5600,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Thief",
                "Circle" : "3"
            }
        ],
        "Talents" : 
        [
            {"Order" : "1", "ID" : "ED4DangerSense",               "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Free"},

            {"Order" : "3", "ID" : "ED4Awareness",                 "Rank" : "3", "Freerank" : "2", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4LockPicking",               "Rank" : "3", "Freerank" : "2", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4PickingPockets",            "Rank" : "3", "Freerank" : "1", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4StealthyStride",            "Rank" : "3", "Freerank" : "1", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ThreadWeavingThiefWeaving", "Rank" : "3", "Freerank" : "1", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4MeleeWeapons",              "Rank" : "3", "Freerank" : "1", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Optional"},

            {"Order" : "3", "ID" : "ED4DisarmTrap",                "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4SurpriseStrike",            "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "2", "Type" : "Optional"},

            {"Order" : "3", "ID" : "ED4Haggle",                    "Rank" : "1", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4AvoidBlow",                 "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "3", "Type" : "Optional"}


        ],

        "Skills" : 
        [
            {"ID" : "ED4Artisan", "Name" : "Klejnsmed/låsesmed", "Rank" : "2", "Freerank" : "1", "Category" : "Artisan"},
            {"ID" : "ED4ReadWriteLanguage",                      "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                          "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4Streetwise",                             "Rank" : "3", "Freerank" : "3", "Category" : "General"},
            {"ID" : "ED4GracefulExit",                           "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SloughBlame",                            "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4Forgery",                                "Rank" : "2", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4Disarm",                                 "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4MimicVoice",                             "Rank" : "1", "Freerank" : "1", "Category" : "General"}
        ], 

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "LightQuartzSmall", "Name" : "",                "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "Dagger",           "Name" : "Grusomme Skæbne", "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "ShortSword",       "Name" : "",                "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "PaddedCloth",      "Name" : "'Vault Suit'",    "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "SalveofClosure",   "Name" : "",                "Count" : "3",    "InUse" : "Yes"},
            {"ID" : "NHGrusommeSkæbne", "Name" : "",                "Count" : "1",    "InUse" : "Yes", "Rank" : 2},
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    Chorangi : 
    {
        "Basic" : 
        {
            "Name"        : "Chorangi Treckezh",
            "Player"      : "Theran Expedition Leader",
            "Gender"      : "F",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Ork",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  0, "Increases" : 0},
            "Str": {"Buildpoints" :  0, "Increases" : 0},
            "Tou": {"Buildpoints" :  0, "Increases" : 0},
            "Per": {"Buildpoints" :  9, "Increases" : 4},
            "Wil": {"Buildpoints" : 12, "Increases" : 5},
            "Cha": {"Buildpoints" :  3, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Wizard",
                "Circle" : "6"
            }
        ],
        "Talents" : 
        [
            {"Order" : "3", "ID" : "ED4StandardMatrix",        "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "1", "Type" : "Free"},
            {"Order" : "3", "ID" : "ED4EnhancedMatrix",        "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "1", "Type" : "Free"},
            {"Order" : "3", "ID" : "ED4DispelMagic",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Patterncraft",          "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Research",              "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Spellcasting",          "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ThreadWeavingWizardry", "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ItemHistory",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "1", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4AstralSight",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4StandardMatrix",        "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4TenaciousWeave",        "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ItemHistory",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "3", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4SteelThought",          "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "4", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Conversation",          "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "4", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4AstralInterference",    "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "5", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4EnhancedMatrix",        "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "5", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4Willforce",             "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "6", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Hypnotize",             "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Circle" : "6", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage", "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],

        "Spells" : 
        [
            {"ID" : "ED4WFlight"},
            {"ID" : "ED4WRazorOrb"},
            {"ID" : "ED4WRampage"},
            {"ID" : "ED4WDisplaceSelf"},
            {"ID" : "ED4WSleep"}
        ],

        "Equipment" : 
        [
            {"ID" : "ESFRobesOfNight",                          "Count" : "1",    "InUse" : "Yes", "Rank" : "5"},
            {"ID" : "Quarterstaff", "Name" : "Staff of office", "Count" : "1",    "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    Catera : 
    {
        "Basic" : 
        {
            "Name"        : "Catera Treckezh",
            "Player"      : "Theran Expedition Consort",
            "Gender"      : "M",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Ork",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  9, "Increases" : 0},
            "Str": {"Buildpoints" :  9, "Increases" : 0},
            "Tou": {"Buildpoints" :  9, "Increases" : 0},
            "Per": {"Buildpoints" : -2, "Increases" : 0},
            "Wil": {"Buildpoints" : -2, "Increases" : 0},
            "Cha": {"Buildpoints" :  2, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Beastmaster",
                "Circle" : "6"
            }
        ],
        "Talents" : 
        [
            {"Order" : "1",  "ID" : "ED4AstralSight",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "1", "Type" : "Racial"},
            {"Order" : "2",  "ID" : "ED4AvoidBlow",                 "Rank" : "7", "Freerank" : "1", "DisciplineId" : "ED4Beastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3",  "ID" : "ED4ClawShape",                 "Rank" : "6", "Freerank" : "2", "DisciplineId" : "ED4Beastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "4",  "ID" : "ED4StealthyStride",            "Rank" : "6", "Freerank" : "1", "DisciplineId" : "ED4Beastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "5",  "ID" : "ED4ThreadWeavingBeastWeaving", "Rank" : "6", "Freerank" : "1", "DisciplineId" : "ED4Beastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "6",  "ID" : "ED4UnarmedCombat",             "Rank" : "7", "Freerank" : "2", "DisciplineId" : "ED4Beastmaster", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "7",  "ID" : "ED4CreatureAnalysis",          "Rank" : "3", "Freerank" : "1", "DisciplineId" : "ED4Beastmaster", "Circle" : "1", "Type" : "Optional"},
            {"Order" : "8",  "ID" : "ED4Awareness",                 "Rank" : "7", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "9",  "ID" : "ED4AnimalBond",                "Rank" : "4", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "10", "ID" : "ED4DominateBeast",             "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "11", "ID" : "ED4AnimalTraining",            "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "3", "Type" : "Optional"},
            {"Order" : "12", "ID" : "ED4GreatLeap",                 "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "4", "Type" : "Discipline"},
            {"Order" : "13", "ID" : "ED4EnhanceAnimalCompanion",    "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "4", "Type" : "Optional"},
            {"Order" : "14", "ID" : "ED4BloodShare",                "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "5", "Type" : "Discipline"},
            {"Order" : "15", "ID" : "ED4BattleBellow",              "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "5", "Type" : "Optional"},
            {"Order" : "16", "ID" : "ED4AnimalTalk",                "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "6", "Type" : "Discipline"},
            {"Order" : "17", "ID" : "ED4AnimalCompanionDurability", "Rank" : "3", "Freerank" : "0", "DisciplineId" : "ED4Beastmaster", "Circle" : "6", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage", "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "ESFBlackPanther",             "Count" : "1",    "InUse" : "Yes", "Rank" : "6"},
            {"ID" : "ESFShieldofZanjansSacrifice", "Count" : "1",    "InUse" : "Yes", "Rank" : "6"}
            
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    ExpeditionOrkSoldier : 
    {
        "Basic" : 
        {
            "Name"        : "Ork Expeditionary soldier",
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
        },    

        "Race" : "ED4Ork",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  3, "Increases" : 0},
            "Str": {"Buildpoints" :  9, "Increases" : 0},
            "Tou": {"Buildpoints" :  7, "Increases" : 0},
            "Per": {"Buildpoints" :  3, "Increases" : 0},
            "Wil": {"Buildpoints" :  2, "Increases" : 0},
            "Cha": {"Buildpoints" :  0, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : [],
        "Talents" : [],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage",                                  "Rank" : "1", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4Knowledge",     "Name" : "Military Procedures",  "Rank" : "4", "Freerank" : "0", "Category" : "Knowledge"},
            {"ID" : "ED4AvoidBlow",                                      "Rank" : "5", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Bribery",                                        "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Climbing",                                       "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4MeleeWeapons",                                   "Rank" : "5", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4MissileWeapons",                                 "Rank" : "6", "Freerank" : "0", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "ChainMail",     "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Footmans",      "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Broadsword",    "Count" : "1", "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    ExpeditionHouseguard : 
    {
        "Basic" : 
        {
            "Name"        : "Ork Expeditionary Houseguard",
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
        },    

        "Race" : "ED4Ork",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 12, "Increases" : 0},
            "Str": {"Buildpoints" :  9, "Increases" : 0},
            "Tou": {"Buildpoints" : 15, "Increases" : 0},
            "Per": {"Buildpoints" :  3, "Increases" : 0},
            "Wil": {"Buildpoints" :  2, "Increases" : 0},
            "Cha": {"Buildpoints" :  0, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : [],
        "Talents" : [],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage",                                  "Rank" : "1", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4Knowledge",     "Name" : "Military Procedures",  "Rank" : "4", "Freerank" : "0", "Category" : "Knowledge"},
            {"ID" : "ED4AvoidBlow",                                      "Rank" : "6", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Bribery",                                        "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Climbing",                                       "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4MeleeWeapons",                                   "Rank" : "6", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4MissileWeapons",                                 "Rank" : "6", "Freerank" : "0", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "PlateArmor",    "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Footmans",      "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Broadsword",    "Count" : "1", "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    ExpeditionHumanSoldier : 
    {
        "Basic" : 
        {
            "Name"        : "Human Expeditionary Soldier",
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
        },    

        "Race" : "ED4Human",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  9, "Increases" : 0},
            "Str": {"Buildpoints" :  9, "Increases" : 0},
            "Tou": {"Buildpoints" :  3, "Increases" : 0},
            "Per": {"Buildpoints" :  3, "Increases" : 0},
            "Wil": {"Buildpoints" :  3, "Increases" : 0},
            "Cha": {"Buildpoints" :  3, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : [],
        "Talents" : [],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage",                                  "Rank" : "1", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4Knowledge",     "Name" : "Military Procedures",  "Rank" : "5", "Freerank" : "0", "Category" : "Knowledge"},
            {"ID" : "ED4AvoidBlow",                                      "Rank" : "6", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Bribery",                                        "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Climbing",                                       "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4MeleeWeapons",                                   "Rank" : "6", "Freerank" : "0", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "ChainMail",     "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Footmans",      "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Broadsword",    "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Spear",         "Count" : "1", "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    ExpeditionElfSlaver : 
    {
        "Basic" : 
        {
            "Name"        : "Elf Expeditionary Slaver",
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
        },    

        "Race" : "ED4Elf",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  9, "Increases" : 0},
            "Str": {"Buildpoints" :  9, "Increases" : 0},
            "Tou": {"Buildpoints" :  3, "Increases" : 0},
            "Per": {"Buildpoints" :  3, "Increases" : 0},
            "Wil": {"Buildpoints" :  3, "Increases" : 0},
            "Cha": {"Buildpoints" :  3, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : [],
        "Talents" : [],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage",  "Rank" : "1", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4MeleeWeapons",   "Rank" : "4", "Freerank" : "0", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "HardenedLeather", "Count" : "1", "InUse" : "Yes"},
            {"ID" : "PoleArm",         "Count" : "1", "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },

    ExpeditionOrkSlaver : 
    {
        "Basic" : 
        {
            "Name"        : "Ork Expeditionary Slaver",
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
        },    

        "Race" : "ED4Ork",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  9, "Increases" : 0},
            "Str": {"Buildpoints" :  5, "Increases" : 0},
            "Tou": {"Buildpoints" :  5, "Increases" : 0},
            "Per": {"Buildpoints" :  3, "Increases" : 0},
            "Wil": {"Buildpoints" :  3, "Increases" : 0},
            "Cha": {"Buildpoints" :  3, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : [],
        "Talents" : [],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage",   "Rank" : "1", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4MeleeWeapons",    "Rank" : "4", "Freerank" : "0", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "HideArmor",     "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Broadsword",    "Count" : "1", "InUse" : "Yes"},
            {"ID" : "PoleArm",       "Count" : "1", "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true"}
    },


    Cedric : 
    {
        "Basic" : 
        {
            "Name"        : "Cedric Wissenbottom",
            "Player"      : "Throal Royal Griffon Airforce",
            "Gender"      : "M",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Dwarf",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  7, "Increases" : 3},
            "Str": {"Buildpoints" :  9, "Increases" : 0},
            "Tou": {"Buildpoints" :  7, "Increases" : 2},
            "Per": {"Buildpoints" :  3, "Increases" : 3},
            "Wil": {"Buildpoints" :  1, "Increases" : 0},
            "Cha": {"Buildpoints" :  0, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Warrior",
                "Circle" : "6"
            }
        ],
        "Talents" : 
        [
            {"Order" : "2",  "ID" : "ED4AvoidBlow",               "Rank" : "6", "Freerank" : "1", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3",  "ID" : "ED4MeleeWeapons",            "Rank" : "6", "Freerank" : "2", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "4",  "ID" : "ED4ThreadWeavingWarWeaving", "Rank" : "6", "Freerank" : "1", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "5",  "ID" : "ED4TigerSpring",             "Rank" : "6", "Freerank" : "1", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "6",  "ID" : "ED4WoodSkin",                "Rank" : "6", "Freerank" : "2", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "7",  "ID" : "ED4Tactics",                 "Rank" : "6", "Freerank" : "1", "DisciplineId" : "ED4Warrior", "Circle" : "1", "Type" : "Optional"},
            {"Order" : "8",  "ID" : "ED4WoundBalance",            "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "9",  "ID" : "ED4DangerSense",             "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "10", "ID" : "ED4AirDance",                "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "11", "ID" : "ED4Fireblood",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "3", "Type" : "Optional"},
            {"Order" : "12", "ID" : "ED4WaterfallSlam",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "4", "Type" : "Discipline"},
            {"Order" : "13", "ID" : "ED4MissileWeapons",          "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "4", "Type" : "Optional"},
            {"Order" : "14", "ID" : "ED4EarthSkin",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "5", "Type" : "Discipline"},
            {"Order" : "15", "ID" : "ED4ShieldBash",              "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "5", "Type" : "Optional"},
            {"Order" : "14", "ID" : "ED4TemperFlesh",             "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "5", "Type" : "Discipline"},
            {"Order" : "15", "ID" : "ED4Leadership",              "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "5", "Type" : "Optional"},

        ],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage",    "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4AnimalHandling",   "Rank" : "2", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4Navigation",       "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",    "Rank" : "2", "Freerank" : "2", "Category" : "General"},
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "HardenedLeather",   "Count" : "1",    "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true"}
    },

    Lloyd : 
    {
        "Basic" : 
        {
            "Name"        : "Lloyd Threadflow",
            "Player"      : "Throal Royal Griffon Airforce",
            "Gender"      : "M",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Dwarf",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  0, "Increases" : 0},
            "Str": {"Buildpoints" :  0, "Increases" : 0},
            "Tou": {"Buildpoints" :  3, "Increases" : 0},
            "Per": {"Buildpoints" :  9, "Increases" : 3},
            "Wil": {"Buildpoints" :  7, "Increases" : 3},
            "Cha": {"Buildpoints" :  5, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Wizard",
                "Circle" : "5"
            }
        ],
        "Talents" : 
        [
            {"Order" : "3", "ID" : "ED4StandardMatrix",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Free"},
            {"Order" : "3", "ID" : "ED4EnhancedMatrix",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Free"},
            {"Order" : "3", "ID" : "ED4DispelMagic",            "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Spellcasting",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ThreadWeavingWizardry",  "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4AstralSight",            "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4TenaciousWeave",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4SteelThought",           "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4StandardMatrix",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Optional"},
            {"Order" : "3", "ID" : "Empty",                     "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Optional"},
            {"Order" : "3", "ID" : "Empty",                     "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Optional"},
            {"Order" : "3", "ID" : "Empty",                     "Rank" : "0", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4EnhancedMatrix",         "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Wizard", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage",    "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4AnimalHandling",   "Rank" : "2", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4Navigation",       "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",    "Rank" : "2", "Freerank" : "2", "Category" : "General"},
        ],

        "Spells" : 
        [
            {"ID" : "ED4WFlight"},
            {"ID" : "ED4WRazorOrb"},
            {"ID" : "ED4WRampage"},
            {"ID" : "ED4WDisplaceSelf"},
            {"ID" : "ED4WSleep"}
        ],

        "Equipment" : 
        [
            {"ID" : "HardenedLeather",   "Count" : "1",    "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true"}
    },

    HumanVillager : 
    {
        "Basic" : 
        {
            "Name"        : "Human Villager",
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
        },    

        "Race" : "ED4Human",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" :  5, "Increases" : 0},
            "Str": {"Buildpoints" :  7, "Increases" : 0},
            "Tou": {"Buildpoints" :  7, "Increases" : 0},
            "Per": {"Buildpoints" :  0, "Increases" : 0},
            "Wil": {"Buildpoints" :  3, "Increases" : 0},
            "Cha": {"Buildpoints" :  3, "Increases" : 0}
        },

        "LegendPoints" : 0,

        "Disciplines" : [],
        "Talents" : [],

        "Skills" : 
        [
            {"ID" : "ED4SpeakLanguage",                               "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4Knowledge",     "Name" : "Craft",             "Rank" : "3", "Freerank" : "0", "Category" : "Knowledge"},
            {"ID" : "ED4Knowledge",     "Name" : "Animal Husbandry",  "Rank" : "4", "Freerank" : "0", "Category" : "Knowledge"},
            {"ID" : "ED4AvoidBlow",                                   "Rank" : "2", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Bribery",                                     "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4Climbing",                                    "Rank" : "1", "Freerank" : "0", "Category" : "General"},
            {"ID" : "ED4MeleeWeapons",                                "Rank" : "2", "Freerank" : "0", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "Broadsword",    "Count" : "1", "InUse" : "Yes"},
            {"ID" : "HandAxe",       "Count" : "1", "InUse" : "Yes"},
            {"ID" : "PoleArm",       "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Spear",         "Count" : "1", "InUse" : "Yes"}
        ],
        "Options" : {"FirstWoundFree" : "true"}
    },

    Alanda : 
    {
        "Basic" : 
        {
            "Name"        : "Alanda af Geraldiel",
            "Player"      : "NPC",
            "Gender"      : "F",
            "Age"         : "72",
            "Height"      : "182",
            "Weight"      : "60",
            "Hair"        : "Blonde",
            "Skin"        : "Ebony",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Elf",

        "attributePoints" : 30,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 15, "Increases" : 3},
            "Str": {"Buildpoints" :  9, "Increases" : 1},
            "Tou": {"Buildpoints" :  7, "Increases" : 0},
            "Per": {"Buildpoints" :  2, "Increases" : 0},
            "Wil": {"Buildpoints" : -2, "Increases" : 0},
            "Cha": {"Buildpoints" :  9, "Increases" : 2}
        },

        "LegendPoints" : 60000,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Swordmaster",
                "Circle" : "5"
            }
        ],
        "Talents" : 
        [
            {"Order" : "3", "ID" : "ED4AvoidBlow",                  "Rank" : "5", "Freerank" : "2", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Maneuver",                   "Rank" : "5", "Freerank" : "2", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4MeleeWeapons",               "Rank" : "6", "Freerank" : "1", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Taunt",                      "Rank" : "5", "Freerank" : "1", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4ThreadWeavingWeaponWeaving", "Rank" : "5", "Freerank" : "1", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4FirstImpression",            "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4Riposte",                    "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4HearteningLaugh",            "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "4", "Type" : "Discipline"},
            {"Order" : "3", "ID" : "ED4SecondWeapon",               "Rank" : "6", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "5", "Type" : "Discipline"},

            {"Order" : "3", "ID" : "ED4DangerSense",                "Rank" : "5", "Freerank" : "1", "DisciplineId" : "ED4Thief", "Circle" : "1", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4WinningSmile",               "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4WoundBalance",               "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "3", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4SpeakLanguage",              "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "4", "Type" : "Optional"},
            {"Order" : "3", "ID" : "ED4GlidingStride",              "Rank" : "5", "Freerank" : "0", "DisciplineId" : "ED4Thief", "Circle" : "5", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Artisan",      "Name" : "Hair twirling", "Rank" : "2", "Freerank" : "1", "Category" : "Artisan"},
            {"ID" : "ED4ReadWriteLanguage",                      "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                          "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4Streetwise",                             "Rank" : "3", "Freerank" : "3", "Category" : "General"},
            {"ID" : "ED4SloughBlame",                            "Rank" : "1", "Freerank" : "1", "Category" : "General"}
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "ESFLavenderDragon",   "Count" : "1",    "InUse" : "Yes", "Rank" : "3", "Forged" : "4"},
            {"ID" : "ESFBlackDragonArmor", "Count" : "1",    "InUse" : "Yes", "Rank" : "3", "MyForge" : "3"},
            {"ID" : "ESFShieldofFlame",    "Count" : "1",    "InUse" : "Yes", "Rank" : "3"},
            {"ID" : "LightQuartzSmall",    "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "DesperateBlow",       "Count" : "2",    "InUse" : "Yes"},
            {"ID" : "HealingPotion",       "Count" : "1",    "InUse" : "Yes"},
            {"ID" : "SalveofClosure",      "Count" : "3",    "InUse" : "Yes"},
            {"ID" : "LastChanceSalve",     "Count" : "1",    "InUse" : "Yes"}
        ],
        "Options" : {"Attributepoints" : "40","FirstWoundFree" : "true"}
    },

    Hubert : 
    {
        "Basic" : 
        {
            "Name"        : "Hubert the Complete Warrior",
            "Player"      : "NPC",
            "Gender"      : "",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "Crazy af",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : ""
        },    

        "Race" : "ED4Obsidiman",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : 15, "Increases" : 3},
            "Str": {"Buildpoints" : 15, "Increases" : 3},
            "Tou": {"Buildpoints" :  0, "Increases" : 3},
            "Per": {"Buildpoints" : -1, "Increases" : 3},
            "Wil": {"Buildpoints" : -2, "Increases" : 3},
            "Cha": {"Buildpoints" : -2, "Increases" : 3}
        },

        "LegendPoints" : 20000000,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Warrior",
                "Circle" : "15",
                "OptionalTalentsChosen" : 
                [
                    {"Circle" : "1",  "ID" : "ED4ShieldBash"},
                    {"Circle" : "2",  "ID" : "ED4AcrobaticDefense"},
                    {"Circle" : "3",  "ID" : "ED4Distract"},
                    {"Circle" : "4",  "ID" : "ED4Tactics"},
                    {"Circle" : "5",  "ID" : "ED4SecondWeapon"},
                    {"Circle" : "6",  "ID" : "ED4SpotArmorFlaw"},
                    {"Circle" : "7",  "ID" : "ED4SwiftKick"},
                    {"Circle" : "8",  "ID" : "ED4Leadership"},
                    {"Circle" : "9",  "ID" : "ED4CriticalHit"},
                    {"Circle" : "10", "ID" : "ED4DefensivePosture"},
                    {"Circle" : "11", "ID" : "ED4VitalStrike"},
                    {"Circle" : "12", "ID" : "ED4StormShield"},
                    {"Circle" : "13", "ID" : "ED4SecondChance"},
                    {"Circle" : "14", "ID" : "ED4SpiritStrike"},
                    {"Circle" : "15", "ID" : "ED4ViciousWound"}
                ]
            },
            {
                "Order" : "2",
                "ID" : "ED4Swordmaster",
                "Circle" : "3",
                "StartedAt" : "5",
                "OptionalTalentsChosen" :
                [
                    {"Circle" : "1",  "ID" : "Empty"},
                    {"Circle" : "2",  "ID" : "Empty"},
                    {"Circle" : "3",  "ID" : "Empty"}
                ]
            }
        ],
        "Talents" : 
        [
            {"Order" : "1",  "ID" : "ED4MeleeWeapons",              "Rank" : "15", "Freerank" : "3", "DisciplineId" : "ED4Warrior", "Circle" : "1",  "Type" : "Discipline"},
            {"Order" : "2",  "ID" : "ED4ThreadWeavingWarWeaving",   "Rank" : "15", "Freerank" : "3", "DisciplineId" : "ED4Warrior", "Circle" : "1",  "Type" : "Discipline"},
            {"Order" : "3",  "ID" : "ED4TigerSpring",               "Rank" : "15", "Freerank" : "2", "DisciplineId" : "ED4Warrior", "Circle" : "1",  "Type" : "Discipline"},
            {"Order" : "4",  "ID" : "ED4WoodSkin",                  "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1",  "Type" : "Discipline"},
            {"Order" : "5",  "ID" : "ED4AvoidBlow",                 "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1",  "Type" : "Discipline"},
            {"Order" : "6",  "ID" : "ED4ShieldBash",                "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "1",  "Type" : "Optional"},
            {"Order" : "7",  "ID" : "ED4WoundBalance",              "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "2",  "Type" : "Discipline"},
            {"Order" : "8",  "ID" : "ED4AcrobaticDefense",          "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "2",  "Type" : "Optional"},
            {"Order" : "9",  "ID" : "ED4AirDance",                  "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "3",  "Type" : "Discipline"},
            {"Order" : "10", "ID" : "ED4Distract",                  "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "3",  "Type" : "Optional"},
            {"Order" : "11", "ID" : "ED4WaterfallSlam",             "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "4",  "Type" : "Discipline"},
            {"Order" : "12", "ID" : "ED4Tactics",                   "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "4",  "Type" : "Optional"},
            {"Order" : "13", "ID" : "ED4EarthSkin",                 "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "5",  "Type" : "Discipline"},
            {"Order" : "14", "ID" : "ED4SecondWeapon",              "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "5",  "Type" : "Optional"},
            {"Order" : "15", "ID" : "ED4TemperFlesh",               "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "6",  "Type" : "Discipline"},
            {"Order" : "16", "ID" : "ED4SpotArmorFlaw",             "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "6",  "Type" : "Optional"},
            {"Order" : "17", "ID" : "ED4CrushingBlow",              "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "7",  "Type" : "Discipline"},
            {"Order" : "18", "ID" : "ED4SwiftKick",                 "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "7",  "Type" : "Optional"},
            {"Order" : "19", "ID" : "ED4SecondAttack",              "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "8",  "Type" : "Discipline"},
            {"Order" : "20", "ID" : "ED4Leadership",                "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "8",  "Type" : "Optional"},
            {"Order" : "21", "ID" : "ED4RelentlessRecovery",        "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "9",  "Type" : "Discipline"},
            {"Order" : "22", "ID" : "ED4CriticalHit",               "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "9",  "Type" : "Optional"},
            {"Order" : "23", "ID" : "ED4UnflinchingFortitude",      "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "10", "Type" : "Discipline"},
            {"Order" : "24", "ID" : "ED4DefensivePosture",          "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "10", "Type" : "Optional"},
            {"Order" : "25", "ID" : "ED4ChillingStrike",            "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "11", "Type" : "Discipline"},
            {"Order" : "26", "ID" : "ED4VitalStrike",               "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "11", "Type" : "Optional"},
            {"Order" : "27", "ID" : "ED4VineArmor",                 "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "12", "Type" : "Discipline"},
            {"Order" : "28", "ID" : "ED4StormShield",               "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "12", "Type" : "Optional"},
            {"Order" : "29", "ID" : "ED4AuraArmor",                 "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "13", "Type" : "Discipline"},
            {"Order" : "30", "ID" : "ED4SecondChance",              "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "13", "Type" : "Optional"},
            {"Order" : "31", "ID" : "ED4StoneSkin",                 "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "14", "Type" : "Discipline"},
            {"Order" : "32", "ID" : "ED4SpiritStrike",              "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "14", "Type" : "Optional"},
            {"Order" : "33", "ID" : "ED4MultiStrike",               "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "15", "Type" : "Discipline"},
            {"Order" : "34", "ID" : "ED4ViciousWound",              "Rank" : "15", "Freerank" : "0", "DisciplineId" : "ED4Warrior", "Circle" : "15", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Artisan",           "Name" : "Pet Rocks",     "Rank" : "3", "Freerank" : "2", "Category" : "Artisan"},
            {"ID" : "ED4Knowledge",         "Name" : "Rock Wise",     "Rank" : "2", "Freerank" : "2", "Category" : "Knowledge"},
            {"ID" : "ED4ThrowingWeapons",                             "Rank" : "3", "Freerank" : "2", "Category" : "General"},
            {"ID" : "NH4PowerLifting",                                "Rank" : "3", "Freerank" : "2", "Category" : "General"},
            {"ID" : "ED4ReadWriteLanguage",                           "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                               "Rank" : "2", "Freerank" : "2", "Category" : "General"},
        ],

        "Spells" : [],

        "Equipment" : 
        [
            {"ID" : "BattleAxe",        "Count" : "1"},
            {"ID" : "Broadsword",       "Count" : "1"},
            {"ID" : "Club",             "Count" : "1"},
            {"ID" : "Dagger",           "Count" : "1"},
            {"ID" : "DwarfSword",       "Count" : "1"},
            {"ID" : "Flail",            "Count" : "1"},
            {"ID" : "HandAxe",          "Count" : "1"},
            {"ID" : "Knife",            "Count" : "1"},
            {"ID" : "Lance",            "Count" : "1"},
            {"ID" : "LongSpear",        "Count" : "1"},
            {"ID" : "Mace",             "Count" : "1"},
            {"ID" : "PoleArm",          "Count" : "1"},
            {"ID" : "PoleAxe",          "Count" : "1"},
            {"ID" : "Quarterstaff",     "Count" : "1"},
            {"ID" : "Sap",              "Count" : "1"},
            {"ID" : "ShortSword",       "Count" : "1"},
            {"ID" : "ScythanAxe",       "Count" : "1"},
            {"ID" : "Spear",            "Count" : "1"},
            {"ID" : "SpikedMace",       "Count" : "1"},
            {"ID" : "Trispear",         "Count" : "1"},
            {"ID" : "TrollAxe",         "Count" : "1"},
            {"ID" : "TrollSword",       "Count" : "1", "InUse" : "Yes"},
            {"ID" : "TwoHandedSword",   "Count" : "1"},
            {"ID" : "Warhammer",        "Count" : "1"},
            {"ID" : "Whip",             "Count" : "1"},
            {"ID" : "WindlingPoleArm",  "Count" : "1"},
            {"ID" : "WindlingSpear",    "Count" : "1"},
            {"ID" : "WindlingSword",    "Count" : "1"},
            {"ID" : "Blowgun",          "Count" : "1"},
            {"ID" : "ElvenWarbow",      "Count" : "1"},
            {"ID" : "LightCrossbow",    "Count" : "1"},
            {"ID" : "Longbow",          "Count" : "1"},
            {"ID" : "MediumCrossbow",   "Count" : "1"},
            {"ID" : "Shortbow",         "Count" : "1"},
            {"ID" : "Sling",            "Count" : "1"},
            {"ID" : "TrollSling",       "Count" : "1"},
            {"ID" : "WindlingBows",     "Count" : "1"},
            {"ID" : "blowgunneedles",   "Count" : "1"},
            {"ID" : "WarbowArrows",     "Count" : "1"},
            {"ID" : "LightBolts",       "Count" : "1"},
            {"ID" : "LongbowArrows",    "Count" : "1"},
            {"ID" : "MediumBolts",      "Count" : "1"},
            {"ID" : "ShortbowArrows",   "Count" : "1"},
            {"ID" : "WindlingArrows",   "Count" : "1"},
            {"ID" : "Bola",             "Count" : "1"},
            {"ID" : "Dagger",           "Count" : "1"},
            {"ID" : "Dart",             "Count" : "1"},
            {"ID" : "FlightDagger",     "Count" : "1"},
            {"ID" : "HawkHatchet",      "Count" : "1"},
            {"ID" : "Knife",            "Count" : "1"},
            {"ID" : "Net",              "Count" : "1"},
            {"ID" : "ThrowingSpear",    "Count" : "1"},
            {"ID" : "ThrowingAxe",      "Count" : "1"},
            {"ID" : "ThrowingDagger",   "Count" : "1"},
            {"ID" : "WyvernSkin",                                         "Count" : "1", "InUse" : "Yes"},
            {"ID" : "Body",                                               "Count" : "1", "InUse" : "Yes"},
            {"ID" : "HorrorFend",                                         "Count" : "1", "InUse" : "Yes"},
            {"ID" : "LightQuartzSmall",                                   "Count" : "1"},
            {"ID" : "SalveofClosure",                                     "Count" : "1"},
            {"ID" : "misc",             "Name" : "Pet Rock 'Nightshade'", "Count" : "1"},
            {"ID" : "AdventuringKit",                                     "Count" : "1"}
        ],
        "Options" : {"FirstWoundFree" : "true"}
    },

    Nux : 
    {
        "Basic" :
        {
            "Name": "Nux Deluxe",
            "Player": "NPC",
            "Gender": "M",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "Sparkly",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },

        "Race" : "ED4Windling",
        "attributePoints" : 25,
        "Attributes" : 
        {
            "Dex": {"Buildpoints": "7", "Increases": 0},
            "Str": {"Buildpoints": "0", "Increases": 0},
            "Tou": {"Buildpoints": 0,   "Increases": 0},
            "Per": {"Buildpoints": "7", "Increases": 0},
            "Wil": {"Buildpoints": "-1","Increases": 0},
            "Cha": {"Buildpoints": "12","Increases": 0}
        },

        "LegendPoints" : 20000,
        "Disciplines" : 
        [
            {
                "Order": "1",
                "ID": "ED4Troubadour",
                "Circle": "4",
                "OptionalTalentsChosen": 
                [
                    {
                        "Circle": "1",
                        "ID": "ED4AvoidBlow"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4MeleeWeapons"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4Taunt"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4Haggle"
                    }       
                ]
            }
        ],
        "Talents" :
        [
            {
                "Order": "0",
                "ID": "ED4AstralSight",
                "Rank": "5",
                "Freerank": "0",
                "Source": "Windling",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Racial",
                "TalentPointsUseable": "True",
                "UID": "00f9415c-5968-4f6a-b35c-067b0960c848",
                "Step": 12,
                "Cost": 1900
            },
            {
                "Order": "1",
                "ID": "ED4Entertainer",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "New free talent",
                "UID": "07e41390-157e-401f-b9e7-36a4e3776f75",
                "Step": 12,
                "Cost": 0
            },
            {
                "Order": "2",
                "ID": "ED4EmotionSong",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "4ad2ce39-7ae0-4306-a4b0-5325f6675ca8",
                "Step": 13,
                "Cost": 1300
            },
            {
                "Order": "3",
                "ID": "ED4FirstImpression",
                "Rank": 6,
                "Freerank": 3,
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "66911a0e-0804-47f5-8e7e-0587745e984b",
                "Step": 14,
                "Cost": 2600
            },
            {
                "Order": "4",
                "ID": "ED4HearteningLaugh",
                "Rank": "4",
                "Freerank": "2",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "52d979b4-548d-418b-84fe-660d016775ae",
                "Step": 12,
                "Cost": 1100
            },
            {
                "Order": "5",
                "ID": "ED4ItemHistory",
                "Rank": "4",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "85e5b320-72cf-47cd-9d28-f0777f909fc6",
                "Step": 11,
                "Cost": 1100
            },
            {
                "Order": "6",
                "ID": "ED4ThreadWeavingStoryWeaving",
                "Rank": "4",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "af234240-ba18-4457-8f3a-319e13c5bc10",
                "Step": 11,
                "Cost": 1100
            },
            {
                "Order": "7",
                "ID": "ED4AvoidBlow",
                "Rank": 4,
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "e6f820e3-c43d-41e5-8532-eec473d1bbda",
                "Step": 11,
                "Cost": 1100
            },
            {
                "Order": "8",
                "ID": "ED4Etiquette",
                "Rank": "4",
                "Freerank": "0",
                "Source": "Troubadour 2",
                "DisciplineId": "ED4Troubadour",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "ec5a8d3e-12db-4b19-adf1-da69ea892a45",
                "Step": 12,
                "Cost": 1100
            },
            {
                "Order": "9",
                "ID": "ED4MeleeWeapons",
                "Rank": 4,
                "Freerank": 0,
                "Source": "Troubadour 2",
                "DisciplineId": "ED4Troubadour",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "000e5bab-8c8f-4d43-9d1d-02fbd5bd6c02",
                "Step": 11,
                "Cost": 1100
            },
            {
                "Order": "10",
                "ID": "ED4EmpathicSense",
                "Rank": "6",
                "Freerank": "0",
                "Source": "Troubadour 3",
                "DisciplineId": "ED4Troubadour",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "9b82a390-ca68-4617-bbd7-773413ddc3fe",
                "Step": 14,
                "Cost": 3200
            },
            {
                "Order": "11",
                "ID": "ED4Taunt",
                "Rank": 2,
                "Freerank": 0,
                "Source": "Troubadour 3",
                "DisciplineId": "ED4Troubadour",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "000e5bab-8c8f-4d43-9d1d-02fbd5bd6c02",
                "Step": 10,
                "Cost": 300
            },
            {
                "Order": "12",
                "ID": "ED4Research",
                "Rank": "4",
                "Freerank": "0",
                "Source": "Troubadour 4",
                "DisciplineId": "ED4Troubadour",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "6755ce19-5d36-43df-9874-5145de9a7d7e",
                "Step": 11,
                "Cost": 1100
            },
            {
                "Order": "13",
                "ID": "ED4Haggle",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Troubadour 4",
                "DisciplineId": "ED4Troubadour",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "000e5bab-8c8f-4d43-9d1d-02fbd5bd6c02",
                "Step": 13,
                "Cost": 1900
            }
        ],
        "Knacks" : [{"ID" : "ED4HaggleEvaluate"}],
        "Skills" : 
        [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 9
            },
            {
                "ID": "ED4Awareness",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "3",
                "Freerank": "3",
                "Step": 10,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Area: Throal Mountains",
                "Rank": "1",
                "Freerank": "1",
                "Step": 8,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Legends & Heroes",
                "Rank": "2",
                "Freerank": "2",
                "Step": 9,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Old Wives Tales",
                "Rank": "2",
                "Freerank": "2",
                "Step": 9,
                "Cost": 0
            },
            {
                "ID": "ED4EvidenceAnalysis",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "2",
                "Freerank": "1",
                "Step": 9,
                "Cost": 500
            },
            {
                "ID": "ED4Artisan",
                "Category": "Artisan",
                "Name": "Drawing",
                "Rank": "2",
                "Freerank": "2",
                "Step": 10,
                "Cost": 0
            },
            {
                "ID": "ED4Flirting",
                "Category": "General",
                "Rank": "2",
                "Freerank": "0",
                "Step": 10,
                "Cost": 500
            }
        ],
        "Spells" : [],
        "Equipment" : 
        [
            {
                "ID": "LightQuartzSmall",
                "Count": "1"
            },
            {
                "ID": "SalveofClosure",
                "Count": "1"
            },
            {
                "ID": "AdventuringKit",
                "Count": "1"
            }
        ],
        "Options" : {"FirstWoundFree" : "true"}
    },

    Kaplonker : 
    {
        "Basic" : 
        {
            "Name"        : "Kaplonker the Complete Magicuser",
            "Player"      : "Test",
            "Gender"      : "-",
            "Age"         : "",
            "Height"      : "",
            "Weight"      : "",
            "Hair"        : "",
            "Skin"        : "",
            "Eyes"        : "",
            "Passion"     : "",
            "Traits"      : "",
            "Description" : "Pumped up, falling apart, burdened, in pain and unhappy"

        },    

        "Race" : "ED4Obsidiman",

        "attributePoints" : 25,

        "Attributes" : 
        {
            "Dex": {"Buildpoints" : -1, "Increases" : 0},
            "Str": {"Buildpoints" :  0, "Increases" : 0},
            "Tou": {"Buildpoints" : 15, "Increases" : 0},
            "Per": {"Buildpoints" : -2, "Increases" : 0},
            "Wil": {"Buildpoints" :  1, "Increases" : 0},
            "Cha": {"Buildpoints" :  9, "Increases" : 0}
        },

        "LegendPoints" : 5600,

        "Disciplines" : 
        [
            {
                "Order" : "1",
                "ID" : "ED4Nethermancer",
                "Circle" : "3",
                "OptionalTalentsChosen" : 
                [
                    {"Circle" : "1", "ID" : "ED4StandardMatrix"},
                    {"Circle" : "2", "ID" : "ED4Awareness"},
                    {"Circle" : "3", "ID" : "ED4StealthyStride"}
                ]
            }
        ],
        "Talents" : 
        [
            {"Order" : "1",  "ID" : "ED4StandardMatrix",           "Rank" : "-", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Free", "FreeTalent" : "0", "Spell" : "ED4NShadowMeld"},
            {"Order" : "2",  "ID" : "ED4StandardMatrix",           "Rank" : "-", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Free", "FreeTalent" : "1", "Spell" : "ED4NChillingCircle"},
            {"Order" : "3",  "ID" : "ED4AstralSight",              "Rank" : "3", "Freerank" : "1", "Source" : "Discipline, Racial", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "4",  "ID" : "ED4Frighten",                 "Rank" : "3", "Freerank" : "1", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "5",  "ID" : "ED4Patterncraft",             "Rank" : "3", "Freerank" : "1", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "6",  "ID" : "ED4Spellcasting",             "Rank" : "3", "Freerank" : "2", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "7",  "ID" : "ED4ThreadWeavingNethermancy", "Rank" : "3", "Freerank" : "2", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Discipline"},
            {"Order" : "8",  "ID" : "ED4StandardMatrix",           "Rank" : "2", "Freerank" : "1", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "1", "Type" : "Optional",    "Spell" : "ED4NSpiritDart"},
            {"Order" : "9",  "ID" : "ED4SteelThought",             "Rank" : "3", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "2", "Type" : "Discipline"},
            {"Order" : "10", "ID" : "ED4Awareness",                "Rank" : "2", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "2", "Type" : "Optional"},
            {"Order" : "11", "ID" : "ED4SpiritTalk",               "Rank" : "2", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "3", "Type" : "Discipline"},
            {"Order" : "12", "ID" : "ED4StealthyStride",           "Rank" : "2", "Freerank" : "0", "Source" : "Discipline", "DisciplineId" : "ED4Nethermancer", "Circle" : "3", "Type" : "Optional"}
        ],

        "Skills" : 
        [
            {"ID" : "ED4Knowledge",         "Name" : "Spirit Wise",         "Rank" : "1", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Knowledge",         "Name" : "Plant Wise",          "Rank" : "1", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Knowledge",         "Name" : "Horror Lore",         "Rank" : "1", "Freerank" : "1", "Category" : "Knowledge"},
            {"ID" : "ED4Artisan",           "Name" : "Drawing",             "Rank" : "1", "Freerank" : "1", "Category" : "Artisan"},
            {"ID" : "ED4Artisan",           "Name" : "Cat's cradle",        "Rank" : "1", "Freerank" : "0", "Category" : "Artisan"},
            {"ID" : "ED4FirstImpression",                                   "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4Alchemy",                                           "Rank" : "3", "Freerank" : "3", "Category" : "General"},
            {"ID" : "ED4ReadWriteLanguage",                                 "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",                                     "Rank" : "2", "Freerank" : "2", "Category" : "General"},
            {"ID" : "Empty"}
        ],

        "Spells" : 
        [
            {"ID" : "ED4NAstralSpear"},
            {"ID" : "ED4NBoneCircle"},
            {"ID" : "ED4NDarkMessenger"},
            {"ID" : "ED4NEtherealDarkness"},
            {"ID" : "ED4NLifeCircleofOne"},
            {"ID" : "ED4NShadowMeld"},
            {"ID" : "ED4NSoulArmor"},
            {"ID" : "ED4NSpiritDart"},
            {"ID" : "ED4NAspectoftheFogGhost"},
            {"ID" : "ED4NShadowsWhisper"},
            {"ID" : "ED4NChillingCircle"},
            {"ID" : "ED4NFogofFear"}
        ],

        "Equipment" : 
        [
            {"ID" : "PaddedCloth",         "Count" : "1", "InUse" : "Yes"},
            {"ID" : "AlchemistsKit",       "Count" : "1", "InUse" : "Yes"},
            {"ID" : "TravelersGarb",       "Count" : "1", "InUse" : "Yes"},
            {"ID" : "AdventuringKit",      "Count" : "1", "InUse" : "Yes"},
            {"ID" : "SalveofClosure",      "Count" : "2", "InUse" : "Yes"},
            {"ID" : "BoosterPotion",       "Count" : "0", "InUse" : "Yes"},
            {"ID" : "NHPsychopompSkarabæ", "Count" : "1", "InUse" : "Yes", "Rank" : "2"},
            {"ID" : "DeathCheat",          "Count" : "1", "InUse" : "Yes"}
        ],

        "Magic" : 
        [
            {"ID" : "ED4MinorPatternItem",            "Target" : "A small lump"},
            {"ID" : "ED4MajorPatternItem",            "Target" : "Of green putty"},
            {"ID" : "ED4CorePatternItem",             "Target" : "I found in my left armpit"},
            {"ID" : "ED4GroupTruePattern",            "Target" : "The Down and Out"},
            {"ID" : "ED4BloodPeace",                  "Target" : "King Varulus III"},
            {"ID" : "ED4BloodPeaceKept",              "Target" : "War itself"},
            {"ID" : "ED4BloodPeaceBroken",            "Target" : "Dis"},
            {"ID" : "ED4BloodPeaceBrokenHealed",      "Target" : "Vestrival"},
            {"ID" : "ED4BloodPromise",                "Target" : "Murder bloody Murder"},
            {"ID" : "ED4BloodPromiseViolated",        "Target" : "Garlen Himself"},
            {"ID" : "ED4BloodPromiseViolatedHealed",  "Target" : "MogMog"},
            {"ID" : "ED4BloodPromiseFulfilled",       "Target" : "Aulë of the Hundred Eyes"},
            {"ID" : "ED4BloodSworn",                  "Target" : "Lovely Diana"},
            {"ID" : "ED4BloodSwornViolated",          "Target" : "That Bitch Martha"},
            {"ID" : "ED4BloodSwornViolatedhealed",    "Target" : "Don wanna talk about it"}
        ],
        "Options" : {"FirstWoundFree" : "true"}
    },
    Wombat: 
    {
        "Basic": {
            "Name": "Wombat the Hurting",
            "Player": "",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race" : "ED4Obsidiman",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "9",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": "1",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "15",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": 0,
                "Increases": 0
            }
        },
        "LegendPoints": 0,
        "Disciplines": [
            {
                "ID": "ED4Warrior",
                "Circle": "10",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "2",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "3",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "4",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "5",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "6",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "7",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "8",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "9",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "10",
                        "ID": "Empty"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4AvoidBlow",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "e3e9b88b-137e-406b-bf2d-826420141f8f",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "1",
                "ID": "ED4MeleeWeapons",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "7a378b0e-9a15-4c1d-96f1-fc0ff85be793",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "2",
                "ID": "ED4ThreadWeavingWarWeaving",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "75f757c1-5b82-45ef-854c-85fb846e1996",
                "Cost": 0,
                "Step": 4
            },
            {
                "Order": "3",
                "ID": "ED4TigerSpring",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "3117a291-b7a4-4866-9e0d-477610af63dc",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "4",
                "ID": "ED4WoodSkin",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "7aa5e70c-9fbf-4e98-b77c-c0f1a07d9f49",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "5",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Optional",
                "TalentPointsUseable": "True",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "6",
                "ID": "ED4WoundBalance",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 2",
                "DisciplineId": "ED4Warrior",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "c87b0968-5b76-4765-be7e-ceed71926d48",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "7",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 2",
                "DisciplineId": "ED4Warrior",
                "Circle": "2",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "8",
                "ID": "ED4AirDance",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 3",
                "DisciplineId": "ED4Warrior",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "64949413-b7af-4ec4-b968-884f266d2c25",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "9",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 3",
                "DisciplineId": "ED4Warrior",
                "Circle": "3",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "10",
                "ID": "ED4WaterfallSlam",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 4",
                "DisciplineId": "ED4Warrior",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "cc0579cf-bbea-44b6-8ea0-4fe046af20bb",
                "Cost": 0,
                "Step": 0
            },
            {
                "Order": "11",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 4",
                "DisciplineId": "ED4Warrior",
                "Circle": "4",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "12",
                "ID": "ED4EarthSkin",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 5",
                "DisciplineId": "ED4Warrior",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "312e6596-b13f-466d-b54f-d607db0e08dc",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "13",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 5",
                "DisciplineId": "ED4Warrior",
                "Circle": "5",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "14",
                "ID": "ED4TemperFlesh",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 6",
                "DisciplineId": "ED4Warrior",
                "Circle": "6",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "33cc6f99-79e8-4b7d-8e35-c031c7f7ab77",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "15",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 6",
                "DisciplineId": "ED4Warrior",
                "Circle": "6",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "16",
                "ID": "ED4CrushingBlow",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 7",
                "DisciplineId": "ED4Warrior",
                "Circle": "7",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "2b902b40-6e0c-4eaa-ba9e-381bfd7f8a2b",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "17",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 7",
                "DisciplineId": "ED4Warrior",
                "Circle": "7",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "18",
                "ID": "ED4SecondAttack",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 8",
                "DisciplineId": "ED4Warrior",
                "Circle": "8",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "095efd0e-9953-4281-8b61-e0e3dcf17fbd",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "19",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 8",
                "DisciplineId": "ED4Warrior",
                "Circle": "8",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "20",
                "ID": "ED4RelentlessRecovery",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 9",
                "DisciplineId": "ED4Warrior",
                "Circle": "9",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "21a6b375-bf2c-4d0e-a0e2-72a477d457cf",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "21",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 9",
                "DisciplineId": "ED4Warrior",
                "Circle": "9",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "22",
                "ID": "ED4UnflinchingFortitude",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 10",
                "DisciplineId": "ED4Warrior",
                "Circle": "10",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "b9a36f80-f8e3-4fbb-a406-ca07f069bc75",
                "Cost": 0,
                "Step": 0
            },
            {
                "Order": "23",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 10",
                "DisciplineId": "ED4Warrior",
                "Circle": "10",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "24",
                "ID": "ED4BloodSwornTalent",
                "Rank": 1,
                "Freerank": "0",
                "Source": "Blood Sworn",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Magic, raisable",
                "UID": "c9e68adb-83d9-40a7-999b-73102de3d720",
                "Cost": 0,
                "Step": 9
            }
        ],
        "Knacks": [],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 5,
                "UID": "58d9d5d9-9f9c-47a2-abd2-574fd1cc4e87"
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 6,
                "UID": "510fab23-9bfd-47c2-aa79-0975a59beb47"
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "AbsorbBlow",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "AstralSensitiveEye",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "BoneCharm",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "DarksightEye",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "DeathCheat",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "DesperateBlow",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "DesperateSpell",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "GarlenStone",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "HornNeedle",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "HorrorFend",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "InitiativeBooster",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "StrengthBooster",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "TargetingEye",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "WoundBalance",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            }
        ],
        "Options": {
            "Books": "official",
        },
        "Magic": [
            {
                "ID": "ED4BloodSwornViolated"
            },
            {
                "ID": "ED4BloodSwornViolatedhealed"
            },
            {
                "ID": "ED4BloodSworn"
            },
            {
                "ID": "ED4BloodPromiseFulfilled"
            },
            {
                "ID": "ED4BloodPromiseViolatedHealed"
            },
            {
                "ID": "ED4BloodPromiseViolated"
            },
            {
                "ID": "ED4BloodPromise"
            },
            {
                "ID": "ED4BloodPeaceBrokenHealed"
            },
            {
                "ID": "ED4BloodPeaceBroken"
            },
            {
                "ID": "ED4BloodPeaceKept"
            },
            {
                "ID": "ED4BloodPeace"
            },
            {
                "ID": "Empty"
            }
        ]
    },
    Feorl:
    {
        "Basic": {
            "Name": "Feorl",
            "Player": "",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race" : "ED4Windling",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": "5",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "1",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "5",
                "Increases": 0
            }
        },
        "LegendPoints": 0,
        "Disciplines": [
            {
                "ID": "ED4Swordmaster",
                "Circle": "3",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4AcrobaticDefense"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4WoundBalance"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4DangerSense"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4AstralSight",
                "Rank": 4,
                "Freerank": "0",
                "Source": "Windling",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Racial",
                "TalentPointsUseable": "True",
                "UID": "f8f41840-b6df-4961-9745-8db5623f5d3c",
                "Cost": 1100,
                "Step": 11
            },
            {
                "Order": "1",
                "ID": "ED4AvoidBlow",
                "Rank": 4,
                "Freerank": 3,
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "7c3445f6-a26b-4c11-95e6-2641e592c86a",
                "Cost": 500,
                "Step": 11
            },
            {
                "Order": "2",
                "ID": "ED4Maneuver",
                "Rank": 3,
                "Freerank": 3,
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "a9874126-4496-486b-a579-4b4b5a5396fb",
                "Cost": 0,
                "Step": 10
            },
            {
                "Order": "3",
                "ID": "ED4MeleeWeapons",
                "Rank": 2,
                "Freerank": 2,
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "5277fc63-375f-4f20-9057-c4d0b1d292e7",
                "Cost": 0,
                "Step": 9
            },
            {
                "Order": "4",
                "ID": "ED4Taunt",
                "Rank": 3,
                "Freerank": "0",
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "96060002-4f20-4fc9-99d5-d57d788d6455",
                "Cost": 600,
                "Step": 10
            },
            {
                "Order": "5",
                "ID": "ED4ThreadWeavingWeaponWeaving",
                "Rank": 3,
                "Freerank": "0",
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "2e84ac7c-95f4-4428-bca3-d9aebfb6645b",
                "Cost": 600,
                "Step": 10
            },
            {
                "Order": "6",
                "ID": "ED4AcrobaticDefense",
                "Rank": 3,
                "Freerank": "0",
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "7d6d80d8-5db1-4b5a-b5bc-602229cb2cba",
                "Cost": 600,
                "Step": 10
            },
            {
                "Order": "7",
                "ID": "ED4FirstImpression",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Swordmaster 2",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "d41bd901-55d7-4fe7-a781-ee7bf07d2ec5",
                "Cost": 600,
                "Step": 10
            },
            {
                "Order": "8",
                "ID": "ED4WoundBalance",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Swordmaster 2",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "7d6d80d8-5db1-4b5a-b5bc-602229cb2cba",
                "Cost": 600,
                "Step": 7
            },
            {
                "Order": "9",
                "ID": "ED4Riposte",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Swordmaster 3",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "ae685d7d-41e5-4a2f-9a9e-55fa7169decf",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "10",
                "ID": "ED4DangerSense",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Swordmaster 3",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "7d6d80d8-5db1-4b5a-b5bc-602229cb2cba",
                "Cost": 600,
                "Step": 10
            }
        ],
        "Knacks": [
            {
                "ID": "ED4RiposteClawRiposte",
                "Step": 12
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 9
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Horror Lore",
                "Rank": "2",
                "Freerank": "1",
                "Step": 9,
                "Cost": 300
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Barsaive History",
                "Rank": "2",
                "Freerank": "2",
                "Step": 9,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Legends and Heroes",
                "Rank": "2",
                "Freerank": "2",
                "Step": 9,
                "Cost": 0
            },
            {
                "ID": "ED4Artisan",
                "Category": "Artisan",
                "Name": "Storytelling",
                "Rank": "1",
                "Freerank": "1",
                "Step": 8,
                "Cost": 0
            },
            {
                "ID": "ED4Artisan",
                "Category": "Artisan",
                "Name": "Party like a Madman",
                "Rank": "1",
                "Freerank": "1",
                "Step": 8,
                "Cost": 0
            },
            {
                "ID": "ED4EvidenceAnalysis",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "2",
                "Freerank": "0",
                "Step": 9,
                "Cost": 800
            },
            {
                "ID": "ED4Awareness",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "2",
                "Freerank": "2",
                "Step": 9,
                "Cost": 0
            },
            {
                "ID": "ED4Evaluate",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "2",
                "Freerank": "2",
                "Step": 9,
                "Cost": 0
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "AdventuringKit",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "ArtisanTools",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "Dagger",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Melee Weapon",
                "DamageStep": 6
            },
            {
                "ID": "TravelersGarb",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Clothing"
            },
            {
                "ID": "RationsTrail1week",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Provender"
            },
            {
                "ID": "Silver",
                "Count": "100",
                "InUse": "Yes",
                "Type": "Valuable"
            },
            {
                "ID": "Empty",
                "Type": "Melee Weapon",
                "Count": "1",
                "InUse": "Yes"
            }
        ],
        "Options": {
            "Books": "official",
        }
    },
    Hagbard:
    {
        "Basic": {
            "Name": "Hagbard the Complete Threaduser",
            "Player": "",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race" : "ED4Elf",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "7",
                "Increases": 2
            },
            "Str": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "1",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "3",
                "Increases": 0
            }
        },
        "LegendPoints": 10000,
        "Disciplines": [
            {
                "ID": "ED4Warrior",
                "Circle": "1",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4ShieldBash"
                    }
                ]
            },
            {
                "ID": "ED4Wizard",
                "Circle": "1",
                "Order": "1",
                "StartedAt": 1,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "Empty"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4AvoidBlow",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Warrior 1, Espagra Boots, Lightning-Bolt Earring",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "Debug": "undefined Thread Item Merge Thread Item Merge",
                "UID": "74cb35dc-385b-4625-8813-59ae114b9000",
                "Cost": 1300,
                "Step": 17
            },
            {
                "Order": "1",
                "ID": "ED4MeleeWeapons",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "d9753f49-fe0b-4fe7-ace1-14d364b3832d",
                "Cost": 1300,
                "Step": 16
            },
            {
                "Order": "2",
                "ID": "ED4ThreadWeavingWarWeaving",
                "Rank": 5,
                "Freerank": 2,
                "Source": "Warrior 1, Talisman Statue, Thread Wand, Blade Of Alemvor, Wind Bracer",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "Debug": "undefined Thread Item Merge Thread Item Merge Thread Item Merge Thread Item Merge",
                "UID": "e27f811a-1f93-429c-b6ca-9a9fcb5fa353",
                "Cost": 1600,
                "Step": 17
            },
            {
                "Order": "3",
                "ID": "ED4TigerSpring",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "86048dad-794b-4318-b7d7-bc7363fe2bed",
                "Cost": 1900,
                "Step": 2
            },
            {
                "Order": "4",
                "ID": "ED4WoodSkin",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Warrior 1, Bands of the Elements",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "Debug": "undefined Thread Item Merge",
                "UID": "12abe72d-6b62-4811-ba9a-b080663f6cb4",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "5",
                "ID": "ED4ShieldBash",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "e449a074-542e-4ba5-9dbc-12f7e691a2d8",
                "Cost": 0,
                "Step": 9
            },
            {
                "Order": "6",
                "ID": "ED4StandardMatrix",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "Stacking Free Matrix",
                "UID": "0ed49bf2-8a8e-40b8-8b89-c7f9e68aca4a",
                "Cost": 0,
                "Step": 1
            },
            {
                "Order": "7",
                "ID": "ED4StandardMatrix",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "1",
                "debug": "Stacking Free Matrix",
                "UID": "3b188d0e-e4d9-4381-bf9d-90ba3f01a127",
                "Cost": 0,
                "Step": 1
            },
            {
                "Order": "8",
                "ID": "ED4DispelMagic",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "b8eaa963-3486-4435-9084-ee90a2381369",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "9",
                "ID": "ED4Patterncraft",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "5396e8fe-794d-4db8-bb17-4d6cf7bf500b",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "10",
                "ID": "ED4Research",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "19fc265c-a998-4a22-9c74-d7f520c366b6",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "11",
                "ID": "ED4Spellcasting",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1, Fastoon’s Very Impressive Staff, Talisman Statue, Thread Wand, Blade Of Alemvor, Fire Bracer",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "Debug": "undefined Thread Item Merge Thread Item Merge Thread Item Merge Thread Item Merge Thread Item Merge",
                "UID": "a30e74e5-b941-4aaa-bd4d-b29b1272e8ef",
                "Cost": 0,
                "Step": 13
            },
            {
                "Order": "12",
                "ID": "ED4ThreadWeavingWizardry",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1, Talisman Statue, Thread Wand, Blade Of Alemvor, Wind Bracer",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "Debug": "undefined Thread Item Merge Thread Item Merge Thread Item Merge Thread Item Merge",
                "UID": "b93bffa8-e139-42f7-a97c-53e6f1905173",
                "Cost": 0,
                "Step": 12
            },
            {
                "Order": "13",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Optional",
                "UID": "fe1cb42e-ccef-4c2a-b855-a3188d91914d",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "14",
                "ID": "ED4StandardMatrix",
                "Rank": "4",
                "Freerank": "0",
                "Source": "Standard Matrix Object",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "4d1e114a-138c-4494-9685-2a3f164b9c65",
                "Cost": 0,
                "Step": 4
            },
            {
                "Order": "15",
                "ID": "ED4EnhancedMatrix",
                "Rank": "6",
                "Freerank": "0",
                "Source": "Enhanced Matrix Object",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "9fb02de2-34f0-41ba-a40c-74a06b70bc3c",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "16",
                "ID": "ED4ArmoredMatrix",
                "Rank": "8",
                "Freerank": "0",
                "Source": "Armored Matrix Object",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "cfaf36f1-99ac-4aea-989d-38deff9edefb",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "17",
                "ID": "ED4SharedMatrix",
                "Rank": "10",
                "Freerank": "0",
                "Source": "Shared Matrix Object",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "2c40c4cd-df0a-42d8-a644-9c87fbd06d0c",
                "Cost": 0,
                "Step": 10
            },
            {
                "Order": "18",
                "ID": "ED4AirDance",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Bands of the Elements",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "c834fe70-65fc-4336-921b-dd00d443949a",
                "Cost": 0,
                "Step": -2
            },
            {
                "Order": "19",
                "ID": "ED4WaterfallSlam",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Bands of the Elements",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "85f75b52-2ece-4a5a-b157-d97c64a03c2e",
                "Cost": 0,
                "Step": 1
            },
            {
                "Order": "20",
                "ID": "ED4EarthSkin",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Bands of the Elements",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "5584bf96-aa10-4b65-afd7-6a642eed04e6",
                "Cost": 0,
                "Step": 7
            },
            {
                "Order": "21",
                "ID": "ED4FireHeal",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Bands of the Elements",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "36d60d8f-fabd-4615-b440-b627c3c0b9b2",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "22",
                "ID": "ED4ConcealObject",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Conspicuous Smuggler",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "d8a57bda-eae0-4336-b659-824dc90193ab",
                "Cost": 0,
                "Step": 10
            },
            {
                "Order": "23",
                "ID": "ED4WoundBalance",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Elemental Long Spear",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "0eff8c92-c5b3-42eb-96ed-0aa63d0685f2",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "24",
                "ID": "ED4StealthyStride",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Espagra Boots, Poison Ivy",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus Thread Item Merge",
                "UID": "07a70766-5655-41d7-9e35-429b8035fddc",
                "Cost": 0,
                "Step": 11
            },
            {
                "Order": "25",
                "ID": "ED4StandardMatrix",
                "Rank": "6",
                "Freerank": "0",
                "Source": "Fastoon’s Very Impressive Staff",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "4d1e114a-138c-4494-9685-2a3f164b9c65",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "26",
                "ID": "ED4Willforce",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Fastoon’s Very Impressive Staff",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "4a4df8f2-0b7d-4f4d-957e-d77bf7c37850",
                "Cost": 0,
                "Step": 7
            },
            {
                "Order": "27",
                "ID": "ED4UnarmedCombat",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Feral Bracers",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "abfac9a2-dca8-4f06-bc2b-7be1e6d08fa3",
                "Cost": 0,
                "Step": 12
            },
            {
                "Order": "28",
                "ID": "ED4ClawShape",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Feral Bracers",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "f8da6167-5919-42b6-909c-7a88ce4380fe",
                "Cost": 0,
                "Step": 18
            },
            {
                "Order": "29",
                "ID": "ED4SteelThought",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Metal Inquisitor, Silvered Shield",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus Thread Item Merge",
                "UID": "61827913-b81d-46c0-8416-222b70e58be8",
                "Cost": 0,
                "Step": 11
            },
            {
                "Order": "30",
                "ID": "ED4Hypnotize",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Naga-Scale Brooch",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "eb5acf85-c3f7-4476-be06-aba027ca6271",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "31",
                "ID": "ED4Taunt",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Rapier of Wit",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "3a8e0fab-f27d-49d9-8a5e-3716df498181",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "32",
                "ID": "ED4WildernessSurvival",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Savage Hides (Journeyman), Savage Hides (Warden)",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus Thread Item Merge",
                "UID": "c50b9e5c-1267-4b5a-bfa6-1e9e20e0c8e2",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "33",
                "ID": "ED4Awareness",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Savage Hides (Journeyman), Savage Hides (Warden)",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus Thread Item Merge",
                "UID": "c53a1c24-62b5-4633-ac82-522d687612f6",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "34",
                "ID": "ED4Tracking",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Savage Hides (Warden)",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "f100f3c3-3ac6-47c7-a400-11423958a867",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "35",
                "ID": "ED4StandardMatrix",
                "Rank": "6",
                "Freerank": "0",
                "Source": "Spell Sword (Journeyman)",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "4d1e114a-138c-4494-9685-2a3f164b9c65",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "36",
                "ID": "ED4EnhancedMatrix",
                "Rank": "7",
                "Freerank": "0",
                "Source": "Spell Sword (Warden)",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "9fb02de2-34f0-41ba-a40c-74a06b70bc3c",
                "Cost": 0,
                "Step": 7
            },
            {
                "Order": "37",
                "ID": "ED4StandardMatrix",
                "Rank": "1",
                "Freerank": "0",
                "Source": "Talisman Statue",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "4d1e114a-138c-4494-9685-2a3f164b9c65",
                "Cost": 0,
                "Step": 1
            },
            {
                "Order": "38",
                "ID": "ED4EmotionSong",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Threaded Instruments",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "65f361cd-0af6-4e9d-97f1-c46613167036",
                "Cost": 0,
                "Step": 7
            },
            {
                "Order": "39",
                "ID": "ED4ImpressiveDisplay",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Threaded Instruments",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "0315ab65-0cb8-4151-80b5-8019af4558fb",
                "Cost": 0,
                "Step": 1
            },
            {
                "Order": "40",
                "ID": "ED4EnhancedMatrix",
                "Rank": "8",
                "Freerank": "0",
                "Source": "Amulet of Agamon",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "9fb02de2-34f0-41ba-a40c-74a06b70bc3c",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "41",
                "ID": "ED4EnhancedMatrix",
                "Rank": "8",
                "Freerank": "0",
                "Source": "Blade Of Alemvor",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "9fb02de2-34f0-41ba-a40c-74a06b70bc3c",
                "Cost": 0,
                "Step": 8
            }
        ],
        "Knacks": [],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 6
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 7
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "ED4StandardMatrixObject",
                "Type": "Thread Item",
                "Count": "13",
                "InUse": "Yes",
                "Rank": "4",
                "Cost": 1100
            },
            {
                "ID": "ED4EnhancedMatrixObject",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4ArmoredMatrixObject",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "ED4SharedMatrixObject",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "10",
                "Cost": 97900
            },
            {
                "ID": "ED4BandsofTheElements",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4BracersOfAras",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4BracersOfObsidimanStrength",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4ConspicuousSmuggler",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4ElementalLongSpear",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "DamageStep": 15,
                "Cost": 5200
            },
            {
                "ID": "ED4EspagraBoots",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4EspagraSaddle",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4FaerieMail",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4FastoonsVeryImpressiveStaff",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4FeralBracers",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4FrostPouch",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4KranguksInterjection",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Forged": "8",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4LightningBoltEarring",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4MetalInquisitor",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4Mirror",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4NagaScaleBrooch",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4NiokusBow",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "10",
                "DamageStep": 19,
                "Cost": 97900
            },
            {
                "ID": "ED4Oratory Necklace",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4OrichalcumShield",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 8400
            },
            {
                "ID": "ED4PoisonIvy",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "ED4Purifier",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "10",
                "DamageStep": 17,
                "Cost": 97900
            },
            {
                "ID": "ED4RapierofWit",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "DamageStep": 15,
                "Cost": 22800
            },
            {
                "ID": "ED4SavageHidesJ",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4SavageHidesW",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "SevenLeagueStridersN",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "4",
                "Cost": 1100
            },
            {
                "ID": "SevenLeagueStridersJ",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4SilveredShield",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "ED4Smoke",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Forged": "15",
                "Rank": "6",
                "DamageStep": 30,
                "Cost": 5200
            },
            {
                "ID": "ED4SpellSwordJ",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "DamageStep": 14,
                "Cost": 5200
            },
            {
                "ID": "ED4SpellSwordW",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "DamageStep": 14,
                "Cost": 14100
            },
            {
                "ID": "ED4SpikeBomb",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4TalismanStatue",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4ThornBow",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "DamageStep": 14,
                "Cost": 5200
            },
            {
                "ID": "ED4ThornManSpear",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "DamageStep": 15,
                "Cost": 5200
            },
            {
                "ID": "ED4ThreadAxe",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "4",
                "DamageStep": 15,
                "Cost": 1100
            },
            {
                "ID": "ED4ThreadCrystalRinglet",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "4",
                "Cost": 1100
            },
            {
                "ID": "ED4ThreadWand",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "4",
                "Cost": 1100
            },
            {
                "ID": "ED4ThreadWarbow",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "4",
                "DamageStep": 14,
                "Cost": 1100
            },
            {
                "ID": "ED4ThreadedInstruments",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "4",
                "Cost": 1100
            },
            {
                "ID": "ED4UnrequitedWave",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "DamageStep": 19,
                "Cost": 5200
            },
            {
                "ID": "ED4WarHelmofLandis",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4WyvernskinRobe",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4Aetrin",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "DamageStep": 16,
                "Cost": 22800
            },
            {
                "ID": "ED4AmuletOfAgamon",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "ED4AstralSextant",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4BandsOfFortune",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "ED4BladeOfAlemvor",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "DamageStep": 16,
                "Cost": 22800
            },
            {
                "ID": "ED4BloodSwornLattice",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "ED4BloodyRibbons",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "FireBracer",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "WindBracer",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 22800
            },
            {
                "ID": "ED4CrystalBulwark",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "CrystalSpearJ",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "DamageStep": 13,
                "Cost": 5200
            }
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"}
    },
    Officious :
    {

        Basic :
        {
            "Name"        : "Officious the Huffer",
            "Player"      : "Loads all available official data",
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
        },

        "Race" : "ED4Elf",
        attributePoints : 25,

        Attributes : 
        {
            "Dex": {"Buildpoints" : 0, "Increases" : 0},
            "Str": {"Buildpoints" : 0, "Increases" : 0},
            "Tou": {"Buildpoints" : 0, "Increases" : 0},
            "Per": {"Buildpoints" : 0, "Increases" : 0},
            "Wil": {"Buildpoints" : 0, "Increases" : 0},
            "Cha": {"Buildpoints" : 0, "Increases" : 0}
        },

        LegendPoints : 0,
        Disciplines : [],
        Talents : [],
        Knacks : [],
        Skills : 
        [
            {"ID" : "ED4ReadWriteLanguage", "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",     "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],
        Spells : [],
        Equipment : 
        [
            {"ID" : "AdventuringKit",      "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "ArtisanTools",        "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "Dagger",              "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "TravelersGarb",       "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "RationsTrail1week",   "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "Silver",              "Count" : "100", "InUse" : "Yes"}
        ],

        Options :
        {
            "Books" : "official"
        }
    },
    AllData :
    {

        Basic :
        {
            "Name"        : "AllData the openhearted",
            "Player"      : "This character loads all the files entered",
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

        },

        "Race" : "ED4Dwarf",
        attributePoints : 25,

        Attributes : 
        {
            "Dex": {"Buildpoints" : 0, "Increases" : 0},
            "Str": {"Buildpoints" : 0, "Increases" : 0},
            "Tou": {"Buildpoints" : 0, "Increases" : 0},
            "Per": {"Buildpoints" : 0, "Increases" : 0},
            "Wil": {"Buildpoints" : 0, "Increases" : 0},
            "Cha": {"Buildpoints" : 0, "Increases" : 0}
        },

        LegendPoints : 0,
        Disciplines : [],
        Talents : [],
        Knacks : [],
        Skills : 
        [
            {"ID" : "ED4ReadWriteLanguage", "Rank" : "1", "Freerank" : "1", "Category" : "General"},
            {"ID" : "ED4SpeakLanguage",     "Rank" : "2", "Freerank" : "2", "Category" : "General"}
        ],
        Spells : [],
        Equipment : 
        [
            {"ID" : "AdventuringKit",      "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "ArtisanTools",        "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "Dagger",              "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "TravelersGarb",       "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "RationsTrail1week",   "Count" : "1",   "InUse" : "Yes"},
            {"ID" : "Silver",              "Count" : "100", "InUse" : "Yes"}
        ],

        Options :
        {
            "Books" : "all"
        }
    },
    Wombat: 
    {
        "Basic": {
            "Name": "Wombat the Hurting",
            "Player": "",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race" : "ED4Obsidiman",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "9",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": "1",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "15",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": 0,
                "Increases": 0
            }
        },
        "LegendPoints": 0,
        "Disciplines": [
            {
                "ID": "ED4Warrior",
                "Circle": "10",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "2",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "3",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "4",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "5",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "6",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "7",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "8",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "9",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "10",
                        "ID": "Empty"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4AvoidBlow",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "e3e9b88b-137e-406b-bf2d-826420141f8f",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "1",
                "ID": "ED4MeleeWeapons",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "7a378b0e-9a15-4c1d-96f1-fc0ff85be793",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "2",
                "ID": "ED4ThreadWeavingWarWeaving",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "75f757c1-5b82-45ef-854c-85fb846e1996",
                "Cost": 0,
                "Step": 4
            },
            {
                "Order": "3",
                "ID": "ED4TigerSpring",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "3117a291-b7a4-4866-9e0d-477610af63dc",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "4",
                "ID": "ED4WoodSkin",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "7aa5e70c-9fbf-4e98-b77c-c0f1a07d9f49",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "5",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Optional",
                "TalentPointsUseable": "True",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "6",
                "ID": "ED4WoundBalance",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 2",
                "DisciplineId": "ED4Warrior",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "c87b0968-5b76-4765-be7e-ceed71926d48",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "7",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 2",
                "DisciplineId": "ED4Warrior",
                "Circle": "2",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "8",
                "ID": "ED4AirDance",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 3",
                "DisciplineId": "ED4Warrior",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "64949413-b7af-4ec4-b968-884f266d2c25",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "9",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 3",
                "DisciplineId": "ED4Warrior",
                "Circle": "3",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "10",
                "ID": "ED4WaterfallSlam",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 4",
                "DisciplineId": "ED4Warrior",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "cc0579cf-bbea-44b6-8ea0-4fe046af20bb",
                "Cost": 0,
                "Step": 0
            },
            {
                "Order": "11",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 4",
                "DisciplineId": "ED4Warrior",
                "Circle": "4",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "12",
                "ID": "ED4EarthSkin",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 5",
                "DisciplineId": "ED4Warrior",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "312e6596-b13f-466d-b54f-d607db0e08dc",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "13",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 5",
                "DisciplineId": "ED4Warrior",
                "Circle": "5",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "14",
                "ID": "ED4TemperFlesh",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 6",
                "DisciplineId": "ED4Warrior",
                "Circle": "6",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "33cc6f99-79e8-4b7d-8e35-c031c7f7ab77",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "15",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 6",
                "DisciplineId": "ED4Warrior",
                "Circle": "6",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "16",
                "ID": "ED4CrushingBlow",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 7",
                "DisciplineId": "ED4Warrior",
                "Circle": "7",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "2b902b40-6e0c-4eaa-ba9e-381bfd7f8a2b",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "17",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 7",
                "DisciplineId": "ED4Warrior",
                "Circle": "7",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "18",
                "ID": "ED4SecondAttack",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 8",
                "DisciplineId": "ED4Warrior",
                "Circle": "8",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "095efd0e-9953-4281-8b61-e0e3dcf17fbd",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "19",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 8",
                "DisciplineId": "ED4Warrior",
                "Circle": "8",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "20",
                "ID": "ED4RelentlessRecovery",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 9",
                "DisciplineId": "ED4Warrior",
                "Circle": "9",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "21a6b375-bf2c-4d0e-a0e2-72a477d457cf",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "21",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 9",
                "DisciplineId": "ED4Warrior",
                "Circle": "9",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "22",
                "ID": "ED4UnflinchingFortitude",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 10",
                "DisciplineId": "ED4Warrior",
                "Circle": "10",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "b9a36f80-f8e3-4fbb-a406-ca07f069bc75",
                "Cost": 0,
                "Step": 0
            },
            {
                "Order": "23",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Warrior 10",
                "DisciplineId": "ED4Warrior",
                "Circle": "10",
                "Type": "Optional",
                "UID": "68f361d4-5841-4b36-84fe-b40b518cbaf7",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "24",
                "ID": "ED4BloodSwornTalent",
                "Rank": 1,
                "Freerank": "0",
                "Source": "Blood Sworn",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Magic, raisable",
                "UID": "c9e68adb-83d9-40a7-999b-73102de3d720",
                "Cost": 0,
                "Step": 9
            }
        ],
        "Knacks": [],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 5,
                "UID": "58d9d5d9-9f9c-47a2-abd2-574fd1cc4e87"
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 6,
                "UID": "510fab23-9bfd-47c2-aa79-0975a59beb47"
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "AbsorbBlow",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "AstralSensitiveEye",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "BoneCharm",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "DarksightEye",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "DeathCheat",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "DesperateBlow",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "DesperateSpell",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "GarlenStone",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "HornNeedle",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "HorrorFend",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "InitiativeBooster",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "StrengthBooster",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "TargetingEye",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "WoundBalance",
                "Type": "Blood Charm",
                "Count": "1",
                "InUse": "Yes"
            }
        ],
        "Options": {
            "Books": "All",
        },
        "Magic": [
            {
                "ID": "ED4BloodSwornViolated"
            },
            {
                "ID": "ED4BloodSwornViolatedhealed"
            },
            {
                "ID": "ED4BloodSworn"
            },
            {
                "ID": "ED4BloodPromiseFulfilled"
            },
            {
                "ID": "ED4BloodPromiseViolatedHealed"
            },
            {
                "ID": "ED4BloodPromiseViolated"
            },
            {
                "ID": "ED4BloodPromise"
            },
            {
                "ID": "ED4BloodPeaceBrokenHealed"
            },
            {
                "ID": "ED4BloodPeaceBroken"
            },
            {
                "ID": "ED4BloodPeaceKept"
            },
            {
                "ID": "ED4BloodPeace"
            },
            {
                "ID": "Empty"
            }
        ]
    },
    Flar :
    {
        "Basic": {
            "Name": "F'Lar",
            "Player": "Lars Gottlieb",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race" : "ED4Tskrang",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "5",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "3",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": "3",
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "7",
                "Increases": 0
            }
        },
        "LegendPoints": 45000,
        "Disciplines": [
            {
                "ID": "ED4Troubadour",
                "Circle": "3",
                "Order": "0",
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4Haggle"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4MeleeWeapons"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4Conversation"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4Entertainer",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "New free talent",
                "UID": "1ab9cc60-c673-4305-92cc-64f929ac2207",
                "Step": 10,
                "Cost": 0
            },
            {
                "Order": "1",
                "ID": "ED4EmotionSong",
                "Rank": 3,
                "Freerank": 3,
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "fafce738-bf33-40a7-a40b-cf10f44e9a67",
                "Step": 10,
                "Cost": 0
            },
            {
                "Order": "2",
                "ID": "ED4FirstImpression",
                "Rank": 4,
                "Freerank": 3,
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "93c5d5ec-6cd8-4c5c-ae4c-8a2b251c0a79",
                "Step": 11,
                "Cost": 500
            },
            {
                "Order": "3",
                "ID": "ED4HearteningLaugh",
                "Rank": 3,
                "Freerank": 2,
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "80bf9622-4df7-4b1f-a018-d7b90948f211",
                "Step": 10,
                "Cost": 300
            },
            {
                "Order": "4",
                "ID": "ED4ItemHistory",
                "Rank": 4,
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "850077c0-8705-4b08-8ce7-7e72c14a37dd",
                "Step": 10,
                "Cost": 1100
            },
            {
                "Order": "5",
                "ID": "ED4ThreadWeavingStoryWeaving",
                "Rank": 3,
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "c0dda037-bdec-42df-8682-934f3dfc9341",
                "Step": 9,
                "Cost": 600
            },
            {
                "Order": "6",
                "ID": "ED4Haggle",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "674035c4-dcc9-400a-8af2-799edfb0b52c",
                "Step": 12,
                "Cost": 1900
            },
            {
                "Order": "7",
                "ID": "ED4Etiquette",
                "Rank": 4,
                "Freerank": 0,
                "Source": "Troubadour 2",
                "DisciplineId": "ED4Troubadour",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "09bc0eff-a1aa-4d74-8c78-62ea0f8731a7",
                "Step": 11,
                "Cost": 1100
            },
            {
                "Order": "8",
                "ID": "ED4MeleeWeapons",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Troubadour 2",
                "DisciplineId": "ED4Troubadour",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "6864544c-7b84-4e57-a822-ec5747d4d2a8",
                "Step": 10,
                "Cost": 600
            },
            {
                "Order": "9",
                "ID": "ED4EmpathicSense",
                "Rank": 2,
                "Freerank": 0,
                "Source": "Troubadour 3",
                "DisciplineId": "ED4Troubadour",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "3615cbbe-cbb7-488e-8b0e-be06729b94e8",
                "Step": 9,
                "Cost": 300
            },
            {
                "Order": "10",
                "ID": "ED4Conversation",
                "Rank": 4,
                "Freerank": 0,
                "Source": "Troubadour 3",
                "DisciplineId": "ED4Troubadour",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "b2ab9fb0-ac60-4ea6-8af5-c1f9419b823d",
                "Step": 11,
                "Cost": 1100
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 7
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            },
            {
                "ID": "ED4ThrowingWeapons",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "3",
                "Freerank": "3",
                "Step": 10,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Story Wise",
                "Rank": "2",
                "Freerank": "2",
                "Step": 8,
                "Cost": 0
            },
            {
                "ID": "ED4Artisan",
                "Category": "Artisan",
                "Name": "Old Wives Tales",
                "Rank": "1",
                "Freerank": "1",
                "Step": 8,
                "Cost": 0
            },
            {
                "ID": "Empty"
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "Lute",
                "Type": "Adventuring",
                "Count": "1"
            },
            {
                "ID": "HardenedLeather",
                "Type": "Armor",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "HawkHatchet",
                "Type": "Thrown",
                "Count": "1",
                "DamageStep": 12,
                "Forged": "3"
            },
            {
                "ID": "Broadsword",
                "Type": "Melee Weapon",
                "Count": "1",
                "DamageStep": 12,
                "Forged": "2"
            }
        ],
        "Options": {
            "Edition": "ED4",
            "Attributepoints": "25",
            "MaxAttributeIncrease": "3",
            "Talentpoints": "8",
            "Spellpoints": "PERstep",
            "KnowledgeSkillpoints": "2",
            "ArtisanSkillpoints": "1",
            "SpeakSkillpoints": "2",
            "ReadSkillpoints": "1",
            "FreeSkillpoints": "8",
            "BuyMoreOptionalMatrices": "false",
            "FreeMatricesStack": "false",
            "BuyMatricesPerDiscipline": "true",
            "CasterCircle5Bonus": "false",
            "SpellsCostLP": "4ed",
            "FirstWoundFree" : "true"
        },
        "Knacks": [
            {
                "ID": "Empty"
            }
        ]
    },
    Tchar :
    {
        "Basic": {
            "Name": "T'Char",
            "Player": "Lars Gottlieb",
            "Gender": "Female",
            "Age": "28",
            "Height": "49cm",
            "Weight": "",
            "Hair": "Black",
            "Skin": "Pasty white",
            "Eyes": "Deep purple",
            "Passion": "Astendar",
            "Traits": "",
            "Description": "Dark and cheerful"
        },
        "Race" : "ED4Tskrang",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "7",
                "Increases": 3
            },
            "Str": {
                "Buildpoints": "7",
                "Increases": 1
            },
            "Tou": {
                "Buildpoints": "3",
                "Increases": 2
            },
            "Per": {
                "Buildpoints": "1",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": "0",
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "7",
                "Increases": 3
            }
        },
        "LegendPoints": 45000,
        "Disciplines": [
            {
                "Order": "1",
                "ID": "ED4Swordmaster",
                "Circle": "5",
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4TigerSpring"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4WinningSmile"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4DangerSense"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4ImpressiveDisplay"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4Etiquette"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4AvoidBlow",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 13,
                "Cost": 1300
            },
            {
                "Order": "1",
                "ID": "ED4Maneuver",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 13,
                "Cost": 1300
            },
            {
                "Order": "2",
                "ID": "ED4MeleeWeapons",
                "Rank": 6,
                "Freerank": 2,
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 14,
                "Cost": 2900
            },
            {
                "Order": "3",
                "ID": "ED4Taunt",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 13,
                "Cost": 1900
            },
            {
                "Order": "4",
                "ID": "ED4ThreadWeavingWeaponWeaving",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 10,
                "Cost": 1900
            },
            {
                "Order": "5",
                "ID": "ED4TigerSpring",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "TalentPointsUseable": "True",
                "Spell": "ED4NSpiritDart",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "6",
                "ID": "ED4FirstImpression",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Swordmaster 2",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "2",
                "Type": "Discipline",
                "Step": 13,
                "Cost": 1900
            },
            {
                "Order": "7",
                "ID": "ED4WinningSmile",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Swordmaster 2",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 15,
                "Cost": 5300
            },
            {
                "Order": "8",
                "ID": "ED4Riposte",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Swordmaster 3",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "3",
                "Type": "Discipline",
                "Step": 14,
                "Cost": 3200
            },
            {
                "Order": "9",
                "ID": "ED4DangerSense",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Swordmaster 3",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 13,
                "Cost": 1900
            },
            {
                "Order": "10",
                "ID": "ED4HearteningLaugh",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Swordmaster 4",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "4",
                "Type": "Discipline",
                "Step": 13,
                "Cost": 1900
            },
            {
                "Order": "11",
                "ID": "ED4ImpressiveDisplay",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Swordmaster 4",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 5,
                "Cost": 1900
            },
            {
                "Order": "12",
                "ID": "ED4SecondWeapon",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Swordmaster 5",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "5",
                "Type": "Discipline",
                "Step": 13,
                "Cost": 3100
            },
            {
                "Order": "13",
                "ID": "ED4Etiquette",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Swordmaster 5",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 11,
                "Cost": 1000
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 6
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 7
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "LivingCrystal",
                "Type": "Armor",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "Broadsword",
                "Type": "Melee Weapon",
                "Count": "1", "Forged" : "4",
                "DamageStep": 10
            },
            {
                "ID": "Broadsword",
                "Type": "Melee Weapon",
                "Count": "1", "Forged" : "4",
                "DamageStep": 10
            },
            {
                "ID": "ShortSword",
                "Type": "Melee Weapon",
                "Count": "1",
                "DamageStep": 9
            }
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"},
        "Knacks": [
            {
                "ID": "Empty"
            }
        ]
    },
    Dinladen :
    {
        "Basic": {
            "Name": "Dinladen Danladen",
            "Player": "Lars Gottlieb",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race" : "ED4Dwarf",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "5",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": "3",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "5",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": "2",
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "3",
                "Increases": 0
            }
        },
        "LegendPoints": 0,
        "Disciplines": [
            {
                "ID": "ED4Scout",
                "Circle": "5",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4MissileWeapons"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4SpeakLanguage"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4CreatureAnalysis"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4LockPicking"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4ConcealObject"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4Navigation",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Scout 1",
                "DisciplineId": "ED4Scout",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "New free talent",
                "UID": "ffedc440-7f42-49d5-9103-649027d559e6",
                "Cost": 0,
                "Step": 12
            },
            {
                "Order": "1",
                "ID": "ED4Awareness",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Scout 1",
                "DisciplineId": "ED4Scout",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "9dd126cc-1956-4d52-a01d-9070b062baea",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "2",
                "ID": "ED4Climbing",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Scout 1",
                "DisciplineId": "ED4Scout",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "ad386818-a9e1-4fc0-bb05-07b2f5fb10c8",
                "Cost": 1900,
                "Step": 11
            },
            {
                "Order": "3",
                "ID": "ED4ThreadWeavingScoutWeaving",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Scout 1",
                "DisciplineId": "ED4Scout",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "70b5b6f3-6621-47f3-9fd9-287b70a69694",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "4",
                "ID": "ED4Tracking",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Scout 1",
                "DisciplineId": "ED4Scout",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "e9072101-1f05-4e77-bea6-f535ed7a552d",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "5",
                "ID": "ED4WildernessSurvival",
                "Rank": 7,
                "Freerank": "0",
                "Source": "Scout 1",
                "DisciplineId": "ED4Scout",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "bdfc0ebd-0536-44df-8f9e-196175b118b5",
                "Cost": 5300,
                "Step": 14
            },
            {
                "Order": "6",
                "ID": "ED4MissileWeapons",
                "Rank": 7,
                "Freerank": "0",
                "Source": "Scout 1",
                "DisciplineId": "ED4Scout",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "2d4c76a1-5744-4528-81b9-dcf00e99aa80",
                "Cost": 5300,
                "Step": 13
            },
            {
                "Order": "7",
                "ID": "ED4StealthyStride",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Scout 2",
                "DisciplineId": "ED4Scout",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "0e777317-fdc2-4398-9d8c-eeaff864a502",
                "Cost": 1900,
                "Step": 11
            },
            {
                "Order": "8",
                "ID": "ED4SpeakLanguage",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Scout 2",
                "DisciplineId": "ED4Scout",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "2d4c76a1-5744-4528-81b9-dcf00e99aa80",
                "Cost": 600,
                "Step": 10
            },
            {
                "Order": "9",
                "ID": "ED4MysticPursuit",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Scout 3",
                "DisciplineId": "ED4Scout",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "b21c245e-8bef-4651-8498-fbb1afef4547",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "10",
                "ID": "ED4CreatureAnalysis",
                "Rank": 4,
                "Freerank": 0,
                "Source": "Scout 3",
                "DisciplineId": "ED4Scout",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "2d4c76a1-5744-4528-81b9-dcf00e99aa80",
                "Cost": 1100,
                "Step": 11
            },
            {
                "Order": "11",
                "ID": "ED4DangerSense",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Scout 4",
                "DisciplineId": "ED4Scout",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "8461f7fe-0c74-42a6-b2c7-848b6cee5092",
                "Cost": 1900,
                "Step": 11
            },
            {
                "Order": "12",
                "ID": "ED4LockPicking",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Scout 4",
                "DisciplineId": "ED4Scout",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "2d4c76a1-5744-4528-81b9-dcf00e99aa80",
                "Cost": 600,
                "Step": 9
            },
            {
                "Order": "13",
                "ID": "ED4EvidenceAnalysis",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Scout 5",
                "DisciplineId": "ED4Scout",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "b4dbbe73-f91d-4e71-8a36-3bf008766498",
                "Cost": 1000,
                "Step": 10
            },
            {
                "Order": "14",
                "ID": "ED4ConcealObject",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Scout 5",
                "DisciplineId": "ED4Scout",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "dff0bc0d-2360-4a0f-a83a-88472852ab7a",
                "Cost": 3100,
                "Step": 11
            }
        ],
        "Knacks": [],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 9
            },
            {
                "ID": "ED4Alchemy",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "2",
                "Freerank": "2",
                "Step": 9,
                "Cost": 0
            },
            {
                "ID": "ED4Artisan",
                "Category": "Artisan",
                "Name": "Drawing",
                "Rank": "2",
                "Freerank": "2",
                "Step": 8,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Dragon Mountains Lore",
                "Rank": "2",
                "Freerank": "2",
                "Step": 9,
                "Cost": 0
            },
            {
                "ID": "ED4AssessIntentions",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "3",
                "Freerank": "3",
                "Step": 9,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Creature Lore",
                "Rank": "2",
                "Freerank": "2",
                "Step": 9,
                "Cost": 0
            },
            {
                "ID": "ED4Mapmaking",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "3",
                "Freerank": "0",
                "Step": 10,
                "Cost": 1000
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "Shortbow",
                "Type": "Missile Weapon",
                "Count": "1",
                "InUse": "Yes",
                "DamageStep": 12,
                "Forged": "3"
            },
            {
                "ID": "ShortbowArrows",
                "Type": "Missile",
                "Count": "25",
                "InUse": "Yes"
            },
            {
                "ID": "AdventuringKitwithtent",
                "Type": "Adventuring",
                "Count": "1",
                "InUse": "Yes"
            }
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"},
        "Magic": [
            {
                "ID": "ED4BloodPeace"
            }
        ]
    },
    Thrundle :
    {
        "Basic": {
            "Name": "Thrundle",
            "Player": "Lars Gottlieb",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race" : "ED4Human",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "0",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": "0",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "1",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "12",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": "9",
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "3",
                "Increases": 0
            }
        },
        "LegendPoints": 45000,
        "Disciplines": [
            {
                "ID": "ED4Elementalist",
                "Circle": "5",
                "Order": "0",
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4StandardMatrix"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4WildernessSurvival"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4Climbing"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4AstralSight"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4EnhancedMatrix"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4EnhancedMatrix",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Elementalist 1",
                "DisciplineId": "ED4Elementalist",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "New free talent, Swapped",
                "UID": "c9625356-b39a-4cc1-87e2-ab840d4a4ddb",
                "Spell": "ED4EAirArmor",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "1",
                "ID": "ED4StandardMatrix",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Elementalist 1",
                "DisciplineId": "ED4Elementalist",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "1",
                "debug": "Stacking Free Matrix",
                "UID": "47ed24ac-450c-49cd-8aa1-cd0d244708b5",
                "Spell": "ED4EIceMaceandChain",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "2",
                "ID": "ED4Awareness",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Elementalist 1",
                "DisciplineId": "ED4Elementalist",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "14481c10-480e-478d-9990-a158fb345ed6",
                "Cost": 1300,
                "Step": 12
            },
            {
                "Order": "3",
                "ID": "ED4Patterncraft",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Elementalist 1",
                "DisciplineId": "ED4Elementalist",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "a2e76e3a-eec7-4764-b459-ad134e333a78",
                "Cost": 1300,
                "Step": 12
            },
            {
                "Order": "4",
                "ID": "ED4Spellcasting",
                "Rank": 7,
                "Freerank": 2,
                "Source": "Elementalist 1",
                "DisciplineId": "ED4Elementalist",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "08bfffc6-aee5-4527-a3dd-75218e53660a",
                "Cost": 5000,
                "Step": 14
            },
            {
                "Order": "5",
                "ID": "ED4ThreadWeavingElementalism",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Elementalist 1",
                "DisciplineId": "ED4Elementalist",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "9a9c6c35-9622-4b70-bda2-e9713e2dadb5",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "6",
                "ID": "ED4WoodSkin",
                "Rank": 6,
                "Freerank": "0",
                "Source": "Elementalist 1",
                "DisciplineId": "ED4Elementalist",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "969c5d12-0406-4090-a1fb-8b8ce7b2e0a2",
                "Cost": 3200,
                "Step": 12
            },
            {
                "Order": "7",
                "ID": "ED4StandardMatrix",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Elementalist 1",
                "DisciplineId": "ED4Elementalist",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "5c1852a5-86ec-4eac-8d95-068c28ed90f3",
                "Spell": "ED4EFireball",
                "Cost": 1900,
                "Step": 5
            },
            {
                "Order": "8",
                "ID": "ED4FireHeal",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Elementalist 2",
                "DisciplineId": "ED4Elementalist",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "bd2996af-ba84-434d-96d5-75c407e947cf",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "9",
                "ID": "ED4WildernessSurvival",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Elementalist 2",
                "DisciplineId": "ED4Elementalist",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "242d4fde-1fac-4bc7-96ee-51dca01e89e6",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "10",
                "ID": "ED4ElementalTongues",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Elementalist 3",
                "DisciplineId": "ED4Elementalist",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "bc1c6b8c-b045-41b7-8fb2-7dc111cbba97",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "11",
                "ID": "ED4Climbing",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Elementalist 3",
                "DisciplineId": "ED4Elementalist",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "0cfc9853-9ca8-4258-9a3e-9b8cd4555d80",
                "Cost": 1900,
                "Step": 9
            },
            {
                "Order": "12",
                "ID": "ED4ElementalHold",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Elementalist 4",
                "DisciplineId": "ED4Elementalist",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "9dcf6105-5734-4f71-acec-1e1a055ed088",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "13",
                "ID": "ED4AstralSight",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Elementalist 4",
                "DisciplineId": "ED4Elementalist",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "0406e188-28a8-469b-a30d-86062ca4d0f1",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "14",
                "ID": "ED4SummonElementalSpirits",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Elementalist 5",
                "DisciplineId": "ED4Elementalist",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "d0f1b7b1-5d3b-48f7-b146-b379e86935a8",
                "Cost": 3100,
                "Step": 12
            },
            {
                "Order": "15",
                "ID": "ED4EnhancedMatrix",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Elementalist 5",
                "DisciplineId": "ED4Elementalist",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "89730ecd-d4e2-489a-a392-a1f226fa529b",
                "Spell": "ED4EShieldWillow",
                "Cost": 3100,
                "Step": 5
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 9
            },
            {
                "ID": "ED4Artisan",
                "Category": "Artisan",
                "Name": "Cat's Cradle",
                "Rank": "0",
                "Freerank": "0",
                "Step": 6,
                "Cost": 0
            }
        ],
        "Spells": [
            {
                "ID": "ED4EAirArmor"
            },
            {
                "ID": "ED4EHeatFood"
            },
            {
                "ID": "ED4EIcySurface"
            },
            {
                "ID": "ED4EBlizzardSphere"
            },
            {
                "ID": "ED4EIceMaceandChain",
                "defaultEffect": 9
            },
            {
                "ID": "ED4EFireball",
                "defaultEffect": 11
            },
            {
                "ID": "ED4EShieldWillow"
            }
        ],
        "Equipment": [
            {
                "ID": "PaddedLeather",
                "Type": "Armor",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "HorrorFend",
                "Type": "Blood Charm",
                "Count": "1"
            }
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"},
        "Knacks": []
    },
    Baldine :
    {
        "Basic": {
            "Name": "Baldine",
            "Player": "Lars Gottlieb",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race" : "ED4Human",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "3",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "2",
                "Increases": 0
            }
        },
        "LegendPoints": 45000,
        "Disciplines": [
            {
                "ID": "ED4Warrior",
                "Circle": "5",
                "Order": "0",
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4ShieldBash"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4UnarmedCombat"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4Tactics"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4Fireblood"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4MomentumAttack"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4Versatility",
                "Rank": 3,
                "Freerank": "0",
                "Source": "Human",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Racial",
                "TalentPointsUseable": "True",
                "Step": 3,
                "Cost": 600
            },
            {
                "Order": "1",
                "ID": "ED4AvoidBlow",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1300
            },
            {
                "Order": "2",
                "ID": "ED4MeleeWeapons",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1300
            },
            {
                "Order": "3",
                "ID": "ED4ThreadWeavingWarWeaving",
                "Rank": 5,
                "Freerank": 2,
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 10,
                "Cost": 1600
            },
            {
                "Order": "4",
                "ID": "ED4TigerSpring",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 7,
                "Cost": 1900
            },
            {
                "Order": "5",
                "ID": "ED4WoodSkin",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "6",
                "ID": "ED4ShieldBash",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Warrior 1",
                "DisciplineId": "ED4Warrior",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "7",
                "ID": "ED4WoundBalance",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Warrior 2",
                "DisciplineId": "ED4Warrior",
                "Circle": "2",
                "Type": "Discipline",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "8",
                "ID": "ED4UnarmedCombat",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Warrior 2",
                "DisciplineId": "ED4Warrior",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "9",
                "ID": "ED4AirDance",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Warrior 3",
                "DisciplineId": "ED4Warrior",
                "Circle": "3",
                "Type": "Discipline",
                "Step": 7,
                "Cost": 1900
            },
            {
                "Order": "10",
                "ID": "ED4Tactics",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Warrior 3",
                "DisciplineId": "ED4Warrior",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 10,
                "Cost": 1900
            },
            {
                "Order": "11",
                "ID": "ED4WaterfallSlam",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Warrior 4",
                "DisciplineId": "ED4Warrior",
                "Circle": "4",
                "Type": "Discipline",
                "Step": 5,
                "Cost": 1900
            },
            {
                "Order": "12",
                "ID": "ED4Fireblood",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Warrior 4",
                "DisciplineId": "ED4Warrior",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "13",
                "ID": "ED4EarthSkin",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Warrior 5",
                "DisciplineId": "ED4Warrior",
                "Circle": "5",
                "Type": "Discipline",
                "Step": 11,
                "Cost": 3100
            },
            {
                "Order": "14",
                "ID": "ED4MomentumAttack",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Warrior 5",
                "DisciplineId": "ED4Warrior",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 9,
                "Cost": 1000
            },
            {
                "Order": "15",
                "ID": "ED4DisguiseSelf",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Versatility 1",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Versatility",
                "VersatilityRank": 0,
                "VersatilityTier": "1",
                "TalentPointsUseable": "True",
                "Step": 10
            },
            {
                "Order": "16",
                "ID": "ED4StealthyStride",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Versatility 2",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Versatility",
                "VersatilityRank": 1,
                "VersatilityTier": "1",
                "Step": 13
            },
            {
                "Order": "17",
                "ID": "ED4ThrowingWeapons",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Versatility 3",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Versatility",
                "VersatilityRank": 2,
                "VersatilityTier": "1",
                "Step": 6,
                "Cost": 0
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 6
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 7
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "ChainMail",
                "Type": "Armor",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "Spear",
                "Type": "Melee Weapon",
                "Count": "1",
                "DamageStep": 9
            },
            {
                "ID": "Footmans",
                "Type": "Shield",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "RationsTrail1week",
                "Type": "Provender",
                "Count": "4"
            },
            {
                "ID": "AdventuringKitwithtent",
                "Type": "Adventuring",
                "Count": "1"
            }
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"},
        "Knacks": [
            {
                "ID": "ED4MeleeWeaponsImprovisedWeapon",
                "Step": 11
            }
        ],
        "Versatility": [
            {
                "ID": "ED4DisguiseSelf",
                "Tier": "1"
            },
            {
                "ID": "ED4StealthyStride",
                "Tier": "1"
            },
            {
                "ID": "ED4ThrowingWeapons",
                "Tier": "1"
            }
        ]
    },
    Bleminda :
    {
        "Basic": {
            "Name": "Bleminda",
            "Player": "Lars Gottlieb",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race" : "ED4Human",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": "3",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "1",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "7",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "7",
                "Increases": 0
            }
        },
        "LegendPoints": 45000,
        "Disciplines": [
            {
                "ID": "ED4Thief",
                "Circle": "5",
                "Order": "0",
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4MeleeWeapons"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4SurpriseStrike"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4AvoidBlow"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4ThrowingWeapons"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4SecondWeapon"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4Versatility",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Human",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Racial",
                "TalentPointsUseable": "True",
                "Step": 0,
                "Cost": 0
            },
            {
                "Order": "1",
                "ID": "ED4DangerSense",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Thief 1",
                "DisciplineId": "ED4Thief",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "New free talent",
                "Step": 11,
                "Cost": 0
            },
            {
                "Order": "2",
                "ID": "ED4Awareness",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Thief 1",
                "DisciplineId": "ED4Thief",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1300
            },
            {
                "Order": "3",
                "ID": "ED4LockPicking",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Thief 1",
                "DisciplineId": "ED4Thief",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1300
            },
            {
                "Order": "4",
                "ID": "ED4PickingPockets",
                "Rank": 5,
                "Freerank": 2,
                "Source": "Thief 1",
                "DisciplineId": "ED4Thief",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1600
            },
            {
                "Order": "5",
                "ID": "ED4StealthyStride",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Thief 1",
                "DisciplineId": "ED4Thief",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "6",
                "ID": "ED4ThreadWeavingThiefWeaving",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Thief 1",
                "DisciplineId": "ED4Thief",
                "Circle": "1",
                "Type": "Discipline",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "7",
                "ID": "ED4MeleeWeapons",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Thief 1",
                "DisciplineId": "ED4Thief",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "TalentPointsUseable": "True",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "8",
                "ID": "ED4DisarmTrap",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Thief 2",
                "DisciplineId": "ED4Thief",
                "Circle": "2",
                "Type": "Discipline",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "9",
                "ID": "ED4SurpriseStrike",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Thief 2",
                "DisciplineId": "ED4Thief",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "10",
                "ID": "ED4Haggle",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Thief 3",
                "DisciplineId": "ED4Thief",
                "Circle": "3",
                "Type": "Discipline",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "11",
                "ID": "ED4AvoidBlow",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Thief 3",
                "DisciplineId": "ED4Thief",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "12",
                "ID": "ED4ConcealObject",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Thief 4",
                "DisciplineId": "ED4Thief",
                "Circle": "4",
                "Type": "Discipline",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "13",
                "ID": "ED4ThrowingWeapons",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Thief 4",
                "DisciplineId": "ED4Thief",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 11,
                "Cost": 1900
            },
            {
                "Order": "14",
                "ID": "ED4EngagingBanter",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Thief 5",
                "DisciplineId": "ED4Thief",
                "Circle": "5",
                "Type": "Discipline",
                "Step": 11,
                "Cost": 3100
            },
            {
                "Order": "15",
                "ID": "ED4SecondWeapon",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Thief 5",
                "DisciplineId": "ED4Thief",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "Step": 11,
                "Cost": 3100
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 7
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "ChainMail",
                "Type": "Armor",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "Broadsword",
                "Type": "Melee Weapon",
                "Count": "2",
                "DamageStep": 11
            },
            {
                "ID": "BoosterPotion",
                "Type": "Healing Aid",
                "Count": "5"
            },
            {
                "ID": "HealingPotion",
                "Type": "Healing Aid",
                "Count": "5"
            },
            {
                "ID": "LastChanceSalve",
                "Type": "Healing Aid",
                "Count": "1"
            }
        ],
        "Options" : {"FirstWoundFree" : "true", "Books" : "All"},
        "Knacks": [],
        "Versatility": []
    },
    Jirri :
    {
        "Basic": {
            "Name": "Jirri the Rose",
            "Player": "Jeppe Hansen",
            "Gender": "Female",
            "Age": "18",
            "Height": "Medium",
            "Weight": "",
            "Hair": "Brown",
            "Skin": "Light",
            "Eyes": "Blue",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race": "ED4Human",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "1",
                "Increases": 2
            },
            "Str": {
                "Buildpoints": "3",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "3",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "9",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": "9",
                "Increases": 3
            },
            "Cha": {
                "Buildpoints": 0,
                "Increases": 0
            }
        },
        "LegendPoints": 166700,
        "Disciplines": [
            {
                "ID": "ED4Weaponsmith",
                "Circle": "7",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4AvoidBlow"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4ShieldBash"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4Fireblood"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4Awareness"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4BattleShout"
                    },
                    {
                        "Circle": "6",
                        "ID": "ED4ResistTaunt"
                    },
                    {
                        "Circle": "7",
                        "ID": "ED4EarthSkin"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4Versatility",
                "Rank": 2,
                "Freerank": "0",
                "Source": "ED4HumanCadaverousMod",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Racial",
                "TalentPointsUseable": "True",
                "UID": "e66aad7d-2907-471d-ba3e-e8e67278656b",
                "Cost": 300,
                "Step": 2
            },
            {
                "Order": "1",
                "ID": "ED4Craftsman",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Weaponsmith 1",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "New free talent",
                "UID": "e53c8aab-d7c8-4132-810a-39c1763de586",
                "Cost": 0,
                "Step": 13
            },
            {
                "Order": "2",
                "ID": "ED4ForgeWeapon",
                "Rank": 7,
                "Freerank": 2,
                "Source": "Weaponsmith 1",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "edaab0a4-c8da-4e8b-92e7-dde67762e53b",
                "Cost": 5000,
                "Step": 13
            },
            {
                "Order": "3",
                "ID": "ED4ItemHistory",
                "Rank": 7,
                "Freerank": 2,
                "Source": "Weaponsmith 1",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "e8f6da31-f8bd-4cb9-ab79-e0c8062790e9",
                "Cost": 5000,
                "Step": 13
            },
            {
                "Order": "4",
                "ID": "ED4MeleeWeapons",
                "Rank": 7,
                "Freerank": 1,
                "Source": "Weaponsmith 1",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "9f8ecf8a-7435-4b29-9d2c-20fc672e3105",
                "Cost": 5200,
                "Step": 12
            },
            {
                "Order": "5",
                "ID": "ED4SteelThought",
                "Rank": 7,
                "Freerank": 1,
                "Source": "Weaponsmith 1",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "799f3a8b-8979-4d92-86e1-a18e93186350",
                "Cost": 5200,
                "Step": 15
            },
            {
                "Order": "6",
                "ID": "ED4ThreadWeavingThreadSmithing",
                "Rank": 7,
                "Freerank": 1,
                "Source": "Weaponsmith 1",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "f6784145-d29d-40d6-bf8f-a26fe944d45c",
                "Cost": 5200,
                "Step": 13
            },
            {
                "Order": "7",
                "ID": "ED4AvoidBlow",
                "Rank": 7,
                "Freerank": 1,
                "Source": "Weaponsmith 1",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "865d704f-bffe-4cf0-88f6-e683c0ae191c",
                "Cost": 5200,
                "Step": 12
            },
            {
                "Order": "8",
                "ID": "ED4Conversation",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Weaponsmith 2",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "450026c1-4db0-4a75-82a9-761e1e77cbd2",
                "Cost": 5300,
                "Step": 11
            },
            {
                "Order": "9",
                "ID": "ED4ShieldBash",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Weaponsmith 2",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "865d704f-bffe-4cf0-88f6-e683c0ae191c",
                "Cost": 5300,
                "Step": 13
            },
            {
                "Order": "10",
                "ID": "ED4SuppressCurse",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Weaponsmith 3",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "820f7cfe-12d2-47dc-9ea8-6cb2f86c7372",
                "Cost": 5300,
                "Step": 15
            },
            {
                "Order": "11",
                "ID": "ED4Fireblood",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Weaponsmith 3",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "865d704f-bffe-4cf0-88f6-e683c0ae191c",
                "Cost": 5300,
                "Step": 13
            },
            {
                "Order": "12",
                "ID": "ED4WoundBalance",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Weaponsmith 4",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "964782f7-0013-4917-a699-bd3585cd2801",
                "Cost": 5300,
                "Step": 13
            },
            {
                "Order": "13",
                "ID": "ED4Awareness",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Weaponsmith 4",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "865d704f-bffe-4cf0-88f6-e683c0ae191c",
                "Cost": 5300,
                "Step": 13
            },
            {
                "Order": "14",
                "ID": "ED4ForgeArmor",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Weaponsmith 5",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "bc2a92c1-3ce4-4d9a-83d7-449e7b54fc0d",
                "Cost": 8600,
                "Step": 13
            },
            {
                "Order": "15",
                "ID": "ED4BattleShout",
                "Rank": 4,
                "Freerank": 0,
                "Source": "Weaponsmith 5",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "865d704f-bffe-4cf0-88f6-e683c0ae191c",
                "Cost": 1800,
                "Step": 8
            },
            {
                "Order": "16",
                "ID": "ED4TemperFlesh",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Weaponsmith 6",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "6",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "bf4b3f05-9084-42a4-9d08-ecb561eb7095",
                "Cost": 1000,
                "Step": 11
            },
            {
                "Order": "17",
                "ID": "ED4ResistTaunt",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Weaponsmith 6",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "6",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "865d704f-bffe-4cf0-88f6-e683c0ae191c",
                "Cost": 8600,
                "Step": 15
            },
            {
                "Order": "18",
                "ID": "ED4SpotArmorFlaw",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Weaponsmith 7",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "7",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "6d0e1369-d8a5-4d6c-a35b-0059037572e1",
                "Cost": 1000,
                "Step": 9
            },
            {
                "Order": "19",
                "ID": "ED4EarthSkin",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Weaponsmith 7",
                "DisciplineId": "ED4Weaponsmith",
                "Circle": "7",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "865d704f-bffe-4cf0-88f6-e683c0ae191c",
                "Cost": 8600,
                "Step": 13
            },
            {
                "Order": "20",
                "ID": "ED4SpiritTalk",
                "Rank": 1,
                "Freerank": "0",
                "Source": "Versatility 1",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Versatility",
                "VersatilityRank": 0,
                "VersatilityTier": "1",
                "TalentPointsUseable": "True",
                "UID": "6b8d3604-9991-4343-b031-6177868cd81e",
                "Cost": 200,
                "Step": 7
            },
            {
                "Order": "21",
                "ID": "ED4AirSailing",
                "Rank": 1,
                "Freerank": 0,
                "Source": "Versatility 2",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Versatility",
                "VersatilityRank": 1,
                "VersatilityTier": "1",
                "UID": "fad5e0e2-bc4d-4fc1-95fb-7681e9b2c264",
                "Cost": 200,
                "Step": 9
            }
        ],
        "Knacks": [
            {
                "ID": "ED4ForgeArmorEfficientArmorForging",
                "Step": 13
            },
            {
                "ID": "ED4ForgeWeaponEfficientWeaponForging",
                "Step": 13
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            },
            {
                "ID": "ED4Artisan",
                "Category": "Artisan",
                "Name": "Rune Carving",
                "Rank": "3",
                "Freerank": "3",
                "Step": 7,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Ancient Weapons",
                "Rank": "2",
                "Freerank": "2",
                "Step": 8,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Botany",
                "Rank": "2",
                "Freerank": "2",
                "Step": 8,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Barsaive History",
                "Rank": "1",
                "Freerank": "1",
                "Step": 7,
                "Cost": 0
            },
            {
                "ID": "ED4Swimming",
                "Category": "General",
                "Name": "Not Selected",
                "Rank": "2",
                "Freerank": "2",
                "Step": 8,
                "Cost": 0
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Airship Construction",
                "Rank": "1",
                "Freerank": "0",
                "Step": 7,
                "Cost": 200
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "AdventuringKit",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "ArtisanTools",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "TravelersGarb",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Clothing"
            },
            {
                "ID": "RationsTrail1week",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Provender"
            },
            {
                "ID": "Silver",
                "Count": "100",
                "InUse": "Yes",
                "Type": "Valuable"
            },
            {
                "ID": "Broadsword",
                "Type": "Melee Weapon",
                "Count": "1",
                "InUse": "Yes",
                "Forged": "3",
                "DamageStep": 14
            },
            {
                "ID": "Spear",
                "Type": "Melee Weapon",
                "Count": "1",
                "InUse": "Yes",
                "Forged": "4",
                "DamageStep": 14
            },
            {
                "ID": "Dagger",
                "Type": "Melee Weapon",
                "Count": "1",
                "InUse": "Yes",
                "DamageStep": 8
            },
            {
                "ID": "Knife",
                "Type": "Melee Weapon",
                "Count": "1",
                "InUse": "Yes",
                "DamageStep": 7
            },
            {
                "ID": "ArtisanToolsForge",
                "Type": "Adventuring",
                "Count": "1",
                "InUse": "Yes"
            },
            {
                "ID": "ChainMail",
                "Type": "Armor",
                "Count": "1",
                "InUse": "Yes",
                "PhForge": "1"
            },
            {
                "ID": "NHShieldofSleed",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "3",
                "Cost": 2600
            }
        ],
        "Options": {
            "Edition": "ED4",
            "Attributepoints": "40",
            "MaxAttributeIncrease": "3",
            "Talentpoints": "8",
            "Spellpoints": "PERstep",
            "KnowledgeSkillpoints": "2",
            "ArtisanSkillpoints": "1",
            "SpeakSkillpoints": "2",
            "ReadSkillpoints": "1",
            "FreeSkillpoints": "8",
            "BuyMoreOptionalMatrices": "false",
            "FreeMatricesStack": "false",
            "BuyMatricesPerDiscipline": "true",
            "CasterCircle5Bonus": "false",
            "SpellsCostLP": "4ed",
            "FirstWoundFree": "true",
            "Books": "All",
            "StepDice": "ED4",
            "SkillFreeRanksLimit": "Novice",
            "Durability": "Best",
            "AllTalentsToAdvance": "No",
            "AttributeIncrease": "Costs"
        },
        "Versatility": [
            {
                "ID": "ED4SpiritTalk",
                "Tier": "1"
            },
            {
                "ID": "ED4AirSailing",
                "Tier": "1"
            }
        ]
    },
    Shera: 
    {
        "Basic": {
            "Name": "Shera The Flexible caster ",
            "Player": "",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race": "ED4Human",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "-1",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": "-2",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "15",
                "Increases": 1
            },
            "Wil": {
                "Buildpoints": "12",
                "Increases": 2
            },
            "Cha": {
                "Buildpoints": "9",
                "Increases": 0
            }
        },
        "LegendPoints": 53700,
        "Disciplines": [
            {
                "ID": "ED4Nethermancer",
                "Circle": "5",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4StandardMatrix"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4CommandNightflyer"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4AvoidBlow"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4StealthyStride"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4EnhancedMatrix"
                    }
                ]
            },
            {
                "ID": "ED4Wizard",
                "Circle": "6",
                "Order": "1",
                "StartedAt": 5,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4ArcaneMutterings"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4BookMemory"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4ItemHistory"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4Awareness"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4EvidenceAnalysis"
                    },
                    {
                        "Circle": "6",
                        "ID": "Empty"
                    }
                ]
            }
        ],
        "Paths":
        [
            {
                "ID" : "ED4Scholar",
                "Rank" : "5",
                "Linked" : "ED4Wizard",
                "GrantedTalents" :
                ["ED4ExpansiveExpertise", "ED4ReadandWriteLanguage", "Empty"]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4Versatility",
                "Rank": 1,
                "Freerank": "0",
                "Source": "Human",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Racial",
                "TalentPointsUseable": "True",
                "UID": "08705932-1994-41cd-80f4-a691d8c17130",
                "Cost": 100,
                "Step": 1
            },
            {
                "Order": "1",
                "ID": "ED4EnhancedMatrix",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Nethermancer 1, Wizard 1",
                "DisciplineId": "ED4Nethermancer, ED4Wizard",
                "Circle": "1, 1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "Stacking Free Matrix, Swapped",
                "Debug": "Merged Free Talent",
                "UID": "7d4d1722-3554-4e42-baea-07887652c306",
                "Cost": 0,
                "Step": 6,
                "Spell": "ED4NSoulArmor"
            },
            {
                "Order": "2",
                "ID": "ED4StandardMatrix",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Nethermancer 1, Wizard 1",
                "DisciplineId": "ED4Nethermancer, ED4Wizard",
                "Circle": "1, 1",
                "Type": "Free",
                "FreeTalent": "1",
                "debug": "Stacking Free Matrix",
                "Debug": "Merged Free Talent",
                "UID": "44d723da-0249-46fc-bfa9-05f819167964",
                "Cost": 0,
                "Step": 6,
                "Spell": "ED4NAstralSpear"
            },
            {
                "Order": "3",
                "ID": "ED4AstralSight",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Nethermancer 1, Wizard 2",
                "DisciplineId": "ED4Nethermancer, ED4Wizard",
                "Circle": "1, 2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "27c3c822-17a6-4ed5-be42-e8020bb1629f",
                "Cost": 1300,
                "Step": 13
            },
            {
                "Order": "4",
                "ID": "ED4Frighten",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Nethermancer 1",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "e0aeb44a-2e9b-469c-95d1-885b78a3f4eb",
                "Cost": 1300,
                "Step": 13
            },
            {
                "Order": "5",
                "ID": "ED4Patterncraft",
                "Rank": 7,
                "Freerank": 2,
                "Source": "Nethermancer 1, Wizard 1",
                "DisciplineId": "ED4Nethermancer, ED4Wizard",
                "Circle": "1, 1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "20d6acd3-dbe0-422e-8604-b21004394b05",
                "Cost": 1600,
                "Step": 13
            },
            {
                "Order": "6",
                "ID": "ED4Spellcasting",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Nethermancer 1, Wizard 1",
                "DisciplineId": "ED4Nethermancer, ED4Wizard",
                "Circle": "1, 1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "Debug": "undefined Thread Item Merge Thread Item Merge",
                "UID": "c3ebb15a-2f84-48d8-9081-eaf8a35d04e1",
                "Cost": 1900,
                "Step": 17
            },
            {
                "Order": "7",
                "ID": "ED4ThreadWeavingNethermancy",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Nethermancer 1",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "Debug": "undefined Thread Item Merge",
                "UID": "bb9dc6a3-1279-4991-a85d-25d019d7e0a0",
                "Cost": 1900,
                "Step": 15
            },
            {
                "Order": "8",
                "ID": "ED4StandardMatrix",
                "Rank": "6",
                "Freerank": "0",
                "Source": "Nethermancer 1",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 3200,
                "Step": 6,
                "Spell": "ED4NSpiritGrip"
            },
            {
                "Order": "9",
                "ID": "ED4SteelThought",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Nethermancer 2, Wizard 4",
                "DisciplineId": "ED4Nethermancer, ED4Wizard",
                "Circle": "2, 4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "afb19492-7025-4235-873e-d64b0fa426d6",
                "Cost": 1900,
                "Step": 13
            },
            {
                "Order": "10",
                "ID": "ED4CommandNightflyer",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Nethermancer 2",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 0,
                "Step": 8
            },
            {
                "Order": "11",
                "ID": "ED4SpiritTalk",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Nethermancer 3",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "f5a0b234-bfc3-4b31-89df-4ecc5aeac22c",
                "Cost": 1900,
                "Step": 13
            },
            {
                "Order": "12",
                "ID": "ED4AvoidBlow",
                "Rank": "5",
                "Freerank": "0",
                "Source": "Nethermancer 3",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 1900,
                "Step": 9
            },
            {
                "Order": "13",
                "ID": "ED4SpiritHold",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Nethermancer 4",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "abc85d84-6a76-474a-aa86-54a197b9f261",
                "Cost": 1900,
                "Step": 13
            },
            {
                "Order": "14",
                "ID": "ED4StealthyStride",
                "Rank": "5",
                "Freerank": "0",
                "Source": "Nethermancer 4",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 1900,
                "Step": 9
            },
            {
                "Order": "15",
                "ID": "ED4SummonAllySpirits",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Nethermancer 5",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "be42b311-a4b8-44b9-a9ea-e24a9a11ff4f",
                "Cost": 3100,
                "Step": 13
            },
            {
                "Order": "16",
                "ID": "ED4EnhancedMatrix",
                "Rank": "5",
                "Freerank": "0",
                "Source": "Nethermancer 5",
                "DisciplineId": "ED4Nethermancer",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 3100,
                "Step": 5,
                "Spell": "ED4WBedazzlingDisplayofLogicalAnalysis"
            },
            {
                "Order": "17",
                "ID": "ED4DispelMagic",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "fd76bd04-203d-496e-8f05-59c50807758d",
                "Cost": 3100,
                "Step": 13
            },
            {
                "Order": "18",
                "ID": "ED4Research",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "8e8c2f23-a9f5-4a6a-a137-e858ecbbbd73",
                "Cost": 3100,
                "Step": 13
            },
            {
                "Order": "19",
                "ID": "ED4ThreadWeavingWizardry",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "Debug": "undefined Thread Item Merge",
                "UID": "e83d0aa0-8cec-4550-9184-51fbf233d942",
                "Cost": 3100,
                "Step": 15
            },
            {
                "Order": "20",
                "ID": "ED4ArcaneMutterings",
                "Rank": "5",
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 1,
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 3100,
                "Step": 12
            },
            {
                "Order": "21",
                "ID": "ED4BookMemory",
                "Rank": "5",
                "Freerank": "0",
                "Source": "Wizard 2",
                "DisciplineId": "ED4Wizard",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 1,
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 3100,
                "Step": 13
            },
            {
                "Order": "22",
                "ID": "ED4TenaciousWeave",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Wizard 3",
                "DisciplineId": "ED4Wizard",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "3c6ac3e7-a983-4812-96f4-f0dadc01ce2d",
                "Cost": 3100,
                "Step": 13
            },
            {
                "Order": "23",
                "ID": "ED4ItemHistory",
                "Rank": "5",
                "Freerank": "0",
                "Source": "Wizard 3",
                "DisciplineId": "ED4Wizard",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 1,
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 3100,
                "Step": 13
            },
            {
                "Order": "24",
                "ID": "ED4Awareness",
                "Rank": "5",
                "Freerank": "0",
                "Source": "Wizard 4",
                "DisciplineId": "ED4Wizard",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 1,
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 3100,
                "Step": 13
            },
            {
                "Order": "25",
                "ID": "ED4AstralInterference",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Wizard 5",
                "DisciplineId": "ED4Wizard",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "9fec1c6b-9869-4629-b6b7-5df99339c21d",
                "Cost": 4900,
                "Step": 13
            },
            {
                "Order": "26",
                "ID": "ED4EvidenceAnalysis",
                "Rank": "5",
                "Freerank": "0",
                "Source": "Wizard 5",
                "DisciplineId": "ED4Wizard",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 1,
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 4900,
                "Step": 13
            },
            {
                "Order": "27",
                "ID": "ED4Willforce",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 6",
                "DisciplineId": "ED4Wizard",
                "Circle": "6",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "Debug": "undefined Thread Item Merge",
                "UID": "445d3729-9f1d-4b6b-835e-5bd630853a00",
                "Cost": 0,
                "Step": 10
            },
            {
                "Order": "28",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 6",
                "DisciplineId": "ED4Wizard",
                "Circle": "6",
                "Type": "Optional",
                "UID": "bd263d27-d889-45f4-9c7c-a402bc07a2f5",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "29",
                "ID": "ED4ThreadWeavingShamanism",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Versatility 1",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Versatility",
                "VersatilityRank": 0,
                "VersatilityTier": "1",
                "TalentPointsUseable": "True",
                "Debug": "undefined Thread Item Merge",
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 3100,
                "Step": 15
            },
            {
                "Order": "30",
                "ID": "ED4StandardMatrix",
                "Rank": "6",
                "Freerank": "0",
                "Source": "Fastoon’s Very Impressive Staff",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 0,
                "Step": 6,
                "Spell": "ED4SAlarm"
            },
            {
                "Order": "31",
                "ID": "ED4StandardMatrix",
                "Rank": "6",
                "Freerank": "0",
                "Source": "Talisman Statue",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "UID": "f6b35468-963a-41cd-a6d5-39fb2ab61c13",
                "Cost": 0,
                "Step": 6,
                "Spell": "ED4SOtterSwim"
            }
        ],
        "Knacks": [],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 9
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 10
            },
            {"ID" : "ED4Knowledge",         "Name" : "Horror Lore",         "Rank" : "5", "Freerank" : "1", "Category" : "Knowledge"}

        ],
        "Spells": [
            {
                "ID": "ED4NSoulArmor"
            },
            {
                "ID": "ED4NShadowMeld"
            },
            {
                "ID": "ED4NAstralSpear"
            },
            {
                "ID": "ED4NBoneCircle"
            },
            {
                "ID": "ED4NEtherealDarkness"
            },
            {
                "ID": "ED4NExperienceDeath"
            },
            {
                "ID": "ED4NSpiritDart"
            },
            {
                "ID": "ED4NSpiritGrip"
            },
            {
                "ID": "ED4NAspectoftheFogGhost"
            },
            {
                "ID": "ED4NChillingCircle"
            },
            {
                "ID": "ED4NShadowsWhisper"
            },
            {
                "ID": "ED4WBedazzlingDisplayofLogicalAnalysis"
            },
            {
                "ID": "ED4WMindDagger"
            },
            {
                "ID": "ED4WSpeedReading"
            },
            {
                "ID": "ED4WSeekingSight"
            },
            {
                "ID": "ED4WBaselineSubtraction"
            },
            {
                "ID": "ED4WCombatFury"
            },
            {
                "ID": "ED4SAlarm"
            },
            {
                "ID": "ED4SOtterSwim"
            },
            {
                "ID": "ED4SHerosFeast"
            },
            {
                "ID": "ED4SInsectRepellent"
            }
        ],
        "Equipment": [
            {
                "ID": "AdventuringKit",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "ArtisanTools",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "Dagger",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Melee Weapon",
                "DamageStep": 6
            },
            {
                "ID": "TravelersGarb",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Clothing"
            },
            {
                "ID": "RationsTrail1week",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Provender"
            },
            {
                "ID": "Silver",
                "Count": "100",
                "InUse": "Yes",
                "Type": "Valuable"
            },
            {
                "ID": "ED4CrystalBulwark",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4FastoonsVeryImpressiveStaff",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4TalismanStatue",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            }
        ],
        "Options": {
            "Edition": "ED4",
            "Attributepoints": "33",
            "MaxAttributeIncrease": "3",
            "Talentpoints": "8",
            "Spellpoints": "PERstep",
            "KnowledgeSkillpoints": "2",
            "ArtisanSkillpoints": "1",
            "SpeakSkillpoints": "2",
            "ReadSkillpoints": "1",
            "FreeSkillpoints": "8",
            "BuyMoreOptionalMatrices": "false",
            "FreeMatricesStack": "false",
            "BuyMatricesPerDiscipline": "true",
            "CasterCircle5Bonus": "false",
            "SpellsCostLP": "2Fib",
            "FirstWoundFree": "false",
            "Books": "Official",
            "StepDice": "ED4",
            "SkillFreeRanksLimit": "Novice",
            "Durability": "Best",
            "AllTalentsToAdvance": "No",
            "AttributeIncrease": "Costs"
        },
        "Versatility": [
            {
                "ID": "ED4ThreadWeavingShamanism",
                "Tier": "1"
            }
        ]
    },
    ChWoppa:
    {
        "Basic": {
            "Name": "Ch'Whoppa",
            "Player": "Test",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race": "ED4Tskrang",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "15",
                "Increases": 3
            },
            "Str": {
                "Buildpoints": "3",
                "Increases": 3
            },
            "Tou": {
                "Buildpoints": "0",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "0",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Cha": { 
                "Buildpoints": "7",
                "Increases": 3
            }
        },
        "LegendPoints": 300000,
        "Disciplines": [
            {
                "ID": "ED4Swordmaster",
                "Circle": "6",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4WinningSmile"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4DangerSense"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4ImpressiveDisplay"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4TigerSpring"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4GracefulExit"
                    },
                    {
                        "Circle": "6",
                        "ID": "ED4SpotArmorFlaw"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4AvoidBlow",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "dd006207-38f8-4eaf-9c7b-faa841eac443",
                "Cost": 1300,
                "Step": 14
            },
            {
                "Order": "1",
                "ID": "ED4Maneuver",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "fc2d70b0-d5bc-426a-a0bf-826f8da437ac",
                "Cost": 1300,
                "Step": 14
            },
            {
                "Order": "2",
                "ID": "ED4MeleeWeapons",
                "Rank": 7,
                "Freerank": 2,
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "263d1d1b-baa9-47e8-823c-9a2e91abd11a",
                "Cost": 5000,
                "Step": 16
            },
            {
                "Order": "3",
                "ID": "ED4Taunt",
                "Rank": 7,
                "Freerank": "0",
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "8182a49a-4c53-4518-a9f5-abc70f70614b",
                "Cost": 5300,
                "Step": 15
            },
            {
                "Order": "4",
                "ID": "ED4ThreadWeavingWeaponWeaving",
                "Rank": 7,
                "Freerank": "0",
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "f1c9bd65-9e1c-4495-aebe-9e6ccd53bdd1",
                "Cost": 5300,
                "Step": 12
            },
            {
                "Order": "5",
                "ID": "ED4WinningSmile",
                "Rank": 7,
                "Freerank": "0",
                "Source": "Swordmaster 1",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "f5c525f8-bc4c-423c-9031-ed205df99836",
                "Cost": 5300,
                "Step": 15
            },
            {
                "Order": "6",
                "ID": "ED4FirstImpression",
                "Rank": 8,
                "Freerank": 0,
                "Source": "Swordmaster 2",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "872216e4-6f1d-4b1a-b700-6c3c9607171d",
                "Cost": 8700,
                "Step": 16
            },
            {
                "Order": "7",
                "ID": "ED4DangerSense",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Swordmaster 2",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "f5c525f8-bc4c-423c-9031-ed205df99836",
                "Cost": 1900,
                "Step": 14
            },
            {
                "Order": "8",
                "ID": "ED4Riposte",
                "Rank": 8,
                "Freerank": 0,
                "Source": "Swordmaster 3",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "772bd126-de47-4558-aca5-ed676515cb9b",
                "Cost": 8700,
                "Step": 17
            },
            {
                "Order": "9",
                "ID": "ED4ImpressiveDisplay",
                "Rank": 7,
                "Freerank": 0,
                "Source": "Swordmaster 3",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "f5c525f8-bc4c-423c-9031-ed205df99836",
                "Cost": 5300,
                "Step": 7
            },
            {
                "Order": "10",
                "ID": "ED4HearteningLaugh",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Swordmaster 4",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "40206b74-e3f1-40ea-83e4-87d70b83350b",
                "Cost": 3200,
                "Step": 14
            },
            {
                "Order": "11",
                "ID": "ED4TigerSpring",
                "Rank": 4,
                "Freerank": 0,
                "Source": "Swordmaster 4",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "f5c525f8-bc4c-423c-9031-ed205df99836",
                "Cost": 1100,
                "Step": 13
            },
            {
                "Order": "12",
                "ID": "ED4SecondWeapon",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Swordmaster 5",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "33e24b79-31c5-443d-a4fa-e6c04eb2b875",
                "Cost": 5200,
                "Step": 15
            },
            {
                "Order": "13",
                "ID": "ED4GracefulExit",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Swordmaster 5",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "f5c525f8-bc4c-423c-9031-ed205df99836",
                "Cost": 5200,
                "Step": 14
            },
            {
                "Order": "14",
                "ID": "ED4Disarm",
                "Rank": 3,
                "Freerank": 0,
                "Source": "Swordmaster 6",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "6",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "f3fe2696-ec4d-45ff-ae46-534746219a75",
                "Cost": 1000,
                "Step": 12
            },
            {
                "Order": "15",
                "ID": "ED4SpotArmorFlaw",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Swordmaster 6",
                "DisciplineId": "ED4Swordmaster",
                "Circle": "6",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "f5c525f8-bc4c-423c-9031-ed205df99836",
                "Cost": 5200,
                "Step": 11
            },
            {
                "Order": "16",
                "ID": "ED4PTailDancerChtard",
                "Rank": 1,
                "Freerank": "0",
                "Source": "Tail Dancer (Ch'Tard)",
                "Type": "PathTalent",
                "TalentPointsUseable": "false",
                "UID": "504bdbc6-3678-47ec-ac36-ed768fa77419",
                "Cost": 0,
                "Step": 1
            },
            {
                "Order": "17",
                "ID": "Empty",
                "Rank": 0,
                "Freerank": 0,
                "Source": "Tail Dancer (Ch'Tard) 1",
                "PathID": "ED4TailDancerChtard",
                "PathRank": 1,
                "Type": "PathGrantedTalent",
                "UID": "4083b63c-8e83-45fd-9c07-b7946ee80c2a",
                "Cost": 0,
                "Step": "-"
            }
        ],
        "Knacks": [
            {
                "ID": "Empty"
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 6
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 7
            },
            {
                "ID": "ED4Artisan",
                "Category": "Artisan",
                "Name": "Dancing",
                "Rank": "5",
                "Freerank": "2",
                "Step": 13,
                "Cost": 2600
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "AdventuringKit",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "ArtisanTools",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "Dagger",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Melee Weapon",
                "DamageStep": 9
            },
            {
                "ID": "TravelersGarb",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Clothing"
            },
            {
                "ID": "RationsTrail1week",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Provender"
            },
            {
                "ID": "Silver",
                "Count": "100",
                "InUse": "Yes",
                "Type": "Valuable"
            },
            {
                "ID": "ED4KellimarsArmorOfRosePetals",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "PhForge": "5",
                "MyForge": "5",
                "Rank": "10"
            },
            {
                "ID": "ED4Purifier",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Forged": "5",
                "Rank": "10",
                "DamageStep": 22,
                "Cost": 97900
            },
            {
                "ID": "ED4KegelsSword",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Forged": "5",
                "Rank": "8",
                "DamageStep": 20,
                "Cost": 22800
            }
        ],
        "Options": {
            "Edition": "ED4",
            "Attributepoints": "25",
            "MaxAttributeIncrease": "3",
            "Talentpoints": "8",
            "Spellpoints": "PERstep",
            "KnowledgeSkillpoints": "2",
            "ArtisanSkillpoints": "1",
            "SpeakSkillpoints": "2",
            "ReadSkillpoints": "1",
            "FreeSkillpoints": "8",
            "BuyMoreOptionalMatrices": "false",
            "FreeMatricesStack": "false",
            "BuyMatricesPerDiscipline": "true",
            "CasterCircle5Bonus": "false",
            "SpellsCostLP": "4ed",
            "FirstWoundFree": "false",
            "Books": "All",
            "StepDice": "ED4",
            "SkillFreeRanksLimit": "Novice",
            "RangedAggressive": "false",
            "Durability": "Best",
            "AllTalentsToAdvance": "No",
            "AttributeIncrease": "Costs"
        },
        "Paths": [
            {
                "ID": "ED4TailDancerShivoavara",
                "Rank": 1,
                "Linked" : "ED4Swordmaster",
                "GrantedTalents": [
                    "Empty"
                ]
            }
        ]
    },
    Kerrunch : 
    {
        "Basic": {
            "Name": "Kerrunch the Complete Obsidiman",
            "Player": "Test",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race": "ED4Obsidiman",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "7",
                "Increases": 3
            },
            "Str": {
                "Buildpoints": "7",
                "Increases": 3
            },
            "Tou": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "5",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": "1",
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "5",
                "Increases": 0
            }
        },
        "LegendPoints": 120000,
        "Disciplines": [
            {
                "ID": "ED4Gauntlet",
                "Circle": "5",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4WoodSkin"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4DangerSense"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4Awareness"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4BattleShout"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4WaterfallSlam"
                    }
                ]
            },
            {
                "ID": "ED4Monk",
                "Circle": "4",
                "Order": "1",
                "StartedAt": 5,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4Sprint"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4Maneuver"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4BookMemory"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4SpeakLanguage"
                    }
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4AvoidBlow",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Gauntlet 1, Monk 1",
                "DisciplineId": "ED4Gauntlet, ED4Monk",
                "Circle": "1, 1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "dc9db9a9-c0fa-4da7-92e1-e9d248fabe25",
                "Cost": 1300,
                "Step": 12
            },
            {
                "Order": "1",
                "ID": "ED4BodyControl",
                "Rank": 5,
                "Freerank": 3,
                "Source": "Gauntlet 1, Monk 1",
                "DisciplineId": "ED4Gauntlet, ED4Monk",
                "Circle": "1, 1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "3ce0db6f-b75e-49fd-b860-188ac52944c6",
                "Cost": 1300,
                "Step": 23
            },
            {
                "Order": "2",
                "ID": "ED4ThreadWeavingGauntletWeaving",
                "Rank": 5,
                "Freerank": 2,
                "Source": "Gauntlet 1",
                "DisciplineId": "ED4Gauntlet",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "288d838e-ff88-4d66-8a52-1ac6ae662bbc",
                "Cost": 1600,
                "Step": 11
            },
            {
                "Order": "3",
                "ID": "ED4UnarmedCombat",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Gauntlet 1, Monk 1",
                "DisciplineId": "ED4Gauntlet, ED4Monk",
                "Circle": "1, 1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "d9139d4a-1a53-4670-8d8a-fac9b21d39af",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "4",
                "ID": "ED4WoundBalance",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Gauntlet 1, Monk 3",
                "DisciplineId": "ED4Gauntlet, ED4Monk",
                "Circle": "1, 3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "d0274057-0bba-43f0-b518-809ab50ef585",
                "Cost": 1900,
                "Step": 16
            },
            {
                "Order": "5",
                "ID": "ED4WoodSkin",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Gauntlet 1",
                "DisciplineId": "ED4Gauntlet",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "4a11fef1-381e-4761-a2a9-d60631578c70",
                "Cost": 1900,
                "Step": 11
            },
            {
                "Order": "6",
                "ID": "ED4DeliberateAssault",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Gauntlet 2",
                "DisciplineId": "ED4Gauntlet",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "445799bc-1502-4367-861c-cc6db22b5df6",
                "Cost": 1900,
                "Step": 5
            },
            {
                "Order": "7",
                "ID": "ED4DangerSense",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Gauntlet 2",
                "DisciplineId": "ED4Gauntlet",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "4a11fef1-381e-4761-a2a9-d60631578c70",
                "Cost": 1900,
                "Step": 12
            },
            {
                "Order": "8",
                "ID": "ED4SteelThought",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Gauntlet 3",
                "DisciplineId": "ED4Gauntlet",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "e3b51f71-51db-41d7-be7e-079638f6bd69",
                "Cost": 1900,
                "Step": 10
            },
            {
                "Order": "9",
                "ID": "ED4Awareness",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Gauntlet 3, Monk 2",
                "DisciplineId": "ED4Gauntlet, ED4Monk",
                "Circle": "3, 2",
                "Type": "Discipline",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "4a11fef1-381e-4761-a2a9-d60631578c70",
                "Cost": 1900,
                "Step": 11
            },
            {
                "Order": "10",
                "ID": "ED4StudiedCounter",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Gauntlet 4",
                "DisciplineId": "ED4Gauntlet",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "ebb3d099-5ad8-465d-9e83-4c4012dfa216",
                "Cost": 1900,
                "Step": 11
            },
            {
                "Order": "11",
                "ID": "ED4BattleShout",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Gauntlet 4",
                "DisciplineId": "ED4Gauntlet",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "4a11fef1-381e-4761-a2a9-d60631578c70",
                "Cost": 1900,
                "Step": 11
            },
            {
                "Order": "12",
                "ID": "ED4EarthSkin",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Gauntlet 5",
                "DisciplineId": "ED4Gauntlet",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "21541aca-9951-4713-b104-737aead5ab51",
                "Cost": 3100,
                "Step": 11
            },
            {
                "Order": "13",
                "ID": "ED4WaterfallSlam",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Gauntlet 5",
                "DisciplineId": "ED4Gauntlet",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "4a11fef1-381e-4761-a2a9-d60631578c70",
                "Cost": 3100,
                "Step": 5
            },
            {
                "Order": "14",
                "ID": "ED4Etiquette",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Monk 1",
                "DisciplineId": "ED4Monk",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "New free talent",
                "UID": "33efcdbc-bfa6-4fc3-9548-fdc1dab02f55",
                "Cost": 0,
                "Step": 10
            },
            {
                "Order": "15",
                "ID": "ED4Research",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Monk 1",
                "DisciplineId": "ED4Monk",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "2e85f350-0c63-4007-b291-b9946660885b",
                "Cost": 3100,
                "Step": 11
            },
            {
                "Order": "16",
                "ID": "ED4ThreadWeavingMeditationWeaving",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Monk 1",
                "DisciplineId": "ED4Monk",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "78e5a6f0-6ed4-44c9-b481-5ad2e493056c",
                "Cost": 3100,
                "Step": 11
            },
            {
                "Order": "17",
                "ID": "ED4Sprint",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Monk 1",
                "DisciplineId": "ED4Monk",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 1,
                "UID": "2f756227-aab1-436c-a54c-36060c21e47e",
                "Cost": 3100,
                "Step": 5
            },
            {
                "Order": "18",
                "ID": "ED4Maneuver",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Monk 2",
                "DisciplineId": "ED4Monk",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 1,
                "UID": "2f756227-aab1-436c-a54c-36060c21e47e",
                "Cost": 3100,
                "Step": 12
            },
            {
                "Order": "19",
                "ID": "ED4BookMemory",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Monk 3",
                "DisciplineId": "ED4Monk",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 1,
                "UID": "2f756227-aab1-436c-a54c-36060c21e47e",
                "Cost": 3100,
                "Step": 10
            },
            {
                "Order": "20",
                "ID": "ED4WholenessOfBody",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Monk 4",
                "DisciplineId": "ED4Monk",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 1,
                "UID": "b4ece510-307b-40e2-8f71-fad2d61ae6a9",
                "Cost": 3100,
                "Step": 8
            },
            {
                "Order": "21",
                "ID": "ED4SpeakLanguage",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Monk 4",
                "DisciplineId": "ED4Monk",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 1,
                "UID": "2f756227-aab1-436c-a54c-36060c21e47e",
                "Cost": 3100,
                "Step": 11
            },
            {
                "Order": "22",
                "ID": "ED4PBrotherofStone",
                "Rank": "5",
                "Freerank": 0,
                "Source": "Brother of Stone",
                "PathID": "ED4BrotherofStone",
                "Type": "PathTalent",
                "TalentPointsUseable": "false",
                "UID": "49142fe0-0a07-45e9-b37e-36f7afe3fd2e",
                "Cost": 8100,
                "Step": 5
            },
            {
                "Order": "23",
                "ID": "ED4EarthBond",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Brother of Stone 1",
                "PathID": "ED4BrotherofStone",
                "PathRank": 1,
                "Type": "PathGrantedTalent",
                "UID": "2f756227-aab1-436c-a54c-36060c21e47e",
                "Cost": 3100,
                "Step": 10
            },
            {
                "Order": "24",
                "ID": "ED4TrueSight",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Brother of Stone 2",
                "PathID": "ED4BrotherofStone",
                "PathRank": 2,
                "Type": "PathGrantedTalent",
                "UID": "2f756227-aab1-436c-a54c-36060c21e47e",
                "Cost": 3100,
                "Step": 5
            },
            {
                "Order": "25",
                "ID": "ED4AstralSight",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Brother of Stone 3",
                "PathID": "ED4BrotherofStone",
                "PathRank": 3,
                "Type": "PathGrantedTalent",
                "UID": "2f756227-aab1-436c-a54c-36060c21e47e",
                "Cost": 3100,
                "Step": 11
            },
            {
                "Order": "26",
                "ID": "ED4ItemHistory",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Brother of Stone 4",
                "PathID": "ED4BrotherofStone",
                "PathRank": 4,
                "Type": "PathGrantedTalent",
                "UID": "2f756227-aab1-436c-a54c-36060c21e47e",
                "Cost": 3100,
                "Step": 11
            },
            {
                "Order": "27",
                "ID": "ED4EarthWalk",
                "Rank": 5,
                "Freerank": 0,
                "Source": "Brother of Stone 5",
                "PathID": "ED4BrotherofStone",
                "PathRank": 5,
                "Type": "PathGrantedTalent",
                "UID": "2f756227-aab1-436c-a54c-36060c21e47e",
                "Cost": 5000,
                "Step": 5
            },
            {
                "Order": "28",
                "ID": "ED4StealthyStride",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Sindre's Tattoos",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "e31bc48c-c500-4f7a-a3fb-4807ad76a0d6",
                "Cost": 0,
                "Step": 10
            }
        ],
        "Knacks": [
            {
                "ID": "ED4UnarmedCombatBodyBlade",
                "Step": 16
            },
            {
                "ID": "ED4PBrotherofSStabilityofStone",
                "Step": "-"
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 7
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "Obsidiman Lore",
                "Rank": "5",
                "Freerank": "0",
                "Step": 11,
                "Cost": 3100
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "AdventuringKit",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "ArtisanTools",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "Dagger",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Melee Weapon",
                "DamageStep": 15
            },
            {
                "ID": "TravelersGarb",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Clothing"
            },
            {
                "ID": "RationsTrail1week",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Provender"
            },
            {
                "ID": "Silver",
                "Count": "100",
                "InUse": "Yes",
                "Type": "Valuable"
            },
            {
                "ID": "ED4BracersOfObsidimanStrength",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ESFSindreTattoos",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 13600
            }
        ],
        "Options": {
            "Edition": "ED4",
            "Attributepoints": "25",
            "MaxAttributeIncrease": "3",
            "Talentpoints": "8",
            "Spellpoints": "PERstep",
            "KnowledgeSkillpoints": "2",
            "ArtisanSkillpoints": "1",
            "SpeakSkillpoints": "2",
            "ReadSkillpoints": "1",
            "FreeSkillpoints": "8",
            "BuyMoreOptionalMatrices": "false",
            "FreeMatricesStack": "false",
            "BuyMatricesPerDiscipline": "true",
            "CasterCircle5Bonus": "false",
            "SpellsCostLP": "4ed",
            "FirstWoundFree": "false",
            "Books": "All",
            "StepDice": "ED4",
            "SkillFreeRanksLimit": "Novice",
            "RangedAggressive": "false",
            "Durability": "Best",
            "AllTalentsToAdvance": "No",
            "AttributeIncrease": "Costs"
        },
        "Paths": [
            {
                "ID": "ED4BrotherofStone",
                "Rank": "5",
                "Linked": "ED4Gauntlet",
                "GrantedTalents": [
                    "ED4EarthBond",
                    "ED4TrueSight",
                    "ED4AstralSight",
                    "ED4ItemHistory",
                    "ED4EarthWalk"
                ]
            }
        ],
        "Path": {}
    },
    Threadatron :
    {
        "Basic": {
            "Name": "Threadatron",
            "Player": "Test",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race": "ED4Human",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": "-1",
                "Increases": 0
            },
            "Str": {
                "Buildpoints": "-2",
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": "-2",
                "Increases": 0
            },
            "Per": {
                "Buildpoints": "15",
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": "15",
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": "-2",
                "Increases": 0
            }
        },
        "LegendPoints": 0,
        "Disciplines": [
            {
                "ID": "ED4Wizard",
                "Circle": "6",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "ED4ItemHistory"
                    },
                    {
                        "Circle": "2",
                        "ID": "ED4StandardMatrix"
                    },
                    {
                        "Circle": "3",
                        "ID": "ED4ArcaneMutterings"
                    },
                    {
                        "Circle": "4",
                        "ID": "ED4BookMemory"
                    },
                    {
                        "Circle": "5",
                        "ID": "ED4EvidenceAnalysis"
                    },
                    {
                        "Circle": "6",
                        "ID": "ED4EnhancedMatrix"
                    }
                ],
                "Bonuses": {
                    "MyDef": 2,
                    "SoDef": 1
                }
            }
        ],
        "Paths": [],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4Versatility",
                "Rank": 1,
                "Freerank": "0",
                "Source": "Human",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Racial",
                "TalentPointsUseable": "True",
                "UID": "b5ed94c7-4402-46d4-a217-9a1ae4be0847",
                "Cost": 100,
                "Step": "-"
            },
            {
                "Order": "1",
                "ID": "ED4EnhancedMatrix",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "Stacking Free Matrix, Swapped",
                "UID": "68293ee6-318f-4335-8a8a-444a0af3bf5a",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "2",
                "ID": "ED4StandardMatrix",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "1",
                "debug": "Stacking Free Matrix",
                "UID": "24b2d730-7f01-4f3f-9b8b-9ab2538a3454",
                "Cost": 0,
                "Step": 6
            },
            {
                "Order": "3",
                "ID": "ED4DispelMagic",
                "Rank": 6,
                "Freerank": 3,
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "a8a0b726-9160-461e-9fa2-1446f2d3b7fb",
                "Cost": 2600,
                "Step": 13
            },
            {
                "Order": "4",
                "ID": "ED4Patterncraft",
                "Rank": 6,
                "Freerank": 3,
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "53d21bae-4ebd-48bd-84a8-b6c9d5887a5a",
                "Cost": 2600,
                "Step": 13
            },
            {
                "Order": "5",
                "ID": "ED4Research",
                "Rank": 6,
                "Freerank": 2,
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "03f1a2a9-ec9e-4eed-ac3a-5be2c70e9ecd",
                "Cost": 2900,
                "Step": 13
            },
            {
                "Order": "6",
                "ID": "ED4Spellcasting",
                "Rank": 6,
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "874dcfb0-63e9-4a25-9ab9-ddfe0e4bac9e",
                "Cost": 3200,
                "Step": 13
            },
            {
                "Order": "7",
                "ID": "ED4ThreadWeavingWizardry",
                "Rank": 6,
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "db3dc747-5684-4022-9c9b-7d48c75cea91",
                "Cost": 3200,
                "Step": 13
            },
            {
                "Order": "8",
                "ID": "ED4ItemHistory",
                "Rank": 6,
                "Freerank": "0",
                "Source": "Wizard 1",
                "DisciplineId": "ED4Wizard",
                "Circle": "1",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "12b891b8-7da7-4cf1-9ab0-191ebc7e2d4d",
                "Cost": 3200,
                "Step": 13
            },
            {
                "Order": "9",
                "ID": "ED4AstralSight",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 2",
                "DisciplineId": "ED4Wizard",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "f93e9ba0-d2c1-4b99-85b4-868912e0903f",
                "Cost": 3200,
                "Step": 13
            },
            {
                "Order": "10",
                "ID": "ED4StandardMatrix",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 2",
                "DisciplineId": "ED4Wizard",
                "Circle": "2",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "12b891b8-7da7-4cf1-9ab0-191ebc7e2d4d",
                "Cost": 3200,
                "Step": 6
            },
            {
                "Order": "11",
                "ID": "ED4TenaciousWeave",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 3",
                "DisciplineId": "ED4Wizard",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "a99738b5-e071-42e3-be13-284b296f5472",
                "Cost": 3200,
                "Step": 13
            },
            {
                "Order": "12",
                "ID": "ED4ArcaneMutterings",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 3",
                "DisciplineId": "ED4Wizard",
                "Circle": "3",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "12b891b8-7da7-4cf1-9ab0-191ebc7e2d4d",
                "Cost": 3200,
                "Step": 10
            },
            {
                "Order": "13",
                "ID": "ED4SteelThought",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 4",
                "DisciplineId": "ED4Wizard",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "496b915c-c901-45ae-9213-8f84a56af015",
                "Cost": 3200,
                "Step": 13
            },
            {
                "Order": "14",
                "ID": "ED4BookMemory",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 4",
                "DisciplineId": "ED4Wizard",
                "Circle": "4",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "12b891b8-7da7-4cf1-9ab0-191ebc7e2d4d",
                "Cost": 3200,
                "Step": 13
            },
            {
                "Order": "15",
                "ID": "ED4AstralInterference",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 5",
                "DisciplineId": "ED4Wizard",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "f010ac1e-ae61-4f13-b0e4-316d62408764",
                "Cost": 5200,
                "Step": 13
            },
            {
                "Order": "16",
                "ID": "ED4EvidenceAnalysis",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 5",
                "DisciplineId": "ED4Wizard",
                "Circle": "5",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "12b891b8-7da7-4cf1-9ab0-191ebc7e2d4d",
                "Cost": 5200,
                "Step": 13
            },
            {
                "Order": "17",
                "ID": "ED4Willforce",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 6",
                "DisciplineId": "ED4Wizard",
                "Circle": "6",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "a6a14a8d-c914-49be-9693-2ce66b4c45f4",
                "Cost": 5200,
                "Step": 13
            },
            {
                "Order": "18",
                "ID": "ED4EnhancedMatrix",
                "Rank": 6,
                "Freerank": 0,
                "Source": "Wizard 6",
                "DisciplineId": "ED4Wizard",
                "Circle": "6",
                "Type": "Optional",
                "Debug": "New Optional Talent ",
                "FirstLearnt": 0,
                "UID": "12b891b8-7da7-4cf1-9ab0-191ebc7e2d4d",
                "Cost": 5200,
                "Step": 6
            },
            {
                "Order": "19",
                "ID": "ED4Craftsman",
                "Rank": 6,
                "Freerank": "0",
                "Source": "Versatility 1",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Versatility",
                "VersatilityRank": 0,
                "VersatilityTier": "1",
                "TalentPointsUseable": "True",
                "UID": "12b891b8-7da7-4cf1-9ab0-191ebc7e2d4d",
                "Cost": 5200,
                "Step": 13
            },
            {
                "Order": "20",
                "ID": "ED4Maneuver",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Dumorjen’s Emerald Blade",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "27ee5123-5bee-42dc-b5c0-3bc751f5dffb",
                "Cost": 0,
                "Step": 7
            },
            {
                "Order": "21",
                "ID": "ED4Distract",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Dumorjen’s Ruby Blade",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Item",
                "Debug": "Thread Item Bonus",
                "UID": "3ece188d-2386-4bc4-9e35-67a9ee5557bf",
                "Cost": 0,
                "Step": 7
            }
        ],
        "Knacks": [],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 8
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 9
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "ED4DumorjensEmeraldBlade",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "DamageStep": 12,
                "Cost": 22800
            },
            {
                "ID": "ED4DumorjensRubyBlade",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "DamageStep": 12,
                "Cost": 22800
            },
            {
                "ID": "ED4BroochofYieldingThreadVersion",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 5200
            },
            {
                "ID": "ED4EarthGates",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "8",
                "Cost": 36900
            },
            {
                "ID": "ED4GiftofJaspre",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "Cost": 8400
            },
            {
                "ID": "ED4Soulbinder",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "DamageStep": 7,
                "Cost": 5200
            },
            {
                "ID": "ED4DaggeroftheThornedVine",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Rank": "6",
                "DamageStep": 6,
                "Cost": 5200
            },
            {
                "ID": "ED4TheEdgeofTravar",
                "Type": "Thread Item",
                "Count": "1",
                "InUse": "Yes",
                "Forged": "15",
                "Rank": "10",
                "DamageStep": 27,
                "Cost": 97900
            }
        ],
        "Options": {
            "Edition": "ED4",
            "Attributepoints": "25",
            "MaxAttributeIncrease": "3",
            "Talentpoints": "8",
            "Spellpoints": "PERstep",
            "KnowledgeSkillpoints": "2",
            "ArtisanSkillpoints": "1",
            "SpeakSkillpoints": "2",
            "ReadSkillpoints": "1",
            "FreeSkillpoints": "8",
            "BuyMoreOptionalMatrices": "false",
            "FreeMatricesStack": "false",
            "BuyMatricesPerDiscipline": "true",
            "CasterCircle5Bonus": "false",
            "SpellsCostLP": "4ed",
            "FirstWoundFree": "false",
            "Books": "Official",
            "StepDice": "ED4",
            "SkillFreeRanksLimit": "Novice",
            "RangedAggressive": "false",
            "Durability": "Best",
            "AllTalentsToAdvance": "No",
            "AttributeIncrease": "Costs",
            "DiscBonusesStack": "Highest"
        },
        "Versatility": [
            {
                "ID": "ED4Craftsman",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            },
            {
                "ID": "Empty",
                "Freerank": "0",
                "Rank": "0",
                "Tier": "1"
            }
        ]
    },
    Pterodactylus:
{
        "Basic": {
            "Name": "Pterodactylus Rex",
            "Player": "Test",
            "Gender": "",
            "Age": "",
            "Height": "",
            "Weight": "",
            "Hair": "",
            "Skin": "",
            "Eyes": "",
            "Passion": "",
            "Traits": "",
            "Description": ""
        },
        "Race": "ED4Kstulaami",
        "attributePoints": 25,
        "Attributes": {
            "Dex": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Str": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Tou": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Per": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Wil": {
                "Buildpoints": 0,
                "Increases": 0
            },
            "Cha": {
                "Buildpoints": 0,
                "Increases": 0
            }
        },
        "LegendPoints": 1000000,
        "Disciplines": [
            {
                "ID": "ED4Troubadour",
                "Circle": "5",
                "Order": "0",
                "StartedAt": 15,
                "OptionalTalentsChosen": [
                    {
                        "Circle": "1",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "2",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "3",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "4",
                        "ID": "Empty"
                    },
                    {
                        "Circle": "5",
                        "ID": "Empty"
                    }
                ]
            }
        ],
        "Paths": [
            {
                "ID": "ED4BattleBrother",
                "Rank": "10",
                "Linked": "ED4Troubadour",
                "GrantedTalents": [
                    "ED4ThrowingWeapons",
                    "ED4TellingTheTale",
                    "ED4DeliberateAssault",
                    "ED4BladeJuggle",
                    "ED4HeroicThrow",
                    "ED4LifeCheck"
                ]
            }
        ],
        "Talents": [
            {
                "Order": "0",
                "ID": "ED4Gliding",
                "Rank": "0",
                "Freerank": "0",
                "Source": "T’skrang (K'stulaami)",
                "DisciplineId": "",
                "Circle": "",
                "Type": "Racial",
                "TalentPointsUseable": "True",
                "UID": "bb71c70d-5ffd-462e-9763-0fc2559742bd",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "1",
                "ID": "ED4Entertainer",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Free",
                "FreeTalent": "0",
                "debug": "New free talent",
                "UID": "f5141260-541b-4d4d-97d0-9b7066968ed2",
                "Cost": 0,
                "Step": 10
            },
            {
                "Order": "2",
                "ID": "ED4EmotionSong",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "3761ade6-ad1d-4322-b077-69cb61ef4567",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "3",
                "ID": "ED4FirstImpression",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "cdf11487-1e89-4dd7-8de4-198117feb0ea",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "4",
                "ID": "ED4HearteningLaugh",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "fd949025-18b9-460c-9a6c-064d06c906df",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "5",
                "ID": "ED4ItemHistory",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "1149cf40-fe82-4b3e-ba89-a9b1c47db6b3",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "6",
                "ID": "ED4ThreadWeavingStoryWeaving",
                "Rank": 5,
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "TalentPointsUseable": "True",
                "UID": "c2be6598-350f-46e4-975e-6aa65300919a",
                "Cost": 1900,
                "Step": 10
            },
            {
                "Order": "7",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 1",
                "DisciplineId": "ED4Troubadour",
                "Circle": "1",
                "Type": "Optional",
                "TalentPointsUseable": "True",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "8",
                "ID": "ED4Etiquette",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 2",
                "DisciplineId": "ED4Troubadour",
                "Circle": "2",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "eb34d9de-e878-4bb4-b504-c52475cc6fb9",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "9",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 2",
                "DisciplineId": "ED4Troubadour",
                "Circle": "2",
                "Type": "Optional",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "10",
                "ID": "ED4EmpathicSense",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 3",
                "DisciplineId": "ED4Troubadour",
                "Circle": "3",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "b5c023fe-3d64-43e8-bc2a-e73958a7550d",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "11",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 3",
                "DisciplineId": "ED4Troubadour",
                "Circle": "3",
                "Type": "Optional",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "12",
                "ID": "ED4Research",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 4",
                "DisciplineId": "ED4Troubadour",
                "Circle": "4",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "31b9485b-6c16-4316-8d56-23bc8c983f48",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "13",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 4",
                "DisciplineId": "ED4Troubadour",
                "Circle": "4",
                "Type": "Optional",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "14",
                "ID": "ED4InspireOthers",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 5",
                "DisciplineId": "ED4Troubadour",
                "Circle": "5",
                "Type": "Discipline",
                "FirstLearnt": 0,
                "UID": "b543a90b-a990-41c7-b1d1-e2cd7c238b15",
                "Cost": 0,
                "Step": 5
            },
            {
                "Order": "15",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Troubadour 5",
                "DisciplineId": "ED4Troubadour",
                "Circle": "5",
                "Type": "Optional",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "16",
                "ID": "ED4PBattleBrother",
                "Rank": "10",
                "Freerank": 0,
                "Source": "Battle Brother",
                "PathID": "ED4BattleBrother",
                "Type": "PathTalent",
                "TalentPointsUseable": "false",
                "UID": "feabef6c-a832-4059-9869-f8309cc11cb5",
                "Cost": 97900,
                "Step": "-"
            },
            {
                "Order": "17",
                "ID": "ED4ThrowingWeapons",
                "Rank": 10,
                "Freerank": 0,
                "Source": "Battle Brother 1",
                "PathID": "ED4BattleBrother",
                "PathRank": 1,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 37400,
                "Step": 15
            },
            {
                "Order": "18",
                "ID": "ED4TellingTheTale",
                "Rank": 10,
                "Freerank": 0,
                "Source": "Battle Brother 2",
                "PathID": "ED4BattleBrother",
                "PathRank": 2,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 37400,
                "Step": 15
            },
            {
                "Order": "19",
                "ID": "ED4DeliberateAssault",
                "Rank": 10,
                "Freerank": 0,
                "Source": "Battle Brother 3",
                "PathID": "ED4BattleBrother",
                "PathRank": 3,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 37400,
                "Step": 10
            },
            {
                "Order": "20",
                "ID": "ED4BladeJuggle",
                "Rank": 10,
                "Freerank": 0,
                "Source": "Battle Brother 4",
                "PathID": "ED4BattleBrother",
                "PathRank": 4,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 37400,
                "Step": 15
            },
            {
                "Order": "21",
                "ID": "ED4HeroicThrow",
                "Rank": 10,
                "Freerank": 0,
                "Source": "Battle Brother 5",
                "PathID": "ED4BattleBrother",
                "PathRank": 5,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 60500,
                "Step": 15
            },
            {
                "Order": "22",
                "ID": "ED4LifeCheck",
                "Rank": 10,
                "Freerank": 0,
                "Source": "Battle Brother 6",
                "PathID": "ED4BattleBrother",
                "PathRank": 6,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 60500,
                "Step": 15
            },
            {
                "Order": "23",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Battle Brother 7",
                "PathID": "ED4BattleBrother",
                "PathRank": 7,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "24",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Battle Brother 8",
                "PathID": "ED4BattleBrother",
                "PathRank": 8,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "25",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Battle Brother 9",
                "PathID": "ED4BattleBrother",
                "PathRank": 9,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 0,
                "Step": "-"
            },
            {
                "Order": "26",
                "ID": "Empty",
                "Rank": "0",
                "Freerank": "0",
                "Source": "Battle Brother 10",
                "PathID": "ED4BattleBrother",
                "PathRank": 10,
                "Type": "PathGrantedTalent",
                "UID": "981856ff-6785-413e-b7c0-4bd8c3ee6faa",
                "Cost": 0,
                "Step": "-"
            }
        ],
        "Knacks": [
            {
                "ID": "ED4HeroicThrowPropelledLegend",
                "Step": 20
            },
            {
                "ID": "ED4LifeCheckSoManyTales",
                "Step": 15
            }
        ],
        "Skills": [
            {
                "ID": "ED4ReadWriteLanguage",
                "Rank": "1",
                "Freerank": "1",
                "Category": "General",
                "Cost": 0,
                "Step": 6
            },
            {
                "ID": "ED4SpeakLanguage",
                "Rank": "2",
                "Freerank": "2",
                "Category": "General",
                "Cost": 0,
                "Step": 7
            },
            {
                "ID": "ED4Knowledge",
                "Category": "Knowledge",
                "Name": "T'skrang Lore",
                "Rank": "5",
                "Freerank": "0",
                "Step": 10,
                "Cost": 3100
            }
        ],
        "Spells": [],
        "Equipment": [
            {
                "ID": "AdventuringKit",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "ArtisanTools",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Adventuring"
            },
            {
                "ID": "Dagger",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Melee Weapon",
                "DamageStep": 7
            },
            {
                "ID": "TravelersGarb",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Clothing"
            },
            {
                "ID": "RationsTrail1week",
                "Count": "1",
                "InUse": "Yes",
                "Type": "Provender"
            },
            {
                "ID": "Silver",
                "Count": "100",
                "InUse": "Yes",
                "Type": "Valuable"
            }
        ],
        "Options": {
            "Edition": "ED4",
            "Attributepoints": "25",
            "MaxAttributeIncrease": "3",
            "Talentpoints": "8",
            "Spellpoints": "PERstep",
            "KnowledgeSkillpoints": "2",
            "ArtisanSkillpoints": "1",
            "SpeakSkillpoints": "2",
            "ReadSkillpoints": "1",
            "FreeSkillpoints": "8",
            "BuyMoreOptionalMatrices": "false",
            "FreeMatricesStack": "false",
            "BuyMatricesPerDiscipline": "true",
            "CasterCircle5Bonus": "false",
            "SpellsCostLP": "4ed",
            "FirstWoundFree": "false",
            "Books": "Sebastian",
            "StepDice": "ED4",
            "SkillFreeRanksLimit": "Novice",
            "RangedAggressive": "false",
            "Durability": "Best",
            "AllTalentsToAdvance": "No",
            "AttributeIncrease": "Costs",
            "DiscBonusesStack": "Highest"
        },
        "Damage": 0,
        "Wounds": 0
    }}

let Blank4ed = new function()
{

    this.Basic = 
    {
        "Name"        : "",
        "Player"      : "",
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

    this.Race = "ED4Dwarf";
    this.attributePoints = 25;

    this.Attributes = 
    {
        "Dex": {"Buildpoints" : 0, "Increases" : 0},
        "Str": {"Buildpoints" : 0, "Increases" : 0},
        "Tou": {"Buildpoints" : 0, "Increases" : 0},
        "Per": {"Buildpoints" : 0, "Increases" : 0},
        "Wil": {"Buildpoints" : 0, "Increases" : 0},
        "Cha": {"Buildpoints" : 0, "Increases" : 0}
    };

    this.LegendPoints = 0;
    this.Disciplines = [];
    this.Paths = [];
    this.Talents = [];
    this.Knacks = [];
    this.Skills = 
    [
        {"ID" : "ED4ReadWriteLanguage", "Rank" : "1", "Freerank" : "1", "Category" : "General"},
        {"ID" : "ED4SpeakLanguage",     "Rank" : "2", "Freerank" : "2", "Category" : "General"}
    ];
    this.Spells = [];
    this.Equipment = 
    [
        {"ID" : "AdventuringKit",      "Count" : "1",   "InUse" : "Yes"},
        {"ID" : "ArtisanTools",        "Count" : "1",   "InUse" : "Yes"},
        {"ID" : "Dagger",              "Count" : "1",   "InUse" : "Yes"},
        {"ID" : "TravelersGarb",       "Count" : "1",   "InUse" : "Yes"},
        {"ID" : "RationsTrail1week",   "Count" : "1",   "InUse" : "Yes"},
        {"ID" : "Silver",              "Count" : "100", "InUse" : "Yes"}
    ];

    this.Options =
    {
        "Edition"                  : "ED4",
        "Attributepoints"          : "25",
        "MaxAttributeIncrease"     : "3",
        "Talentpoints"             : "8",
        "Spellpoints"              : "PERstep",
        "KnowledgeSkillpoints"     : "2",
        "ArtisanSkillpoints"       : "1",
        "SpeakSkillpoints"         : "2",
        "ReadSkillpoints"          : "1",
        "FreeSkillpoints"          : "8",

        "BuyMoreOptionalMatrices"  : "false",   

        "FreeMatricesStack"        : "false",   
        "BuyMatricesPerDiscipline" : "true",    
        "CasterCircle5Bonus"       : "false", 
        "SpellsCostLP"             : "4ed",     

        "FirstWoundFree" : "false",
 
        // Books 
        "Books"                    : "ElvenNations Travar MysticPaths Iopos",
        "StepDice"                 : "ED4"
    };
};














