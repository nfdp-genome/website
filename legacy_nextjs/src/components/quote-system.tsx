"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useLanguage } from '@/contexts/language-context'
import { Calendar, Clock, Users, FileText, Mail, Phone, CheckCircle } from 'lucide-react'

interface QuoteFormData {
  name: string
  email: string
  phone: string
  organization: string
  serviceCategory: string
  specificService: string
  projectType: string
  sampleType: string
  sampleCount: string
  timeline: string
  budget: string
  description: string
  additionalRequirements: string
  agreeToTerms: boolean
  subscribeNewsletter: boolean
}

export function QuoteSystem() {
  const { t, isRTL } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceCategory: '',
    specificService: '',
    projectType: '',
    sampleType: '',
    sampleCount: '',
    timeline: '',
    budget: '',
    description: '',
    additionalRequirements: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  })

  const serviceCategories = [
    { value: 'core-genomics', label: t('coreGenomics') },
    { value: 'animal-breeding', label: t('animalBreedingGenetics') },
    { value: 'pathogen-research', label: t('pathogenResearch') },
    { value: 'bioinformatics', label: t('bioinformatics') },
    { value: 'consulting', label: t('consulting') },
    { value: 'sample-processing', label: t('sampleProcessing') },
    { value: 'specialized', label: t('specialized') }
  ]

  const projectTypes = [
    { value: 'research', label: 'Academic Research' },
    { value: 'commercial', label: 'Commercial Project' },
    { value: 'clinical', label: 'Clinical/Diagnostic' },
    { value: 'breeding', label: 'Animal Breeding' },
    { value: 'other', label: 'Other' }
  ]

  const sampleTypes = [
    { value: 'dna', label: 'DNA' },
    { value: 'rna', label: 'RNA' },
    { value: 'tissue', label: 'Tissue' },
    { value: 'blood', label: 'Blood' },
    { value: 'plant', label: 'Plant Material' },
    { value: 'microbial', label: 'Microbial' },
    { value: 'other', label: 'Other' }
  ]

  const timelines = [
    { value: 'urgent', label: 'Urgent (< 2 weeks)' },
    { value: 'standard', label: 'Standard (2-4 weeks)' },
    { value: 'flexible', label: 'Flexible (> 4 weeks)' }
  ]

  const budgetRanges = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
    { value: 'discuss', label: 'To be discussed' }
  ]

  const handleInputChange = (field: keyof QuoteFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <CardTitle className="text-2xl text-emerald-600 dark:text-emerald-400">
            Quote Request Submitted!
          </CardTitle>
          <CardDescription>
            Thank you for your interest. Our team will review your requirements and contact you within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Reference ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Get a Custom Quote
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Tell us about your project and we'll provide a detailed quote within 24 hours
        </p>
      </div>

      {/* Quick Info Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Clock className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
            <h3 className="font-semibold">Fast Response</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Within 24 hours</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
            <h3 className="font-semibold">Expert Consultation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">PhD-level scientists</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <FileText className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
            <h3 className="font-semibold">Detailed Proposal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive project plan</p>
          </CardContent>
        </Card>
      </div>

      {/* Quote Form */}
      <Card>
        <CardHeader>
          <CardTitle>Project Information</CardTitle>
          <CardDescription>
            Please provide as much detail as possible to help us understand your requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Organization</label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    placeholder="University/Company Name"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Service Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Service Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Service Category *</label>
                  <Select value={formData.serviceCategory} onValueChange={(value) => handleInputChange('serviceCategory', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories.map(category => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Specific Service</label>
                  <Input
                    value={formData.specificService}
                    onChange={(e) => handleInputChange('specificService', e.target.value)}
                    placeholder="e.g., Whole Genome Sequencing"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sample Type</label>
                  <Select value={formData.sampleType} onValueChange={(value) => handleInputChange('sampleType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sample type" />
                    </SelectTrigger>
                    <SelectContent>
                      {sampleTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Samples</label>
                  <Input
                    value={formData.sampleCount}
                    onChange={(e) => handleInputChange('sampleCount', e.target.value)}
                    placeholder="e.g., 10-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Timeline</label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map(timeline => (
                        <SelectItem key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map(range => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator />

            {/* Project Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Project Description</h3>
              <div>
                <label className="block text-sm font-medium mb-2">Project Details *</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Please describe your project goals, research questions, and any specific requirements..."
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                <Textarea
                  value={formData.additionalRequirements}
                  onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                  placeholder="Any additional information, special requirements, or questions..."
                  rows={3}
                />
              </div>
            </div>

            <Separator />

            {/* Terms and Newsletter */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy *
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.subscribeNewsletter}
                  onCheckedChange={(checked) => handleInputChange('subscribeNewsletter', checked as boolean)}
                />
                <label htmlFor="newsletter" className="text-sm">
                  Subscribe to our newsletter for updates and insights
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || !formData.agreeToTerms}
                className="bg-emerald-600 hover:bg-emerald-700 px-8"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}