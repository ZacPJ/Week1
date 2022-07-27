let FavFilm = [ "The Shawshank Redemption (1994)",
                 "The Godfather (1972)", 
                 "The Dark Knight (2008)",
                 "The Godfather: Part II (1974)", 
                 "12 Angry Men (1957)"
                ]

        console.log("My Top " + FavFilm.length + " movies are " + FavFilm);

    FavFilm.push("Schindler's List (1993)", "The Lord of the Rings: The Return of the King (2003)")


let i = 0;
let j = 1;
let num = "st"
      console.log("My ranking of the top " + FavFilm.length + " are:")
    while (i < FavFilm.length){
        
        
        console.log(`${j}${num} ${FavFilm[i]}`);
        i++
        if (j == 0)
        {
          num = "st"
        }
        else if (j == 1 )
        {
          num = "nd"
        }
        else if (j == 2)
          num = "rd"
        else {
          num = "th"
        };
        j++
        
    };