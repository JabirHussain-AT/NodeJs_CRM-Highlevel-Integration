import { NextFunction, Request, Response } from 'express';
import getAccessToken  from '../helper/getAccessToken'
import  { getRandomContactHelper }  from '../helper/getRandomContactHelper';
import { getCustomField } from '../helper/getCustomFields';
import { updateContactHelper } from '../helper/updateContacts';
import getSpecifContact from '../helper/getSpecifContact';

//fetching the access token or generating

export const fetchAccessToken = async (req: Request, res: Response) => {
    try {
        const { access_Token , location_Id } = await getAccessToken()
        
        return { access_Token , location_Id }

    } catch (err) {

        console.error('Error in fetchContacts:', err);
        res.status(500).json({ message: 'Internal Server Error' });
        
    }
};


//update contact controller 

export const updateContact = async ( req : Request , res : Response , next : NextFunction ) => {
    try{

        const access_Token  = process.env.ACCESS_TOKEN 
        const randomContact = await getRandomContactHelper( access_Token! )
        const customField = await getCustomField( access_Token! , "DFS Booking Zoom Link")

        //if target matched customField ,,
        if( customField?.length > 0 ){

            //update its randomContacts'customField named (target) value to 'TEST'
            await updateContactHelper(access_Token! , randomContact.id , customField[0].id)
            const updatedContact  = await getSpecifContact( access_Token! , randomContact.id ) //fetching the updatedOne

            return res.status(201).json({
                message : 'success' , 
                contact : randomContact ,  updatedDoc : updatedContact, customField : customField})

        }
        res.status(200).json({
            message : 'fetched Contact  - custom field not found !',
            contact : randomContact , 
            customField : customField
        })


    }catch(err : unknown ){
        console.log( err )
        next(err)
    }
}