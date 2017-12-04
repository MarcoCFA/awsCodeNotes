# AWS Disaster Recovery

## Overview

### What is Disaster Recovery
	- [Man] Disaster Recovery, or DR, is an organization's recovery plan for critical IT systems in the event of a disaster. DR includes documented policies and processes that fall under the wider umbrella of an organization's business continuity plan. A business continuity plan covers a wider range of negative events such as public relation issues and insolvency of suppliers, along with disaster recovery. A DR plan typically only relates to critical systems in an organization's IT environment.

	- What qualifies as a disaster? A disaster is a vague term referring to any number of events that may cause disruption in critical IT infrastructure. A disaster can be anything from a natural disaster disrupting a data center to an electrical failure, to a server administrator entering the wrong command and deleting all production data. In fact, in February of 2017, an Amazon employee entered the wrong command into a server that brought down Amazon web services simple storage service, or S3, in the North Virginia region for five hours.

	- Because so many organizations rely on S3 to run their web sites, many were down and not preforming properly. Popular sites and services such as Twitch, GitHub, and Salesforce all experienced service disruption. My personal favorite ironic outage, Is It Down Right Now dot com, a dashboard that identifies any outages across popular services, was also not loading. This is an extremely rare event, and not one I have personally experienced in my years working with AWS. It has been estimated the 2017 S3 Outage costed the S & P 500 organizations over 150 million dollars.

	- But when such an event occurs, an organization must have a plan in place to enable IT systems to be quickly restored to reduce business impact. The need for a DR plan ultimately comes down to compliance requirements, and a financial analysis. Organizations need to be aware of regulations that mandate a DR plan. For example, financial institutions in the US that fall under the Federal Financial Institutions Examination Council regulation are legally required to have a DR plan that is regularly tested.

	- Even if regulatory agencies do not mandate a DR plan, a financial analysis should. This defines the cost to an organization for each hour during which critical systems are down. This will drive the type of DR plan architecture. IT organizations should work with their finance departments to calculate the Return on Investment of a DR plan when defining requirements. Luckily, with the advent of AWS and the public cloud, finance departments have a much easier assessment. Public cloud has drastically reduced the cost to an organization for building and maintaining a DR environment.

## Recovery Time Objective vs Recovery Point Objective
	- [Narrator] The two most important requirements to define when building a DR plan, a recovery time objective, or RTO, and recovery point objective, or RPO. These two time intervals are critical to building a DR plan that aligns with your organizational goals. RTO is defined as the amount of elapsed time that is acceptable before all critical systems must be recovered and running. It might be minutes, hours, or could even be zero. Now, imagine your a SIS admin, and a flood has just wiped out AWS's entire North Virginia data center, and all critical systems just went down.

	- You need to hit your RTO. If your organization's RTO is two hours, this means the objective of the DR plan is to have all critical systems back up and running within two hours of an outage. RPO is the other major DR time interval to consider. It's defined as the maximum age of critical data that is to be restored after a disaster occurs. It reflects how much data loss is acceptable for an organization when building the DR environment. For example, let's say your organization's RPO requirement is four hours.

	- This means there must be a copy of all data taken every four hours and moved off site. If RPO is 24 hours, this indicates a daily backup must be taken. If systems go down 23 hours, 59 minutes, and 59 seconds after the last backup is taken, then the DR requirement is going to be missing a full day's worth of data. Is this acceptable for your organization's business? That answer drives the RPO decision. So just remember, RTO mean how long can I wait, and RPO means how much data can I loose.

### Disaster Recovery in Public Cloud
	- [Narrator] DR in the Public Cloud drastically reduces not only the infrastructure cost to maintain the environment, but also the effort involved in building a DR environment. Before the Public Cloud, most IT environments were built out by renting space in a collocation facility, or "Colo" for short. This is better known as a data center. An organization then purchased servers and storage arrays, and had that infrastructure racked at their "Colo" facility. Today, Public Cloud only requires a credit card to get started. Of course, the biggest organizations with the most demanding computing and storage requirements build their own private data centers if the scale makes sense.

	- For example, Facebook runs their systems out of their own data centers, not out of a private "Colo" or AWS. Buying expensive hardware is a significant capital expenditure, and "Colo" lease agreements are typical signed for multiple years. One of the many advantages of the Public Cloud, is that EC2 instances are on demand and only paid for hourly. No long term agreements are required. This is especially relevant to DR. Before Public Cloud, organizations would have to rent space at a completely separate and geographically disparate "Colo" facility.

	- Similar hardware needs to be purchased for this facility as well. In AWS, an environment can be launched in any one of Amazons 16 regions with just a credit card. Public Cloud providers also have a number of tools and managed services that assist in building a DR environment. AWS is known for its rapid pace of innovation and the rollout of new managed services. It is the clear leader in market share across all cloud providers, and offers the most complete set of services. Expenses for DR and the Public Cloud end up at a fraction of the cost when compared to purchasing the infrastructure and space for an off-site private data center.

	- Using AWSs platform services greatly simplifies the process of building a DR environment, and helps reduce cost.

