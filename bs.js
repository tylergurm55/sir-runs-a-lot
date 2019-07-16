let startover = true;
while (startover) {
    let pill = prompt('Hello Neo I am Morpheus , are you taking the red or blue pill? red/blue (Enter red or blue) ');
        if (pill === "blue") {
            let blue = prompt("Are you sure? (Enter yes or no)")
                if (blue === "yes") {
                    let by = prompt("Are you really sure a(Enter yes or no)")
                        if (by === "yes") {
                            let byy = prompt("Are you really really sure a(Enter yes or no")
                                if (byy === "yes") {
                                    alert("Go back and try again")
                                }
                                if (byy === "no") {
                                    alert("Good choice neo go back and try again")
                                } 
                        }            
                        if (by === "no") {
                            let byn = prompt("Are you really really sure (Enter yes or no)")
                                if (byn === "no ") {
                                    alert("Good choice neo go back and try again")
                                }
                                if (byn === "yes") {
                                    alert("Im sorry neo, wrong path.")
                                }
                        }
                }
                if (blue === "no") {
                    let bn = prompt("Are you really sure (Enter yes or no)")
                        if (bn === "yes") {
                            let bny = prompt("Are you really really sure (Enter yes or no")
                                if (bny === "yes") {
                                    alert("Go back and try again")
                                }
                                if (bny === "no") {
                                    alert("Good choice neo go back and try again")
                                }
                        }
                        if (bn === "no") {
                            let bnn = prompt("Are you really really sure (Enter yes or no)")
                                if (bnn === "no ") {
                                    alert("Good choice neo go back and try again")
                                }
                                if (bnn === "yes") {
                                    alert("Im sorry neo, wrong path.")
                                }
                        }
                }
    }
    if (pill === "red") {
        let red = prompt("Do you want to learn about the matrix or zion (Enter matrix or zion)")
            if (red === "matrix") {
                let matrix = prompt("the matrix is a pyschological dream world that was created to enslave the human race. Learn more about the matrix or learn about machines? (Enter matrix or machines)")
                    if (matrix === "matrix") {
                        alert("The matrix (like a computer) has programs. And sometimes when humans learn to much, it has programs called agents to sniff us out.");
                    }
                    if (matrix === "machines") {
                        alert("humanity is responsible for the creation of a race of machines that have all but conquered the Earth and enslaved mankind via the Matrix");
                    }
            }
            if (red === "zion") {
                let zion = prompt("It is the last human city on the planet Earth after a cataclysmic nuclear war between mankind and sentient machines, which resulted in artificial lifeforms dominating the world. Do You want to meet my crew or learn some fighting skills? (Enter meet my crew or learn some fighting skills)")
                    if (zion === "meet my crew") {
                        let crew = prompt("Great i have tank,link and trinity here. Who do you want to meet?")
                            switch (crew) {
                                case "tank":
                                    alert("Whats up neo, im tank nice to meet you!")
                                    break;
                                case "trinity":
                                    alert("Hello neo, ive been waiting for you.")
                                    break;
                                case "link":
                                    alert("I CANT BELIEVE ITS YOU, YOUR THE ONE!!!!")
                                    break;
                            }
                    }
                    if (zion === "learn some fighting skills") {
                        let skills = parseInt(prompt("Which skill number do you want to learn (pick 1,2,3,4,5 or higher)"))
                            switch (skills) {
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    alert("These are the skills you will need to defeat agents")
                                    break;
                                default:
                                    alert("You arent ready for this skills yet")
                                    break;
                            }
                    }
            }
    }
// let matrix = prompt("The matrix (like a computer) has programs. And sometimes when humans learn to much, it has programs called agents to sniff us out.");
}
startover = confirm(
"Do you want to play Again?"
)