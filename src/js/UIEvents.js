// UI event handler extensions for the Steps project, Lars Gottlieb 2018-20
/*jshint esversion: 6 */

UI.AttachEvents = function()
{
    "use strict";

	$("*").off();

    $("#burger").click(function(){$("#burger").hide(); $("#controls").show(); return false;});
    $("body"   ).click(function(){$("#burger").show(); $("#controls").hide();});

    $("#swapButton").click(UI.PullSwap);
    $("#OptionsButton").click(UI.ShowOptionsDialogue);
    
    $("#SaveButton").click(UI.SaveClicked);
	$("#newButton").click(UI.NewClicked);
	$('#LoadButton').on("click", function() {UI.LoadClicked();});
    $("#aboutButton").click(UI.PopUpAbout);
    $("#pregenButton").click(UI.PopUpSelectPregen);

	//from https://usefulangle.com/post/193/javascript-read-local-file
	$('#load_btn').on('change', IO.LoadCharacterFromFile); 

	$(".basics").on("input propertychange paste",              this, UI.PullBasics);
	$("#PortraitOverlay").on("click",                          this, UI.ChoosePortraitURL);
//	$("#Description").on("input propertychange paste",         this, UI.PullDescription);	

	$("#Race").on("input propertychange paste",                this, UI.PullRace);

	$("#LPInfo").on("click",                                   this, UI.PopUpLP);
	$("#HealthInfo").on("click",                               this, UI.PopUpHealth);
	$("#BloodInfo").on("click",                                this, UI.PopUpBlood);

	$("#LpCurrent").on("input propertychange paste",           this, UI.PullCurrentLP);
	$("#LpTotal").on("input propertychange paste",             this, UI.PullTotalP);

	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);
	$("#AddDiscipline").on("click",                            this, UI.AddDiscipline);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	$(".attributeSelect").on("input propertychange paste",     this, UI.PullAttributeSelect);
	$(".attributeIncreases").on("input propertychange paste",  this, UI.PullAttributeIncreases);

	$(".TalentFreeRankInput").on("input propertychange paste", this, UI.PullTalentFreeRank);
	$(".TalentRankInput").on("input propertychange paste",     this, UI.PullTalentRank);
	$(".talentSelect").on("input propertychange paste",        this, UI.PullTalentSelect);
	$(".versatilitySelect").on("input propertychange paste",   this, UI.PullVersatilitySelect);
	$(".pathTalentSelect").on("input propertychange paste",    this, UI.PullPathTalentSelect);
	$(".talentTierSelect").on("input propertychange paste",    this, UI.PullTierSelect);

	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	$(".devotionSelect").on("input propertychange paste",      this, UI.PullDevotionSelect);
	$(".devotionRankInput").on("input propertychange paste",   this, UI.PullDevotionRank);
	$(".devotionAbilityInput").on("input propertychange paste",this, UI.PullDevotionAbility);

	$(".killSkill").on("click",                                this, UI.KillSkill);
	$(".skillCategorySelect").on("input propertychange paste", this, UI.PullSkillCategory);
	$(".SkillInput").on("change",          					   this, UI.PullSkillInput);
	$(".skillSelect").on("input propertychange paste",         this, UI.PullSkillSelect);
	$(".skillFreeRank").on("input propertychange paste",       this, UI.PullSkillFreeRank);
	$(".skillRank").on("input propertychange paste",           this, UI.PullSkillRank);
	$("#AddSkillButton").on("click",                           this, UI.AddSkill);

	$(".killSpell").on("click",                                this, UI.KillSpell);
	$(".spellSelect").on("input propertychange paste",         this, UI.PullSpellSelect);
	$("#AddSpellButton").on("click",                           this, UI.AddSpell);

	$(".killEq").on("click",                                   this, UI.KillEq);
	$(".eqInUse").on("click",                                  this, UI.PullEqInUse);
	$(".eqSelect").on("input propertychange paste",            this, UI.PullEqSelect);
	$(".eqName").on("input propertychange paste",              this, UI.PullEqName);
	$(".eqTypeSelect").on("input propertychange paste",        this, UI.PullEqTypeSelect);
	$(".eqRank").on("input propertychange paste",              this, UI.PullEqRank);
	$(".eqForge").on("input propertychange paste",             this, UI.PullEqForge);
	$(".eqPhForge").on("input propertychange paste",           this, UI.PullEqPhForge);
	$(".eqMyForge").on("input propertychange paste",           this, UI.PullEqMyForge);
	$(".eqCount").on("input propertychange paste",             this, UI.PullEqCount);
	$("#AddEqButton").on("click",                              this, UI.AddEq);

	$(".killMagic").on("click",                                     this, UI.KillMagic);
	$(".magicApplicable").on("click",                               this, UI.MagicApplicableClicked);
    $(".magicSelect").on("input propertychange paste",              this, UI.PullMagicSelect);
    $(".magicTarget").on("input propertychange paste",              this, UI.PullMagicTarget);
    $(".magicTalentorSkillSelect").on("input propertychange paste", this, UI.PullMagicTalentorSkillSelect);
    $(".magicAttributeSelect").on("input propertychange paste",     this, UI.PullMagicAttributeSelect);
    $(".magicThreadTargetSelect").on("input propertychange paste",  this, UI.PullMagicThreadTargetSelect);
    $(".magicThreadRank").on("input propertychange paste",          this, UI.PullMagicThreadRank);
	$("#AddMagicButton").on("click",                                this, UI.AddMagic);

    $(".MatrixCardSelect").on("change",                        this, UI.changeSpellCard);

    // Situational
	$("#DamageButton").on("click",                             this, UI.ApplyDamage);
	$("#PhysicalDamageButton").on("click",                     this, UI.ApplyDamage);
	$("#MysticalDamageButton").on("click",                     this, UI.ApplyDamage);
	$("#SpendKarmaButton").on("click",                         this, UI.SpendKarma);
	$("#ResetKarmaButton").on("click",                         this, UI.ResetKarma);
	$("#SpendDevotionButton").on("click",                      this, UI.SpendDevotion);

    $(".situationSelect"  ).on("input propertychange paste",   this, UI.ApplySituational);
    $(".situationNumber"  ).on("input propertychange paste",   this, UI.ApplySituational);
    $(".situationCheckbox").on("click",                        this, UI.ApplySituational);

    $("#HitSuccessSelect").on("change",                        this, UI.SuccessThingerUpdate);
    $("#HitSuccessNumber").on("change",                        this, UI.SuccessThingerUpdate);
    $("#TargetNumber").on("change",                            this, UI.SuccessThingerUpdate);
    $("#RolledNumber").on("change",                            this, UI.SuccessThingerUpdate);

    // Overlay
	$("#Overlay").on("click",                                  this, UI.HideOverlay);
};

