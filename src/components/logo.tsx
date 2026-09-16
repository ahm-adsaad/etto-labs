import { cn } from "@/lib/utils"

type LogoProps = {
  variant?: "default" | "reversed" | "icon"
  className?: string
  priority?: boolean
}

export function Logo({ variant = "default", className }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 160 160"
        role="img"
        aria-label="Etto Labs"
        className={cn("size-8", className)}
      >
        <rect width="160" height="160" rx="34" fill="#0D1216" />
        <g
          transform="translate(-62.9 20.3) scale(0.812)"
          fill="none"
          stroke="#A9D6EB"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M145,14 L145,133" />
          <path d="M205,14 L205,111 A22,22 0 0,0 227,133" />
          <path d="M125,47 L225,47" />
        </g>
      </svg>
    )
  }

  if (variant === "reversed") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 744 147"
        role="img"
        aria-label="Etto Labs"
        className={cn("h-auto w-[130px]", className)}
      >
        <g
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14,90 L100,90 A43,43 0 1,0 57,133 A43,43 0 0,0 94.2,111.5" />
          <path d="M145,14 L145,133" />
          <path d="M205,14 L205,111 A22,22 0 0,0 227,133" />
          <path d="M262,90 a43,43 0 1,0 86,0 a43,43 0 1,0 -86,0" />
          <path d="M125,47 L225,47" />
        </g>
        <g
          fill="none"
          stroke="#A9D6EB"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M410,14 L410,133" />
          <path d="M452,90 a43,43 0 1,0 86,0 a43,43 0 1,0 -86,0" />
          <path d="M538,47 L538,133" />
          <path d="M568,14 L568,133" />
          <path d="M568,90 a43,43 0 1,0 86,0 a43,43 0 1,0 -86,0" />
          <path d="M726.6,57.75 A21.5,21.5 0 1,0 708,90 A21.5,21.5 0 1,1 689.4,122.25" />
        </g>
      </svg>
    )
  }

  /* Lockup A: etto ink, crossbar ink, labs blue-600 */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 744 147"
      role="img"
      aria-label="Etto Labs"
      className={cn("h-auto w-[130px] min-w-[110px]", className)}
    >
      <g
        fill="none"
        stroke="#0D1216"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14,90 L100,90 A43,43 0 1,0 57,133 A43,43 0 0,0 94.2,111.5" />
        <path d="M145,14 L145,133" />
        <path d="M205,14 L205,111 A22,22 0 0,0 227,133" />
        <path d="M262,90 a43,43 0 1,0 86,0 a43,43 0 1,0 -86,0" />
      </g>
      <g
        fill="none"
        stroke="#0D1216"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M125,47 L225,47" />
      </g>
      <g
        fill="none"
        stroke="#2E86B2"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M410,14 L410,133" />
        <path d="M452,90 a43,43 0 1,0 86,0 a43,43 0 1,0 -86,0" />
        <path d="M538,47 L538,133" />
        <path d="M568,14 L568,133" />
        <path d="M568,90 a43,43 0 1,0 86,0 a43,43 0 1,0 -86,0" />
        <path d="M726.6,57.75 A21.5,21.5 0 1,0 708,90 A21.5,21.5 0 1,1 689.4,122.25" />
      </g>
    </svg>
  )
}
