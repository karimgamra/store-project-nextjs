"use server";
import db from "@/utils/db";

import { redirect } from "next/navigation";
import { productSchema } from "./shemas";
import { currentUser } from "@clerk/nextjs/server";
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
};
export const fetchAllProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchFeaturedProducts = async ({
  search = " ",
}: {
  search: string;
}) => {
  const allProducts = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return allProducts;
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};

export const createProductAction = async (
  pervState: any,
  formdata: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const data = Object.fromEntries(formdata);
    const validatedFields = productSchema.parse(data);

    await db.product.create({
      data: {
        ...validatedFields,
        image: "/images/product-1.jpg",
        clerkId: user.id,
      },
    });

    return { message: "products created" };
  } catch (error) {
    return { message: "there was an error" };
  }
};
