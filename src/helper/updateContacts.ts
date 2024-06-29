import axios from "axios";
import { API_BASE_URL } from "../constants/APIs";


//updating contact's custom Field 

export async function updateContactHelper(accessToken: string  , contactId : string , customFieldId : string ): Promise<any> {

  const contactsResponse = await axios.put(`${API_BASE_URL}/contacts/${contactId}`,{
    customFields: [{
        id : customFieldId ,
        field_value : "TEST"
      }]
  }, {
    headers: { Authorization: `Bearer ${accessToken}` , Version : `2021-07-28` },
  });



  return  contactsResponse.data;
}
