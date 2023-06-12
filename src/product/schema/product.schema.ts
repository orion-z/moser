import {
    Prop,
    Schema,
    SchemaFactory
} from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    Name: string;

    @Prop()
    Description: string;

    @Prop()
    Price: number;

    @Prop()
    InStock: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
