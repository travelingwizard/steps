// Situation panel stuff
UI.ApplySituational = function(disable = false)
{
    UI.ApplySituationalDefenses(disable);
    UI.ApplySituationalStepDice(disable);
};

UI.UpdateSituationArmorThingers = function()
{
    $("#SituationalPhArmLabel").html(CharacterManager.GetPhArm());
    $("#SituationalMyArmLabel").html(CharacterManager.GetMyArm());
    $("#SituationalWndThLabel").html(CharacterManager.GetWoundThreshold());
}       

UI.ApplyDamage = function(event)
{
    console.log("UI.ApplyDamage() called");

    let type = $(this).attr('id')

    console.log(type);

    let damage = parseInt($("#SituationalDamageApplier").val());
    damage -= parseInt($("#SubtractArbitrary").val());

    //Armors: 
    let phArmMod = parseInt($('#PhysArmorMod').val());
    let myArmMod = parseInt($('#MystArmorMod').val());

    if (type == "PhysicalDamageButton")
        damage -= CharacterManager.GetPhArm() + phArmMod;

    if (type == "MysticalDamageButton")
        damage -= CharacterManager.GetMyArm() + myArmMod;

    if (damage > 0)
    {
        $("#SituationDamage").val(Character.Damage + damage); 

        if ($("#ApplyWounds").is(':checked') && (damage >= parseInt(CharacterManager.GetWoundThreshold())))
            $("#SituationWound").val(Character.Wounds + 1); 
    }

    UI.ApplySituational();
}

UI.SpendKarma = function()
{
    if (Character.KarmaPoints > 0)
        $("#CurrentKarmaPoints").val(Character.KarmaPoints -1)

    UI.ApplySituational();
}

UI.ResetKarma = function()
{
    $("#CurrentKarmaPoints").val(CharacterManager.GetKarmaPoints());
    $("#KarmaType").val("Bonus");
    $("#SituationKarma").val(0);

    UI.ApplySituational();
}

UI.SpendDevotion = function()
{
    if (Character.Questor.devotionPoints > 0)
        $("#CurrentDevotionPoints").val(Character.Questor.devotionPoints -1)
    UI.ApplySituational();
}

UI.SuccessThingerUpdate = function(event)
{
    let source = $(this).attr('id');

    if (source == "HitSuccessNumber")
    {
        $("#HitSuccessSelect").val($("#HitSuccessNumber").val());
        $("#RolledNumber").val(parseInt($("#TargetNumber").val()) + (parseInt($("#HitSuccessSelect").val()) * 5))
    }
    else
        if (source == "HitSuccessSelect")
        {
            $("#HitSuccessNumber").val($("#HitSuccessSelect").val());
            $("#RolledNumber").val(parseInt($("#TargetNumber").val()) + (parseInt($("#HitSuccessSelect").val()) * 5))
        }
        else
        {
            let successnumber = Math.floor((parseInt($("#RolledNumber").val()) - parseInt($("#TargetNumber").val())) / 5);
            $("#HitSuccessNumber").val(successnumber > 0 ? successnumber : 0);
            $("#HitSuccessSelect").val(successnumber > 0 ? successnumber : 0);
        }

    UI.ApplySituational();
};

