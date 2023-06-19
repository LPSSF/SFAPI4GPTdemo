# SFAPI4GPTdemo

Codes for Access Salesforce data for demo perpose. 

### Login with JSForce
1. Get the access of salesforce connect with setting. 
2. Access Account info. 

```

import jsfroce from "jsforce";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const conn = new jsfroce.Connection({
          loginUrl: process.env.SF_LOGIN
        });
        conn.login(process.env.SF_USERNAME, process.env.SF_PASSWORD + process.env.SF_SECURITYTOKEN , function(err, userInfo) {
          if (err) { return console.error(err); }
          // logged in user property
          console.log("User ID: " + userInfo.id);
          console.log("Org ID: " + userInfo.organizationId);
          con.query("SELECT Id, Name FROM Account WHERE Nam='CTF' limit 1", function(err, result) {
            if (err) { return console.error(err); }
            console.log("total : " + result.totalSize);
            console.log("fetched : " + result.records.length);
            result.records.forEach(function(record) {
              console.log(record.Name);
            });
          });
        });
}
  


```


The related .env file, put it at the root folder

```
SF_LOGIN="https://test.salesforce.com"
SF_USERNAME="system.devops@pccw.com.lpsdevsb02"
SF_PASSWORD="LPS@hk2023"
SF_SECURITYTOKEN=""
OPENAI_ACCESS_TOKEN=""
```



Reference: 

https://onlinehelp.coveo.com/en/ces/7.0/administrator/getting_the_security_token_for_your_salesforce_account.htm


### Pipeline 

With authed background, use the same code template in Auth to query the pipeline data.
1. with Account Id to get Pipeline. 
2. limit return result to max 10




```
SELECT Id,name,  owner.name ,account.name,TCV_Exclude_VAT__c, EBITDA__c FROM Opportunity Where Account.Id = ? limit 10
```


### Approval List

With authed context, use the same code template in Auth to query the pipeline data.
1. with Approval User name to get Approval List. 
2. limit return result to max 10


Using Query 
```
Select Id, name,assigned_user__c, assigned_user__r.name, Approval_status__c, Approval_Submission_Time__c  from Approval_Action_log__c where Approval_status__c = 'Pending' and  assigned_user__r.name = 'CM Lee' Limit 10 

```

Change assigned user name accordingly.

