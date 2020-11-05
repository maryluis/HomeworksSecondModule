
    var propose = [
        scrambleEggs  = {
            name: "Scramble eggs",
            products: ["7 eggs", " 200gr of bacon"],
            price: 45,
        },
        omelette = {
            name: "Omelette",
            products: ["7 eggs "," 200gr of champinions "],
            price: 45,
        },
        boilOmelette = {
            name:  "Boil omelette",
            products: ["7 eggs", " 200ml of milk "," 200gr of cheese"],
            price: 60,
        },
        sweetOatmeal = {
            name: "Sweet oatmeal",
            products: ["300gr of oarmeal", " 1 banana", " a bit of honey"],
            price: 40,
        },
        saltyOatmeal = {
            name: "Salty oatmeal",
            products: ["300gr of oatmeal", " 200gr of roast meat", " a bit of salt"],
            price: 40,
        },
        lazyOatmeal = {
            name: "Lazy oatmeal",
            products: ["300gr of oatmeal", " 400ml of milk", "some berries"],
            price: 60,
        },
        hotCheezTosts = {
            name: "Hot tosts with Cheese", 
            products: ["bread", " 150gr of sausage" , " sauce", " 200gr of cheese"],
            price: 45,
        },
        hotTosts = {
            name: "Hot tosts with eggs",
            products: ["bread", " 3 eggs", "sauce", " 200gr of cheese"],
            price: 35,
        },
        fishTosts = {
            name: "Tosts with salmon",
            products: ["bread", " 200gr of salmon", "butter"],
            price: 60,
        }
    ];
    var Cost = 0;
        function Choose() {
            var recepy;
            var result = prompt("Do you want choose breakfast for your family?");
            if (result == "yes") {         
                var chosen = Math.floor(Math.random() * propose.length);
                    
                for (var i = 0; i <= chosen; i++) {
                    
                    if (chosen == i) {
                        recepy = propose[chosen];
                    }           
                }

                alert ("Your chose is " + recepy.name);

                alert ("You're need " + recepy.products)
                
                function Meal (trying) {
                    trying = prompt ("Do you like this");
                    if (trying == "yes") {
                        alert ("Great!")
                        Cost = Cost + recepy.price
                        alert ("Good luck on your kitchen with " + recepy.name)
                        wantAgain = prompt ("Do you want something else for a breakfast?");
                        if (wantAgain == "yes") {
                             alert ("Great!")
                            return Choose()
                        }
                        else if (wantAgain == "no") {
                            return alert ("Ok")
                        }
                    }
                    else if  (trying == "no") {
                        alert ("No problem! Let's try again!")
                        return Choose()
                    }  
                    else {
                        alert ("Sorry, I can't unserstad. Please, say yes or no")
                        return Meal ()
                    }    
                }

                Meal();         
            }
            else if (result == "no") {
                return alert ("Ok! See you next time!")                
            }
            else {
                alert ("Please, say yes or no")
                return Choose()
            }

            alert("Yout meal costs " + Cost + "UAH")
            
        }
        Choose()




