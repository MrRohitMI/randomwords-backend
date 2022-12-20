const {Schema,model}=require("mongoose")
const UserSchema=new Schema({
    name: {type: String,required: true},
    deficulty: {type: String,required: true}
},)
const Users= model("user",UserSchema)
module.exports = Users;