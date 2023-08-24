//@ts-nocheck
import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  goods_name,
  goods_id,
  goods_thumb,
  salePrice,
}: ProductPreviewType) => {
  let handle = goods_id
  return (
    <Link href={`/products/${handle}`}>
      <div>
        <Thumbnail thumbnail={goods_thumb} size="full" />
        <div className="text-base-regular mt-2">
          <span>{goods_name}</span>
          <div className="flex items-center gap-x-2 mt-1">
            {salePrice?.amount ? (
              <>
                {salePrice.amount === "sale" && (
                  <span className="line-through text-gray-500">
                    {salePrice.amount}
                  </span>
                )}
                <span
                  className={clsx("font-semibold", {
                    "text-rose-500": salePrice.amount === "sale",
                  })}
                >
                  {salePrice.amount}
                </span>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview
