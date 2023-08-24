import { Metadata } from "next"
import SizeFinderTemplate from "@modules/sizefinder/templates"

export const metadata: Metadata = {
  title: "sizefinder",
  description: "Find your perfect Fit Size",
}

export default function StorePage() {
  return <SizeFinderTemplate />
}
