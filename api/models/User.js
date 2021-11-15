const mongoose= require ('mongoose');


const UserSchema= new mongoose.Schema (
    { 
        username: {type: String, required: true, unique: true},
        email: {type:String, required: true, unique: true},
        password: {type:String, required: true},
        profilrPic: {type:String, default: false},
        isAdmin: {type:String, default: false}
    },
    {timestamps: true}
);
module.export = mongoose.model("User", UserSchema)