"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    services: 'Services',
    packages: 'Packages',
    quality: 'Quality',
    contact: 'Contact',
    getQuote: 'Get Quote',
    
    // Hero Section
    animalBreeding: 'Animal Breeding & Pathogen Research',
    title: 'Comprehensive Genomic',
    titleHighlight: 'Services',
    subtitle: 'Advancing animal breeding and pathogen research through cutting-edge genomic technologies and expert scientific consultation',
    searchPlaceholder: 'Search services...',
    exploreServices: 'Explore Services',
    downloadCatalog: 'Download Catalog',
    
    // Services Section
    ourServices: 'Our Services',
    servicesSubtitle: 'Comprehensive genomic solutions tailored to your research and breeding needs',
    servicesAvailable: 'services available',
    
    // Service Categories
    coreGenomics: 'Core Genomic Services',
    animalBreedingGenetics: 'Animal Breeding & Genetics Services',
    pathogenResearch: 'Pathogen Research & Disease Diagnostics',
    bioinformatics: 'Bioinformatics & Data Analysis Services',
    consulting: 'Consulting & Advisory Services',
    sampleProcessing: 'Sample Processing & Quality Control',
    specialized: 'Specialized Applications',
    
    // Package Section
    servicePackages: 'Service Packages',
    packagesSubtitle: 'Flexible pricing tiers to meet your specific needs and budget',
    basicPackage: 'Basic Package',
    premiumPackage: 'Premium Package',
    enterprisePackage: 'Enterprise Package',
    contactForPricing: 'Contact for pricing',
    choosePackage: 'Choose Package',
    
    // Quality Section
    qualityCommitments: 'Quality Commitments',
    qualitySubtitle: 'Our promise of excellence in every service we provide',
    fastTurnaround: 'Fast turnaround times',
    fastTurnaroundDesc: '5-15 business days for most services',
    highQualityData: 'High-quality data',
    highQualityDataDesc: '>85% Q30 for Illumina, >90% Q30 for PacBio',
    comprehensiveReporting: 'Comprehensive reporting',
    comprehensiveReportingDesc: 'Detailed analysis with publication-ready results',
    expertConsultation: 'Expert consultation',
    expertConsultationDesc: 'Access to PhD-level scientists and bioinformaticians',
    confidentiality: 'Confidentiality',
    confidentialityDesc: 'Strict data security and privacy protection',
    continuousSupport: 'Continuous support',
    continuousSupportDesc: 'Ongoing technical assistance and method optimization',
    
    // Contact Section
    contactUs: 'Contact Us',
    contactSubtitle: 'Get in touch with our expert team to discuss your genomic research needs',
    animalBreedingServices: 'Animal Breeding Services',
    pathogenResearchServices: 'Pathogen Research Services',
    bioinformaticsConsultation: 'Bioinformatics Consultation',
    generalInquiries: 'General Inquiries',
    generalInquiriesDesc: 'Send us a message and we\'ll get back to you within 24 hours',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    subject: 'Subject',
    messagePlaceholder: 'Tell us about your project...',
    sendMessage: 'Send Message',
    facilityAddress: '[Your Facility Address]',
    website: 'www.yourgenomicsfacility.com',
    
    // Footer
    footerText: 'Advancing animal breeding and pathogen research through cutting-edge genomic technologies',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    
    // Service Features
    wgsTitle: 'Whole Genome Sequencing (WGS)',
    wgsDesc: 'Comprehensive genomic analysis solutions',
    t2tGenomeTitle: 'T2T Genome Sequencing',
    t2tGenomeDesc: 'Complete telomere-to-telomere genome assembly',
    targetedTitle: 'Targeted Sequencing & Genotyping',
    targetedDesc: 'Cost-effective genomic analysis solutions',
    genomicSelectionTitle: 'Genomic Selection & Breeding Value Estimation',
    genomicSelectionDesc: 'Advanced breeding program optimization',
    quantitativeGeneticsTitle: 'Quantitative Genetics Analysis',
    quantitativeGeneticsDesc: 'Comprehensive genetic analysis services',
    specializedBreedingTitle: 'Specialized Breeding Applications',
    specializedBreedingDesc: 'Custom breeding solutions',
    bovineBreedingValueTitle: 'Bovine Breeding Value Estimation',
    bovineBreedingValueDesc: 'Dairy cattle genomic evaluation services',
    sheepGenotypingTitle: 'Sheep Genotyping Services',
    sheepGenotypingDesc: 'Comprehensive sheep genetic analysis',
    camelGenotypingTitle: 'Camel Genotyping Services',
    camelGenotypingDesc: 'Advanced camel genomic analysis',
    horseGenotypingTitle: 'Horse Genotyping Services',
    horseGenotypingDesc: 'Comprehensive equine genetic analysis',
    pathogenIdTitle: 'Pathogen Identification & Characterization',
    pathogenIdDesc: 'Comprehensive pathogen detection services',
    diseaseSurveillanceTitle: 'Disease Surveillance & Monitoring',
    diseaseSurveillanceDesc: 'Proactive disease monitoring solutions',
    clinicalDiagnosticsTitle: 'Clinical Diagnostics',
    clinicalDiagnosticsDesc: 'Rapid and accurate diagnostic services',
    pipelinesTitle: 'Custom Bioinformatics Pipelines',
    pipelinesDesc: 'Tailored data analysis solutions',
    dataManagementTitle: 'Data Management & Visualization',
    dataManagementDesc: 'Advanced data handling solutions',
    softwareDevTitle: 'Software & Tool Development',
    softwareDevDesc: 'Custom software solutions',
    strategicConsultingTitle: 'Strategic Breeding Consultation',
    strategicConsultingDesc: 'Expert guidance for breeding programs',
    technicalTrainingTitle: 'Technical Training & Education',
    technicalTrainingDesc: 'Comprehensive training programs',
    projectManagementTitle: 'Project Management Services',
    projectManagementDesc: 'Professional project coordination',
    samplePrepTitle: 'Sample Preparation Services',
    samplePrepDesc: 'Professional sample handling',
    qualityAssuranceTitle: 'Quality Assurance',
    qualityAssuranceDesc: 'Comprehensive quality management',
    conservationTitle: 'Conservation Genetics',
    conservationDesc: 'Biodiversity preservation solutions',
    precisionAgTitle: 'Precision Agriculture Integration',
    precisionAgDesc: 'Smart farming genomics',
    emergingTechTitle: 'Emerging Technologies',
    emergingTechDesc: 'Cutting-edge genomic applications'
  },
  ar: {
    // Navigation
    services: 'الخدمات',
    packages: 'الباقات',
    quality: 'الجودة',
    contact: 'اتصل بنا',
    getQuote: 'احصل على عرض سعر',
    
    // Hero Section
    animalBreeding: 'تربية الحيوانات وأبحاث مسببات الأمراض',
    title: 'خدمات الجينوم',
    titleHighlight: 'الشاملة',
    subtitle: 'تطوير تربية الحيوانات وأبحاث مسببات الأمراض من خلال تقنيات الجينوم المتقدمة والاستشارات العلمية الخبيرة',
    searchPlaceholder: 'ابحث عن الخدمات...',
    exploreServices: 'استكشف الخدمات',
    downloadCatalog: 'تحميل الكتالوج',
    
    // Services Section
    ourServices: 'خدماتنا',
    servicesSubtitle: 'حلول جينومية شاملة مصممة خصيصاً لاحتياجاتك البحثية وتربية الحيوانات',
    servicesAvailable: 'خدمة متاحة',
    
    // Service Categories
    coreGenomics: 'خدمات الجينوم الأساسية',
    animalBreedingGenetics: 'خدمات تربية الحيوانات وعلم الوراثة',
    pathogenResearch: 'أبحاث مسببات الأمراض والتشخيصات',
    bioinformatics: 'خدمات المعلوماتية الحيوية وتحليل البيانات',
    consulting: 'خدمات الاستشارات والاستشارات',
    sampleProcessing: 'معالجة العينات ومراقبة الجودة',
    specialized: 'التطبيقات المتخصصة',
    
    // Package Section
    servicePackages: 'باقات الخدمات',
    packagesSubtitle: 'فئات تسعير مرنة لتلبية احتياجاتك وميزانيتك المحددة',
    basicPackage: 'الباقة الأساسية',
    premiumPackage: 'الباقة المميزة',
    enterprisePackage: 'باقة المؤسسات',
    contactForPricing: 'تواصل لمعرفة الأسعار',
    choosePackage: 'اختر الباقة',
    
    // Quality Section
    qualityCommitments: 'التزامات الجودة',
    qualitySubtitle: 'وعدنا بالتميز في كل خدمة نقدمها',
    fastTurnaround: 'أوقات تسريع سريعة',
    fastTurnaroundDesc: '5-15 يوم عمل لمعظم الخدمات',
    highQualityData: 'بيانات عالية الجودة',
    highQualityDataDesc: '>85% Q30 لـ Illumina، >90% Q30 لـ PacBio',
    comprehensiveReporting: 'إبلاغ شامل',
    comprehensiveReportingDesc: 'تحليل مفصل مع نتائج جاهزة للنشر',
    expertConsultation: 'استشارة الخبراء',
    expertConsultationDesc: 'الوصول إلى العلماء والمعلوماتيين الحيويين على مستوى الدكتوراه',
    confidentiality: 'السرية',
    confidentialityDesc: 'أمان بيانات صارم وحماية الخصوصية',
    continuousSupport: 'دعم مستمر',
    continuousSupportDesc: 'المساعدة التقنية المستمرة وتحسين الأساليب',
    
    // Contact Section
    contactUs: 'اتصل بنا',
    contactSubtitle: 'تواصل مع فريق الخبراء لدينا لمناقشة احتياجاتك البحثية الجينومية',
    animalBreedingServices: 'خدمات تربية الحيوانات',
    pathogenResearchServices: 'خدمات أبحاث مسببات الأمراض',
    bioinformaticsConsultation: 'استشارات المعلوماتية الحيوية',
    generalInquiries: 'الاستفسارات العامة',
    generalInquiriesDesc: 'أرسل لنا رسالة وسنتواصل معك خلال 24 ساعة',
    yourName: 'اسمك',
    yourEmail: 'بريدك الإلكتروني',
    subject: 'الموضوع',
    messagePlaceholder: 'أخبرنا عن مشروعك...',
    sendMessage: 'إرسال الرسالة',
    facilityAddress: '[عنوان منشأتك]',
    website: 'www.yourgenomicsfacility.com',
    
    // Footer
    footerText: 'تطوير تربية الحيوانات وأبحاث مسببات الأمراض من خلال تقنيات الجينوم المتقدمة',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    
    // Service Features
    wgsTitle: 'تسلسل الجينوم بالكامل (WGS)',
    wgsDesc: 'حلول تحليل جينومية شاملة',
    t2tGenomeTitle: 'تسلسل الجينوم من الطرف إلى الطرف (T2T)',
    t2tGenomeDesc: 'تجميع جينومي كامل من التيلومير إلى التيلومير',
    targetedTitle: 'تسلسل مستهدف وتحديد النمط الجيني',
    targetedDesc: 'حلول تحليل جينومية فعالة من حيث التكلفة',
    genomicSelectionTitle: 'الاختيار الجينومي وتقدير قيمة التربية',
    genomicSelectionDesc: 'تحسين متقدم لبرامج التربية',
    quantitativeGeneticsTitle: 'تحليل الوراثة الكمية',
    quantitativeGeneticsDesc: 'خدمات تحليل وراثية شاملة',
    specializedBreedingTitle: 'تطبيقات التربية المتخصصة',
    specializedBreedingDesc: 'حلول تربية مخصصة',
    bovineBreedingValueTitle: 'تقدير قيمة تربية الأبقار',
    bovineBreedingValueDesc: 'خدمات التقييم الجينومي للأبقار الحلوبة',
    sheepGenotypingTitle: 'خدمات تحليل الجينات للأغنام',
    sheepGenotypingDesc: 'تحليل وراثي شامل للأغنام',
    camelGenotypingTitle: 'خدمات تحليل الجينات للجمال',
    camelGenotypingDesc: 'تحليل جينومي متقدم للجمال',
    horseGenotypingTitle: 'خدمات تحليل الجينات للخيول',
    horseGenotypingDesc: 'تحليل وراثي شامل للخيول',
    pathogenIdTitle: 'تحديد مسببات الأمراض وتوصيفها',
    pathogenIdDesc: 'خدمات كشف مسببات الأمراض الشاملة',
    diseaseSurveillanceTitle: 'مراقبة الأمراض والرصد',
    diseaseSurveillanceDesc: 'حلول رصد استباقية للأمراض',
    clinicalDiagnosticsTitle: 'التشخيصات السريرية',
    clinicalDiagnosticsDesc: 'خدمات تشخيصية سريعة ودقيقة',
    pipelinesTitle: 'خطوط المعلوماتية الحيوية المخصصة',
    pipelinesDesc: 'حلول تحليل بيانات مصممة خصيصاً',
    dataManagementTitle: 'إدارة البيانات والتصور',
    dataManagementDesc: 'حلول متقدمة للتعامل مع البيانات',
    softwareDevTitle: 'تطوير البرامج والأدوات',
    softwareDevDesc: 'حلول برمجية مخصصة',
    strategicConsultingTitle: 'الاستشارات الاستراتيجية للتربية',
    strategicConsultingDesc: 'إرشادات خبراء لبرامج التربية',
    technicalTrainingTitle: 'التدريب التقني والتعليم',
    technicalTrainingDesc: 'برامج تدريبية شاملة',
    projectManagementTitle: 'خدمات إدارة المشاريع',
    projectManagementDesc: 'تنسيق احترافي للمشاريع',
    samplePrepTitle: 'خدمات تحضير العينات',
    samplePrepDesc: 'تعامل احترافي مع العينات',
    qualityAssuranceTitle: 'ضمان الجودة',
    qualityAssuranceDesc: 'إدارة جودة شاملة',
    conservationTitle: 'علم الوراثة الحفظ',
    conservationDesc: 'حلول الحفاظ على التنوع البيولوجي',
    precisionAgTitle: 'تكامل الزراعة الدقيقة',
    precisionAgDesc: 'جينوميات الزراعة الذكية',
    emergingTechTitle: 'التقنيات الناشئة',
    emergingTechDesc: 'تطبيقات جينومية متطورة'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}