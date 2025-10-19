"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/contexts/language-context'
import { 
  Award, 
  Shield, 
  CheckCircle, 
  Star, 
  Building,
  Users,
  FileText,
  Globe
} from 'lucide-react'

interface Certification {
  id: string
  name: string
  issuer: string
  description: string
  date: string
  status: 'active' | 'renewed' | 'pending'
  icon: React.ReactNode
  category: string
}

interface Partner {
  id: string
  name: string
  logo: string
  type: 'academic' | 'commercial' | 'government'
  description: string
}

export function Certifications() {
  const { t, isRTL } = useLanguage()

  const certifications: Certification[] = [
    {
      id: '1',
      name: 'ISO/IEC 17025:2017',
      issuer: 'International Organization for Standardization',
      description: 'General requirements for the competence of testing and calibration laboratories',
      date: 'Valid through 2025',
      status: 'active',
      icon: <Award className="h-6 w-6" />,
      category: 'Quality Management'
    },
    {
      id: '2',
      name: 'CLIA Certification',
      issuer: 'Centers for Medicare & Medicaid Services',
      description: 'Clinical Laboratory Improvement Amendments certification for clinical testing',
      date: 'Valid through 2024',
      status: 'active',
      icon: <Shield className="h-6 w-6" />,
      category: 'Clinical Compliance'
    },
    {
      id: '3',
      name: 'CAP Accreditation',
      issuer: 'College of American Pathologists',
      description: 'Gold standard for laboratory accreditation worldwide',
      date: 'Accredited since 2019',
      status: 'renewed',
      icon: <Star className="h-6 w-6" />,
      category: 'Laboratory Excellence'
    },
    {
      id: '4',
      name: 'GLP Compliance',
      issuer: 'FDA',
      description: 'Good Laboratory Practice regulations for non-clinical laboratory studies',
      date: 'Compliant since 2020',
      status: 'active',
      icon: <FileText className="h-6 w-6" />,
      category: 'Regulatory Compliance'
    },
    {
      id: '5',
      name: 'Biosafety Level 2',
      issuer: 'CDC/NIH',
      description: 'Certification for handling moderate-risk infectious agents',
      date: 'Certified facility',
      status: 'active',
      icon: <Shield className="h-6 w-6" />,
      category: 'Safety Standards'
    },
    {
      id: '6',
      name: 'GMP Certification',
      issuer: 'FDA',
      description: 'Good Manufacturing Practice for pharmaceutical products',
      date: 'Valid through 2025',
      status: 'active',
      icon: <CheckCircle className="h-6 w-6" />,
      category: 'Manufacturing Standards'
    }
  ]

  const partners: Partner[] = [
    {
      id: '1',
      name: 'Harvard Medical School',
      logo: '🏛️',
      type: 'academic',
      description: 'Research collaboration in genomics and personalized medicine'
    },
    {
      id: '2',
      name: 'Mayo Clinic',
      logo: '🏥',
      type: 'academic',
      description: 'Clinical genomics and diagnostic development partnership'
    },
    {
      id: '3',
      name: 'USDA Agricultural Research Service',
      logo: '🌾',
      type: 'government',
      description: 'Animal genomics and breeding program development'
    },
    {
      id: '4',
      name: 'Pfizer Inc.',
      logo: '💊',
      type: 'commercial',
      description: 'Pharmacogenomics and drug development collaboration'
    },
    {
      id: '5',
      name: 'World Wildlife Fund',
      logo: '🐾',
      type: 'commercial',
      description: 'Conservation genomics and endangered species protection'
    },
    {
      id: '6',
      name: 'Bill & Melinda Gates Foundation',
      logo: '🌍',
      type: 'commercial',
      description: 'Global health genomics initiatives funding'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'renewed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getPartnerIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <Users className="h-5 w-5" />
      case 'government':
        return <Building className="h-5 w-5" />
      case 'commercial':
        return <Globe className="h-5 w-5" />
      default:
        return <Building className="h-5 w-5" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Certifications & Partnerships
          </h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our commitment to excellence is demonstrated through internationally recognized certifications and strategic partnerships
        </p>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Professional Certifications
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      {cert.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <Badge className={getStatusColor(cert.status)}>
                        {cert.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {cert.category}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Strategic Partners
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <Card key={partner.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{partner.logo}</div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {partner.name}
                    </h4>
                    <div className="flex items-center space-x-2">
                      {getPartnerIcon(partner.type)}
                      <Badge variant="outline" className="text-xs capitalize">
                        {partner.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quality Stats */}
      <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="pt-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Quality & Compliance Metrics
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our commitment to excellence measured in numbers
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                On-Time Delivery
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                99.8%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Data Accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                0
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Compliance Violations
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Quality Monitoring
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}