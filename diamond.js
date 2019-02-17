const fullDiamond = function(rounds,char) {
    var spaceRound = rounds -1 
     for(var i=1; i<=rounds; i++){
        console.log(' '.repeat(spaceRound) + char.repeat(i*2));
        spaceRound--
     }
     spaceRound = 0
     for(var i=rounds; i>=0; i--){
        console.log(' '.repeat(spaceRound) + char.repeat(i*2));
        spaceRound++
     }
}

const fullDiamondPlusfullDiamond = function(rounds,char) {
    var spaceRound = rounds -1 
     for(var i=1; i<=rounds; i++){
        console.log(' '.repeat(spaceRound) + char.repeat(i*2) + ' '.repeat(10+spaceRound) + ' '.repeat(spaceRound) + char.repeat(i*2));
        spaceRound--
     }
     spaceRound = 0
     for(var i=rounds; i>=0; i--){
        console.log(' '.repeat(spaceRound) + char.repeat(i*2) + ' '.repeat(10+spaceRound) + ' '.repeat(spaceRound) + char.repeat(i*2));
        spaceRound++
     }
}

fullDiamond(5,'*')
fullDiamondPlusfullDiamond(5,'*')