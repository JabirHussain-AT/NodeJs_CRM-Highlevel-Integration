import axios from "axios";
import qs from "qs";
import { ITokenResponse } from "../interface/ITokenResponse";


//function to fetch the access Token from Market Place 

async function getAccessToken(): Promise<ITokenResponse> {

  const tokenResponse = await axios.post(
    `https://services.leadconnectorhq.com
/oauth/token`,
    qs.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type : "authorization_code",
        code: process.env.ACCESS_CODE,
        user_type :"Location" ,
        redirect_uri: "http://127.0.0.1/",
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  
  return { access_Token : tokenResponse.data.access_token  , location_Id : tokenResponse.data.locationId } ;
}

export = getAccessToken;
