---
title: "Platform Architecture"
date: 2023-11-20
---

## System Overview

The NFLDP platform utilizes a **cloud-native, microservices-based architecture** designed for scalability and high availability.

### Core Components

1.  **Ingestion Layer**: Handles raw genomic data upload and validation.
2.  **Processing Pipeline**: Nextflow-based workflows for variant calling and assembly.
3.  **Data Lake**: S3-compatible storage for massive dataset retention.
4.  **Knowledge Graph**: Semantic layer linking genotype to phenotype.

### Tech Stack

*   **Frontend**: Next.js (React) / Hugo (Documentation)
*   **Backend**: Python (FastAPI), Go
*   **Database**: PostgreSQL, Neo4j
*   **Orchestration**: Kubernetes
