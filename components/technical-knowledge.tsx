import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TechnicalKnowledge() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Technical Knowledge</CardTitle>
        <CardDescription>Skills and technologies I specialize in</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Programming Languages</h3>
          <p className="mt-2 text-muted-foreground">
            Python, JavaScript, Java, Groovy, Solidity, Ruby, Scala, Racket, C++, MySQL
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Software</h3>
          <p className="mt-2 text-muted-foreground">
            Ansible, Terraform, Docker, Intellij, Git, PyCharm, Selenium, MongoDB, Zshell, Bash, VS code, Postgres,
            Django
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Other Skills</h3>
          <p className="mt-2 text-muted-foreground">
            Postman, Rest, Redshift, AWS Lambda, GraphQL, Itential, Jenkins, Jira, BitBucket, Trello, CI/CD, GitHub
            Desktop, AWS CLI
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
