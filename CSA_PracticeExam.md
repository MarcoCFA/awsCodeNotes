## Question 1
Currently you're helping design and architect a highly available application. After building the initial environment, you've found that part of your application does not work correctly until port 443 is added to the security group. After adding port 443 to the appropriate security group, how much time will it take before the changes are applied and the application begins working correctly?

### Answer
Changes apply instantly to the security group, and the application should be able to respond to 443 requests

## Question 2
You are consulting for a company with a limited budget for on-premise hardware. However, they need to store large amounts of data that is easily accessible through a network share with on-premise employees. Which AWS solution would you implement for this company?

### Answer
Gateway-Stored volumes use S3 to backup the data but store locally, which means we're limited to the amount of space we allocate to the VM. With the Gateway-Cache volumes, you aren't limited in that way since you're storing all of the data on S3 and simply caching frequently-used data locally.

## Question 3
You are consulting for a finance company that has specific backup and archiving policies. This company's RTO for all financial documents created in the past 6 months is 1 hour. The second requirement is to configure a setup that allows for all documents that are 6 months or older to be sent automatically for archiving in a lower-cost but highly durable archive environment. Given that the company is using the storage gateway, gateway-stored configuration, which of the following would be the best setup to reach the objectives?

### Answer
Enable S3 versioning with a lifecycle policy that sends objects older than 6 months to Amazon Glacier

## Question 4
Your company is concerned with EBS volume backup on Amazon EC2 and wants to ensure they have proper backups and that the data is durable. What solution would you implement and why?

### Answer
Write a cronjob that uses the AWS CLI to take a snapshot of production EBS volumes. The data is durable because EBS snapshots are stored on the AWS S3 storage class

## Question 5
You are working for a startup company that is building an application that receives large amounts of data. Unfortunately, current funding has left the start-up short on cash, cannot afford to purchase thousands of dollars of storage hardware, and has opted to use AWS. Which services would you implement in order to store a virtually unlimited amount of data without any effort to scale when demand unexpectedly increases?

### Answer
S3 because it provides unlimited amounts of storage data, scales automatically, highly available and durable

## Question 6
Which statements is true about Amazon S3 standard storage class?

### Answer
Provides 99.999999% durability to S3 objects

## Question 7
Which of the following RDS is not available on AWS? Aurora, DB2, MariaDB, MySQL

### Answer
DB2

## Question 8
Which of the following services allow the administrator access to the underlying operating system?

DynamoDB, EC2, RDS, None

### Answer
EC2

## Question 9
True or False: Data stored on EBS volumes are automatically and redundantly stored in multiple physical volumes in the same availability zone as part of the normal operations of the EBS service at no additional charge.

### Answer
True

## Question 10
You've been contacted by a client who is having connectivity issues on their Amazon Virtual Private Cloud and EC2 instances. After logging into the environment, you notice that the customer is using four instances that all belong to a subnet with an attached internet gateway. The instances also belong to the same security group. However, one of the instances is not able to send or receive traffic like the other three. After logging into the internal network and investigating, you find that the instance is working as expected and determine it is not an operating system issue. Which of the following is missing from the environment and is preventing that single instance from connecting?

### Answer
The EC2 instance does not have a public IP address associated with it

## Question 11
You've been tasked with building out a duplicate environment in another region for disaster recovery purposes. Part of your environment relies on EC2 instances with preconfigured software. What steps would you take to configure the instances in another region?

### Answer
Create an AMI of the EC2 instance and copy the AMI to the desired region

## Question 12
Your company has moved a legacy application from an on-premise data center to the cloud. The legacy application requires a static IP address hard-coded into the backend, which prevents you from deploying the application with high availability and fault tolerance using the ELB. Which steps would you take to apply high availability and fault tolerance to this application?

### Answer
Ensure the instance it is using has an Elastic IP address assigned to it

## Question 13
You are a consultant tasked with migrating an on-premise application architecture to AWS. During your design process you have to give consideration to current on-premise security and determine which security attributes you are responsible for on AWS. Which of the following does AWS provide for you as part of the shared responsibility model?

