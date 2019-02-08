# Onfido.Report

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier for the report. Read-only. | [optional] 
**created_at** | **Date** | The date and time at which the report was first initiated. Read-only. | [optional] 
**href** | **String** | The API endpoint to retrieve the report. Read-only. | [optional] 
**status** | **String** | The current state of the report in the checking process. Read-only. | [optional] 
**result** | **String** | The result of the report. Read-only. | [optional] 
**sub_result** | **String** | The sub_result of the report. It gives a more detailed result for document reports only, and will be null otherwise. Read-only. | [optional] 
**breakdown** | **{String: Object}** | The details of the report. This is specific to each type of report. Read-only. | [optional] 
**properties** | **{String: Object}** | The properties associated with the report, if any. Read-only. | [optional] 
**name** | **String** | The name of the report type. | 
**variant** | **String** | The name of the report type variant, if required. | [optional] 
**options** | [**[ReportOption]**](ReportOption.md) | List of Report Option objects. | [optional] 
**documents** | [**[ReportDocument]**](ReportDocument.md) | Array of objects with document ids that were used in the Onfido engine. [ONLY USED IN A DOCUMENT CHECK] | [optional] 


