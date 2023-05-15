import mongoose from 'mongoose';
import { loadType } from 'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose);




const ProductSchema = new Schema(
    {
        price: {
            type: mongoose.Types.Currency,
            currency: 'EUR',
            get: (v) => v / 100, // convert cents to euros
        },
        expense: {
            type: mongoose.Types.Currency,
            currency: 'EUR',
            get: (v) => v / 100, // convert cents to euros
        },
        transactions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Transaction'
            }
        ],

    },
    { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;