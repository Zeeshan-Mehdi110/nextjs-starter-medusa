//@ts-nocheck
// import medusaRequest from "@lib/medusa-fetch"
import ProductTemplate from "@modules/products/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllProducts } from "@lib/api/product/list"
type Props = {
  params: { handle: string }
}

async function getProducts(handle: string) {
  let pid = handle;
  const res = await getAllProducts()
  const product = await res.json();
  // const res = await medusaRequest("GET", "/products", {
  //   query: {
  //     handle,
  //   },
  // })

  if (!res.ok) {
    notFound()
  }

  console.log(product)
  return product
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await getProducts(params.handle)
  console.log(product)
  // if (!products?.length) {
  //   notFound()
  // }

  // const product = products[0]

  // return {
  //   title: `${product.title} | Acme Store`,
  //   description: `${product.title}`,
  //   openGraph: {
  //     title: `${product.title} | Acme Store`,
  //     description: `${product.title}`,
  //     images: product.thumbnail ? [product.thumbnail] : [],
  //   },
  // }
}

export default async function CollectionPage({ params }: Props) {
  const { products } = await getProducts(params.handle)
  console.log(products)
  // return <ProductTemplate product={products[0]} />
}
