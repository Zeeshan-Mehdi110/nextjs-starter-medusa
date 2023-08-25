//@ts-nocheck
"use client"
import { fetchProductsList } from "@lib/data"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useEffect, useState } from "react"
import axios from "axios"
import { getAllProducts } from "@lib/api/product/list"

const FeaturedProducts = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts()
      const products = response.data
      return products
    }
    fetchProducts().then(data => {
      setData(data)
    })
  }, [])

  console.log(data)

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-base-regular text-gray-600 mb-6">
            Latest products
          </span>
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Our newest styles are here to help you look your best.
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
              <li key={product.goods_id}>
                <ProductPreview {...product} />
              </li>
            ))
            : Array.from(Array(4).keys()).map((i) => (
              <li key={i}>
                <SkeletonProductPreview />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
