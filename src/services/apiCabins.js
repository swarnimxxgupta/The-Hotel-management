import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.erroe(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
