# Onfido.DefaultApi

All URIs are relative to *https://api.onfido.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelReport**](DefaultApi.md#cancelReport) | **POST** /checks/{check_id}/reports/{report_id}/cancel | This endpoint is for cancelling individual paused reports.
[**createApplicant**](DefaultApi.md#createApplicant) | **POST** /applicants | Create Applicant
[**createCheck**](DefaultApi.md#createCheck) | **POST** /applicants/{applicant_id}/checks | Create a check
[**createWebhook**](DefaultApi.md#createWebhook) | **POST** /webhooks | Create a webhook
[**destroyApplicant**](DefaultApi.md#destroyApplicant) | **DELETE** /applicants/{applicant_id} | Delete Applicant
[**downloadDocument**](DefaultApi.md#downloadDocument) | **GET** /applicants/{applicant_id}/documents/{document_id}/download | Download a documents raw data
[**downloadLivePhoto**](DefaultApi.md#downloadLivePhoto) | **GET** /live_photos/{live_photo_id}/download | Download live photo
[**findAddresses**](DefaultApi.md#findAddresses) | **GET** /addresses/pick | Search for addresses by postcode
[**findApplicant**](DefaultApi.md#findApplicant) | **GET** /applicants/{applicant_id} | Retrieve Applicant
[**findCheck**](DefaultApi.md#findCheck) | **GET** /applicants/{applicant_id}/checks/{check_id} | Retrieve a Check
[**findDocument**](DefaultApi.md#findDocument) | **GET** /applicants/{applicant_id}/documents/{document_id} | A single document can be retrieved by calling this endpoint with the document’s unique identifier.
[**findLivePhoto**](DefaultApi.md#findLivePhoto) | **GET** /live_photos/{live_photo_id} | Retrieve live photo
[**findReport**](DefaultApi.md#findReport) | **GET** /checks/{check_id}/reports/{report_id} | A single report can be retrieved using this endpoint with the corresponding unique identifier.
[**findReportTypeGroup**](DefaultApi.md#findReportTypeGroup) | **GET** /report_type_groups/{report_type_group_id} | Retrieve single report type group object
[**findWebhook**](DefaultApi.md#findWebhook) | **GET** /webhooks/{webhook_id} | Retrieve a Webhook
[**listApplicants**](DefaultApi.md#listApplicants) | **GET** /applicants | List Applicants
[**listChecks**](DefaultApi.md#listChecks) | **GET** /applicants/{applicant_id}/checks | Retrieve Checks
[**listDocuments**](DefaultApi.md#listDocuments) | **GET** /applicants/{applicant_id}/documents | List documents
[**listLivePhotos**](DefaultApi.md#listLivePhotos) | **GET** /live_photos | List live photos
[**listReportTypeGroups**](DefaultApi.md#listReportTypeGroups) | **GET** /report_type_groups | Retrieve all report type groups
[**listReports**](DefaultApi.md#listReports) | **GET** /checks/{check_id}/reports | All the reports belonging to a particular check can be listed from this endpoint.
[**listWebhooks**](DefaultApi.md#listWebhooks) | **GET** /webhooks | List webhooks
[**restoreApplicant**](DefaultApi.md#restoreApplicant) | **POST** /applicants/{applicant_id}/restore | Restore Applicant
[**resumeCheck**](DefaultApi.md#resumeCheck) | **POST** /checks/{check_id}/resume | Resume a Check
[**resumeReport**](DefaultApi.md#resumeReport) | **POST** /checks/{check_id}/reports/{report_id}/resume | This endpoint is for resuming individual paused reports.
[**updateApplicant**](DefaultApi.md#updateApplicant) | **PUT** /applicants/{applicant_id} | Update Applicant
[**uploadDocument**](DefaultApi.md#uploadDocument) | **POST** /applicants/{applicant_id}/documents | Upload a document
[**uploadLivePhoto**](DefaultApi.md#uploadLivePhoto) | **POST** /live_photos | Upload live photo


<a name="cancelReport"></a>
# **cancelReport**
> cancelReport(checkId, reportId)

This endpoint is for cancelling individual paused reports.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var checkId = "checkId_example"; // String | 

var reportId = "reportId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cancelReport(checkId, reportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkId** | **String**|  | 
 **reportId** | **String**|  | 

### Return type

null (empty response body)

<a name="createApplicant"></a>
# **createApplicant**
> Applicant createApplicant(opts)

Create Applicant

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var opts = { 
  'data': new Onfido.Applicant() // Applicant | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createApplicant(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Applicant**](Applicant.md)|  | [optional] 

### Return type

[**Applicant**](Applicant.md)

<a name="createCheck"></a>
# **createCheck**
> Check createCheck(applicantId, opts)

Create a check

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 

var opts = { 
  'data': new Onfido.CheckCreationRequest() // CheckCreationRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCheck(applicantId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 
 **data** | [**CheckCreationRequest**](CheckCreationRequest.md)|  | [optional] 

### Return type

[**Check**](Check.md)

<a name="createWebhook"></a>
# **createWebhook**
> Webhook createWebhook(opts)

Create a webhook

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var opts = { 
  'data': new Onfido.Webhook() // Webhook | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWebhook(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Webhook**](Webhook.md)|  | [optional] 

### Return type

[**Webhook**](Webhook.md)

<a name="destroyApplicant"></a>
# **destroyApplicant**
> destroyApplicant(applicantId)

Delete Applicant

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.destroyApplicant(applicantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 

### Return type

null (empty response body)

<a name="downloadDocument"></a>
# **downloadDocument**
> File downloadDocument(applicantId, documentId)

Download a documents raw data

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 

var documentId = "documentId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadDocument(applicantId, documentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 
 **documentId** | **String**|  | 

### Return type

**File**

<a name="downloadLivePhoto"></a>
# **downloadLivePhoto**
> File downloadLivePhoto(livePhotoId)

Download live photo

Live photos are downloaded using this endpoint.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var livePhotoId = "livePhotoId_example"; // String | The live photo’s unique identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadLivePhoto(livePhotoId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **livePhotoId** | **String**| The live photo’s unique identifier. | 

### Return type

**File**

<a name="findAddresses"></a>
# **findAddresses**
> GenericAddressesList findAddresses(postcode)

Search for addresses by postcode

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var postcode = "postcode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findAddresses(postcode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcode** | **String**|  | 

### Return type

[**GenericAddressesList**](GenericAddressesList.md)

<a name="findApplicant"></a>
# **findApplicant**
> Applicant findApplicant(applicantId)

Retrieve Applicant

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findApplicant(applicantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 

### Return type

[**Applicant**](Applicant.md)

<a name="findCheck"></a>
# **findCheck**
> Check findCheck(applicantId, checkId)

Retrieve a Check

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 

var checkId = "checkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findCheck(applicantId, checkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 
 **checkId** | **String**|  | 

### Return type

[**Check**](Check.md)

<a name="findDocument"></a>
# **findDocument**
> Document findDocument(applicantId, documentId)

A single document can be retrieved by calling this endpoint with the document’s unique identifier.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 

var documentId = "documentId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findDocument(applicantId, documentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 
 **documentId** | **String**|  | 

### Return type

[**Document**](Document.md)

<a name="findLivePhoto"></a>
# **findLivePhoto**
> LivePhoto findLivePhoto(livePhotoId)

Retrieve live photo

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var livePhotoId = "livePhotoId_example"; // String | The live photo’s unique identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findLivePhoto(livePhotoId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **livePhotoId** | **String**| The live photo’s unique identifier. | 

### Return type

[**LivePhoto**](LivePhoto.md)

<a name="findReport"></a>
# **findReport**
> Report findReport(checkId, reportId)

A single report can be retrieved using this endpoint with the corresponding unique identifier.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var checkId = "checkId_example"; // String | 

var reportId = "reportId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findReport(checkId, reportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkId** | **String**|  | 
 **reportId** | **String**|  | 

### Return type

[**Report**](Report.md)

<a name="findReportTypeGroup"></a>
# **findReportTypeGroup**
> ReportTypeGroup findReportTypeGroup(reportTypeGroupId)

Retrieve single report type group object

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var reportTypeGroupId = "reportTypeGroupId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findReportTypeGroup(reportTypeGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportTypeGroupId** | **String**|  | 

### Return type

[**ReportTypeGroup**](ReportTypeGroup.md)

<a name="findWebhook"></a>
# **findWebhook**
> Webhook findWebhook(webhookId)

Retrieve a Webhook

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var webhookId = "webhookId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findWebhook(webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**|  | 

### Return type

[**Webhook**](Webhook.md)

<a name="listApplicants"></a>
# **listApplicants**
> ApplicantsList listApplicants(opts)

List Applicants

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var opts = { 
  'page': 56, // Integer | The page to return. Defaults to the first page if omitted. The first page is `page=1`
  'perPage': 56, // Integer | The number of objects per page. Defaults to 20 if omitted.
  'includeDeleted': true // Boolean | Whether to also include applicants scheduled for deletion. Defaults to false if omitted.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listApplicants(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| The page to return. Defaults to the first page if omitted. The first page is &#x60;page&#x3D;1&#x60; | [optional] 
 **perPage** | **Integer**| The number of objects per page. Defaults to 20 if omitted. | [optional] 
 **includeDeleted** | **Boolean**| Whether to also include applicants scheduled for deletion. Defaults to false if omitted. | [optional] 

### Return type

[**ApplicantsList**](ApplicantsList.md)

<a name="listChecks"></a>
# **listChecks**
> ChecksList listChecks(applicantId, opts)

Retrieve Checks

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 

var opts = { 
  'page': 56, // Integer | The page to return. Defaults to the first page if omitted. The first page is `page=1`
  'perPage': 56 // Integer | The number of objects per page. Defaults to 20 if omitted.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listChecks(applicantId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 
 **page** | **Integer**| The page to return. Defaults to the first page if omitted. The first page is &#x60;page&#x3D;1&#x60; | [optional] 
 **perPage** | **Integer**| The number of objects per page. Defaults to 20 if omitted. | [optional] 

### Return type

[**ChecksList**](ChecksList.md)

<a name="listDocuments"></a>
# **listDocuments**
> DocumentsList listDocuments(applicantId)

List documents

All documents belonging to an applicant can be listed from this endpoint

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDocuments(applicantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 

### Return type

[**DocumentsList**](DocumentsList.md)

<a name="listLivePhotos"></a>
# **listLivePhotos**
> LivePhotosList listLivePhotos(applicantId)

List live photos

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | The id of the applicant the live photos belongs to.


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLivePhotos(applicantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**| The id of the applicant the live photos belongs to. | 

### Return type

[**LivePhotosList**](LivePhotosList.md)

<a name="listReportTypeGroups"></a>
# **listReportTypeGroups**
> ReportTypeGroupsList listReportTypeGroups()

Retrieve all report type groups

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listReportTypeGroups(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ReportTypeGroupsList**](ReportTypeGroupsList.md)

<a name="listReports"></a>
# **listReports**
> ReportsList listReports(checkId)

All the reports belonging to a particular check can be listed from this endpoint.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var checkId = "checkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listReports(checkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkId** | **String**|  | 

### Return type

[**ReportsList**](ReportsList.md)

<a name="listWebhooks"></a>
# **listWebhooks**
> WebhooksList listWebhooks()

List webhooks

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listWebhooks(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WebhooksList**](WebhooksList.md)

<a name="restoreApplicant"></a>
# **restoreApplicant**
> restoreApplicant(applicantId)

Restore Applicant

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.restoreApplicant(applicantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 

### Return type

null (empty response body)

<a name="resumeCheck"></a>
# **resumeCheck**
> resumeCheck(checkId)

Resume a Check

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var checkId = "checkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resumeCheck(checkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkId** | **String**|  | 

### Return type

null (empty response body)

<a name="resumeReport"></a>
# **resumeReport**
> resumeReport(checkId, reportId)

This endpoint is for resuming individual paused reports.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var checkId = "checkId_example"; // String | 

var reportId = "reportId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resumeReport(checkId, reportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkId** | **String**|  | 
 **reportId** | **String**|  | 

### Return type

null (empty response body)

<a name="updateApplicant"></a>
# **updateApplicant**
> Applicant updateApplicant(applicantId, opts)

Update Applicant

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 

var opts = { 
  'data': new Onfido.Applicant() // Applicant | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateApplicant(applicantId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 
 **data** | [**Applicant**](Applicant.md)|  | [optional] 

### Return type

[**Applicant**](Applicant.md)

<a name="uploadDocument"></a>
# **uploadDocument**
> Document uploadDocument(applicantId, type, opts)

Upload a document

Documents are uploaded using this endpoint. Along with the file upload the relevant document type must be specified. Documents must be uploaded as a multipart form. The valid file types are: jpg, png and pdf. The file size must be between 2KB and 3MB. 

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | 

var type = "type_example"; // String | 

var opts = { 
  'side': "side_example", // String | 
  'file': "/path/to/file.txt" // File | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadDocument(applicantId, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**|  | 
 **type** | **String**|  | 
 **side** | **String**|  | [optional] 
 **file** | **File**|  | [optional] 

### Return type

[**Document**](Document.md)

<a name="uploadLivePhoto"></a>
# **uploadLivePhoto**
> LivePhoto uploadLivePhoto(applicantId, file, opts)

Upload live photo

You can upload live photos to this endpoint. Like document upload, files must be uploaded as a multipart form. Valid file types are jpg, png and pdf. The file size must be between 32KB and 10MB. Live photos are validated at the point of upload to check that they contain exactly one face. This validation can be disabled by setting the advanced_validation argument to false. 

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.default;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();

var applicantId = "applicantId_example"; // String | The applicant_id to associate the live photo to.

var file = "/path/to/file.txt"; // File | The file to be uploaded.

var opts = { 
  'advancedValidation': true // Boolean | Validates that the live photo contains exactly one face.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadLivePhoto(applicantId, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicantId** | **String**| The applicant_id to associate the live photo to. | 
 **file** | **File**| The file to be uploaded. | 
 **advancedValidation** | **Boolean**| Validates that the live photo contains exactly one face. | [optional] 

### Return type

[**LivePhoto**](LivePhoto.md)

