## AWS Cognito
- Defines how to authenticate users
- Stores Auth Token on user devices
- Can also create temporary IAM

## Cognito User Pools and Federated Identities
- User pools is a complete user management
- Federated allows third party authenticators

## Creating a User Pool - Using step through process
- Choose user attributes to require for authentication, alias allows a username in addition to other attributes
- Set Password strength
- Enable MFA if desired
- Verification requirement of email
- Remember user devices
- App client allows connection between SPA and Cognito
- Uncheck generate client secret - only used for backend
- Triggers are custom events that occur during authentication process

## Understanding the Cognito Auth Flow
- User Signsup -> User Pool -> Create & Store User -> Confirmation Email -> Confirm Account -> User SignIn -> Tokens sent to User -> Authenticate Requests -> Backend

## Adding Cognito to Front-End App
- Use JS SDK from AWS

## Adding signup to Front-End App


## Managing User State with Cognito


## Using Cognito Authorizer with API Gateway


## Passing the right UserID to Lambda


## Using Query Parms & Cognito From Lambda


## Passing Query Params from the Front End


## Passing the User ID to the DELETE endpoint


# API and Lambda

## Body Mapping - Request
- $input is variable given by AWS to parse the body of a request
- Uses Apache Velocity Language to parse
- Wrapped in quotation marks because it should be transformed into a string

- 	{
		"propname": "$input.json($.object.property);"
	}

## Body Mapping - Response

## Model
- Defines the data structure
- Use in Method Request to validate data