## Disaster Recovery in AWS

### Intro to AWS Platform Services
	- [Instructor] AWS launched the EC2 service back in 2008. EC2 is the standard VM, which is known as Infrastructure as a Service or IaaS. Limiting IaaS to a public cloud environment does not fully extract the value of AWS. The true value of the public cloud comes from the services offered that that abstract away the burden of managing the infrastructure. Gartner's Annual Magic Quadrant continues to maintain each year that Amazon is ahead of Microsoft and Google when it comes to the maturity of these platform services.

	- Hundreds of enhancements and new services are released each year by AWS. These services allow customers to more easily build and manage their environments. Here is a view of the AWS console, showing all the services currently offered. These are the managed services that are most important to building a DR environment. Let's dive it. The Amazon Machine Image, or AMI, is used to launch any EC2 instance for AWS's IaaS offering. AWS allows an organization to take full copies of any AMI and easily move them to a different region so that they can be launched in a DR scenario.

	- Snapshots can be taken of each EC2 instance or AMI and stored in a different region. Snapshots and AMIs are related but not the same. An AMI can be created from a snapshot, but a snapshot is not an AMI. AWS charges in gigabytes per month, but snapshots are compressed and only differential data of each snapshot results in charges. Simple Storage Service is AWS's object data storage service solution. It is infinitely scalable, meaning organizations can continue to add more data without worrying about needing to purchase additional capacity in advance.

	- S3 was one of the original services released by AWS, back in the spring of 2006. S3 is used to store snapshots, and S3 replication allows all objects within an S3 region to be automatically replicated to any other region. Relational Database Service, or RDS, is AWS's database management solution. AWS will manage updates, patching, backups, read replicas, and high availability for failovers. When a DB is launched, an endpoint will be provided to use with an application, and the rest is handled by AWS.

	- RDS allows an organization to easily back up and restore a DB to a different AWS region. A read replica can also be run in a different DR region to bring RPO to near zero. Another critical service to DR is Route 53, AWS's DNS service. It allows organizations to create public and private DNS zones, records, and routing policies. It also supports domain registration, advanced routing policies, and health checks. Route 53 supports DR through manual or automated changes to DNS, to point to a new environment, in the event of a disaster.

	- For automated changes, Route 53 has a number of features, such as failover routing, that can support automated DR failover. Finally, Cloud Formation is a complex service that allows an organization to manage entire AWS environments with code. All EC2 instances in platform services can be represented in Cloud Formation templates written in JSON or YAML. Imagine building an entire network of servers and all infrastructure inside of it. Now imagine a template that stores the exact details defining that infrastructure, the networking, the firewall rules, the servers, the S3 storage buckets, the Route 53 DNS records, and anything else that AWS supports.

	- An organization can launch and manage all of this inside of a template. For DR, this allows an organization to quickly build an environment using the Cloud Formation template in any AWS region. This makes DR much simpler because the infrastructure does not need to be manually created. The template handles everything.

### Availability Zones vs Regions
	- [Narrator] There are a few terms that have a specific meaning as they relate to AWS Architecture. AWS is made up of both regions and availability zones. There are currently 16 regions spread across many countries throughout the world and these regions are completely independent. Within each region, there are two or more availability zones, or AZs. These are physically isolated locations within 50 to 200 miles from each other with very low latency connections. Each AZ can be considered a separate data center in the general area of all other AZs within that same region.

	- Applications should be architected to use multiple AZs for high availability, or HA. Remember that HA is not the same as DR. HA does not protect infrastructure against region wide outages. For this, a cross region DR solution is required. Multiple AZs are built within each region. Currently there are a minimum of two AZs all the way up to five AZs for the largest region, AWS' original North Virginia regions in the U.S. AWS maintains a global footprint in more than 10 different countries across the world.

	- Each year, they are adding multiple regions. In AWS, referring to HA typically means within a single region. Best practice is to design an application to work across multiple AZs so that if a single AZ goes down, the application can continue to run. AWS load balancer service can be used to direct traffic to instances across multiple AZs. There are many methods to building multi AZ HA applications, but this topic is out of scope for this course.

	- With DR, an application is replicated to an entirely different region in all of its AZs. Typically, there is some failover time in a disaster scenario which is defined by your RTO.

