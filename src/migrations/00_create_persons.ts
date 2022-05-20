import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('persons', table => {
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.integer('age').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('persons')
}