import { Request, Response, NextFunction } from 'express';
import {callReceiverAPI} from '../libs/api/receiverApi';


export const processDispatchOperation = async (characterId:string) => {

  const responseData = await callReceiverAPI(characterId)
  
  return responseData.data

}