UI.ApplySituationalDefenses = function(disable)
{
    if (disable == true)
    {
        $("#phDef").html(CharacterManager.GetPhDef());
        $("#myDef").html(CharacterManager.GetMyDef());
        $("#soDef").html(CharacterManager.GetSoDef());
        return;
    }

    let phDef = CharacterManager.GetPhDef();
    let myDef = CharacterManager.GetMyDef();
    let soDef = CharacterManager.GetSoDef();

    let defModifier = 0;

    let PhDefMod, MyDefMod, SoDefMod;

    PhDefMod = parseInt($("#PhysDefMod").val());
    MyDefMod = parseInt($("#MystDefMod").val());
    SoDefMod = parseInt($("#SociDefMod").val());



    switch ($("#Stance").children("option:selected").val())
    {
        case "Aggressive":
            defModifier -= 3;
            break;
        case "Defensive":
            defModifier += 3;
            break;
    }
    if ($("#Knockeddown")[0].checked)
    {
        if ($("#KDAppliesSocial")[0].checked)
            defModifier -= 3;
        else
        {
            PhDefMod -= 3;
            MyDefMod -= 3;
        }
    }
    if ($("#Surprised")[0].checked)
    {        
        if ($("#SurpriseAppliesSocial")[0].checked)
            defModifier -= 3;
        else
        {
            PhDefMod -= 3;
            MyDefMod -= 3;
        }
    }

    if ($("#Harried")[0].checked)
    {
        PhDefMod -= 2;
        MyDefMod -= 2;
    }

    PhDefMod += defModifier;
    MyDefMod += defModifier;
    SoDefMod += defModifier;

    if(PhDefMod == 0)
        $("#phDef").html(phDef);
    else
        $("#phDef").html("("+ phDef + (PhDefMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + PhDefMod + "</span>) " + ((phDef + PhDefMod) < 2 ? 2 : (phDef + PhDefMod)));

    if(MyDefMod == 0)
        $("#myDef").html(myDef);
    else
        $("#myDef").html("("+ myDef + (MyDefMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + MyDefMod + "</span>) " + ((myDef + MyDefMod) < 2 ? 2 : (myDef + MyDefMod)));
    
    if(SoDefMod == 0)
        $("#soDef").html(soDef);
    else
        $("#soDef").html("("+ soDef + (SoDefMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + SoDefMod + "</span>) " + ((soDef + SoDefMod) < 2 ? 2 : (soDef + SoDefMod)));
};

UI.ApplySituationalStepDice = function(disable = false)
{
    Character.Damage = parseInt($("#SituationDamage").val());
    Character.Wounds = parseInt($("#SituationWound").val());
    $("#curDmg").html(Character.Damage + " / " + Character.Wounds)
    
    CharacterManager.ResetBuffer();

    if (disable == true || UI.state == "Edit")
    {
        //Attributes
        let attAbbrevs = ["Dex", "Str", "Tou", "Per", "Wil", "Cha"];
        let attObjs = CharacterManager.GetAttributes();
        for (let i=0; i<6; i++)
        {
            let currentValue = attObjs[i];
            let currentStep = parseInt(Library.GetAttribute(currentValue).Step) ;

            $("#"+attAbbrevs[i]+"Step").text(currentStep);
            $("#"+attAbbrevs[i]+"Dice").text(Library.GetDice(currentStep));
        }

        // Armors: 
        $("#phArm").html(CharacterManager.GetPhArm());
        $("#myArm").html(CharacterManager.GetMyArm());

        // Initiative
        let baseIni = CharacterManager.GetBaseIni();
        let ModifiedIni = CharacterManager.GetModifiedIni();
        $("#Ini").html(baseIni + " / " + Library.GetDice(baseIni));
        $("#ArmoredIni").html((ModifiedIni + " / " + Library.GetDice(ModifiedIni)));

        for (let i = 0; i < Character.Talents.length; i++) 
        {
            $("#TalentStep"+i).html(Character.Talents[i].Step);
            $("#TalentDice"+i).html(Library.GetDice(Character.Talents[i].Step));
        }

        if (Character.Knacks != undefined && Character.Knacks.length > 0)
            for (let i = 0; i < Character.Knacks.length; i++) 
            {
                $("#KnackStep"+i).html(Character.Knacks[i].Step);
                $("#KnackDice"+i).html(Library.GetDice(Character.Knacks[i].Step));
            }

        for (let i = 0; i < Character.Skills.length; i++) 
        {
            $("#SkillStep"+i).html(Character.Skills[i].Step);
            $("#SkillDice"+i).html(Library.GetDice(Character.Skills[i].Step));
        }

        for (let i = 0; i < Character.Equipment.length; i++) 
        {
            if(Character.Equipment[i].DamageStep != undefined && Character.Equipment[i].DamageStep > 0)
            {
                $("#Equipment" + i + "FinalDamageStep").html(Character.Equipment[i].DamageStep);
                $("#Equipment" + i + "FinalDamageDice").html(Library.GetDice(Character.Equipment[i].DamageStep));
            }        
        }

        // Matrices        
        for(let i = 0; i < Character.Talents.length; i++) 
        {
            let spellID = Character.Talents[i].Spell;
            if($("#MatrixSpellEffectStepDice"+i) != undefined && spellID != undefined && spellID != "")
            {
                let spell = Character.Spells.find(o => o.ID === spellID);
                if (spell != undefined && spell.defaultEffect + "" != "")
                {
                    $("#MatrixSpellEffectStepDice"+i).html(" (" + spell.defaultEffect + "/" + Library.GetDice(spell.defaultEffect) + ") ");
                }
            }
        }
        $("#Status").remove();

        return;
    }    

    // Check Character Status
    if (parseInt($("#SituationDamage").val()) + CharacterManager.GetBloodDamage() >= CharacterManager.GetDeathRating() + parseInt($("#SituationDthBuff").val()))
    {
        // Dead
        $("#Status").remove();
        let $Status = $("<div>", {"class" : "status", id : "Status", text : "Dead"});
        $("body").append($Status);
    }
    else
        if (parseInt($("#SituationDamage").val()) + CharacterManager.GetBloodDamage() >= CharacterManager.GetUnconsciousRating() + parseInt($("#SituationUncBuff").val()))
        {
            // Unconscious
            $("#Status").remove();
            let $Status = $("<div>", {"class" : "status", id : "Status", text : "Unconscious"});
            $("body").append($Status);
        }
        else
        {
            // Fine
            $("#Status").remove();
        }

    let actionMod = 0, aggressiveMod, attackMod, damageMod, SpellCastingMod, SpellEffectMod, allTestMod = 0;

    if ($("#Stance").children("option:selected").val() == "Defensive")
        allTestMod -= 3;

    if ($("#SituationWound").val() > 0)
        if (Character.Options.FirstWoundFree == "true")
            actionMod =  -(parseInt($("#SituationWound").val()-1));
        else
            actionMod =  -parseInt($("#SituationWound").val());

    if ($("#Knockeddown")[0].checked)
        actionMod -= 3;
    if ($("#Harried")[0].checked)
        actionMod -= 2;

    switch ($("#Darkness").children("option:selected").val())
    {
        case "Partial":
            actionMod -= 2;
            break;
        case "Full":
            actionMod -= 4;
            break;
    }

    actionMod +=  parseInt($("#MiscActionMod").val());
    aggressiveMod = $("#Stance").children("option:selected").val() == "Aggressive" ? 3 : 0;
    attackMod = parseInt($("#MiscAttackMod").val());
    damageMod = parseInt($("#HitSuccessNumber").val()) * 2 + parseInt($("#MiscDamageMod").val());
    SpellCastingMod = parseInt($("#MiscSpellCastMod").val());
    SpellEffectMod = parseInt($("#MiscSpellEffectMod").val());

    //Attributes
    let attAbbrevs = ["Dex", "Str", "Tou", "Per", "Wil", "Cha"];
    let attObjs = CharacterManager.GetAttributes();
    let attBonuses = CharacterManager.GetAttributeBonuses();
    
    for (let i=0; i<6; i++)
    {
        let currentValue = attObjs[i];

        let currentStep = parseInt(Library.GetAttribute(currentValue).Step) ;

        let thisStep = currentStep + actionMod + allTestMod;
        if (thisStep < 1)
            thisStep = 1;

        if((actionMod + allTestMod) == 0)
        {
            $("#"+attAbbrevs[i]+"Step").text(currentStep);
            $("#"+attAbbrevs[i]+"Dice").text(Library.GetDice(currentStep));
        }
        else
        { 
            $("#"+attAbbrevs[i]+"Step").html("("+ currentStep + ((actionMod + allTestMod) < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + (actionMod + allTestMod) + "</span>) " + thisStep);
            $("#"+attAbbrevs[i]+"Dice").html(Library.GetDice(thisStep));
        }
    }

    //Armors: 
    let phArmMod = parseInt($('#PhysArmorMod').val());
    let myArmMod = parseInt($('#MystArmorMod').val());
    let phArm = CharacterManager.GetPhArm() + phArmMod;
    let myArm = CharacterManager.GetMyArm() + myArmMod;

    if (phArm < 0) phArm = 0;
    if (myArm < 0) myArm = 0;

    if (phArmMod == 0) 
        $("#phArm").html(CharacterManager.GetPhArm());
    else
        $("#phArm").html("(" + CharacterManager.GetPhArm() + (phArmMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + phArmMod + "</span>) " + phArm);
    if (myArmMod == 0) 
        $("#myArm").html(CharacterManager.GetMyArm());
    else
        $("#myArm").html("(" + CharacterManager.GetMyArm() + (myArmMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + myArmMod + "</span>) " + myArm);

    // Initiative
    let baseIni = CharacterManager.GetBaseIni();
    let ModifiedIni = CharacterManager.GetModifiedIni();
    let iniModifier = allTestMod + parseInt($("#InitiativeMod").val());
    if (iniModifier == 0)
    {
        $("#Ini"       ).html(baseIni + " / " + Library.GetDice(baseIni));
        $("#ArmoredIni").html((ModifiedIni + " / " + Library.GetDice(ModifiedIni)));
    }
    else
    {
        $("#Ini"       ).html("("+ baseIni     + (iniModifier < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + iniModifier + "</span>) " + (baseIni     + iniModifier) + " / " + Library.GetDice((baseIni     + iniModifier)));
        $("#ArmoredIni").html("("+ ModifiedIni + (iniModifier < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + iniModifier + "</span>) " + (ModifiedIni + iniModifier) + " / " + Library.GetDice((ModifiedIni + iniModifier)));
    }

    // Karma
    Character.KarmaPoints = $("#CurrentKarmaPoints").val();

    let baseKarma = CharacterManager.GetKarmaStep();
    let situationKarma = parseInt($("#SituationKarma").val());
    if ($("#KarmaType").val() == "Bonus")
        if (situationKarma == 0)
            $("#Karma").html(Character.KarmaPoints + " / " + CharacterManager.GetKarmaPoints() + " (" + Library.GetDice(baseKarma) + ")");
        else
            $("#Karma").html(Character.KarmaPoints + " / " + CharacterManager.GetKarmaPoints() + " (" + (situationKarma < 0 ? "<span style='color:red;'> " : "<span style='color:green;'>") + Library.GetDice(baseKarma + situationKarma) + "</span>)");
    else
    {
        if (situationKarma < 1)
        {
            situationKarma = 1;
            $("#SituationKarma").val(1);
        }
        $("#Karma").html(Character.KarmaPoints + " / " + CharacterManager.GetKarmaPoints() + " (" + Library.GetDice(situationKarma) + ")");
    }

    // Devotion Points
    if (Character.Questor != undefined && Character.Questor.Doctrine != "Empty")
    {
        Character.Questor.devotionPoints = $("#CurrentDevotionPoints").val();
        $("#DevotionPoints").html(Character.Questor.devotionPoints + " / " + CharacterManager.GetDevotionPointsMax() + " (" + CharacterManager.GetDevotionDiceType() + ")");
    }

    // Talents
    for (let i = 0; i < Character.Talents.length; i++) 
    {
        if (Character.Talents[i].ID != "Empty" && Character.Talents[i].Step != "-" && Character.Talents[i].Step != "") 
        {
            let thisTalent = Library.GetTalent(Character.Talents[i].ID);
            let isAggressionable = thisTalent.Type.toLowerCase().includes("melee attack") != 0 || thisTalent.Type.toLowerCase().includes("melee damage buff") || thisTalent.Type.toLowerCase().includes("unarmed damage buff");
            let isAttack = thisTalent.Type.toLowerCase().includes("attack");
            let isMeleeDamage = thisTalent.Type.toLowerCase().includes("melee damage boost") || thisTalent.Type.toLowerCase().includes("unarmed damage buff");
            let isDamage = thisTalent.Type.toLowerCase().includes("damage boost") || thisTalent.Type.toLowerCase().includes("damage buff");
            let isSpellcasting = thisTalent.ID == "ED4Spellcasting";
            let thisMod, thisStep;

            thisMod = actionMod + allTestMod;
            if (isAttack)
                thisMod = actionMod + attackMod + allTestMod;
            if (isDamage)
                thisMod = damageMod + allTestMod;
            if (isSpellcasting)
                thisMod = actionMod + SpellCastingMod + allTestMod;
            if (isAggressionable)
                thisMod += aggressiveMod;

            if (thisMod == 0)
            {
                $("#TalentStep"+i).html(Character.Talents[i].Step);
                $("#TalentDice"+i).html(Library.GetDice(Character.Talents[i].Step));
            }
            else
            {
                thisStep = Character.Talents[i].Step + thisMod;
                if (thisStep < 1)
                    thisStep = 1;
                $("#TalentStep"+i).html("("+ Character.Talents[i].Step + (thisMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + thisMod + "</span>) " + thisStep);
                $("#TalentDice"+i).html(Library.GetDice(thisStep));
            }
        }
    }

    // Knacks
    if (Character.Knacks != undefined && Character.Knacks.length > 0)
        for (let i = 0; i < Character.Knacks.length; i++) 
            if(Character.Knacks[i].ID != "Empty" && Character.Knacks[i].Step != "-" && Character.Knacks[i].Step != "") 
            {
                let thisKnack = Library.GetKnack(Character.Knacks[i].ID);
                let isAggressionable = thisKnack.Type.toLowerCase().includes("melee attack") != 0 || thisKnack.Type.toLowerCase().includes("melee damage boost") || thisKnack.Type.toLowerCase().includes("unarmed damage boost");
                let isDamage = thisKnack.Type.toLowerCase().includes("damage boost") || thisKnack.Type.toLowerCase().includes("damage boost");
                let isSpellcasting = thisKnack.Talent == "ED4Spellcasting";
                let thisMod, thisStep;

                thisMod = allTestMod + (isDamage ? 0 : actionMod) + ((isAggressionable && $("#Stance").children("option:selected").val() == "Aggressive") ? 3 : 0 ) + (isDamage ? parseInt($("#HitSuccessNumber").val()) * 2 : 0) + (isSpellcasting ? SpellCastingMod : 0);
                if (thisMod == 0)
                {
                    $("#KnackStep"+i).html(Character.Knacks[i].Step);
                    $("#KnackDice"+i).html(Library.GetDice(Character.Knacks[i].Step));
                }
                else
                {
                    thisStep = Character.Knacks[i].Step + thisMod;
                    if (thisStep < 1)
                        thisStep = 1;
                    $("#KnackStep"+i).html("("+ Character.Knacks[i].Step + (thisMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + thisMod + "</span>) " + thisStep);
                    $("#KnackDice"+i).html(Library.GetDice(thisStep));
                }
            }

    // Devotions
    if (Character.Questor != undefined && Character.Questor.Doctrine != undefined && Character.Questor.Doctrine != "Empty")
    {
        // Questor Devotion:
        let thisMod = allTestMod + actionMod;
        if (thisMod == 0)
        {
            $("#DevotionStep-").html(Character.Questor.questorDevotionStep);
            $("#DevotionDice-").html(Library.GetDice(Character.Questor.questorDevotionStep));
        }
        else
        {
            let thisStep = Character.Questor.questorDevotionStep + thisMod;
            if (thisStep < 1)
                thisStep = 1;
            $("#DevotionStep-").html("("+ Character.Questor.questorDevotionStep + (thisMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + thisMod + "</span>) " + thisStep);
            $("#DevotionDice-").html(Library.GetDice(thisStep));
        }

        // The rest: 
        for (let i = 0; i < Character.Questor.Ranks.length; i++)
        {
            if (Character.Questor.Ranks[i].devotionID != "Empty" && Character.Questor.Ranks[i].devotionStep != "-" && Character.Questor.Ranks[i].devotionStep != "") 
            {
                let libDevotion = Library.GetDevotion(Character.Questor.Ranks[i].devotionID);
                let isAggressionable = libDevotion.Type.toLowerCase().includes("melee attack") != 0 || libDevotion.Type.toLowerCase().includes("melee damage boost") || libDevotion.Type.toLowerCase().includes("unarmed damage boost");
                let isDamage = libDevotion.Type.toLowerCase().includes("damage boost") || libDevotion.Type.toLowerCase().includes("damage boost");
                let thisMod;

                thisMod = allTestMod + (isDamage ? 0 : actionMod) + ((isAggressionable && $("#Stance").children("option:selected").val() == "Aggressive") ? 3 : 0 ) + (isDamage ? parseInt($("#HitSuccessNumber").val()) * 2 : 0);
                if (thisMod == 0)
                {
                    $("#DevotionStep"+i).html(Character.Questor.Ranks[i].devotionStep);
                    $("#DevotionDice"+i).html(Library.GetDice(Character.Questor.Ranks[i].devotionStep));
                }
                else
                {
                    let thisStep = Character.Questor.Ranks[i].devotionStep + thisMod;
                    if (thisStep < 1)
                        thisStep = 1;
                    $("#DevotionStep"+i).html("("+ Character.Questor.Ranks[i].devotionStep + (thisMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + thisMod + "</span>) " + thisStep);
                    $("#DevotionDice"+i).html(Library.GetDice(thisStep));
                }
            }
        }
    }

    // Skills
    for (let i = 0; i < Character.Skills.length; i++) 
    {
        if(Character.Skills[i].ID != "Empty")
        {
            let thisSkill = Library.GetSkill(Character.Skills[i].ID);
            let isAggressionable = thisSkill.Type.toLowerCase().includes("melee attack") != 0 || thisSkill.Type.toLowerCase().includes("melee damage boost") || thisSkill.Type.toLowerCase().includes("unarmed damage boost");
            let isDamage = thisSkill.Type.toLowerCase().includes("damage boost");
            let thisMod, thisStep;

            thisMod = allTestMod + (isDamage ? 0 : actionMod) + ((isAggressionable && $("#Stance").children("option:selected").val() == "Aggressive") ? 3 : 0 ) + (isDamage ? parseInt($("#HitSuccessNumber").val()) : 0);

            if (thisMod == 0)
            {
                $("#SkillStep"+i).html(Character.Skills[i].Step);
                $("#SkillDice"+i).html(Library.GetDice(Character.Skills[i].Step));
            }
            else
            {
                thisStep = Character.Skills[i].Step + thisMod;
                if (thisStep < 1)
                    thisStep = 1;
                $("#SkillStep"+i).html("("+ Character.Skills[i].Step + (thisMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + thisMod + "</span>) " + thisStep);
                $("#SkillDice"+i).html(Library.GetDice(thisStep));
            }
        }
    }

    // Equipment
    for (let i = 0; i < Character.Equipment.length; i++) 
    {
        if(Character.Equipment[i].DamageStep != undefined && Character.Equipment[i].DamageStep > 0)
        {
            let thisEquipment = Library.GetEquipment(Character.Equipment[i].ID);

            let isAggressionable = (thisEquipment == undefined ? false : thisEquipment.Type.includes("Melee Weapon") != 0);
            let thisMod, thisStep;
    
            thisMod = allTestMod + (isAggressionable ? aggressiveMod : 0) + damageMod;

            if (thisMod == 0)
            {
                $("#Equipment" + i + "FinalDamageStep").html(Character.Equipment[i].DamageStep);
                $("#Equipment" + i + "FinalDamageDice").html(Library.GetDice(Character.Equipment[i].DamageStep));
            }
            else
            {
                thisStep = Character.Equipment[i].DamageStep + thisMod;
                if (thisStep < 1)
                    thisStep = 1;
                $("#Equipment" + i + "FinalDamageStep").html("("+ Character.Equipment[i].DamageStep + (thisMod < 0 ? "<span style='color:red;'> " : "<span style='color:green;'> +") + thisMod + "</span>) " + thisStep);
                $("#Equipment" + i + "FinalDamageDice").html(Library.GetDice(thisStep));
            }
        }        
    }

    // Spell effect
    for(let i = 0; i < Character.Talents.length; i++) 
    {
        let spellID = Character.Talents[i].Spell;
        if($("#MatrixSpellEffectStepDice"+i) != undefined && spellID != undefined && spellID != "")
        {
            let spell = Character.Spells.find(o => o.ID === spellID);
            if (spell != undefined && spell.defaultEffect + "" != "")
            {
                let thisMod = SpellEffectMod + allTestMod;

                if (Library.GetSpell(spell.ID).SuccessLevels.includes("(+2 Effect Step)"))
                    thisMod += (parseInt($("#HitSuccessNumber").val()) * 2);

                if (thisMod == 0)
                {
                    $("#MatrixSpellEffectStepDice"+i).html(" (" + spell.defaultEffect + "/" + Library.GetDice(spell.defaultEffect) + ") ");
                }
                else 
                {
                    let thisStep = spell.defaultEffect + thisMod;
                    if (thisStep < 1)
                        thisStep = 1;
                    $("#MatrixSpellEffectStepDice"+i).html(" ((" + spell.defaultEffect + (thisMod < 0 ? "<span style='color:red;'>" : "<span style='color:green;'>+") + thisMod + "</span>)" + thisStep + "/" + Library.GetDice(thisStep, true) + ") ");
                }
            }
        }
    }

};























