function isSatorSquare(tablet) {
    let topview = []
    let leftview = []
    let middleview = []
    let bottomview = []

    for (let i = 0; i < tablet.length; i++) {
        topview.push(tablet[i][0])
        bottomview.push(tablet[i][tablet.length - 1])
        middleview.push(tablet[i][Math.floor(tablet[i].length / 2)])
    }

    leftview = tablet[Math.floor(tablet.length / 2)]
    bottomview = bottomview.reverse()

    if (topview.join("") === bottomview.join("") && middleview.join("") === leftview.join("")) return true
    return false
}