UI.PullSwap = function()
{
	UI.SwapStates();
	UI.ApplyState();
};

UI.SwapStates = function()
{
	if(UI.state == "Edit")
		UI.state = "Play";
	else
		UI.state = "Edit";
};

UI.ApplyState = function()
{
	if(UI.state == "Edit")
	{
		$("#swapButton").text("Play");
		$(".hideInPlay").show();
		
		$("#situation").show();
		$("#situation").css("left", "100%");
		$("#content").css("right", "0");
		$(".lockInPlay").prop('disabled', false);

		$("#Earthdawn_Sheet").css("grid-template-columns", "30% 3% auto 8% 25%");

		$(".situationSelect").prop("disabled", true);
		$(".situationNumber").prop("disabled", true);
		$(".situationCheckbox").prop("disabled", true);

		$(".wideInPlay").css("width", "auto");

		if (CharacterManager.CountKnacksAvailable() != 0)
			$("#Knacks").show();

		UI.ApplySituational(true);
	}
	else
	{
		$("#swapButton").text("Edit");
		$(".hideInPlay").hide();

		$("#situation").css("left", "80%");
		$("#content").css("right", "20%");
		$(".lockInPlay").prop('disabled', true);

		$("#Earthdawn_Sheet").css("grid-template-columns", "33% 0% auto 0% 33%");

		$(".situationSelect").prop("disabled", false);
		$(".situationNumber").prop("disabled", false);
		$(".situationCheckbox").prop("disabled", false);

		if (Character.Disciplines.length > 0 && Character.Disciplines.find(o => parseInt(o.Circle) > 0 && o.ID != "Empty") != undefined)
		{
	        $('#KarmaPointsWrapper').html(UI.BuildNumbersSelect(0, CharacterManager.GetKarmaPoints(), (Character.KarmaPoints == undefined ? CharacterManager.GetKarmaPoints() : Character.KarmaPoints), "CurrentKarmaPoints", "situationSelect situationNumber"));
			$('#KarmaPointsWrapper').on("input propertychange paste", this, UI.ApplySituational);
			$("#SituationKarmaDialogueWrapper").show();
		}
		else
			$("#SituationKarmaDialogueWrapper").hide();

		if (Character.Questor != undefined && Character.Questor.Doctrine != "Empty")
		{
	        $('#DevotionPointsWrapper').html(UI.BuildNumbersSelect(0, CharacterManager.GetDevotionPointsMax(), (Character.Questor.devotionPoints == undefined ? 0 : Character.Questor.devotionPoints), "CurrentDevotionPoints", "situationSelect situationNumber"));
			$('#DevotionPointsWrapper').on("input propertychange paste", this, UI.ApplySituational);
			$("#SituationDevotionWrapper").show();
		}
		else
			$("#SituationDevotionWrapper").hide();


		$(".wideInPlay").css("width", "100%");		

		if (Character.Knacks == undefined || Character.Knacks.length == 0)
			$("#Knacks").hide();

		UI.UpdateSituationArmorThingers();

		UI.ApplySituational();
	}
};

UI.SaveClicked = function()
{
	IO.download(JSON.stringify(Character, null, 4), (Character.Basic.Name == "" ? "Unnamed" : Character.Basic.Name) + '.json', 'text/plain');

	UI.Charactertouched = false;
};

UI.LoadClicked = function()
{	
	let goOn;

    if (UI.Charactertouched == true)
        goOn = confirm('Your character has unsaved changes which will be lost if you load another. Are you sure?');
    else 
    	goOn = true;

    if (goOn)
		$('#load_btn').click(); 
	else
       	return false;

	//BloodInfo.LoadCharacterFromFile(event);
};

UI.NewClicked = function()
{
	if (UI.Charactertouched == true)
		if (!confirm('Your character has unsaved changes which will be lost if you make a new one. Are you sure?'))
			return false;

	CharacterManager.ResetBuffer();

	Character = JSON.parse(JSON.stringify(Blank4ed));

    Library.GrabBooks(Character.Options.Books);
    IO.MergeOptions();
    Library.GrabStepDice(Character.Options.StepDice);

  	if(UI.state == "Play")
  	{
		UI.state = "Edit";
		UI.ApplyState();
  	}


  UI.PopulateSelects();
    UI.PushCharacter();

	UI.Charactertouched = true;
};

UI.changeSpellCard = function(Event)
{
    let id = $(this).attr('id');
    let index = id.slice(16);

    //Update the Matrix
    Character.Talents[index].Spell = $(this).val();

    //Empty out the card
    $("#MatrixSpellWrapper" + index).html("");
    if ($(this).val() != "")
        $("#MatrixSpellWrapper" + index).append(UI.MakeSpellCard(Library.GetSpell($(this).val()), parseInt(CharacterManager.GetWillforceStep()), index));

    UI.ApplySituationalStepDice();

	UI.Charactertouched = true;
};

UI.PullBasics = function(Event)
{
	if ($(this).prop("tagName") == "DIV")
		Character.Basic[$(this).attr('id')] = $(this).html();
	else			
		Character.Basic[$(this).attr('id')] = $(this).val();

    if (Character.Basic.Name != "")
        document.title = Character.Basic.Name + " - Steps " + version;
    else
        document.title = "Steps " + version;

	UI.Charactertouched = true;
};

