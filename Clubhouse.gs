function chGetAppToken() {
  
  var appToken = "<your_clubhouse_api_token_goes_here>";
  return appToken;
}

function chGetBaseUrl() {
  
  var baseUrl = "https://api.clubhouse.io/api/v3/";
  return baseUrl;
}


function chQuery(path, param, query) {
 
  var options = "noHeaders";
  return ImportJSON(chGetBaseUrl() + path + param + "?token=" + chGetAppToken(), query, options);
}


function chGetStoryUrl(story) {
  
  var path = "stories/";
  var param = story;
  var query = "/app_url";

  return chQuery(path, param, query);
}

function chGetStoryName(story) {
  
  var path = "stories/";
  var param = story;
  var query = "/name";

  return chQuery(path, param, query);
}


function chGetEpicId(story) {
  
  var path = "stories/";
  var param = story;
  var query = "/epic_id";

  return chQuery(path, param, query);
}

function chGetProjectId(story) {
  
  var path = "stories/";
  var param = story;
  var query = "/project_id";

  return chQuery(path, param, query);
}

function chGetIterationId(story) {
  
  var path = "stories/";
  var param = story;
  var query = "/iteration_id";

  return chQuery(path, param, query);
}

function chGetOwnerIdList(story) {
  
  var path = "stories/";
  var param = story;
  var query = "/owner_ids";

  return chQuery(path, param, query);
}

function chGetEpicName(story) {
  
  var path = "epics/";
  var param = chGetEpicId(story);
  var query = "/name";

  if ((!param) || (param == "")) {
    return; 
  }

  return chQuery(path, param, query);
}

function chGetProjectName(story) {
  
  var path = "projects/";
  var param = chGetProjectId(story);
  var query = "/name";
  
  if ((!param) || (param == "")) {
    return; 
  }

  return chQuery(path, param, query);
}

function chGetIterationName(story) {
  
  var path = "iterations/";
  var param = chGetIterationId(story);
  var query = "/name";
  
  if ((!param) || (param == "")) {
    return; 
  }

  return chQuery(path, param, query);
}

function chGetOwnerNameList(story) {
  
  var path = "members/";
  var ownerIdList = chGetOwnerIdList(story);
  var query = "/profile/name";

  if ((!ownerIdList) || (ownerIdList == "")) {
    return; 
  }
  
  var ownerIdArray = ownerIdList.toString().split(",");
  Logger.log(ownerIdArray);

  var ownerNameArray = [{}];
  for (var i = 0; i < ownerIdArray.length; i++) {
    ownerNameArray[i] = chQuery(path, ownerIdArray[i], query);
  }  
  
  return ownerNameArray.join(",");
}
