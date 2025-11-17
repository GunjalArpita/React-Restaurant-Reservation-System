import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({ 
    firstname:{
        type: String,
        required: [true, 'Please provide your first name'],
        minlength: [3,"First name must be at least 3 characters"],
        maxlength: [30,"First name must be at most 30 characters"],
        },
        lastname:{
            type: String,
            required: [true, 'Please provide your first name'],
            minlength: [3,"First name must be at least 3 characters"],
            maxlength: [30,"First name must be at most 30 characters"],
            },
        email:{
            type: String,
            required: [true, 'Please provide your email'],
            validate: [validator.isEmail, 'Please provide a valid email'],
            unique: true,
            lowercase: true,
        },
        phone:{
            type: String,
            required: [true, 'Please provide your phone number'],
            validate: [validator.isMobilePhone, 'Please provide a valid phone number'],
            unique: true,
            minlength: [11,"Phone number must be at least 10 characters"],
            maxlength: [11,"Phone number must be at most 10 characters"],
        },
        time:{
            type: String,
            required: [true, 'Please provide your reservation time'],

        },
        date:{
            type: String,
            required: [true, 'Please provide your reservation date'],
  
        },
        })   
        
export const Reservation = mongoose.model('Reservation', reservationSchema);