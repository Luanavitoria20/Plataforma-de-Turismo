import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createPlace(data) {
  return await prisma.place.create({ data });
}

export async function getAllPlaces() {
  return await prisma.place.findMany();
}

export async function getPlacesByType(type) {
  return await prisma.place.findMany({ where: { type } });
}

export async function updatePlace(id, data) {
  return await prisma.place.update({
    where: { id },
    data,
  });
}

export async function deletePlace(id) {
  return await prisma.place.delete({ where: { id } });
}
