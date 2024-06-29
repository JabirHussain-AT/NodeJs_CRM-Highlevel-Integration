import axios from "axios";
import { API_BASE_URL } from "../constants/APIs";

//fetching whole the customFields for finding specified with the name

export async function getCustomField(
  accessToken: string,
  target ?: string
): Promise<any> {
  const customFields = await axios.get(
    `${API_BASE_URL}/locations/${process.env.LOCATION_ID}/customFields?model=contact`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Version: `2021-07-28`,
      },
    }
  );

  let matchingCustomField = customFields?.data?.customFields.filter(
    (item: any) => item.fieldKey === 'contact.dfs_booking_zoom_link' ?? target
  );

  return matchingCustomField;
}
