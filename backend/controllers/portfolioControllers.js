import Portfolio from "../models/Portfolio.js";
import cloudinary from "../config/cloudinary.js";

export const getPortfolio = async (req, res) => {
  try {
    const images = await Portfolio.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPortfolio = async (req, res) => {

  try {

    const file = req.files.image;

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "vv-productions"
    });

    const image = await Portfolio.create({
      imageUrl: result.secure_url,
      category: req.body.category
    });

    res.json(image);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Upload failed" });

  }

};


export const deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: "Image deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
