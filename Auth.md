## Auth with an user use jsforce - demo code in Node.js

### function for 1) get the access of salesforce connect with setting. 2) Access Account info. 

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
          // Now you can get the access token and instance URL information.
          // Save them to establish connection next time.
          console.log(conn.accessToken);
          console.log(conn.instanceUrl);
          // logged in user property
          console.log("User ID: " + userInfo.id);
          console.log("Org ID: " + userInfo.organizationId);
          con.query("SELECT Id, Name FROM Account WHERE Nam='CTF' limit 1", function(err, result) {
            if (err) { return console.error(err); }
            console.log("total : " + result.totalSize);
            console.log("fetched : " + result.records.length);
            result.records.forEach(function(record) {
              console.log(record);
              console.log(record.name);
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
SF_SECURITYTOKEN="Zt7ZAwcHoly9N2tXQTdXY1o4"
OPENAI_ACCESS_TOKEN=""
```