### Four DR Architectures
	- [Narrator] There are four common approaches to architecting DR environments. In order from coldest to hottest, the four designs for DR are called: Cold, Pilot light, Warm Standby and Multisite or active/active. Notice the changing color of the arrow representing the different DR architectures. In choosing the right architecture for a DR environment, there will always be a trade-off between reducing RTO/RPO and cost. Of course, all organizations would like to keep RTO/RPO and costs, both as low as possible.

	- Cold DR is the cheapest DR solution and also has the highest RTO/RPO, no infrastructure is actually running in your DR environment. In AWS, an organization would use cross-region snapshots of EC2 instances and also S3 cross-region replication to store all production data in another region. In all DR scenarios, documentation should direct administrators to follow a DR procedure to failover. It is also important to remember to change all DNS records to point to the DR environment, this is your failover event.

	- The final result of a Cold DR environment is the highest RTO/RPO and the lowest cost. With a Pilot light DR approach, an organization would keep core components of an environment running and configured, like a replicated database. In a DR scenario, additional infrastructure would be turned on from snapshots to build the environment. It is important to regularly turn on EC2 instances for patching and testing in the DR environment. Pilot light DR is a great option to reduce RTO/RPO significantly, from Cold DR yet still keep AWS costs down, with most infrastructure not running at all times.

	- The final result is a lower RTO/RPO and higher costs than a Cold DR architecture. Warm Standby DR is a fully configured and functional environment that is scaled down. In a disaster scenario, the environment will be scaled up to handle a full production load from end-users. This is done by resizing the database and either adding more application servers behind your load balancer, which is known as horizontal scaling and is preferred, or resizing EC2 instances, which is known as vertical scaling.

	- In addition to managing DNS records, AWS' Route 53 service also has a health check feature that will automatically failover the production environment to DR if the health check fails. The end result is a lower RTO/RPO and higher costs when compared to Warm and Cold DR architectures. Finally, the most expensive yet most reliable architecture for your application, is to run an application out of two independent regions. Instead of launching a read replica in a different region, databases will be connected in an active/active configuration, so that either one can be written to.

	- Route 53 weighted-routing allows an organization to send half of all end-user traffic to each region. In a DR scenario, simply adjust the weighted record to point all traffic to the active region or Route 53 health checks can also be configured to automate this change. The end result is the lowest RTO/RPO and the highest cost of all four architectures. In summary, just remember that as you increase from a Cold DR solution to Multisite, your costs will increase and your RTO/RPO will decrease.

	- And finally, remember that documenting and testing all DR procedures is critical. All too often, organizations may invest time and resources into a DR environment that is then never tested and lacks accurate documentation. A DR scenario then strikes and the DR environment is not brought up properly. Regularly testing, at least once a quarter, will ensure timely failover if a disaster strikes.

## Cold Disaster Recovery Scenario

### Cold DR Intro
	- Cold DR is the cheapest of the four DR architectures, although it has the highest RTO/RPO. S3 replication and cross-region snapshots can be used to keep data safe in the separate DR region. Admins must be sure to change DNS records to point to the new infrastructure. The final result of a Cold DR environment is the highest RTO/RPO and lowest cost. For the demos, I'll be building a WordPress site. WordPress is a blogging and website content management system. There are plenty of reference architectures that allow you to easily build the full-stack application in AWS.

	- For the demo, the WordPress stack will be failed over from North Virginia to Ohio. In the following demo, I will review creating snapshots and AMIs from EC2 instances as well as sending them from North Virginia to be stored in Ohio. I'll also demo replicating an S3 bucket from North Virginia to Ohio. Finally, I'll introduce Route 53 and make the necessary DNS record changes to point the application to Ohio.

### Infrastructure Set-Up

