

## CDA
- AWS is fastest growing computing platform
- Largest public cloud computing platform
- More organizations are outsourcing their IT to AWS
- AWS certifications are most popular and highest paid
- AWS certifications provide different levels of partnership based on the number of certifications a firm has

### Overlap with CSA
- VPC
- Databases
- IAM
- S3
- SQS

### Course Prerequisites
- AWS Free Tier
- Domain Name
- Computer SSH Terminal

### Resourses
- Reddit: amazon web services

# AWS 10,000 Feet

## History
- Launched in 2006
- 2010 all of Amazon moved to AWS
- 2013 Certifications Launched
- 2015 AWS Revenue $6B, 2016 $13B

## Overview Part 1
- Required for CDA exam: Storage, IAM, Management Tools, Databases, Messaging
- AWS Infrastructure consists of Regions, Availability Zones, Edge Locations

### Networking and Content Delivery
- VPC virtual data center where customers deploy their assets
- Route 53 DNS service
- CloudFront
- Direct Connect

### Compute
- EC2, virtual machine
- EC2 Container Service
- Elastic Beanstalk
- Lambda
- Lightsail

## Overview Part 2

### Storage
- S3: Object Based Storage
- Glacier: Archive for S3
- EFS: File based storage 
- Storage Gateway: Links on-premise with S3

### Databases
- RDS
- DynamoDB
- Redshift: Datawarehousing
- Elasticache: Cache data in cloud

### Migration Services
- Snowball
- DMS: Database Migration Service
- SMS: Server Migration Service

### Analytics
- Athena: Run SQL queries on S3
- EMR: Big Data Processing
- CloudSearch: Fully managed Search
- ElasticSearch: Opensource search
- Kinesis: Stream and Analyze real-time data
- Data Pipeline: moves data across services
- QuickSight: BI Tool

## Overview Part 3

### IAM
- In all certification exams
- Inspector: inspects virtual machines
- Certificate Manager: Provides SSL certs
- Directory Service: Active Directory Service
- WAF: Application level protection
- Artifacts: Documentation for Compliance

### Management Tools
- Cloudwatch: Monitor AWS Environment
- CloudFormation: Infrastructure as Code
- CloudTrail: Audit AWS Environment
- OpsWorks: Automate deployment
- Config: Audit AWS Environment
- Service Catalog: Build out pre-approved environments
- Trusted Advisor: Optimize AWS environment

### Application Services
- Step Functions: Application Microservices
- SWF: Coordinate Application & Human Tasks
- API Gateway: API Creation
- App Stream: Stream desktop applications
- Elastic Transcode: Transform media files

### Developer Tools
- CodeCommit: Github
- CodeBuild: Compile Code
- CodeDeploy: Deploy code to EC2 instances
- CodePipeline: Manage code

## Overview Part 4

### AI
- Polly: Turn Text into Voice
- Machine Learning
- Rekognition: Image Recognition

### Messaging
- SNS: Email or text notification
- SQS: Decouple applications with messaging
- SES: Email Notifications

# IAM

## IAM 101
- Allows you to manage users and their level of access
- Centralized control of AWS Account
Shared Access to your AWS Account
- Granular Permissions
- Identity Federation
- Multifactor Authentication
- Temporary Acess for users/devices

### Key Terms
- Users
- Groups: collection of users
- Roles: assigned to AWS resources
- Policies: Documents that define permissions


### STS
- Grants users limited and temporary access to AWS resources from three sources
	- Federation (Active Directory)
	- Federation (mobile apps)
	- Cross-Account access
- Federation: combining or joining a list of users in one domeain with a list of users in another domain
- Identity Broker: a service that allows an identity from point A and joining with point B
- Identity store: services (Active Directory, Google)
- Identities: a user of a service

#### Active Directory Federation


## Active Directory Federation
- Can authenticate with Active Directory (SAML)
- Authentication occurs first, then security credential

## IAM Summary
- IAM consists of users, groups, roles, policies
- Policies are universal and applied to users, groups and roles
- New users have NO permissions when created
- New users are assigned Access Key ID & Secret Access Keys
- Can create and customize password rotation policies
- IAM allows you to manage users, groups and roles with their corresponding access to the AWS platform

# EC2 & Getting Set-Up

