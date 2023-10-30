"use server";
import Cluster from "../models/kanji.model";
import { connectToDB } from "../mongoose";
import { KanjiModel } from "./kanji.actions";

export async function fetchClusters() {
  try {
    connectToDB();
    return await Cluster.find({});
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export interface ClusterModel {
  similarity: String;
  kanji: KanjiModel[];
}

export async function createCluster({ similarity, kanji }: ClusterModel) {
  try {
    connectToDB();
    return await Cluster.create({ similarity, kanji });
  } catch (error: any) {
    throw new Error(`Failed to create cluster: ${error.message}`);
  }
}
