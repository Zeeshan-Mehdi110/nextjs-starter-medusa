//@ts-nocheck
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/medusa/dist/utils";
// import { User } from "./User"; // Import the User entity

@Entity()
export class UserMeasurement extends BaseEntity {
  @Column({ type: "numeric" })
  ankle: number | null;

  @Column({ type: "numeric", nullable: true })
  calf: number | null;

  @Column({ type: "numeric" })
  chest: number | null;

  @Column({ type: "varchar" })
  gender: string;

  @Column({ type: "numeric" })
  height: number;

  @Column({ type: "numeric" })
  hip: number;

  @Column({ type: "numeric", nullable: true })
  knee: number | null;

  @Column({ type: "numeric" })
  waist: number;

  @Column({ type: "numeric" })
  weight: number;

  @Column({ type: "varchar" })
  user_id: string;

  // @ManyToOne(() => User, (user) => user.measurements)
  // @JoinColumn({ name: "user_id" })
  // user: User;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, "avatar");
  }
}
