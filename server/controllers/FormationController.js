const Formation = require("../models/Formation");

// Get all formations
const getAllFormations = async (req, res) => {
  try {
    const formations = await Formation.find();
    res.json(formations);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single formation by ID
const getFormationById = async (req, res) => {
  try {
    const formation = await Formation.findById(req.params.id);
    if (!formation) {
      return res.status(404).json({ message: "Formation not found" });
    }
    res.json(formation);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new formation
const createFormation = async (req, res) => {
  try {
    const { title, description, category, price, dateFormation } = req.body;
    const newFormation = new Formation({
      title,
      description,
      category,
      price,
      dateFormation
    });
    const savedFormation = await newFormation.save();
    res.status(201).json(savedFormation);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a formation by ID
const updateFormation = async (req, res) => {
  try {
    const { title, description, category, price, dateFormation } = req.body;
    const updatedFormation = await Formation.findByIdAndUpdate(
      req.params.id,
      { title, description, category, price, dateFormation },
      { new: true }
    );
    if (!updatedFormation) {
      return res.status(404).json({ message: "Formation not found" });
    }
    res.json(updatedFormation);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a formation by ID
const deleteFormation = async (req, res) => {
  try {
    const deletedFormation = await Formation.findByIdAndDelete(req.params.id);
    if (!deletedFormation) {
      return res.status(404).json({ message: "Formation not found" });
    }
    res.json({ message: "Formation deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllFormations,
  getFormationById,
  createFormation,
  updateFormation,
  deleteFormation,
};