### Snapshots and AMI
	- In this demo I'm going to show you how to create EC2 Snapshots and AMI's, and also an RDS Snapshot. Here I've just logged in to the AWS console. Yours might look a little bit different. You'll see Services in the top left hand corner. Next I'll click Services and EC2 to jump into the EC2 console. Once you're in the EC2 console, click Snapshots underneath Elastic Block Store. This is where you'll see all of your EC2 Snapshots.

	- Unlike with the RDS database service, Snapshots are not automated for EC2. You need to create them manually, use a third party service, or script the Snapshots yourself using the AWS API. Next I'll create an EBS Snapshot and move it to Ohio, our DR Region. I'll click Volumes, under Elastic Block Store, and here's the volume for our WordPress application server. To create a Snapshot, I'll right click the Volume and click Create Snapshot.

	- I'll name it wp-app-server-snapshot. The description will be Snapshot for WP app server. Next I'll click Create. Snapshot Creation has started. Next I'll navigate over to the Snapshots interface underneath Elastic Block Store. Here you'll see that the Status is Pending. The Snapshot is being created. This will take a couple of minutes.

	- You'll now see that the Snapshot has completed. Again, Snapshots can be automated at regular intervals with the AWS API or using third party tools. With Snapshots, you're charged by the gigabyte but all Snapshots are compressed in S3, and you're only charged for differentials. This means that if your Disk does not change from Snapshot to Snapshot, you're only charged for the original data storage. Note that you won't actually see the Snapshots appear in the S3 console, but AWS is using S3 to store them under the hood.

	- Next I'll move the Snapshot to Ohio, Our Disaster Recovery Region. I'll do this by right clicking on the Snapshot, and selecting Copy. I'll change the Destination Region to US East (Ohio). Then I'll click Copy. The Snapshot copy operation has initiated. Next I'll click Close. Next I'll navigate over to the Ohio Region by clicking North Virginia in the top right hand corner.

	- Then I'll click US East (Ohio), and here we can see that the Snapshot is creating. Again, the Status is Pending, it will take a couple of minutes to create. You'll notice that the status now says Completed. Next I'll create an Amazon Machine Image, or AMI, from the Snapshot so I can quickly and easily launch the instance in a DR scenario. You can also create a Volume from a Snapshot and mount it to a vanilla EC2 instance, but it's quicker to just have it pre-configured AMI ready to launch.

	- To do this, I'll right click on my Snapshot and click Create Image. I'll name the image wp-app-server-ami I'll give it a description of image for WP app server, and you'll also need to change the Virtualization type to Hardware Assisted Virtualization. Next I'll click Create. The image is now creating.

	- Next I'll click Close. And finally I'll navigate over to the AMI's console underneath Images in the left hand pane. Again, it will take a couple of minutes for the AMI to appear in the console. You'll need to hit Refresh a few times in the upper right hand corner until it appears. The AMI now appears with the Status of Available. We'll use this AMI to launch our DR environment in another section demo. Next I'll create a Snapshot for our RDS database in the Virginia Region, and I'll send that Snapshot over to the Ohio Region for disaster recovery.

	- To do this, I'll click Ohio. Switch over to the North Virginia Region. I'll click Services then click RDS. Click DB Instances. Expand the MySQL database. Select the database. Click Modify. Before we manually configure our backup, I wanted to show how RDS manages backups for you on your behalf, unlike with EC2 Snapshots.

	- If you scroll down here under Backup, you'll see that you can configure a Backup Retention Period between one and 35 days. This defines how long each backup exists before it is purged. Like EC2 Snapshots, the data are compressed and you only pay for differentials. Next we'll manually create a SnapshoT so that we can copy a cross-region to Ohio. To do this, click Instances again.

	- Your MySQL database should already be selected. Click Instance Actions. Click Take Snapshot. Type wp-db-snapshot Click Take Snapshot. The Snapshot is now creating. Again, this will take a couple of minutes. You'll now notice that the Status has change to Available. You may also notice some other automated Snapshots in your Snapshots console.

	- Next we'll move the Snapshot to our Ohio Region. Select the Snapshot. Select Snapshot Actions. Copy Snapshot. Switch to US East (Ohio). Let's call it our wp-db-snapshot-ohio and let's click Copy Snapshot.

	- The Snapshot copy has initiated. Next click Close. And let's click the North Virginia Region so that we can switch back over to Ohio. The progress is at zero percent, again this will take a couple of minutes to complete. The DB Snapshot is now available. We'll use this DB Snapshot in a later section demo, when we launch our DR environment in Ohio.

### S3 Cross-Region replication demo
	- [Instructor] In this demo I'm going to show you how to replicate your S3 buckets so that any data uploaded to S3 in your primary region are automatically replicated to your DR region. This is not required for our WordPress Application, but it's a useful lesson none the less. First, I'll click Services, then click S3, next I'll create a bucket by clicking Create bucket. I'll call it d3mo-bucket, because S3 buckets must be unique to cross all AWS customers, you'll need to name your bucket something else.

	- I'll click Next. We have to enable Versioning, versioning allows an organization to keep older versions of files when they're deleted or replaced. It is then simple to restore files to previous versions. It's a great option to ensure that data is not lost, while you do have to pay for additional storage. Versioning must be enabled to use cross region replication. I'll click Versioning, I'll click enable versioning, then Save, then I'll click Next, Next again, and finally Create bucket.

	- Here a bucket has been created in North Virginia. Now let's create our replicated S3 bucket in Ohio. I'll click Create bucket again, let's call it d3mo-bucket-replicated, the Region will be Ohio, click Next, again for cross region replication we must enable Versioning, click on Versioning. Click enable Versioning, then Save, Next, Next again and finally Create bucket.

	- Here we can see both of our buckets, one in Virginia and one in Ohio. Notice how the S3 console shows you buckets in both regions. S3 is what is known as a global service, which is why it reads global in the top right hand corner, instead of a location of a particular region. Route 53 is the same way. Now, click on your bucket in North Virginia, then click Properties, scroll down to Cross-region replication, and click Enable.
	
	- Next we'll select our source and destination buckets for cross region replication. For the Source, we'll be replicating the entire bucket. For the Destination, we'll be replicating to Ohio. The bucket will be our: d3mo-bucket-replicated. For the storage class, we'll keep it the same as our source object. Next we'll need to select the role. The role is part of AWS's Identity and Access Management Service, and is out of scope for this course.

	- For a quick summary, the role is what gives the source bucket the appropriate permissions to write to the destination bucket. I'll click Create new role, this will automatically create a role. Click Save. Now that we've enabled S3 replication, let's test it out. First, let's create a test file, and save it to the Desktop. Next, I'll open up Notepad and create a Test file. Call it Test.txt.

	- Next I'll jump back to the AWS Console, click Amazon S3, and I'll upload the test file to my North Virginia bucket to make sure it replicates to Ohio. Click on my d3mo-bucket, click Upload, Add files, here is the text file that I just created. Click Open, Next, Next again, Next one more time, and finally click Upload.

	- The test file's been uploaded to our North Virginia region. Now I'm going to navigate back to our S3 console and see if the file's been replicated to Ohio. Next, I'll click on our d3mo-bucket-replicated, and you can see that the test file is now in Ohio. Now, even if the entire North Virginia region were to go down, all objects would still exist in Ohio. AWS makes this cheap and really easy, but this was no small task in the early 2000's, before AWS was built.

