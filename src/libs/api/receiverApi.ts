import httpClient from '../clients/http-client';
import log from '../logger/logger';

export const  callReceiverAPI = async (characterId:string) => {
  const url = `https://hp-api.onrender.com/api/character/${characterId}`;
  try {
    const response = await httpClient.get(url);
    log.info(`api call was successful`)
    return response;
  } catch (error) {
    const err = error as Error
    log.error(`Failed to call Receiver API: ${err.message}`);
    throw error;
  }
  
}

