
    function redirect_recipe(name_of_recipe){
    const quantity=prompt("How many servings? Pick from 1-2.");

        if (name_of_recipe=="beef_brocolli_recipe"){
    const quantity=prompt("How many servings? Pick from 1-5.");
            if(quantity === "1"){
                location.href="Beef_Brocolli/BF_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="Beef_Brocolli/BF_TwoServing.html";
            }
            else if(quantity === "3"){
                location.href="Beef_Brocolli/BF_ThreeServing.html";
            }
            else if(quantity === "4"){
                location.href="Beef_Brocolli/BF_FourServing.html";
            }
            else if(quantity === "5"){
                location.href="Beef_Brocolli/BF_fiveServing.html";
            }
        }

        else if (name_of_recipe=="chicken_katsu_recipe"){
            if(quantity === "1"){
                location.href="chicken_recipes/CK_recipes.html";
            }
            else if(quantity === "2"){
                location.href="chicken_recipes/BF_TwoServing.html";
            }

        }

        else if (name_of_recipe=="crepes_recipe"){
            if(quantity === "1"){
                location.href="desserts_recipes/Crepes_Recipes_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="desserts_recipes/Crepes_Recipes_TwoServings.html";
            }

        }

        else if (name_of_recipe=="horchata_recipe"){
            if(quantity === "1"){
                location.href="drinks_recipes/Horchata_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="drinks_recipes/Horchata_TwoServings.html";
            }

        }

        else if (name_of_recipe=="GBSS_recipe"){
            if(quantity === "1"){
                location.href="pasta_recipes/GBSS_Recipes_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="pasta_recipes/GBSS_Recipes_TwoServings.html";
            }

        }

        else if (name_of_recipe=="Pork_steak_recipe"){
            if(quantity === "1"){
                location.href="pork_recipes/PorkSteak_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="pork_recipes/PorkSteak_TwoServings.html";
            }

        }
    }