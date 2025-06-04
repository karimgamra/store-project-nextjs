import { fetchFeaturedProducts } from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "../ui/button";
import { CiBoxList } from "react-icons/ci";
import { IoGrid, IoGridOutline } from "react-icons/io5";
import Link from "next/link";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchFeaturedProducts({ search });

  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      <section className="mb-6 flex justify-between items-center">
        <p className="text-lg font-medium">{totalProducts} products</p>
        <div className="flex gap-x-4">
          <Button
            variant={`${layout === "grid" ? "default" : "ghost"}`}
            size={"icon"}
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <IoGrid />
            </Link>
          </Button>
          <Button
            variant={`${layout === "list" ? "default" : "ghost"}`}
            size={"icon"}
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <CiBoxList />
            </Link>
          </Button>
        </div>
      </section>

      <hr />
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            {" "}
            sorry we don not have a products matched your search
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
