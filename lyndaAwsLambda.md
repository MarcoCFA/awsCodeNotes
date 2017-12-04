# AWS Lambda - Lynda.com

## What is Lambda
- Event triggered functions
- Discrete & focused on performing a single task
- Only charged for compute time used
- Integrates with other AWS Services

## Use Cases
- Data processing and transformation
- File processing with S3
- API Gateway and Lambda can create a complete web application

## Creating an IAM User
- Groups used to apply permissions to users
- Set up administrator and then delete root access keys
- Choose User -> Create User
	- username: Administrator
- AWS Access Type
	-- Choose -> AWS Mgmt Console Access
	-- Custom Password
	-- Permissions -> Add User to Group
		-- Create Group -> Admin Group
			-- Filter -> Job Function
			-- Policy Group -> Administrator Access
			-- Download CSV file

# S3 Set-Up
- Set up a role for Lambda to access S3 & logs
	-- IAM -> Roles -> New Role -> AWS Lambda
	-- Policy -> AWSLambdaFullAccess
	-- Policy -> S3FullAccess
	-- Create Role
- Create two buckets in S3, one for upload and another where they will be copied
	- S3 -> Create Bucket -> Name Bucket
		-- Choose Region -> Next
		-- Permissions (public) -> Read/Write
		-- Create Bucket
	- S3 -> Create Bucket -> Name Bucket
		-- Choose Region -> Next
		-- Permissions (public) -> Read/Write
		-- Create Bucket
	- Upload File to bucket

## Create Lambda Function
- Create function triggered by file upload in one bucket and copying it over to a new bucket

- Lambda -> Run-Time (dropdown) -> S3 -> lambda-s3-blueprint
	
- Configure Triggers -> Bucket (upload) -> Event Type (Object Created) -> Name Function -> Describe Function -> Code Entry Type (inline) -> Role (existing role) -> Next -> Create

## Test Function
- Lambda -> Test

## Add Copy Functionality
- Click on Function, bucket and file name have been determined in the test event
- Need to define the bucket to copy into
- Save the copy response to check for success/errors
- Use same key for copy and source

## Lambda CloudWatch & Monitoring
- Lambda Dashboard -> Monitoring

# Creating a Lambda API
- Create a function in Lambda, which takes standard REST methods (GET, PUT, POST, DELETE)
- Backend will use a DynamoDB table
- Function will work through the AWS API Gateway

## API Framework Set-Up
- Set up in API Gateway
	-- Select new API -> Name -> Create API
- Set up DyanmoDB table
	-- Create Table -> Primary Key
- Set Up IAM Role
	-- Roles -> New Role -> Lambda -> Full Access
	-- Dynamo -> Full Access
- Lambda -> Set-up new function
	-- Trigger -> API Gateway (gives)
	-- Name -> Role -> Dynamo

## Review and Test
- Lambda Dashboard -> Choose Function

## Setup API Integration For Read
- API Gateway console
- Resource
	-- Mapping Template

## Test the API with HTTPie or Curl

# Process
- Three main items
1 - Input
2 - Process
3 - Output

## Extra Information
- Place (where)
- Method (how)
- Purpose (why)

## Organization
- Introduction
	-- Definition of the process
	-- Purpose/Why it is important
	-- Overview of steps/phases
- Steps
	-- Definition/Overview of Step
	-- Materials/Equipment Needed
	-- Events Occuring in the Step
	-- Causes & Effects related to these events
- Conclusion
	-- Discusses cause & effects of the process
	-- Describes the end result produced by the process
