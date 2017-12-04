# Cloud Concepts
- Cloud refers to hosted services over the internet
- Categories
	-- IaaS
	-- PaaS
	-- SaaS

## Benefits
- Minimum Upfront Investment in physical assets
- Just-In-Time Infrastructure (autoscaling) - only pay for what you use, no need to estimate hardware provisions
- Scriptable Infrastructure that can automate processes by leveraging APIs
- Flexibility and Efficiency of Software Development lifecycle

## Scalable Infrastructure
- Change adn adapt to a changing workload
- Horizontal scaling - adding/deleting capacity (servers)

## Elastacity
- Refers to ability of the cloud to accomodate changes in load and demand on a system
- In a fixed capacity environment, when capacity is greater than demand, money is wasted on unused hardware


## Cloud Constraints
- Provides building blocks for constructing an system
- However, an exact replica may not be feasable

## Role of AWS Admin
- Cloud demands that system administrators think about automation because the infrastructure is no programmable.
- System administrators need to manage abstract virtual cloud resources
- Learn to leverage different storage options beyond traditional RDBMS


# Cloud Best Practices

## Design For Failure
- Causes recovery procedures to be part of design process
- Separate concerns for system to tolerate failures
- Avoid single points of failure

## Implement Elastacity
- Refers to the ability to scale cloud resources up/down
- Methods to scale
	-- Fixed Interval
	-- Anticipation of Events
	-- Monitoring Metrics and Scale Accordingly
- Application deployment must be automated in order to take advantage of scaling
- Bootstrapping refers to creating a self-sustaining start-up process that can run on its own (running on EC2 instances)

## Loose Coupling
- Refers to a design principle concerned with minimizing dependencies between components to improve scalability
- A system where if one of the components of the architecture fail, the other components can continue

## Security
- Customer is responsible for security implementation, network and application
- Cloud provider is responsible for physical security, infrastructure, equipment and separation from other customers

## Cost
- Cost optimization is the ability to recognize and reduce costs
- AWS has a consumption payment model
- Fixed resources are billed by the hour, comparing the 40 hours in a work week, to the 168 hours in a full week, can reduce costs by 75%
- Autoscaling ensures supply and demand are in sync

# Design for Failure

## Virtual Servers, EC2, Elastic IP
- EC2 is server in the cloud,
- Elastic IP static IP address that can be remapped to different server, IP is tied to the account

## Regions and Availability Zones
- AWS Regions are distinct but connected by a fiber connected
- Availablility zones physically distinct zones within a region

## Amazon Machine Image
- Packaged environment and settings for launching an EC2 instance

## Elastic Load Balancing
- Component for balancing network traffic across multiple EC2 instances within multiple availability zones
- Provides greater levels of fault tolerance and high availability in applications
- Use ELB to distribute your system across multiple resources and availability zones

## CloudWatch
- Resource and application monitoring and alert service


## Elastic Block Storage
- Storage resources created separately from EC2 instances. 
- Standard Volumes 
- Provisioned Volumes allow for the specification of consistent performance parameters
- Stored incrementally on S3

## RDS - Relational Database Service
- Allows for access to a full featured relational DB without need to install or provision a DB
- Does not allow direct access to DB servers

# Automate Infrastructure

## Bootstrapping
- Bootstrapping refers to creating a sustainable, start up process that can run on its own
- In the context of AWS it typically means the process needed to get an application up and running on an EC2 instance. 
- Application instances should be able to come online and then ask questions about who they are and what role they're supposed to be playing in the application.

## Autoscaling
- Service to implement elasticity
- Define scale parameters
- Launch Configuration - What to scale
- Auto Scaling Group - Where to Launch
- Scaling Policy - When to Launch

## Storage - S3 & Cloudfront
- EFS - File Storage
- EBS/EC2 - Block Storage
- S3/Glacier - Object Storage
- Object storage in flat structures (buckets) and accessed by unique id (key), best for unstructured, non-relational data

- File storage, data stored as files in folder hierarchies, accessed by path and easily searchable

- S3 redundantly stores data
- RRS reduced redundancy with lower costs, data cannot be reproduced


