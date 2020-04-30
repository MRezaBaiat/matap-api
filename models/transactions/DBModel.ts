import { ObjectId } from 'mongoose';
const dbModel = {
    amount:{type:Number,required:true},
    type:{type:String,required: true},
    tracking_code:{type:String},
    date:{type:Number,required:true},
    hint:{type:String,default:''},
    issuer:{
        type:{
            type:String,
            _id:String,
            name:String
        }
    },
    target:{
        type:{
            _id:String,
            name:String
        }
    }
};

export default dbModel;
