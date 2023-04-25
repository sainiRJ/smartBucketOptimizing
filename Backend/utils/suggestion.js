
exports.ballsCalculation = async function(getNumberOfBalls,getVolumeBalls){
        let calcultationResult = {}
        calcultationResult.pink = getNumberOfBalls.pink * getVolumeBalls.pink
        calcultationResult.red = getNumberOfBalls.red * getVolumeBalls.red
        calcultationResult.blue = getNumberOfBalls.blue * getVolumeBalls.blue
        calcultationResult.orange = getNumberOfBalls.orange * getNumberOfBalls.orange
        calcultationResult.green = getNumberOfBalls.green * getVolumeBalls.green
        return calcultationResult
}

exports.suggestionSizeOfBall =  function(getVolumeBalls, remaningSizeOfBalls,getUserSession){
    let sizeOfBall = {}
    let sumOfBallsAndBucket = getUserSession.totalNumberBalls
    let checkSum = 0

    if(getVolumeBalls.pink <= remaningSizeOfBalls && sumOfBallsAndBucket <=getUserSession.bucketSize){
        checkSum = sumOfBallsAndBucket + getVolumeBalls.pink
        if(checkSum <= getUserSession.bucketSize){
            sizeOfBall.pink = 1
            sumOfBallsAndBucket = checkSum
        }
    }
    if(getVolumeBalls.red <= remaningSizeOfBalls  && sumOfBallsAndBucket <=getUserSession.bucketSize){
        checkSum = sumOfBallsAndBucket + getVolumeBalls.red
        if(checkSum <= getUserSession.bucketSize){
            sizeOfBall.red = 1
            sumOfBallsAndBucket = checkSum
        }
    }
    if(getVolumeBalls.blue <= remaningSizeOfBalls && sumOfBallsAndBucket <= getUserSession.bucketSize){
        checkSum = sumOfBallsAndBucket + getVolumeBalls.blue
        if(checkSum <= getUserSession.bucketSize){
            sizeOfBall.blue = 1
            sumOfBallsAndBucket = checkSum
        }
    }
    if(getVolumeBalls.orange <= remaningSizeOfBalls  && sumOfBallsAndBucket <= getUserSession.bucketSize){
        checkSum = sumOfBallsAndBucket + getVolumeBalls.orange
        if(checkSum <= getUserSession.bucketSize){
            sizeOfBall.orange = 1
            sumOfBallsAndBucket = checkSum
        }
    }
    if(getVolumeBalls.green <= remaningSizeOfBalls && sumOfBallsAndBucket <= getUserSession.bucketSize){
        checkSum = sumOfBallsAndBucket + getVolumeBalls.green
        if(checkSum <= getUserSession.bucketSize){
            sizeOfBall.green = 1
            sumOfBallsAndBucket = checkSum
        }
    }
    return sizeOfBall

}

exports.colorNumberOfBalls = function(ballColor){
    let numberOfBallsObj = {}
    if(ballColor.pink > 0) numberOfBallsObj.pink = ballColor.pink
    if(ballColor.red > 0) numberOfBallsObj.red = ballColor.red
    if(ballColor.blue > 0) numberOfBallsObj.blue = ballColor.blue
    if(ballColor.orange > 0) numberOfBallsObj.orange = ballColor.orange
    if(ballColor.green > 0) numberOfBallsObj.green = ballColor.green
    return numberOfBallsObj

}