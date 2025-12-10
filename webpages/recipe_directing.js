
    function redirect_recipe(name_of_recipe){
        const quantity=prompt("How many servings? Pick from 1-5.");

        if (name_of_recipe=="beef_brocolli_recipe"){
            if(quantity === "1"){
                location.href="Beef_Brocolli/BF_OneServing.html";
            }
            else if(quantity === "2"){
                location.href="Beef_Brocolli/BF_TwoServing.html";
            }
        }
    }