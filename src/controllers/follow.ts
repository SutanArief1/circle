import { Request, Response } from "express"
import db from "../db"

export const follow = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        
        const {followerId, followingId} = req.body

    const follow = await db.follow.create({
        data: {
            followerId,
            followingId
        }
    })

    console.log(follow);

    res.json({
        success: true,
        data: follow
    })  
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }  
}

export const getFollowers = async (req: Request, res: Response) => {
    try {
        const {followingId} = req.params

        const followers = await db.follow.findMany({
            where: {
                followingId: Number(followingId)
            }
        })

        res.json({
            success: true,
            data: followers
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
}