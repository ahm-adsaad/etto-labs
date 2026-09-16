"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import { CAL_LINK, CAL_NAMESPACE } from "@/lib/constants"

export function CalEmbed() {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: "100%", height: "100%", minHeight: "520px" }}
      config={{
        layout: "month_view",
        theme: "light",
      }}
    />
  )
}
