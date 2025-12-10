
    function redirect_recipe(name_of_recipe){

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
                location.href="CK_recipes.html";

        }
    }