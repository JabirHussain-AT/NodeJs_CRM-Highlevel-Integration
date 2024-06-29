import axios from "axios";
import { API_BASE_URL } from "../constants/APIs";


//for fetching the specic contact

export = async function fetchSpecificContact(accessToken: string  , contactId : string ): Promise<any> {

  const contactsResponse = await axios.get(`${API_BASE_URL}/contacts/${contactId}`, {
    headers: { Authorization: `Bearer ${accessToken}` , Version : `2021-07-28` },
  });


  return  contactsResponse.data;
}
