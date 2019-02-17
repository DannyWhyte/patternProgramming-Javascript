/* half pyramid from left to right */
const l2rHafPyramid = function (rounds,char) {
    for(var i=1; i<=rounds; i++){
        console.log(char.repeat(i));
    }
}

/* half pyramid from right to left */
const r2lHafPyramid = function(rounds,char) {
    var spaceRound = rounds -1 
     for(var i=1; i<=rounds; i++){
        console.log(' '.repeat(spaceRound) + char.repeat(i));
        spaceRound--
     }
}
    
 /* full pyramid from right to left */
const fullPyramid = function(rounds,char) {
    var spaceRound = rounds -1 
     for(var i=1; i<=rounds; i++){
        console.log(' '.repeat(spaceRound) + char.repeat(i*2));
        spaceRound--
     }
}

 /* two full pyramid */
const fullPlusfullPyramid = function(rounds,char) {
    var spaceRound = rounds -1 
     for(var i=1; i<=rounds; i++){
        console.log(' '.repeat(spaceRound) + char.repeat(i*2) + ' '.repeat(10+spaceRound) + ' '.repeat(spaceRound) + char.repeat(i*2));
        spaceRound--
     }
}   

 /* one full and one right to left pyramid */
const fullPlusHalfR2LPyramid = function(rounds,char) {
    var spaceRound = rounds -1 
     for(var i=1; i<=rounds; i++){
        console.log(' '.repeat(spaceRound) + char.repeat(i*2) + ' '.repeat(10+spaceRound) + ' '.repeat(spaceRound) + char.repeat(i));
        spaceRound--
     }
}   

 /* one full and one left to right pyramid */
const fullPlusHalfL2RPyramid = function(rounds,char) {
    var spaceRound = rounds -1 
     for(var i=1; i<=rounds; i++){
        console.log(' '.repeat(spaceRound) + char.repeat(i*2) + ' '.repeat(10+spaceRound) + char.repeat(i));
        spaceRound--
     }
}   

r2lHafPyramid(5,'*')
l2rHafPyramid(5,'*')
fullPyramid(5,'*')
fullPlusfullPyramid(5,'*')
fullPlusHalfR2LPyramid(5,'*')
fullPlusHalfL2RPyramid(5,'*')