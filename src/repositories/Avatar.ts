import { UserMeasurement as uMeasurement } from "../models/Avatar";
import { dataSource } from "@medusajs/medusa/dist/loaders/database";

export const UserMeasurement = dataSource
  .getRepository(uMeasurement);

export default UserMeasurement;
