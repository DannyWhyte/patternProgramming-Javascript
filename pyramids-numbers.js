// half pyramid left to right
const halfPyramidLtoR = function(rounds) {
    for(i=1;i<=rounds;i++) {
        let str = ''
        for(ii=1;ii<=i;ii++) {
            str+=ii
        }
        console.log(str)
    }
}

// half pyramid right to left
const halfPyramidRtoL = function(rounds) {
    for(i=1;i<=rounds;i++) {
        let str = ' '.repeat(rounds-i) + ''
        for(ii=1;ii<=i;ii++) {
            str+=ii
        }
        console.log(str)
    }
}

// half pyramid right to left inverse numbers
const halfPyramidRtoLInverse = function(rounds) {
    for(i=1;i<=rounds;i++) {
        let str = ''
        for(ii=1;ii<=i;ii++) {
            str = ii + str
        }
        console.log(' '.repeat(rounds-i)+str)
    }
}

// full pyramid inverse nnumber (single digit only)
const fullPyramidInverse = function(rounds) {
    for(i=1;i<=rounds;i++) {
        let str = ''
        for(ii=1;ii<=i;ii++) {
            str = ii + str + (a = ii == 1 ? '':ii)
        }
        console.log(' '.repeat(rounds-i)+str)
    }
}

// full pyramid inverse number plus half right to left inverse number pyramid
const fullPyramidInversePlusHalfInverseR2L = function(rounds) {
    for(i=1;i<=rounds;i++) {
        let str = ''
        let str2 = ''
        for(ii=1;ii<=i;ii++) {
            str = ii + str + (a = ii == 1 ? '':ii)
            str2 = ii + str2
        }
        str = ' '.repeat(rounds-i) + str + ' '.repeat(20+(rounds - i*2)) + str2
        console.log(str)
    }
}

// full pyramid inverse number plus half right to left number pyramid
const fullPyramidInversePlusHalfL2R = function(rounds) {
    for(i=1;i<=rounds;i++) {
        let str = ''
        let str2 = ''
        for(ii=1;ii<=i;ii++) {
            str = ii + str + (a = ii == 1 ? '':ii)
            str2 = str2 + ii
        }
        str = ' '.repeat(rounds-i) + str + ' '.repeat(20-i) + str2
        console.log(str)
    }
}

// full pyramid inverse number plus full pyramid inverse
const fullPyramidInversePlusFullInverse = function(rounds) {
    for(i=1;i<=rounds;i++) {
        let str = ''
        for(ii=1;ii<=i;ii++) {
            str = ii + str + (a = ii == 1 ? '':ii)
        }
        str = ' '.repeat(rounds-i) + str + ' '.repeat(20+(rounds - i*2)) + str
        console.log(str)
    }
}

halfPyramidLtoR(5)
halfPyramidRtoL(5)
halfPyramidRtoLInverse(5)
fullPyramidInverse(9)
fullPyramidInversePlusHalfInverseR2L(5)
fullPyramidInversePlusHalfL2R(5)
fullPyramidInversePlusFullInverse(9)