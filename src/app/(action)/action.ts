"use server";

import { revalidatePath } from "next/cache";
import { FilmType } from "@prisma/client";

import { deleteItem } from "@/lib/myFetch";

type Data = {
  id: string;
  fileType: FilmType;
};

export async function DeleteAction(data: Data, path: string) {
  try {
    await deleteItem(data.id, data.fileType);
  } catch (error) {
    throw new Error("Error deleting item");
  }
  revalidatePath(path);
}