## EC2 101
- EC2 is a web service that provides instant resizable compute capacity
- EC2 pricing: on-demand, reserved, spot, dedicated host

- On-demand: use for applications with short-term, upredictable workloads or development work

- Reserved: use for applications with steady, predictable workloads.
	-- Standard
	-- Convertible
	-- Scheduled

- Spot: use for applications with flexible start/end times

- Dedicated Host: use for applications with regulatory requirements or licensing

## Instance Types
- D2: Dense STorage
- R4: Memory Optimzed
- M4: General Purpose
- C4: Compute Optimized
- G2: Graphics Intensive
- I2: High Speed Storage
- F1: Field Programmable Gate Array
- T2: Low Cost General Purpose
- P2: General Purpose GPU
- X1: Memory Optimized

## EBS
- Allows you to create storage volumes and attach to EC2 instances
- Can create a file systems, run a DB or any other way you would use a block device
- EBS is placed in a specific Availability Zone with automatic replication

### EBS Volume Types
- General Purpose SSD (GP2): balances price and performance
- Provisioned IOPS SSD: designed for I/O intensive applications
- Throughput Optimized HDD: use for large amounts of sequential data (big data, data warehousing)
- Cold HDD: low cost storage for infrequently accessed workloads
# DB Overview and Concepts
- Magnetic: Lowest costs and less accessed workloads

### Launching an EC2 Instances
1) Choose Type of AMI
2) Choose Instance Type
3) Configure Instance
	- Network: Choose/Create a VPC
	- Subnet: 1 Subnet = 1 Availability Zone
4) Add Storage - Choose Volume Type
5) Security Group - Virtual Firewall
6) Choose/Create Key Pair

#### Key Points
- Termination Protection is turned off by default, you must turn it on
- On an EBS-backed instance, the default action is for the root EBS volume to be deleted when the instance is terminated
- EBS Root volumes of your DEFAULT AMIs cannot be encrypted. Can be done with third party tool or when creating AMIs

### Security Groups
- Security Group is a virtual firewall
- 1 EC2 Instance can have multiple security groups
- Can have multiple EC2 instances within a security group
- Rules determine where traffic is directed
- Security Groups are stateful - whenever you add in in-bound rule, automically adds out-bound rule
- All inbound traffic is blocked by default
- All outbound traffic is allowed by default
- Changes to security groups take effect immediately
- Cannot block specific IP addresses using Security Groups, instead use NACLs

### Upgrade EBS Volume
- EBS Volumes can be changed on the fly, except for magnetic standard
- Best practice to stop EC2 instance and then change the volume
- Can change volume types by taking a snapshot and then using the snapshot to create a new volume
- Can only scale EBS volumes up, not down
- Volumes must be in the same Availability Zone as the EC2 instances

### EFS
- File storage service for EC2 instances
- Allows for creation and configuration of file system
- Storage capacity is elastic, growing/shrinking automatically as files are added/removed
- Block based storage

### CLI Commands for Exam
- aws ec2 describe-instances
- aws ec2 describe-images
- raws ec2 run-instances

### Bash Scripting
- AWS CLI scripts to work with EC2

### Elastic Load Balancers - Exam Tips
- Two types of load balancers: application, classic
- Exam is focused on classic - Read FAQ
- Instances monitored by ELB are reported as Inservice or OutofService
- Health Checks the instance health
- ELB have their own DNS name, never given an IP Address

### AWS SDKs
- Know supported languages:
	- Android, iOS, JS
	- Java
	- .Net
	- Node.js
	- PHP
	- Python
	- Ruby
	- Go
	- C++
- Some languages have a default languages

### Lambda
- Lambda encapsulates data centers hardware, assembly code, high level languages, operating systems, application layer & apis
- Compute service that runs code in response to an event trigger or HTTP requests
- Pricing based on number and duration of requests

### EC2 Summary and Exam Tips
- Know differences in pricing models: on-demand, spot, reserved, dedicated hosts
- EC2 Instance Types (D)
- EBS Consists of
	- SSD, General Purpose
	- SSD, Provisioned IOPs
	- HDD, Throughput Optimized
	- HDD, Cold
	- HDD, Magnetic
