import { ReactNode } from "react"

interface SlideLayoutProps {
  children: ReactNode
  gradient: string
  className?: string
}

export function SlideLayout({ children, gradient, className = "" }: SlideLayoutProps) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${gradient} text-white p-8 ${className}`}
    >
      {children}
    </div>
  )
}

interface SlideContainerProps {
  children: ReactNode
  maxWidth?: "4xl" | "5xl"
  centered?: boolean
}

export function SlideContainer({
  children,
  maxWidth = "5xl",
  centered = false,
}: SlideContainerProps) {
  const maxWidthClass = maxWidth === "4xl" ? "max-w-4xl" : "max-w-5xl"
  return (
    <div className={`${maxWidthClass} w-full ${centered ? "text-center" : ""}`}>
      {children}
    </div>
  )
}

interface SlideHeaderProps {
  badge?: string
  badgeClass?: string
  title: string
  subtitle?: string
  icon?: ReactNode
}

export function SlideHeader({
  badge,
  badgeClass = "bg-yellow-400 text-emerald-900",
  title,
  subtitle,
  icon,
}: SlideHeaderProps) {
  if (icon) {
    return (
      <div className="flex items-center gap-4 mb-8">
        {icon}
        <div>
          {badge && (
            <span className={`inline-block mb-2 px-3 py-1 rounded-md text-sm font-semibold ${badgeClass}`}>
              {badge}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center mb-10">
      {badge && (
        <span className={`inline-block mb-4 px-4 py-2 rounded-md text-lg font-semibold ${badgeClass}`}>
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-white/90">{subtitle}</p>}
    </div>
  )
}
