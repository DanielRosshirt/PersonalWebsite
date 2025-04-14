import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function Experience() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Experience</CardTitle>
        <CardDescription>My professional work history</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* J.P. Morgan Chase */}
        <div>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="text-xl font-semibold">J.P. Morgan Chase</h3>
            <p className="text-sm text-muted-foreground">September 2024 - Present</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            JPMC is currently the largest bank in the western world. It facilitates trillions of dollars in transactions
            per day and has offerings in every segment of the Banking sector. The Redshift team within JPMC sits between
            the banks security department and all other application teams (~10,000) requiring a Petabyte level Data
            Lake. Designing and maintaining Infrastructure as code that meets the requirements of the banks security, so
            that the application teams don't have to worry about it.
          </p>

          <div className="mt-4">
            <h4 className="font-medium">
              Software Engineer III - Senior Associate - Allen, TX (September 2024 – Present)
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">Redshift Team – working with a team of 5 engineers</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                Implemented an AWS Lambda to allow for users of our redshift serverless module to recover snapshots from
                Provisioned Clusters and Serverless Namespaces to their Serverless Namespace. A process only possible
                through a tedious breakglass Process requiring the sre team to assume admin and recover the snapshot via
                the UI. Streamlining the company's migration to redshift serverless for a more cost effective Data Lake.
              </li>
              <li>
                Lead a POC for redshiftML where I Identified a bug on the AWS side causing the S3:deleteObject actions
                to be sent from sagemaker instead of redshift. Causing the request to come from an IP outside of our VPC
                violating the bank's security rules.
              </li>
              <li>
                Collaborated with the leadership team on a weekly basis in order to create and update the quarterly
                commitments of the redshift team.
              </li>
              <li>
                Designed and Implemented a makefile with default values for our beta environment in order to allow for:
                quick terraform testing, to facilitate testing all minimum terraform bundle versions in parallel in
                separate workspaces, logging into terraform and aws, linting, running unit tests, and many other common
                tasks.
              </li>
              <li>
                Designed and Implemented a groovy closure which utilized the aws cli in order to get data from
                cloudformation and S3, Parse that data and wrote the appropriate values to a .tfvars file corresponding
                to the environment, prior to the apply run so that those variable can be used during the run.
              </li>
            </ul>
          </div>
        </div>

        <Separator />

        {/* Ductus */}
        <div>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="text-xl font-semibold">Ductus</h3>
            <p className="text-sm text-muted-foreground">September 2021 - August 2024</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Ductus is a global software consulting firm, headquartered in Skelleftea, Sweden, that specializes in
            advanced network automation, service orchestration and cloud solutions.
          </p>

          <div className="mt-4">
            <h4 className="font-medium">Software Engineer - Allen, TX (March 2023 – August 2024)</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Bloomberg, LP – working with our client's AI operations team
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                Implemented a Django application which used a GraphQL API to aggregate Kafka topic subscription data in
                a Postgres database as well as device data.
              </li>
              <li>
                Implemented a front-end that allowed user to see that data in the browser and query new data based on
                user provided fields using Django and Html templates.
              </li>
              <li>Collaborated with the AI operations team in order to model the Postgres database.</li>
              <li>Designed queries and mutations for our GraphQL API.</li>
              <li>Developed a pytest based testing infrastructure.</li>
            </ul>

            <p className="mt-4 text-sm text-muted-foreground">
              Bloomberg, LP – worked with a client team of 20 to develop an inventory discovery application
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Led the development of a testing infrastructure and its integration into the CI/CD pipeline.</li>
              <li>
                Developed an inventory discovery application which aggregates all the device data throughout the company
                into Netbox.
              </li>
              <li>Created TextFSM templates to parse CLI outputs from devices.</li>
              <li>Reviewed and approved peer's pull requests.</li>
            </ul>

            <p className="mt-4 text-sm text-muted-foreground">
              Tellabs - worked with other third-party engineers on CLI data parsing and test development
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-medium">Junior Software Engineer - Maynard, MA (September 2021 – March 2023)</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              TPx - worked on a team of 10 engineers to make VeloCloud Orchestrator their source of truth
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                Responsible for designing, writing, and deploying code to automate service orchestration and network
                automation.
              </li>
              <li>
                Led the backend production deployment of our Itential project as well as many lab environment
                deployments.
              </li>
              <li>
                Wrote automated testing scripts in JavaScript, Python, and Robot Framework; developed a Dockerized
                Jenkins-based testing infrastructure; and developed and maintained a custom JavaScript library used for
                customizing functionally for Itential workflows.
              </li>
              <li>
                Presented directly to clients on a bi-weekly basis, including having presented to the non-technical
                upper management on the value of the testing infrastructure.
              </li>
            </ul>

            <p className="mt-4 text-sm text-muted-foreground">
              Deutsche Telekom – worked with Ductus CTO to develop relationships at DT and build an OpenConfig standards
              documentation capability in preparation for an engagement.
            </p>
          </div>
        </div>

        <Separator />

        {/* Applause */}
        <div>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="text-xl font-semibold">Applause</h3>
            <p className="text-sm text-muted-foreground">January 2020 - September 2020</p>
          </div>
          <div className="mt-2">
            <h4 className="font-medium">Automation Engineer (Northeastern Co-op)</h4>
            <p className="mt-1 text-sm text-muted-foreground">Framingham, MA</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Utilized the Selenium framework to automate TestRail test sets for the administrator panel.</li>
              <li>Wrote automated testing scripts in java and python.</li>
            </ul>
          </div>
        </div>

        <Separator />

        {/* Massachusetts Medical Society */}
        <div>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="text-xl font-semibold">Massachusetts Medical Society</h3>
            <p className="text-sm text-muted-foreground">July 2018 - December 2018</p>
          </div>
          <div className="mt-2">
            <h4 className="font-medium">QA Engineer (Northeastern Co-op)</h4>
            <p className="mt-1 text-sm text-muted-foreground">Waltham, MA</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Facilitated API testing using Postman.</li>
              <li>Assisted the Software Infrastructure team with their migration to the AWS cloud.</li>
              <li>Wrote automated testing scripts in Ruby using the Selenium framework.</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
