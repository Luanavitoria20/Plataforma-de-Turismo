import {
  createPlace,
  getAllPlaces,
  getPlacesByType,
  updatePlace,
  deletePlace,
} from '../services/placeService.js';


export async function createPlaceController(req, res) {
  const { name, description, address, type, rating } = req.body;

  try {
    const place = await createPlace({ name, description, address, type, rating });
    res.status(201).json(place);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar local.', error: error.message });
  }
}

export async function getAllPlacesController(req, res) {
  try {
    const places = await getAllPlaces();
    if (places.length === 0) return res.status(404).json({ message: 'Nenhum local cadastrado.' });
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar locais.', error: error.message });
  }
}

export async function getPlacesByTypeController(req, res) {
  const { type } = req.query;

  try {
    const places = await getPlacesByType(type);
    if (places.length === 0) {
      return res.status(404).json({ message: `Nenhum local do tipo '${type}' encontrado.` });
    }
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar locais por tipo.', error: error.message });
  }
}

export async function updatePlaceController(req, res) {
  const id = Number(req.params.id);
  const { name, description, address, type, rating } = req.body;

  if (!name && !description && !address && !type && rating === undefined) {
    return res.status(400).json({ message: 'Informe pelo menos um campo para atualizar.' });
  }

  try {
    const updatedPlace = await updatePlace(id, { name, description, address, type, rating });
    res.status(200).json(updatedPlace);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar local.', error: error.message });
  }
}

export async function deletePlaceController(req, res) {
  const id = Number(req.params.id);

  try {
    const deletedPlace = await deletePlace(id);
    res.status(200).json(deletedPlace);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Local não encontrado para deletar.' });
    }
    res.status(500).json({ message: 'Erro ao deletar local.', error: error.message });
  }
}
