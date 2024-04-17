export interface IRegister {
    username: string;
    email: string;
    password: string;
    fullname: string;
}

export type AuthMiddlewareData = {
    id: string;
 };
 
 export enum EStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
 }