### Cold DR Failover
	- [Instructor] In this demo, I'm going to show you how to launch the cold DR environment in the event of a disaster. Imagine a disaster scenario has taken down the North Virginia region. This could be an actual natural disaster, a technical issue with Amazon's data centers, or any imaginable problem causing your application to go down. It's time to follow your documented DR procedure to bring your application back up in the Ohio region. If you're not yet in the Ohio region, make sure you navigate to it.

	- Next, click services, EC2, and under images click AMIs. You should see the AMI that we created from our previous demo. Right click the AMI, then click launch. Click next, click next again, next one more time, click next. Here we'll select our security group. Select an existing security group.

	- Click default, then click review and launch. Finally, click launch. Here you'll choose the SSH key pair that you've created in a previous demo. Track the acknowledgement and click launch instances. Click on the instance to make sure that it launches. The application server is now running. Next, we need to bring up the database from our most recent snapshot. I'll do this by clicking into the RDS console.

	- Go to services, click RDS, click snapshots in the left hand pane. Select the snapshot that you created in a previous demo. Click snapshot actions, restore snapshot, scroll down, name your DB identifier, I'll call it WordPress restore.

	- Click restore database instance. Looks like I need to select a DB instance class still. From the dropdown, I'll select DB.t2.small. Scroll down, click restore DB instance, the database is now creating. This will take a few minutes. While we're waiting for this to create, we'll need a SSH into the application server to change the database endpoint.

	- In a real disaster recovery procedure, you would likely want to use a DNS name for this endpoint so you do not need to SSH into your application server. Since many following along with this demo may not have registered a domain, I'm going to show you how to do this manually. From our cloud formation template, the application is configured to use the database in North Virginia. Since we're using the same application server in Ohio, we need to update the application server configuration to point to the new disaster recovery database.

	- Looks like the database is done creating and the status is available. Next, we'll need to copy the database endpoint so that we can paste it into our configuration file on our application server. I'll click on the endpoint, click control C, switch over to my notepad. I already have another note in there for SSHing into our instance, control V, and we don't need the port numbers. So I'm going to go ahead and delete that. Next, we need to grab the public IP address of our EC2 instance so that we can SSH into it.

	- I'll switch back to the AWS console, click services, click EC2, click one running instances, select our application server, copy the IPv4 public IP address, control C, paste it into my notes. Next, I'll copy this command and paste it into my SSH client, which is Cygwin.

	- Click enter, type yes to access the instance. I'm now logged into the EC2 instance. Next, I'll need to update the WordPress configuration file to point it to our new database in Ohio. I'll type sudo, nano, var, dub, dub, dub, html WordPress, wordpressconfig.php. Click enter.

	- If you scroll down, you'll see all of our configurations that we entered into the cloud formation template. The MySQL hostname is what we need to edit. I'll delete out the current hostname, which is pointing to the database in Virginia, and I'll copy and paste the new DBM point from Ohio. Control C, switch back to Cygwin, paste in the DBM point.

	- Next, I'll click control X to get out of nano, press Y to save, press enter, and finally we'll restart the Apache web server by typing sudo, http D, restart. Our final step is to change our DNS record to point to the new application server. For this, I'll move back to the AWS console, I'll click services, search route 53, click into our hosted zone, click our hosted zone.

	- Here we have all of our DNS records. Remember, you'll only be able to follow along here if you've registered a domain. Here we have the DNS record that we created in an earlier demo. We need to edit this record to point it to the Ohio application server. So I'll select the record. I'll switch back to my notepad where we have to public IP address of the new application server in Ohio. I'll copy the public IP address, control C, and I'll paste it into my DNS record.

	- Save record set, click, now we'll have to wait a few minutes for the DNS changes to propagate across the internet. Once the changes have propagated, we should be able to access our WordPress application being served out of the Ohio region. Let's see if our application is ready yet. In the address bar, I'll navigate to our domain. Looks like the application is now up and running out of the Ohio region. The failover was a success.

	- If you don't have a registered domain, you can also navigate to the IP address. Just copy the IP address of the application server, control C, paste it into your browser with the path of WordPress. Again, a success out of the Ohio region.

