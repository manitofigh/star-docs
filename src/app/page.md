---
title: About Star
---

The Star HPC Cluster is a computing facility designed for a variety of research and computational tasks. It combines advanced computing nodes and a high-speed storage system with a suite of software applications. {% .lead %}

Here are some quick links, but before clicking them, there's more to cover on this page if it's your first time landing here!

{% quick-links %}

{% quick-link title="Getting Help" icon="lightbulb" href="/" description="Take a look at the FAQs, how to write good support requests, and where to contact us." /%}

{% quick-link title="Jobs" icon="presets" href="/" description="Jobs here, jobs there, jobs everywhere. What are jobs on the cluster, really?" /%}

{% quick-link title="Software" icon="plugins" href="/" description="Learn how to load and use the software you need." /%}

{% quick-link title="Storage" icon="theming" href="/" description="How much storage is available? How to transfer files back and forth?" /%}

{% /quick-links %}

---

## Overview

We know digesting all the 'overall' information at once — and possibly for the first time — is intimidating. Not everything is supposed to make sense as of now, but it will as you go through more sections of the documentation.

### Software

#### SLURM (Simple Linux Utility for Resource Management)

[Slurm](https://slurm.schedmd.com/documentation.html) is our chosen job scheduler and queueing system that efficiently manages resource allocation, ensuring everyone gets the right amount of resources at the right time.

#### Apptainer (formerly Singularity)

[Apptainer](https://apptainer.org/), another major application on the cluster, is a containerization platform similar to [Docker](https://www.docker.com/) with the major difference that it runs under user privileges instead of `root`. This platform is enhanced by [NGC](https://www.nvidia.com/en-us/gpu-cloud/) (NVIDIA GPU Cloud) which provides access to a wide array of pre-built, GPU-optimized software containers for diverse applications. This integration saves all users a lot of time as they don’t need to set up the software applications from scratch and can just pull and use the NGC images with Apptainer.

The cluster also supports various software applications tailored to different needs: [Python](https://docs.python.org/3.12/tutorial/index.html) and [R](https://www.r-project.org/) for data analysis, [MATLAB](https://www.mathworks.com/products/matlab.html) for technical computing, [Jupyter](https://jupyter.org/) for interactive projects, and [OpenMPI](https://www.open-mpi.org/) for parallel computing. [Anaconda](https://www.anaconda.com/) broadens these capabilities with packages for scientific computing, while [NetCDF](https://www.unidata.ucar.edu/software/netcdf/) manages large datasets. For big data tasks, [Hadoop](https://hadoop.apache.org/) and [Spark](https://spark.apache.org/) offer powerful processing tools.

<!-- {% callout type="warning" title="Oh no! Something bad happened!" %}
This is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link](/) in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.
{% /callout %} -->

## Hardware

### Login Node

### Compute Nodes

- Two Apollo 6500 Gen10+ HPE nodes, _each_ containing 8 NVIDIA A100 SXM GPUs.
- One HPE ProLiant DL385 Gen10+ v2, containing 2 A30 SXM NVIDIA GPUs.
- Two XL675d Gen10+ servers (Apollo 6500 Gen10+ chassis), _each_ containing 8 NVIDIA A100 SXM4 GPUs.
- One HPE DL385 Gen10+ v2 with 2 A30 PCIe GPUs.
- Two HPE DL380a Gen11 servers, _each_ containing 2 NVIDIA H100 80GB GPUs.
- Two Cray XD665 nodes, _each_ containing 4 NVIDIA HGX H100 80GB GPUs.
- One Cray XD670 node, containing 8 NVIDIA HGX H100 80GB GPUs.

#### HPE Apollo 6500 Gen10

| Attribute\Node Name           | gpu1                                                           | gpu2                                                           |
| ----------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| Model Name                    | HPE ProLiant XL675d Gen10 Plus; Apollo 6500 Gen10 Plus Chassis | HPE ProLiant XL675d Gen10 Plus; Apollo 6500 Gen10 Plus Chassis |
| Sockets                       | 2                                                              | 2                                                              |
| Cores per Socket              | 32                                                             | 32                                                             |
| Threads per Core              | 2                                                              | 2                                                              |
| Memory                        | 1024 GiB Total Memory (16 x 64GiB DIMM DDR4)                   | 1024 GiB Total Memory (16 x 64GiB DIMM DDR4)                   |
| GPU                           | 8 SXM NVIDIA A100s                                             | 8 SXM NVIDIA A100s                                             |
| Local Storage (Scratch space) | 407GB                                                          | 407GB                                                          |

#### HPE DL385 Gen10

| Attribute\Node Name           | cn01                                       |
| ----------------------------- | ------------------------------------------ |
| Model Name                    | HPE ProLiant DL385 Gen10 Plus v2           |
| Sockets                       | 2                                          |
| Cores per Socket              | 32                                         |
| Threads per Core              | 2                                          |
| Memory                        | 256GiB Total Memory (16 x 16GiB DIMM DDR4) |
| GPU                           | 2 SXM NVIDIA A30s                          |
| Local Storage (Scratch Space) | 854G                                       |

#### XL675d Gen10+ (Apollo 6500 Chassis)

| Attribute\Node Name           | gpu4                                   | gpu5                                   |
| ----------------------------- | -------------------------------------- | -------------------------------------- |
| Model Name                    | HPE ProLiant XL675d Gen10 Plus Chassis | HPE ProLiant XL675d Gen10 Plus Chassis |
| Sockets                       | 2 (AMD EPYC 7513 @ 2.60 GHz)           | 2 (AMD EPYC 7513 @ 2.60 GHz)           |
| Cores per Socket              | 64 Physical Cores                      | 64 Physical Cores                      |
| Threads per Core              | 2 (128 Logical Cores)                  | 2 (128 Logical Cores)                  |
| Memory                        | 1024 GiB DDR4 3200 RAM                 | 1024 GiB DDR4 3200 RAM                 |
| GPU                           | 8 NVIDIA A100 80GB SXM4 GPUs           | 8 NVIDIA A100 80GB SXM4 GPUs           |
| Local Storage (Scratch Space) | 2x 480GB SSD                           | 2x 480GB SSD                           |

#### HPE DL385 Gen10+ v2

| Attribute\Node Name           | cn02                             |
| ----------------------------- | -------------------------------- |
| Model Name                    | HPE ProLiant DL385 Gen10 Plus v2 |
| Sockets                       | 2 (AMD EPYC 7513 @ 2.60 GHz)     |
| Cores per Socket              | 64 Physical Cores                |
| Threads per Core              | 2 (128 Logical Cores)            |
| Memory                        | 256GiB DDR4 RAM                  |
| GPU                           | 2 NVIDIA A30 24GB HBM2 PCIe GPUs |
| Local Storage (Scratch Space) | 854G                             |

#### HPE DL380a Gen11

| Attribute\Node Name           | gpu6                                         | gpu7                                         |
| ----------------------------- | -------------------------------------------- | -------------------------------------------- |
| Model Name                    | HPE DL380a Gen11                             | HPE DL380a Gen11                             |
| Sockets                       | 2 (Intel Xeon-P 8462Y+ @ 2.8GHz)             | 2 (Intel Xeon-P 8462Y+ @ 2.8GHz)             |
| Cores per Socket              | 64                                           | 64                                           |
| Threads per Core              | 2 (128 Logical Cores)                        | 2 (128 Logical Cores)                        |
| Memory                        | 512 GiB DDR5 RAM                             | 512 GiB DDR5 RAM                             |
| GPU                           | 2 NVIDIA H100 80GB GPUs (NVAIE subscription) | 2 NVIDIA H100 80GB GPUs (NVAIE subscription) |
| Network                       | 4-port GbE, 1-port HDR200 InfiniBand         | 4-port GbE, 1-port HDR200 InfiniBand         |
| Local Storage (Scratch Space) | 1TB SSD                                      | 1TB SSD                                      |

#### Cray XD665 Nodes

| Attribute\Node Name           | cray01                                 | cray02                                 |
| ----------------------------- | -------------------------------------- | -------------------------------------- |
| Model Name                    | Cray XD665                             | Cray XD665                             |
| Sockets                       | 2 (AMD EPYC Genoa 9334 @ 2.7GHz)       | 2 (AMD EPYC Genoa 9334 @ 2.7GHz)       |
| Cores per Socket              | 64                                     | 64                                     |
| Threads per Core              | 2 (128 Logical Cores)                  | 2 (128 Logical Cores)                  |
| Memory                        | 768 GiB DDR5 RAM                       | 768 GiB DDR5 RAM                       |
| GPU                           | 4 NVIDIA HGX H100 80GB SXM GPUs        | 4 NVIDIA HGX H100 80GB SXM GPUs        |
| Network                       | 2-port 10GbE, 1-port HDR200 InfiniBand | 2-port 10GbE, 1-port HDR200 InfiniBand |
| Local Storage (Scratch Space) | 1TB SSD                                | 1TB SSD                                |

#### Cray XD670 Node

| Attribute\Node Name           | cray03                                 |
| ----------------------------- | -------------------------------------- |
| Model Name                    | Cray XD670                             |
| Sockets                       | 2 (Intel Xeon-P 8462Y+ @ 2.8GHz)       |
| Cores per Socket              | 64 Physical Cores                      |
| Threads per Core              | 2 (128 Logical Cores)                  |
| Memory                        | 2048 GiB DDR5 RAM                      |
| GPU                           | 8 NVIDIA HGX H100 80GB SXM GPUs        |
| Network                       | 2-port 10GbE, 1-port HDR200 InfiniBand |
| Local Storage (Scratch Space) | 2TB SSD                                |

### Storage System

Our storage system contains of four HPE PFSS nodes, collectively offering a total of 63TB of storage. You can think of these four nodes as one unified 63TB storage unit as it is a **Parallel File System Storage** component. These nodes work in parallel and are all mounted under **one** mount point on the gpu nodes only (`/fs1`).

## Our vision

Making complex and time-intensive calculations simple and accessible.

### Our Goal

Our heart is set on creating a community where our cluster is a symbol of collaboration and discovery. We are wishing to provide a supportive space where researchers and students can express their scientific ideas and explore unchanted areas. We aim to make the complicated world of computational research a shared path of growth, learning, and significant discoveries for the ones that are eager to learn.

## Operations Team

- Alexander Rosenberg
- Mani Tofigh

## The Board

- Edward H. Currie
- Daniel P. Miller
- Adam C. Durst
- Jason D. Williams
- Thomas G. Re
- Oren Segal
- John Ortega
