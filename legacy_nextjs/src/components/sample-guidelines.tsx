"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { useLanguage } from '@/contexts/language-context'
import { 
  ChevronDown, 
  ChevronUp, 
  FlaskConical, 
  Thermometer, 
  Package, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Download,
  TestTube,
  Droplets,
  Snowflake,
  Truck
} from 'lucide-react'

interface SampleType {
  id: string
  name: string
  description: string
  requirements: {
    concentration: string
    volume: string
    purity: string
    storage: string
    transport: string
  }
  notes: string[]
}

export function SampleGuidelines() {
  const { t, isRTL } = useLanguage()
  const [expandedSections, setExpandedSections] = useState<string[]>(['dna'])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const sampleTypes: SampleType[] = [
    {
      id: 'dna',
      name: 'DNA Samples',
      description: 'High-quality genomic DNA for sequencing applications',
      requirements: {
        concentration: '≥ 50 ng/μL (preferred: 100-200 ng/μL)',
        volume: '≥ 30 μL (minimum: 20 μL)',
        purity: 'A260/280: 1.8-2.0, A260/230: 2.0-2.2',
        storage: '-20°C for short-term, -80°C for long-term',
        transport: 'Dry ice with sufficient ice packs'
      },
      notes: [
        'Avoid repeated freeze-thaw cycles',
        'Use TE buffer or nuclease-free water',
        'Provide concentration and purity measurements',
        'Include extraction method details'
      ]
    },
    {
      id: 'rna',
      name: 'RNA Samples',
      description: 'High-quality total RNA for transcriptomics applications',
      requirements: {
        concentration: '≥ 100 ng/μL (preferred: 200-500 ng/μL)',
        volume: '≥ 30 μL (minimum: 20 μL)',
        purity: 'A260/280: 1.8-2.1, A260/230: 2.0-2.2',
        storage: '-80°C only',
        transport: 'Dry ice with sufficient ice packs'
      },
      notes: [
        'RNase-free handling is critical',
        'Use RNase inhibitor if possible',
        'Provide RIN score if available',
        'Avoid repeated freeze-thaw cycles'
      ]
    },
    {
      id: 'tissue',
      name: 'Tissue Samples',
      description: 'Fresh, frozen, or preserved tissue for DNA/RNA extraction',
      requirements: {
        concentration: 'N/A (will be extracted)',
        volume: '≥ 25 mg tissue weight',
        purity: 'N/A',
        storage: '-80°C for frozen, RNAlater for preserved',
        transport: 'Dry ice or liquid nitrogen'
      },
      notes: [
        'Flash-freeze in liquid nitrogen when possible',
        'Avoid formalin fixation for NGS applications',
        'Provide tissue source and collection method',
        'Include preservation details'
      ]
    },
    {
      id: 'blood',
      name: 'Blood Samples',
      description: 'Whole blood or extracted nucleic acids from blood',
      requirements: {
        concentration: 'N/A (will be extracted)',
        volume: '2-5 mL in EDTA tubes',
        purity: 'N/A',
        storage: '4°C (short-term), -80°C (extracted)',
        transport: 'Cold chain (2-8°C) within 24 hours'
      },
      notes: [
        'Use EDTA or citrate tubes (avoid heparin)',
        'Invert gently to mix anticoagulant',
        'Process within 24 hours of collection',
        'Record collection time and storage conditions'
      ]
    },
    {
      id: 'plant',
      name: 'Plant Material',
      description: 'Plant tissue, leaves, seeds, or other plant samples',
      requirements: {
        concentration: 'N/A (will be extracted)',
        volume: '≥ 50 mg fresh weight',
        purity: 'N/A',
        storage: '-80°C or silica gel dried',
        transport: 'Dry ice or room temperature for dried samples'
      },
      notes: [
        'Remove secondary metabolites if possible',
        'Provide species information',
        'Include growth conditions and collection stage',
        'Note any special extraction requirements'
      ]
    },
    {
      id: 'microbial',
      name: 'Microbial Samples',
      description: 'Bacterial cultures, fungal samples, or environmental isolates',
      requirements: {
        concentration: '≥ 10^8 cells/mL (culture)',
        volume: '≥ 1 mL culture or agar plate',
        purity: 'N/A',
        storage: '-80°C (glycerol stocks) or 4°C (fresh)',
        transport: 'Cold chain for live cultures'
      },
      notes: [
        'Provide culture media and growth conditions',
        'Include biosafety level information',
        'Specify Gram stain and morphology',
        'Note any antibiotic resistance'
      ]
    }
  ]

  const transportGuidelines = [
    {
      icon: <Snowflake className="h-5 w-5" />,
      title: 'Temperature Control',
      description: 'Maintain appropriate temperature throughout transport'
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: 'Secure Packaging',
      description: 'Use appropriate containers and secondary containment'
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: 'Fast Shipping',
      description: 'Use express shipping services with tracking'
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: 'Documentation',
      description: 'Include all required forms and declarations'
    }
  ]

  const qualityChecks = [
    'Verify sample concentration and purity',
    'Check for contamination or degradation',
    'Ensure proper labeling and documentation',
    'Confirm storage and transport conditions',
    'Review submission forms for completeness'
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <FlaskConical className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Sample Submission Guidelines
          </h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Follow these guidelines to ensure the best results for your genomic analysis
        </p>
      </div>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span>Quick Reference</span>
          </CardTitle>
          <CardDescription>
            Essential requirements for sample submission
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <TestTube className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
              <h3 className="font-semibold">Minimum Volume</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">20-30 μL</p>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Droplets className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold">Concentration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">50-200 ng/μL</p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Thermometer className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <h3 className="font-semibold">Storage</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">-20°C to -80°C</p>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <Truck className="h-8 w-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
              <h3 className="font-semibold">Transport</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Dry ice required</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample Type Guidelines */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Sample Type Specific Guidelines
        </h3>
        
        {sampleTypes.map((sampleType) => {
          const isExpanded = expandedSections.includes(sampleType.id)
          
          return (
            <Card key={sampleType.id} className="overflow-hidden">
              <Collapsible open={isExpanded} onOpenChange={() => toggleSection(sampleType.id)}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FlaskConical className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        <div className="text-left">
                          <CardTitle className="text-lg">{sampleType.name}</CardTitle>
                          <CardDescription>{sampleType.description}</CardDescription>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Requirements
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Concentration:</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {sampleType.requirements.concentration}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Volume:</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {sampleType.requirements.volume}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Purity:</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {sampleType.requirements.purity}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Storage:</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {sampleType.requirements.storage}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Transport:</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {sampleType.requirements.transport}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Important Notes
                        </h4>
                        <ul className="space-y-2">
                          {sampleType.notes.map((note, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {note}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          )
        })}
      </div>

      {/* Transport Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Truck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span>Transport Guidelines</span>
          </CardTitle>
          <CardDescription>
            Ensure safe and proper transport of your samples
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {transportGuidelines.map((guideline, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="flex justify-center text-emerald-600 dark:text-emerald-400 mb-2">
                  {guideline.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1">{guideline.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {guideline.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quality Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span>Pre-Submission Checklist</span>
          </CardTitle>
          <CardDescription>
            Review this checklist before sending your samples
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {qualityChecks.map((check, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {index + 1}
                  </span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {check}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Download Section */}
      <Card>
        <CardHeader>
          <CardTitle>Download Resources</CardTitle>
          <CardDescription>
            Get detailed guidelines and submission forms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Sample Submission Form</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Complete Guidelines PDF</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Shipping Label Template</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}