UI.PullDescription = function()
{
	Character.Basic.Description = $(this).text();
}

UI.PullRace = function()
{
	Character.Race = $(this).val(); 

	CharacterManager.ResetBuffer();
    CharacterManager.CheckPaths();
	CharacterManager.RebuildTalentList();
    CharacterManager.CheckKnacks();

	UI.PushAttributes();
	UI.PushDerived();
    UI.PushAbilities();

	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	UI.PushTalents();
	$(".talentSelect").on("input propertychange paste",        this, UI.PullTalentSelect);
	$(".versatilitySelect").on("input propertychange paste",   this, UI.PullVersatilitySelect);
	$(".talentTierSelect").on("input propertychange paste",    this, UI.PullTierSelect);
	$(".TalentFreeRankInput").on("input propertychange paste", this, UI.PullTalentFreeRank);
	$(".TalentRankInput").on("input propertychange paste",     this, UI.PullTalentRank);
	$(".pathTalentSelect").on("input propertychange paste",    this, UI.PullPathTalentSelect);

	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.Charactertouched = true;
};

UI.PullCurrentLP = function()
{
	// Input validation
	if (($(this).val()) != parseInt($(this).val())+"")
	{
		$(this).val(CharacterManager.GetRemainingLegendPoints());
		return;
	}

	CharacterManager.SetRemainingLegendPoints($(this).val());
    $("#LpTotal").val(Character.LegendPoints);

	UI.Charactertouched = true;
};

UI.PullTotalP = function()
{
	// Input validation
	if (($(this).val()) != parseInt($(this).val())+"")
	{
		$(this).val(Character.LegendPoints);
		return;
	}

	CharacterManager.SetTotalLegendPoints($(this).val());
    $("#LpCurrent").val(CharacterManager.GetRemainingLegendPoints());

	UI.Charactertouched = true;
};