## Elastic Beanstalk
- Fully managed service that allows loading an application and having AWS provision everything
- Application is uploaded into S3 and then AWS deploys and creates environment
- Predefined default configuration environment

## OpsWork
- Full service application management
- Two Offerings: Chef Automate & OpsWorks Stack
- Stacks group of servers
- Layer is set of stacks that specifies infomration for instances, DB
- Uses Chef recipes for configuration

## CloudFormation
- Easy way to create and manage a collection of related AWS resources.
- Allows for the definition of an entire application stack to exist as either a single or set of text based template files
- Version is control can be used to manage different versions
- Managed through JSON documents

## CodeDeploy
- Component service / developer tool
- Coordinates application deployments across AWS

# Decouple Components
- Reduce tight dependencies and improve scalability
- System survives single component failure

## Simple Queue Service (SQS)
- Provides implementation of message queueing software to pass between applications and components
- Uses queue buffers to send messages between components
- Use SQS as the communication glue to bind independent components

## Simple Workflow Service (SNS)
- This service is built to help define, manage, and coordinate the tasks that make up a given business workflow
- Provides boilerplate needed to manage the depndencies across activities defined in a business workflow process
- Activity worker performs work assigned by SWF task
- Work is scheduled by the decider
- Pull Notification (polling)

## Simple Notification Service
- Notify applications or people from the cloud by creating topics and using a publish-subscribe protocol
- Messages are published to a centralized topic then subscribers to the topic receive the messages
- Supports different protocols (text, email)
- Push notification (subscriber)

## DynamoDB
- NoSQL, schema-less DB
- Uses SSD and automatically replicated across multiple Availabiity Zones
- Helps create stateless servers
- Make your applications as stateless as possible, when state is needed store the state outside your application using DynamoDB

# Optimize For Performance

## Caching: AWS Elasticache
- In memory caching layer between application business logic and the database
- Supports two engines: Redis and Memcached


## Caching: AWS Cloudfront
- CDN to deliver static web content
- Optimizes connections to edge locations for dynamic content

## Search: AWS Cloudsearch
- search engine is to be able to store searchable data in such a way as to provide the best answers to search queries in the most performant manner.
-  First a search domain is created that will be used to capture all of the structured data to make searchable. This domain has a couple endpoints for access including a document endpoint and a search endpoint.
- The document endpoint is where data is sent to populate the domain with data. And the search endpoint is used to make query requests and retrieve the results of searching the data. The search fields are defined and configured along with the search engine parameters. This is like a schema for the search index.
- CloudSearch consists of three primary services. The configuration service, the document service, and the search service. The configuration service is what is used to create and configure the search domain.
-  By default documents in CloudSearch are ranked according to the frequency of the terms within the document.


## Serverless: API Gateway
- Amazon API Gateway is a service that provides immediate solutions to some of the administrative and design challenges faced when building APIs
- Amazon API Gateway adds an access layer between application users and application code. Requests are made through the internet, come into the API gateway, and are then handled in a variety of ways, depending on the request and the circumstances.
-  In typical cases, the gateway responds to that request by executing custom application code residing on an EC2 instance, or in Lambda functions, or in any other publicly accessible endpoint.


## Serverless: Lambda
- Functions are only run when needed in a stateless environment
- Function and Event source are the two primary components
- Event sources invoke the function

# Security
## Shared Security Model
- Security responsibility shared between customer and AWS
- Amazon provides what they refer to as security of the cloud, things like the physical security of the facilities in which the equipment resides and the global infrastructure on which cloud systems are architected.
- The customer is responsible for securing operating systems, platforms, and data.
- Amazon identifies three broad categories of services, infrastructure, container, and software services. The first category of services are Amazon's infrastructure as a service offerings. These include services such as EC2, EBS, and Auto Scaling.
- AWS provides a managed service for these application containers. Examples of container services include RDS, Elasticsearch, ECS, and Elastic Beanstalk.
-  Examples of such AWS services are Amazon Elastic Transcoder, Amazon Lex, and Amazon Athena.


