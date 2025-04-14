"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { ProfessionalSummary } from "@/components/professional-summary"
import { TechnicalKnowledge } from "@/components/technical-knowledge"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Footer } from "@/components/footer"

export function Resume() {
  const [activeTab, setActiveTab] = useState("summary")

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />

      <Card className="mt-8">
        <CardContent className="p-6">
          <Tabs defaultValue="summary" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="summary">Professional Summary</TabsTrigger>
              <TabsTrigger value="skills">Technical Knowledge</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-6">
              <ProfessionalSummary />
            </TabsContent>
            <TabsContent value="skills" className="mt-6">
              <TechnicalKnowledge />
            </TabsContent>
            <TabsContent value="experience" className="mt-6">
              <Experience />
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <Education />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Footer />
    </div>
  )
}