- Cannot mount 1 EBS volume to multiple EC2 instances, instead use EFS
- Termination protetion is turned off by default, but on an EBS backed instance, the default EBS volume to be deleted when the instance is terminated
- Volumes exist on EBS and Snapshots exist on S3
- Snapshots are incremental and are encrypted
- Can share snapshots if they are unencrytped
- Stop EC2 instances before taking a snapshot
- AMIs are regional
- Cloudwatch - standard every 5 minutes, detailed every 1 minute
- Cloudwatch to create Dashboards, Alarms, Events and Logs
- Roles are more secure than storing your Access Key on EC2 instances
- Instance meta-data used to get information about an EC2 instance
- EFS supports Network File System and can scale up to petabytes


# Databases

## DB Overview
- RDS
- NoSQL
- Data Warehousing used for business intelligence for large & complex data sets
- Elasticache web service to deploy, operate and scale in-memory cache in the cloud. Improveds performance of applications by retrieving data from cache vs a DB
- DMS is database migration service
- Redshift

## Dynamo
- Stored on SSD storage
- Spread across 3 geographically distinct data centers
- Eventual Consistent Reads - all copies of data reached within a second

### Pricing
- Provisioned Throughput Capacity
	- Read/Writes (Cost/Activity)
- Total Size of Data (Cost/GB)

### Indexes
- Primary Keys
	- Single Attribute: Partition Key
	- Composite: Partition and Sort Key
- Partition key used as input to an internal hash function - must be unique
- Local Secondary Index: Same Partition Key, Different Sort Key. Only created when table created
- Global Secondary Index: Different Partition and Sort Key. Can be created after table created

### Streams
- Used to capture any kind of modification of the DynamoDb table
- New Items
- Updated Items
- Deleted Items

### Scan vs Query API Calls
- Query operation finds items in a table using only primery key attribute vales. Must provide a partition attribute name and distinct value for search
	- Can optionally provide a sort key attribute name and value with a comparison operator to refine the search results
- By default, a Query returns all of the data attributes for items with specified primary keys
	- Can use ProjectionExpression parameter so that the query only returns some of the attributes, rather than all of them
- Query results are sorted by the sort key. Can use ScanIndexForward to reverse the sort order
- Scan operation examines every item in the table and returns all the data attributes for every item. 
	- Can use ProjectionExpression parameter so that the query only returns some of the attributes, rather than all of them
- Preferrable to use Query over Scan

### Dynamo & Provisioned Throughput
- Read Throughput
	- All reads are rounded up to increments of 4KB
	- Eventually Consistent Reads (default) consist of 2 reads per second
	- Strongly Consistent Reads consist of 1 read per second

- Write Throughput
	- All writes are 1 KB
	- All writes consist of 1 write per second

- Estimating Read Throughput
	(Size of Read (nearest 4kb) / 4kb) * (Nbr Items)
	- Divide by 2 if eventually consistent
- Estimating Write
	(Size x (Nbr Items))

### Web Identity Providers
- Authenticate users with Web Identity providers (facebook, google)
- Uses AssumeRoleWithWebIdentity API
- Steps
	- User Authenticates with ID Provider
	- Passed Token by ID Provider
	- Code calls AssumeRoleWithWebIdentity with Token and specifies the ARN for the IAM role
	- App Can Access DynamoDB

### Other Important Aspects
- Conditional Writes - Can send multiple requests to write an item but will only update for the first time (idempotent)
- Atomic Counters - uses UpdateItem operation to increment/decrement the value of an existing attribute without interfering with other write Requests
- BatchGetItem - read multiple items and tables

### Summary
- Fast, Flexible NoSQL DB fully managed DB
- Supports Document and Key-Value data models
- Stored on SSD Storage
- Spread across 3 geographically distinct data centers
- Eventual Consistent Reads: consistent data across alll copies reached within a second
- Strongly Consistent Reads: read returns a result that reflects a writes that received a successful response prior to the read
- Primary Keys: Partition or Composite
- Partition key used as input to an internal hash function. The output of the hash function determines where the partition physically stores the data
- No two items in a table can have the same partition key value
- Indexes: Local Secondary, Global Secondary
- Streams: Event notification of changes in Dynamo Tables
- Query finds items in a table using only the primary key attribute values
- Scan examines every item in the table and returns all the data attributes for every item
- Throughput Calculations
- Authentication Steps