## Pilot Light Disaster Recovery Scenario

### Pilot Light DR intro
	- [Instructor] Pilot Light DR consists of an architecture that keeps the key infrastructure running for a quick fail over, but with some infrastructure also turned off to reduce cost. For example, a read replica might be running at all times, and the application servers may be turned off. In a DR scenario, an organization would then promote the read replica to master, turn on any required infrastructure, and also scale it up as necessary. Organizations must not forget to continuously update and patch their AMIs. Whenever an AMI is launched for DR testing, it should also be updated and patched.

	- Finally, DNS records will also need to be changed to point to the DR environment. In this section demo, I'll cover creating an RDS read replica, promoting an RDS replica to master, and also turning on the application server for full recovery.

### RDS and Read Replicas
	- [Instructor] The RDS managed database service was released in 2009 and makes managing a database much simpler. AWS takes care of patching and updates and provides configurations in the GUI rather than having to launch and manage a DB on an EC2 instance. RDS will not only manage a master and slave DB, but it also will easily launch a read replica. And it then will provide you with an HTTP endpoint to use with your application. Remember that this is a read-only endpoint to build into an application.

	- A read replica fits nicely with a DR plan because it is a simple way to copy all data from a DB in one region to another region. Then, in a DR scenario, the DB can be promoted from read replica to master so that the application can write to it versus reading only. This process should be documented step by step, or it can also be scripted using the AWS API.

### Create a Read Replica
	- [Instructor] In this demo I'll show you how to create a cross region Read Replica of your RDS Instance. Open the RDS console by clicking Services, RDS, DB Instances, then select your production database. From here click Instance Actions, and Create Read Replica. As our DB Instance Identifier, I'll enter WordPress read replica.

	- For the Destination Region, we'll change it to Ohio, our disaster recovery region. Finally I'll click Create Read Replica. The creation has initiated. I'll click Close. You'll see here that our production database is being modified. This does not bring the database down, but it's copying itself over to the Ohio region. Let's navigate over to Ohio by clicking North Virginia, then clicking into Ohio.

	- Here the Read Replica is creating. It will take a few minutes. The Read Replica has now finished creating with the status of available. Again, this could take five or even ten minutes sometimes. Now all data written to your master database will be asynchronously replicated to your Read Replica in Ohio. This is beneficial not only for DR purposes, but you can also use the Read Replica in your application code for database reads which can offload utilization to your master DB.

	- If you expand the database, here's your Read Replica end point. You can use that in your application code. Also in the event of a disaster in North Virginia, all of your data will now be written to the Read Replica in Ohio almost instantaneously. This provides an RPO of nearly zero. We'll use this Read Replica in a later demo to launch a DR environment.

### Pilot Light DR Failover
	- [Instructor] In this demo, I'll show you how to failover your pilot light DR environment. In your pilot light DR scenario, an RDS read replica is running to copy all production data to your DR environment in Ohio. In the event of a disaster, a preconfigured application server needs to be turned on, and the read replica should be promoted to primary. Set this demo up, I'm going to first turn off our application server in Ohio to simulate the pilot light DR architecture. I'll go to services, EC2, click running instances, and remember to make sure that you're in the Ohio region in the top right-hand corner.

	- I'll right-click the server, go to instance state, and stop. And then I'll click yes, stop. It will take a few minutes to stop the instance. Now that the application server is stopped, we've simulated our pilot light DR architecture. Let's now assume that our environment in Virginia just went down, there was a disaster. Let's navigate to the RDS console in Ohio, and promote the read replica to master. I'm going to click services, RDS, DB instances, here's the read replica that we created in a previous demo.

	- I'll select it, I'll click instance actions, and promote read replica. I'll click continue. Here we have a warning to make sure to bring down your application in Virginia for maintenance before promoting the read replica. With read replicas, there's going to be replication lag because the connection to the master is asynchronous. To avoid lost data, you'll always need to bring your application down for maintenance before promoting a read replica.

	- Of course in our DR scenario, the application is already down due to a disaster. Finally, I'll click promote read replica. As you can see, the status is now modifying. This will take a few minutes. As you can see, the database is now rebooting. Remember that there will be some downtime. The database is now automatically backing up.

	- The database is now available and can be written to as master. Next, we need to turn on the application server. Let's navigate to the EC2 console by clicking services, EC2, zero running instances, then let's right-click on our application server, go to instance state, click start, click yes, start, and the application server is now booting up. Again, this will take a couple minutes.

	- Looks like the instance is now running, but the status checks are still initializing. We'll wait just another minute. Looks like our status checks have now completed, and our application server is up and running. The final step to get your application up is to SSH into your application server and edit the DV connection to point to the database that you just promoted. Then you'll point your route 53 DNS record to the public IP address of the application server. Since we already covered this in the cold DR failover, you can refer to that section for exact steps.

	- One other point to notice, is that the public IP address of the application server has just changed. The public IP address will always change after a reboot. If you want to keep the same public IP address, you'll need to assign an elastic IP, which is AWS' terminology for a static IP address. If you look over in the left-hand pane, you'll see a section for elastic IPs. Configuring elastic IPs is out of scope for this course.

