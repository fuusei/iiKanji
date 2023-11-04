"use server";
import Cluster from "../models/cluster.model";
import { connectToDB } from "../mongoose";
import { ClusterModel } from "../interfaces";

export async function fetchClusters() {
  try {
    connectToDB();
    return await Cluster.find({});
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
export async function createCluster({ similarity, kanji }: ClusterModel) {
  try {
    connectToDB();
    return await Cluster.create({ similarity, kanji });
  } catch (error: any) {
    throw new Error(`Failed to create cluster: ${error.message}`);
  }
}
