# onfido

Onfido - JavaScript client for onfido
The Onfido API is used to submit check requests.

This package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 2.0.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

Install via npm:

```shell
npm install onfido
```

Alternatively, if you're using Yarn:

```shell
yarn add onfido
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const Onfido = require('onfido');

const defaultClient = Onfido.ApiClient.instance;

// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

// Limit the at-rest region, if needed (optional, see https://documentation.onfido.com/#regions)
// defaultClient.basePath = Onfido.ApiClient.getBasePathFromSettings(1, {region: 'us'});

const api = new Onfido.DefaultApi();

// Setting applicant details
const applicant = new Onfido.Applicant();
applicant.first_name = 'John';
applicant.last_name = 'Smith';
applicant.dob = new Date('1980-01-22');
applicant.country = 'GBR';

// You can also use getters and setters for properties using camelCase:
// applicant.setFirstName('John');
// applicant.setLastName('Smith');

const address = new Onfido.Address();
address.building_number = '100';
address.street = 'Main Street';
address.town = 'London';
address.postcode = 'SW4 6EH';
address.country = 'GBR';

applicant.addresses = [address];

// Setting check details
const check = new Onfido.Check();
check.type = 'express';
const report = new Onfido.Report();
report.name = 'identity';
check.reports = [report];

// Using promises
api.createApplicant(applicant).then(applicantData => {
  const applicantId = applicantData.id;
  return api.createCheck(applicantId, check);
}).then(checkData => {
  console.log(checkData);
}).catch(error => {
  console.error(error.response.body);
});

// Using async/await
(async () => {
  try {
    const applicantData = await api.createApplicant(applicant);
    const applicantId = applicantData.id;
    const checkData = await api.createCheck(applicantId, check);
    console.log(checkData);
  } catch(error) {
    console.error(error.response.body);
  }
})();

```

## Uploading and Downloading

For uploading files, the file argument should be a Readable Stream. For example, for uploading a document:

```javascript
const documentImage = fs.createReadStream('document.png');
api.uploadDocument(applicantId, 'passport', documentImage);
```

There is currently an issue with OpenAPI Generator, the tool used to generate this library, that prevents downloading files from working in Node. As a workaround, you can use the API endpoints for downloading files directly. See the API documentation for more info:
- Documents: https://documentation.onfido.com/#download-document
- Live Photos: https://documentation.onfido.com/#download-live-video

## Documentation for API Endpoints

