import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('fields', table => {
        table.increments('id').primary();
        table.string('form_id').notNullable();
        table.string('label').notNullable();
        table.string('type').notNullable();

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('fields')
}