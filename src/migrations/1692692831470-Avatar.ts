import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Avatar1692692831470 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "avatar",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "ankle",
                    type: "numeric",
                    isNullable: true
                },
                {
                    name: "calf",
                    type: "numeric",
                    isNullable: true
                },
                {
                    name: "chest",
                    type: "numeric",
                    isNullable: true
                },
                {
                    name: "gender",
                    type: "varchar",
                },
                {
                    name: "height",
                    type: "numeric",
                },
                {
                    name: "hip",
                    type: "numeric",
                },
                {
                    name: "knee",
                    type: "numeric",
                    isNullable: true
                },
                {
                    name: "waist",
                    type: "numeric",
                },
                {
                    name: "weight",
                    type: "numeric",
                },
                {
                    name: "user_id",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("avatar");
    }
}


