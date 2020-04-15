Ever wanted to pull in Cubhouse story details into Google Sheet?  And keep the information up to date as the story matures?
Well, now you can…
This Google script provides a set of `chGet*()` functions to import Clubhouse story details based on a story ID.  The functions in the script rely on Clubhouse REST APIs (https://clubhouse.io/api/rest/v3/) and `ImportJSON` project (https://gist.github.com/paulgambill/cacd19da95a1421d3164).

Some of the most useful functions:
- `=chGetStoryUrl()`
- `=chGetStoryName()`	
- `=chGetEpicName()`	
- `=chGetProjectName()`	
- `=chGetIterationName()`	
- `=chGetOwnerNameList()`

Instructions:
1. Generate Clubhouse API token: https://help.clubhouse.io/hc/en-us/articles/205701199-Clubhouse-API-Tokens
2. Create a new Google Sheet
3. Click on the Tools menu and select "Script editor"
4. Delete the placeholder content
5. Copy and paste the code from this script (https://gist.github.com/paulgambill/cacd19da95a1421d3164) to the Script editor. Save it into `ImportJSON.gs`
6. Copy and paste this project's code into a new script file
7. Place your Clubhouse API token generated in the 1st step in the `appToken` variable (part of `chGetAppToken()` function) 
```
function chGetAppToken() {
  
  var appToken = "<your_clubhouse_api_token_goes_here>";
  return appToken;
}
```
8. Save the script as `Clubhouse.gs`
9. Close the Script editor and navigate back to your Google Sheet
10. In any cell type `=chGet...("xxx")`


Please let me know if you have any questions/comments/suggestions.  Hope you find this useful.
