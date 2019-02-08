# Onfido.Applicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier for the applicant. Read-only. | [optional] 
**created_at** | **Date** | The date and time when this applicant was created. Read-only. | [optional] 
**delete_at** | **Date** | The date and time when this applicant is scheduled to be deleted. Read-only. | [optional] 
**href** | **String** | The uri of this resource. Read-only. | [optional] 
**sandbox** | **Boolean** | Read-only. | [optional] 
**title** | **String** | The applicant’s title | [optional] 
**first_name** | **String** | The applicant’s first name | [optional] 
**middle_name** | **String** | The applicant’s middle name(s) or initial | [optional] 
**last_name** | **String** | The applicant’s surname | [optional] 
**email** | **String** | The applicant’s email address. Required if doing a US check or a standard UK check. | [optional] 
**gender** | **String** | The applicant’s gender. Valid values are male and female. | [optional] 
**dob** | **Date** | The applicant’s date of birth | [optional] 
**telephone** | **String** | The applicant’s landline phone number | [optional] 
**mobile** | **String** | The applicant’s mobile phone number | [optional] 
**country** | **String** | The country where this applicant will be checked. This must be a three-letter ISO code e.g. GBR or USA | [optional] 
**nationality** | **String** | The applicant&#39;s nationality. This must be a three-letter ISO code e.g. GBR or USA | [optional] 
**mothers_maiden_name** | **String** | The applicant’s mothers maiden name | [optional] 
**country_of_birth** | **String** | The applicant’s country of birth | [optional] 
**town_of_birth** | **String** | The applicant’s town of birth | [optional] 
**previous_last_name** | **String** | The applicant’s previous last name | [optional] 
**addresses** | [**[Address]**](Address.md) |  | [optional] 
**id_numbers** | [**[IdNumber]**](IdNumber.md) |  | [optional] 