## Warm Standby Disaster Recovery Scenario

### Warm Standby DR Intro
	- [Narrator] Warm Standby DR includes a fully functional but scaled down environment in your DR region. In the event of a disaster, the DR environment would be scaled up to handle the full production workload by, either, adding more instances behind the load balancer, which is referred to as horizontal scaling, or, resizing the application server to a larger instance size, which is known as vertical scaling. In our simple architecture, we're not using a load balancer, so there is only one application server. This means vertical scaling will be required.

	- An organization must have a procedure for changing DNS records or Route 53 health checks can also be used for automated DNS failover. In our section demos, we will review Route 53 policy routing configurations with a full failover to our DR environment.

### Intro to Active-Active Environment
	- [Instructor] An active/active environment typically refers to running an application in multiple regions with all regions receiving traffic. This is contrast to an active/passive environment, like our pilot light DR scenario in which a second region may be used for an application, but that region is only available for failover. It is passive and does not receive any traffic unless there is a disaster scenario. An active/active architecture provides full redundancy in the event of a region-wide failover. This is the most advanced and expensive DR architecture, providing an RTO and RPO of zero because you already have your DR environment running at all times.

	- An active/active environment will typically take advantage of one of the Route 53 routing policies to automatically route end users to the appropriate region. I will be demoing the weighted routing policy in the next section.

### Route 53 Policy Routing
	- [Instructor] Route 53 is AWS's DNS service, and it supports multiple routing policies that add additional functionality to DNS that especially help deploy a multi site active-active environment. The simple routing policy is just your basic DNS record. For example, an A record that points to an IP address or a Cname record that points to another DNS record. With a weighted routing policy, an organization can choose the percentage of traffic that is pointed to two different environments.

	- This is common for cross region, active-active environments and also is helpful for blue-green deployments where an organization may build an entirely new version of an application with brand new infrastructure and only point a small percentage of traffic to it for testing purposes. A latency routing policy is useful for active-active environments. It can increase performance for an end user by routing the user to the region with the lowest latency, which typically means the closer region geographically. A failover routing policy is used for an active-passive architecture.

	- Active-passive means the two regions are running, but only one is actively accepting end user traffic. Failover routing always returns a primary record unless the primary is unavailable, then the secondary record is returned. This is the routing policy we will use for our warm standby DR demo. The geolocation routing policy responds to the DNS query based on the location of the user. For example, if an organization has not yet rolled out a service to a particular country, a geolocation routing policy can be used to send those users to a page that notifies the user that the service is not yet available in his or her country.

	- Route 53 also supports health checks, which are useful for failover routing policies. A health check will make an HTTP, HTTPS, or TCP request to an application and if the application does not respond appropriately, Route 53 will failover to the secondary DNS record.

### Multisite DR Failover
	- [Instructor] In this demo, I'll review how to use a weighted routing policy to configure an active-active environment. Note that RDS only supports cross region read replicas. It does not support fully active-active cross region databases, where each DB can be written to synchronously. There are other database options for this, but none that AWS currently supports as a manage service. Building a cross region active-active database is complex and out of scope for this course. This demo will show you how to create a multi site application for read-only requests with a weighted Route 53 routing policy.

	- I have already created a new read replica in Ohio from our production database. I also launched an application server and connected it to the DB endpoint of the read replica in Ohio, as we reviewed in earlier demos. Lastly, I deleted all of the Route 53 A records from previous demos. Now that I have a fully functioning environment in both Virginia and Ohio, it's time to create a Route 53 routing policy to route half of my end user traffic to Virginia and the other half to Ohio. Next, I'll navigate to Route 53, I'll click into our hosted zone, click our domain name, and click create record set.

	- Again, I'll be creating an A record. I'm going to jump over to my notes, copy my application server public IP, paste it into the value. For routing policy, we'll click the dropdown and we'll change it to a weighted routing policy. The weight will be 50, as in 50%, and for my set ID, I'll name it Virginia Region.

	- Then I'll click create. Next, I'll create the same record for my Ohio region. Click create record set, again, a type A record. For the value, I'll switch over to my notes, copy the public IP address of my Ohio application server, switch back to Route 53, paste in the value. For the routing policy, again I'll choose weighted, 50 for 50%, and I'll name it my Ohio region, click create.

	- Now it's going to take a few minutes for the DNS changes to propagate, then we'll test it out. Okay, a few minutes have passed, now let's test this. If you try to do an NS lookup on your record, you'll continue to get the same IP address because of DNS caching. Instead, I'm going to navigate to a site I saved in my notes called whatsmydns.net. This site will query a provided DNS name for may different locations around the world. I'll copy and Control + C, open a new tab, paste it with Control + V, then I'll enter my domain.

	- Hplus-sport.com, click search. Here you can see that both of our DNS records are being served up from different locations around the world. The Route 53 weighted routing policy has been successfully implemented.

