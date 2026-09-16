import { Problem } from "@/components/sections/problem"
import { Offer } from "@/components/sections/offer"
import { Spine } from "@/components/sections/spine"
import { Measurement } from "@/components/sections/measurement"
import { Verticals } from "@/components/sections/verticals"

/** Static below-fold — no client islands except deferred FAQ + booking. */
export function BelowFold() {
  return (
    <>
      <Problem />
      <Offer />
      <Spine />
      <Measurement />
      <Verticals />
    </>
  )
}
