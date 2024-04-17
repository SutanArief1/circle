import db from "../db";
import { IProfile } from "../type/app";

export const updateProfile = async (userid: number, payload: IProfile) => {
   return await db.profile.update({
      where: {
         userid,
      },
      data: {
         ...payload,
      },
   });
};

export const getProfile = async (userid: number) => {
   return await db.profile.findFirst({
      where: {
         userid,
      },
   });
};