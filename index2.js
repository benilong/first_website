const textbox = document.getElementById("currentNameBarID");
const amount = document.getElementById("currentAmountBarID");
const btn = document.getElementById("enterID");
const out1 = document.getElementById("leaderboardboxID");
leader = {"name": [], "amount": []};
let name_exists = false;

function fun1(){
    
    // if(textbox.value != "" && !isNaN(parseFloat(amount.value))){
    //     for(let i =0; i < leader["name"].length;i++){
    //         if((leader["name"][i]).toLowerCase() == (textbox.value).toLowerCase()){
    //             name_exists = true;
    //             leader["amount"][i] += parseFloat(amount.value);
           
    //         }
    //     }
        if(!name_exists){
            leader["name"].push(textbox.value);
            if(amount.value == "EFT - 12 points"){
                leader["amount"].push(12);
            }
            
        }
        name_exists = false;
        
        


        console.log(leader);
        bblSort();
        display();
        console.log(leader);
          
}


function fun2(){
    
    // if(textbox.value != "" && !isNaN(parseFloat(amount.value))){
    //     for(let i =0; i < leader["name"].length;i++){
    //         if((leader["name"][i]).toLowerCase() == (textbox.value).toLowerCase()){
    //             name_exists = true;
    //             if((leader["amount"][i] - parseFloat(amount.value)) >=0){
    //             leader["amount"][i] -= parseFloat(amount.value);
    //             }
                  
    //         }
    //     }
        if(!name_exists){
            leader["name"].push(textbox.value);
            leader["amount"].push(parseFloat(amount.value));
        }
        name_exists = false;
        
        


        console.log(leader);
        bblSort();
        display();
        console.log(leader);
          
}




function bblSort() {

    for (let i = 0; i < leader["amount"].length; i++) {

        // Last i elements are already in place  
        for (let j = 0; j < (leader["amount"].length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (leader["amount"][j] > leader["amount"][j + 1]) {

                // If the condition is true
                // then swap them
                let temp = leader["amount"][j]
                leader["amount"][j] = leader["amount"][j + 1]
                leader["amount"][j + 1] = temp

                let temp1 = leader["name"][j]
                leader["name"][j] = leader["name"][j + 1]
                leader["name"][j + 1] = temp1
            }
        }
    }

    
}

    


function display(){

    let total = "";
    leader["name"] = leader["name"].reverse();
    leader["amount"] = leader["amount"].reverse();

    for(let i = 0; i < leader["name"].length; i++){
        total += i+1 + ". "+ leader["name"][i] + " - $" + leader["amount"][i].toFixed(2) + "<br>";
    }
        out1.innerHTML = total;


}

btn.addEventListener('click',fun1);

