"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import { 
  Users, 
  Microscope, 
  Award, 
  TrendingUp, 
  Calendar, 
  ExternalLink,
  BookOpen,
  Target,
  Zap
} from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  client: string
  category: string
  description: string
  challenge: string
  solution: string
  results: string[]
  metrics: { label: string; value: string; improvement?: string }[]
  date: string
  link?: string
}

export function CaseStudies() {
  const { t, isRTL } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Genomic Selection in Dairy Cattle',
      client: 'National Dairy Research Institute',
      category: 'animal-breeding',
      description: 'Implementation of genomic selection program to improve milk production and disease resistance',
      challenge: 'Traditional breeding methods were slow and couldn\'t keep up with market demands for higher milk yield and disease resistance',
      solution: 'Developed custom SNP panels and implemented genomic estimated breeding values (GEBV) for 5,000 cattle',
      results: [
        '15% increase in milk production within 2 years',
        '30% reduction in disease incidence',
        '50% faster genetic improvement rate',
        'Cost savings of $2M annually'
      ],
      metrics: [
        { label: 'Milk Production', value: '+15%', improvement: 'vs baseline' },
        { label: 'Disease Resistance', value: '+30%', improvement: 'improvement' },
        { label: 'Genetic Gain', value: '+50%', improvement: 'faster' },
        { label: 'ROI', value: '18 months', improvement: 'payback period' }
      ],
      date: '2024-03',
      link: '#'
    },
    {
      id: '2',
      title: 'Pathogen Surveillance in Aquaculture',
      client: 'Global Seafood Corporation',
      category: 'pathogen-research',
      description: 'Comprehensive pathogen monitoring system for shrimp farming operations',
      challenge: 'Recurring disease outbreaks causing $10M annual losses in shrimp farms',
      solution: 'Implemented metagenomic screening and early detection system for 20 shrimp pathogens',
      results: [
        '90% reduction in disease outbreaks',
        'Early detection 7 days before symptoms',
        '25% increase in survival rates',
        '$8M annual savings'
      ],
      metrics: [
        { label: 'Disease Reduction', value: '-90%', improvement: 'outbreaks' },
        { label: 'Early Detection', value: '7 days', improvement: 'before symptoms' },
        { label: 'Survival Rate', value: '+25%', improvement: 'increase' },
        { label: 'Annual Savings', value: '$8M', improvement: 'recovered' }
      ],
      date: '2024-01',
      link: '#'
    },
    {
      id: '3',
      title: 'Conservation Genomics for Endangered Species',
      client: 'Wildlife Conservation Society',
      category: 'conservation',
      description: 'Genetic diversity assessment and breeding program for endangered rhinoceros population',
      challenge: 'Critically low genetic diversity leading to breeding failures and health issues',
      solution: 'Whole genome sequencing of 200 individuals and development of genetic management plan',
      results: [
        'Identified optimal breeding pairs',
        '20% increase in successful births',
        'Maintained 95% genetic diversity',
        'Established genomic database'
      ],
      metrics: [
        { label: 'Birth Success', value: '+20%', improvement: 'increase' },
        { label: 'Genetic Diversity', value: '95%', improvement: 'preserved' },
        { label: 'Population Growth', value: '+12%', improvement: 'annual' },
        { label: 'Database Size', value: '200', improvement: 'genomes' }
      ],
      date: '2023-11',
      link: '#'
    },
    {
      id: '4',
      title: 'Precision Agriculture Integration',
      client: 'AgriTech Solutions Inc.',
      category: 'precision-ag',
      description: 'Integration of genomic data with precision farming for crop optimization',
      challenge: 'Low crop yields and high input costs in traditional farming practices',
      solution: 'Combined genomic selection with environmental data for optimized seed varieties',
      results: [
        '35% increase in crop yields',
        '40% reduction in fertilizer use',
        '25% improvement in drought resistance',
        '$5M increased revenue'
      ],
      metrics: [
        { label: 'Crop Yield', value: '+35%', improvement: 'increase' },
        { label: 'Fertilizer Use', value: '-40%', improvement: 'reduction' },
        { label: 'Drought Resistance', value: '+25%', improvement: 'improvement' },
        { label: 'Revenue', value: '+$5M', improvement: 'annual' }
      ],
      date: '2023-09',
      link: '#'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Studies', icon: BookOpen },
    { id: 'animal-breeding', label: 'Animal Breeding', icon: Users },
    { id: 'pathogen-research', label: 'Pathogen Research', icon: Microscope },
    { id: 'conservation', label: 'Conservation', icon: Target },
    { id: 'precision-ag', label: 'Precision Agriculture', icon: Zap }
  ]

  const filteredStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Success Stories & Case Studies
          </h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover how our genomic solutions have helped organizations achieve breakthrough results
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <Icon className="h-4 w-4" />
              <span>{category.label}</span>
            </Button>
          )
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredStudies.map((study) => (
          <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  <Badge className="mb-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                    {categories.find(c => c.id === study.category)?.label}
                  </Badge>
                  <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                  <CardDescription className="text-base">
                    {study.client}
                  </CardDescription>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  {study.date}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                {study.description}
              </p>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                    Challenge
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                    Solution
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Key Results */}
              <div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                  Key Results
                </h4>
                <ul className="space-y-1">
                  {study.results.slice(0, 3).map((result, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <TrendingUp className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {study.metrics.slice(0, 4).map((metric, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      {metric.label}
                    </div>
                    {metric.improvement && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {metric.improvement}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-between items-center pt-2">
                <Button variant="outline" size="sm">
                  Read Full Study
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  Get Similar Results
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-emerald-700 dark:text-emerald-300 mb-6 max-w-2xl mx-auto">
            Join our growing list of clients who have achieved breakthrough results with our genomic solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline">
              View More Case Studies
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}