### Answer
Physical Network Infrastructure


## Question 14
You are consulting for a healthcare company that has strict compliance and auditing requirements. When architecting the application environment on AWS, which services or service features might you enable to take advantage of monitoring to ensure auditing the environment for compliance is easy and follows the strict healthcare compliance requirements?

## Answer
Cloudtrail for security logs

## Question 15
You're building out an application on AWS that is running within a single region. However, you're designing with disaster recovery in mind. Your intention is to build the application so that if the current region becomes unavailable, you can failover to another region. Part of your application relies heavily on pre-built AMIs. In order to share those AMIs with the region you're using as a backup, what process would you take?

## Answer
Copy the AMI from the current region to another region, modify the AutoScaling groups in the backup region to use the new AMI ID in the backup region

## Question 16
While running an EC2 instance, you've been storing data on one of the instance's volumes. However, to save money, you shut down the instance for the weekend. The following week, after starting the instance, you notice that all your work has been lost and is no longer available on the EC2 instance. What might be the cause of this?

## Answer
The EC2 instance was using instance store volumes, which are ephemeral and only live for the life of the instance

## Question 17
After building an application that makes use of an Elastic Load Balancer over port 80, you notice that your instances, even though they are healthy as part of the health check, are not serving traffic when you go to the ELB DNS cname. What might be the cause of this issue?

### Answer
The EC2 instances security group does not have port 80 open

## Question 18
If an instance that belongs to an Elastic Load Balancer's health check fails, what occurs to the instance that fails?

### Answer
The ELB will de-register the instance and stop traffic to the unhealthy instance

## Question 19
True of False: Auto Scaling is a tool used for creating elastic and self-healing applications.

## Answer
True

## Question 20
Amazon Glacier is designed for:

### Answer
Data Archives


## Question 21
You are building a system to distribute confidential training videos to employees. Using CloudFront, what method would be used to serve content that is stored in S3, but not publicly accessible from S3 directly?

### Answer
Create an Origin Access Identify for CloudFront and grant access to the objects in your S3 bucket to that OAI

## Question 22
In the basic monitoring package for EC2, Amazon CloudWatch provides the following metrics:

### Answer
Hypervisible metrics such as CPU utilization


## Question 23
Elasticity is a fundamental property of the cloud. What best describes elasticity?

### Answer
Power to scale computing resources up and down easily with minimal friction

## Question 24
Company B provides an online image recognition service and utilizes SQS to decouple system components for scaleability. The SQS consumer's readers poll the image queue as often as possible to keep end-to-end throughput as high as possible. However, Company B is realizing that polling in tight loops is burning CPU cycles and increasing costs with empty responses. How can company B reduce the number of empty responses?

### Answer
Enable long polling by setting the ReceiveMessageWaitTimeSeconds to a number > 0

## Question 25
What is the difference between an availability zone and an edge location?

### Answer
An availability zone is a resource within an AWS region, an edge location will deliver cached content to the closest location to reduce latency

## Question 26
True or False: An Amazon SQS "standard" queue guarantees the delivery of a message AT LEAST once, but cannot guarantee it will not create duplicates.

### Answer
True

## Question 27
In order to establish a successful site-to-site VPN connection from your on-premise network to the VPC (Virtual Private Cloud), which of the following needs to be configured inside of the VPC?


### Answer


## Question 28
While implementing a disaster recovery strategy in another region, you are attempting to move the data from one EBS volume to another in a separate region. What is the best way to do this? Keep in mind this is not a live production replication copy.

### Answer
Take a snapshot of the EBS volume and copy it to the desired region

## Question 29
When designing a cloud service based on AWS and you choose to use RRS on S3 instead of S3 standard storage type, what type of trade offs do you have to build your application around?

### Answer
RRS only has 99.99% durability and you have to design automation around replacing lost objects

