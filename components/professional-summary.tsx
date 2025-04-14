import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProfessionalSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Professional Summary</CardTitle>
        <CardDescription>An overview of my professional background and expertise</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Experienced software engineer proficient in backend design, development, implementation, and testing.
          Demonstrated expertise in AI operations, including the development of AI applications and data lakes.
          Proactive and resourceful in developing and maintaining CI/CD pipelines and testing infrastructures. Strong
          leadership, interpersonal, and teaming skills with a proven ability to work within multi-functional,
          multi-organizational environments to achieve established goals.
        </p>
      </CardContent>
    </Card>
  )
}
