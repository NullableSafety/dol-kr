/* For any item that has a colour_combat tag, set it to 0 if that item ever gets its own combat sprites. */
function initHands() {
	setup.clothes.hands = [
		{
			index: 0,
			name: "naked",
			name_cap: "Naked",
			variable: "naked",
			integrity: 0,
			integrity_max: 0,
			fabric_strength: 0,
			reveal: 1,
			word: "n",
			plural: 0,
			colour: 0,
			colour_options: [],
			type: ["naked"],
			gender: "n",
			warmth: 0,
			cost: 0,
			description: "naked",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			mainImage: 0,
		},

		{
			index: 1,
			name: "fingerless gloves",
			name_cap: "Fingerless gloves",
			variable: "fingerlessgloves",
			integrity: 50,
			integrity_max: 50,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "n",
			warmth: 5,
			cost: 1000,
			description: "Fingerless gloves to keep your hands warm.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "fingerless_gloves.png",
			accIcon: 0,
			mainImage: 0,
			leftImage: 1,
			rightImage: 1,
		},

		{
			index: 2,
			name: "mittens",
			name_cap: "Mittens",
			variable: "mittens",
			integrity: 200,
			integrity_max: 200,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "n",
			warmth: 50,
			cost: 400,
			description: "Isn't shaped for individual fingers, but that shouldn't be a problem.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "mittens.png",
			accIcon: 0,
			mainImage: 0,
			leftImage: 1,
			rightImage: 1,
		},

		{
			index: 3,
			name: "arm warmers",
			name_cap: "Arm warmers",
			variable: "armwarmers",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 100,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "n",
			warmth: 40,
			cost: 1000,
			description: "Keep your arms warm.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "arm_warmers.png",
			accIcon: "arm_warmers_acc.png",
			mainImage: 0,
			leftImage: 1,
			rightImage: 1,
		},

		{
			index: 4,
			name: "lace arm warmers",
			name_cap: "Lace arm warmers",
			variable: "lacewarmers",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 15,
			reveal: 500,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "pale tangerine", "teal", "pale white", "pale yellow", "custom"],
			colour_sidebar: 1,
			type: ["formal"],
			gender: "f",
			warmth: 5,
			cost: 2500,
			description: "Fashionable.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "lace_arm_warmers.png",
			accIcon: 0,
			mainImage: 0,
			leftImage: 1,
			rightImage: 1,
		},

		{
			index: 5,
			name: "long leather gloves",
			name_cap: "Long leather gloves",
			variable: "longleathergloves",
			integrity: 200,
			integrity_max: 200,
			fabric_strength: 20,
			reveal: 500,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			type: ["normal", "sticky_fingers", "stealthy"],
			gender: "n",
			warmth: 10,
			cost: 8000,
			description: "Fashionable and ready to slip into pockets.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "long_leather_gloves.png",
			accIcon: 0,
			mainImage: 0,
			leftImage: 1,
			rightImage: 1,
		},

		{
			index: 6,
			name: "pom poms",
			name_cap: "Pom poms",
			variable: "pompoms",
			integrity: 200,
			integrity_max: 200,
			fabric_strength: 20,
			reveal: 300,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "pale tangerine", "teal", "pale white", "pale yellow", "custom"],
			colour_sidebar: 1,
			type: ["costume", "athletic"],
			gender: "f",
			femininity: 200,
			warmth: 15,
			cost: 1500,
			description: "For cheering your team to victory.",
			shop: ["clothing", "school", "adult"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "pom_poms.png",
			accIcon: 0,
			mainImage: 0,
			leftImage: 1,
			rightImage: 1,
		},

		{
			index: 7,
			name: "gold bracelets",
			name_cap: "Gold bracelets",
			variable: "gold",
			integrity: 200,
			integrity_max: 200,
			fabric_strength: 20,
			reveal: 300,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: [],
			type: ["costume", "serving"],
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 25000,
			description: "Eye-catching and exotic.",
			shop: ["adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "gold_bracelets.png",
			accIcon: 0,
			mainImage: 0,
			leftImage: 1,
			rightImage: 1,
		},

		{
			index: 8,
			name: "cow sleeves",
			name_cap: "Cow sleeves",
			variable: "cow",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 100,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: [],
			type: ["costume"],
			gender: "n",
			warmth: 20,
			cost: 1000,
			description: "Cute cow print.",
			shop: ["forest"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "cow_sleeves.png",
			accIcon: "",
			mainImage: 0,
			leftImage: 1,
			rightImage: 1,
		},

		{
			index: 9,
			name: "work gloves",
			name_cap: "Work gloves",
			variable: "workgloves",
			integrity: 200,
			integrity_max: 200,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			type: ["normal"],
			gender: "n",
			warmth: 50,
			cost: 1500,
			description: "For getting your hands dirty.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "work_gloves.png",
			accIcon: 0,
			mainImage: 0,
			leftImage: 1,
			rightImage: 1,
		},
	];

	/*
		Clothes that modders add go into this array, this should be empty in the base game at all times.
		These items should have a `modder` variable with a the modders name in a short string
	*/
	setup.moddedClothes.hands = [];

	setup.moddedClothes.hands.forEach((x, i) => (x.index = setup.clothes.hands.length + i));
	setup.clothes.hands.push(...setup.moddedClothes.hands);
}
window.initHands = initHands;