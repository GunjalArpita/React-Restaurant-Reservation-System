import ErrorHandler from '../error/error.js';
import {Reservation} from '../models/reservationSchema.js';

export const sendReservation = async (req,res,next)=>{
    
    // normalize incoming field names (accept camelCase or lowercase)
    const firstname = req.body.firstname || req.body.firstName;
    const lastname = req.body.lastname || req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const time = req.body.time;
    const date = req.body.date;
    // if(!firstname || !lastname || !email || !phone || !time || !date){
    //     return next(new ErrorHandler("Please fill full reservation form",400));
    // }
    if(!firstname)
    {
        return next(new ErrorHandler("Please Enter Firstname",400));
    }
    if(!lastname)
    {
        return next(new ErrorHandler("Please Enter Lasttname",400));
    }
    if(!email)
    {
        return next(new ErrorHandler("Please Enter Email",400));
    }
    if(!phone)
    {
        return next(new ErrorHandler("Please Enter Phone Number",400));
    }
    if(!time)
    {
        return next(new ErrorHandler("Please Enter Time",400));
    }
    if(!date)
    {
        return next(new ErrorHandler("Please Enter Date",400));
    }

    try{
    await Reservation.create({ firstname, lastname, email, phone, date, time });
    res.status(200).json({
        success:true,
        message:"Reservation Sent Successfully"
    });
    }
    catch(error){
    if(error.name === "ValidationError"){
        const ValidationError=Object.values(error.errors).map(
            (err) => err.message
        );
        return next(new ErrorHandler(ValidationError.join(","),400))
    }
    return next(error);
    }
}