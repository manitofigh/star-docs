---
title: Quickstart
nextjs:
  metadata:
    title: Quickstart
    description: Request an account on StarHPC
---

## Account Access

A Star HPC account is required to access and submit jobs to the Star HPC cluster.

The application process may require justification of the need for HPC resources, detailing the kind of work you intend to do, the resources you expect to use, and sometimes, the anticipated outcomes of your research.

Access to the cluster comes with responsibilities and certain privileges. Your account comes the responsibility to use the resources wisely and efficiently, to respect the shared nature of the environment, and to contribute to the overall HPC community.

Users should understand the policies on data privacy and user responsibilities.

## Getting started on the cluster (account, quota, password)

Before you start using the Star cluster, please read Hofstra University's [Acceptable Use Guidelines](http://www.hofstra.edu/scs/aug).

A general introduction to the Star HPC cluster, research community, and support group be found at [starhpc.hofstra.io](https://starhpc.hofstra.io).

To be able to work on the Star cluster, you must have an approved account on the cluster.

## How to get an account on Star

Members of Hofstra University, Nassau Community College, or Adelphi University, and other researchers affiliated with these institutions in some way may apply for an account.

### Requesting an account

To get an account on Star, you need to complete out the registration form at [Star Account Management Web Application](http://localhost:3000). There, you will need to provide us the following information:

- Your full name, date of birth, and nationality.
- Your position (master student, PhD, PostDoc, staff member,
  visitor/guest).
- Your mobile phone number. This is necessary for recovery of
  passwords.
- Your institutional mail address (i.e. your work email at the
  research institution to which you belong)
- The name and address of the instruction you belong to; also
  including name of the center, institute etc.
- Institution username or a preferred username. If you are a member of
  Hofstra and already have a Hofstra account, you must enter your Hofstra
  username. A username is defined as a sequence of two to thirty lowercase
  alphanumeric characters, where the first letter may only be a lowercase
  character.
- Necessary additional group and account memberships.
- Optional: If you know in advance, please let us know: how many CPU
  hours you expect to use, how much long-term storage space (GB) you
  will need, and what software you will use. Partial answers are also
  welcome. The more we know about the needs of our users, the better
  services we can provide and the better we can plan for the future.

**If you are a staff member and need to get a local project,** we need information about the project:

- Name of the project
- Brief description of the project
- Field of science for the project
- Name of additonal members of the project

**If you are a student, PhD or post-doc,** you need to also provide us
with the name of your advisor and name of the project you are to be a
member of.

Submit the above information through the online registration form.

## Login node

Access to the cluster is provided through SSH [(What is SSH?)](https://www.youtube.com/watch?v=qWKK_PNHnnA&ab_channel=Tinkernut) to the login node. The login node serves as the gateway or entry point to the cluster. It is important to understand that the login node is not for running computationally intensive tasks itself. Instead, it is for tasks such as file management, editing, and job submission. The actual computational work is done on the compute nodes, which you access indirectly by submitting jobs through Slurm, the job scheduling system.

## Scheduler policies

Users should understand the cluster's policies regarding CPU and GPU usage, including time limits and priority settings.

Users are advised to learn how to check their usage statistics to manage the resource allocation efficiently.

## Storage policies

Storage quotas and usage limits are put in place to ensure fair use and equitable distribution of the resources among all users.

It is important to know where to store different types of data (such as large datasets or temporary files).

Your home directory provides a limited amount of storage for scripts, source code, and small datasets.

Project-specific directories may be created upon request for shared storage among multiple accounts.

## Further Reading

To make proper use of the cluster, please familiarize yourself with the basics of using Slurm, fundamental HPC concepts, and the cluster's architecture.

You may be familiar with the `.bashrc`, `.bash_profile`, or `.cshrc` files for environment customization. To support different environments needed for different software packages, environment modules are used. Modules allow you to load and unload various software environments tailored to your computational tasks.