## Question 30
One of your instances is reporting an unhealthy system status check. However, this is not something you should have to monitor and repair on your own. How might you automate the repair of the system status check failure in an AWS environment?

### Answer
Create Cloudwatch metrics that stop/start the instance based off status check alarms

## Question 31
Your web application front end consists of multiple EC2 instances behind an Elastic Load Balancer. You configured the ELB to perform health checks on these EC2 instances. If an instance fails to pass health checks, which statement is true?

### Answer
The ELB stops sending traffic to the instance that failed its health check

## Question 32
An AWS VPC (Virtual Private Cloud) allows you to _______.

### Answer
Connect your cloud resources to your own encrypted IPSec VPN connections

## Question 33
You are designing a global application that takes advantage of multiple regions. As part of your application, the need to synchronize from one region to another is required to ensure your application is serving the same data when employing latency-based Route 53 DNS records. To ensure this happens, you have determined that using the AWS CLI to sync files from the primary storage servers to S3 is the best method. How might you implement AWS CLI authentication against the S3 service?


### Answer
Create an EC2 IAM role and assign it to each EC2 instance taht utilizes the AWS CLI to sync the data

## Question 34
What URL might you query on an EC2 instance to find the public AND private IP address of an instance?

### Answer
http://169.254.169.254/latest/meta-data/

## Question 35
For basic monitoring on AWS, which metrics are not included as part of the basic monitoring package?

CPU Utilization, Free Swap, Network Utilization, None

### Answer
Free Swap

## Question 36
Your company has an application that requires access to a NoSQL database. Your IT department has no desire to manage the NoSQL servers. Which Amazon service provides a fully-managed and highly available NoSQL service?

ElasticMap Reduce, RDS, SimpleDB, DynamoDB
### Answer
DynamoDB

## Question 37
Your application's usage peaks at 90% during the hours of 9 AM and 10 AM everyday. All other hours require only 10% of the peak resources. What is the best way to scale your application so you're only paying for max resources during peak hours?

### Answer
Proactive Cycle Scaling

## Question 38
True of False: Amazon Auto Scaling is not meant to handle instant load spikes but is built to grow with a gradual increase in usage over a short time period.

### Answer
True

## Question 39
Your company is posting a big article on the front page of your website tomorrow. It is expected that the demand could potentially overwhelm your infrastructure. In the event of a load failure, how can you set up DNS failover to a static website?

### Answer
Use Route 53 and the failover option to failover to a static S3 website bucket or Cloudfront distribution in the event of an issue


## Question 40
You own an image manipulation application. Your users take a picture, upload it to your app, and request filters to be added to the image. You need to decouple the application so your users are not waiting for the image processing to take place. How would you go about doing this?

### Answer
Use SQS to store the requests using metadata and JSON in the message, use S3 to store the image, and Autoscaling to determine when to fire off more worker instances based on queue size

## Question 41
Your EC2 instances are configured to run behind an Amazon VPC. You have assigned two web serves instances to an Elastic Load Balancer. However, the instances and the ELB are not reachable via the ELB's DNS host name or public instances IP addresses.  How might you resolve the issue so that your instances are serving the web app data to the public Internet?

### Answer
Attach an Internet Gateway to teh VPC and route it to the subnet

## Question 42
As part of your application architecture requirements, the company you are working for has requested the ability to run analytics against all combined log files from the Elastic Load Balancer. Which services are used together to collect logs and process log file analysis in an AWS environment?

### Answer
S3 to store ELB log files and EMR for processing the log files in analysis

## Question 43
By default, is data in S3 encrypted?

### Answer
No, but it can be when the right APIs are called for SSE

## Question 44
Your company requires that all the data on your EBS-backed EC2 volumes be encrypted. How would you go about doing this?

### Answer
Encrypt the EBS volume on set-up

## Question 45
Your company wants to backup the onsite file server to AWS but does not want to serve the files from S3 to your office network when files need accessed. Which service and setup would you use to accomplish this task?

