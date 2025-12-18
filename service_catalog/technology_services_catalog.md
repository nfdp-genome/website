# NLFDP Technology-Based Services Catalog
**Genomic Services Organized by Platform & Application**

---

## Table of Contents
1. [DNA Sequencing Services](#dna-sequencing-services)
2. [RNA Sequencing Services](#rna-sequencing-services)
3. [Epigenomics Services](#epigenomics-services)
4. [Microbial & Metagenomics Services](#microbial-metagenomics-services)
5. [Genotyping Services](#genotyping-services)
6. [Long-Read Sequencing](#long-read-sequencing)
7. [Single-Cell Services](#single-cell-services)
8. [Bioinformatics & Analysis](#bioinformatics-analysis)

---

## 1. DNA Sequencing Services

### 1.1 Whole Genome Sequencing (WGS)

**Platform:** Illumina NovaSeq 6000 / NextSeq 2000

**Applications:**
- De novo genome assembly
- Variant discovery (SNPs, InDels, SVs)
- Population genetics studies
- Breed characterization
- Comparative genomics

**Coverage Options:**

| **Coverage** | **Read Length** | **Applications** | **Price (SAR)** |
|--------------|----------------|------------------|-----------------|
| 10x | PE150 | Variant calling, basic analysis | 2,500/sample |
| 30x | PE150 | High-quality variant calling | 4,500/sample |
| 60x | PE150 | SV detection, haplotyping | 8,000/sample |
| 100x+ | PE150 | De novo assembly, clinical | Custom Quote |

**Sample Requirements:**
- DNA: 1-2 μg
- Concentration: ≥20 ng/μL
- 260/280: 1.8-2.0
- DIN ≥7.0

**Turnaround:** 4-6 weeks

---

### 1.2 Whole Exome Sequencing (WES)

**Platform:** Illumina NovaSeq 6000

**Applications:**
- Coding variant discovery
- Disease gene identification
- Functional mutation screening

**Specifications:**
- **Coverage:** 100-150x
- **Target:** ~50-60 Mb exonic regions
- **Capture:** Custom or commercial enrichment kits

**Price:** 3,500 SAR/sample

**Turnaround:** 4-5 weeks

---

### 1.3 Targeted Sequencing / Gene Panels

**Platform:** Illumina MiSeq / NextSeq

**Applications:**
- Candidate gene sequencing
- Custom panel design
- Pathogen typing
- Amplicon sequencing

**Coverage:** 500-5,000x (ultra-deep)

**Panel Size Options:**

| **Panel Type** | **Size** | **Applications** | **Price (SAR)** |
|---------------|---------|------------------|-----------------|
| Single Gene | <50 kb | Targeted mutation screening | 800/sample |
| Small Panel | 50-500 kb | Disease gene panels | 1,200/sample |
| Medium Panel | 0.5-5 Mb | Pathway analysis | 2,000/sample |
| Large Panel | 5-20 Mb | Clinical exome | 3,200/sample |

**Custom Design Fee:** 5,000-15,000 SAR (one-time)

**Turnaround:** 3-4 weeks

---

### 1.4 Telomere-to-Telomere (T2T) Genome Assembly

**Platform:** PacBio HiFi + ONT Ultra-Long Reads (Hybrid)

**Applications:**
- Complete genome assembly
- Gap-free reference genomes
- Structural variation discovery
- Complex repeat resolution

**Specifications:**
- **PacBio HiFi:** 30x coverage
- **ONT Ultra-Long:** 30x coverage (N50 >100 kb)
- **Hi-C:** For scaffolding (optional)

**Price:** 
- Bacterial T2T (3-8 Mb): 18,000 SAR
- Small eukaryote (50-500 Mb): 80,000 SAR
- Large genome (1-3 Gb): 200,000-500,000 SAR

**Sample Requirements:**
- Ultra-high MW DNA (>50 kb)
- 10-20 μg for HiFi
- 20-50 μg for Ultra-Long ONT

**Turnaround:** 12-16 weeks

---

### 1.5 Low-Coverage Sequencing (skim-seq)

**Platform:** Illumina NextSeq

**Applications:**
- Population structure
- Kinship analysis
- CNV screening
- Organellar genome assembly

**Coverage:** 0.1x - 5x

**Price:** 400-1,200 SAR/sample

**Turnaround:** 3-4 weeks

---

### 1.6 Reduced-Representation Sequencing

#### RAD-Seq / ddRAD-Seq
**Applications:** Linkage mapping, QTL analysis, population genetics

**Specifications:**
- 10,000-100,000 SNPs
- Multiplexing: up to 96 samples/lane

**Price:** 450 SAR/sample

#### GBS (Genotyping-by-Sequencing)
**Applications:** Genomic selection, GWAS

**Price:** 350 SAR/sample

**Turnaround:** 4-5 weeks

---

### 1.7 Long-Read DNA Sequencing (Oxford Nanopore)

**Platform:** PromethION P2i / P2 Solo

**Applications:**
- Ultra-long read genome assembly
- Structural variant detection (>50 bp)
- Haplotype phasing
- Complex genomic regions (centromeres, telomeres)
- Gap closure in existing assemblies
- Direct detection of base modifications (5mC, 6mA)
- Real-time sequencing for rapid response

**Read Length:** 
- Standard: 10-50 kb (median)
- Ultra-long: 100 kb - 2 Mb (with optimized extraction)

**Coverage Options:**

| **Coverage** | **Applications** | **Price (SAR)** |
|--------------|------------------|-----------------|
| 30x | Standard assembly, SV detection | 5,500/Gb |
| 50x | High-quality assembly | 5,000/Gb |
| 100x | T2T assembly, complex genomes | 4,500/Gb |
| 150x+ | Ultra-high quality, methylation calling | 4,000/Gb |

**Minimum order:** 10 Gb per sample

**Sample Requirements:**
- **Standard reads (10-50 kb):**
  - DNA: 1-2 μg
  - High MW (>30 kb)
  - 260/280: 1.8-2.0
  - No degradation

- **Ultra-long reads (>100 kb):**
  - DNA: 5-10 μg
  - Ultra-high MW (>100 kb)
  - Fresh extraction required
  - Agarose plug extraction recommended

**Advantages:**
- Real-time data analysis (on-the-fly decision making)
- Long reads resolve complex regions
- Direct methylation detection (no bisulfite)
- Rapid turnaround (results in 24-72 hours)
- Cost-effective for large genomes

**Turnaround:** 
- Standard: 1-2 weeks
- Real-time/Urgent: 24-72 hours (+50%)

---

## 2. RNA Sequencing Services

### 2.1 mRNA-Seq (Poly-A Selection)

**Platform:** Illumina NovaSeq 6000 / NextSeq 2000

**Applications:**
- Gene expression profiling
- Differential expression analysis
- Transcript quantification
- Alternative splicing

**Read Depth Options:**

| **Depth** | **Recommended For** | **Price (SAR)** |
|-----------|---------------------|-----------------|
| 20M reads | Model organisms, well-annotated genomes | 1,500/sample |
| 40M reads | Standard mammalian transcriptomes | 2,200/sample |
| 60M+ reads | Non-model organisms, discovery | 3,500/sample |

**Sample Requirements:**
- Total RNA: 1-2 μg
- RIN ≥7.0
- 260/280: 1.8-2.2

**Turnaround:** 4-5 weeks

---

### 2.2 Total RNA-Seq (Ribo-depletion)

**Applications:**
- Non-coding RNA profiling
- Bacterial transcriptomics
- Degraded RNA samples

**Price:** 2,500 SAR/sample

**Turnaround:** 4-5 weeks

---

### 2.3 Small RNA-Seq

**Platform:** Illumina NextSeq

**Applications:**
- microRNA profiling
- piRNA discovery
- siRNA analysis

**Specifications:**
- Read depth: 10-20M reads
- Read length: SE75

**Sample Requirements:**
- Total RNA: 500 ng - 1 μg
- RIN ≥7.0

**Price:** 1,800 SAR/sample

**Turnaround:** 4 weeks

---

### 2.4 Long-Read Transcriptome Sequencing (Iso-Seq)

**Platform:** PacBio Sequel II / ONT PromethION

**Applications:**
- Full-length isoform discovery
- Fusion transcript detection
- Alternative splicing without assembly

**Price:**
- PacBio Iso-Seq: 8,000 SAR/sample
- ONT Direct RNA-Seq: 6,500 SAR/sample

**Turnaround:** 5-6 weeks

---

### 2.5 Single-Cell RNA-Seq (scRNA-Seq)

**Platform:** 10x Genomics Chromium

**Applications:**
- Cell type identification
- Developmental trajectories
- Tumor heterogeneity

**Price:**
- 3' Gene Expression: 12,000 SAR (up to 10K cells)
- 5' Gene Expression + VDJ: 18,000 SAR

**Turnaround:** 5-6 weeks

---

## 3. Epigenomics Services

### 3.1 Whole Genome Bisulfite Sequencing (WGBS)

**Platform:** Illumina NovaSeq 6000

**Applications:**
- DNA methylation profiling
- Epigenetic variation
- Imprinting studies

**Coverage:** 30x

**Price:** 5,500 SAR/sample

**Sample Requirements:**
- DNA: 2-5 μg
- High quality (DIN ≥8.0)

**Turnaround:** 6-7 weeks

---

### 3.2 Reduced-Representation Bisulfite Sequencing (RRBS)

**Applications:**
- Cost-effective methylation screening
- CpG island profiling

**Coverage:** 50-100x (at CpG sites)

**Price:** 2,800 SAR/sample

**Turnaround:** 5-6 weeks

---

### 3.3 ChIP-Sequencing (ChIP-Seq)

**Platform:** Illumina NextSeq

**Applications:**
- Histone modification mapping
- Transcription factor binding
- Chromatin accessibility

**Read Depth:** 20-40M reads

**Price:** 3,500 SAR/sample

**Turnaround:** 5-6 weeks

---

### 3.4 ATAC-Seq

**Applications:**
- Open chromatin profiling
- Regulatory element discovery

**Read Depth:** 50M reads

**Price:** 3,200 SAR/sample

**Turnaround:** 4-5 weeks

---

## 4. Microbial & Metagenomics Services

### 4.1 16S rRNA Amplicon Sequencing

**Platform:** Illumina MiSeq

**Applications:**
- Bacterial community profiling
- Microbiome diversity analysis
- Taxonomic classification

**Regions:**

| **Region** | **Primers** | **Applications** | **Price (SAR)** |
|-----------|------------|------------------|-----------------|
| V3-V4 | 341F/805R | Standard bacterial profiling | 650/sample |
| V4 | 515F/806R | Gut microbiome | 600/sample |
| Full Length | 27F/1492R | High-resolution taxonomy | 1,200/sample |

**Read Depth:** 50,000-100,000 reads/sample

**Turnaround:** 3-4 weeks

---

### 4.2 ITS Amplicon Sequencing

**Applications:**
- Fungal community profiling
- Mycobiome analysis

**Regions:** ITS1 or ITS2

**Price:** 700 SAR/sample

**Turnaround:** 3-4 weeks

---

### 4.3 Shotgun Metagenomics

**Platform:** Illumina NovaSeq 6000

**Applications:**
- Taxonomic & functional profiling
- Metagenome-assembled genomes (MAGs)
- Antibiotic resistance genes
- Viral discovery

**Read Depth Options:**

| **Depth** | **Applications** | **Price (SAR)** |
|-----------|------------------|-----------------|
| 10M reads | Simple communities | 2,500/sample |
| 25M reads | Standard microbiomes | 3,800/sample |
| 50M reads | Complex communities | 6,000/sample |
| 100M+ reads | Deep profiling, MAG assembly | Custom Quote |

**Turnaround:** 5-6 weeks

---

### 4.4 Metatranscriptomics

**Applications:**
- Active microbial functions
- Gene expression in communities

**Read Depth:** 50M reads

**Price:** 5,500 SAR/sample

**Turnaround:** 6-7 weeks

---

### 4.5 Bacterial Whole Genome Sequencing

**Platform:** Illumina MiSeq / NextSeq

**Applications:**
- Isolate characterization
- Strain typing (MLST, cgMLST)
- AMR detection
- Outbreak investigation

**Coverage:** 100-200x

**Price:** 1,200 SAR/isolate

**Turnaround:** 2-3 weeks

---

### 4.6 Viral Genome Sequencing

**Platform:** Illumina MiSeq / ONT MinION

**Applications:**
- Viral genome assembly
- Vaccine strain matching
- Phylogenetic analysis

**Price:**
- Illumina: 1,800 SAR/sample
- ONT (Real-time): 2,500 SAR/sample

**Turnaround:** 10-14 days

---

## 5. Genotyping Services

### 5.1 SNP Array Genotyping

**Platforms:**
- Illumina Infinium (Custom or catalog arrays)
- Affymetrix Axiom

**Applications:**
- GWAS
- Genomic selection
- Population structure
- Parentage verification

**Array Density Options:**

| **Density** | **SNPs** | **Species Examples** | **Price (SAR)** |
|------------|---------|----------------------|-----------------|
| Low Density | 10K-30K | Livestock, Aquaculture | 150/sample |
| Medium Density | 50K-100K | Livestock breeding | 280/sample |
| High Density | 600K-1M | Cattle, Sheep | 450/sample |
| Custom Array | Variable | Any species | Custom Quote |

**Turnaround:** 3-4 weeks

---

### 5.2 Microsatellite (STR) Genotyping

**Applications:**
- Parentage testing
- Individual identification
- Genetic diversity

**Markers:** 12-25 STRs

**Price:** 250 SAR/sample (trio: 550 SAR)

**Turnaround:** 2 weeks

---

### 5.3 KASP Genotyping

**Applications:**
- Marker-assisted selection
- Trait-specific SNPs
- Validation

**Price:** 15-30 SAR/marker/sample (volume dependent)

**Turnaround:** 1-2 weeks

---

## 6. Long-Read Sequencing

### 6.1 PacBio HiFi Sequencing

**Platform:** PacBio Sequel II / Revio

**Applications:**
- De novo genome assembly
- Structural variant detection
- Haplotype-resolved assembly
- Repeat region sequencing

**Specifications:**
- Read length: 10-25 kb (HiFi)
- Accuracy: >99.9%

**Coverage Options:**

| **Coverage** | **Applications** | **Price (SAR)** |
|--------------|------------------|-----------------|
| 30x | Standard assembly | 18,000/Gb |
| 50x | High-quality assembly | 16,000/Gb |
| 80x+ | T2T assembly | 15,000/Gb |

**Minimum order:** 15 Gb

**Turnaround:** 4-5 weeks

---

### 6.2 Oxford Nanopore Sequencing

**Platform:** PromethION / MinION

**Applications:**
- Ultra-long read assembly
- Real-time sequencing
- Structural variant detection
- Direct RNA/DNA methylation

**Read Length:** 10 kb - 2 Mb

**Coverage Options:**

| **Coverage** | **Platform** | **Price (SAR)** |
|--------------|-------------|-----------------|
| 30x | MinION | 8,000/Gb |
| 50x | PromethION | 6,500/Gb |
| 100x+ | PromethION | 6,000/Gb |

**Turnaround:** 2-4 weeks

---

### 6.3 Hybrid Assembly (Illumina + Long-Read)

**Combination:**
- Illumina short reads (100x) for accuracy
- PacBio/ONT long reads (50x) for contiguity

**Price:** Custom quote based on genome size

**Turnaround:** 6-8 weeks

---

## 7. Single-Cell Services

### 7.1 Single-Cell RNA-Seq (10x Genomics)

**Applications:**
- Cell atlas generation
- Rare cell identification
- Developmental biology

**Product:**
- 3' Gene Expression
- 5' Gene Expression
- Multiome (ATAC + Gene Expression)

**Price:**
- 3' (up to 10K cells): 12,000 SAR
- 5' (up to 10K cells): 15,000 SAR
- Multiome: 25,000 SAR

**Turnaround:** 5-6 weeks

---

### 7.2 Single-Cell ATAC-Seq

**Applications:**
- Single-cell chromatin accessibility
- Regulatory landscape

**Price:** 18,000 SAR (up to 10K cells)

**Turnaround:** 6 weeks

---

### 7.3 Single-Nucleus RNA-Seq

**Applications:**
- Frozen tissue analysis
- Brain tissue profiling

**Price:** 14,000 SAR (up to 10K nuclei)

**Turnaround:** 5-6 weeks

---

## 8. Bioinformatics & Analysis

### 8.1 Standard Analysis Pipelines

**Included with Sequencing Services:**
- Quality control reports
- Read alignment
- Basic variant calling or gene counts

**Add-on Analysis:**

| **Service** | **Applications** | **Price (SAR)** |
|------------|------------------|-----------------|
| Advanced Variant Annotation | Functional impact, pathogenicity | +2,000/project |
| Differential Expression | RNA-Seq analysis | +3,500/project |
| Genome Assembly | De novo or reference-guided | +5,000/genome |
| Phylogenetic Analysis | Tree construction, dating | +2,500/project |
| Metagenome Binning | MAG assembly | +4,000/project |

---

### 8.2 Custom Analysis

**Hourly Consulting:** 150-350 SAR/hour

**Expertise:**
- Population genomics
- GWAS & QTL mapping
- Multi-omics integration
- Machine learning models

**Minimum:** 10 hours

---

## Sample Submission

**General Requirements:**
- Proper labeling (unique ID, species, sample type)
- Quality metrics (NanoDrop, Qubit, Bioanalyzer)
- Chain of custody documentation (for certification)

**Shipping:**
- Ambient: DNA in TE buffer, tissue in ethanol
- Frozen: RNA, fresh tissue (-80°C with dry ice)

**Contact:** lab.operations@nlfdp.gov.sa

---

## Support & Consultation

**Pre-Project Consultation:** Free (30 min)

**Experimental Design Support:** 500 SAR/hour

**Contact:**
- Technical Support: bioinfo@nlfdp.gov.sa
- General Inquiries: info@nlfdp.gov.sa

---

**Document Version:** 1.0  
**Last Updated:** December 2025
