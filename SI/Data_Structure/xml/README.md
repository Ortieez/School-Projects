# Recipe data structure

-   This is a documentation for XML data structure
-   Example of this is inside a file `data.xml`

Here is a brief description about each tag:
<details>
<summary><b>RECIPES</b></summary>
<p>
    Top level tag, used once
</p>
</details>

<details>
<summary><b>RECIPE</b></summary>
<p>
    Element includes all information about the recipe
</p>
</details>

<details>
<summary><b>NAME</b></summary>
<p>
    The recipe's name, should be unique, is required, cannot be repeated
</p>
</details>

<details>
<summary><b>DIFFICULTY</b></summary>
<p>
    Insides of this tag depend on your own rating of difficulty (easy, difficult, 5/5 ...), required
</p>

</details>

<details>
<summary><b>DURATION</b></summary>
<p> <u>Attributes</u>: <br> <b>UNIT</b> - defines unit of measure</p>

<p>
    Defines, how long it takes to prepare the meal, has required attribute UNIT that defines the unit of measure, required
</p>

</details>

<details>
<summary><b>INGREDIENTS</b></summary>
<p>
    Tag that holds INGREDIENT tags, required
</p>

</details>

<details>
<summary><b>INGREDIENT</b></summary>
<p> <u>Attributes</u>: <br> 
<b>AMOUNT</b> - defines the amount of ingredient (number) <br>
<b>UNIT</b> - defines unit of measure (tsp, pcs, cups, bay, ml, kg) </p>

<p>
    Ingredient tag with 2 attributes AMOUNT and UNIT, and it's own contents, be aware that UNIT in this tag is something else than UNIT in duration, required
</p>

</details>

<details>
<summary><b>STEPS</b></summary>
<p>
    Tag that holds STEP tags, required
</p>

</details>

<details>
<summary><b>STEP</b></summary>
<p> <u>Attributes</u>: <br> 
<b>ORDER</b> - defines in which order are steps shown</p>

<p>
    Step tag with only 1 attribute ORDER, required
</p>

</details>