# SQS
- Web service for a message queue for components of an application to send/receive messages that are awaiting processing
- Decouples components
- Messages can contain up to 256KB of text in any format
- The queue acts as buffer between the component producing and saving data, and the component receiving the data for processing
- The queue resolves issues that arise if the producer is working faster than the consumer can process it, or if the producer/consumer are intermittently connected to the network
- Ensures delivery of each message at least once and supports multiple readers and writers in the same queue
- A single queue can be used simultaneously by many distributed application components with no need for those components to coordinate with each other to share the queue
- Does not guarantee FIFO processing of messages
- SQS PULLS messages, never pushes

#### Exam Tips
- Does not offer FIFO
- 12 Hour visibility time out
- Provides at least once delivery of all messages
- 256kb message size
- First 1 million requests are free, $0.50 per 1 million requests per month
- SQS long polling can retrieve messages from SQS queues, makes it easy and inexpensive to retrieve messages. Max time = 20 seconds

# SNS
- Web service for send notifications from the cloud
- Provides a highly scalable, flexible and cost effective capability to publish messages from an application and immediately deliver them to subscribers or other applications
- Follows the pub-sub messaging architecture with notifications being delivered to clients using a 'push' mechanism, eliminating the need for polling
- Messages stored redundantly across availability zones
- A topic is an access point for allowing recipients to dynamically subscribe to identical copies of the same notification
- Costs 
	- $0.50 per 1 million requests 
	- $0.06 per 100,000 notification deliveries over HTTP
	- $0.75 per 100 over SMS
	- $2.00 per 100,000 over email
- Message Protocols
	- HTTP/HTTPS
	- Email/Email-JSON
	- AWS SQS
	- Application

# SWF
- Service to coordinate work across distributed application components
- Tasks represent invocations of various processing steps in an application which can be performed by executable code, web service calls, human actions or scripts
- Workers are programs that interact with SWF to get and process tasks, then return the results
- Decider is a program that controls the coordination of tasks
- Workers and decider run on EC2, SWF brokers their interaction, by storing, assigning and monitoring tasks
- Domains isolate a set of types, executions, and tasks lists from others within the same account.
- Max workflow can be 1 year (measured in seconds)
- Comparison of SWF and SQS
	- SWF task oriented, SQS message oriented
	- SWF ensures that a task is only assigned once
	- SQS need to handle duplicate messages
	- SWF tracks all the tasks and events
	- SQS requires DIY implementation of tracking

# EBS
- Quickly deploy and scale an applicaiton
- Ability to provision an application
- Focused on infrastructure components and performance, not configuration and specifications
- Applications can have multiple environments and versions
- Applications can be split into tiers
- Can update application/configuration

# CloudFormation
- Twelve Hour deep-dive available
- Converts the provisioning and updating of IT infrastructure as code
- Do not need to determine order of AWS services, taken care of by CloudFormation
- Can modify and update resources in a controlled and predictable way - version control
- CloudFormation Template: architectural diagram in JSON/YAML used to CRUD AWS resources
- CloudFormation Stack: output/result of template
- Mandatory Elements: List of AWS Resources and their configuration values
- Optional Elements: Template file format and version number, parameters
- Automatic rollback on error is enabled
- Charged for errors
- Stacks can wait for applications to be provisioned using "WaitCondition"
- Supports Route53
- Supports IAM Role Creation and Assignment

# Route53 & DNS
## DNS 101
- DNS converts human readable domain names to IP addresses
- IP addresses are used by computers to identify on the network
- Two forms of IP addresses
	- IPv4: 32 bit field
	- IPv6: 128 bit field
- Top Level Domains: .com, .gov
	- Controlled by IANA
- Domain Registrars are authorities who can assign domain names directly under top level domains, registered under ICANN which enforces uniqueness of domain names
	- Each domain name becomes registered in a central DB known as WhoIs
- SOA Records store info about
	- Name of server that supplied data for the zone
	- Admin of the zone
	- Data for seconds for updates, retry, expiration, TTL
- NS records
	- Stands for Name Server records used by Top Level Domains to direct traffic
- A Records
	- Fundamental type of DNS records
	- Translates the name of the domain to the IP address
- TTL Record
	- Length of time a DNS record is cached
- CNAME
	- Used to resolve one domain to another
