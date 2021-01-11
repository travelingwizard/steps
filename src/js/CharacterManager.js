// Character manager object for the Steps project, Lars Gottlieb 2018-20
/*jshint esversion: 6 */

let CharacterManager = new function()
{
	"use strict";

	this.Buffer = function(){};
	
	this.ResetBuffer = function(section)
	{
		if (section == undefined)
			this.Buffer = function(){};

		switch (section)
		{
			case "Legend" :
				this.Buffer.SpentLegendPoints = undefined;
				this.Buffer.LPBreakdown = undefined;
				break;
			default :
				this.Buffer = function(){};
				break;
		}
	};

	this.GetAttributeBonuses = function()
	{
		if(this.Buffer.AttributeBonuses != undefined)
			return this.Buffer.AttributeBonuses;

		let bonuses = [];
		for (let i = 0; i < 6; i++) 
		{
			let thisBonus = 0;
			bonuses.push(thisBonus);
		}

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item" && Character.Equipment[i].InUse == "Yes")
				{
					let thisItem = Library.GetEquipment(Character.Equipment[i].ID);
					let thisRank = thisItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");

					if (thisRank != undefined)
						for (let RankModifierKey in thisRank.Modifiers) 
							if (thisRank.Modifiers.hasOwnProperty(RankModifierKey)) 
								switch (RankModifierKey.toLowerCase())
								{
									case "dex":
										bonuses[0] += parseInt(thisRank.Modifiers[RankModifierKey]);
										break;
									case "str":
										bonuses[1] += parseInt(thisRank.Modifiers[RankModifierKey]);
										break;
									case "tgh":
									case "tou":
										bonuses[2] += parseInt(thisRank.Modifiers[RankModifierKey]);
										break;
									case "per":
										bonuses[3] += parseInt(thisRank.Modifiers[RankModifierKey]);
										break;
									case "wil":
										bonuses[4] += parseInt(thisRank.Modifiers[RankModifierKey]);
										break;
									case "cha":
										bonuses[5] += parseInt(thisRank.Modifiers[RankModifierKey]);
										break;
								}
				}

		// Blood / thread Magic
		if (Character.Magic != undefined)
			for (let i = 0; i < Character.Magic.length; i++) 
				if (Character.Magic[i].ID != "Empty")
				{
					let chaMagic = Character.Magic[i];
					let libMagic = Library.GetMagic(chaMagic.ID);
					if (libMagic != undefined && libMagic.Modifier != undefined) 
					{
						if (libMagic.Modifier.Attribute1 != undefined && chaMagic.Attribute1 != undefined)
							switch (chaMagic.Attribute1.toLowerCase())
							{
								case "dex":
									bonuses[0] += parseInt(libMagic.Modifier.Attribute1);
									break;
								case "str":
									bonuses[1] += parseInt(libMagic.Modifier.Attribute1);
									break;
								case "tgh":
								case "tou":
									bonuses[2] += parseInt(libMagic.Modifier.Attribute1);
									break;
								case "per":
									bonuses[3] += parseInt(libMagic.Modifier.Attribute1);
									break;
								case "wil":
									bonuses[4] += parseInt(libMagic.Modifier.Attribute1);
									break;
								case "cha":
									bonuses[5] += parseInt(libMagic.Modifier.Attribute1);
									break;
							}
						if (libMagic.Modifier.Attribute2 != undefined && chaMagic.Attribute2 != undefined )
							switch (chaMagic.Attribute2.toLowerCase())
							{
								case "dex":
									bonuses[0] += parseInt(libMagic.Modifier.Attribute2);
									break;
								case "str":
									bonuses[1] += parseInt(libMagic.Modifier.Attribute2);
									break;
								case "tgh":
								case "tou":
									bonuses[2] += parseInt(libMagic.Modifier.Attribute2);
									break;
								case "per":
									bonuses[3] += parseInt(libMagic.Modifier.Attribute2);
									break;
								case "wil":
									bonuses[4] += parseInt(libMagic.Modifier.Attribute2);
									break;
								case "cha":
									bonuses[5] += parseInt(libMagic.Modifier.Attribute2);
									break;
							}
					}
				}

		this.Buffer.AttributeBonuses = bonuses;
		return bonuses;
	};

	this.GetPhDefBonus = function() 
	{
		if(this.Buffer.PhDefBonus != undefined)
			return this.Buffer.PhDefBonus;

		let bonus = 0;

		// Race
		if (!isNaN(Library.GetRace(Character.Race).Modifiers.PhDef))
			bonus += parseInt(Library.GetRace(Character.Race).Modifiers.PhDef);

		//Discipline + Path
		bonus += this.GetDisciplineBonus("PhDef");

		// Shield
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].InUse == "Yes" && Character.Equipment[i].ID != "Empty")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Shield" || Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
				{
					if (!isNaN(Library.GetEquipment(Character.Equipment[i].ID).PhRating))
						bonus += parseInt(Library.GetEquipment(Character.Equipment[i].ID).PhRating);
				}

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
				{
					let thisItem = Library.GetEquipment(Character.Equipment[i].ID);
					let thisRank = thisItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");

					if (thisRank != undefined)
						for (let RankModifierKey in thisRank.Modifiers) 
							if (thisRank.Modifiers.hasOwnProperty(RankModifierKey)) 
								if (RankModifierKey.toLowerCase() == "phdef")
									bonus += parseInt(thisRank.Modifiers[RankModifierKey]);
				}

		// Blood / thread Magic
		if (Character.Magic != undefined)
			for (let i = 0; i < Character.Magic.length; i++) 
				if (Character.Magic[i].ID != "Empty" && Character.Magic[i].Threads != undefined)
					for (let j = 0; j < Character.Magic[i].Threads.length; j++) 
					{
						if (Character.Magic[i].Applicable == "Yes" && Character.Magic[i].Threads[j].Target == "PhDef")
							bonus += parseInt(Character.Magic[i].Threads[j].Rank);
					}

		this.Buffer.PhDefBonus = bonus;
		return bonus;
	};

	this.GetMyDefBonus = function() 
	{
		if(this.Buffer.MyDefBonus != undefined)
			return this.Buffer.MyDefBonus;

		let bonus = 0;

		// Race
		if (!isNaN(Library.GetRace(Character.Race).Modifiers.MyDef))
			bonus += parseInt(Library.GetRace(Character.Race).Modifiers.MyDef);

		//Discipline + Path
		bonus += this.GetDisciplineBonus("MyDef");

		// Shield
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Shield" || Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
				{
					if (!isNaN(Library.GetEquipment(Character.Equipment[i].ID).MyRating))
						bonus += parseInt(Library.GetEquipment(Character.Equipment[i].ID).MyRating);
					break;
				}

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
				{
					let thisItem = Library.GetEquipment(Character.Equipment[i].ID);
					let thisRank = thisItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");

					if (thisRank != undefined)
						for (let RankModifierKey in thisRank.Modifiers) 
							if (thisRank.Modifiers.hasOwnProperty(RankModifierKey)) 
								if (RankModifierKey.toLowerCase() == "mydef")
									bonus += parseInt(thisRank.Modifiers[RankModifierKey]);
				}

		// Blood / thread Magic
		if (Character.Magic != undefined)
			for (let i = 0; i < Character.Magic.length; i++) 
				if (Character.Magic[i].ID != "Empty" && Character.Magic[i].Threads != undefined)
					for (let j = 0; j < Character.Magic[i].Threads.length; j++) 
					{
						if (Character.Magic[i].Applicable == "Yes" && Character.Magic[i].Threads[j].Target == "MyDef")
							bonus += parseInt(Character.Magic[i].Threads[j].Rank);
					}

		this.Buffer.MyDefBonus = bonus;
		return bonus;
	};

	this.GetSoDefBonus = function()
	{
		if(this.Buffer.SoDefBonus != undefined)
			return this.Buffer.SoDefBonus;

		let bonus = 0;
		// Race
		if (!isNaN(Library.GetRace(Character.Race).Modifiers.SoDef))
			bonus += parseInt(Library.GetRace(Character.Race).Modifiers.SoDef);

		//Discipline + Path
		bonus += this.GetDisciplineBonus("SoDef");

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
				{
					let thisItem = Library.GetEquipment(Character.Equipment[i].ID);
					let thisRank = thisItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");

					if (thisRank != undefined)
						for (let RankModifierKey in thisRank.Modifiers) 
							if (thisRank.Modifiers.hasOwnProperty(RankModifierKey)) 
								if (RankModifierKey.toLowerCase() == "sodef")
									bonus += parseInt(thisRank.Modifiers[RankModifierKey]);
				}

		// Blood / thread Magic
		if (Character.Magic != undefined)
			for (let i = 0; i < Character.Magic.length; i++) 
				if (Character.Magic[i].ID != "Empty" && Character.Magic[i].Threads != undefined)
					for (let j = 0; j < Character.Magic[i].Threads.length; j++) 
					{
						if (Character.Magic[i].Applicable == "Yes" && Character.Magic[i].Threads[j].Target == "SoDef")
							bonus += parseInt(Character.Magic[i].Threads[j].Rank);
					}

		this.Buffer.SoDefBonus = bonus;
		return bonus;
	};

	this.GetAttributes = function()
	{
		if(this.Buffer.Attributes != undefined)
			return this.Buffer.Attributes;

		let Attributes = [], BaseAttributes = [];
		let thisRace = Library.GetRace(Character.Race);

		Attributes.push(parseInt(thisRace.Dex) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Dex.Buildpoints)) + Character.Attributes.Dex.Increases);
		Attributes.push(parseInt(thisRace.Str) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Str.Buildpoints)) + Character.Attributes.Str.Increases);
		Attributes.push(parseInt(thisRace.Tou) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Tou.Buildpoints)) + Character.Attributes.Tou.Increases);
		Attributes.push(parseInt(thisRace.Per) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Per.Buildpoints)) + Character.Attributes.Per.Increases);
		Attributes.push(parseInt(thisRace.Wil) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Wil.Buildpoints)) + Character.Attributes.Wil.Increases);
		Attributes.push(parseInt(thisRace.Cha) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Cha.Buildpoints)) + Character.Attributes.Cha.Increases);

		BaseAttributes.push(parseInt(thisRace.Dex) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Dex.Buildpoints)));
		BaseAttributes.push(parseInt(thisRace.Str) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Str.Buildpoints)));
		BaseAttributes.push(parseInt(thisRace.Tou) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Tou.Buildpoints)));
		BaseAttributes.push(parseInt(thisRace.Per) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Per.Buildpoints)));
		BaseAttributes.push(parseInt(thisRace.Wil) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Wil.Buildpoints)));
		BaseAttributes.push(parseInt(thisRace.Cha) + parseInt(Library.GetAttributeModifierByCost(Character.Attributes.Cha.Buildpoints)));

		this.Buffer.BaseAttributes = BaseAttributes;

		let bonuses = this.GetAttributeBonuses();
		for (let i = 0; i < bonuses.length; i++) 
		{
			Attributes[i] += bonuses[i];
		}

		this.Buffer.Attributes = Attributes;
		return Attributes;
	};

	this.GetDex = function() { return this.GetAttributes()[0]; }; 
	this.GetStr = function() { return this.GetAttributes()[1]; };
	this.GetTou = function() { return this.GetAttributes()[2]; }; 
	this.GetPer = function() { return this.GetAttributes()[3]; }; 
	this.GetWil = function() { return this.GetAttributes()[4]; }; 
	this.GetCha = function() { return this.GetAttributes()[5]; }; 

	this.GetDexStep = function() 
	{ 
		if(this.Buffer.DexStep == undefined)
			this.Buffer.DexStep = Library.GetAttribute(this.GetDex()).Step;

		return this.Buffer.DexStep; 
	};

	this.GetStrStep = function() 
	{ 
		if(this.Buffer.StrStep == undefined)
			this.Buffer.StrStep = Library.GetAttribute(this.GetStr()).Step;
		return this.Buffer.StrStep; 
	};

	this.GetTouStep = function() 
	{ 
		if(this.Buffer.TouStep == undefined)
			this.Buffer.TouStep = Library.GetAttribute(this.GetTou()).Step;
		return this.Buffer.TouStep; 
	};

	this.GetPerStep = function() 
	{ 
		if(this.Buffer.PerStep == undefined)
			this.Buffer.PerStep = Library.GetAttribute(this.GetPer()).Step;
		return this.Buffer.PerStep; 
	};

	this.GetWilStep = function() 
	{ 
		if(this.Buffer.WilStep ==undefined)
			this.Buffer.WilStep = Library.GetAttribute(this.GetWil()).Step;
		return this.Buffer.WilStep; 
	};

	this.GetChaStep = function() 
	{ 
		if(this.Buffer.ChaStep ==undefined)
			this.Buffer.ChaStep = Library.GetAttribute(this.GetCha()).Step;
		return this.Buffer.ChaStep; 
	};

	this.GetTgh = function() { console.log("GetTgh() called"); return this.GetTou(); };         
	this.GetTghStep = function() { console.log("GetTghStep() called"); return this.GetTouStep(); };

	this.GetBaseDexStep = function() 
	{ 
		if(this.Buffer.BaseAttributes == undefined)
			this.GetAttributes();
		return Library.GetAttribute(this.Buffer.BaseAttributes[0]).Step;
	};

	this.GetBaseStrStep = function() 
	{ 
		if(this.Buffer.BaseAttributes == undefined)
			this.GetAttributes();
		return Library.GetAttribute(this.Buffer.BaseAttributes[1]).Step;
	};

	this.GetBaseTouStep = function() 
	{ 
		if(this.Buffer.BaseAttributes == undefined)
			this.GetAttributes();
		return Library.GetAttribute(this.Buffer.BaseAttributes[2]).Step;
	};

	this.GetBasePerStep = function() 
	{ 
		if(this.Buffer.BaseAttributes == undefined)
			this.GetAttributes();
		return Library.GetAttribute(this.Buffer.BaseAttributes[3]).Step;
	};

	this.GetBaseWilStep = function() 
	{ 
		if(this.Buffer.BaseAttributes ==undefined)
			this.GetAttributes();
		return Library.GetAttribute(this.Buffer.BaseAttributes[4]).Step;
	};

	this.GetBaseChaStep = function() 
	{ 
		if(this.Buffer.BaseAttributes ==undefined)
			this.GetAttributes();
		return Library.GetAttribute(this.Buffer.BaseAttributes[5]).Step;
	};


	this.GetPhDef = function()
	{
		return parseInt(Library.GetAttribute(this.GetDex()).Defense) + this.GetPhDefBonus();
	};

	this.GetMyDef = function()
	{
		return parseInt(Library.GetAttribute(this.GetPer()).Defense) + this.GetMyDefBonus();
	};

	this.GetSoDef = function()
	{
		return parseInt(Library.GetAttribute(this.GetCha()).Defense) + this.GetSoDefBonus();
	};

	this.GetRamainingAttributePoints = function()
	{
		let attAbbrevs = ["Dex", "Str", "Tou", "Per", "Wil", "Cha"];
		let attPtsRmdr = parseInt(Character.Options.Attributepoints);

		for (let i=0; i<6; i++)
		{
			attPtsRmdr -= parseInt(Character.Attributes[attAbbrevs[i]].Buildpoints);
		}
		return(attPtsRmdr);
	};

	this.GetPhArm = function()
	{
		if(this.Buffer.PhArm != undefined)
			return this.Buffer.PhArm;

		let armor = 0;

		// Armor, only first hit in use checked. 
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes" && Library.GetEquipment(Character.Equipment[i].ID).Type == "Armor")
			{
				armor += parseInt(Library.GetEquipment(Character.Equipment[i].ID).PhArm);

				if (!isNaN(Character.Equipment[i].PhForge))
					armor += parseInt(Character.Equipment[i].PhForge);
				break;
			}

		// Race
		if (!isNaN(Library.GetRace(Character.Race).Modifiers.PhArm))
			armor += parseInt(Library.GetRace(Character.Race).Modifiers.PhArm);

		// Magic items
		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
				{
					let thisItem = Library.GetEquipment(Character.Equipment[i].ID);

					if (!isNaN(thisItem.PhArm))
						armor += parseInt(thisItem.PhArm);

					let thisRank = thisItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");

					if (thisRank != undefined)
						for (let RankModifierKey in thisRank.Modifiers) 
							if (thisRank.Modifiers.hasOwnProperty(RankModifierKey)) 
								if (RankModifierKey.toLowerCase() == "pharm")
									armor += parseInt(thisRank.Modifiers[RankModifierKey]);

						// Forged! Omg I bleeding Forgot! 
						if (!isNaN(Character.Equipment[i].PhForge))
							armor += parseInt(Character.Equipment[i].PhForge);
				}

		//Discipline + Path
		armor += this.GetDisciplineBonus("PhArm");

		this.Buffer.PhArm = armor;
		return armor;
	};

	this.GetMyArm = function()
	{
		if(this.Buffer.MyArm != undefined)
			return this.Buffer.MyArm;

		let armor = 0;

		// Wil
		armor += parseInt(Library.GetAttribute(this.GetWil()).MysticalArmor);

		// Armor, only first hit in use checked. 
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes" && Library.GetEquipment(Character.Equipment[i].ID).Type == "Armor")
			{
				armor += parseInt(Library.GetEquipment(Character.Equipment[i].ID).MyArm);
				if (!isNaN(Character.Equipment[i].MyForge))
					armor += parseInt(Character.Equipment[i].MyForge);
				break;
			}

		// Race
		if (!isNaN(Library.GetRace(Character.Race).Modifiers.MyArm))
			armor += parseInt(Library.GetRace(Character.Race).Modifiers.MyArm);

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if(Character.Equipment[i].ID != "Empty")
				if (Character.Equipment[i].InUse == "Yes")
					if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
					{
						let thisItem = Library.GetEquipment(Character.Equipment[i].ID);

						if (!isNaN(thisItem.MyArm))
							armor += parseInt(thisItem.MyArm);

						let thisRank = thisItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");


						if (thisRank != undefined)
							for (let RankModifierKey in thisRank.Modifiers) 
								if (thisRank.Modifiers.hasOwnProperty(RankModifierKey)) 
									if (RankModifierKey.toLowerCase() == "myarm")
										armor += parseInt(thisRank.Modifiers[RankModifierKey]);

						// Forged
						if (!isNaN(Character.Equipment[i].MyForge))
							armor += parseInt(Character.Equipment[i].MyForge);
					}

		// Blood / thread Magic
		if (Character.Magic != undefined)
			for (let i = 0; i < Character.Magic.length; i++) 
				if (Character.Magic[i].ID != "Empty" && Character.Magic[i].Threads != undefined)
					for (let j = 0; j < Character.Magic[i].Threads.length; j++) 
					{
						if (Character.Magic[i].Applicable == "Yes" && Character.Magic[i].Threads[j].Target == "MyArm")
							armor += parseInt(Character.Magic[i].Threads[j].Rank);
					}

		//Discipline + Path
		armor += this.GetDisciplineBonus("MyArm");

		this.Buffer.MyArm = armor;
		return armor;
	};

	this.GetBaseIni = function()
	{
		if(this.Buffer.BaseIni != undefined)
			return this.Buffer.BaseIni;

		let ini = parseInt(this.GetDexStep());

		//Discipline + Path
		ini += this.GetDisciplineBonus("Ini");

		this.Buffer.BaseIni = ini;
		return ini;
	};

	this.GetModifiedIni = function()
	{
		if(this.Buffer.ModifiedIni != undefined)
			return this.Buffer.ModifiedIni;

		let ini = this.GetBaseIni();//parseInt(this.GetDexStep());

		// Armor, only first hit in use checked. 
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty")
				if (Character.Equipment[i].InUse == "Yes" && Library.GetEquipment(Character.Equipment[i].ID).Type == "Armor")
				{
					ini -= parseInt(Library.GetEquipment(Character.Equipment[i].ID).IniPen);
					break;
				}

		// Shield
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Shield")
				{
					ini -= parseInt(Library.GetEquipment(Character.Equipment[i].ID).IniPen);
					break;
				}

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty")
				if (Character.Equipment[i].InUse == "Yes")
					if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
					{
						let thisItem = Library.GetEquipment(Character.Equipment[i].ID);

						let thisIniPen = 0;
 
						if (!isNaN(thisItem.IniPen))
							thisIniPen = parseInt(thisItem.IniPen);

						let thisRank = thisItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");

						if (thisRank != undefined && thisRank.Modifiers != undefined)
						{
							if (thisRank.Modifiers.Ini != undefined)
								ini += parseInt(thisRank.Modifiers.Ini);
							if (thisRank.Modifiers.IniPen != undefined)
								thisIniPen += parseInt(thisRank.Modifiers.IniPen);
						}
						if (thisIniPen > 0)
							ini -= thisIniPen;
					}

		this.Buffer.ModifiedIni = ini;
		return ini;
	};

	this.GetKarmaPoints = function()
	{
		// Get highest circle
		let maxCircle = 0;
		for (let i = 0; i < Character.Disciplines.length; i++) 
			if (Character.Disciplines[i].ID != "Empty") 
				if (parseInt(Character.Disciplines[i].Circle) > maxCircle)
					maxCircle = parseInt(Character.Disciplines[i].Circle);

		// Thread Items:
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes" && Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
			{
				let libRank = Library.GetEquipment(Character.Equipment[i].ID).Ranks[Character.Equipment[i].Rank-1];
				if (libRank != undefined && libRank.Modifiers != undefined && libRank.Modifiers.KarmaCircle != undefined)
					maxCircle += parseInt(libRank.Modifiers.KarmaCircle);
			}

		let leftover = this.GetRamainingAttributePoints();
		if (leftover < 0) leftover = 0;

		return maxCircle * parseInt(Library.GetRace(Character.Race).Karma) + leftover;
	};

	this.GetKarmaStep = function()
	{
		let karmastep = 4;
		//let karmaboost = false;

		//Discipline + Path
		karmastep += this.GetDisciplineBonus("KarmaStep");

		return (karmastep);
	};

	this.GetDevotionPointsMax = function()
	{
		if (Character.Questor != undefined && Character.Questor.Doctrine != "Empty")
			return parseInt(Character.Questor.Rank) * 10;
		else return 0;
	}

	this.GetDevotionDiceType = function()
	{
		if (Character.Questor == undefined || Character.Questor.Doctrine == undefined || Character.Questor.Doctrine == "Empty")
			return "";
		if (Character.Questor.Rank < 5)
			return "d4";
		if (Character.Questor.Rank < 9)
			return "d6";
		return "d8";
	}

	this.GetWoundThreshold = function()
	{
		if(this.Buffer.WoundThreshold != undefined)
			return this.Buffer.WoundThreshold;
		let woundThreshold = parseInt(Library.GetAttribute(CharacterManager.GetTou()).Wound);

		// Race
		if (!isNaN(Library.GetRace(Character.Race).Modifiers.Wnd))
			woundThreshold += parseInt(Library.GetRace(Character.Race).Modifiers.Wnd);

		//Discipline + Path
		woundThreshold += this.GetDisciplineBonus("Wnd");

		// Blood / thread Magic
		if (Character.Magic != undefined)
			for (let i = 0; i < Character.Magic.length; i++) 
				if (Character.Magic[i].ID != "Empty" && Character.Magic[i].Threads != undefined)
					for (let j = 0; j < Character.Magic[i].Threads.length; j++) 
					{
						if (Character.Magic[i].Applicable == "Yes" && Character.Magic[i].Threads[j].Target == "WndTh")
							woundThreshold += parseInt(Character.Magic[i].Threads[j].Rank);
					}

		this.Buffer.WoundThreshold = woundThreshold;
		return woundThreshold;
	};

	this.GetRecoveryStep = function()
	{
		if(this.Buffer.RecoveryStep != undefined)
			return this.Buffer.RecoveryStep;

		let recoveryStep = parseInt(CharacterManager.GetTouStep());

		// Blood Charms (Bone Charm)
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
			{
				let libItem = Library.GetEquipment(Character.Equipment[i].ID);
				if (libItem.Modifiers != undefined && libItem.Modifiers.RecStep != undefined)
					recoveryStep += libItem.Modifiers.RecStep * parseInt(Character.Equipment[i].Count);
			}

		this.Buffer.RecoveryStep = recoveryStep;
		return recoveryStep;
	}

	this.GetRecoveryTestCount = function()
	{
		if(this.Buffer.RecoveryTestCount != undefined)
			return this.Buffer.RecoveryTestCount;

		let recoverytests = parseInt(Library.GetAttribute(CharacterManager.GetTou()).Recovery);

		// Race
		let libRace = Library.GetRace(Character.Race);
		if (libRace.Modifiers != undefined && libRace.Modifiers.RecTest != undefined)
			recoverytests += parseInt(libRace.Modifiers.RecTest);

		//Discipline + Path
		recoverytests += this.GetDisciplineBonus("RecTest");

		this.Buffer.RecoveryTestCount = recoverytests;
		return recoverytests;
	};

	this.CalculateHealthRatings = function()
	{
		// Base
		let unc = parseInt(Library.GetAttribute(CharacterManager.GetTou()).Uncon);
		let dth = parseInt(Library.GetAttribute(CharacterManager.GetTou()).Death);
		let healthBreakdown = "Health ratings breakdown\nNote that these don't take Blood Damage into account\n\nToughness : " + unc + "/" + dth;

		if (Character.Disciplines.length > 0)
		{
			// Determine max circle
			let effectiveCircle = 0;
			if (Character.Options.Durability == "Best")
			{
				for (let i = 0; i < Character.Disciplines.length; i++) 
					if (Character.Disciplines[i].ID != "Empty" && parseInt(Character.Disciplines[i].Circle) > effectiveCircle)
						effectiveCircle = parseInt(Character.Disciplines[i].Circle);
			}
			else
				if (Character.Disciplines[0].ID == "Empty")
					effectiveCircle = 0;
				else
					effectiveCircle = parseInt(Character.Disciplines[0].Circle);

			let maxCircle = effectiveCircle;

			// Questor Durability
			let questorDurability = 0, questorDurabilityRank = 0;
			if (Character.Questor != undefined && Character.Questor.doctrineID != "Empty" && Character.Questor.Ranks.find(o => o.devotionID == "ED4Durability5") != undefined)
			{
				questorDurability = 5;
				questorDurabilityRank = Character.Questor.Ranks.find(o => o.devotionID == "ED4Durability5").devotionRank;

				console.log("Questor durability found: " + questorDurability + ", " + questorDurabilityRank);
			}

			if (questorDurabilityRank > effectiveCircle)
				effectiveCircle = questorDurabilityRank;

			// Thread Items
			for (let i = 0; i < Character.Equipment.length; i++) 
				if(Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes" && Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
				{
					let libItem = Library.GetEquipment(Character.Equipment[i].ID);
					let thisRank = libItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");
					if (thisRank != undefined && thisRank.Modifiers != undefined && thisRank.Modifiers.Dur != undefined)
						effectiveCircle += parseInt(thisRank.Modifiers.Dur);
				}

			// Blood / thread Magic
			if (Character.Magic != undefined)
				for (let i = 0; i < Character.Magic.length; i++) 
					if (Character.Magic[i].ID != "Empty" && Character.Magic[i].Applicable == "Yes" && Character.Magic[i].Threads != undefined)
					{
						let durThread = Character.Magic[i].Threads.find(o => o.Target == "Dur");
						if (durThread != undefined && durThread.Rank != undefined)
							effectiveCircle += parseInt(durThread.Rank);
					}

			let effectiveDurability = 0;
			for (let thisEffectiveCircle = 1; thisEffectiveCircle <= effectiveCircle; thisEffectiveCircle++) 
			{
				// Figure out the effective Durability
				if (Character.Options.Durability == "Best")
				{				
					let maxDurabilityThisCircle = 0, thisSource = "Thread magic";
					for (let i = 0; i < Character.Disciplines.length; i++) 
						if (Character.Disciplines[i].ID != "Empty" && parseInt(Character.Disciplines[i].Circle) >= thisEffectiveCircle && parseInt(Library.GetDiscipline(Character.Disciplines[i].ID).Durability) > maxDurabilityThisCircle)
						{
							thisSource = Library.GetDiscipline(Character.Disciplines[i].ID).Name;
							maxDurabilityThisCircle = parseInt(Library.GetDiscipline(Character.Disciplines[i].ID).Durability);
						}
					if (thisEffectiveCircle <= questorDurabilityRank && maxDurabilityThisCircle < questorDurability)
					{
						thisSource = "Questor Durability";
						maxDurabilityThisCircle = questorDurability;
					}

					if (maxDurabilityThisCircle > 0 && maxDurabilityThisCircle != effectiveDurability)
						effectiveDurability = maxDurabilityThisCircle;
					// If not found, just use the previous value

					unc += effectiveDurability;
					dth += effectiveDurability;

					if (thisEffectiveCircle <= maxCircle)
						dth++;

					healthBreakdown += "\nCircle " + thisEffectiveCircle + " (" + thisSource + ") : " + effectiveDurability + "/" + (thisEffectiveCircle <= maxCircle ? effectiveDurability+1 : effectiveDurability);
				}
				else // First Discipline only
					if (Character.Disciplines[0].ID == "Empty")	
						healthBreakdown += "\nCircle " + thisEffectiveCircle + "(Durability unavailable)";
					else
					{
						effectiveDurability = parseInt(Library.GetDiscipline(Character.Disciplines[0].ID).Durability);

						let thisSource;
						if (thisEffectiveCircle <= parseInt(Character.Disciplines[0].Circle))
							thisSource = Library.GetDiscipline(Character.Disciplines[0].ID).Name;
						else
							thisSource = "Thread magic";

						unc += effectiveDurability;
						dth += effectiveDurability;

						if (thisEffectiveCircle <= maxCircle)
							dth++;

						healthBreakdown += "\nCircle " + thisEffectiveCircle + " (" + thisSource + ") : " + effectiveDurability + "/" + (thisEffectiveCircle <= maxCircle ? effectiveDurability+1 : effectiveDurability);
					}

			}
		}

		// Blood / thread Magic
		if (Character.Magic != undefined)
			for (let i = 0; i < Character.Magic.length; i++) 
				if (Character.Magic[i].ID != "Empty")
				{
					let libMagic = Library.GetMagic(Character.Magic[i].ID);
					if (libMagic.Modifier != undefined && libMagic.Modifier.Dth != undefined)
					{
						dth += parseInt(libMagic.Modifier.Dth);

						healthBreakdown += "\n" + libMagic.Name + " (" + Character.Magic[i].Target + ") : 0/" + libMagic.Modifier.Dth;
					}
				}

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if(Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes" && Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
			{
				let libItem = Library.GetEquipment(Character.Equipment[i].ID);
				let thisRank = libItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");
				if (thisRank != undefined && thisRank.Modifiers != undefined && thisRank.Modifiers.Uncon != undefined)
					unc += parseInt(thisRank.Modifiers.Uncon);
				if (thisRank != undefined && thisRank.Modifiers != undefined && thisRank.Modifiers.Death != undefined)
					dth += parseInt(thisRank.Modifiers.Death);
			}


		this.Buffer.UnconsciousRating = unc;
		this.Buffer.DeathRating = dth;

		this.Buffer.HealthBreakdown = healthBreakdown;
	};

	this.GetUnconsciousRating = function()
	{
		if(this.Buffer.UnconsciousRating == undefined)
			this.CalculateHealthRatings();

		return this.Buffer.UnconsciousRating;
	};

	this.GetDeathRating = function()
	{
		if(this.Buffer.DeathRating == undefined)
			this.CalculateHealthRatings();

		return this.Buffer.DeathRating;
	};

	this.GetHealthBreakdown = function()
	{
		if(this.Buffer.HealthBreakdown == undefined)
			this.CalculateHealthRatings();

		return this.Buffer.HealthBreakdown;
	};

	this.CalculateBloodCosts = function()
	{
		let bloodDmg = 0;
		let bloodWnd = 0;
		let bloodDmgBreakdown = "Blood Damage breakdown:\n";
		let bloodWndBreakdown = "Blood Wounds breakdown:\n";

		// Paths
		for (let i = 0; i< Character.Paths.length; i++) 
			if (Character.Paths[i].ID != "Empty")
			{
				bloodDmg += parseInt(Library.GetPath(Character.Paths[i].ID).BloodDamage);
				bloodDmgBreakdown += Library.GetPath(Character.Paths[i].ID).Name + ": " + Library.GetPath(Character.Paths[i].ID).BloodDamage + "\n";
			}

		// Equipment
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
			{
				let libItem = Library.GetEquipment(Character.Equipment[i].ID);
				if (libItem.BloodDamage != undefined)
				{
					let count = 1;
					if (Character.Equipment[i].Count != undefined)
						count = parseInt(Character.Equipment[i].Count);
					bloodDmg += count * parseInt(libItem.BloodDamage);
					bloodDmgBreakdown += libItem.Name + ": " + (count * parseInt(libItem.BloodDamage)) + "\n";
				}
				if (libItem.BloodWound != undefined)
				{
					let count = 1;
					if (Character.Equipment[i].Count != undefined)
						count = parseInt(Character.Equipment[i].Count);
					bloodWnd += count * parseInt(libItem.BloodWound);
					bloodWndBreakdown += libItem.Name + ": " + (count * parseInt(libItem.BloodWound)) + "\n";
				}

				if (libItem.Ranks != undefined && Character.Equipment[i].Rank != undefined && parseInt(Character.Equipment[i].Rank) > 0 && libItem.Ranks[parseInt(Character.Equipment[i].Rank)-1].Modifiers != undefined)
				{
					let count = 1;
					if (Character.Equipment[i].Count != undefined)
						count = parseInt(Character.Equipment[i].Count);

					let thisItemBloodDamage = libItem.Ranks[parseInt(Character.Equipment[i].Rank)-1].Modifiers.BldDam;
					if (thisItemBloodDamage != undefined)
					{
						bloodDmg += count * parseInt(thisItemBloodDamage);
						bloodDmgBreakdown += libItem.Name + " Rank " + Character.Equipment[i].Rank + ": " + (count * parseInt(thisItemBloodDamage)) + "\n";
					}
				}
			}

		// Magic
		if (Character.Magic != undefined)
			for (let i = 0; i < Character.Magic.length; i++) 
				if (Character.Magic[i].ID != "Empty")
				{
					let magic = Library.GetMagic(Character.Magic[i].ID);
					if (magic.Damage != undefined) 
					{
						bloodDmg += parseInt(magic.Damage);
						bloodDmgBreakdown += magic.Name + ": " + parseInt(magic.Damage) + "\n";
					}
					if (magic.Wound != undefined) 
					{
						bloodWnd += parseInt(magic.Wound);
						bloodWndBreakdown += magic.Name + ": " + parseInt(magic.Wound) + "\n";
					}
				}

		if (bloodDmg == 0)
			bloodDmgBreakdown += "(No blood damage taken)\n";
		if (bloodWnd == 0)
			bloodWndBreakdown += "(No blood wounds taken)";

		this.Buffer.bloodDmg = bloodDmg;
		this.Buffer.bloodWnd = bloodWnd;
		this.Buffer.bloodDmgBreakdown = bloodDmgBreakdown;
		this.Buffer.bloodWndBreakdown = bloodWndBreakdown;
	};

	this.GetBloodDamage = function()
	{
		if (this.Buffer.bloodDmg == undefined)
			this.CalculateBloodCosts();
		return this.Buffer.bloodDmg;
	};

	this.GetBloodWounds = function()
	{
		if (this.Buffer.bloodWnd == undefined)
			this.CalculateBloodCosts();
		return this.Buffer.bloodWnd;
	};

	this.GetBloodBreakdown = function()
	{
		if (this.Buffer.bloodDmgBreakdown == undefined)
			this.CalculateBloodCosts();
		return this.Buffer.bloodDmgBreakdown + "\n" + this.Buffer.bloodWndBreakdown;
	};

	this.GetTalentBonus = function(thisTalentIndex)
	{
		if (0 > thisTalentIndex || thisTalentIndex > Character.Talents.length)
		{
			console.log("CharacterManager.GetTalentBonus(): index out of range :" + thisTalentIndex);
			return 0;
		}

		if (Character.Talents[thisTalentIndex].ID == "Empty")
		{
			console.log("CharacterManager.GetTalentBonus(): Trying to get bonuses for an Empty Talent :" + thisTalentIndex);
			return 0;
		}

		let talentID  = Character.Talents[thisTalentIndex].ID;


		if(this.Buffer.talentBonus != undefined)
			if(this.Buffer.talentBonus[talentID] != undefined)
				return this.Buffer.talentBonus[talentID];

			let talentBonus = 0;
			let talentUID = Character.Talents[thisTalentIndex].UID;
			let libTalent = Library.GetTalent(talentID);

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
				{
					let thisItem = Library.GetEquipment(Character.Equipment[i].ID);
					let thisRank = thisItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");

					if (thisRank != undefined && thisRank.Modifiers != undefined && thisRank.Modifiers.Talents != undefined)
					{
						let thisModifier = thisRank.Modifiers.Talents.find(o => o.ID == talentID || o.ID == libTalent.CountsAs);
						if(thisModifier != undefined)
							talentBonus += parseInt(thisModifier.Modifier);
					}
					
					if (["Melee Attack", "Extra melee attack", "Ranged Attack", "Extra Mounted Attacks", "Extra Ranged Attacks", "Extra Melee Attacks"].includes(libTalent.Type))
						if (thisRank != undefined && thisRank.Modifiers != undefined && thisRank.Modifiers.PhysicalAttack != undefined)
							talentBonus += parseInt(thisRank.Modifiers.PhysicalAttack);

						if (["Unarmed Damage Buff", "Melee Damage Buff"].includes(libTalent.Type))
							if (thisRank != undefined && thisRank.Modifiers != undefined && thisRank.Modifiers.PhysicalDamage != undefined)
								talentBonus += parseInt(thisRank.Modifiers.PhysicalDamage);
				}

		// Blood / thread Magic
		if (Character.Magic != undefined)
			for (let thisMagicIndex = 0; thisMagicIndex < Character.Magic.length; thisMagicIndex++) 
				if (Character.Magic[thisMagicIndex].ID != "Empty")
				{
					let libMagic = Library.GetMagic(Character.Magic[thisMagicIndex].ID);
					// Pattern Items
					if (libMagic.Situational == "Yes" && Character.Magic[thisMagicIndex].Applicable == "Yes" && Character.Magic[thisMagicIndex].Threads != undefined && talentUID != undefined)
						for (let i = 0; i < Character.Magic[thisMagicIndex].Threads.length; i++) 
							if (Character.Magic[thisMagicIndex].Threads[i].Target == talentUID)
								talentBonus += parseInt(Character.Magic[thisMagicIndex].Threads[i].Rank);	

					// Blood Oathes
					if (talentUID != undefined && libMagic.Modifier != undefined && libMagic.Modifier.OneTalentorSkill != undefined && Character.Magic[thisMagicIndex].TalentOrSkill  == talentUID)
						talentBonus += parseInt(libMagic.Modifier.OneTalentorSkill);   
				}

		// For Claw Shape and Shield Bash
		if (["Unarmed Damage Buff", "Shield Bash"].includes(Library.GetTalent(talentID).Type)) 
			talentBonus += this.GetMeleeDamageBonus();


		if(this.Buffer.talentBonus == undefined)
			this.Buffer.talentBonus = [];
		this.Buffer.talentBonus[talentID] = talentBonus;

		return talentBonus;
	};

	this.GetSkillBonus = function(thisSkillIndex)
	{
		let skillID = Character.Skills[thisSkillIndex].ID;
		let skillUID = Character.Skills[thisSkillIndex].UID;

		if(this.Buffer.skillBonus != undefined)
			if(this.Buffer.skillBonus[skillID] != undefined)
				return this.Buffer.skillBonus[skillID];

			let skillBonus = 0;

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
				{
					let thisItem = Library.GetEquipment(Character.Equipment[i].ID);
					let thisRank = thisItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");

					if (thisRank != undefined)
						if(thisRank.Modifiers != undefined)
							if (thisRank.Modifiers.Skills != undefined)
							{
								let thisModifier = thisRank.Modifiers.Skills.find(o => o.ID === skillID+"");
								if(thisModifier != undefined)
									skillBonus += parseInt(thisModifier.Modifier);
							}
				}

		// Blood / thread Magic
		if (Character.Magic != undefined)
			for (let thisMagicIndex = 0; thisMagicIndex < Character.Magic.length; thisMagicIndex++) 
				if (Character.Magic[thisMagicIndex].ID != "Empty")
				{
					let libMagic = Library.GetMagic(Character.Magic[thisMagicIndex].ID);
					// Blood Oathes
					if (skillUID != undefined && libMagic.Modifier != undefined && libMagic.Modifier.OneTalentorSkill != undefined && Character.Magic[thisMagicIndex].TalentOrSkill  == skillUID)
						talentBonus += parseInt(libMagic.Modifier.OneTalentorSkill);   
				}

		if(this.Buffer.skillBonus == undefined)
			this.Buffer.skillBonus = [];
		this.Buffer.skillBonus[skillID] = skillBonus;
		return skillBonus;
	};	

	this.GetWillforceStep = function()
	{
		let wilstep = parseInt(this.GetWilStep());

		let willforce = Character.Talents.find(o => o.ID === "ED4Willforce"); 
		if (willforce != undefined)
		{
			wilstep += parseInt(willforce.Rank);
			wilstep += this.GetTalentBonus(Character.Talents.findIndex(o => o.ID == "ED4Willforce"));
		}

		return wilstep;
	};

	this.GetRemainingTalentPoints = function()
	{
		let FreerankSum = 0;
		for (let i = 0; i < Character.Talents.length; i++) 
			FreerankSum += parseInt(Character.Talents[i].Freerank);
		return parseInt(Character.Options.Talentpoints) - FreerankSum; 
	};

	this.GetTalentAttribute = function(talentID)
	{
		let libTalent = Library.GetTalent(talentID);

		if (libTalent == undefined)
		{
			console.log("CharacterManager.GetTalentAttribute: Talent not found: " + talentID);
			return;
		}

		let thisAttribute = "";

		let stepSplit = libTalent.Step.toLowerCase().split('+');

		for (let j = 0; j < stepSplit.length; j++) 
		{
			switch (stepSplit[j])
			{
				case "rank":
				break;
				case "dex":
				case "str":
				case "tou":
				case "per":
				case "wil":
				case "cha":
					thisAttribute = Library.GetFullName(UI.ToTitleCase(stepSplit[j]));
					break;
				case "ini":
					thisTalentStep += parseInt(CharacterManager.GetModifiedIni());
					thisAttribute = "(Initiative)";
					break;
				default:
				if (!isNaN(stepSplit[j]))
					thisAttribute += " + " + parseInt(stepSplit[j]);
				break;
			}
		}

		return thisAttribute;
	};

	this.GetTalentStep = function(thisTalentIndex)
	{
		if (0 > thisTalentIndex || thisTalentIndex > Character.Talents.length)
		{
			console.log("CharacterManager.GetTalentStep: Input invalid or out of range: " + thisTalentIndex);
			return;
		}

		let thisTalent = Library.GetTalent(Character.Talents[thisTalentIndex].ID);

		let rank;
		if (Character.Talents[thisTalentIndex].Type == "Free")
			rank = parseInt(Character.Disciplines.find(o => o.ID === Character.Talents[thisTalentIndex].DisciplineId).Circle);
		else
			rank = parseInt(Character.Talents[thisTalentIndex].Rank);


		let thisTalentStep;

		if (thisTalent == undefined)
			thisTalentStep = "-";
		else
			if (thisTalent.Step == "-")
				thisTalentStep = thisTalent.Step;
			else
			{
				thisTalentStep = 0;
				let stepSplit = thisTalent.Step.toLowerCase().split('+');
				for (let j = 0; j < stepSplit.length; j++) 
				{
					switch (stepSplit[j])
					{
						case "rank":
							thisTalentStep += rank;
							break;
						case "dex":
							thisTalentStep += parseInt(CharacterManager.GetDexStep());
							break;
						case "str":
							thisTalentStep += parseInt(CharacterManager.GetStrStep());
							break;
						case "tgh":
						case "tou":
							thisTalentStep += parseInt(CharacterManager.GetTouStep());
							break;
						case "per":
							thisTalentStep += parseInt(CharacterManager.GetPerStep());
							break;
						case "wil":
							thisTalentStep += parseInt(CharacterManager.GetWilStep());
							break;
						case "cha":
							thisTalentStep += parseInt(CharacterManager.GetChaStep());
							break;
						case "ini":
							thisTalentStep += parseInt(CharacterManager.GetModifiedIni());
							break;
                        case "onehdmax":
                            thisTalentStep += CharacterManager.GetOneHandedMax();
                            break;
                        case "weapon size":
                            thisTalentStep = "(Not calculated)";
                            break;
						default:
							if (!isNaN(stepSplit[j]))
								thisTalentStep += parseInt(stepSplit[j]);
							else
								throw "Unknown Talent Step component: "+ stepSplit[j];
							break;
					}
				}
				if (!isNaN(thisTalentStep))
					thisTalentStep += CharacterManager.GetTalentBonus(thisTalentIndex);
			}
		Character.Talents[thisTalentIndex].Step = thisTalentStep;
		return thisTalentStep;
	};

	this.GetRemainingSkillPoints = function()
	{
		let Returnstring = "";
		let KnowledgeSum = 0, ArtisanSum = 0, SpeakSum = 0, ReadSum = 0, GeneralSum = 0;
		for (let i = 0; i < Character.Skills.length; i++) 
		{
			if(Character.Skills[i].ID != "Empty")
				if (Character.Skills[i].ID == "ED4ReadWriteLanguage")
					ReadSum += parseInt(Character.Skills[i].Freerank);
				else
					if (Character.Skills[i].ID == "ED4SpeakLanguage")
						SpeakSum += parseInt(Character.Skills[i].Freerank);
					else
					{
						let libSkill = Library.GetSkill(Character.Skills[i].ID);

						switch (libSkill.Category)
						{
							case "Artisan":
							ArtisanSum += parseInt(Character.Skills[i].Freerank);	
							break;
							case "Knowledge":
							KnowledgeSum += parseInt(Character.Skills[i].Freerank);
							break;
							default:
							GeneralSum += parseInt(Character.Skills[i].Freerank);
						}
					}
		}

		let KnowledgeRemainder = parseInt(Character.Options.KnowledgeSkillpoints);
		let ArtisanRemainder   = parseInt(Character.Options.ArtisanSkillpoints);
		let SpeakRemainder     = parseInt(Character.Options.SpeakSkillpoints);
		let ReadRemainder      = parseInt(Character.Options.ReadSkillpoints);
		let FreeRemainder; 
		if(Character.Options.FreeSkillpoints == "ChaStep")
			FreeRemainder      = parseInt(this.GetBaseChaStep());
		else
		 	FreeRemainder      = parseInt(Character.Options.FreeSkillpoints);

		SpeakRemainder -= SpeakSum; 
		if(SpeakRemainder <= 0)
		{
			FreeRemainder += SpeakRemainder;
			SpeakRemainder = 0;
		}
		ReadRemainder -= ReadSum; 
		if(ReadRemainder <= 0)
		{
			FreeRemainder += ReadRemainder;
			ReadRemainder = 0;
		}
		ArtisanRemainder -= ArtisanSum; 
		if(ArtisanRemainder <= 0)
		{
			FreeRemainder += ArtisanRemainder;
			ArtisanRemainder = 0;
		}
		KnowledgeRemainder -= KnowledgeSum; 
		if(KnowledgeRemainder <= 0)
		{
			FreeRemainder += KnowledgeRemainder;
			KnowledgeRemainder = 0;
		}
		FreeRemainder -= GeneralSum; 

		return "Artisan: " + ArtisanRemainder + ", Knowledge : " + KnowledgeRemainder + ", Read/Write Language: " + ReadRemainder + ", Speak Language: " + SpeakRemainder + ", Free: " + FreeRemainder;
	};

	this.IsSpellCaster = function()
	{
		if(this.Buffer.IsSpellCaster != undefined)
			return this.Buffer.IsSpellCaster;

		let isSpellcaster = false;
		for (let i = Character.Disciplines.length - 1; i >= 0; i--) 
			if (Character.Disciplines[i].ID != "Empty")
				if(Library.GetDiscipline(Character.Disciplines[i].ID).Spellcaster == "true")
					isSpellcaster = true;

		if (Character.Talents.find(o => o.ID === "ED4Spellcasting") != undefined)
			isSpellcaster = true;
		if (Character.Spells.length != 0)
			isSpellcaster = true;

		this.Buffer.IsSpellCaster = isSpellcaster;
		return isSpellcaster;
	};

	this.GetSpellsQualifiedFor = function()
	{
		if(this.Buffer.SpellsQualifiedFor != undefined)
			return this.Buffer.SpellsQualifiedFor;

		let returner = [];
		let versatilityWeaveDisciplines = [];
		let specialKnackSpellAccess = "";

		// Versatility
		if (Library.GetRace(Character.Race).BonusTalent != undefined && Library.GetRace(Character.Race).BonusTalent.indexOf("ED4Versatility") != -1)
		{
			let spellCastingDisciplines = Library.Disciplines.filter(o => o.Spellcaster == "true");
			for (let i = 0; i < spellCastingDisciplines.length; i++) 
			{
				let thisThreadWeavingTalent = spellCastingDisciplines[i].Circles[0].DisciplineTalents.find(o => o.indexOf("ED4ThreadWeaving") != -1);
				if (Character.Talents.find(o => o.ID == thisThreadWeavingTalent && o.Type == "Versatility") != undefined)
					versatilityWeaveDisciplines.push(spellCastingDisciplines[i].ID);
			}
		}

		// That Knack shit 
		if (Character.Knacks != undefined && Character.Knacks.length > 0)
			for (let i = 0; i < Character.Knacks.length; i++) 
				if (Character.Knacks[i].ID != "Empty")
					if (Library.GetKnack(Character.Knacks[i].ID).SpecialSpellAccess != undefined)
					{
						if (specialKnackSpellAccess != "") 
							specialKnackSpellAccess += ", ";
						specialKnackSpellAccess = Library.GetKnack(Character.Knacks[i].ID).SpecialSpellAccess;
					}

		// Build the actual list =P
		for (let i = 0; i < Library.Spells.length; i++) 
		{
			// Check Discipline 
			if (Character.Disciplines.find(o => o.ID == Library.Spells[i].Discipline))
				returner.push({"ID" : Library.Spells[i].ID, "Name" : Library.Spells[i].Name, "Discipline" : Library.GetDiscipline(Library.Spells[i].Discipline).Name, "Circle" : Library.Spells[i].Circle}); 
			else
				// Check Threadweaving talent (for Versatile casters)
				if (versatilityWeaveDisciplines.length != 0 && versatilityWeaveDisciplines.find(o => o == Library.Spells[i].Discipline) != undefined)
					returner.push({"ID" : Library.Spells[i].ID, "Name" : Library.Spells[i].Name, "Discipline" : Library.GetDiscipline(Library.Spells[i].Discipline).Name, "Circle" : Library.Spells[i].Circle}); 
				else
					//Check for spellcasting Knacks
					if (specialKnackSpellAccess != "" && specialKnackSpellAccess.includes(Library.Spells[i].ID))
						returner.push({"ID" : Library.Spells[i].ID, "Name" : Library.Spells[i].Name, "Discipline" : Library.GetDiscipline(Library.Spells[i].Discipline).Name, "Circle" : Library.Spells[i].Circle}); 
		}

		this.Buffer.SpellsQualifiedFor = returner;
		return returner;
	}

	this.GetRemainingSpellPoints = function()
	{
		if (Character.Options.SpellsCostLP == "Free")
			return "(Spells are free)";

		if (Character.Options.SpellsCostLP == "4ed")
		{
			if (Character.Disciplines == undefined || Character.Disciplines.length == 0 || Character.Disciplines[0].ID == "Empty" || Library.GetDiscipline(Character.Disciplines[0].ID).Spellcaster != "true")
				return "-";

	        let startingSpellPoints, startingSpellPointsSpent = 0;

	        if (Character.Options.Spellpoints == "PERstep")
	        	startingSpellPoints = parseInt(this.GetBasePerStep());
	        else 
	        	startingSpellPoints = parseInt(Character.Options.Spellpoints);

			if (Character.Spells == undefined || Character.Spells.length == 0)
				return startingSpellPoints + "";

	        // Count circle 1 and 2 spells of the correct Discipline
	       	let spellCount = 0;
	        for (let i = 0; i < Character.Spells.length; i++)
	        	if (Character.Spells[i].ID != "Empty")
		        {
		        	let libSpell = Library.GetSpell(Character.Spells[i].ID);
		        	if (libSpell.Discipline ==  Character.Disciplines[0].ID && (libSpell.Circle == "1" || libSpell.Circle == "2"))
		        		spellCount += parseInt(libSpell.Circle);
		        }
	        return (startingSpellPoints - spellCount > 0 ? (startingSpellPoints - spellCount) + "" : "0");
		}

		let builder = "";

        let startingSpellPoints, startingSpellPointsSpent = 0;

        if (Character.Options.Spellpoints == "PERstep")
        	startingSpellPoints = parseInt(this.GetBasePerStep());
        else 
        	startingSpellPoints = parseInt(Character.Options.Spellpoints);

        for (let thisDisciplineIndex = 0; thisDisciplineIndex < Character.Disciplines.length; thisDisciplineIndex++)
        	if (Character.Disciplines[thisDisciplineIndex].ID != "Empty" && Library.GetDiscipline(Character.Disciplines[thisDisciplineIndex].ID).Spellcaster == "true")
        	{
				let SpellCountByCircle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		        for (let i=0; i < Character.Spells.length; i++)
		        	if (Character.Spells[i].ID != "Empty")
		        	{
						let libSpell = Library.GetSpell(Character.Spells[i].ID);
						if (libSpell.Discipline == Character.Disciplines[thisDisciplineIndex].ID)
		        			SpellCountByCircle[parseInt(libSpell.Circle)]++;
		        	}

				let freeSpellsPerCircle;
				if (Character.Options.SpellsCostLP == "1Prog" || Character.Options.SpellsCostLP == "1Fib")
					freeSpellsPerCircle = 1;
				else
					freeSpellsPerCircle = 2;

				let FreeSpellSlots = [0,0,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle];

		        if (thisDisciplineIndex == 0) // Character creation spells
		        	FreeSpellSlots[1] = startingSpellPoints;
		        else
		        	FreeSpellSlots[1] = freeSpellsPerCircle;

		        for (let i=0; i < Character.Spells.length; i++)
		        	if (Character.Spells[i].ID != "Empty")
		        	{
						let libSpell = Library.GetSpell(Character.Spells[i].ID);
						if (libSpell.Discipline == Character.Disciplines[thisDisciplineIndex].ID)
						{
							if (thisDisciplineIndex == 0 && libSpell.Circle == "1" && FreeSpellSlots[1] > 1 && FreeSpellSlots[1] % 2 == 0 && SpellCountByCircle[1] == 1 && SpellCountByCircle[2] > 0 && (FreeSpellSlots[1] / 2) <= SpellCountByCircle[2])
							{
								SpellCountByCircle[parseInt(libSpell.Circle)]--;
							}
							else
								if (thisDisciplineIndex == 0 && libSpell.Circle == "2" && FreeSpellSlots[1] > 1)
								{
									FreeSpellSlots[1] -= 2;
									SpellCountByCircle[parseInt(libSpell.Circle)]--;
								}
								else 
									if (FreeSpellSlots[parseInt(libSpell.Circle)] > 0)
									{
										FreeSpellSlots[parseInt(libSpell.Circle)]--;
										SpellCountByCircle[parseInt(libSpell.Circle)]--;
									}
									else
									{
										SpellCountByCircle[parseInt(libSpell.Circle)]--;
									}
						}
		        	}

		        if (thisDisciplineIndex == 0) // Character creation spells
		        	builder = Library.GetDiscipline(Character.Disciplines[thisDisciplineIndex].ID).Name + " 1: " + (FreeSpellSlots[1] > 0 ? FreeSpellSlots[1] : 0);
		        else
		        	builder += ", " + Library.GetDiscipline(Character.Disciplines[thisDisciplineIndex].ID).Name + " 1: " + (FreeSpellSlots[1] > 0 ? FreeSpellSlots[1] : 0);

		        for (let i=2; i<=parseInt(Character.Disciplines[thisDisciplineIndex].Circle); i++)
		        	builder += ", " + i + ": " + (FreeSpellSlots[i] > 0 ? FreeSpellSlots[i] : 0);
        	}
        return builder;
	}

	this.GetKnacksQualifiedFor = function()
	{
		if(this.Buffer.KnacksQualifiedFor != undefined)
			return this.Buffer.KnacksQualifiedFor;

		this.Buffer.KnacksReport = "";

		if (Character.Knacks == undefined)
			Character.Knacks = [];

		let builder = [];
		for (let thisKnackIndex = 0; thisKnackIndex < Library.Knacks.length; thisKnackIndex++) 
			if (Library.Knacks[thisKnackIndex].Type != "Path")
				if (this.IsQualifiedFor(thisKnackIndex))
				{
					let libTalent = Library.GetTalent(Library.Knacks[thisKnackIndex].Talent);
					let talentName;
					if (libTalent == undefined)
						talentName = Library.Talents.find(o => o.CountsAs == Library.Knacks[thisKnackIndex].Talent).CountsAsName;
					else 
						talentName = libTalent.Name;

					builder.push({ID : Library.Knacks[thisKnackIndex].ID, Name : Library.Knacks[thisKnackIndex].Name, Talent: talentName, Retakable : Library.Knacks[thisKnackIndex].Retakable});
				}

		this.Buffer.KnacksQualifiedFor = builder;

		return builder;
	};

	this.GetPathsQualifiedFor = function()
	{
		if(this.Buffer.PathsQualifiedFor != undefined)
			return this.Buffer.PathsQualifiedFor;

		this.Buffer.PathKnacksReport = "";

		if (Character.Knacks == undefined)
			Character.Knacks = [];

		let builder = [];
		for (let thisKnackIndex = 0; thisKnackIndex < Library.Knacks.length; thisKnackIndex++) 
			if (Library.Knacks[thisKnackIndex].Type == "Path")
				if (this.IsQualifiedFor(thisKnackIndex))
					builder.push({ID : Library.Knacks[thisKnackIndex].ID, Name : Library.Knacks[thisKnackIndex].Name, Talent: (Library.Knacks[thisKnackIndex].Talent == "ED4ThreadWeaving" ? "Thread Weaving" : Library.GetTalent(Library.Knacks[thisKnackIndex].Talent).Name)});

		this.Buffer.PathsQualifiedFor = builder;
		this.Buffer.PathKnacksReport = this.Buffer.KnacksReport;

		return builder;
	};

	this.IsQualifiedFor = function(thisKnackIndex)
	{		
		if (this.Buffer.KnacksReport == undefined)
			this.Buffer.KnacksReport = "";

		let isOk = false;
		let talentOk = false, requirementsOk = false, restrictionsOk = false, conflictOK = true;

		let libKnack = Library.Knacks[thisKnackIndex];

		if (libKnack == undefined)
		{
			throw "CharacterManager.IsQualifiedFor(thisKnackIndex) : Invalid KnackIndex '" + thisKnackIndex + "'";
		}

		// Check Talent and Rank
		let thisTalent = Character.Talents.find(o => (o.ID === libKnack.Talent || (o.ID != "Empty" && Library.GetTalent(o.ID).CountsAs == libKnack.Talent) && (o.Type == "Discipline" || o.Type == "Optional" || o.Type == "PathTalent" || o.Type == "PathGrantedTalent" || o.Type == "Free")));

		if (thisTalent == undefined)
		{
			this.Buffer.KnacksReport += libKnack.Name + " Character doesn't have the Talent - at least not from a Discipline or Path '" + libKnack.Talent + "'\n";
			return false; // Character doesn't have the Talent
		}
		if (parseInt(thisTalent.Rank) < parseInt(libKnack.RequiredRank))
		{
			this.Buffer.KnacksReport += libKnack.Name + " Character doesn't have the required rank: Talent " + libKnack.Talent + " Rank " + libKnack.RequiredRank + "\n";
			return false; 
		}
		talentOk = true;

		if (libKnack.Requirements.length == 0)
			requirementsOk = true;
		for (let thisRequirement = 0; thisRequirement < libKnack.Requirements.length; thisRequirement++)
		{
			switch (libKnack.Requirements[thisRequirement].Type)
			{
				case "Race":
					if (Character.Race != libKnack.Requirements[thisRequirement].ID)
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character doesn't satisfy the Race restriction '" + libKnack.Requirements[thisRequirement].ID + "'\n";
						return false;
					}
					break;
				case "Knack":
					if (Character.Knacks.find(o => (o.ID === libKnack.Requirements[thisRequirement].ID)) == undefined)
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character doesn't have the Required Knack  '" + libKnack.Requirements[thisRequirement].ID + "'\n";
						return false; // Character doesn't have the Knack
					}
					break;
				case "Talent":
					let thisTalent = Character.Talents.find(o => (o.ID === libKnack.Requirements[thisRequirement].ID || (o.ID != "Empty" && Library.GetTalent(o.ID).CountsAs == libKnack.Requirements[thisRequirement].ID)));
					if (thisTalent == undefined)
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character doesn't have the Required Talent  '" + libKnack.Requirements[thisRequirement].ID + "'\n";
						return false; // Character doesn't have the Talent
					}
					if (parseInt(thisTalent.Rank) < parseInt(libKnack.Requirements[thisRequirement].Rank))
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character doesn't have the Required rank: Talent " + libKnack.Requirements[thisRequirement].ID + " Rank " + libKnack.Requirements[thisRequirement].Rank + "\n";
						return false; 
					}
					break;
				case "Speak":
					//not tested
					break;
				case "ReadWrite":
					//not tested
					break;
				case "Skill":
					let thisSkill;
					if (libKnack.Requirements[thisRequirement].Name == undefined)
					 	thisSkill= Character.Skills.find(o => (o.ID == libKnack.Requirements[thisRequirement].ID));
					else
						thisSkill= Character.Skills.find(o => (o.ID == libKnack.Requirements[thisRequirement].ID && o.Name == libKnack.Requirements[thisRequirement].Name.trim()));
					if (thisSkill == undefined)
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character doesn't have the Required Skill  '" + libKnack.Requirements[thisRequirement].ID + "'" + (libKnack.Requirements[thisRequirement].Name == undefined ? "" : libKnack.Requirements[thisRequirement].Name) +  "\n";
						return false; 
					}
					if (parseInt(thisSkill.Rank) < parseInt(libKnack.Requirements[thisRequirement].Rank))
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character doesn't have the Required rank: Skill " + libKnack.Requirements[thisRequirement].ID + " Rank " + libKnack.Requirements[thisRequirement].Rank + "\n";
						return false; 
					}
					break;
				case "Ordeal":
					//not tested
					break;
				case "Discipline":
					if (libKnack.Requirements[thisRequirement].ID == "Any")
					{
						if (Character.Disciplines.find(o => parseInt(o.Circle) >= parseInt(libKnack.Requirements[thisRequirement].Circle)) == undefined)
						{
							this.Buffer.KnacksReport += libKnack.Name + " Character fails the Discipline restriction '" + libKnack.Requirements[thisRequirement].ID + " Circle " + libKnack.Requirements[thisRequirement].Circle + "\n";;
							return false;
						}
					}
					else
						if (Character.Disciplines.find(o => o.ID == libKnack.Requirements[thisRequirement].ID && parseInt(o.Circle) >= parseInt(libKnack.Requirements[thisRequirement].Circle)) == undefined)
						{
							this.Buffer.KnacksReport += libKnack.Name + " Character fails the Discipline restriction '" + libKnack.Requirements[thisRequirement].ID + " Circle " + libKnack.Requirements[thisRequirement].Circle + "\n";;
							return false;
						}
					break;
				case "Spell":
					if (Character.Spells.find(o => (o.ID === libKnack.Requirements[thisRequirement].ID)) == undefined)
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character doesn't have the Required Spell  '" + libKnack.Requirements[thisRequirement].ID + "'\n";
						return false; // Character doesn't have the Spell
					}
					break;
				default:
					console.log(libKnack.Name + " Unknown Knack Requirement Type: '" + libKnack.Requirements[thisRequirement].Type + "'\n")
			}
		}
		requirementsOk = true;

		if (libKnack.Restrictions.length == 0)
			restrictionsOk = true;
		for (let thisRestriction = 0; thisRestriction < libKnack.Restrictions.length; thisRestriction++)
		{
			switch (libKnack.Restrictions[thisRestriction].Type)
			{
				case "Knack":
					if (Character.Knacks.find(o => (o.ID === libKnack.Restrictions[thisRestriction].ID)) != undefined)
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character satisfies the Knack restriction '" + libKnack.Restrictions[thisRestriction].ID + "'\n";
						restrictionsOk = true;
					}
					break;
				case "Talent":
					let thisTalent = Character.Talents.find(o => (o.ID === libKnack.Restrictions[thisRestriction].ID || (o.ID != "Empty" && Library.GetTalent(o.ID).CountsAs == libKnack.Restrictions[thisRestriction].ID)));
					if (thisTalent != undefined)
					{
						let rank = 0;
						if (thisTalent.Type == "Free")
						{
	                        for (let i = 0; i < Character.Disciplines.length; i++) 
	                            if(thisTalent.DisciplineId.includes(Character.Disciplines[i].ID) && parseInt(Character.Disciplines[i].Circle) > rank)
	                                rank = parseInt(Character.Disciplines[i].Circle);
						}
						else 
							rank = parseInt(thisTalent.Rank);

						if (rank >= parseInt(libKnack.Restrictions[thisRestriction].Rank))
						{
							this.Buffer.KnacksReport += libKnack.Name + " Character satisfies the Talent restriction " + libKnack.Restrictions[thisRestriction].ID + " Rank " + libKnack.Restrictions[thisRestriction].Rank + "\n";
							restrictionsOk = true;
						}
					}
					break;
				case "Speak":
					//not tested
					break;
				case "ReadWrite":
					//not tested
					break;
				case "Skill":
					let thisSkill = Character.Skills.find(o => o.ID === libKnack.Restrictions[thisRestriction].ID && (libKnack.Restrictions[thisRestriction].Name != undefined ? o.Name == libKnack.Restrictions[thisRestriction].Name : true));
					if (thisSkill != undefined)
						if (parseInt(thisSkill.Rank) >= parseInt(libKnack.Restrictions[thisRestriction].Rank))
						{
							this.Buffer.KnacksReport += libKnack.Name + " Character satisfies the Skill restriction " + libKnack.Restrictions[thisRestriction].ID + " Rank " + libKnack.Restrictions[thisRestriction].Rank + "\n";
							restrictionsOk = true;
						}
						else this.Buffer.KnacksReport += libKnack.Name + " Character has the right skill, but not the rank " + libKnack.Restrictions[thisRestriction].ID + " Rank " + libKnack.Restrictions[thisRestriction].Rank + "\n";
					else this.Buffer.KnacksReport += libKnack.Name + " Character doesn't have the restricted skill " + libKnack.Restrictions[thisRestriction].ID + " Rank " + libKnack.Restrictions[thisRestriction].Rank + "\n";
					break;
				case "Race":
					if (Character.Race == libKnack.Restrictions[thisRestriction].ID)
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character satisfies the Race restriction '" + libKnack.Restrictions[thisRestriction].ID + "'\n";
						restrictionsOk = true;
					}
					break;
				case "Discipline":
					if (libKnack.Restrictions[thisRestriction].ID == "Any")
					{
						if (Character.Disciplines.find(o => parseInt(o.Circle) >= parseInt(libKnack.Restrictions[thisRestriction].Circle)) != undefined)
						{
							this.Buffer.KnacksReport += libKnack.Name + " Character satisfies the Discipline restriction '" + libKnack.Restrictions[thisRestriction].ID + " Circle " + libKnack.Restrictions[thisRestriction].Circle + "\n";;
							restrictionsOk = true;
						}
						else
							this.Buffer.KnacksReport += libKnack.Name + " Character fails the Discipline restriction '" + libKnack.Restrictions[thisRestriction].ID + " Circle " + libKnack.Restrictions[thisRestriction].Circle + "\n";;
					}
					else
						if (Character.Disciplines.find(o => o.ID == libKnack.Restrictions[thisRestriction].ID && parseInt(o.Circle) >= parseInt(libKnack.Restrictions[thisRestriction].Circle)) != undefined)
						{
							this.Buffer.KnacksReport += libKnack.Name + " Character satisfies the Discipline restriction '" + libKnack.Restrictions[thisRestriction].ID + " Circle " + libKnack.Restrictions[thisRestriction].Circle + "\n";;
							restrictionsOk = true;
						}
					break;
				case "Attribute":
					let chaAtr;
					if (libKnack.Restrictions[thisRestriction].ID == "Dex")
						chaAtr = CharacterManager.GetDex();
					if (libKnack.Restrictions[thisRestriction].ID == "Str")
						chaAtr = CharacterManager.GetStr();
					if (libKnack.Restrictions[thisRestriction].ID == "Tou")
						chaAtr = CharacterManager.GetTou();
					if (libKnack.Restrictions[thisRestriction].ID == "Per")
						chaAtr = CharacterManager.GetPer();
					if (libKnack.Restrictions[thisRestriction].ID == "Wil")
						chaAtr = CharacterManager.GetWil();
					if (libKnack.Restrictions[thisRestriction].ID == "Cha")
						chaAtr = CharacterManager.GetCha();
					if (chaAtr >= parseInt(libKnack.Restrictions[thisRestriction].Value))
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character satisfies the Attribute restriction '" + libKnack.Restrictions[thisRestriction].ID + " " + libKnack.Restrictions[thisRestriction].Value + "\n";;
						restrictionsOk = true;
					}
					break;

				default:
					console.log(libKnack.Name + " Unknown Knack Restriction Type: '" + libKnack.Restrictions[thisRestriction].Type + "'\n")
			}
		}

		if(libKnack.Conflicts != undefined)
			for (var thisConflict = 0; thisConflict < libKnack.Conflicts.length; thisConflict++) 
			{
				if (Library.GetTalent(libKnack.Conflicts[thisConflict]) != undefined)
				{

					if (Character.Talents.find(o => o.ID == libKnack.Conflicts[thisConflict]) != undefined)
					{
						this.Buffer.KnacksReport += libKnack.Name + " Character has this Talent already '" + Library.GetTalent(libKnack.Conflicts[thisConflict]).ID + " and so cannot add '" + libKnack.ID + "'\n";;
						conflictOK = false;					
					}
				}
				else
					if (libKnack.Type == "Path")
					{
						let conflictingPath = Character.Paths.find(o => o.ID == Library.GetPathByKnackID(libKnack.Conflicts[thisConflict]).ID);
						if (conflictingPath != undefined)
						{
							this.Buffer.KnacksReport += libKnack.Name + " Character follows this path already '" + conflictingPath.ID + " and so cannot add '" + libKnack.ID + "'\n";;
							conflictOK = false;					
						}
					}
					else
					{
						let conflictingKnack = Character.Knacks.find(o => o.ID == libKnack.Conflicts);
						if (conflictingKnack != undefined)
						{
							this.Buffer.KnacksReport += libKnack.Name + " Character already has the Knack '" + conflictingKnack.ID + " and so cannot add '" + libKnack.Name + "'\n";;
							conflictOK = false;					
						}
					}
			}

		return (talentOk && requirementsOk && restrictionsOk && conflictOK);
    };

    this.CountKnacksAvailable = function()
    {
    	let qualified = this.GetKnacksQualifiedFor();

    	if (Character.Knacks == undefined || Character.Knacks.length == 0)
    		return qualified.length;

    	return qualified.length - Character.Knacks.length;
	};

	this.CalculateWeaponSizes = function()
	{
		let onehandedMin = parseInt(Library.GetRace(Character.Race).oneHdMin);
		let onehandedMax = parseInt(Library.GetRace(Character.Race).oneHdMax);
		let twohandedMin = parseInt(Library.GetRace(Character.Race).twoHdMin);
		let twohandedMax = parseInt(Library.GetRace(Character.Race).twoHdMax);

		let libItem;

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if(Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes" && Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
			{
				libItem = Library.GetEquipment(Character.Equipment[i].ID);
				let thisRank = libItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");
				if (thisRank != undefined && thisRank.Modifiers != undefined && thisRank.Modifiers.WpnSz != undefined)
				{
					onehandedMax += parseInt(thisRank.Modifiers.WpnSz);
					twohandedMax += parseInt(thisRank.Modifiers.WpnSz);
				}
			}

		this.Buffer.onehandedMin = onehandedMin;
		this.Buffer.onehandedMax = onehandedMax;
		this.Buffer.twohandedMin = twohandedMin;
		this.Buffer.twohandedMax = twohandedMax;
	};

	this.GetOneHandedMin = function()
	{
		if(this.Buffer.onehandedMin == undefined)
			this.CalculateWeaponSizes();

		return this.Buffer.onehandedMin;
	};

	this.GetOneHandedMax = function()
	{
		if(this.Buffer.onehandedMax == undefined)
			this.CalculateWeaponSizes();

		return this.Buffer.onehandedMax;
	};

	this.GetTwoHandedMin = function()
	{
		if(this.Buffer.twohandedMin == undefined)
			this.CalculateWeaponSizes();

		return this.Buffer.twohandedMin;
	};

	this.GetTwoHandedMax = function()
	{
		if(this.Buffer.twohandedMax == undefined)
			this.CalculateWeaponSizes();

		return this.Buffer.twohandedMax;
	};

	this.GetMeleeDamageBonus = function()
	{
		let meleeDamageBonus = 0;

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if(Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes" && Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
			{
				let libItem = Library.GetEquipment(Character.Equipment[i].ID);
				let thisRank = libItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");
				if (thisRank != undefined && thisRank.Modifiers != undefined && thisRank.Modifiers.CCDamage != undefined)
					meleeDamageBonus += parseInt(thisRank.Modifiers.CCDamage);
			}
		return meleeDamageBonus;
	};		

	this.GetMvmtRate = function()
	{
		if (this.Buffer.MvmtRate != undefined)
			return this.Buffer.MvmtRate;

		let move = Library.GetRace(Character.Race).Move;
		let moveBonus = 0;

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if(Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes" && Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item")
			{
				let libItem = Library.GetEquipment(Character.Equipment[i].ID);
				let thisRank = libItem.Ranks.find(o => o.Rank === Character.Equipment[i].Rank+"");
				if (thisRank != undefined && thisRank.Modifiers != undefined && thisRank.Modifiers.MvmtRate != undefined)
					moveBonus += parseInt(thisRank.Modifiers.MvmtRate);
			}

		if (moveBonus == 0)
			return move;

		if (move.includes("/"))
		{
			let returner = "";
			let movesplit = move.split('/');
			for (let i = 0; i < movesplit.length; i++) 
			{
				if (i != 0)
					returner += "/";
				returner += (parseInt(movesplit[i]) + moveBonus) + "";
			}
			return returner + "*";
		}

		return (parseInt(move) + moveBonus) + "*";
	};


	this.GetCarryingCapacity = function()
	{ 
		let effctiveStrength = this.GetStr();
		if (Library.GetRace(Character.Race).Modifiers.Carry != undefined)
			effctiveStrength += parseInt(Library.GetRace(Character.Race).Modifiers.Carry);

		return Library.GetAttribute(effctiveStrength).Carry;
	}

	this.CalculateDisciplineBonuses = function()
	{
		if (this.Buffer.DisciplineBonuses != undefined)
			return this.Buffer.DisciplineBonuses;

		let Bonuses = {};
		let DisciplineBonuses = []; // = [{(Discipline)ID, stat1, stat2, stat3 ..}]
		let PathBonuses = []; // = [{(Path)ID, DisciplineID, stat1, stat2, stat3 ..}]
		let DoctrineBonuses = {}; // {stat1, stat2, ...} 

		// Find the highest bonuses in each Path
		for (let i = 0; i < Character.Paths.length; i++) 
		{
			if (Character.Paths[i].ID != "Empty") 
			{
				let thisPathBonuses = {"ID" : Character.Paths[i].ID, "DisciplineID" : Character.Paths[i].Linked};
				for (let j = parseInt(Character.Paths[i].Rank); j >= 1; j--) 
				{
					let thisRank = Library.GetPath(Character.Paths[i].ID).Ranks[j-1];

					if(thisRank.Modifiers != undefined)
						for (const modifier in thisRank.Modifiers)
						{
							if (thisPathBonuses[modifier] == undefined || thisPathBonuses[modifier] < parseInt(thisRank.Modifiers[modifier]))
								thisPathBonuses[modifier] = parseInt(thisRank.Modifiers[modifier]);
						}
				}
				PathBonuses.push(thisPathBonuses);
			}
		}

		// Find the highest bonuses in each Díscipline
		// Discipline
		for (let i = 0; i < Character.Disciplines.length; i++) 
		{
			if (Character.Disciplines[i].ID != "Empty") 
			{
				let thisDisciplineBonuses = {"ID" : Character.Disciplines[i].ID};
				for (let j = parseInt(Character.Disciplines[i].Circle); j >= 1; j--) 
				{
					let thisCircle = Library.GetCircle(Character.Disciplines[i].ID, j);

					if(thisCircle.Modifiers != undefined)
						for (const modifier in thisCircle.Modifiers)
						{
							if (thisDisciplineBonuses[modifier] == undefined || thisDisciplineBonuses[modifier] < parseInt(thisCircle.Modifiers[modifier]))
								thisDisciplineBonuses[modifier] = parseInt(thisCircle.Modifiers[modifier]);
						}
				}
				DisciplineBonuses.push(thisDisciplineBonuses);
			}
		}

		if (Character.Questor != undefined && Character.Questor.Doctrine != "Empty" && Character.Questor.Rank > 0 && Library.GetDoctrine(Character.Questor.Doctrine).Ranks[Character.Questor.Rank - 1].Modifiers != undefined)
			DoctrineBonuses = Library.GetDoctrine(Character.Questor.Doctrine).Ranks[Character.Questor.Rank - 1].Modifiers;

		// Figure out the correct stacked bonuses
		if (Character.Options.DiscBonusesStack == "Stack")
		{
			for (var i = 0; i < DisciplineBonuses.length; i++) 
			{
				for (const id in DisciplineBonuses[i])
					if (id != "ID")
						if (Bonuses[id] != undefined)
							Bonuses[id] += DisciplineBonuses[i][id];
						else 
							Bonuses[id] = DisciplineBonuses[i][id];

			}

			for (var i = 0; i < PathBonuses.length; i++) 
			{
				for (const id in PathBonuses[i])
					if (id != "ID" && id != "DisciplineID")
						if (Bonuses[id] != undefined)
							Bonuses[id] += PathBonuses[i][id];
						else 
							Bonuses[id] = PathBonuses[i][id];

			}

			for (const id in DoctrineBonuses)
				if (id != "ID" && id != "DisciplineID")
					if (Bonuses[id] != undefined)
						Bonuses[id] += DoctrineBonuses[id];
					else 
						Bonuses[id] = DoctrineBonuses[id];
		}
		else
		{
			// highestPathBonusesByDiscipline = [{DisciplineID, stat1, stat2, stat3 ..}]
			let highestPathBonusesByDiscipline = [];

			for (let thisPathIndex = 0; thisPathIndex < PathBonuses.length; thisPathIndex++) 
				if (PathBonuses[thisPathIndex].DisciplineID != "Empty") 
				{	
					let thisDisciplinePathBonuses = highestPathBonusesByDiscipline.find(o => o.ID == PathBonuses[thisPathIndex].DisciplineID)

					if (thisDisciplinePathBonuses == undefined)
						thisDisciplinePathBonuses = {"ID" : PathBonuses[thisPathIndex].DisciplineID}

					for (const id in PathBonuses[thisPathIndex])
						if (id != "ID" && id != "DisciplineID")
							if (thisDisciplinePathBonuses[id] == undefined || thisDisciplinePathBonuses[id] < PathBonuses[thisPathIndex][id])
								thisDisciplinePathBonuses[id] = PathBonuses[thisPathIndex][id];

					if (highestPathBonusesByDiscipline.find(o => o.ID == PathBonuses[thisPathIndex].DisciplineID) == undefined)
						highestPathBonusesByDiscipline.push(thisDisciplinePathBonuses);
					else 
					{
						let replacementPointer = highestPathBonusesByDiscipline.find(o => o.ID == PathBonuses[thisPathIndex].DisciplineID);
						replacementPointer = thisDisciplinePathBonuses;
					}
				}

			// Add the Path bonuses into the Discipline Bonuses
			for (let thisDisciplineIndex = 0; thisDisciplineIndex < DisciplineBonuses.length; thisDisciplineIndex++) 
			{
				let thisDisciplinePathBonuses = highestPathBonusesByDiscipline.find(o => o.ID == DisciplineBonuses[thisDisciplineIndex].ID)
				if (thisDisciplinePathBonuses != undefined)
					for (const id in thisDisciplinePathBonuses)
						if (id != "ID")
							if (DisciplineBonuses[thisDisciplineIndex][id] == undefined)
								DisciplineBonuses[thisDisciplineIndex][id] = thisDisciplinePathBonuses[id];
							else
								DisciplineBonuses[thisDisciplineIndex][id] += thisDisciplinePathBonuses[id];

			}			

			// Find the highest, by Discipline
			for (let thisDisciplineIndex = 0; thisDisciplineIndex < DisciplineBonuses.length; thisDisciplineIndex++) 
				for (const modifier in DisciplineBonuses[thisDisciplineIndex])
					if (modifier != "ID")
						if (Bonuses[modifier] == undefined || Bonuses[modifier] < DisciplineBonuses[thisDisciplineIndex][modifier])
							Bonuses[modifier] = DisciplineBonuses[thisDisciplineIndex][modifier];

			for (const modifier in DoctrineBonuses)
				if (modifier != "ID")
					if (Bonuses[modifier] == undefined || Bonuses[modifier] < parseInt(DoctrineBonuses[modifier]))
						Bonuses[modifier] = parseInt(DoctrineBonuses[modifier]);
		}

		this.Buffer.DisciplineBonuses = Bonuses;

		return Bonuses;
	}

	this.GetDisciplineBonus = function(stat)
	{
		if (this.Buffer.DisciplineBonuses == undefined)
			this.CalculateDisciplineBonuses();

		if (this.Buffer.DisciplineBonuses[stat] == undefined)
			return 0;
		else
			return this.Buffer.DisciplineBonuses[stat];
	}

	// ----------------
	// -- Edit Stuff --
	// ----------------

	// Discipline
	this.KillDiscipline = function(thisDisciplineIndex)
	{
		if (isNaN(thisDisciplineIndex) || thisDisciplineIndex < 0 || thisDisciplineIndex > Character.Disciplines.length)
		{
			console.log("CharacterManager.KillDiscipline(): Input invalid or out of range: " + thisDisciplineIndex);
			return; 
		}

		Character.Disciplines.splice(thisDisciplineIndex,1);						
	};

	this.SetDisciplineStartedAt = function(thisDisciplineIndex, startedAt)
	{
		if (isNaN(thisDisciplineIndex) || thisDisciplineIndex < 1 || thisDisciplineIndex > Character.Disciplines.length)
		{
			console.log("CharacterManager.SetDisciplineStartedAt(): Input invalid or out of range: " + thisDisciplineIndex);
			return; 
		}

		Character.Disciplines[thisDisciplineIndex].StartedAt = startedAt;

		this.Buffer.SpentLegendPoints = undefined;	
	};

	this.AddDiscipline = function()
	{
		let lowestCircleAttained = 15;
		for (let i = 0; i < Character.Disciplines.length; i++) 
			if (parseInt(Character.Disciplines[i].Circle) < lowestCircleAttained)
				lowestCircleAttained = parseInt(Character.Disciplines[i].Circle);

		Character.Disciplines.push({"ID": "Empty", "Circle" : "0",  "Order" : Character.Disciplines.length + "", "StartedAt" : lowestCircleAttained, "OptionalTalentsChosen" : []});
	};

	// Path
	this.KillPath = function(thisPathIndex)
	{
		if (isNaN(thisPathIndex) || 0 > thisPathIndex || thisPathIndex > Character.Paths.length)
		{
			console.log("CharacterManager.KillPath(): Input invalid or out of range: " + thisPathIndex);
			return; 
		}

		Character.Paths.splice(thisPathIndex,1);						
	}

	this.SetPath = function(thisPathIndex, thisPathID)
	{
		if (isNaN(thisPathIndex) || 0 > thisPathIndex || thisPathIndex > Character.Paths.length)
		{
			console.log("CharacterManager.SetPath(): Input invalid or out of range: (pathIndex) " + thisPathIndex);
			return; 
		}

		if (thisPathID != "Empty" && Library.GetPath(thisPathID) == undefined)
		{
			console.log("CharacterManager.SetPath(): Couldn't find the Path '" + thisPathID + "'");
			return; 
		}

		Character.Paths[thisPathIndex].ID = thisPathID;
		if(thisPathID != "Empty")
		{
			Character.Paths[thisPathIndex].Rank = 1;
			Character.Paths[thisPathIndex].Linked = Character.Disciplines.find(o => parseInt(o.Circle) >=5).ID;
		}
		Character.Paths[thisPathIndex].GrantedTalents = [];
		Character.Paths[thisPathIndex].GrantedTalents.push("Empty");
	}

	this.SetPathRank = function(thisPathIndex, rank)
	{
		if (isNaN(thisPathIndex) || 0 > thisPathIndex || thisPathIndex > Character.Paths.length)
		{
			console.log("CharacterManager.SetPathRank(): Input invalid or out of range: (thisPathIndex) " + thisPathIndex);
			return; 
		}

		if (isNaN(rank) || 0 > rank || rank > parseInt(Library.GetPath(Character.Paths[thisPathIndex].ID).MaxRank))
		{
			console.log("CharacterManager.SetPathRank(): Input invalid or out of range: (rank) " + rank);
			return; 
		}

		Character.Paths[thisPathIndex].Rank = rank;
		if (Character.Paths[thisPathIndex].ID != "Empty")
			Character.Talents.find(o => o.ID == Library.GetPath(Character.Paths[thisPathIndex].ID).Talent).Rank = rank;
	}

	this.SetPathDiscipline = function(thisPathIndex, disciplineID)
	{
		if (isNaN(thisPathIndex) || 0 > thisPathIndex || thisPathIndex > Character.Paths.length)
		{
			console.log("CharacterManager.SetPathDiscipline(): Input invalid or out of range: (thisPathIndex) " + thisPathIndex);
			return; 
		}

		if (Library.GetDiscipline(disciplineID) == undefined)
		{
			console.log("CharacterManager.SetPathRank(): Input invalid: (disciplineID) " + disciplineID);
			return; 
		}

		Character.Paths[thisPathIndex].Linked = disciplineID;
	}

	this.AddPath = function()
	{
		if (Character.Paths == undefined)
			Character.Paths = [];

		Character.Paths.push({"ID" : "Empty", "Rank" : "0"});
	}

	this.SetPathTalent = function(thisTalentIndex, talentID)
	{
		if (isNaN(thisTalentIndex) || 0 > thisTalentIndex || thisTalentIndex > Character.Talents.length)
		{
			console.log("CharacterManager.SetPathTalent(): Input invalid or out of range: (thisTalentIndex) " + thisTalentIndex);
			return; 
		}

		if (talentID != "Empty" && Library.GetTalent(talentID) == undefined)
		{
			console.log("CharacterManager.SetPathTalent(): Talent not found " + talentID);
			return; 
		}

		let chaPath = Character.Paths.find(o => o.ID == Character.Talents[thisTalentIndex].PathID);
		let pathRank = parseInt(Character.Talents[thisTalentIndex].PathRank)-1;

		chaPath.GrantedTalents[pathRank] = talentID;
		Character.Talents[thisTalentIndex].ID = talentID;
	}

	//Questor
	// Character.Questor = {Doctrine, Rank, devotionPoints, Ranks[devotionID, devotionRank, (devotionAbiliy)]}
	this.SetQuestorPassion = function(doctrineID)
	{
		if (Character.Questor == undefined)
			Character.Questor = new Object();

		Character.Questor.Doctrine = doctrineID;
		
		Character.Questor.Ranks = [];

		if (doctrineID == "Empty")
			Character.Questor.Rank = 0;
		else
		{
			Character.Questor.Rank = 1;
			Character.Questor.devotionPoints = 0;
			Character.Questor.Ranks.push({"devotionID" : "Empty", "devotionRank" : 0});
		}
	}

	this.SetQuestorRank = function(rank)
	{
		if (Character.Questor == undefined)
		{
			throw "Trying to set Questor Rank while Questor Doctrine not set";
		}

		Character.Questor.Rank = rank;

		let ranksMissing = rank - Character.Questor.Ranks.length;
		if (ranksMissing > 0)
			for (let i=0; i < ranksMissing; i++)
				Character.Questor.Ranks.push({"devotionID" : "Empty", "devotionRank" : 0});

		if (ranksMissing < 0)
			Character.Questor.Ranks.length = rank;
	}

	this.RebuildDevotionList = function(){}

	// Attributes
	this.SetAttributePoints = function(attributeAbbreviation, value)
	{
		if (!["dex", "str", "tou", "per", "wil", "cha"].includes(attributeAbbreviation.toLowerCase()))
		{
			console.log("CharacterManager.SetAttributePoints(): Unknown Attribute: " + attributeAbbreviation);
			return; 
		}
		if(Library.GetAttributeModifierByCost(value) == null)
		{
			console.log("CharacterManager.SetAttributePoints(): Invalid attribute value: " + value);
			return;
		}

		switch (attributeAbbreviation.toLowerCase())
		{
			case "dex": 
			Character.Attributes.Dex.Buildpoints = value;
			break;
			case "str": 
			Character.Attributes.Str.Buildpoints = value;
			break;
			case "tou": 
			Character.Attributes.Tou.Buildpoints = value;
			break;
			case "per": 
			Character.Attributes.Per.Buildpoints = value;
			break;
			case "wil": 
			Character.Attributes.Wil.Buildpoints = value;
			break;
			case "cha": 
			Character.Attributes.Cha.Buildpoints = value;
			break;
		}
	};

	this.SetAttributeIncreasess = function(attributeAbbreviation, value)
	{
		if (!["dex", "str", "tou", "per", "wil", "cha"].includes(attributeAbbreviation.toLowerCase()))
		{
			console.log("CharacterManager.SetAttributePoints(): Unknown Attribute: " + attributeAbbreviation);
			return; 
		}
		value = parseInt(value);
		if(0 > value || value > Character.Options.MaxAttributeIncrease)
		{
			console.log("CharacterManager.SetAttributePoints(): Invalid attribute value: " + value);
			return;
		}

		switch (attributeAbbreviation.toLowerCase())
		{
			case "dex": 
			Character.Attributes.Dex.Increases = value;
			break;
			case "str": 
			Character.Attributes.Str.Increases = value;
			break;
			case "tou": 
			Character.Attributes.Tou.Increases = value;
			break;
			case "per": 
			Character.Attributes.Per.Increases = value;
			break;
			case "wil": 
			Character.Attributes.Wil.Increases = value;
			break;
			case "cha": 
			Character.Attributes.Cha.Increases = value;
			break;
		}
	};

	// Talents
	this.RebuildSelectedTalents = function()
	{
		if (Character.Disciplines != undefined)
			for (let thisDisciplineIndex = 0; thisDisciplineIndex < Character.Disciplines.length; thisDisciplineIndex++) 
				if (Character.Disciplines[thisDisciplineIndex].ID != "Empty") 
				{
					let newSelectedList = [];
					for (let thisCircleIndex = 0; thisCircleIndex < parseInt(Character.Disciplines[thisDisciplineIndex].Circle); thisCircleIndex++) 
					{
						if (Character.Disciplines[thisDisciplineIndex].OptionalTalentsChosen[thisCircleIndex] != undefined)
							newSelectedList.push(Character.Disciplines[thisDisciplineIndex].OptionalTalentsChosen[thisCircleIndex]);
						else
							newSelectedList.push({"Circle" : (thisCircleIndex+1) + "", "ID" : "Empty"});
					}
					Character.Disciplines[thisDisciplineIndex].OptionalTalentsChosen = newSelectedList;
				}
	};

	this.RebuildTalentList = function()
	{
		if (Character.Disciplines != undefined)
			for (let i = 0; i < Character.Disciplines.length; i++) 
			{
				if (Character.Disciplines[i].OptionalTalentsChosen == undefined)
				{
					Character.Disciplines[i].OptionalTalentsChosen = [];

					let circle = 1;
					for (let j = 0; j < Character.Talents.length; j++) 
						if (Character.Talents[j].Type == "Optional" &&  Character.Talents[j].DisciplineId.includes(Character.Disciplines[i].ID))
							Character.Disciplines[i].OptionalTalentsChosen.push({"Circle" : (circle++) + "", "ID" : Character.Talents[j].ID});
					}
				}


		// Build new talent list:
		let NewList = [], index = 0;

		// Race
		if (Library.GetRace(Character.Race).BonusTalent != "" && Library.GetRace(Character.Race).BonusTalent != undefined)
			NewList.push({"Order" : (index++) + "",  "ID" : Library.GetRace(Character.Race).BonusTalent, "Rank" : "0", "Freerank" : "0", "Source" : Library.GetRace(Character.Race).Name, "DisciplineId" : "", "Circle" : "", "Type" : "Racial", "TalentPointsUseable" : "True"});

		// Ulkmen
		if (Character.Race == "ED4UlkMan")
		{
			if (Character.Disciplines.find(o => parseInt(o.Circle) >= 4) != undefined)
				NewList.push({"Order" : (index++) + "",  "ID" : "ED4CorruptKarma", "Rank" : "0", "Freerank" : "0", "Source" : Library.GetRace(Character.Race).Name, "DisciplineId" : "", "Circle" : "4", "Type" : "Racial"});
			if (Character.Disciplines.find(o => parseInt(o.Circle) >= 6) != undefined)
				NewList.push({"Order" : (index++) + "",  "ID" : "ED4AnimateDead",  "Rank" : "0", "Freerank" : "0", "Source" : Library.GetRace(Character.Race).Name, "DisciplineId" : "", "Circle" : "6", "Type" : "Racial"});
			if (Character.Disciplines.find(o => parseInt(o.Circle) >= 8) != undefined)
				NewList.push({"Order" : (index++) + "",  "ID" : "ED4Terror",       "Rank" : "0", "Freerank" : "0", "Source" : Library.GetRace(Character.Race).Name, "DisciplineId" : "", "Circle" : "8", "Type" : "Racial"});
			if (Character.Disciplines.find(o => parseInt(o.Circle) >= 10) != undefined)
				NewList.push({"Order" : (index++) + "",  "ID" : "ED4CursedLuck",   "Rank" : "0", "Freerank" : "0", "Source" : Library.GetRace(Character.Race).Name, "DisciplineId" : "", "Circle" : "10", "Type" : "Racial"});
		}

		// Disciplines
		let CasterFreeMatrix1Granted = false, CasterFreeMatrix2Granted = false;
		for (let thisDisciplineIndex = 0; thisDisciplineIndex < Character.Disciplines.length; thisDisciplineIndex++) 
		{
			if (Character.Disciplines[thisDisciplineIndex].ID != "Empty")
			{
				let libDiscipline = Library.GetDiscipline(Character.Disciplines[thisDisciplineIndex].ID);

				for (let thisCircleIndex = 0; thisCircleIndex < Character.Disciplines[thisDisciplineIndex].Circle; thisCircleIndex++) 
				{
					// Free talents
					if (libDiscipline.Circles[thisCircleIndex].FreeTalents != undefined)
						for (let i = 0; i < libDiscipline.Circles[thisCircleIndex].FreeTalents.length; i++) 
						{
							// Caster free Matrices
							if (libDiscipline.Circles[thisCircleIndex].FreeTalents[i] == "ED4StandardMatrix" && ((i==0 && CasterFreeMatrix1Granted == false) || (i==1 && CasterFreeMatrix2Granted == false) || Character.Options.FreeMatricesStack == "true"))
							{
								if (i == 0 && Character.Options.FreeMatricesStack != "true")
									CasterFreeMatrix1Granted = true;
								else 
									if (i == 1 && Character.Options.FreeMatricesStack != "true")
										CasterFreeMatrix2Granted = true;
								NewList.push({"Order" : (index++) + "",  "ID" : libDiscipline.Circles[thisCircleIndex].FreeTalents[i], "Rank" : Character.Disciplines[thisDisciplineIndex].Circle, "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Free", "FreeTalent" : i+"", "debug" : "Stacking Free Matrix"});
							}
							else
							{
								if (NewList.find(o => o.ID == libDiscipline.Circles[thisCircleIndex].FreeTalents[i]) != undefined)
								{
									// Talent already found in the list
									let TalentToMerge = NewList.filter(o => o.ID == libDiscipline.Circles[thisCircleIndex].FreeTalents[i]);

									if (i < TalentToMerge.length)
									{
										if (!TalentToMerge[i].DisciplineId.includes(libDiscipline.ID))
										{
											TalentToMerge[i].Source       += (TalentToMerge[i].Source != "" ? ", " : "") + libDiscipline.Name + " " + (thisCircleIndex+1);
											TalentToMerge[i].DisciplineId += (TalentToMerge[i].DisciplineId != "" ? ", " : "") + libDiscipline.ID;
											TalentToMerge[i].Circle       += (TalentToMerge[i].Circle != "" ? ", " : "") + (thisCircleIndex+1) + "";
										}
										TalentToMerge[i].Type = "Free";
										TalentToMerge[i].FreeTalent = i+"";
										TalentToMerge[i].Debug = "Merged Free Talent";
									}
								}
								else
									NewList.push({"Order" : (index++) + "",  "ID" : libDiscipline.Circles[thisCircleIndex].FreeTalents[i], "Rank" : Character.Disciplines[thisDisciplineIndex].Circle, "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Free", "FreeTalent" : i + "", "debug" : "New free talent"});
							}
						}
						
					// Discipline Talents
					for (let i = 0; i < libDiscipline.Circles[thisCircleIndex].DisciplineTalents.length; i++) 
					{
						if (NewList.find(o => o.ID == libDiscipline.Circles[thisCircleIndex].DisciplineTalents[i]) != undefined)
						{
							let TalentToMerge = NewList.find(o => o.ID == libDiscipline.Circles[thisCircleIndex].DisciplineTalents[i]);

							if (TalentToMerge.Type == "Optional")
							{
								// Don't merge; free the Optional slot instead
								TalentToMerge.Debug = "Optional cleared by Discipline Talent"
								TalentToMerge.ID = "Empty";
								TalentToMerge.Rank = "0";
								TalentToMerge.Freerank = "0";


								if (thisDisciplineIndex == 0 && thisCircleIndex == 0)
									NewList.push({"Order" : (index++) + "",  "ID" : libDiscipline.Circles[thisCircleIndex].DisciplineTalents[i], "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Discipline", "FirstLearnt" : thisDisciplineIndex, "TalentPointsUseable" : "True"});
								else
									NewList.push({"Order" : (index++) + "",  "ID" : libDiscipline.Circles[thisCircleIndex].DisciplineTalents[i], "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Discipline", "FirstLearnt" : thisDisciplineIndex});
							}
							else
							{
								if (!TalentToMerge.Source.includes(libDiscipline.Name))
									TalentToMerge.Source += (TalentToMerge.Source != "" ? ", " : "") + libDiscipline.Name + " " + (thisCircleIndex+1);
								TalentToMerge.DisciplineId += (TalentToMerge.DisciplineId != "" ? ", " : "") + libDiscipline.ID;
								TalentToMerge.Circle += (TalentToMerge.Circle != "" ? ", " : "") + (thisCircleIndex+1) + "";
								if (TalentToMerge.Type != "Free") 
									TalentToMerge.Type = "Discipline";
								if (thisDisciplineIndex == 0 && thisCircleIndex == 0)
									TalentToMerge.TalentPointsUseable = "True";
								if(TalentToMerge.FirstLearnt == undefined) 
									TalentToMerge.FirstLearnt = thisDisciplineIndex;
							}
						}	
						else
							if (thisDisciplineIndex == 0 && thisCircleIndex == 0)
								NewList.push({"Order" : (index++) + "",  "ID" : libDiscipline.Circles[thisCircleIndex].DisciplineTalents[i], "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Discipline", "FirstLearnt" : thisDisciplineIndex, "TalentPointsUseable" : "True"});
							else
								NewList.push({"Order" : (index++) + "",  "ID" : libDiscipline.Circles[thisCircleIndex].DisciplineTalents[i], "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Discipline", "FirstLearnt" : thisDisciplineIndex});
						}

					// Optional Talents chosen
					let ThisOptionalTalent = Character.Disciplines[thisDisciplineIndex].OptionalTalentsChosen[thisCircleIndex];
					if (ThisOptionalTalent != undefined)
					{
						if (ThisOptionalTalent.ID == "Empty")
						{
							if (thisDisciplineIndex == 0 && thisCircleIndex == 0)
								NewList.push({"Order" : (index++) + "",  "ID" : "Empty", "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Optional", "TalentPointsUseable" : "True"});
							else
								NewList.push({"Order" : (index++) + "",  "ID" : "Empty", "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Optional"});
						}
						else
						{
							let TalentToMerge = NewList.find(o => o.ID == ThisOptionalTalent.ID && o.Type!="Free");
							if (TalentToMerge != undefined)
							{
								if (!TalentToMerge.Source.includes(libDiscipline.Name))
									TalentToMerge.Source += (TalentToMerge.Source != "" ? ", " : "") + libDiscipline.Name + " " + (thisCircleIndex+1);
								if (!TalentToMerge.DisciplineId.includes(libDiscipline.ID))
									TalentToMerge.DisciplineId += (TalentToMerge.DisciplineId != "" ? ", " : "") + libDiscipline.ID;
								TalentToMerge.Circle += (TalentToMerge.Circle != "" ? ", " : "") + thisCircleIndex+1 + "";
								if (TalentToMerge.Type != "Free" && TalentToMerge.Type != "Discipline") 
									TalentToMerge.Type = "Optional";
								if (thisDisciplineIndex == 0 && thisCircleIndex == 0)
									TalentToMerge.TalentPointsUseable = "True";
								if(TalentToMerge.FirstLearnt == undefined) 
									TalentToMerge.FirstLearnt = thisDisciplineIndex;
								TalentToMerge.Debug = "Optional Talent Merge, Circle " + (thisCircleIndex+1)+"";
							}
							else
								if (thisDisciplineIndex == 0 && thisCircleIndex == 0)
									NewList.push({"Order" : (index++) + "",  "ID" : ThisOptionalTalent.ID, "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex + 1 + "", "Type" : "Optional", "Debug" : "New Optional Talent ", "FirstLearnt" : thisDisciplineIndex, "TalentPointsUseable" : "True"}); 
								else
									NewList.push({"Order" : (index++) + "",  "ID" : ThisOptionalTalent.ID, "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex + 1 + "", "Type" : "Optional", "Debug" : "New Optional Talent ", "FirstLearnt" : thisDisciplineIndex});
							}
						}
						else
						{
						// If Character.Disciplines[thisDisciplineIndex].OptionalTalentsChosen[thisCircleIndex] == undefined; define it (o:
						if (Character.Disciplines[thisDisciplineIndex].OptionalTalentsChosen == undefined)
							Character.Disciplines[thisDisciplineIndex].OptionalTalentsChosen = [];
						Character.Disciplines[thisDisciplineIndex].OptionalTalentsChosen[thisCircleIndex] = {"Circle" : (thisCircleIndex+1) + "", "ID" : "Empty"};
						if (thisDisciplineIndex == 0 && thisCircleIndex == 0)
							NewList.push({"Order" : (index++) + "",  "ID" : "Empty", "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Optional", "FirstLearnt" : thisDisciplineIndex, "TalentPointsUseable" : "True"});
						else
							NewList.push({"Order" : (index++) + "",  "ID" : "Empty", "Rank" : "0", "Freerank" : "0", "Source" : libDiscipline.Name + " " + (thisCircleIndex+1), "DisciplineId" : libDiscipline.ID, "Circle" : thisCircleIndex+1 + "", "Type" : "Optional", "FirstLearnt" : thisDisciplineIndex});
					}
				} 
			}
		}

		// Caster circle 5 bonus
		for (let thisDisciplineIndex = 0; thisDisciplineIndex < Character.Disciplines.length; thisDisciplineIndex++) 
		{
			if (Character.Disciplines[thisDisciplineIndex].ID != "Empty")	
			{			
				let libDiscipline = Library.GetDiscipline(Character.Disciplines[thisDisciplineIndex].ID);
			
				for (let thisCircleIndex = 0; thisCircleIndex < Character.Disciplines[thisDisciplineIndex].Circle; thisCircleIndex++) 
				{
					if (libDiscipline.Circles[thisCircleIndex].SwapFreeTalent != undefined)
					{
						if (thisDisciplineIndex == 0 || Character.Options.CasterCircle5Bonus == "Yes" || NewList.find(o => o.debug != undefined && o.debug.includes("Swapped")) == undefined)
						{
							let TalentToSwap = NewList.find(o => (o.ID == libDiscipline.Circles[thisCircleIndex].SwapFreeTalent[0]));
							TalentToSwap.ID = libDiscipline.Circles[thisCircleIndex].SwapFreeTalent[1];
							TalentToSwap.debug += ", Swapped";
						}
					}
				}
			}		
		}

		//Path
		if (Character.Paths != undefined)
			for (let thisPathIndex = 0; thisPathIndex < Character.Paths.length; thisPathIndex++)
				if (Character.Paths[thisPathIndex].ID !="Empty")
				{
					let chaPath = Character.Paths[thisPathIndex];
					let libPath = Library.GetPath(chaPath.ID);

					// Path Talent
					NewList.push({"Order" : (index++) + "",  "ID" : libPath.Talent, "Rank" : chaPath.Rank, "Freerank" : 0, "Source" : libPath.Name, "PathID" : chaPath.ID, "Type" : "PathTalent", "TalentPointsUseable" : "false"});

					// Path Granted Talents
					for (let thisPathRank = 0; thisPathRank < parseInt(chaPath.Rank); thisPathRank++)
					{
						NewList.push({"Order" : (index++) + "",  "ID" : (chaPath.GrantedTalents[thisPathRank] == undefined ? "Empty" : chaPath.GrantedTalents[thisPathRank]), "Rank" : 0, "Freerank" : 0, "Source" : libPath.Name + " " + (thisPathRank + 1), "PathID" : chaPath.ID, "PathRank" : thisPathRank+1, "Type" : "PathGrantedTalent"});
					}
				}

		// Versatility
		if (Library.GetRace(Character.Race).Abilities.includes("Versatility"))
		{
			if (Character.Versatility == undefined)
				Character.Versatility = [];

			let versatilityTalent = Character.Talents.find(o => o.ID == "ED4Versatility");
			let versatilityRank;
			if (versatilityTalent == undefined)
				versatilityRank = 0;
			else
				versatilityRank = parseInt(versatilityTalent.Rank);

			for (let i = 0; i < versatilityRank; i++) 
			{
				if (Character.Versatility[i] == undefined)
					Character.Versatility.push({"ID" : "Empty", "Freerank" : "0", "Rank" : "0", "Tier" : "1"});
				let versatitlityTier = Character.Versatility[i].Tier;
				if (versatitlityTier == undefined)
					versatitlityTier = "1";

				if (i < 3)
					NewList.push({"Order" : (index++) + "",  "ID" : Character.Versatility[i].ID, "Rank" : Character.Versatility[i].Rank, "Freerank" : Character.Versatility[i].Freerank, "Source" : "Versatility" + " " + (i+1), "DisciplineId" : "", "Circle" : "", "Type" : "Versatility", "VersatilityRank" : i, "VersatilityTier" : versatitlityTier, "TalentPointsUseable" : "True"});
				else
					NewList.push({"Order" : (index++) + "",  "ID" : Character.Versatility[i].ID, "Rank" : Character.Versatility[i].Rank, "Freerank" : Character.Versatility[i].Freerank, "Source" : "Versatility" + " " + (i+1), "DisciplineId" : "", "Circle" : "", "Type" : "Versatility", "VersatilityRank" : i, "VersatilityTier" : versatitlityTier});
			}
		}

		// Thread Items
		for (let i = 0; i < Character.Equipment.length; i++) 
			if(Character.Equipment[i].ID != "Empty" && Character.Equipment[i].InUse == "Yes")
			{	
				let libItem = Library.GetEquipment(Character.Equipment[i].ID);
				if (libItem == undefined)
					console.log("Undefined Item in the Character: '" + Character.Equipment[i].ID) + "'";
				if (libItem.Type == "Thread Item")
				{
					if (parseInt(Character.Equipment[i].Rank) > 0)
					{
						if (libItem.Ranks[Character.Equipment[i].Rank-1].BonusTalent != undefined) // Rank-1 is because the index begins at 0
							NewList.push({"Order" : (index++) + "",  "ID" : libItem.Ranks[Character.Equipment[i].Rank-1].BonusTalent.ID, "Rank" : libItem.Ranks[Character.Equipment[i].Rank-1].BonusTalent.Rank, "Freerank" : "0", "Source" : libItem.Name, "DisciplineId" : "", "Circle" : "", "Type" : "Item"});
						if (libItem.Ranks[Character.Equipment[i].Rank-1].Modifiers != undefined ) 
							if (libItem.Ranks[Character.Equipment[i].Rank-1].Modifiers.Talents != undefined)
								for (let RankTalentKey in libItem.Ranks[Character.Equipment[i].Rank-1].Modifiers.Talents) 
								{
									let thisTalentID = libItem.Ranks[Character.Equipment[i].Rank-1].Modifiers.Talents[RankTalentKey].ID;
									if (NewList.find(o => o.ID == thisTalentID || (o.ID != "Empty" && Library.GetTalent(o.ID).CountsAs == thisTalentID)) != undefined)
									{
										let TalentsToMerge = NewList.filter(o => o.ID == thisTalentID || (o.ID != "Empty" && Library.GetTalent(o.ID).CountsAs == thisTalentID));
										for (let j = 0; j < TalentsToMerge.length; j++) 
										{
											//TalentsToMerge[j].Source += (TalentsToMerge[j].Source != "" ? ", " : "") + libItem.Name;
											TalentsToMerge[j].Debug += " Thread Item Merge";
										}
									}
									else
										if (thisTalentID != "ED4ThreadWeaving") 
											NewList.push({"Order" : (index++) + "",  "ID" : libItem.Ranks[Character.Equipment[i].Rank-1].Modifiers.Talents[RankTalentKey].ID, "Rank" : "0", "Freerank" : "0", "Source" : libItem.Name, "DisciplineId" : "", "Circle" : "", "Type" : "Item", "Debug" : "Thread Item Bonus"});
										else
											console.log("Thread Item bonus to Thread Weaving for a character that doesn't Have Thread Weaving ignored.")
								}
							}
						}
					}


		// Blood Magic
		if (Character.Magic != undefined)
			for (let i = 0; i < Character.Magic.length; i++) 
				if(Character.Magic[i].ID != "Empty")
				{
					let libMagic = Library.GetMagic(Character.Magic[i].ID);
					if (libMagic.BonusTalent != undefined)
						NewList.push({"Order" : (index++) + "",  "ID" : libMagic.BonusTalent, "Rank" : 1, "Freerank" : 0, "Source" : libMagic.Name, "DisciplineId" : "", "Circle" : "", "Type" : "Magic, raisable"});
				}

		// Others? 

		// Find and transfer ranks, spells, guids
		for (let thisNewTalentIndex = 0; thisNewTalentIndex < NewList.length; thisNewTalentIndex++) 
			for (let thisOldTalentIndex = 0; thisOldTalentIndex < Character.Talents.length; thisOldTalentIndex++)
			{
				if (NewList[thisNewTalentIndex].ID == Character.Talents[thisOldTalentIndex].ID && NewList[thisNewTalentIndex].Type == Character.Talents[thisOldTalentIndex].Type)
				{
					// Ranks
					if (NewList[thisNewTalentIndex].Type != "Free" && NewList[thisNewTalentIndex].Type != "Item")
					{
						NewList[thisNewTalentIndex].Freerank = Character.Talents[thisOldTalentIndex].Freerank;
						NewList[thisNewTalentIndex].Rank = Character.Talents[thisOldTalentIndex].Rank;
					}
					else
						if (NewList[thisNewTalentIndex].ID == "Empty")
						{
							NewList[thisNewTalentIndex].Freerank = 0;
							NewList[thisNewTalentIndex].Rank = 0;
						}

					// Guid
					if (NewList[thisNewTalentIndex].FreeTalent == Character.Talents[thisOldTalentIndex].FreeTalent)
						if (Character.Talents[thisOldTalentIndex].UID == undefined)
							NewList[thisNewTalentIndex].UID = uuidv4();
						else
							NewList[thisNewTalentIndex].UID = Character.Talents[thisOldTalentIndex].UID;

					// Spells
					if(Character.Talents[thisOldTalentIndex].Spell != undefined && NewList[thisNewTalentIndex].Type == Character.Talents[thisOldTalentIndex].Type)
						if ((NewList[thisNewTalentIndex].Type != "Free" && NewList[thisNewTalentIndex].Circle == Character.Talents[thisOldTalentIndex].Circle) || (NewList[thisNewTalentIndex].Type == "Free" && NewList[thisNewTalentIndex].FreeTalent == Character.Talents[thisOldTalentIndex].FreeTalent))
							NewList[thisNewTalentIndex].Spell = Character.Talents[thisOldTalentIndex].Spell;
				}
			}

		Character.Talents = NewList;
	};


	this.SetTalent = function(thisTalentIndex, newTalentID, isVersatility, tier)
	{
		if (isNaN(thisTalentIndex) || thisTalentIndex < 0 || thisTalentIndex > Character.Talents.length)
		{
			console.log("CharacterManager.SetTalent(): Input invalid or out of range: " + thisTalentIndex);
			return; 
		}
		if (newTalentID != "Empty" && Library.GetTalent(newTalentID) == undefined)
		{
			console.log("CharacterManager.SetTalent(): Unknown Talent: " + newTalentID);
			return; 
		}
		// Check if the Talent exists in the optionals list?

		Character.Talents[thisTalentIndex].ID = newTalentID;
		if(isVersatility != undefined)
		{			
			Character.Talents[thisTalentIndex].Tier = tier;
			Character.Versatility[Character.Talents[thisTalentIndex].VersatilityRank] = {"ID" : Character.Talents[thisTalentIndex].ID, "Tier" : tier};
		}		
		else
			Character.Disciplines.find(o => o.ID == Character.Talents[thisTalentIndex].DisciplineId).OptionalTalentsChosen[Character.Talents[thisTalentIndex].Circle-1] = {"Circle" : Character.Talents[thisTalentIndex].Circle, "ID" : newTalentID};
	};

	this.SetTalentTier = function(thisTalentIndex, tier)
	{
		Character.Talents[thisTalentIndex].VersatilityTier = tier;
		Character.Versatility[Character.Talents[thisTalentIndex].VersatilityRank].Tier = tier;
	};

	
	this.SetTalentFreeRank = function(thisTalentIndex, newFreeRank)
	{
		if (isNaN(thisTalentIndex) || isNaN(newFreeRank) || thisTalentIndex < 0 || thisTalentIndex > Character.Talents.length)
		{
			console.log("CharacterManager.SetTalentFreeRank(): Input invalid or out of range: " + thisTalentIndex + ", " + newFreeRank);
			return; 
		}

		Character.Talents[thisTalentIndex].Freerank = parseInt(newFreeRank);

		if (Character.Talents[thisTalentIndex].Rank < Character.Talents[thisTalentIndex].Freerank)
		{
			Character.Talents[thisTalentIndex].Rank = Character.Talents[thisTalentIndex].Freerank;
			UI.UpdateTalentRank(thisTalentIndex);
		}
	};

	this.SetTalentRank = function(thisTalentIndex, newRank)
	{
		if (isNaN(thisTalentIndex) || isNaN(newRank) || thisTalentIndex < 0 || thisTalentIndex > Character.Talents.length)
		{
			console.log("CharacterManager.SetTalentRank(): Input invalid or out of range: " + thisTalentIndex + ", " + newRank);
			return; 
		}

		Character.Talents[thisTalentIndex].Rank = parseInt(newRank);

		if (Character.Talents[thisTalentIndex].TalentPointsUseable == "True")
		{
			if (Character.Talents[thisTalentIndex].Rank < Character.Talents[thisTalentIndex].Freerank)
			{
				Character.Talents[thisTalentIndex].Freerank = Character.Talents[thisTalentIndex].Rank;
				UI.UpdateTalentFreeRank(thisTalentIndex);
			}
		}
		else
			Character.Talents[thisTalentIndex].Freerank = 0;

		UI.UpdateTalentStepDice(thisTalentIndex);
	};

	// Knacks
	this.KillKnack = function(thisKnackIndex)
	{
		if (isNaN(thisKnackIndex) || thisKnackIndex < 0 || thisKnackIndex > Character.Knacks.length)
		{
			console.log("CharacterManager.KillKnack(): Input invalid or out of range: " + thisKnackIndex);
			return; 
		}

		Character.Knacks.splice(thisKnackIndex,1);
	};

	this.SelectKnack = function(thisKnackIndex, knackID)
	{
		if (isNaN(thisKnackIndex) || thisKnackIndex < 0 || thisKnackIndex > Character.Knacks.length || knackID != "Empty" && Library.GetKnack(knackID) == undefined)
		{
			console.log("CharacterManager.SelectKnack(): Input invalid or out of range: " + thisKnackIndex + ", " + knackID);
			return; 
		}

		Character.Knacks[thisKnackIndex].ID = knackID;
	};


	this.AddKnack = function()
	{
		Character.Knacks.push({"ID" : "Empty"});
	};

	// Questor Devotions
	this.SetDevotion = function(thisDevotionIndex, thisDevotionID)
	{
		if (isNaN(thisDevotionIndex) || thisDevotionIndex < 0 || thisDevotionIndex > Character.Questor.Rank || (thisDevotionID != "Empty" && Library.GetDevotion(thisDevotionID) == undefined))
		{
			console.log("CharacterManager.SetDevotion(): Input invalid or out of range: " + thisDevotionIndex + ", " + thisDevotionID);
			return; 
		}

		Character.Questor.Ranks[thisDevotionIndex].devotionID = thisDevotionID;

		// Work out Devotion Cost
		if (thisDevotionID == "Empty")
		{
			Character.Questor.Ranks[thisDevotionIndex].Cost = 0;
			return;
		}

		let libDoctrine = Library.GetDoctrine(Character.Questor.Doctrine);
		if (libDoctrine.FollowerDevotions.find(o => o == thisDevotionID) != undefined)
		{
			Character.Questor.Ranks[thisDevotionIndex].Cost = "Follower";
			return;
		}
		if (libDoctrine.AdherentDevotions.find(o => o == thisDevotionID) != undefined)
		{
			Character.Questor.Ranks[thisDevotionIndex].Cost = "Adherent";
			return;
		}
		if (libDoctrine.ExemplarDevotions.find(o => o == thisDevotionID) != undefined)
		{
			Character.Questor.Ranks[thisDevotionIndex].Cost = "Exemplar";
			return;
		}

		Character.Questor.Ranks[thisDevotionIndex].Cost = 0;
		console.log("CharacterManager.SetDevotion(): I appear to be trying to set a Devotion the character doesn't have access to? How is this possible? " + thisDevotionIndex + ", " + thisDevotionID);
	}

	this.SetDevotionRank = function(thisDevotionIndex, thisDevotionRank)
	{
		if (isNaN(thisDevotionIndex) || thisDevotionIndex < 0 || thisDevotionIndex > Character.Questor.Rank || isNaN(thisDevotionRank) || 0 > thisDevotionRank || thisDevotionRank > 12)
		{
			console.log("CharacterManager.SetDevotion(): Input invalid or out of range: " + thisDevotionIndex + ", " + thisDevotionRank);
			return; 
		}

		Character.Questor.Ranks[thisDevotionIndex].devotionRank = thisDevotionRank;
	}

	this.SetDevotionAbility = function(thisDevotionIndex, thisDevotionAbility)
	{
		if (isNaN(thisDevotionIndex) || thisDevotionIndex < 0 || thisDevotionIndex > Character.Questor.Rank)
		{
			console.log("CharacterManager.SetDevotionAbility(): Input invalid or out of range: " + thisDevotionIndex + ", " + thisDevotionAbility);
			return; 
		}

		Character.Questor.Ranks[thisDevotionIndex].devotionAbility = thisDevotionAbility;
	}

	// Skills
	this.KillSkill = function(thisSkillIndex)
	{
		if (isNaN(thisSkillIndex) || thisSkillIndex < 0 || thisSkillIndex > Character.Skills.length)
		{
			console.log("CharacterManager.KillSkill(): Input invalid or out of range: " + thisSkillIndex);
			return; 
		}

		Character.Skills.splice(thisSkillIndex,1);
	};
	
	this.SetSkillCategory = function (thisSkillIndex, category)
	{
		if (isNaN(thisSkillIndex) || thisSkillIndex < 0 || thisSkillIndex > Character.Skills.length)
		{
			console.log("CharacterManager.SetSkillCategory(): Input invalid or out of range: " + thisSkillIndex);
			return; 
		}

		Character.Skills[thisSkillIndex].Category = category; 
		switch (category)
		{
			case "General":
			case "Empty":
			Character.Skills[thisSkillIndex].ID = "Empty";
			Character.Skills[thisSkillIndex].Name = "Not Selected";
			Character.Skills[thisSkillIndex].Rank = "0";
			Character.Skills[thisSkillIndex].Freerank = "0";
			break;
			case "Knowledge":
			Character.Skills[thisSkillIndex].ID = "ED4Knowledge";
			Character.Skills[thisSkillIndex].Name = "";
			Character.Skills[thisSkillIndex].Rank = "0";
			Character.Skills[thisSkillIndex].Freerank = "0";
			break;
			case "Artisan":
			Character.Skills[thisSkillIndex].ID = "ED4Artisan";
			Character.Skills[thisSkillIndex].Name = "";
			Character.Skills[thisSkillIndex].Rank = "0";
			Character.Skills[thisSkillIndex].Freerank = "0";
			break;
			default:
			console.log("CharacterManager.SetSkillCategory(): Category not recognised: " + category);
		}
	};

	this.SetSkillName = function(thisSkillIndex, skillName)
	{
		if (isNaN(thisSkillIndex) || thisSkillIndex < 0 || thisSkillIndex > Character.Skills.length)
		{
			console.log("CharacterManager.SetSkillName(): Input invalid or out of range: " + thisSkillIndex);
			return; 
		}

		Character.Skills[thisSkillIndex].Name = skillName;
	};

	this.SetSkillID = function(thisSkillIndex, skillID)
	{
		if (isNaN(thisSkillIndex) || thisSkillIndex < 0 || thisSkillIndex > Character.Skills.length)
		{
			console.log("CharacterManager.SetSkillID(): Input invalid or out of range: " + thisSkillIndex);
			return; 
		}

		Character.Skills[thisSkillIndex].ID = skillID;
	};

	this.SetSkillFreeRank = function(thisSkillIndex, newFreeRank)
	{
		if (isNaN(thisSkillIndex) || isNaN(newFreeRank) || thisSkillIndex < 0 || thisSkillIndex > Character.Skills.length)
		{
			console.log("CharacterManager.SetSkillFreeRank(): Input invalid or out of range: " + thisSkillIndex + ", " + newFreeRank);
			return; 
		}

		Character.Skills[thisSkillIndex].Freerank = newFreeRank;

		if (Character.Skills[thisSkillIndex].Rank < Character.Skills[thisSkillIndex].Freerank)
		{
			Character.Skills[thisSkillIndex].Rank = Character.Skills[thisSkillIndex].Freerank;
			UI.UpdateSkillRank(thisSkillIndex);
		}
	};

	this.SetSkillRank = function(thisSkillIndex, newRank)
	{
		if (isNaN(thisSkillIndex) || isNaN(newRank) || thisSkillIndex < 0 || thisSkillIndex > Character.Skills.length)
		{
			console.log("CharacterManager.SetSkillFreeRank(): Input invalid or out of range: " + thisSkillIndex + ", " + newRank);
			return; 
		}

		Character.Skills[thisSkillIndex].Rank = newRank;

		if (Character.Skills[thisSkillIndex].Rank < Character.Skills[thisSkillIndex].Freerank)
		{
			Character.Skills[thisSkillIndex].Freerank = Character.Skills[thisSkillIndex].Rank;
			UI.UpdateSkillFreeRank(thisSkillIndex);
		}
	};
	
	this.AddSkill = function()
	{
		Character.Skills.push({"ID" : "Empty"});
	};

	// Equipment
	this.KillEq    = function(thisEqIndex)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
		{
			console.log("CharacterManager.KillEq(): Input invalid or out of range: " + thisEqIndex);
			return; 
		}

		Character.Equipment.splice(thisEqIndex,1);
	};

	this.SetEqInUse = function(thisEqIndex, eqInUse)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
		{
			console.log("CharacterManager.SetEqInUse(): Input invalid or out of range: " + thisSpellIndex);
			return; 
		}

		Character.Equipment[thisEqIndex].InUse = (eqInUse ? "Yes" : "No");

		if (eqInUse && Character.Equipment[thisEqIndex].Type == "Shield" || Character.Equipment[thisEqIndex].Type == "Armor")
			for (let i = 0; i < Character.Equipment.length; i++) 
				if (Character.Equipment[i].Type == Character.Equipment[thisEqIndex].Type && i != thisEqIndex)
					Character.Equipment[i].InUse = "No";
	};

	this.SetEq = function(thisEqIndex, eqId)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
		{
			console.log("CharacterManager.SetEq(): Input invalid or out of range: " + thisEqIndex + ", " + eqId);
			return; 
		}

		Character.Equipment[thisEqIndex].ID = eqId;
		if (eqId == "Empty")
			Character.Equipment[thisEqIndex].InUse = "No";
		else
		{
			Character.Equipment[thisEqIndex].Type = Library.GetEquipment(eqId).Type;
			if (Character.Equipment[thisEqIndex].Type == "Shield" || Character.Equipment[thisEqIndex].Type == "Armor")
			{
				Character.Equipment[thisEqIndex].InUse = "Yes";
				for (let i = 0; i < Character.Equipment.length; i++) 
					if (Character.Equipment[i].Type == Character.Equipment[thisEqIndex].Type && i != thisEqIndex)
						Character.Equipment[i].InUse = "No";
			}
		}
		Character.Equipment[thisEqIndex].Forged = undefined;
		Character.Equipment[thisEqIndex].PhForge = undefined;
		Character.Equipment[thisEqIndex].MyForge = undefined;
		Character.Equipment[thisEqIndex].Rank = undefined;
		Character.Equipment[thisEqIndex].Name = undefined;
	};

	this.SetEqName = function(thisEqIndex, eqName)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
		{
			console.log("CharacterManager.SetEqName(): Input invalid or out of range: " + thisEqIndex);
			return; 
		}

		Character.Equipment[thisEqIndex].Name = eqName;
	};

	this.SetEqType = function(thisEqIndex, eqType)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
		{
			console.log("CharacterManager.SetEqType(): Input invalid or out of range: " + thisEqIndex);
			return; 
		}

		if (Character.Equipment[thisEqIndex].Type != eqType)
			Character.Equipment[thisEqIndex].ID = "Empty";
		Character.Equipment[thisEqIndex].Type = eqType;
	};

	this.SetEqRank = function(thisEqIndex, rank)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
		{
			console.log("CharacterManager.SetEqRank(): Input invalid or out of range: " + thisEqIndex + ", " + rank);
			return; 
		}

		Character.Equipment[thisEqIndex].Rank = rank;
	};

	this.SetEqForge = function(thisEqIndex, forge)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
		{
			console.log("CharacterManager.SetEqForge(): Input invalid or out of range: " + thisEqIndex);
			return; 
		}

		Character.Equipment[thisEqIndex].Forged = forge;
	};

	this.SetEqPhForge = function (thisEqIndex, phForge)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
		{
			console.log("CharacterManager.SetEqPhForge(): Input invalid or out of range: " + thisEqIndex);
			return; 
		}

		Character.Equipment[thisEqIndex].PhForge = phForge;
		CharacterManager.Buffer.PhArm = undefined;
	};

	this.SetEqMyForge = function (thisEqIndex, myForge)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length)
		{
			console.log("CharacterManager.SetEqMyForge(): Input invalid or out of range: " + thisEqIndex + ", " + myForge);
			return; 
		}

		Character.Equipment[thisEqIndex].MyForge = myForge;
		CharacterManager.Buffer.MyArm = undefined;
	};

	this.SetEqCount = function(thisEqIndex, eqCount)
	{
		if (isNaN(thisEqIndex) || thisEqIndex < 0 || thisEqIndex > Character.Equipment.length || isNaN(eqCount))
		{
			console.log("CharacterManager.SetEqCount(): Input invalid or out of range: " + thisEqIndex);
			return; 
		}

		Character.Equipment[thisEqIndex].Count = eqCount;
	};

	this.AddEq = function()
	{
		Character.Equipment.push({"ID" : "Empty", "Type" : "Empty", "Count" : "1", "InUse" : "Yes"});
	};

	// Spells 
	this.KillSpell = function(thisSpellIndex)
	{
		if (isNaN(thisSpellIndex) || thisSpellIndex < 0 || thisSpellIndex > Character.Spells.length)
		{
			console.log("CharacterManager.KillSpell(): Input invalid or out of range: " + thisSpellIndex);
			return; 
		}

		Character.Spells.splice(thisSpellIndex,1);
	};

	this.SetSpell = function(thisSpellIndex, spellID)
	{
		if (isNaN(thisSpellIndex) || thisSpellIndex < 0 || thisSpellIndex > Character.Spells.length)
		{
			console.log("CharacterManager.SetSkillID(): Input invalid or out of range: " + thisSpellIndex);
			return; 
		}

		Character.Spells[thisSpellIndex].ID = spellID;
	};

	this.AddSpell = function()
	{
		Character.Spells.push({"ID" : "Empty"});
	};

	// Magic
	this.KillMagic = function(thisMagicIndex)
	{
		if (isNaN(thisMagicIndex) || thisMagicIndex < 0 || thisMagicIndex > Character.Magic.length)
		{
			console.log("CharacterManager.KillMagic(): Input invalid or out of range: " + thisMagicIndex);
			return; 
		}

		Character.Magic.splice(thisMagicIndex,1);
	};

	this.SetMagicApplicable = function(thisMagicIndex, applicable)
	{
		if (isNaN(thisMagicIndex) || thisMagicIndex < 0 || thisMagicIndex > Character.Magic.length)
		{
			console.log("CharacterManager.SetMagicApplicable(): Input invalid or out of range: " + thisMagicIndex + ", " + applicable);
			return; 
		}

		Character.Magic[thisMagicIndex].Applicable = (applicable == true ? "Yes" : "No");
	};

	this.SetMagic = function(thisMagicIndex, magicID)
	{
		if (isNaN(thisMagicIndex) || thisMagicIndex < 0 || thisMagicIndex > Character.Magic.length)
		{
			console.log("CharacterManager.SetMagic(): Input invalid or out of range: " + thisMagicIndex + ", " + magicID);
			return; 
		}

		Character.Magic[thisMagicIndex].ID = magicID;

		if (magicID != "Empty")
		{
			let libMagic = Library.GetMagic(magicID);
			if (libMagic.Threadable != undefined)
			{
				Character.Magic[thisMagicIndex].Threads = [];
				for (let i = 0; i < parseInt(libMagic.Threadable); i++) 
					Character.Magic[thisMagicIndex].Threads.push({"Target" : "Empty", "Rank" : "0"});
			}
		}
		else
			Character.Magic[thisMagicIndex].Threads = undefined;

		Character.Magic[thisMagicIndex].Target = "";
		Character.Magic[thisMagicIndex].TalentOrSkill = undefined;
		Character.Magic[thisMagicIndex].Attribute1 = undefined;
		Character.Magic[thisMagicIndex].Attribute2 = undefined;
	};

	this.SetMagicTarget = function(thisMagicIndex, target)
	{
		if (isNaN(thisMagicIndex) || thisMagicIndex < 0 || thisMagicIndex > Character.Magic.length)
		{
			console.log("CharacterManager.SetMagicTarget(): Input invalid or out of range: " + thisMagicIndex);
			return; 
		}

		Character.Magic[thisMagicIndex].Target = target;
	};

	this.SetMagicTalentorSkill = function(thisMagicIndex, talentOrSkill)
	{
		if (isNaN(thisMagicIndex) || thisMagicIndex < 0 || thisMagicIndex > Character.Magic.length)
		{
			console.log("CharacterManager.SetMagicTalentorSkill(): Input invalid or out of range: " + thisMagicIndex);
			return; 
		}

		Character.Magic[thisMagicIndex].TalentOrSkill = talentOrSkill;
	};

	this.SetMagicAttributes = function(thisMagicIndex, attribute1, attribute2)
	{
		if (isNaN(thisMagicIndex) || thisMagicIndex < 0 || thisMagicIndex > Character.Magic.length)
		{
			console.log("CharacterManager.SetMagicAttributes(): Input invalid or out of range: " + thisMagicIndex);
			return; 
		}

		Character.Magic[thisMagicIndex].Attribute1 = attribute1;
		Character.Magic[thisMagicIndex].Attribute2 = attribute2;
	};

	this.SetMagicThreadTarget = function(thisMagicIndex, threadIndex, target)
	{
		if (isNaN(thisMagicIndex) || thisMagicIndex < 0 || thisMagicIndex > Character.Magic.length)
		{
			console.log("CharacterManager.SetMagicThreadTarget(): Input invalid or out of range: " + thisMagicIndex);
			return; 
		}

		if (Character.Magic[thisMagicIndex].Threads == undefined)
			Character.Magic[thisMagicIndex].Threads = [];
		if (Character.Magic[thisMagicIndex].Threads[threadIndex] == undefined)		
			Character.Magic[thisMagicIndex].Threads[threadIndex] = {};


		Character.Magic[thisMagicIndex].Threads[threadIndex].Target = target;
	};

	this.SetMagicThreadRank = function(thisMagicIndex, threadIndex, threadRank)
	{
		if (isNaN(thisMagicIndex) || thisMagicIndex < 0 || thisMagicIndex > Character.Magic.length)
		{
			console.log("CharacterManager.SetMagicThreadTarget(): Input invalid or out of range: " + thisMagicIndex);
			return; 
		}

		if (Character.Magic[thisMagicIndex].Threads == undefined)
			Character.Magic[thisMagicIndex].Threads = [];
		if (Character.Magic[thisMagicIndex].Threads[threadIndex] == undefined)		
			Character.Magic[thisMagicIndex].Threads[threadIndex] = {};

		Character.Magic[thisMagicIndex].Threads[threadIndex].Rank = threadRank;
	};

	this.AddMagic = function()
	{
		if (Character.Magic == undefined)
			Character.Magic = [];
		Character.Magic.push({"ID" : "Empty"});
	};

	// Check for things no longer allowed
	this.CheckSpells = function()
	{
		if (Character.Spells.length == 0)
			return;

		// Remove Spells no lonter qualified for

		let SpellsQualifiedFor = this.GetSpellsQualifiedFor();

		for (var i = 0; i < Character.Spells.length; i++) 
			if (Character.Spells[i].ID != "Empty")
				if (SpellsQualifiedFor.find(o => o.ID == Character.Spells[i].ID) == undefined)
				{
					console.log("CharacterManager.CheckSpells() :" + Library.GetSpell(Character.Spells[i].ID).Name + " Removed");
					Character.Spells.splice(i--,1);
				}

		// Check matrices
		for (var i = 0; i < Character.Talents.length; i++) 
            if (Character.Talents[i].Spell != undefined && Library.GetTalent(Character.Talents[i].ID).Type == "Matrix") 
            	if (Character.Spells.find(o => o.ID == Character.Talents[i].Spell) == undefined)
            		Character.Talents[i].Spell = undefined;
	}

	this.CheckKnacks = function()
	{
		if (Character.Knacks == undefined || Character.Knacks.length == 0)
			return;

		this.Buffer.KnacksQualifiedFor = undefined;	
		this.Buffer.KnacksReport = "";

		let KnacksQualifiedFor = this.GetKnacksQualifiedFor();

		if ((KnacksQualifiedFor == undefined || KnacksQualifiedFor.length == 0) && (Character.Knacks != undefined  && Character.Knacks.length > 0))
		{
			console.log("CharacterManager.CheckKnacks() : Character no longer qualifies for any Knacks at all; all Knacks removed");
			Character.Knacks = [];
			return;
		}			

		for (var i = 0; i < Character.Knacks.length; i++) 
		{
			if (Character.Knacks[i].ID != "Empty")
				if (KnacksQualifiedFor.find(o => o.ID == Character.Knacks[i].ID) == undefined)
				{
					console.log("CharacterManager.CheckKnacks() :" + Library.GetKnack(Character.Knacks[i].ID).Name + " Removed");
					Character.Knacks.splice(i--,1);
				}
		}
	}

	this.CheckPaths = function()
	{
		let PathsQualifiedFor = this.GetPathsQualifiedFor();

		if ((PathsQualifiedFor == undefined || PathsQualifiedFor.length == 0) && (Character.Paths != undefined  && Character.Paths.length > 0))
		{
			console.log("CharacterManager.CheckPaths() : Character no longer qualifies for any Paths at all; all Paths removed");
			Character.Paths = [];
			return;
		}

		for (var i = 0; i < Character.Paths.length; i++) 
			if (Character.Paths[i].ID != "Empty")
			{	
				// Is the Path still qualified for?
				if (PathsQualifiedFor.find(o => o.ID == Library.GetPath(Character.Paths[i].ID).Knack) == undefined)
				{
					console.log("CharacterManager.CheckPaths() :" + Library.GetPath(Character.Paths[i].ID).Name + " no longer qualified for; Removed");
					Character.Paths.splice(i--,1);
				}
				else
					// Has the Discipline linked to the Path disappeared? 
					if (Character.Disciplines.find(o => o.ID == Character.Paths[i].Linked) == undefined)
					{
						console.log("CharacterManager.CheckPaths() :" + Library.GetPath(Character.Paths[i].ID).Name + " - the linked Discipline no longer exists; Removed");
						Character.Paths.splice(i--,1);
					}
			}
	}

	// ------------
	// -- Verify --
	// ------------
	// Validate
	this.Validate = function()
	{
		let validationReport = "";
		let result = "Ok";

		// Legend points
		if (this.GetRemainingLegendPoints() < 0)
		{
			result = "Red";
			validationReport += "<p style='color:red;'>The Character has spent more Legend points (" + this.GetSpentLegendPoints() + ") than they have available (" + Character.LegendPoints + ").</p>";
		}

		// Attribute points
		if (this.GetRamainingAttributePoints() < 0)
		{
			result = "Red";
			validationReport += "<p style='color:red;'>The Character has spent more Attribute points (" + (parseInt(Character.Options.Attributepoints) - this.GetRamainingAttributePoints()) + ") than they have available (" + Character.Options.Attributepoints + ").</p>";
		}

		// Disciplines - advancement 
		// Circle advancement
		// Talent Points
		// - Talent points in Talents chosen via versatilty; the Talent must also be chosen through the use of free points. 
		// Skill points

		// Nitty gritty stuff: 
		// group pattern and Blood charm two targets same thing
		// Nonliving armors with Obsidimen
		// Equipment Weight
		// Weapon size

		// Validate should check for the rule that says max talent rank knacks for a given talent

		this.Buffer.validationReport = validationReport;
		return result;
	};

	this.GetValidationReport = function()
	{
		if (this.Buffer.validationReport == undefined) 
			this.Validate();
		return this.Buffer.validationReport;
	}

	// -------------------
	// -- Legend Points --
	// -------------------

	this.GetSpentLegendPoints = function()
	{
		if(this.Buffer.SpentLegendPoints != undefined)
			return this.Buffer.SpentLegendPoints;

		let LpTotal = 0, LpAttributes = 0, LpTalents = 0, LpKnacks = 0, LpSkills = 0, LpItems = 0, LPThreadMagic = 0, LpSpells = 0, LpDevotions = 0, LpOther = 0;
		let LpThisIncrease;
		let LPBreakdown = "";

		//Attributes
		LPBreakdown += "<table><caption>Attributes:</caption>"; 
		
		if (Character.Options.AttributeIncrease == "Free")
		{
			LPBreakdown += "<tr><td>(Attribute Increases are free)</td></tr>";
			LpAttributes = 0;
		}
		else
		{
			if (!isNaN(Character.Attributes.Dex.Increases) && (parseInt(Character.Attributes.Dex.Increases) > 0))
			{

				LpThisIncrease = Library.FibonacciSum(5 , parseInt(Character.Attributes.Dex.Increases) + 4) * 100;
				LPBreakdown += "<tr><td>Dexterity</td><td>" + LpThisIncrease + "</td></tr>";
				LpAttributes += LpThisIncrease;
			}
			if (!isNaN(Character.Attributes.Str.Increases) && (parseInt(Character.Attributes.Str.Increases) > 0))
			{
				LpThisIncrease = Library.FibonacciSum(5 , parseInt(Character.Attributes.Str.Increases) + 4) * 100;
				LPBreakdown += "<tr><td>Strength</td><td>" + LpThisIncrease + "</td></tr>";
				LpAttributes += LpThisIncrease;
			}
			if (!isNaN(Character.Attributes.Tou.Increases) && (parseInt(Character.Attributes.Tou.Increases) > 0))
			{
				LpThisIncrease = Library.FibonacciSum(5 , parseInt(Character.Attributes.Tou.Increases) + 4) * 100;
				LPBreakdown += "<tr><td>Toughness</td><td>" + LpThisIncrease + "</td></tr>";
				LpAttributes += LpThisIncrease;
			}
			if (!isNaN(Character.Attributes.Per.Increases) && (parseInt(Character.Attributes.Per.Increases) > 0))
			{
				LpThisIncrease = Library.FibonacciSum(5 , parseInt(Character.Attributes.Per.Increases) + 4) * 100;
				LPBreakdown += "<tr><td>Perception</td><td>" + LpThisIncrease + "</td></tr>";
				LpAttributes += LpThisIncrease;
			}
			if (!isNaN(Character.Attributes.Wil.Increases) && (parseInt(Character.Attributes.Wil.Increases) > 0))
			{
				LpThisIncrease = Library.FibonacciSum(5 , parseInt(Character.Attributes.Wil.Increases) + 4) * 100;
				LPBreakdown += "<tr><td>Willpower</td><td>" + LpThisIncrease + "</td></tr>";
				LpAttributes += LpThisIncrease;
			}
			if (!isNaN(Character.Attributes.Cha.Increases) && (parseInt(Character.Attributes.Cha.Increases) > 0))
			{
				LpThisIncrease = Library.FibonacciSum(5 , parseInt(Character.Attributes.Cha.Increases) + 4) * 100;
				LPBreakdown += "<tr><td>Charisma</td><td>" + LpThisIncrease + "</td></tr>";
				LpAttributes += LpThisIncrease;
			}
		}
		LPBreakdown += "<tr><td>Sum</td><td>" + LpAttributes + "</td></tr></table>";

		//Talents
		if (Character.Talents != undefined)
		{
			LPBreakdown += "<table><caption>Talents:</caption>";
			for (let i = 0; i < Character.Talents.length; i++) 
			{
				if (Character.Talents[i].Type == "Racial")
				{
					if (Character.Race != "ED4UlkMan")
					{
						LpThisIncrease = (Library.FibonacciSum(1 + parseInt(Character.Talents[i].Freerank), parseInt(Character.Talents[i].Rank)) * 100);
						Character.Talents[i].Cost = LpThisIncrease;
						LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
						LpTalents += Character.Talents[i].Cost;
				
					}
					else
					{
						if (Character.Talents[i].Rank == 0)
							LpThisIncrease = 0;
						else
							switch (Character.Talents[i].Circle)
							{
								case "4":
									LpThisIncrease = (Library.FibonacciSum(1, parseInt(Character.Talents[i].Rank)) * 100);
									break;
								case "6":
								case "8":
									LpThisIncrease = (Library.FibonacciSum(2, parseInt(Character.Talents[i].Rank) + 1) * 100);
									break;
								case "10":
									LpThisIncrease = (Library.FibonacciSum(3, parseInt(Character.Talents[i].Rank) + 2) * 100);
									break;
								default:
									LpThisIncrease = (Library.FibonacciSum(3, parseInt(Character.Talents[i].Rank)) * 100)
									console.log("Something's wrong with the Ulk-Man Talent '"+Character.Talents[i].ID + "' : '" + Character.Talents[i].Circle + "'")
									break;
							}
						Character.Talents[i].Cost = LpThisIncrease;
						LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
						LpTalents += Character.Talents[i].Cost;
					}
				}
				else
					if (Character.Talents[i].Type == "Versatility" && Character.Talents[i].ID != "Empty" && Character.Talents[i].Freerank != Character.Talents[i].Rank)
					{
						switch (parseInt(Character.Talents[i].VersatilityTier))
						{
							case 1:
								LpThisIncrease = (Library.FibonacciSum(2 + parseInt(Character.Talents[i].Freerank), parseInt(Character.Talents[i].Rank) + 1) * 100);
								Character.Talents[i].Cost = LpThisIncrease;
								LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
								LpTalents += Character.Talents[i].Cost;
								break;
							case 2:
								LpThisIncrease = (Library.FibonacciSum(3 + parseInt(Character.Talents[i].Freerank), parseInt(Character.Talents[i].Rank) + 2) * 100);
								Character.Talents[i].Cost = LpThisIncrease;
								LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
								LpTalents += Character.Talents[i].Cost;
								break;
							case 3:
							case 4:
								LpThisIncrease = (Library.FibonacciSum(4 + parseInt(Character.Talents[i].Freerank), parseInt(Character.Talents[i].Rank) + 3) * 100);
								Character.Talents[i].Cost = LpThisIncrease;
								LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
								LpTalents += Character.Talents[i].Cost;
								break;
							default:
								console.log("Something wrong with Versatility Talent " + Character.Talents[i].ID);
								console.log(Character.Talents[i]);
								break;
						}
					}
					else
						// Blood Sworn
						if (Character.Talents[i].Type == "Magic, raisable" && Character.Talents[i].ID != "Empty")
						{
							if (Character.Talents[i].Rank > 1)							
								LpThisIncrease = (Library.FibonacciSum(2 , parseInt(Character.Talents[i].Rank)) * 100);
							else
								LpThisIncrease = 0;
							Character.Talents[i].Cost = LpThisIncrease;
							LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
							LpTalents += Character.Talents[i].Cost;
						}
						else
							if (Character.Talents[i].Type == "PathTalent") // The Talent that's really the Path Rank (shakes head slowly)
							{
								let libPath = Library.GetPath(Character.Talents[i].PathID);
								if (libPath == undefined)
									throw "Something's wrong with PathTalent " + Character.Talents[i].ID;
								switch (libPath.Cost)
								{
									case "Novice":
										LpThisIncrease = (Library.FibonacciSum(1, parseInt(Character.Talents[i].Rank)) * 100);
										break;
									case "Journeyman":
										LpThisIncrease = (Library.FibonacciSum(2, parseInt(Character.Talents[i].Rank) + 1) * 100);
										break;
									case "Warden":
										LpThisIncrease = (Library.FibonacciSum(3, parseInt(Character.Talents[i].Rank) + 2) * 100);
										break;
									case "Master":
										LpThisIncrease = (Library.FibonacciSum(4, parseInt(Character.Talents[i].Rank) + 3) * 100);
										break;
									default:
										LpThisIncrease = 0;
										console.log("Talent "+Library.GetTalent(Character.Talents[i].ID).Name + " Cost set incorrectly: " + Character.Talents[i].ID);
										break;
								}
								Character.Talents[i].Cost = LpThisIncrease;
								LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + " (Path)</td><td>" + LpThisIncrease + "</td></tr>";
								LpTalents += Character.Talents[i].Cost;
							}
							else
								if (Character.Talents[i].ID != "Empty" && Character.Talents[i].Type == "PathGrantedTalent") 
								{
									let libPath = Library.GetPath(Character.Talents[i].PathID);
									if (libPath == undefined)
										throw "Something's wrong with PathGrantedTalent " + Character.Talents[i].ID;

									// Find the Rank that gave the character access to this Talent
									let equivalentRank;
									for (var thisRank = 0; thisRank < libPath.Ranks.length; thisRank++) 
									{
										if (libPath.Ranks[thisRank].Talents != undefined && libPath.Ranks[thisRank].Talents.includes(Character.Talents[i].ID))
										{
											equivalentRank = thisRank;
											break;
										}
									}
									if (equivalentRank == undefined)
										throw "The Rank that granted the Talent " + Character.Talents[i].ID + " not found in Path " + libPath.Name;

									let cost = libPath.Ranks[equivalentRank].Cost;

									switch (cost)
									{
										case "Novice":
											LpThisIncrease = (Library.FibonacciSum(1, parseInt(Character.Talents[i].Rank)) * 100);
											break;
										case "Journeyman":
											LpThisIncrease = (Library.FibonacciSum(2, parseInt(Character.Talents[i].Rank) + 1) * 100);
											break;
										case "Warden":
											LpThisIncrease = (Library.FibonacciSum(3, parseInt(Character.Talents[i].Rank) + 2) * 100);
											break;
										case "Master":
											LpThisIncrease = (Library.FibonacciSum(4, parseInt(Character.Talents[i].Rank) + 3) * 100);
											break;
										default:
											LpThisIncrease = 0;
											console.log("Talent "+Library.GetTalent(Character.Talents[i].ID).Name + " Cost set incorrectly: " + Character.Talents[i].ID);
											break;
									}
									Character.Talents[i].Cost = LpThisIncrease;
									LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + " (Path Granted)</td><td>" + LpThisIncrease + "</td></tr>";
									LpTalents += Character.Talents[i].Cost;
								}

							else
								if (Character.Talents[i].ID != "Empty" && Character.Talents[i].Type != "Free" && Character.Talents[i].Type != "Item" && Character.Talents[i].Freerank != Character.Talents[i].Rank)
								{
									let equivalentTier = Math.ceil(parseInt(Character.Talents[i].Circle)/4);
									if (!isNaN(Character.Talents[i].FirstLearnt))
										equivalentTier += Character.Talents[i].FirstLearnt;
									if(equivalentTier > 4)
										equivalentTier = 4;
									if (isNaN(Character.Talents[i].FirstLearnt) || Character.Talents[i].FirstLearnt == 0)
									{
										switch (equivalentTier)
										{
											case 1:
												LpThisIncrease = (Library.FibonacciSum(1 + parseInt(Character.Talents[i].Freerank), parseInt(Character.Talents[i].Rank)) * 100);
												break;
											case 2:
												LpThisIncrease = (Library.FibonacciSum(2 + parseInt(Character.Talents[i].Freerank), parseInt(Character.Talents[i].Rank) + 1) * 100);
												break;
											case 3:
												LpThisIncrease = (Library.FibonacciSum(3 + parseInt(Character.Talents[i].Freerank), parseInt(Character.Talents[i].Rank) + 2) * 100);
												break;
											case 4:
												LpThisIncrease = (Library.FibonacciSum(4 + parseInt(Character.Talents[i].Freerank), parseInt(Character.Talents[i].Rank) + 3) * 100);
												break;
											default:
												LpThisIncrease = 0;
												console.log("Talent "+Library.GetTalent(Character.Talents[i].ID).Name + " Circle set incorrectly: " +Character.Talents[i].Circle);
												break;
										}
										Character.Talents[i].Cost = LpThisIncrease;
										LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
										LpTalents += Character.Talents[i].Cost;
									}
									else
									{
										let lowestCircle = parseInt(Character.Disciplines[Character.Talents[i].FirstLearnt].StartedAt);
										if (lowestCircle > 5) 
												lowestCircle = 5; // Gets no better than that
											let disciplineNumber = Character.Talents[i].FirstLearnt;
											if (disciplineNumber > 3)
												disciplineNumber = 3; // Gets no Worse than that =P
											let LPInitialCost = (Library.Fibonacci[6 - lowestCircle + disciplineNumber])*100;

											LpThisIncrease = 0;
											if (Character.Talents[i].Rank > 1)
												switch (equivalentTier)
											{
												case 2:
													LpThisIncrease = (Library.FibonacciSum(3, parseInt(Character.Talents[i].Rank) + 1) * 100);
													break;
												case 3:
													LpThisIncrease = (Library.FibonacciSum(4, parseInt(Character.Talents[i].Rank) + 2) * 100);
													break;
												case 4:
													LpThisIncrease = (Library.FibonacciSum(5, parseInt(Character.Talents[i].Rank) + 3) * 100);
													break;
												default:
													console.log("Talent "+Library.GetTalent(Character.Talents[i].ID).Name + " Circle set incorrectly: " +Character.Talents[i].Circle);
													break;
											}
											Character.Talents[i].Cost = LPInitialCost + LpThisIncrease;
											LPBreakdown += "<tr><td>" + Library.GetTalent(Character.Talents[i].ID).Name + "</td><td> (" + LPInitialCost + "+" + LpThisIncrease + ") " + Character.Talents[i].Cost + "</td></tr>";
											LpTalents += Character.Talents[i].Cost;
										}
									}
									else
									{
										if(Character.Talents[i].Type != "Item")
											LPBreakdown += "<tr><td>" + (Character.Talents[i].ID == "Empty" ? Character.Talents[i].ID : Library.GetTalent(Character.Talents[i].ID).Name) + "</td><td>0</td></tr>";
										Character.Talents[i].Cost = 0;
									}
								}
			LPBreakdown += "<tr><td>Sum</td><td>" + LpTalents + "</td></tr></table>";
		}

		// Knacks
		if (Character.Knacks != undefined && Character.Knacks.length > 0)
		{
			LPBreakdown += "<table><caption>Knacks:</caption>";
			for (let i = 0; i < Character.Knacks.length; i++)
				if(Character.Knacks[i].ID != "Empty") 
				{
					if (Character.Knacks[i].Cost != undefined)
					{
						LpThisIncrease = parseInt(Character.Knacks[i].Cost);
						LpKnacks += LpThisIncrease;
						LPBreakdown += "<tr><td>" + Library.GetKnack(Character.Knacks[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
					}
					else
					{
						LpThisIncrease = Library.Fibonacci[(Library.GetKnack(Character.Knacks[i].ID).RequiredRank)]*100;
						LpKnacks += LpThisIncrease;
						LPBreakdown += "<tr><td>" + Library.GetKnack(Character.Knacks[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
					}
				}
			LPBreakdown += "<tr><td>Sum</td><td>" + LpKnacks + "</td></tr></table>";
		}

		// Skills
		if(Character.Skills.length > 0)
		{
			LPBreakdown += "<table><caption>Skills:</caption>";
			let skillName;
			for (let i = 0; i < Character.Skills.length; i++) 
			{
				if(Character.Skills[i].ID != "Empty")
				{					
					skillName = Library.GetSkill(Character.Skills[i].ID).Name;
					if (Character.Skills[i].Name != undefined && Character.Skills[i].Name + "" != "" && Character.Skills[i].Name != "Not Selected")
						skillName += " (" + Character.Skills[i].Name + ")";
					if (Character.Skills[i].Type != "Free" && Character.Skills[i].Freerank != Character.Skills[i].Rank)
					{
						switch (Library.GetSkill(Character.Skills[i].ID).Cost)
						{
							case "Novice":
								LpThisIncrease = (Library.FibonacciSum(2 + parseInt(Character.Skills[i].Freerank), parseInt(Character.Skills[i].Rank) + 1) * 100);
								break;
							case "Journeyman":
								LpThisIncrease = (Library.FibonacciSum(3 + parseInt(Character.Skills[i].Freerank), parseInt(Character.Skills[i].Rank) + 2) * 100);
								break;
							case "Warden":
								LpThisIncrease = (Library.FibonacciSum(4 + parseInt(Character.Skills[i].Freerank), parseInt(Character.Skills[i].Rank) + 3) * 100);
								break;
							default:
                                throw "Unknown Skill cost: "+ Library.GetSkill(Character.Skills[i].ID).Cost;
								LpThisIncrease = 0;
								break;
						}
						Character.Skills[i].Cost = LpThisIncrease;
						LPBreakdown += "<tr><td>" + skillName + "</td><td>" + LpThisIncrease + "</td></tr>";
						LpSkills += LpThisIncrease;
					}
					else
					{
						LPBreakdown += "<tr><td>" + skillName + "</td><td>0</td></tr>";
						Character.Skills[i].Cost = 0;
					}
				}
			}
			LPBreakdown += "<tr><td>Sum</td><td>" + LpSkills + "</td></tr></table>";
		}

		// Items
		//  Figure out if there are any Threat Items with 1+ Rank ..
		let itemFound = false;
		for (let i = 0; i < Character.Equipment.length; i++) 
			if (Character.Equipment[i].ID != "Empty")
				if (Library.GetEquipment(Character.Equipment[i].ID).Type == "Thread Item" && Character.Equipment[i].Rank > 0)
				{
					itemFound = true; 
					break;
				}

		if (itemFound)
		{
			LPBreakdown += "<table><caption>Thread Items:</caption>";

			// Then loop through them for the LP
			for (let i = 0; i < Character.Equipment.length; i++) 
			{
				if (Character.Equipment[i].ID != "Empty")
				{
					let thisItem = Library.GetEquipment(Character.Equipment[i].ID);
					if(thisItem.Type == "Thread Item" && Character.Equipment[i].Rank != undefined && Character.Equipment[i].Rank+"" != "0")
					{
						switch(thisItem.BaseLPCost+"")
						{
							case "100":
								LpThisIncrease = (Library.FibonacciSum(1,parseInt(Character.Equipment[i].Rank)) * 100);
								break;
							case "200":
								LpThisIncrease = (Library.FibonacciSum(2,parseInt(Character.Equipment[i].Rank) + 1) * 100);
								break;
							case "300":
								LpThisIncrease = (Library.FibonacciSum(3,parseInt(Character.Equipment[i].Rank) + 2) * 100);
								break;
							case "500":
								LpThisIncrease = (Library.FibonacciSum(4,parseInt(Character.Equipment[i].Rank) + 3) * 100);
								break;
							case "800":
								LpThisIncrease = (Library.FibonacciSum(5,parseInt(Character.Equipment[i].Rank) + 4) * 100);
								break;
							case "1300":
								LpThisIncrease = (Library.FibonacciSum(6,parseInt(Character.Equipment[i].Rank) + 5) * 100);
								break;
							case "2100":
								LpThisIncrease = (Library.FibonacciSum(7,parseInt(Character.Equipment[i].Rank) + 6) * 100);
								break;
							case "3400":
								LpThisIncrease = (Library.FibonacciSum(8,parseInt(Character.Equipment[i].Rank) + 7) * 100);
								break;
							case "0":
								LpThisIncrease = 0;// Character.Equipment[i].Cost = 0;
								break;
							default: 
								LpThisIncrease = 0;
								//LPBreakdown += thisItem.Name + ": 0. This item's base cost doesn't fit in the Fibonacci scheme '"+ thisItem.BaseLPCost +"'\n";
						}
						Character.Equipment[i].Cost = LpThisIncrease;
						LPBreakdown += "<tr><td>" + thisItem.Name + "</td><td>" + LpThisIncrease + "</td></tr>";
						LpItems += LpThisIncrease;

					}
				}
			}
			LPBreakdown += "<tr><td>Sum</td><td>" + LpItems + "</td></tr></table>";
		}

		// Thread Magic
		if (Character.Magic != undefined)
		{
			// Figure out if there's any items to show: 
			let showMagic = false;
			for (let i = 0; i < Character.Magic.length; i++) 
				if (Character.Magic[i].ID != "Empty" && Character.Magic[i].Threads != undefined) 
					showMagic = true;

			if (showMagic)
			{
				LPBreakdown += "<table><caption>Thread Magic:</caption>";

				for (let i = 0; i < Character.Magic.length; i++) 
					if (Character.Magic[i].ID != "Empty" && Character.Magic[i].Threads != undefined)
						for (let j = 0; j < Character.Magic[i].Threads.length; j++) 
						{
							LpThisIncrease = (Library.FibonacciSum(1,parseInt(Character.Magic[i].Threads[j].Rank)) * 100);
							let threadName = " - (Thread not woven)";
							if (Character.Magic[i].Threads[j].Target != "Empty")
							{
								if (["PhDef", "MyDef", "SoDef", "WndTh", "MyArm", "Dur"].includes(Character.Magic[i].Threads[j].Target))
									threadName = " - " + Library.GetFullName(Character.Magic[i].Threads[j].Target);
								else
								{
									let thisTalent = Character.Talents.find(o => o.UID == Character.Magic[i].Threads[j].Target);
									if (thisTalent != undefined)
										threadName = " - (Talent) " + Library.GetTalent(thisTalent.ID).Name;	
								}
							}

							LPBreakdown += "<tr><td>" + Library.GetMagic(Character.Magic[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
							LPThreadMagic += LpThisIncrease;
						}
				LPBreakdown += "<tr><td>Sum</td><td>" + LPThreadMagic + "</td></tr></table>";
			}
		}


		// Spells
		if (Character.Spells != undefined && Character.Spells.length >0 && Character.Disciplines != undefined && Character.Disciplines.length != 0)
		{
			LPBreakdown += "<table><caption>Spells:</caption>";
			if (Character.Options.SpellsCostLP == "Free")
				LPBreakdown += "<tr><td>(Spells are free)</td></tr>";
			else
				if (["1Prog", "2ed", "1Fib", "2Fib"].includes(Character.Options.SpellsCostLP))
				{
			        let startingSpellPoints, startingSpellPointsSpent = 0;

			        let SortedSPellList = _.cloneDeep(Character.Spells).sort(function(a,b) {if (a.ID == "Empty") return +1; if (b.ID == "Empty") return +1; if (Library.GetSpell(a.ID).Discipline != Library.GetSpell(b.ID).Discipline) return (Library.GetSpell(a.ID).Discipline > Library.GetSpell(b.ID).Discipline ? 1 : -1); if (Library.GetSpell(a.ID).Circle != Library.GetSpell(b.ID).Circle) return (Library.GetSpell(a.ID).Circle > Library.GetSpell(b.ID).Circle ? 1 : -1); return (Library.GetSpell(a.ID).Name > Library.GetSpell(b.ID).Name ? 1 : -1);});

			        if (Character.Options.Spellpoints == "PERstep")
			        	startingSpellPoints = parseInt(this.GetBasePerStep());
			        else 
			        	startingSpellPoints = parseInt(Character.Options.Spellpoints);

			        for (let thisDisciplineIndex = 0; thisDisciplineIndex < Character.Disciplines.length; thisDisciplineIndex++)
			        	if (Character.Disciplines[thisDisciplineIndex].ID != "Empty" && Library.GetDiscipline(Character.Disciplines[thisDisciplineIndex].ID).Spellcaster == "true")
			        	{
							let SpellCountByCircle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
					        for (let i=0; i < Character.Spells.length; i++)
					        	if (Character.Spells[i].ID != "Empty")
					        	{
									let libSpell = Library.GetSpell(Character.Spells[i].ID);
									if (libSpell.Discipline == Character.Disciplines[thisDisciplineIndex].ID)
					        			SpellCountByCircle[parseInt(libSpell.Circle)]++;
					        	}

							let freeSpellsPerCircle;
							if (Character.Options.SpellsCostLP == "1Prog" || Character.Options.SpellsCostLP == "1Fib")
								freeSpellsPerCircle = 1;
							else
								freeSpellsPerCircle = 2;

							let FreeSpellSlots = [0,0,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle,freeSpellsPerCircle];

					        if (thisDisciplineIndex == 0) // Character creation spells
					        	FreeSpellSlots[1] = startingSpellPoints;
					        else
					        	FreeSpellSlots[1] = freeSpellsPerCircle;

					        for (let i=0; i < Character.Spells.length; i++)
					        	if (Character.Spells[i].ID != "Empty")
					        	{
									let libSpell = Library.GetSpell(Character.Spells[i].ID);
									if (libSpell.Discipline == Character.Disciplines[thisDisciplineIndex].ID)
									{
										if (thisDisciplineIndex == 0 && libSpell.Circle == "1" && FreeSpellSlots[1] > 1 && FreeSpellSlots[1] % 2 == 0 && SpellCountByCircle[1] == 1 && SpellCountByCircle[2] > 0 && (FreeSpellSlots[1] * 2) <= SpellCountByCircle[2])
										{
												if (["1Fib", "2Fib"].includes(Character.Options.SpellsCostLP))
													LpThisIncrease = Library.Fibonacci[libSpell.Circle] * 100;
												else 
													LpThisIncrease = parseInt(libSpell.Circle) * 100;
												LPBreakdown += "<tr><td>" + libSpell.Name + "</td><td>" + LpThisIncrease + "</td></tr>";
												LpSpells += LpThisIncrease;
												SpellCountByCircle[parseInt(libSpell.Circle)]--;
										}
										else
											if (thisDisciplineIndex == 0 && libSpell.Circle == "2" && FreeSpellSlots[1] > 1)
											{
												LPBreakdown += "<tr><td>" + Library.GetSpell(Character.Spells[i].ID).Name + "</td><td>0</td></tr>";
												FreeSpellSlots[1] -= 2;
												SpellCountByCircle[parseInt(libSpell.Circle)]--;
											}
											else
												if (FreeSpellSlots[parseInt(libSpell.Circle)] > 0)
												{
													LPBreakdown += "<tr><td>" + Library.GetSpell(Character.Spells[i].ID).Name + "</td><td>0</td></tr>";
													FreeSpellSlots[parseInt(libSpell.Circle)]--;
													SpellCountByCircle[parseInt(libSpell.Circle)]--;
												}
												else 
												{
													if (["1Fib", "2Fib"].includes(Character.Options.SpellsCostLP))
														LpThisIncrease = Library.Fibonacci[libSpell.Circle] * 100;
													else 
														LpThisIncrease = parseInt(libSpell.Circle) * 100;
													LPBreakdown += "<tr><td>" + Library.GetSpell(Character.Spells[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
													LpSpells += LpThisIncrease;
													SpellCountByCircle[parseInt(libSpell.Circle)]--;
												}
									}
					        	}
			        	}
			        // Roll through spells to check for spells gained through other means
			        for (let i=0; i < SortedSPellList.length; i++)
			        	if (SortedSPellList[i].ID != "Empty")
			        	{
							let libSpell = Library.GetSpell(SortedSPellList[i].ID);
							if (Character.Disciplines.find(o => o.ID == libSpell.Discipline) == undefined) // Spell from a Discipline the Character doesn't follow
							{
								if (["1Fib", "2Fib"].includes(Character.Options.SpellsCostLP))
									LpThisIncrease = Library.Fibonacci[libSpell.Circle] * 100;
								else 
									LpThisIncrease = parseInt(libSpell.Circle) * 100;
								LPBreakdown += "<tr><td>" + Library.GetSpell(Character.Spells[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
								LpSpells += LpThisIncrease;
							}
						}
				}
				else // Character.Options.SpellsCostLP == "4ed", the default.
				{
			        let startingSpellPoints;

					if (Character.Disciplines[0].ID == "Empty" || Library.GetDiscipline(Character.Disciplines[0].ID).Spellcaster != "true")
						startingSpellPoints = 0;
					else
				        if (Character.Options.Spellpoints == "PERstep")
				        	startingSpellPoints = parseInt(this.GetBasePerStep());
				        else 
				        	startingSpellPoints = parseInt(Character.Options.Spellpoints);

					for (let i = 0; i < Character.Spells.length; i++)
						if (Character.Spells[i].ID != "Empty")
						{
							LpThisIncrease = Library.Fibonacci[(Library.GetSpell(Character.Spells[i].ID).Circle)] * 100;
							LPBreakdown += "<tr><td>" + Library.GetSpell(Character.Spells[i].ID).Name + "</td><td>" + LpThisIncrease + "</td></tr>";
							LpSpells += LpThisIncrease;
						}
						LpSpells -= startingSpellPoints * 100;

						LPBreakdown += "<tr><td>Creation time free spells: </td><td>" + (startingSpellPoints * -100) + "</td></tr>";

						if (LpSpells < 0)
							LpSpells = 0;	
				}
				LPBreakdown += "<tr><td>Sum</td><td>" + LpSpells + "</td></tr></table>";
    	}

    	// Questor Stuff: 
    	if (Character.Questor != undefined && Character.Questor.Rank != undefined && Character.Questor.Rank >0)
    	{
			LPBreakdown += "<table><caption>Questor:</caption>";

    		// Questor Devotion
			LpThisIncrease = (Library.FibonacciSum(2, parseInt(Character.Questor.Rank) + 1) * 100);
			LPBreakdown += "<tr><td>Questor Devotion</td><td>" + LpThisIncrease + "</td></tr>";
			LpDevotions += LpThisIncrease;

			for (let thisDoctrineRank = 0; thisDoctrineRank < Character.Questor.Rank; thisDoctrineRank++)
			{
				switch (Character.Questor.Ranks[thisDoctrineRank].Cost)
				{
					case "Follower":
						LpThisIncrease = (Library.FibonacciSum(1, parseInt(Character.Questor.Ranks[thisDoctrineRank].devotionRank)) * 100);
						break;
					case "Adherent":
						LpThisIncrease = (Library.FibonacciSum(2, parseInt(Character.Questor.Ranks[thisDoctrineRank].devotionRank) + 1) * 100);
						break;
					case "Exemplar":
						LpThisIncrease = (Library.FibonacciSum(3, parseInt(Character.Questor.Ranks[thisDoctrineRank].devotionRank) + 2) * 100);
						break;
					case 0:
						LpThisIncrease = 0;
						break;
					default:
						LpThisIncrease = 0;
						if (Character.Questor.Ranks[thisDoctrineRank].devotionID != "Empty")
							throw "UI.GetSpentLegendPoints() Devotion " + Character.Questor.Ranks[thisDoctrineRank].devotionID + ": is acting up";
				}
				LpDevotions += LpThisIncrease;
				LPBreakdown += "<tr><td>" + (Character.Questor.Ranks[thisDoctrineRank].devotionID == "Empty" ? "(Empty)" : Library.GetDevotion(Character.Questor.Ranks[thisDoctrineRank].devotionID).Name) + "</td><td>" + LpThisIncrease + "</td></tr>";
			}
			LPBreakdown += "<tr><td>Sum</td><td>" + LpDevotions + "</td></tr></table>";
    	}

		// Other
		LpTotal = LpAttributes + LpTalents + LpKnacks + LpSkills + LpItems + LPThreadMagic + LpSpells + LpDevotions + LpOther;

		this.Buffer.SpentLegendPoints = LpTotal;
		this.Buffer.LPBreakdown = LPBreakdown;

		return LpTotal;
	};

	this.GetLPBreakdown = function()
	{
		if(this.Buffer.LPBreakdown == undefined)
			this.GetSpentLegendPoints();

		return this.Buffer.LPBreakdown;
	};

	this.GetRemainingLegendPoints = function()
	{
		return Character.LegendPoints - this.GetSpentLegendPoints();
	};

	this.SetRemainingLegendPoints = function (LPRemaining)
	{
		Character.LegendPoints = this.GetSpentLegendPoints() + parseInt(LPRemaining);
	};
	
	this.SetTotalLegendPoints = function (TotalLegend)
	{
		Character.LegendPoints = parseInt(TotalLegend);
	};
};













