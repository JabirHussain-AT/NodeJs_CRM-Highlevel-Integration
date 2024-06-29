import axios from "axios";
import { API_BASE_URL } from "../constants/APIs";


//from contacts taking one random contact 

export async function getRandomContactHelper(accessToken: string): Promise<any> {

  const contactsResponse = await axios.get(`${API_BASE_URL}/contacts/?locationId=${process.env.LOCATION_ID}`, {
    headers: { Authorization: `Bearer ${accessToken}` , Version : `2021-07-28` },
  });

  const contacts = contactsResponse.data.contacts;

  return contacts[Math.floor(Math.random() * contacts.length)];
}
