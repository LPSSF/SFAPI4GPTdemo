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
  