All URIs are relative to *https://api.onfido.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Onfido.DefaultApi* | [**cancelReport**](docs/DefaultApi.md#cancelReport) | **POST** /checks/{check_id}/reports/{report_id}/cancel | This endpoint is for cancelling individual paused reports.
*Onfido.DefaultApi* | [**createApplicant**](docs/DefaultApi.md#createApplicant) | **POST** /applicants | Create Applicant
*Onfido.DefaultApi* | [**createCheck**](docs/DefaultApi.md#createCheck) | **POST** /applicants/{applicant_id}/checks | Create a check
*Onfido.DefaultApi* | [**createWebhook**](docs/DefaultApi.md#createWebhook) | **POST** /webhooks | Create a webhook
*Onfido.DefaultApi* | [**destroyApplicant**](docs/DefaultApi.md#destroyApplicant) | **DELETE** /applicants/{applicant_id} | Delete Applicant
*Onfido.DefaultApi* | [**downloadDocument**](docs/DefaultApi.md#downloadDocument) | **GET** /applicants/{applicant_id}/documents/{document_id}/download | Download a documents raw data
*Onfido.DefaultApi* | [**downloadLivePhoto**](docs/DefaultApi.md#downloadLivePhoto) | **GET** /live_photos/{live_photo_id}/download | Download live photo
*Onfido.DefaultApi* | [**findAddresses**](docs/DefaultApi.md#findAddresses) | **GET** /addresses/pick | Search for addresses by postcode
*Onfido.DefaultApi* | [**findApplicant**](docs/DefaultApi.md#findApplicant) | **GET** /applicants/{applicant_id} | Retrieve Applicant
*Onfido.DefaultApi* | [**findCheck**](docs/DefaultApi.md#findCheck) | **GET** /applicants/{applicant_id}/checks/{check_id} | Retrieve a Check
*Onfido.DefaultApi* | [**findDocument**](docs/DefaultApi.md#findDocument) | **GET** /applicants/{applicant_id}/documents/{document_id} | A single document can be retrieved by calling this endpoint with the document’s unique identifier.
*Onfido.DefaultApi* | [**findLivePhoto**](docs/DefaultApi.md#findLivePhoto) | **GET** /live_photos/{live_photo_id} | Retrieve live photo
*Onfido.DefaultApi* | [**findReport**](docs/DefaultApi.md#findReport) | **GET** /checks/{check_id}/reports/{report_id} | A single report can be retrieved using this endpoint with the corresponding unique identifier.
*Onfido.DefaultApi* | [**findReportTypeGroup**](docs/DefaultApi.md#findReportTypeGroup) | **GET** /report_type_groups/{report_type_group_id} | Retrieve single report type group object
*Onfido.DefaultApi* | [**findWebhook**](docs/DefaultApi.md#findWebhook) | **GET** /webhooks/{webhook_id} | Retrieve a Webhook
*Onfido.DefaultApi* | [**listApplicants**](docs/DefaultApi.md#listApplicants) | **GET** /applicants | List Applicants
*Onfido.DefaultApi* | [**listChecks**](docs/DefaultApi.md#listChecks) | **GET** /applicants/{applicant_id}/checks | Retrieve Checks
*Onfido.DefaultApi* | [**listDocuments**](docs/DefaultApi.md#listDocuments) | **GET** /applicants/{applicant_id}/documents | List documents
*Onfido.DefaultApi* | [**listLivePhotos**](docs/DefaultApi.md#listLivePhotos) | **GET** /live_photos | List live photos
*Onfido.DefaultApi* | [**listReportTypeGroups**](docs/DefaultApi.md#listReportTypeGroups) | **GET** /report_type_groups | Retrieve all report type groups
*Onfido.DefaultApi* | [**listReports**](docs/DefaultApi.md#listReports) | **GET** /checks/{check_id}/reports | All the reports belonging to a particular check can be listed from this endpoint.
*Onfido.DefaultApi* | [**listWebhooks**](docs/DefaultApi.md#listWebhooks) | **GET** /webhooks | List webhooks
*Onfido.DefaultApi* | [**restoreApplicant**](docs/DefaultApi.md#restoreApplicant) | **POST** /applicants/{applicant_id}/restore | Restore Applicant
*Onfido.DefaultApi* | [**resumeCheck**](docs/DefaultApi.md#resumeCheck) | **POST** /checks/{check_id}/resume | Resume a Check
*Onfido.DefaultApi* | [**resumeReport**](docs/DefaultApi.md#resumeReport) | **POST** /checks/{check_id}/reports/{report_id}/resume | This endpoint is for resuming individual paused reports.
*Onfido.DefaultApi* | [**updateApplicant**](docs/DefaultApi.md#updateApplicant) | **PUT** /applicants/{applicant_id} | Update Applicant
*Onfido.DefaultApi* | [**uploadDocument**](docs/DefaultApi.md#uploadDocument) | **POST** /applicants/{applicant_id}/documents | Upload a document
*Onfido.DefaultApi* | [**uploadLivePhoto**](docs/DefaultApi.md#uploadLivePhoto) | **POST** /live_photos | Upload live photo


## Documentation for Models

 - [Onfido.Address](docs/Address.md)
 - [Onfido.Applicant](docs/Applicant.md)
 - [Onfido.ApplicantsList](docs/ApplicantsList.md)
 - [Onfido.Check](docs/Check.md)
 - [Onfido.CheckCommon](docs/CheckCommon.md)
 - [Onfido.CheckWithReportIds](docs/CheckWithReportIds.md)
 - [Onfido.ChecksList](docs/ChecksList.md)
 - [Onfido.Document](docs/Document.md)
 - [Onfido.DocumentsList](docs/DocumentsList.md)
 - [Onfido.Error](docs/Error.md)
 - [Onfido.GenericAddress](docs/GenericAddress.md)
 - [Onfido.GenericAddressesList](docs/GenericAddressesList.md)
 - [Onfido.IdNumber](docs/IdNumber.md)
 - [Onfido.LivePhoto](docs/LivePhoto.md)
 - [Onfido.LivePhotosList](docs/LivePhotosList.md)
 - [Onfido.Report](docs/Report.md)
 - [Onfido.ReportDocument](docs/ReportDocument.md)
 - [Onfido.ReportOption](docs/ReportOption.md)
 - [Onfido.ReportType](docs/ReportType.md)
 - [Onfido.ReportTypeGroup](docs/ReportTypeGroup.md)
 - [Onfido.ReportTypeGroupsList](docs/ReportTypeGroupsList.md)
 - [Onfido.ReportsList](docs/ReportsList.md)
 - [Onfido.Webhook](docs/Webhook.md)
 - [Onfido.WebhooksList](docs/WebhooksList.md)


## Documentation for Authorization


### Token

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

