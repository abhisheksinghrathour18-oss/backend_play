import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs';
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});
const uploadToCloudinary = async (localfilePath, resourceType = "auto") => {
    try {
        if (!localfilePath) return null; // Return null if no file path is provided
        const response = await cloudinary.uploader.upload(localfilePath, { 
            resource_type: resourceType });
        // file uploaded successfully 
        console.log("File uploaded to Cloudinary:", response.secure_url);
        return response;
    } catch (error) {
        fs.unlink(localfilePath, (err) => {
            if (err) {
                console.error("Error deleting local file after failed upload:", err);
            }

        });
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }
};
export default uploadToCloudinary;