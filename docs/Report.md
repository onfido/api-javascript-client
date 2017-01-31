# Onfido.Report

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier for the report. | [optional] 
**createdAt** | **Date** | The date and time at which the report was first initiated. | [optional] 
**href** | **String** | The API endpoint to retrieve the report. | [optional] 
**name** | **String** | Report type string identifier. | [optional] 
**status** | **String** | The current state of the report in the checking process. | [optional] 
**result** | **String** | The result of the report. | [optional] 
**variant** | **String** | Report variant string identifier. Some reports e.g. criminal_history have sub-types, which are identified by this field. | [optional] 
**options** | **{String: String}** | Report options. Some reports e.g. criminal_history expose additional options. | [optional] 
**breakdowns** | **{String: String}** | The details of the report. This is specific to each type of report. | [optional] 
**properties** | **{String: String}** | The properties associated with the report, if any. | [optional] 


