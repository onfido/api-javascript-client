# Onfido.DefaultApi

All URIs are relative to *https://api.onfido.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelReport**](DefaultApi.md#cancelReport) | **POST** /checks/{check_id}/reports/{report_id}/cancel | This endpoint is for cancelling individual paused reports.
[**createApplicant**](DefaultApi.md#createApplicant) | **POST** /applicants | Create Applicant
[**createCheck**](DefaultApi.md#createCheck) | **POST** /applicants/{applicant_id}/checks | Create a check
[**createWebhook**](DefaultApi.md#createWebhook) | **POST** /webhooks | Create a webhook
[**deleteWebhook**](DefaultApi.md#deleteWebhook) | **DELETE** /webhooks/{webhook_id} | Delete a webhook
[**destroyApplicant**](DefaultApi.md#destroyApplicant) | **DELETE** /applicants/{applicant_id} | Delete Applicant
[**downloadDocument**](DefaultApi.md#downloadDocument) | **GET** /applicants/{applicant_id}/documents/{document_id}/download | Download a documents raw data
[**downloadLivePhoto**](DefaultApi.md#downloadLivePhoto) | **GET** /live_photos/{live_photo_id}/download | Download live photo
[**downloadLiveVideo**](DefaultApi.md#downloadLiveVideo) | **GET** /live_videos/{live_video_id}/download | Download live video
[**editWebhook**](DefaultApi.md#editWebhook) | **PUT** /webhooks/{webhook_id} | Edit a webhook
[**findAddresses**](DefaultApi.md#findAddresses) | **GET** /addresses/pick | Search for addresses by postcode
[**findApplicant**](DefaultApi.md#findApplicant) | **GET** /applicants/{applicant_id} | Retrieve Applicant
[**findCheck**](DefaultApi.md#findCheck) | **GET** /applicants/{applicant_id}/checks/{check_id} | Retrieve a Check
[**findDocument**](DefaultApi.md#findDocument) | **GET** /applicants/{applicant_id}/documents/{document_id} | A single document can be retrieved by calling this endpoint with the document’s unique identifier.
[**findLivePhoto**](DefaultApi.md#findLivePhoto) | **GET** /live_photos/{live_photo_id} | Retrieve live photo
[**findLiveVideo**](DefaultApi.md#findLiveVideo) | **GET** /live_videos/{live_video_id} | Retrieve live video
[**findReport**](DefaultApi.md#findReport) | **GET** /checks/{check_id}/reports/{report_id} | A single report can be retrieved using this endpoint with the corresponding unique identifier.
[**findReportTypeGroup**](DefaultApi.md#findReportTypeGroup) | **GET** /report_type_groups/{report_type_group_id} | Retrieve single report type group object
[**findWebhook**](DefaultApi.md#findWebhook) | **GET** /webhooks/{webhook_id} | Retrieve a Webhook
[**generateSdkToken**](DefaultApi.md#generateSdkToken) | **POST** /sdk_token | Generate a SDK token
[**listApplicants**](DefaultApi.md#listApplicants) | **GET** /applicants | List Applicants
[**listChecks**](DefaultApi.md#listChecks) | **GET** /applicants/{applicant_id}/checks | Retrieve Checks
[**listDocuments**](DefaultApi.md#listDocuments) | **GET** /applicants/{applicant_id}/documents | List documents
[**listLivePhotos**](DefaultApi.md#listLivePhotos) | **GET** /live_photos | List live photos
[**listLiveVideos**](DefaultApi.md#listLiveVideos) | **GET** /live_videos | List live videos
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
> cancelReport(check_id, report_id)

This endpoint is for cancelling individual paused reports.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var check_id = "check_id_example"; // String | 
var report_id = "report_id_example"; // String | 
apiInstance.cancelReport(check_id, report_id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **String**|  | 
 **report_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createApplicant"></a>
# **createApplicant**
> Applicant createApplicant(Applicant)

Create Applicant

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var Applicant = new Onfido.Applicant(); // Applicant | 
apiInstance.createApplicant(Applicant).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Applicant** | [**Applicant**](Applicant.md)|  | 

### Return type

[**Applicant**](Applicant.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCheck"></a>
# **createCheck**
> Check createCheck(applicant_id, Check)

Create a check

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
var Check = new Onfido.Check(); // Check | 
apiInstance.createCheck(applicant_id, Check).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 
 **Check** | [**Check**](Check.md)|  | 

### Return type

[**Check**](Check.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createWebhook"></a>
# **createWebhook**
> Webhook createWebhook(Webhook)

Create a webhook

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var Webhook = new Onfido.Webhook(); // Webhook | 
apiInstance.createWebhook(Webhook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Webhook** | [**Webhook**](Webhook.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWebhook"></a>
# **deleteWebhook**
> deleteWebhook(webhook_id)

Delete a webhook

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var webhook_id = "webhook_id_example"; // String | 
apiInstance.deleteWebhook(webhook_id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="destroyApplicant"></a>
# **destroyApplicant**
> destroyApplicant(applicant_id)

Delete Applicant

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
apiInstance.destroyApplicant(applicant_id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="downloadDocument"></a>
# **downloadDocument**
> File downloadDocument(applicant_id, document_id)

Download a documents raw data

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
var document_id = "document_id_example"; // String | 
apiInstance.downloadDocument(applicant_id, document_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 
 **document_id** | **String**|  | 

### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="downloadLivePhoto"></a>
# **downloadLivePhoto**
> File downloadLivePhoto(live_photo_id)

Download live photo

Live photos are downloaded using this endpoint.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var live_photo_id = "live_photo_id_example"; // String | The live photo’s unique identifier.
apiInstance.downloadLivePhoto(live_photo_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **live_photo_id** | **String**| The live photo’s unique identifier. | 

### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="downloadLiveVideo"></a>
# **downloadLiveVideo**
> File downloadLiveVideo(live_video_id)

Download live video

Live videos are downloaded using this endpoint.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var live_video_id = "live_video_id_example"; // String | The live video’s unique identifier.
apiInstance.downloadLiveVideo(live_video_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **live_video_id** | **String**| The live video’s unique identifier. | 

### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="editWebhook"></a>
# **editWebhook**
> Webhook editWebhook(webhook_id, Webhook)

Edit a webhook

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var webhook_id = "webhook_id_example"; // String | 
var Webhook = new Onfido.Webhook(); // Webhook | 
apiInstance.editWebhook(webhook_id, Webhook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **String**|  | 
 **Webhook** | [**Webhook**](Webhook.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findAddresses"></a>
# **findAddresses**
> GenericAddressesList findAddresses(postcode)

Search for addresses by postcode

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var postcode = "postcode_example"; // String | 
apiInstance.findAddresses(postcode).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcode** | **String**|  | 

### Return type

[**GenericAddressesList**](GenericAddressesList.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findApplicant"></a>
# **findApplicant**
> Applicant findApplicant(applicant_id)

Retrieve Applicant

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
apiInstance.findApplicant(applicant_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 

### Return type

[**Applicant**](Applicant.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findCheck"></a>
# **findCheck**
> CheckWithReportIds findCheck(applicant_id, check_id)

Retrieve a Check

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
var check_id = "check_id_example"; // String | 
apiInstance.findCheck(applicant_id, check_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 
 **check_id** | **String**|  | 

### Return type

[**CheckWithReportIds**](CheckWithReportIds.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findDocument"></a>
# **findDocument**
> Document findDocument(applicant_id, document_id)

A single document can be retrieved by calling this endpoint with the document’s unique identifier.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
var document_id = "document_id_example"; // String | 
apiInstance.findDocument(applicant_id, document_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 
 **document_id** | **String**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findLivePhoto"></a>
# **findLivePhoto**
> LivePhoto findLivePhoto(live_photo_id)

Retrieve live photo

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var live_photo_id = "live_photo_id_example"; // String | The live photo’s unique identifier.
apiInstance.findLivePhoto(live_photo_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **live_photo_id** | **String**| The live photo’s unique identifier. | 

### Return type

[**LivePhoto**](LivePhoto.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findLiveVideo"></a>
# **findLiveVideo**
> LiveVideo findLiveVideo(live_video_id)

Retrieve live video

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var live_video_id = "live_video_id_example"; // String | The live video’s unique identifier.
apiInstance.findLiveVideo(live_video_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **live_video_id** | **String**| The live video’s unique identifier. | 

### Return type

[**LiveVideo**](LiveVideo.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findReport"></a>
# **findReport**
> Report findReport(check_id, report_id)

A single report can be retrieved using this endpoint with the corresponding unique identifier.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var check_id = "check_id_example"; // String | 
var report_id = "report_id_example"; // String | 
apiInstance.findReport(check_id, report_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **String**|  | 
 **report_id** | **String**|  | 

### Return type

[**Report**](Report.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findReportTypeGroup"></a>
# **findReportTypeGroup**
> ReportTypeGroup findReportTypeGroup(report_type_group_id)

Retrieve single report type group object

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var report_type_group_id = "report_type_group_id_example"; // String | 
apiInstance.findReportTypeGroup(report_type_group_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_type_group_id** | **String**|  | 

### Return type

[**ReportTypeGroup**](ReportTypeGroup.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findWebhook"></a>
# **findWebhook**
> Webhook findWebhook(webhook_id)

Retrieve a Webhook

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var webhook_id = "webhook_id_example"; // String | 
apiInstance.findWebhook(webhook_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **String**|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="generateSdkToken"></a>
# **generateSdkToken**
> SdkTokenResponse generateSdkToken(SdkTokenRequest)

Generate a SDK token

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var SdkTokenRequest = new Onfido.SdkTokenRequest(); // SdkTokenRequest | 
apiInstance.generateSdkToken(SdkTokenRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SdkTokenRequest** | [**SdkTokenRequest**](SdkTokenRequest.md)|  | 

### Return type

[**SdkTokenResponse**](SdkTokenResponse.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listApplicants"></a>
# **listApplicants**
> ApplicantsList listApplicants(opts)

List Applicants

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var opts = {
  'page': 1, // Number | The page to return. The first page is `page=1`
  'per_page': 20, // Number | The number of objects per page.
  'include_deleted': false // Boolean | Whether to also include applicants scheduled for deletion.
};
apiInstance.listApplicants(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page to return. The first page is &#x60;page&#x3D;1&#x60; | [optional] [default to 1]
 **per_page** | **Number**| The number of objects per page. | [optional] [default to 20]
 **include_deleted** | **Boolean**| Whether to also include applicants scheduled for deletion. | [optional] [default to false]

### Return type

[**ApplicantsList**](ApplicantsList.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listChecks"></a>
# **listChecks**
> ChecksList listChecks(applicant_id, opts)

Retrieve Checks

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
var opts = {
  'page': 1, // Number | The page to return. The first page is `page=1`.
  'per_page': 20 // Number | The number of objects per page.
};
apiInstance.listChecks(applicant_id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 
 **page** | **Number**| The page to return. The first page is &#x60;page&#x3D;1&#x60;. | [optional] [default to 1]
 **per_page** | **Number**| The number of objects per page. | [optional] [default to 20]

### Return type

[**ChecksList**](ChecksList.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDocuments"></a>
# **listDocuments**
> DocumentsList listDocuments(applicant_id)

List documents

All documents belonging to an applicant can be listed from this endpoint

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
apiInstance.listDocuments(applicant_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 

### Return type

[**DocumentsList**](DocumentsList.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listLivePhotos"></a>
# **listLivePhotos**
> LivePhotosList listLivePhotos(applicant_id)

List live photos

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | The id of the applicant the live photos belong to.
apiInstance.listLivePhotos(applicant_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**| The id of the applicant the live photos belong to. | 

### Return type

[**LivePhotosList**](LivePhotosList.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listLiveVideos"></a>
# **listLiveVideos**
> LiveVideosList listLiveVideos(applicant_id)

List live videos

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | The id of the applicant the live videos belong to.
apiInstance.listLiveVideos(applicant_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**| The id of the applicant the live videos belong to. | 

### Return type

[**LiveVideosList**](LiveVideosList.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listReportTypeGroups"></a>
# **listReportTypeGroups**
> ReportTypeGroupsList listReportTypeGroups()

Retrieve all report type groups

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
apiInstance.listReportTypeGroups().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ReportTypeGroupsList**](ReportTypeGroupsList.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listReports"></a>
# **listReports**
> ReportsList listReports(check_id)

All the reports belonging to a particular check can be listed from this endpoint.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var check_id = "check_id_example"; // String | 
apiInstance.listReports(check_id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **String**|  | 

### Return type

[**ReportsList**](ReportsList.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listWebhooks"></a>
# **listWebhooks**
> WebhooksList listWebhooks()

List webhooks

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
apiInstance.listWebhooks().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WebhooksList**](WebhooksList.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="restoreApplicant"></a>
# **restoreApplicant**
> restoreApplicant(applicant_id)

Restore Applicant

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
apiInstance.restoreApplicant(applicant_id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="resumeCheck"></a>
# **resumeCheck**
> resumeCheck(check_id)

Resume a Check

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var check_id = "check_id_example"; // String | 
apiInstance.resumeCheck(check_id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="resumeReport"></a>
# **resumeReport**
> resumeReport(check_id, report_id)

This endpoint is for resuming individual paused reports.

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var check_id = "check_id_example"; // String | 
var report_id = "report_id_example"; // String | 
apiInstance.resumeReport(check_id, report_id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **String**|  | 
 **report_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateApplicant"></a>
# **updateApplicant**
> Applicant updateApplicant(applicant_id, Applicant)

Update Applicant

Allows updating of an applicant’s information before any checks are created. - Partial updates - Addresses and ID numbers present will replace existing ones - Same applicant validations to create applicant 

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
var Applicant = new Onfido.Applicant(); // Applicant | 
apiInstance.updateApplicant(applicant_id, Applicant).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 
 **Applicant** | [**Applicant**](Applicant.md)|  | 

### Return type

[**Applicant**](Applicant.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadDocument"></a>
# **uploadDocument**
> Document uploadDocument(applicant_id, type, file, opts)

Upload a document

Documents are uploaded using this endpoint. Along with the file upload the relevant document type must be specified. Documents must be uploaded as a multipart form. The valid file types are: jpg, png and pdf. The file size must be between 2KB and 3MB. 

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
var type = "type_example"; // String | The type of document.
var file = "/path/to/file"; // File | The file to be uploaded.
var opts = {
  'side': "side_example", // String | Either the `front` or `back` of the document.
  'issuing_country': "issuing_country_example" // String | The issuing country of the document, a 3-letter ISO code.
};
apiInstance.uploadDocument(applicant_id, type, file, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 
 **type** | **String**| The type of document. | 
 **file** | **File**| The file to be uploaded. | 
 **side** | **String**| Either the &#x60;front&#x60; or &#x60;back&#x60; of the document. | [optional] 
 **issuing_country** | **String**| The issuing country of the document, a 3-letter ISO code. | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadLivePhoto"></a>
# **uploadLivePhoto**
> LivePhoto uploadLivePhoto(applicant_id, file, opts)

Upload live photo

You can upload live photos to this endpoint. Like document upload, files must be uploaded as a multipart form. Valid file types are jpg, png and pdf. The file size must be between 32KB and 10MB. Live photos are validated at the point of upload to check that they contain exactly one face. This validation can be disabled by setting the advanced_validation argument to false. 

### Example
```javascript
var Onfido = require('onfido');
var defaultClient = Onfido.ApiClient.instance;
// Configure API key authorization: Token
const token_auth = defaultClient.authentications['Token'];
token_auth.apiKey = 'token=' + 'YOUR API KEY';
token_auth.apiKeyPrefix = 'Token';

var apiInstance = new Onfido.DefaultApi();
var applicant_id = "applicant_id_example"; // String | 
var file = "/path/to/file"; // File | The file to be uploaded.
var opts = {
  'advanced_validation': true // Boolean | Validates that the live photo contains exactly one face.
};
apiInstance.uploadLivePhoto(applicant_id, file, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant_id** | **String**|  | 
 **file** | **File**| The file to be uploaded. | 
 **advanced_validation** | **Boolean**| Validates that the live photo contains exactly one face. | [optional] [default to true]

### Return type

[**LivePhoto**](LivePhoto.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

