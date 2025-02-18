import mongoose, {Schema} from "mongoose";

mongoose.connect(ProcessingInstruction.env.MONGO_URI)
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
    },
    {
        timestamp: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;