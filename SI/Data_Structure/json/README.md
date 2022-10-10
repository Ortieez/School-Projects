# Recipe data structure

-   This is a documentation for JSON data structure
-   Example of this is inside a file `data.json`

Here is a brief description about each element:

## Recipes

```json
{
    "recipes": { ... }
}
```

-   Required element, used once, holds information about the recipes, objects

## Recipe

```json
{
    "recipes": {
        "recipe": { ... }
    }
}
```

-   Inside the **recipes** element, holds data on the recipe, object

## Name

```json
{
    "recipe": {
        "name": "Egg Omelette"
    }
}
```

-   Inside the **recipe** element, holds the name of the recipe, string

## Difficulty

```json
{
    "recipe": {
        "difficulty": "easy"
    }
}
```

-   Inside the **recipe** element, holds the difficulty of the recipe, string

## Duration

```json
{
    "recipe": {
        "duration": {
            "unit": "min",
            "time": "5"
        }
    }
}
```

-   Inside the **recipe** element, holds 2 other elements, **unit and time (string, string)**, object

## Ingredients

```json
{
    "recipe": {
        "ingredients": [
            {
                "unit": "pcs",
                "amount": "2",
                "value": "Eggs"
            },
            {
                "unit": "pcs",
                "amount": "1/4",
                "value": "Butter"
            }
        ]
    }
}
```

-   Inside the **recipe** element, holds objects with 3 elements, **unit, amount and value (string, string string)**, array

## Steps

```json
{
    "recipe": {
        "steps": [
            "Crack the eggs into a bowl",
            "Scramble the eggs",
            "Turn on the heat and put the butter into the pan",
            "Let the butter melt",
            "Put scrambled eggs onto the pan",
            "Let the eggs turn into omelette",
            "Season by your needs"
        ]
    }
}
```

-   Inside the **recipe** element, holds strings that go in order, array,
