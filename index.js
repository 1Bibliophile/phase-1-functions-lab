// Code your solution in this file!
function distanceFromHqInBlocks(dist){
    let distance = Math.abs(dist - 42)
    return distance
}

function distanceFromHqInFeet(blocks){
    //distanceFromHqInBlocks(blocks)
    let feet = Math.abs(blocks - 42) * 264
    return feet
}

function distanceTravelledInFeet(num1, num2){
    let foot = Math.abs((num1 - num2) * 264)
    return foot
}

function calculatesFarePrice(start, destination){
    let dist2 = Math.abs(start - destination) * 264
    let price = 0
    let tooFar = 'cannot travel that far'
    if(dist2 < 400)
    {
        price = 0
        return price
    }
    else if(dist2 > 400 && dist2 < 2000)
    {
        price = Math.abs((dist2 - 400) * 0.02)
        return price
    }
    else if(dist2 > 2000 && dist2 < 2500)
    {
        price = 25
        return price
    }
    else if(dist2 > 2500)
    {
        return tooFar
    }
    
}