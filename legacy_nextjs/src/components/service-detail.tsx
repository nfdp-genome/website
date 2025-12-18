"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { useLanguage } from '@/contexts/language-context'
import { 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Download, 
  FileText,
  Microscope,
  Dna,
  Database,
  Zap,
  Target,
  BarChart3,
  Lightbulb
} from 'lucide-react'

interface ServiceDetailProps {
  serviceId: string
  title: string
  description: string
  longDescription: string
  features: string[]
  applications: string[]
  workflow: { step: string; description: string; duration: string }[]
  technicalSpecs: { label: string; value: string }[]
  deliverables: string[]
  timeline: string
  pricing: string
}

export function ServiceDetail({ 
  serviceId, 
  title, 
  description, 
  longDescription, 
  features, 
  applications, 
  workflow, 
  technicalSpecs, 
  deliverables, 
  timeline, 
  pricing 
}: ServiceDetailProps) {
  const { t, isRTL } = useLanguage()
  const [activeTab, setActiveTab] = useState('overview')

  const icons = {
    overview: <FileText className="h-4 w-4" />,
    workflow: <Target className="h-4 w-4" />,
    technical: <Microscope className="h-4 w-4" />,
    deliverables: <Database className="h-4 w-4" />
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 mb-4">
          Premium Service
        </Badge>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Clock className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Fast Turnaround</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{timeline}</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Expert Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">PhD-level consultation</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">ISO/IEC 17025 certified</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card>
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                {icons.overview}
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="workflow" className="flex items-center space-x-2">
                {icons.workflow}
                <span>Workflow</span>
              </TabsTrigger>
              <TabsTrigger value="technical" className="flex items-center space-x-2">
                {icons.technical}
                <span>Technical Specs</span>
              </TabsTrigger>
              <TabsTrigger value="deliverables" className="flex items-center space-x-2">
                {icons.deliverables}
                <span>Deliverables</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Service Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {longDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Applications
                  </h4>
                  <ul className="space-y-2">
                    {applications.map((application, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Lightbulb className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {application}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="workflow" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Workflow
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our streamlined workflow ensures efficient project execution and high-quality results
                </p>
              </div>

              <div className="space-y-4">
                {workflow.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {step.step}
                        </h4>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                      {index < workflow.length - 1 && (
                        <div className="mt-4 ml-4 border-l-2 border-gray-200 dark:border-gray-600 h-4"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technical" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Technical Specifications
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Detailed technical specifications and quality metrics
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {spec.label}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Quality Metrics
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Data Quality (Q30)</span>
                      <span className="text-sm">≥ 85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Coverage Uniformity</span>
                      <span className="text-sm">≥ 90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">On-time Delivery</span>
                      <span className="text-sm">≥ 95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="deliverables" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Deliverables
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Comprehensive deliverables to support your research goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {deliverables.map((deliverable, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <Database className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {deliverable}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                  Additional Support
                </h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">
                  Includes data interpretation assistance, methodology consultation, and post-project support
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Pricing and CTA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Pricing Information</span>
            <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {pricing}
            </Badge>
          </CardTitle>
          <CardDescription>
            Contact us for a detailed quote based on your specific requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
            <Button size="lg" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Technical Documentation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}