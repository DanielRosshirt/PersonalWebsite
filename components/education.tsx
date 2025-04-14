import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription>My academic background</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="text-xl font-semibold">Northeastern University</h3>
            <p className="text-sm text-muted-foreground">Boston, MA • May 2021</p>
          </div>
          <p className="mt-1 text-muted-foreground">College of Computer and Information Sciences</p>
          <p className="font-medium">BS in Computer Science and Business Administration - Finance</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Semester in Silicon Valley: Experiential learning program in entrepreneurship</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="text-xl font-semibold">University College Dublin</h3>
            <p className="text-sm text-muted-foreground">Dublin, Ireland • August 2016 - December 2016</p>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>NUin – Freshman Semester Abroad Program</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
