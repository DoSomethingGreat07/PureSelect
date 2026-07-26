import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    title: "Peanut Chutney",
    heroIngredient: "Raw Peanuts",
    summary: "A smooth, nutty chutney that pairs perfectly with idli, dosa, and breakfast tiffins.",
    cookTime: "20 mins",
    serves: "4 people",
    image: "/images/recipes/peanut-chutney.png",
    imageAlt: "Peanut chutney in a bowl with South Indian tempering",
    ingredients: [
      "1 cup Pure Select raw peanuts",
      "4 dried red chilies",
      "2 garlic cloves",
      "Small lemon-sized tamarind",
      "Salt to taste",
      "Water as needed",
      "Tempering: oil, mustard seeds, curry leaves"
    ],
    steps: [
      "Dry roast the peanuts until crisp, cool slightly, and remove the skin if preferred.",
      "Blend peanuts with chilies, garlic, tamarind, salt, and a little water into a smooth chutney.",
      "Prepare a quick tempering and pour it over the chutney before serving."
    ]
  },
  {
    title: "Putnala Coconut Chutney",
    heroIngredient: "Roasted Chana Dal",
    summary: "A quick South Indian chutney with creamy texture and balanced flavor.",
    cookTime: "10 mins",
    serves: "4 people",
    image: "/images/recipes/putnala-coconut-chutney.png",
    imageAlt: "Putnala coconut chutney in a bowl with tempering",
    ingredients: [
      "1/2 cup Pure Select roasted chana dal",
      "1/2 cup fresh coconut",
      "2 green chilies",
      "Small piece ginger",
      "Salt to taste",
      "Water as needed",
      "Tempering: oil, mustard seeds, urad dal, curry leaves"
    ],
    steps: [
      "Blend roasted chana dal, coconut, chilies, ginger, salt, and water until smooth.",
      "Adjust consistency to make it spoonable and creamy.",
      "Finish with hot tempering and serve with dosa, idli, or upma."
    ]
  },
  {
    title: "Rajma Masala",
    heroIngredient: "Rajma Chitra",
    summary: "A hearty home-style rajma curry for lunch boxes, rice bowls, and weekend meals.",
    cookTime: "45 mins",
    serves: "4 to 5 people",
    image: "/images/recipes/rajma-masala.png",
    imageAlt: "Rajma masala curry served in a bowl",
    ingredients: [
      "1 cup Pure Select rajma chitra, soaked overnight",
      "2 onions, finely chopped",
      "2 tomatoes, pureed",
      "1 tbsp ginger-garlic paste",
      "Turmeric, chili powder, coriander powder, garam masala",
      "Salt to taste",
      "2 tbsp oil"
    ],
    steps: [
      "Pressure cook the soaked rajma until soft and fully cooked.",
      "Saute onions in oil, add ginger-garlic paste, then cook in the tomato puree and spices.",
      "Add cooked rajma with some cooking liquid and simmer until the gravy thickens."
    ]
  },
  {
    title: "Peanut Sundal",
    heroIngredient: "Raw Peanuts",
    summary: "A simple savory snack made with peanuts, coconut, and mild tempering.",
    cookTime: "25 mins",
    serves: "3 to 4 people",
    image: "/images/recipes/peanut-sundal.png",
    imageAlt: "Peanut sundal served in a bowl with coconut and curry leaves",
    ingredients: [
      "1 cup Pure Select raw peanuts, soaked for 2 to 3 hours",
      "2 tsp oil",
      "1 tsp mustard seeds",
      "1 green chili, chopped",
      "Curry leaves",
      "2 tbsp grated coconut",
      "Salt to taste"
    ],
    steps: [
      "Boil or pressure cook the soaked peanuts until tender but not mushy.",
      "Heat oil and splutter mustard seeds, chili, and curry leaves.",
      "Add cooked peanuts, salt, and coconut, then toss well and serve warm."
    ]
  },
  {
    title: "Rajma Salad Bowl",
    heroIngredient: "Rajma Chitra",
    summary: "A fresh protein-packed bowl for light lunches and quick wholesome dinners.",
    cookTime: "20 mins",
    serves: "2 to 3 people",
    image: "/images/recipes/rajma-salad-bowl.png",
    imageAlt: "Rajma salad bowl with cucumber, tomato, and coriander",
    ingredients: [
      "1 cup cooked Pure Select rajma chitra",
      "1 cucumber, diced",
      "1 onion, finely chopped",
      "1 tomato, chopped",
      "Fresh coriander",
      "Lemon juice",
      "Salt, pepper, and chaat masala"
    ],
    steps: [
      "Combine the cooked rajma with cucumber, onion, tomato, and coriander in a bowl.",
      "Season with lemon juice, salt, pepper, and chaat masala.",
      "Toss well and serve immediately as a salad or side."
    ]
  }
];
