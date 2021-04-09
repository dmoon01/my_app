import { SIGN_UP } from "../Constants/ActionTypes";

export const signUp = (userInformation) =>
({
    type : SIGN_UP,
    id : userInformation.id,
    pw : userInformation.pw,
    email : userInformation.email,
    phoneNumber : userInformation.phoneNumber,
    allowAd : userInformation.allowAd,
    joinTime : userInformation.joinTime,
    name : userInformation.name
})