const express = require('express');

const router = express.Router();

// Importer les contrôleurs de formation
const {
    getAllFormations,
    getFormationById,
    createFormation,
    updateFormation,
    deleteFormation
} = require('../controllers/FormationController');

// Définir les routes de formation
router.get('/', getAllFormations);
router.get('/:id', getFormationById);
router.post('/', createFormation);
router.put('/:id', updateFormation);
router.delete('/:id', deleteFormation);

module.exports = router;