- Alias Record
	- used to map resource recordset in your hosted zone to ELB/CloudFront
	- similar to CNAME
	- Key difference CNAME cannot be used for naked domain names
### Exam Tips
- ELBS do not have pre-defined IPv4 address, you resolve to them using a DNS
- Understand the difference between an Alias and a CNAME
- Always choose Alias Record over CNAME to prevent charges

### Routing Policy
- Simple: default, used when a single resource performs a given funciton in your domain
- Weighted: splits traffic based on assigned weights
- Latency: routes traffic based on the lowest network latency for end users
- Failover: used in active/passive set-up
- Geolocation: route traffic based on user location

### Summary
- ELBs do not have pre-defined IPv4 addresses, resolved using DNS Name
- Understand difference between Alias Record and CNAME. Choose Alias over CNAME
- Routing Policies and use cases

# VPC
- A VPC is a datacenter
- AWS VPC provisions a logical isolated section of AWS Cloud to launch AWS resources in a customer defined network
- Can create hardware VPN connection between customer corporate data center and the VPC (Hybrid Cloud)
- Can launch instances into a subnet, assign custom IP address ranges within each subnet, configure route tables between subnets
- Create internet gateway and attach it to the VPC (1 IGW per VPC)
- Instance security groups

## Default VPC vs Custom VPC
- Default is user friendly and immediately deployable
	- Subnets have a route to the internet
	- EC2 instance has both public and private IP address
- VPC peering allows you to connect one VPC to another via a direct network route using private IP addresses
	- Instances behave as if on same network
	- Can peer VPC with other AWS accounts
	- Star configuration - 1 central VPC

## Exam Tips
- VPC is a logical datacenter in AWS
- Consists of IGW, Route Table, NACL, Subnet and Security Group
- 1 Subnet = 1 Availability Zone
- Security Groups are Stateful, NACL are stateless
- NO transitive Peering (Star configuration)

## Building Custom VPC
- Create VPC - choose CIDR Block range
- Create Subnets
- Create EC2 Instance - connect to VPC
- Set Security Group

## NAT Instances and Gateways
- NAT Instance - EC2 instance that acts as a gateway to the internet, disabled source destination, single point of failure, must be in public subnet and route out to internet
- NAT Gateway, sits in public subnet, update route tables to point at Gateway, preferred for production

## Access Control List
- Operates at the subnet level and provides granular security rules
- Stateless, return traffic must be explicitly allowed by rules
- 1 subnet = 1 AZ = 1 ACL
- Your VPC automatically becomes a default network ACL allowing inbound & outbound traffic
- Custom ACL by default denies inbound & outbound traffic until rules are added
- Each subnet in your VPC must be associated with a network ACL - automatically associated with default unless explicitly assigned
- Network ACL contains a numbered list of rules, evaluated in order, lowest to highest
- ACL has seperate inbound & outbound rules, each can allow/deny traffic
- Network ACL are stateless

## NAT vs Bastions
- NAT used to provide internet traffic to EC2 instances in private subnets
- A Bastion securely administers EC2 instances in private subnets

## VPC Flow Logs
- Create an IAM role
- VPC Dashboard - create VPC Logs
- Streams data into CloudWatch

## Exam Tips
- Think of VPC as a logical datacenter in AWS
- Consists of IGW, Route Tables, NACLs, Subnets, Security Groups
- 1 subnet = 1 Availability zone
- Security Groups are stateful, NACL are stateless
- Can peer VPCs in same or different AWS accounts
- No Transitive Peering
- When creating a NAT instance, disable Source/Destination checks on the instance
- NAT instances must be in a public subnet and have an Elastic IP address
	- Must be a route out of private subnet to teh NAT instance
	- The amount of traffic taht NAT instances supports depends on size
	- Create high availability using autscaling groups, multiple subnets in different Availability zones and a script to automate failover
	- Behind a security group
- NAT gateways preferred by the enterprise, automatically assigned IP address, not associated with security groups
- VPC comes with a default NACL, which denies all traffic until rules are added
- Each subnet must be assoicated with NACL
- Can associate a NACL with multiple subnets, but a subnet can only be associated with one NACL
- Block IP address using NACL not security groups
- Bastion used to securely administer EC2 instances in private subnets
	- Use autoscaling group and route53 for failover
