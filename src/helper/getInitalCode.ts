import axios from "axios";

//This function is store the Initial code after signin the sub account  , we get it like with URL as query , key is 'code'
async function getInitalCode() {
    
  const Response = await axios.get(
    `https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=${process.env.REDIRECT_URI}&client_id=${process.env.CLIENT_ID}&scope=locations/customFields.readonly contacts.readonly contacts.write`
  );
  console.log(Response);

  return Response;
}

export default getInitalCode;
