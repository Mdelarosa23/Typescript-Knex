import { Request, Response } from 'express';
import connection from '../database/connection';

class PersonController {
    async create(request: Request, response: Response) {
        const {
            first_name,
            last_name,
            age
        } = request.body;

        const person = {
            first_name,
            last_name,
            age
        }

        const create = await connection('persons').insert(person);

        const id = create[0];

        return response.json({
            id,
            ...person
        });
    }
    async read(request: Request, response: Response) {
        const persons = await connection('persons').select('*');

        return response.json({
            data: persons, success: true
        });
    }
    async update(request: Request, response: Response) {
        const {
            id
        } = request.params;
        const {
            first_name,
            last_name,
            age
        } = request.body;

        const update = {
            first_name,
            last_name,
            age
        };

        const person = await connection('persons').where('id', id).update(update);

        return response.json({
            id,
            ...update
        });


    }
    async delete(request: Request, response: Response) {
        const {
            id
        } = request.params;

        const deletePerson = await connection('persons').where('id', id).delete();

        response.json(deletePerson);
    }
}

export { PersonController }