- ELB need to be in 2 public subnets in 2 different availability zones


# S3

## Basics
- Object based storage (flat files)
- Data Spread across multiple devices and regions
- Unlimited Storage
- Files size up to 5TB

## Data Consistency
- Read after Write consistency for PUTS of new objects
- Eventual consistency for overwrite PUTS & Deletes
- S3 is object based comprised of:
	- Key: file name of object
	- Value: data
	- Version ID
	- Metadata

## S3 Transfer Acceleration
- Transfers files over long distances between users and S3 buckets using CloudFront

## Create S3 Website
- When using Route53 with S3, bucket name must be the same as Domain Name
- Example, domain: hotmail.com, S3: hotmail

## CORS
- Under Permissions, enable CORS
- Check the URLs

## Version Control
- File size is the sum of all the versions saved in S3

## Cross Region Replication
- Versioning must be enabled on both the source and destination buckets
- Regions must be unique
- files in an existing bucket are not replicated automatically. However, subsequent updates will be replicated
- Delete markers are replicated
- Deleting invidual versions or delete markers will not be replicated

## Lifecycle Management
- Can be used along with versioning
- Can be applied to current and previous versions
- Following acitons are allowed
	- Transition to the Standared-IA
	- Archive to Glacier
	- Permanently Delete

## CloudFront
- Edge Location: Location where content will be cached
- Origin: All files the CDN will distribute. Can be an S3 bucket, EC2 instance, ELB or Route53
- Distribution: name given to the CDN which consists of Edge Locations
- Can be used to deliver entire website and other AWS services
- Objects are cached for life of TTL

## S3 Security and Encryption
- Buckets are private by default
- Control of access done by:
	- Bucket Policies
	- Access Control Lists
- Encryption
	- In Transit: SSL/TLS
	- Rest
		- Server Side
			- S3 Managed Keys: SSE-3
			- AWS KMS: SSE-KMS
			- Customer Provided: SSE-C
		- Client Side		

## Storage Gateway
- Service that connects on-premise software applicance with cloud-based storage for seamless integration. Securely store data in AWS
- Downloads as a VM image installed in data center
- Types
	- File Gateway (NFS): S3 (flat files)
	- Volumes Gateway (iSCSI): Block
		- Stored: entire dataset stored on site and backed up on cloud
		- Cached: entire data set stored on S3 and most frequently accessed data is cached on site
	- Tape Gateway (VTL)
		- Used for backup

## Snowball
- Replaces AWS Import/Export
- Can import/export to/from S3
- Three Types of Snowball
	- Snowball: petabyte scale data transport to load data into AWS
	- Snowball Edge: smaller storage but with compute capacity
	- Snowmobile: petabyte or greater scale data transport to load into AWS

## S3 Transfer Acceleration
- Uses CloudFront Edge Network to accelerate uploads to S3
- Instead of directly uploading to S3 bucket, can use distinct URL to upload directly to an edge location which will transfer the file to S3


## Summary
- S3 is object based storage, file size 0 - 5TB
	- Unilimited storage
	- S3 Universal namespace, file names must be unique
- Consistency Model
	- Read after Write consistency for PUTS of new objects
	- Eventual consistency for overwrite PUTS and DELETES
- S3 Storage Classes/Tiers
	- S3
	- S3-IA
	- S3-RRS
	- Glacier
- Core Fundamentals
	- Key/Value Store
	- VersionID
	- MetaData
	- ACLs
- Versioning
	- Great backup tool
	- Once enabled, can only be suspended
	- Integrates with Lifecycle rules
	- Versioning MFA Delete can be used for an additional layer of security
- Life cycle management
	- Can be used with versioning
	- Can be applied to current/previous versions
	- Transition to S3-IA
	- Archive to Glacier
	- Permanently Delte
- CloudFront
	- Edge Location
	- Origin
	- Distribution: name given to CDN
		- Web
		- RMTP
	- Objects cached for TTL
- Securing Buckets
	- Private by Default
	- Access Control Lists
	- Can configure access logs
	- Encryption
		- Transit: SSL/TLS
		- Rest
			- SSE-S3
			- SSE-KMS
			- SSE-C
			- Client Side
- Storage Gateway
	- File
	- Volume
		- Stored
		- Cached
	- VTL
	- Snowball




































