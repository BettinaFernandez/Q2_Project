
    function redirect_recipe(name_of_recipe){ //The name of the recipe detects which files it will navigate between

        if (name_of_recipe=="beef_brocolli_recipe"){
    const quantity=prompt("How many servings? Pick from 1-5."); // Prompt for how many servings
            if(quantity === "1"){ //detecs quantity and transfers the user to that webpage
                location.href="Beef_Brocolli/BF_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="Beef_Brocolli/BF_TwoServing.html";
            }
            else if(quantity === "3"){
                location.href="Beef_Brocolli/BF_ThreeServing.html";
            }
            else if(quantity === "4"){
                location.href="Beef_Brocolli/BF_FourServings.html";
            }
            else if(quantity === "5"){
                location.href="Beef_Brocolli/BF_FiveServings.html";
            }
        }

        else if (name_of_recipe=="chicken_katsu_recipe"){
            const quantity=prompt("How many servings? Pick from 1-2.");
            if(quantity === "1"){
                location.href="CK_recipes.html";
            }
            else if(quantity === "2"){
                location.href="CK2_recipes.html";
            }

        }

        else if (name_of_recipe=="crepes_recipe"){
            const quantity=prompt("How many servings? Pick from 1-2.");
            if(quantity === "1"){
                location.href="Crepes_Recipes_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="Crepes_Recipes_TwoServings.html";
            }

        }

        else if (name_of_recipe=="horchata_recipe"){
            const quantity=prompt("How many servings? Pick from 1-2.");
            if(quantity === "1"){
                location.href="Horchata_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="Horchata_TwoServings.html";
            }

        }

        else if (name_of_recipe=="GBSS_recipe"){
            const quantity=prompt("How many servings? Pick from 1-2.");
            if(quantity === "1"){
                location.href="GBSS_Recipe_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="GBSS_Recipe_TwoServings.html";
            }

        }

        else if (name_of_recipe=="Pork_steak_recipe"){
            const quantity=prompt("How many servings? Pick from 1-2.");
            if(quantity === "1"){
                location.href="PorkSteak_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="PorkSteak_TwoServings.html";
            }

        }

        else if (name_of_recipe=="Fried_Rice_recipe"){
            const quantity=prompt("How many servings? Pick from 1-2.");
            if(quantity === "1"){
                location.href="FriedRice_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="FriedRice_TwoServings.html";
            }

        }
    }