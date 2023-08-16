import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  sizes: Joi.array().required(),
  deliveryInfo: Joi.string().required(),
  onSale: Joi.string().required(),
  priceDrop: Joi.number().required(),
  imageUrl: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (!isAuthUser || isAuthUser.role !== "admin") {
      return NextResponse.json({
        success: false,
        message: "You are not authorized!",
      });
    }

    const extractData = await req.json();
    const { error } = AddNewProductSchema.validate(extractData);

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newlyCreatedProduct = await Product.create(extractData);

    return NextResponse.json({
      success: newlyCreatedProduct ? true : false,
      message: newlyCreatedProduct
        ? "Product added successfully"
        : "Failed to add the product! Please try again",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}
