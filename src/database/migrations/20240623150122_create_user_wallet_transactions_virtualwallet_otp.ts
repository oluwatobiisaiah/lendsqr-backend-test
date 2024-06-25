import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists("kyc_levels", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.bigint("maximum_deposit").notNullable();
        table.string("required_documents").notNullable();
        table.string("description");
        table.timestamps(true, true);
    }).createTableIfNotExists("users", (table) => {
        table.uuid("id").primary();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("email").notNullable();
        table.boolean("email_is_verified").defaultTo(false);
        table.string("phone_number").notNullable();
        table.boolean("phone_is_verified").defaultTo(false);
        table.string("current_otp");
        table.string("profile_picture_url");
        table.integer("kyc_level").defaultTo(0).unsigned().references("id").inTable("kyc_levels");
        table.string("password");
        table.boolean("account_is_disabled").defaultTo(false);
        table.timestamps(true, true);
    }).createTableIfNotExists("otp", (table) => {
        table.increments("id").primary();
        table.string("otp").notNullable();
        table.uuid("user_id").notNullable().references("id").inTable("users");
        table.enum("otp_type", ["forgot_password", "sign_up", "set_up_security_questions"]).notNullable();
        table.timestamps(true, true);
    }).createTableIfNotExists("wallet", (table) => {
        table.uuid("id").primary();
        table.string("wallet_id").unique();
        table.uuid("user_id").notNullable().references("id").inTable("users");
        table.timestamps(true, true);
    }).createTableIfNotExists("backup_wallet", (table) => {
        table.uuid("id").primary();
        table.string("backup_wallet_id").unique();
        table.uuid("user_id").notNullable().references("id").inTable("users");
        table.timestamps(true, true);
    }).createTableIfNotExists("transactions", (table) => {
        table.uuid("id", { primaryKey: true });
        table.bigint("amount").notNullable();
        table.uuid("from_user_id").notNullable().references("id").inTable("users");
        table.uuid("from_wallet_id").notNullable().references("id").inTable("wallet");
        table.uuid("to_user_id").notNullable().references("id").inTable("users");
        table.uuid("to_wallet_id").notNullable().references("id").inTable("wallet");
        table.timestamps(true, true);
    }).createTableIfNotExists("backup_transactions", (table) => {
        table.uuid("id", { primaryKey: true });
        table.bigint("amount").notNullable();
        table.uuid("from_user_id").notNullable().references("id").inTable("users");
        table.uuid("from_wallet_id").notNullable().references("id").inTable("backup_wallet");
        table.uuid("to_user_id").notNullable().references("id").inTable("users");
        table.uuid("to_wallet_id").notNullable().references("id").inTable("backup_wallet");
        table.timestamps(true, true);
    }).createTableIfNotExists("transaction_types", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.boolean("is_active").defaultTo(true);
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTableIfExists("users")
        .dropTableIfExists("otp")
        .dropTableIfExists("wallet")
        .dropTableIfExists("backup_wallet")
        .dropTableIfExists("transactions")
        .dropTableIfExists("backup_transactions")
        .dropTableIfExists("transaction_types")
        .dropTableIfExists("kyc_levels");
}

