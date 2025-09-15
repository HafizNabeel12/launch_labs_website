import { ElementType } from "react"

type StickerCardProps = {
  title: string
  description: string
  Icon: ElementType
  className?: string
}

export function StickerCard({ title, description, Icon, className = "" }: StickerCardProps) {
  const formattedDescription = description
    .split(".")
    .filter(line => line.trim() !== "")
    .map((line, idx) => (
      <p key={idx} className="text-sm text-gray-300">
        {line.trim()}.
      </p>
    ))

  return (
    <div className={`flex flex-col items-start justify-start rounded-xl bg-gray-800 p-6 text-white ${className}`}>
      <div className="mb-4 text-4xl text-orange-400">
        <Icon />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <div className="space-y-1">{formattedDescription}</div>
    </div>
  )
}