UI.KillDiscipline = function()
{
	let index = ($(this).attr('id').slice(14));

	CharacterManager.KillDiscipline(index);

	CharacterManager.ResetBuffer();

    CharacterManager.CheckPaths();

	CharacterManager.RebuildSelectedTalents();
	CharacterManager.RebuildTalentList();

    CharacterManager.CheckKnacks();
    CharacterManager.CheckSpells();


	if (Character.Disciplines.length == 0 || Character.Disciplines.find(o => o.ID == "Empty") == undefined) 
		$("#AddDiscipline").show();

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullDiscipline = function(event)
{
	//Get the index
	let index = ($(this).attr('id').slice(16));

	let NonePreviouslySelected = false;

	if (Character.Disciplines[index] == undefined)
		NonePreviouslySelected = true;
	if(Character.Disciplines[index] != undefined && Character.Disciplines[index].ID == "Empty")
		NonePreviouslySelected = true;

	if (!NonePreviouslySelected && !confirm('Changing a Discipline will reset all Talents and Talent Ranks selected for that Discipline. Are you sure?'))
		return false;

	// Check if Disciplines under this are not taken
	if (index>0)
		for (let i = 0; i < index; i++) 
			if (Character.Disciplines[i].ID == "Empty")
			{
				Character.Disciplines.splice(i,1);
				index--;
			}

	// Set the new Discipline
	Character.Disciplines[index].ID = $(this).val();

	if($(this).val() == "Empty")
	{
		$("#Circle"+index).val("0");
		Character.Disciplines[index].Circle = "0";
		Character.Disciplines[index].OptionalTalentsChosen = [];

		$("#AddDiscipline").hide();
	}
	else
	{
		$("#Circle"+index).val("1");
		Character.Disciplines[index].Circle = "1";
		Character.Disciplines[index].OptionalTalentsChosen = [{"Circle" : "1", "ID" : "Empty"}];

		$("#AddDiscipline").show();
	}

	CharacterManager.ResetBuffer();

    CharacterManager.CheckPaths();
	CharacterManager.RebuildSelectedTalents();
	CharacterManager.RebuildTalentList();

    CharacterManager.CheckKnacks();
    CharacterManager.CheckSpells();
    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullCircle = function(event)
{
	//Get the index
	let index = parseInt(($(this).attr('id').slice(6)));

	Character.Disciplines[index].Circle = $(this).val();

	CharacterManager.ResetBuffer();

    CharacterManager.CheckPaths();

	CharacterManager.RebuildSelectedTalents();
	CharacterManager.RebuildTalentList();
	UI.PushDerived();
    UI.PushAbilities();
	UI.PushTalents();
	UI.PushSpellMatrices();

	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	$(".talentSelect").on("input propertychange paste",        this, UI.PullTalentSelect);
	$(".versatilitySelect").on("input propertychange paste",   this, UI.PullVersatilitySelect);
	$(".talentTierSelect").on("input propertychange paste",    this, UI.PullTierSelect);
	$(".TalentFreeRankInput").on("input propertychange paste", this, UI.PullTalentFreeRank);
	$(".TalentRankInput").on("input propertychange paste",     this, UI.PullTalentRank);
	$(".pathTalentSelect").on("input propertychange paste",    this, UI.PullPathTalentSelect);

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.Charactertouched = true;
};

UI.PullStartedAt = function(event)
{
	//Get the index
	let index = parseInt(($(this).attr('id').slice(9)));

	CharacterManager.SetDisciplineStartedAt(index, $(this).val());

	CharacterManager.ResetBuffer("Legend");
	UI.PushLP();

	UI.Charactertouched = true;
};

UI.AddDiscipline = function()
{
	CharacterManager.AddDiscipline();

	UI.PushBasics();
	UI.PushDetails();
	$(".basics").on("input propertychange paste",              this, UI.PullBasics);
	$("#Race").on("input propertychange paste",                this, UI.PullRace);
	$("#LpCurrent").on("input propertychange paste",           this, UI.PullCurrentLP);
	$("#LpTotal").on("input propertychange paste",             this, UI.PullTotalP);

	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#AddDiscipline").hide();

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	UI.Charactertouched = true;
};

UI.KillPath = function(event)
{
	let index = ($(this).attr('id').slice(8));

	CharacterManager.KillPath(index);

	CharacterManager.ResetBuffer();
	CharacterManager.RebuildTalentList();

    UI.Redraw();

	UI.Charactertouched = true;
}

UI.PullPath = function(event)
{
	let index = ($(this).attr('id').slice(10));

	CharacterManager.SetPath(index, $(this).val());

	CharacterManager.ResetBuffer();
	CharacterManager.RebuildTalentList();

    UI.Redraw();

	UI.Charactertouched = true;
}

UI.PullPathRank = function(event)
{
	let index = ($(this).attr('id').slice(8));

	CharacterManager.SetPathRank(index, $(this).val());

	CharacterManager.ResetBuffer();
	CharacterManager.RebuildTalentList();

    UI.Redraw();

	UI.Charactertouched = true;
}

UI.PullPathDiscipline = function(event)
{
	let index = ($(this).attr('id').slice(14));

	CharacterManager.SetPathDiscipline(index, $(this).val());

	CharacterManager.ResetBuffer();

	CharacterManager.CalculateDisciplineBonuses();
	
	UI.PushDerived();
	UI.PushAbilities();

	UI.Charactertouched = true;
}


UI.AddPath = function(event)
{
	CharacterManager.AddPath();

	CharacterManager.ResetBuffer();
	CharacterManager.RebuildTalentList();

    UI.Redraw();

	UI.Charactertouched = true;
}

UI.PullQuestorPassion = function(event)
{
	CharacterManager.SetQuestorPassion($(this).val());

	if (Character.Questor.Passion == "Empty")
    {
        $("#QuestorRank").val(0);
        $("#QuestorRank").prop('disabled', true);
    }
    else
    {
        $("#QuestorRank").val(1);
        $("#QuestorRank").prop('disabled', false);
    }

	CharacterManager.ResetBuffer();
	CharacterManager.CalculateDisciplineBonuses();

	UI.PushLP();
	UI.PushDevotions();
	UI.PushDerived();
	UI.PushAbilities();	

	$(".devotionSelect").on("input propertychange paste",      this, UI.PullDevotionSelect);
	$(".devotionRankInput").on("input propertychange paste",   this, UI.PullDevotionRank);
	$(".devotionAbilityInput").on("input propertychange paste",this, UI.PullDevotionAbility);

	UI.Charactertouched = true;
}

UI.PullQuestorRank = function(event)
{
	CharacterManager.SetQuestorRank($(this).val());

	CharacterManager.ResetBuffer();
	CharacterManager.CalculateDisciplineBonuses();

	UI.PushLP();
	UI.PushDevotions();
	UI.PushDerived();
	UI.PushAbilities();	

	$(".devotionSelect").on("input propertychange paste",      this, UI.PullDevotionSelect);
	$(".devotionRankInput").on("input propertychange paste",   this, UI.PullDevotionRank);
	$(".devotionAbilityInput").on("input propertychange paste",this, UI.PullDevotionAbility);

	UI.Charactertouched = true;
}

UI.PullAttributeSelect = function (event) 
{
	CharacterManager.ResetBuffer();
	
	let attributeAbbreviation = $(this).attr('id').slice(0,3);

	CharacterManager.SetAttributePoints(attributeAbbreviation, $(this).val());

	UI.UpdateAttributeValues(attributeAbbreviation);
	UI.UpdateTalentSteps(attributeAbbreviation);
	UI.UpdateKnackSteps(attributeAbbreviation);
	UI.UpdateSkillSteps(attributeAbbreviation);
	UI.UpdateRemainingSkillPoints();
	UI.PushLP();
	UI.PushDerived();

	UI.PushDevotions();
	$(".devotionSelect").on("input propertychange paste",      this, UI.PullDevotionSelect);
	$(".devotionRankInput").on("input propertychange paste",   this, UI.PullDevotionRank);
	$(".devotionAbilityInput").on("input propertychange paste",this, UI.PullDevotionAbility);

	UI.PushEquipment();
	$(".killEq").on("click",                                   this, UI.KillEq);
	$(".eqInUse").on("click",                                  this, UI.PullEqInUse);
	$(".eqSelect").on("input propertychange paste",            this, UI.PullEqSelect);
	$(".eqName").on("input propertychange paste",              this, UI.PullEqName);
	$(".eqTypeSelect").on("input propertychange paste",        this, UI.PullEqTypeSelect);
	$(".eqRank").on("input propertychange paste",              this, UI.PullEqRank);
	$(".eqForge").on("input propertychange paste",             this, UI.PullEqForge);
	$(".eqPhForge").on("input propertychange paste",           this, UI.PullEqPhForge);
	$(".eqMyForge").on("input propertychange paste",           this, UI.PullEqMyForge);
	$(".eqCount").on("input propertychange paste",             this, UI.PullEqCount);
	$("#AddEqButton").on("click",                              this, UI.AddEq);


	UI.PushSpellMatrices();

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.Charactertouched = true;
};

UI.PullAttributeIncreases = function (event) 
{
	//Get the abbreviation
	let attributeAbbreviation = $(this).attr('id').slice(0,3);

	CharacterManager.ResetBuffer();

	CharacterManager.SetAttributeIncreasess(attributeAbbreviation, $(this).val());

	$("#LpCurrent").val(CharacterManager.GetRemainingLegendPoints());

	UI.UpdateAttributeValues(attributeAbbreviation);
	UI.UpdateTalentSteps(attributeAbbreviation);
	UI.UpdateKnackSteps(attributeAbbreviation);
	UI.UpdateSkillSteps(attributeAbbreviation);
	UI.UpdateRemainingSkillPoints();

	UI.PushDerived();

	UI.PushDevotions();
	$(".devotionSelect").on("input propertychange paste",      this, UI.PullDevotionSelect);
	$(".devotionRankInput").on("input propertychange paste",   this, UI.PullDevotionRank);
	$(".devotionAbilityInput").on("input propertychange paste",this, UI.PullDevotionAbility);

	UI.PushEquipment();
	$(".killEq").on("click",                                   this, UI.KillEq);
	$(".eqInUse").on("click",                                  this, UI.PullEqInUse);
	$(".eqSelect").on("input propertychange paste",            this, UI.PullEqSelect);
	$(".eqName").on("input propertychange paste",              this, UI.PullEqName);
	$(".eqTypeSelect").on("input propertychange paste",        this, UI.PullEqTypeSelect);
	$(".eqRank").on("input propertychange paste",              this, UI.PullEqRank);
	$(".eqForge").on("input propertychange paste",             this, UI.PullEqForge);
	$(".eqPhForge").on("input propertychange paste",           this, UI.PullEqPhForge);
	$(".eqMyForge").on("input propertychange paste",           this, UI.PullEqMyForge);
	$(".eqCount").on("input propertychange paste",             this, UI.PullEqCount);
	$("#AddEqButton").on("click",                              this, UI.AddEq);

	UI.PushSpellMatrices();

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.Charactertouched = true;
};

UI.PullTalentFreeRank = function(event)
{
	let id = $(this).attr('id');
	let index = parseInt($(this).attr('id').slice(14));

	CharacterManager.ResetBuffer();

	CharacterManager.SetTalentFreeRank(index, $(this).val());

    CharacterManager.CheckPaths();
	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	CharacterManager.RebuildTalentList();

	UI.PushTalents();
	$(".talentSelect").on("input propertychange paste",        this, UI.PullTalentSelect);
	$(".versatilitySelect").on("input propertychange paste",   this, UI.PullVersatilitySelect);
	$(".talentTierSelect").on("input propertychange paste",    this, UI.PullTierSelect);
	$(".TalentFreeRankInput").on("input propertychange paste", this, UI.PullTalentFreeRank);
	$(".TalentRankInput").on("input propertychange paste",     this, UI.PullTalentRank);
	$(".pathTalentSelect").on("input propertychange paste",    this, UI.PullPathTalentSelect);

	UI.UpdateRemainingTalentPoints();

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

    UI.PushSpellMatrices();
    $(".MatrixCardSelect").on("change",                        this, UI.changeSpellCard);

    $("#"+id).focus();

	UI.Charactertouched = true;

};

UI.PullTalentRank = function(event)
{
	let id = $(this).attr('id');
	let index = parseInt(($(this).attr('id').slice(10)));

	CharacterManager.ResetBuffer();

	CharacterManager.SetTalentRank(index, $(this).val());

    CharacterManager.CheckPaths();
	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	CharacterManager.RebuildTalentList();
	UI.PushTalents();
	$(".talentSelect").on("input propertychange paste",        this, UI.PullTalentSelect);
	$(".versatilitySelect").on("input propertychange paste",   this, UI.PullVersatilitySelect);
	$(".talentTierSelect").on("input propertychange paste",    this, UI.PullTierSelect);
	$(".TalentFreeRankInput").on("input propertychange paste", this, UI.PullTalentFreeRank);
	$(".TalentRankInput").on("input propertychange paste",     this, UI.PullTalentRank);
	$(".pathTalentSelect").on("input propertychange paste",    this, UI.PullPathTalentSelect);

	UI.UpdateRemainingTalentPoints();

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

    UI.PushSpellMatrices();
    $(".MatrixCardSelect").on("change",                        this, UI.changeSpellCard);

	UI.PushLP();

    $("#"+id).focus();

	UI.Charactertouched = true;
};

UI.PullTalentSelect = function(event)
{
	let index = parseInt(($(this).attr('id').slice(12)));

	CharacterManager.ResetBuffer();
	CharacterManager.SetTalent(index, $(this).val());

    CharacterManager.CheckPaths();
	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	CharacterManager.RebuildSelectedTalents();
	CharacterManager.RebuildTalentList();
	UI.PushDerived();
    UI.PushAbilities();
	UI.PushTalents();

    UI.PushSpellMatrices();
    $(".MatrixCardSelect").on("change",                        this, UI.changeSpellCard);

	UI.PushLP();

	$(".talentSelect").on("input propertychange paste",        this, UI.PullTalentSelect);
	$(".versatilitySelect").on("input propertychange paste",   this, UI.PullVersatilitySelect);
	$(".talentTierSelect").on("input propertychange paste",    this, UI.PullTierSelect);
	$(".TalentFreeRankInput").on("input propertychange paste", this, UI.PullTalentFreeRank);
	$(".TalentRankInput").on("input propertychange paste",     this, UI.PullTalentRank);
	$(".pathTalentSelect").on("input propertychange paste",    this, UI.PullPathTalentSelect);

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.Charactertouched = true;
};

UI.PullVersatilitySelect = function(event)
{
	let index = parseInt(($(this).attr('id').slice(17)));

	CharacterManager.ResetBuffer();
	CharacterManager.SetTalent(index, $(this).val(), "Versatility", $("#VersatilityTierSelect"+index).val());
	CharacterManager.RebuildSelectedTalents();

    CharacterManager.CheckPaths();
	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	CharacterManager.RebuildTalentList();
	UI.PushDerived();
    UI.PushAbilities();
	UI.PushTalents();
	UI.PushSpellMatrices();
	UI.PushLP();

	$(".talentSelect").on("input propertychange paste",        this, UI.PullTalentSelect);
	$(".versatilitySelect").on("input propertychange paste",   this, UI.PullVersatilitySelect);
	$(".talentTierSelect").on("input propertychange paste",    this, UI.PullTierSelect);
	$(".TalentFreeRankInput").on("input propertychange paste", this, UI.PullTalentFreeRank);
	$(".TalentRankInput").on("input propertychange paste",     this, UI.PullTalentRank);
	$(".pathTalentSelect").on("input propertychange paste",    this, UI.PullPathTalentSelect);

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.PushSpells();
	$(".killSpell").on("click",                                this, UI.KillSpell);
	$(".spellSelect").on("input propertychange paste",         this, UI.PullSpellSelect);
	$("#AddSpellButton").on("click",                           this, UI.AddSpell);

    UI.PushSpellMatrices();
    $(".MatrixCardSelect").on("change",                        this, UI.changeSpellCard);

	UI.Charactertouched = true;
};

UI.PullPathTalentSelect = function(event)
{
	console.log("PullPathTalent() called")

	let index = parseInt(($(this).attr('id').slice(16)));

	CharacterManager.SetPathTalent(index, $(this).val());

	CharacterManager.ResetBuffer();

	CharacterManager.RebuildTalentList();

    CharacterManager.CheckPaths();
	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	UI.PushDerived();
    UI.PushAbilities();
	UI.PushTalents();
	UI.PushSpellMatrices();

	$(".talentSelect").on("input propertychange paste",        this, UI.PullTalentSelect);
	$(".versatilitySelect").on("input propertychange paste",   this, UI.PullVersatilitySelect);
	$(".talentTierSelect").on("input propertychange paste",    this, UI.PullTierSelect);
	$(".TalentFreeRankInput").on("input propertychange paste", this, UI.PullTalentFreeRank);
	$(".TalentRankInput").on("input propertychange paste",     this, UI.PullTalentRank);
	$(".pathTalentSelect").on("input propertychange paste",    this, UI.PullPathTalentSelect);

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.PushSpells();
	$(".killSpell").on("click",                                this, UI.KillSpell);
	$(".spellSelect").on("input propertychange paste",         this, UI.PullSpellSelect);
	$("#AddSpellButton").on("click",                           this, UI.AddSpell);

    UI.PushSpellMatrices();
    $(".MatrixCardSelect").on("change",                        this, UI.changeSpellCard);

	UI.Charactertouched = true;
}

UI.PullTierSelect = function(event)
{
	let index = parseInt(($(this).attr('id').slice(21)));

	CharacterManager.ResetBuffer();
	CharacterManager.SetTalentTier(index, $(this).val());
	CharacterManager.RebuildSelectedTalents();
	CharacterManager.RebuildTalentList();
	UI.PushDerived();
    UI.PushAbilities();
	UI.PushTalents();
	UI.PushSpellMatrices();
	UI.PushLP();

	$(".talentSelect").on("input propertychange paste",        this, UI.PullTalentSelect);
	$(".versatilitySelect").on("input propertychange paste",   this, UI.PullVersatilitySelect);
	$(".talentTierSelect").on("input propertychange paste",    this, UI.PullTierSelect);
	$(".TalentFreeRankInput").on("input propertychange paste", this, UI.PullTalentFreeRank);
	$(".TalentRankInput").on("input propertychange paste",     this, UI.PullTalentRank);
	$(".pathTalentSelect").on("input propertychange paste",    this, UI.PullPathTalentSelect);

	UI.Charactertouched = true;
};

UI.KillSkill = function()
{
	CharacterManager.ResetBuffer();

	let index = parseInt($(this).attr('id').slice(9));

	let skillName;
	if (Character.Skills[index].ID == "Empty")
		skillName = "(Empty)";
	else
		if (Character.Skills[index].Category == "General")
			skillName = Library.GetSkill(Character.Skills[index].ID).Name;
		else
			skillName = Character.Skills[index].Name;

	CharacterManager.KillSkill(index);


    CharacterManager.CheckPaths();
	CharacterManager.RebuildTalentList();
    CharacterManager.CheckKnacks();
    CharacterManager.CheckSpells();

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullSkillCategory = function()
{
	CharacterManager.ResetBuffer();

	let index = parseInt($(this).attr('id').slice(19));
	
	CharacterManager.SetSkillCategory(index, $(this).val());

	UI.PushSkills();
	$(".killSkill").on("click",                                this, UI.KillSkill);
	$(".skillCategorySelect").on("input propertychange paste", this, UI.PullSkillCategory);
	$(".SkillInput").on("change",          this, UI.PullSkillInput);
	$(".skillSelect").on("input propertychange paste",         this, UI.PullSkillSelect);
	$(".skillFreeRank").on("input propertychange paste",       this, UI.PullSkillFreeRank);
	$(".skillRank").on("input propertychange paste",           this, UI.PullSkillRank);
	$("#AddSkillButton").on("click",                           this, UI.AddSkill);
	UI.PushLP();

	UI.Charactertouched = true;
};

UI.PullSkillInput = function()
{
	CharacterManager.ResetBuffer();

	let index = parseInt($(this).attr('id').slice(9));

	CharacterManager.SetSkillName(index, $(this).val());

	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	UI.Charactertouched = true;
};

UI.PullSkillSelect = function()
{
	CharacterManager.ResetBuffer();

	let index = parseInt($(this).attr('id').slice(11));

	CharacterManager.SetSkillID(index, $(this).val());

	UI.PushSkills();
	$(".killSkill").on("click",                                this, UI.KillSkill);
	$(".skillCategorySelect").on("input propertychange paste", this, UI.PullSkillCategory);
	$(".SkillInput").on("change",          this, UI.PullSkillInput);
	$(".skillSelect").on("input propertychange paste",         this, UI.PullSkillSelect);
	$(".skillFreeRank").on("input propertychange paste",       this, UI.PullSkillFreeRank);
	$(".skillRank").on("input propertychange paste",           this, UI.PullSkillRank);
	$("#AddSkillButton").on("click",                           this, UI.AddSkill);

	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	UI.Charactertouched = true;
};

UI.PullSkillFreeRank = function(event) 
{
	let index = parseInt($(this).attr('id').slice(13));

	CharacterManager.ResetBuffer();

	CharacterManager.SetSkillFreeRank(index, $(this).val());
	UI.UpdateSkillStepDice(index);
    UI.UpdateRemainingSkillPoints();

	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	UI.Charactertouched = true;
};

UI.PullSkillRank = function(event) 
{
	let index = parseInt($(this).attr('id').slice(9));

	CharacterManager.ResetBuffer();

	CharacterManager.SetSkillRank(index, $(this).val());
	UI.UpdateSkillStepDice(index);
    UI.UpdateRemainingSkillPoints();

	UI.PushBasics();
	$(".killDiscipline").on("click",                           this, UI.KillDiscipline);
	$(".disciplineSelect").on("input propertychange paste",    this, UI.PullDiscipline);
	$(".disciplineCircle").on("input propertychange paste",    this, UI.PullCircle);
	$(".disciplineStartedAt").on("input propertychange paste", this, UI.PullStartedAt);

	$(".killPath").on("click",                                 this, UI.KillPath);
	$(".pathSelect").on("input propertychange paste",          this, UI.PullPath);
	$(".pathRank").on("input propertychange paste",            this, UI.PullPathRank);
	$(".pathDiscipline").on("input propertychange paste",      this, UI.PullPathDiscipline);
	$("#AddPath").on("click",                                  this, UI.AddPath);

	$("#QuestorPassionSelect").on("input propertychange paste",this, UI.PullQuestorPassion);
	$("#QuestorRank").on("input propertychange paste",         this, UI.PullQuestorRank);

	UI.Charactertouched = true;
};

UI.AddSkill = function(event)
{
	CharacterManager.ResetBuffer();

	CharacterManager.AddSkill();

	UI.PushSkills();
	$(".killSkill").on("click",                                this, UI.KillSkill);
	$(".skillCategorySelect").on("input propertychange paste", this, UI.PullSkillCategory);
	$(".SkillInput").on("change",          this, UI.PullSkillInput);
	$(".skillSelect").on("input propertychange paste",         this, UI.PullSkillSelect);
	$(".skillFreeRank").on("input propertychange paste",       this, UI.PullSkillFreeRank);
	$(".skillRank").on("input propertychange paste",           this, UI.PullSkillRank);
	$("#AddSkillButton").on("click",                           this, UI.AddSkill);
	UI.PushLP();	

	UI.Charactertouched = true;
};

UI.KillKnack = function(event)
{
	CharacterManager.ResetBuffer();

	let index = parseInt($(this).attr('id').slice(9));

	CharacterManager.KillKnack(index);

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	CharacterManager.CheckSpells();

	UI.PushSpells();
	$(".killSpell").on("click",                                this, UI.KillSpell);
	$(".spellSelect").on("input propertychange paste",         this, UI.PullSpellSelect);
	$("#AddSpellButton").on("click",                           this, UI.AddSpell);

	CharacterManager.ResetBuffer();
	UI.PushLP();

	UI.Charactertouched = true;
};

UI.PullKnackSelect = function(event)
{
	CharacterManager.ResetBuffer();

	let index = parseInt($(this).attr('id').slice(11));

	CharacterManager.SelectKnack(index, $(this).val());

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.PushLP();

	CharacterManager.CheckSpells();

	UI.PushSpells();
	$(".killSpell").on("click",                                this, UI.KillSpell);
	$(".spellSelect").on("input propertychange paste",         this, UI.PullSpellSelect);
	$("#AddSpellButton").on("click",                           this, UI.AddSpell);

	UI.Charactertouched = true;
};

UI.AddKnack = function(event)
{
	CharacterManager.ResetBuffer();

	CharacterManager.AddKnack();

	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);
	UI.PushLP();

	UI.Charactertouched = true;
};

UI.PullDevotionSelect = function()
{	
	let index = parseInt($(this).attr('id').slice(14));

	CharacterManager.SetDevotion(index, $(this).val())

	CharacterManager.ResetBuffer();

	UI.PushDevotions(index);
	$(".devotionSelect").on("input propertychange paste",      this, UI.PullDevotionSelect);
	$(".devotionRankInput").on("input propertychange paste",   this, UI.PullDevotionRank);
	$(".devotionAbilityInput").on("input propertychange paste",this, UI.PullDevotionAbility);

	UI.PushDerived();
	UI.PushLP();

	UI.Charactertouched = true;
}

UI.PullDevotionRank = function()
{
	let index = parseInt($(this).attr('id').slice(12));

	CharacterManager.ResetBuffer();

	CharacterManager.SetDevotionRank(index, $(this).val())

	UI.UpdateDevotionStepDice(index);

	UI.PushDerived();
	UI.PushLP();

	UI.Charactertouched = true;
}

UI.PullDevotionAbility = function(event)
{
	let index = parseInt($(this).attr('id').slice(15));

console.log(index);

	CharacterManager.SetDevotionAbility(index, $(this).val())

	UI.Charactertouched = true;
}

UI.KillEq = function(event)
{
	let index = parseInt($(this).attr('id').slice(6));

	CharacterManager.KillEq(index);

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullEqInUse = function()
{
	let index = parseInt($(this).attr('id').slice(7));

	CharacterManager.SetEqInUse(index, $(this).is(':checked'));

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullEqCount = function()
{
	let index = parseInt($(this).attr('id').slice(7));

	// Input validation
	if (($(this).val()) != parseInt($(this).val())+"")
	{
		$(this).val(Character.Equipment[index].Count);
		return;
	}

	CharacterManager.SetEqCount(index, $(this).val());

	UI.PushDerived();

	UI.Charactertouched = true;
};

UI.PullEqSelect = function(event)
{
	let index = parseInt($(this).attr('id').slice(8));

	CharacterManager.SetEq(index, $(this).val());

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullEqName = function(event)
{
	CharacterManager.ResetBuffer();

	let index = parseInt($(this).attr('id').slice(6));

	CharacterManager.SetEqName(index, $(this).val());

	UI.Charactertouched = true;
};

UI.PullEqTypeSelect = function(event)
{
	let index = parseInt($(this).attr('id').slice(12));

	CharacterManager.SetEqType(index, $(this).val());

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullEqRank = function()
{
	let index = parseInt($(this).attr('id').slice(6));

	CharacterManager.SetEqRank(index, $(this).val());

    UI.Redraw();	

	UI.Charactertouched = true;
};

UI.PullEqForge = function()
{
	let index = parseInt($(this).attr('id').slice(7));

	CharacterManager.SetEqForge(index, $(this).val());

	UI.UpdateDamageStep(index);

	UI.Charactertouched = true;
};

UI.PullEqPhForge = function()
{
	let index = parseInt($(this).attr('id').slice(9));

	CharacterManager.SetEqPhForge(index, $(this).val());

	UI.PushDerived();
	UI.UpdateArmorValues(index);

	UI.Charactertouched = true;
};

UI.PullEqMyForge = function()
{

	let index = parseInt($(this).attr('id').slice(9));
	
	CharacterManager.SetEqMyForge(index, $(this).val());
	
	UI.PushDerived();
	UI.UpdateArmorValues(index);

	UI.Charactertouched = true;
};

UI.AddEq = function(event)
{
	CharacterManager.AddEq();

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.KillSpell = function()
{
	CharacterManager.ResetBuffer();

	let index = parseInt($(this).attr('id').slice(9));

	CharacterManager.KillSpell(index);
	CharacterManager.CheckSpells();

	UI.PushSpells();
	$(".killSpell").on("click",                                this, UI.KillSpell);
	$(".spellSelect").on("input propertychange paste",         this, UI.PullSpellSelect);
	$("#AddSpellButton").on("click",                           this, UI.AddSpell);

	UI.PushLP();

    UI.PushSpellMatrices();
    $(".MatrixCardSelect").on("change",                        this, UI.changeSpellCard);

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.Charactertouched = true;
};

UI.PullSpellSelect = function()
{
	let index = parseInt($(this).attr('id').slice(11));

	CharacterManager.SetSpell(index, $(this).val());

	CharacterManager.ResetBuffer();
	CharacterManager.CheckSpells();

	UI.PushSpells();
	$(".killSpell").on("click",                                this, UI.KillSpell);
	$(".spellSelect").on("input propertychange paste",         this, UI.PullSpellSelect);
	$("#AddSpellButton").on("click",                           this, UI.AddSpell);

	UI.PushLP();

    UI.PushSpellMatrices();
    $(".MatrixCardSelect").on("change",                        this, UI.changeSpellCard);

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.Charactertouched = true;
};

UI.AddSpell = function()
{
	CharacterManager.AddSpell();
	CharacterManager.ResetBuffer();

	UI.PushSpells();
	$(".killSpell").on("click",                                this, UI.KillSpell);
	$(".spellSelect").on("input propertychange paste",         this, UI.PullSpellSelect);
	$("#AddSpellButton").on("click",                           this, UI.AddSpell);

	UI.PushLP();

    UI.PushSpellMatrices();
    $(".MatrixCardSelect").on("change",                        this, UI.changeSpellCard);

    CharacterManager.CheckKnacks();
	UI.PushKnacks();
	$(".killKnack").on("click",                                this, UI.KillKnack);
	$(".knackSelect").on("input propertychange paste",         this, UI.PullKnackSelect);
	$("#AddKnackButton").on("click",                           this, UI.AddKnack);

	UI.Charactertouched = true;
};

UI.KillMagic = function()
{
	let index = parseInt($(this).attr('id').slice(9));
	CharacterManager.KillMagic(index);

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.MagicApplicableClicked = function()
{
	let index = parseInt($(this).attr('id').slice(15));
	CharacterManager.SetMagicApplicable(index, $(this).is(':checked'));

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullMagicSelect = function()
{
	let index = parseInt($(this).attr('id').slice(11));
	CharacterManager.SetMagic(index, $(this).val());

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullMagicTarget = function()
{
	let index = parseInt($(this).attr('id').slice(11));
	CharacterManager.SetMagicTarget(index, $(this).val());

	UI.Charactertouched = true;
};

UI.PullMagicTalentorSkillSelect = function()
{
	let index = parseInt($(this).attr('id').slice(24));
	CharacterManager.SetMagicTalentorSkill(index, $(this).val());

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullMagicAttributeSelect = function()
{
	let index = parseInt($(this).attr('id').slice(21));
	CharacterManager.SetMagicAttributes(index, $("#MagicAttribute1Select"+index).val(), $("#MagicAttribute2Select"+index).val());

    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullMagicThreadTargetSelect = function()
{
	let magicIndex = parseInt($(this).attr('id').slice(24));
	let threadIndex = parseInt($(this).attr('id').slice(17,18));

	CharacterManager.SetMagicThreadTarget(magicIndex, threadIndex, $(this).val());

	CharacterManager.ResetBuffer();
	if (Character.Magic[magicIndex].Applicable == "Yes")
	    UI.Redraw();

	UI.Charactertouched = true;
};

UI.PullMagicThreadRank = function()
{
	let magicIndex = parseInt($(this).attr('id').slice(21));
	let threadIndex = parseInt($(this).attr('id').slice(15,16));

	CharacterManager.SetMagicThreadRank(magicIndex, threadIndex, parseInt($(this).val()));

	CharacterManager.ResetBuffer();
	UI.PushLP();
	if (Character.Magic[magicIndex].Applicable == "Yes")
	    UI.Redraw();

	UI.Charactertouched = true;
};

UI.AddMagic = function()
{
	CharacterManager.AddMagic();

	UI.PushMagic();
	$(".killMagic").on("click",                                     this, UI.KillMagic);
	$(".magicApplicable").on("click",                               this, UI.MagicApplicableClicked);
    $(".magicSelect").on("input propertychange paste",              this, UI.PullMagicSelect);
    $(".magicTarget").on("input propertychange paste",              this, UI.PullMagicTarget);
    $(".magicTalentorSkillSelect").on("input propertychange paste", this, UI.PullMagicTalentorSkillSelect);
    $(".magicAttributeSelect").on("input propertychange paste",     this, UI.PullMagicAttributeSelect);
    $(".magicThreadTargetSelect").on("input propertychange paste",  this, UI.PullMagicThreadTargetSelect);
    $(".magicThreadRank").on("input propertychange paste",          this, UI.PullMagicThreadRank);
	$("#AddMagicButton").on("click",                                this, UI.AddMagic);

	UI.Charactertouched = true;
};

