### Warm Standby DR Failover
	- [Narrator] In this demo, I'll show you how to create a warm standby DR environment. In this scenario we have a fully functioning environment in Ohio. Because Ohio is a passive environment, we do not send any traffic to it as long as the application in Virginia is available. I'll show you how to accomplish this with the Route 53 health check and a policy route. First let's navigate to the Route 53 console. Click services. Search for Route 53. Click on hosted zones.

	- Click the domain you registered. If you do not have any registered domains, you can just follow along. Scroll over. Since we'll be creating new records for this demo, let's delete any A records that may exist from previous demos. Select the type A record and click delete record set. Confirm. Next let's add the public IP addresses of our application servers to our nodes for future reference.

	- To do this I'll navigate to the EC2 console. Click services. EC2. One running instances. And I'll copy the IPv4 public IP address of our application server. Control C. I'm going to pull up my notepad. And this is for our standby environment. Control V. Next I'm going to jump over to the Virginia region to grab the public IP address of our primary application server.

	- Click Ohio. US East in North Virginia. And here's the IPv4 public IP address of our primary application server. Select it, click control C. Switch over to notepad. And our primary environment public IP address. Next I'll show you how to create a health check for the domain. Let's navigate back to the AWS console. Click on services.

	- Search for Route 53. Click on hosted zones. Click on the domain you've registered. Next we'll click health checks in the left hand pane. Let's click create new health check. Let's name it wordpress health check. We'll monitor an end point. We're going to be monitoring an IP address on the http protocol over port 80.

	- The IP address we have in our notes will be monitoring the primary environment. Copy it, hit control C. Paste it in with control V. Our host name is going to be hplus-sport.com. Or whatever domain you may have registered. And the path will be /wordpress. Click next.

	- Click create health check. Now you can select the health check and click refresh until the health check shows as healthy. Looks like it's now healthy. You can also click on the monitoring tab to see all of your different data. Next I'm going to configure a DNS record with the failover routing policy. I'll click hosted zones. Click into my domain.

	- Click create record set. So I'll copy the IP address of our primary environment. Control C. And I'll paste the value in. Control V. I also want to change our TTL to 30 seconds which will make failover quicker. Under routing policy I'll click failover. Set ID this is our primary region, and I want to associate it with the health check that we just created.

	- I'll click yes and I'll select our wordpress health check. And finally click create. Now let's create our failover record set. I'll click create record set. And again I want to change our TTL to 30 seconds. For value, let's grab the public IP address of our standby application server in Ohio. I'll select it, hit control C. And I'll paste in the value with control V.

	- Under routing policy I'll change it to failover, and this is our secondary failover record type. Next I'll click create. We now have our active and our passive environment. This record points to our active environment in North Virgina. This record points to our passive environment in Ohio. If the health check fails on our active environment, Route 53 will automatically point this DNS record to our passive environment.

	- Next I'll do an nslookup of the hplus-sport.com domain just to show you what record is in use now. I'll navigate to my command prompt and I'll do an nslookup for hplus-sport.com. Click enter. You can see here that it's pointing to our primary record. Next I'll simulate a disaster by blocking port 80 of the security group in our primary region and we'll see if Route 53 fails over to the passive region.

	- I'll navigate to services, EC2, I'll click one running instances. And I'll click on our security group down here at the bottom. We want to edit our inbound security group rules. Click edit, and I'm going to delete the rules for port 80. Once I click save, the health check will eventually fail because it cannot access our wordpress server on port 80. Click save.

	- Next let's navigate to the health check page to make sure our health check has failed. I'll click services. Route 53. One hosted zone. Next I'll click into our health checks. Looks like it's still healthy. Let's click refresh and see if it's failed yet. Looks like our health check is now unhealthy. Let's see if Route 53 is now serving the DNS record for our standby application server.

	- I'll switch back to our command prompt. And I'll press the up arrow to try nslookup again. Success, looks like Route 53 has now changed the DNS record to our standby application server. Finally, let's navigate to our site, hplus-sport.com/wordpress. And Route 53 has successfully failed over our blog. We're now hosting out of the Ohio region. Our disaster recovery failover was a success.