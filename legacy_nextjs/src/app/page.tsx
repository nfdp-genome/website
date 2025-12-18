'use client'

import { useState, useEffect } from 'react'
import { Search, Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronUp, Dna, Microscope, Users, Database, Shield, Zap, BookOpen, Award, CheckCircle, FlaskConical, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import { QuoteSystem } from '@/components/quote-system'
import { SampleGuidelines } from '@/components/sample-guidelines'
import { CaseStudies } from '@/components/case-studies'
import { Certifications } from '@/components/certifications'
import { useLanguage } from '@/contexts/language-context'

export default function Home() {
  const { t, isRTL, language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [scrollY, setScrollY] = useState(0)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [isRTL, language])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const serviceCategories = [
    {
      id: 'core-genomics',
      titleKey: 'coreGenomics',
      icon: Dna,
      color: 'bg-emerald-500',
      services: [
        {
          titleKey: 'wgsTitle',
          descKey: 'wgsDesc',
          features: [
            t('De novo genome assembly for new species and breeds'),
            t('Reference genome sequencing with high-quality assemblies'),
            t('Comparative genomics across species and populations'),
            t('Population genomics for genetic diversity analysis'),
            t('Pan-genome analysis for species-wide genetic variation'),
            t('Long-read sequencing (Oxford Nanopore, PacBio)'),
            t('Short-read sequencing (Illumina platforms)')
          ]
        },
        {
          titleKey: 't2tGenomeTitle',
          descKey: 't2tGenomeDesc',
          features: [
            t('Telomere-to-telomere complete genome assembly'),
            t('Resolution of previously inaccessible genomic regions'),
            t('Complete centromere and telomere sequencing'),
            t('Comprehensive repetitive element analysis'),
            t('Structural variant detection in complex regions'),
            t('Chromosome-level genome finishing'),
            t('Reference-grade genomes for animal species')
          ]
        },
        {
          titleKey: 'targetedTitle',
          descKey: 'targetedDesc',
          features: [
            t('Genotyping-by-Sequencing (GBS) for SNP discovery'),
            t('Amplicon sequencing for targeted genomic regions'),
            t('Custom SNP panels design and validation'),
            t('High-density SNP genotyping using microarray platforms'),
            t('Low-density genotyping for routine breeding applications'),
            t('Copy number variation (CNV) detection'),
            t('Structural variant identification and analysis')
          ]
        }
      ]
    },
    {
      id: 'animal-breeding',
      titleKey: 'animalBreedingGenetics',
      icon: Users,
      color: 'bg-blue-500',
      services: [
        {
          titleKey: 'genomicSelectionTitle',
          descKey: 'genomicSelectionDesc',
          features: [
            t('Genomic Estimated Breeding Values (GEBV) calculation'),
            t('Single-step genomic BLUP (ssGBLUP) analysis'),
            t('Training population development and optimization'),
            t('Breeding value prediction for economic traits'),
            t('Cross-validation of genomic prediction models'),
            t('Genomic relationship matrix construction')
          ]
        },
        {
          titleKey: 'quantitativeGeneticsTitle',
          descKey: 'quantitativeGeneticsDesc',
          features: [
            t('Genome-Wide Association Studies (GWAS) for trait mapping'),
            t('Quantitative Trait Loci (QTL) identification and validation'),
            t('Heritability estimation using genomic data'),
            t('Genetic parameter estimation for breeding programs'),
            t('Inbreeding coefficient calculation and monitoring'),
            t('Population structure analysis and admixture mapping')
          ]
        },
        {
          titleKey: 'specializedBreedingTitle',
          descKey: 'specializedBreedingDesc',
          features: [
            t('Parentage verification and pedigree reconstruction'),
            t('Breed composition analysis and authentication'),
            t('Mating advice and optimization strategies'),
            t('Selection index development and implementation'),
            t('Genetic diversity assessment and conservation'),
            t('Crossbreeding program design and evaluation')
          ]
        },
        {
          titleKey: 'bovineBreedingValueTitle',
          descKey: 'bovineBreedingValueDesc',
          features: [
            t('Genomic breeding values for milk production traits'),
            t('Somatic cell count and mastitis resistance evaluation'),
            t('Fertility and reproductive efficiency genomic prediction'),
            t('Longevity and health trait breeding values'),
            t('Conformation and udder characteristics scoring'),
            t('Feed efficiency and production cost optimization'),
            t('Custom genomic selection indices for dairy operations')
          ]
        },
        {
          titleKey: 'sheepGenotypingTitle',
          descKey: 'sheepGenotypingDesc',
          features: [
            t('High-density SNP genotyping for sheep breeds'),
            t('Parentage validation and pedigree verification'),
            t('Wool quality and fiber characteristics genomic analysis'),
            t('Meat production and growth rate genetic evaluation'),
            t('Reproductive efficiency and litter size prediction'),
            t('Disease resistance and parasite resilience screening'),
            t('Breed authentication and adaptation traits for different climates')
          ]
        },
        {
          titleKey: 'camelGenotypingTitle',
          descKey: 'camelGenotypingDesc',
          features: [
            t('Camel breed-specific SNP panel development'),
            t('Parentage validation and pedigree verification'),
            t('Milk production and composition genomic analysis'),
            t('Heat tolerance and desert adaptation traits'),
            t('Disease resistance and immune response evaluation'),
            t('Reproductive performance and fertility assessment'),
            t('Meat and conformation trait genetic evaluation')
          ]
        },
        {
          titleKey: 'horseGenotypingTitle',
          descKey: 'horseGenotypingDesc',
          features: [
            t('High-density SNP genotyping for horse breeds'),
            t('Parentage validation and pedigree verification'),
            t('Performance traits genomic prediction'),
            t('Genetic disease screening and carrier testing'),
            t('Coat color and pattern genetic analysis'),
            t('Speed and endurance trait evaluation'),
            t('Breed authentication and heritage verification')
          ]
        }
      ]
    },
    {
      id: 'pathogen-research',
      titleKey: 'pathogenResearch',
      icon: Microscope,
      color: 'bg-red-500',
      services: [
        {
          titleKey: 'pathogenIdTitle',
          descKey: 'pathogenIdDesc',
          features: [
            t('Metagenomic pathogen screening for comprehensive detection'),
            t('Viral genome sequencing (SARS-CoV-2, influenza, PRRSV, etc.)'),
            t('Bacterial pathogen whole genome sequencing'),
            t('Fungal pathogen genomic analysis'),
            t('Antimicrobial resistance gene detection and profiling'),
            t('Pathogen strain typing and phylogenetic analysis')
          ]
        },
        {
          titleKey: 'diseaseSurveillanceTitle',
          descKey: 'diseaseSurveillanceDesc',
          features: [
            t('Outbreak investigation and source tracking'),
            t('Pathogen evolution monitoring and analysis'),
            t('Vector-borne disease comprehensive panels'),
            t('Zoonotic pathogen detection and characterization'),
            t('Environmental pathogen surveillance'),
            t('Multi-pathogen panels for syndromic diagnostics')
          ]
        },
        {
          titleKey: 'clinicalDiagnosticsTitle',
          descKey: 'clinicalDiagnosticsDesc',
          features: [
            t('Rapid pathogen identification from clinical samples'),
            t('Culture-independent diagnostics using sequencing'),
            t('Veterinary diagnostic support services'),
            t('Foreign animal disease detection and reporting'),
            t('Bovine respiratory disease complex analysis'),
            t('Swine pathogen comprehensive screening')
          ]
        }
      ]
    },
    {
      id: 'bioinformatics',
      titleKey: 'bioinformatics',
      icon: Database,
      color: 'bg-purple-500',
      services: [
        {
          titleKey: 'pipelinesTitle',
          descKey: 'pipelinesDesc',
          features: [
            t('Genome assembly and annotation pipelines'),
            t('Variant calling and annotation workflows'),
            t('Population genetics analysis pipelines'),
            t('Phylogenetic analysis and tree construction'),
            t('Comparative genomics platform development'),
            t('Quality control and data validation protocols')
          ]
        },
        {
          titleKey: 'dataManagementTitle',
          descKey: 'dataManagementDesc',
          features: [
            t('Genomic database development and maintenance'),
            t('Interactive data visualization tools'),
            t('Custom report generation with publication-ready figures'),
            t('Data integration from multiple platforms'),
            t('Statistical analysis and modeling services'),
            t('Machine learning applications in genomics')
          ]
        },
        {
          titleKey: 'softwareDevTitle',
          descKey: 'softwareDevDesc',
          features: [
            t('Custom software for specific research needs'),
            t('API development for data integration'),
            t('Web-based analysis tools for client access'),
            t('Mobile applications for field data collection'),
            t('Cloud-based solutions for large-scale analysis'),
            t('Training materials and user documentation')
          ]
        }
      ]
    },
    {
      id: 'consulting',
      titleKey: 'consulting',
      icon: BookOpen,
      color: 'bg-orange-500',
      services: [
        {
          titleKey: 'strategicConsultingTitle',
          descKey: 'strategicConsultingDesc',
          features: [
            t('Breeding program design and optimization'),
            t('Genomic selection implementation strategies'),
            t('Cost-benefit analysis for genomic technologies'),
            t('Technology transfer and training programs'),
            t('Regulatory compliance guidance'),
            t('Grant writing and research proposal support')
          ]
        },
        {
          titleKey: 'technicalTrainingTitle',
          descKey: 'technicalTrainingDesc',
          features: [
            t('Hands-on workshops in genomic technologies'),
            t('Bioinformatics training programs'),
            t('Continuing education for veterinarians and breeders'),
            t('Student internship and research programs'),
            t('Conference presentations and scientific communication'),
            t('Best practices documentation and protocols')
          ]
        },
        {
          titleKey: 'projectManagementTitle',
          descKey: 'projectManagementDesc',
          features: [
            t('Multi-institutional collaboration coordination'),
            t('Large-scale genomic projects management'),
            t('International research partnerships'),
            t('Quality assurance and accreditation support'),
            t('Technology validation and method development'),
            t('Publication support and scientific writing')
          ]
        }
      ]
    },
    {
      id: 'sample-processing',
      titleKey: 'sampleProcessing',
      icon: Shield,
      color: 'bg-teal-500',
      services: [
        {
          titleKey: 'samplePrepTitle',
          descKey: 'samplePrepDesc',
          features: [
            t('DNA extraction from various sample types'),
            t('RNA isolation and quality assessment'),
            t('Library preparation for sequencing platforms'),
            t('Sample pooling and multiplexing strategies'),
            t('Quality control using advanced instrumentation'),
            t('Sample storage and biobanking services')
          ]
        },
        {
          titleKey: 'qualityAssuranceTitle',
          descKey: 'qualityAssuranceDesc',
          features: [
            t('ISO/IEC 17025 compliant procedures'),
            t('Proficiency testing participation'),
            t('Method validation and verification'),
            t('Contamination monitoring and prevention'),
            t('Data integrity and traceability systems'),
            t('Continuous improvement programs')
          ]
        }
      ]
    },
    {
      id: 'specialized',
      titleKey: 'specialized',
      icon: Zap,
      color: 'bg-pink-500',
      services: [
        {
          titleKey: 'conservationTitle',
          descKey: 'conservationDesc',
          features: [
            t('Endangered species genetic assessment'),
            t('Population bottleneck analysis'),
            t('Genetic rescue program design'),
            t('Habitat fragmentation impact studies'),
            t('Ex-situ conservation planning'),
            t('Reintroduction program genetic support')
          ]
        },
        {
          titleKey: 'precisionAgTitle',
          descKey: 'precisionAgDesc',
          features: [
            t('Genomics-environment interaction studies'),
            t('Climate adaptation trait identification'),
            t('Feed efficiency genomic analysis'),
            t('Welfare trait genetic assessment'),
            t('Sustainable production system optimization'),
            t('Carbon footprint reduction strategies')
          ]
        },
        {
          titleKey: 'emergingTechTitle',
          descKey: 'emergingTechDesc',
          features: [
            t('Single-cell genomics applications'),
            t('Epigenomic analysis services'),
            t('Proteogenomics integration'),
            t('Metabolomics-genomics correlation'),
            t('CRISPR/gene editing support services'),
            t('Artificial intelligence in breeding decisions')
          ]
        }
      ]
    }
  ]

  const servicePackages = [
    {
      nameKey: 'basicPackage',
      price: t('contactForPricing'),
      features: [
        t('Standard genotyping services'),
        t('Basic bioinformatics analysis'),
        t('Standard turnaround times'),
        t('Email support')
      ],
      color: 'border-gray-300',
      badge: t('Popular')
    },
    {
      nameKey: 'premiumPackage',
      price: t('contactForPricing'),
      features: [
        t('Advanced genomic analysis'),
        t('Custom bioinformatics pipelines'),
        t('Priority processing'),
        t('Dedicated project manager'),
        t('Phone/video consultation')
      ],
      color: 'border-blue-300',
      badge: t('Recommended')
    },
    {
      nameKey: 'enterprisePackage',
      price: t('contactForPricing'),
      features: [
        t('Comprehensive genomic solutions'),
        t('Long-term partnership agreements'),
        t('Custom method development'),
        t('On-site training and support'),
        t('Co-development opportunities')
      ],
      color: 'border-purple-300',
      badge: t('Premium')
    }
  ]

  const qualityCommitments = [
    { icon: Zap, titleKey: 'fastTurnaround', descKey: 'fastTurnaroundDesc' },
    { icon: Award, titleKey: 'highQualityData', descKey: 'highQualityDataDesc' },
    { icon: CheckCircle, titleKey: 'comprehensiveReporting', descKey: 'comprehensiveReportingDesc' },
    { icon: Users, titleKey: 'expertConsultation', descKey: 'expertConsultationDesc' },
    { icon: Shield, titleKey: 'confidentiality', descKey: 'confidentialityDesc' },
    { icon: Database, titleKey: 'continuousSupport', descKey: 'continuousSupportDesc' }
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 ${isRTL ? 'font-arabic' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b z-50 transition-all duration-300 ${scrollY > 10 ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <Dna className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Genomic Facility</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                {t('services')}
              </button>
              <button onClick={() => scrollToSection('packages')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                {t('packages')}
              </button>
              <button onClick={() => scrollToSection('quote')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Get Quote
              </button>
              <button onClick={() => scrollToSection('guidelines')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Sample Guidelines
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('certifications')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Certifications
              </button>
              <button onClick={() => scrollToSection('quality')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                {t('quality')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                {t('contact')}
              </button>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <LanguageToggle />
                <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  {t('getQuote')}
                </Button>
              </div>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <button onClick={() => scrollToSection('services')} className={`block w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('services')}
              </button>
              <button onClick={() => scrollToSection('packages')} className={`block w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('packages')}
              </button>
              <button onClick={() => scrollToSection('quote')} className={`block w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md ${isRTL ? 'text-right' : 'text-left'}`}>
                Get Quote
              </button>
              <button onClick={() => scrollToSection('guidelines')} className={`block w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md ${isRTL ? 'text-right' : 'text-left'}`}>
                Sample Guidelines
              </button>
              <button onClick={() => scrollToSection('case-studies')} className={`block w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md ${isRTL ? 'text-right' : 'text-left'}`}>
                Case Studies
              </button>
              <button onClick={() => scrollToSection('certifications')} className={`block w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md ${isRTL ? 'text-right' : 'text-left'}`}>
                Certifications
              </button>
              <button onClick={() => scrollToSection('quality')} className={`block w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('quality')}
              </button>
              <button onClick={() => scrollToSection('contact')} className={`block w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('contact')}
              </button>
              <div className={`flex items-center space-x-2 px-3 py-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                {t('getQuote')}
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm px-4 py-2 mb-4">
              {t('animalBreeding')}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')} <span className="text-emerald-600 dark:text-emerald-400">{t('titleHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 ${isRTL ? 'right-3' : 'left-3'}`} />
              <Input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 pr-4 py-3 text-lg border-gray-300 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
              />
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-lg px-8 py-3">
              {t('exploreServices')}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 dark:border-gray-600 dark:text-gray-300">
              {t('downloadCatalog')}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('ourServices')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {serviceCategories.map((category) => {
              const Icon = category.icon
              const isExpanded = expandedSections.includes(category.id)
              
              return (
                <Card key={category.id} className="overflow-hidden border-2 hover:shadow-lg transition-shadow duration-300 dark:bg-slate-700 dark:border-gray-600">
                  <Collapsible open={isExpanded} onOpenChange={() => toggleSection(category.id)}>
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors">
                        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <div className={`p-3 rounded-lg ${category.color} bg-opacity-10`}>
                              <Icon className={`h-6 w-6 ${category.color.replace('bg-', 'text-')}`} />
                            </div>
                            <div className={`text-${isRTL ? 'right' : 'left'}`}>
                              <CardTitle className="text-xl md:text-2xl">{t(category.titleKey)}</CardTitle>
                              <CardDescription className="text-base mt-1">
                                {category.services.length} {t('servicesAvailable')}
                              </CardDescription>
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
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                          {category.services.map((service, index) => (
                            <div key={index} className="bg-white dark:bg-slate-600 p-6 rounded-lg border border-gray-200 dark:border-gray-500">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t(service.titleKey)}</h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">{t(service.descKey)}</p>
                              <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className={`flex items-start space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('servicePackages')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('packagesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`relative border-2 ${pkg.color} hover:shadow-xl transition-all duration-300 dark:bg-slate-700 dark:border-gray-600 ${pkg.badge === t('Recommended') ? 'scale-105' : ''}`}>
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className={pkg.badge === t('Recommended') ? 'bg-blue-500' : pkg.badge === t('Premium') ? 'bg-purple-500' : 'bg-gray-500'}>
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-6">
                  <CardTitle className="text-xl">{t(pkg.nameKey)}</CardTitle>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.badge === t('Recommended') ? 'default' : 'outline'}>
                    {t('choosePackage')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote System Section */}
      <section id="quote" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <QuoteSystem />
      </section>

      {/* Sample Guidelines Section */}
      <section id="guidelines" className="py-16 px-4 sm:px-6 lg:px-8">
        <SampleGuidelines />
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <CaseStudies />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
        <Certifications />
      </section>

      {/* Quality Commitments */}
      <section id="quality" className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('qualityCommitments')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('qualitySubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityCommitments.map((commitment, index) => {
              const Icon = commitment.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-white dark:bg-slate-700 rounded-full shadow-md mb-4">
                    <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t(commitment.titleKey)}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t(commitment.descKey)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('contactUs')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center dark:bg-slate-700 dark:border-gray-600">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('animalBreedingServices')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">breeding@yourgenomicsfacility.com</p>
                <p className="text-gray-500 dark:text-gray-400">[Your Phone Number]</p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-slate-700 dark:border-gray-600">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 bg-red-100 dark:bg-red-900 rounded-full mb-4">
                  <Microscope className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('pathogenResearchServices')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">pathogens@yourgenomicsfacility.com</p>
                <p className="text-gray-500 dark:text-gray-400">[Your Phone Number]</p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-slate-700 dark:border-gray-600">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                  <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('bioinformaticsConsultation')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">bioinformatics@yourgenomicsfacility.com</p>
                <p className="text-gray-500 dark:text-gray-400">[Your Phone Number]</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto dark:bg-slate-700 dark:border-gray-600">
            <CardHeader className="text-center">
              <CardTitle>{t('generalInquiries')}</CardTitle>
              <CardDescription className="dark:text-gray-300">
                {t('generalInquiriesDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder={t('yourName')} className="dark:bg-slate-600 dark:border-gray-500 dark:text-white" />
                  <Input placeholder={t('yourEmail')} type="email" className="dark:bg-slate-600 dark:border-gray-500 dark:text-white" />
                </div>
                <Input placeholder={t('subject')} className="dark:bg-slate-600 dark:border-gray-500 dark:text-white" />
                <textarea 
                  placeholder={t('messagePlaceholder')}
                  className="w-full min-h-[120px] p-3 border border-gray-300 dark:border-gray-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-slate-600 dark:text-white"
                />
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  {t('sendMessage')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12 text-gray-600 dark:text-gray-300">
            <div className={`flex items-center justify-center space-x-2 mb-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <MapPin className="h-4 w-4" />
              <span>{t('facilityAddress')}</span>
            </div>
            <p>{t('website')}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`flex items-center justify-center space-x-2 mb-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <Dna className="h-6 w-6 text-emerald-400" />
            <span className="text-lg font-semibold">Genomic Facility</span>
          </div>
          <p className="text-gray-400 mb-4">
            {t('footerText')}
          </p>
          <Separator className="bg-gray-700 mb-4" />
          <p className="text-sm text-gray-500">
            © 2024 Genomic Facility. {t('allRightsReserved')} | {t('privacyPolicy')} | {t('termsOfService')}
          </p>
        </div>
      </footer>
    </div>
  )
}