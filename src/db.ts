import mongoose from "mongoose";

const connectToDatabase = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log("Database connected");
	} catch (error) {
		console.log("error in connectToDatabase", error);
		throw error;
	}
};

export default connectToDatabase;