## IAM
-  IAM is short for identity and access management. It is a management service provided by Amazon that allows control of the access and permissions to the AWS resources and services in an account
- When a new AWS account is initially set up, what has been created is what is referred to as the master account. The initial first user created and associated with this account is the master user. This is a little like root on a Unix-based operating system. This master user has access to everything, including all of the billing information. It makes sense to keep this master account secure. It is recommended not to use this master account for continued access to services and resources.
- This allows permissions to be defined that control which users can access which specific services, which actions they can perform within these services, and which resources are available within these services. 
- IAM can also be used to create groups. Groups are composed of a set of one or more permissions. Once defined, users are added to these groups, which allows permissions to be managed on a group level rather than on an individual by individual basis. Roles can also be created. An IAM role is similar to a user. It is an AWS identity with permission policies that determine access in AWS.


## Security Groups
- AWS Security Groups are the virtual firewalls in the cloud that allowed control of the inbound and outbound traffic on certain resources. Security groups determine who can communicate with resources that belong to that group. Traffic rules can be set up once and then applied to multiple resources. Resources can be assigned to multiple security groups, allowing the flexibility to mix and match security groups with resources to fit differing business security management needs.
- A security group is a set of rules created to control the inbound and outbound traffic to a resource. These rules are composed of a traffic type, underlying protocol, a port or range of ports, and a source.


## Virtual Private Cloud (VPC)
- enables AWS resources to be launched into a virtual network defined by you, the customer. This virtual network resembles a traditional network that might be created in a private data center, but with the benefits that come with the scalable infrastructure with an AWS. 
- With VPC instances run in virtual private cloud that is logically isolated to only one AWS account. The EC2 instances launched into a VPC are not automatically addressable via the public internet.


# Optimize For Costs

## Keeping tabs on the tab
- Simple monthly calculator to estimate costs
- Detailed billing reports allow for breakdown by month, day or hour, service
-- Tags can be implemented
- Cost explorer graphical UI of uses
- Using IAM restricts access to resource creation and limit costs

## Matching Supply with Demand
- Identify patterns of resource use
- Utilize a queue based systems or autoscaling
- Trusted Advisor recommends savings
- Cloudwatch good resource for monitoring costs

## Utilizing Cost Effective Resources
- Four types of purchasing options
	-- On demand
	-- Reserved Instances
	-- Spot Instances
	-- Dedicated Hosting
- On demand means pay for resources on an hourly basis with no long-term commitment
	-- Used for spiky workloads or to define needs
- Reserved make a low, one-time payment and receive a significant discount on the hourly charge
	-- For committed utilization
- Spot Instances bid for unused capacity, charged at a spot price which fluctuates on supply and demand
	-- For time-insensitive or transient workloads
- Dedicated hosting is isolated single tenant hardware for a customer.
	-- Can use on-demand or reserved pricing model
	-- Used for security when hardward must be physically isolated

# Web Apps with AWS

## Architecture


## IAM User
- security practice and immediately setup a separate user within the account, so that I do not continue to access the account as the account owner. 
- The account owner has access to every single resource, including all billing information. This information should be protected. 
- The recommended practice is to setup users within the account using the identity and access management feature, or IAM.
- And I keep the account owner credentials secret. 


## Key Pair
- Amazon EC2 uses public key cryptography to encrypt and decrypt blog information. Public key cryptography uses a public key to encrypt a piece of data such as a password, then the recipient uses the private key to decrypt the data. The public and private keys together are known as a key pair. To initially log in to an instance, you must first create a key pair. You specify the name of the key pair when you launch the instance, and provide the private key when you connect to the instance. Linux-based instances have no password, rather you use the key pair to log in using SSH.
- I recommend coming up with some convention for these that works for you and your organization. It's recommended that these be rotated every now and then as part of a good security practice. It's also good to have different key pairs for different uses, so perhaps for example, your application environments might use separate key pairs, like one for dev and one for production. For now, I'll follow something like that.


## Config Security Group
- 

## Launch EC2 Instance


## Create an ELB


## Connect to EC2 via HTTP


## Connect to EC2 via SSH


## Create a MySQL DB


## Create Custom Server Image


## Autoscaling


## Elastic Beanstalk


# Serverless
## S3 for App Hosting


## Lambda and API Gateway


## Store data in DynamoDB


## Deploy and test the application

