
import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const userSchema = new Schema({
    id: Number,
    name:String,
});

const User = model('User',userSchema);
export default User;