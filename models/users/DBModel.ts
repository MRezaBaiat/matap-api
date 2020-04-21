import { ObjectId } from 'mongoose';
const dbModel = {
    mobile: {type: String, required: true},
    type:{type: String,require:true},
    name:{type:String,required:true},
    imageUrl:{type:String},
    code:{type:Number},
    specialization:{type:ObjectId,ref:'specializations'},
    price:{type:Number},
    details:{
        type:{
            city:String,
            nezam_pezeshki_code:String,
            monthlyCut:Number,
            clinics:[{type:ObjectId,ref:'health_centers'}],
            hospitals:[{type:ObjectId,ref:'health_centers'}]
        }
    }
};

export default dbModel;
