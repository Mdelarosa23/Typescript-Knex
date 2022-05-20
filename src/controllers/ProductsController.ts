import { Request, Response } from 'express';
import connection from '../database/connection';

class ProductController {
    async create(request: Request, response: Response) {
        const {
            name,
            description,
            price
        } = request.body;

        const product = {
            name,
            description,
            price
        }

        const create = await connection('products').insert(product);

        const id = create[0];

        return response.json({
            id,
            ...product
        });
    }
    async read(request: Request, response: Response) {
        const products = await connection('products').select('*');

        return response.json(products);
    }
    async update(request: Request, response: Response) {
        const {
            id
        } = request.params;
        const {
            name,
            description,
            price
        } = request.body;

        const update = {
            name,
            description,
            price
        };

        const product = await connection('products').where('id', id).update(update);

        return response.json({
            id,
            ...update
        });


    }
    async delete(request: Request, response: Response) {
        const {
            id
        } = request.params;

        const deleteProduct = await connection('products').where('id', id).delete();

        response.json(deleteProduct);
    }
}

export { ProductController }