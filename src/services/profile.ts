import db from "../db";
import { IProfile } from "../type/app";

export const updateProfile = async (userid: number, body: IProfile) => {   
   return await db.profile.update({
      where: {
         userid,
      },
      data: {
         ...body,
      },
   });
};

export const getProfile = async (userid: number) => {
   return await db.profile.findFirst({
      where: {
         userid,
      },
      include: {
         user: {
            select: {
               username: true,
               fullname: true,
               id: true
            }
         }
      }
   });
};