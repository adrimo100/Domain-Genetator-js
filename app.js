let pronouns = ['the','our', "first", "last"];
let adjectives = ['great', 'big', "small", "little" ];
let nouns = ['jogger','racoon', "mombasa", "voi"];
let extensions = [".com", ".es", ".io", ".org"];


for(let pron of pronouns)
    
    for(let adj of adjectives)
        
        for(let noun of nouns)
            
            for(let ext of extensions)
                
                console.log(pron+adj+noun+ext);