### Answer
Use Storage Gateway and gateway stored volumes to store the data locally and ayschronously backup point in time snapshots to S3

## Question 46
Your company is moving their entire 20 TB data warehouse to the cloud. With your current bandwidth it would take 2 months to transfer the data. Which service would allow you to quickly get your data into AWS?

### Answer
AWS Import/Export

## Question 47
Given the following region design, what is the bare minimum for configuring high availability and why? 

Two availability zones within a region, az-a and az-b.

### Answer
Create an ELB that serves traffic to two instances, one instance in each availability zone, and enable cross-zone load balancing on the ELB, then create an Auto Scaling Group, because this applies high availability if a single availability zone is no longer available

## Question 48
When a snapshot is being taken against an EBS volume, the volume becomes unavailable and the instance no longer has the ability to communicate with the EBS volume until the snapshot is complete.

### Answer
False

## Question 49
You are asked to perform a security audit on a company’s AWS environment.  You log in to their AWS account with the root user credentials and discover that they are using a VPN to connect to and manage their private EC2 instances.  Upon further inspection, you find that they are not regularly patching their RDS instances.  Finally, you notice that they are using IAM policies rather than bucket policies to manage access to their S3 buckets.  What do you cite as the most critical security risk in your report?

### Answer
The company allows people to log in with their AWS account's root user

## Question 50
You are planning on creating an EC2 instance that will create S3 objects and modify CloudWatch alarms.  What is the best way to deploy this instance?

### Answer
Assign an S3 policy and a CloudWatch policy to a single IAM role. Assign the IAM role to the instance at deployment time

## Question 51
Your AWS environment contains several on-demand EC2 instances dedicated to a project that has just been cancelled.  Your supervisor does not want to incur charges for these on-demand instances, but also does not want to lose the data just yet because there is a chance the project may be revived in the next few days.  What should you do to minimize charges for these instances in the meantime?

### Answer
Stop the instances as soon as possible


## Question 52
You recently purchased four reserved EC2 instances in the US-East-1 region’s Availability Zone 1.  Your supervisor just informed you that she would like the instances distributed equally across US-East-1 region Availability Zones 1 and 2. Can you use the reserved instances you just purchased to deploy EC2 instances in Availability Zone 2?

### Answer
Yes, you can migrate the reserved instances to Availability Zone 2


## Question 53
You are asked to evaluate a company’s AWS environment to find ways to reduce cost.  You discover they are running three production web server reserved EC2 instances with EBS-backed root volumes.  These instances have a consistent CPU load of 80%.  Traffic is being distributed to these instances by an Elastic Load Balancer.  They also have production and development Multi-AZ RDS MySQL databases.  What recommendation would you make to reduce cost in this environment without affecting availability of mission-critical systems?

### Answer
Consider not using a Multi-AZ RDS deployment for the development database

## Question 55
Your supervisor asks you to create a highly available website which serves static content from EC2 instances.  Which of the following is not a requirement to accomplish this goal?

## Answer
SQS Queue


## Question 59
Your organization has been using a HSM (Hardware Security Module) for secure key storage. It is only used for generating keys for your EC2 instances. Unfortunately, the HSM has been zeroized after someone attempted to log in as the administrator three times using an invalid password. This means that the encryption keys on it have been wiped. You did not have a copy of the keys stored anywhere else. How can you obtain a new copy of the keys that you had stored on HSM?

### Answer
You cannot; the keys are lost if you did not have a copy

## Question 60
You are using IOT sensors to monitor the movement of a group of hikers on a three day trek and send the information into an Kinesis Stream. They each have a sensor in their shoe and you know for certain that there is no problem with mobile coverage so all the data is getting back to the stream. You have used default settings for the stream. At the end of the third day the data is sent to an S3 bucket. When you go to interpret the data in S3 there is only data for the last day and nothing for the first 2 days. Which of the following is the most probable cause of this? 


### Answer
Data records are only accessible for a default 24 hours from the time they are added to a stream


















































































































































































































































































































































































































































































































