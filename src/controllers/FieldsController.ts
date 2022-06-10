import { Request, Response } from 'express';
import connection from '../database/connection';

class FieldsController {
    async create(request: Request, response: Response) {
        const {
            label,
            type
        } = request.body;

        const person = {
            label,
            type

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
            label,
            type

        } = request.body;

        const update = {
            label,
            type

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

export { FieldsController }