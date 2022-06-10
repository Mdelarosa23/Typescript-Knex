import { Request, Response } from 'express';
import connection from '../database/connection';

const makeid = (length: any) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

class FormController {
    async create(request: Request, response: Response) {

        const {
            name,
        } = request.body;

        const { fields } = request.body
        const form = {
            name,
        }



        const create = await connection('forms').insert(form);

        const setFields = [] as any;

        fields.forEach((field: any) => {
            field.form_id = create[0];
            setFields.push(field);
        })

        const createFields = await connection('fields').insert(setFields);
        const id = create[0];

        return response.json({
            // id,
            createFields
        });
    }
    async read(request: Request, response: Response) {
        const forms = await connection('forms').select('*');

        return response.json({
            data: forms, success: true
        });
    }
    async update(request: Request, response: Response) {
        const {
            id
        } = request.params;
        const {
            name,
            control_id

        } = request.body;

        const update = {
            name,
            control_id

        };

        const form = await connection('forms').where('id', id).update(update);

        return response.json({
            id,
            ...update
        });


    }
    async delete(request: Request, response: Response) {
        const {
            id
        } = request.params;

        const deleteForm = await connection('forms').where('id', id).delete();

        response.json(deleteForm);
    }
}


export { FormController }