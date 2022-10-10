# Recipe data structure

-   This is a documentation for CSV data structure
-   Example of this is inside a file `data.csv`

Here is a brief description about each column:

## Id

- Number of the recipe, starting from 0

## Name 

- Name of the recipe

## Difficulty

- The difficulty of the recipe

## Ingredients

- List of ingredients in the recipe, **needs** to have this structure:

```txt
amount+unit:ingredient_name (ex. 2pcs:Butter)
```

- To seperate the ingredients use a dot (.). Do not use a space after the ingredient.
- If the ingredient is last, dont put the dot (.) there

## Steps

- Steps to make the recipe, write normal sentences, but do NOT make a space after a dot.