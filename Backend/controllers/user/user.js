const express = require("express")
const router = express.Router();
const constants = require('../../constant/constant')
const createVolumeDao = require('../../dao/createVolume')
const suggestion = require('../../dao/suggestion')
const session = require('../../dao/user')
const user = require('../../dao/user')
const util = require('../../utils/user')
const utilToken = require('../../utils/authToken')
const utilSuggestion = require('../../utils/suggestion')
const jwt = require('jsonwebtoken')
router.post('/addVolumeOfBucket',utilToken.validation, async (req, res) => {
    try {
        req.body.userId = req.user.userId
        const result = await createVolumeDao.createVolumeBucket(req.body)
        return res.status(200).json({
            status: true,
            message: constants.message,
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            data: null
        })
    }
})

router.post('/addVolumeOfBalls',utilToken.validation, async (req, res) => {
    try {
        req.body.userId = req.user.userId
        const result = await createVolumeDao.createVolumeBall(req.body)
        return res.status(200).json({
            status: true,
            message: constants.message,
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            data: null
        })
    }
})

router.post('/createUser', async (req, res) => {
    try {
        const checkEmailExist = await user.getUserDetails(req.body.email)
        if(checkEmailExist){
            return res.status(200).json({
                status: false,
                message: constants.existEmail,
                data: null
            })
        }
        req.body.password = await util.genratehashPassword(req.body.password)
        const result = await user.createUser(req.body)
        return res.status(200).json({
            status: true,
            message: constants.message,
            data: result
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            data: null
        })
    }
})

router.post('/signIn', async (req, res) => {
    try {
        const getUserDetails = await user.getUserDetails(req.body.email)
        const comparePasswordHash = await util.comparePasswordHash(req.body.password, getUserDetails.password)
        if (!comparePasswordHash) {
            return res.status(200).json({
                status: false,
                message: constants.authFailed,
                data: null
            })
        }
        const generateToken = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            userId: getUserDetails._id
        }, 'secret');
        const updateUser = await user.updateUser(getUserDetails._id, { token: generateToken })
        return res.status(200).json({
            status: true,
            message: constants.message,
            data: updateUser
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            data: null
        })
    }
})
router.post('/suggestion', utilToken.validation, async (req, res) => {
    try {
        req.body.userId = req.user.userId
        let totalVolume = 0;
        let  checLessThanZero
        let sessionStatus = 1
        let getUserSession = await user.getUserSession(req.user.userId,sessionStatus)
        let createNumberOfBalls = await suggestion.createNumberOfBalls(req.body)
        let getVolumeBucket = await suggestion.getVolumeBucket(req.user.userId)
        let getVolumeBalls = await suggestion.getVolumeBalls(req.user.userId)
        let calcultationResult = await utilSuggestion.ballsCalculation(createNumberOfBalls, getVolumeBalls)
        let volumeBuckePlainObj = await suggestion.convertVolumeBucketPlainObj(getVolumeBucket)
        let volumeBucketIncrsOrder = Object.fromEntries(Object.entries(volumeBuckePlainObj).reverse());
        for (let key in calcultationResult) {
            totalVolume += calcultationResult[key];
        }
        if(getUserSession) checLessThanZero =  getUserSession.bucketSize - totalVolume
    
        if(checLessThanZero < 0){
            return res.status(200).json({
                status: false,
                message: constants.size,
                data: null
            })
        }
        if(checLessThanZero == 0){
            return res.status(200).json({
                status: true,
                message: constants.ballUsing + " " + getUserSession.bucketName,
                data: utilSuggestion.colorNumberOfBalls(req.body)
            })
        }
        if(getUserSession && totalVolume <= getUserSession.bucketSize){
            let session = {
                userId :  req.user.userId,
                sessionStatus: 1,
                bucketName: getUserSession.bucketName,
                bucketSize: getUserSession.bucketSize,
                totalNumberBalls: totalVolume
            }
           const createUserSession = await user.createUserSession(session)
           const sizeOfBall = getUserSession.bucketSize - totalVolume 
           const getSizeOfBalls = utilSuggestion.suggestionSizeOfBall(getVolumeBalls,sizeOfBall,getUserSession)
           if(Object.keys(getSizeOfBalls).length == 0){
               return res.status(200).json({
                   status: false,
                   message: constants.noBucketFound,
                   data: null
               })
           }else{
               return res.status(200).json({
                   status: true,
                   message: constants.messageBall + " " + getUserSession.bucketName,
                   data: getSizeOfBalls
               })
           }

        }
       
        let suggestionBucket
        for (let key in volumeBucketIncrsOrder) {

            if (volumeBucketIncrsOrder[key] >= totalVolume) {
                suggestionBucket = key
                break
            }
        }
        if(getUserSession) suggestionBucket =  getUserSession.bucketName
        if(!getUserSession){
            let session = {
                userId : req.user.userId,
                sessionStatus: 1,
                bucketName: suggestionBucket,
                bucketSize: volumeBucketIncrsOrder[suggestionBucket],
                totalNumberBalls: totalVolume
            }
            const createUserSession = await user.createUserSession(session)
        }
        if (!suggestionBucket) {
            suggestionBucket = constants.noBucketFound
            return res.status(200).json({
                status: false,
                message: constants.noBucketFound,
                data: null
            })
        }
        return res.status(200).json({
            status: true,
            message: constants.ballUsing + " " + suggestionBucket,
            data: utilSuggestion.colorNumberOfBalls(req.body)
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            data: null
        })
    }
})

router.post('/logout', utilToken.validation, async (req, res) => {
    try {     
        const removeSessionObj = {
            userId: req.user.userId,
            sessionStatus: 0
        }
        const removeSession = await user.createUserSession(removeSessionObj)
        const updateUser = await user.updateUser(req.user.userId, { token: '' })
        return res.status(200).json({
            status: true,
            message: constants.message
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            data: null
        })
    }
})


module.exports = router