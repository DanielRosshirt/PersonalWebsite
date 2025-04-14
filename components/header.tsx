import { Mail, MapPin, Phone } from "lucide-react"

export function Header() {
  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold tracking-tight">DANIEL P. ROSSHIRT</h1>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>Dallas, TX</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail className="h-4 w-4" />
          <a href="mailto:dannyrosshirt@gmail.com" className="hover:text-primary hover:underline">
            dannyrosshirt@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Phone className="h-4 w-4" />
          <a href="tel:+15162097900" className="hover:text-primary hover:underline">
            (516) 209-7900
          </a>
        </div>
      </div>
    </header>
  )
}
