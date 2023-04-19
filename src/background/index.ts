// console.log("background running");
// const allResourceTypes = Object.values(
//   chrome.declarativeNetRequest.ResourceType
// );

// const rules: chrome.declarativeNetRequest.Rule[] = [
//   {
//     id: 1,
//     priority: 1,
//     action: {
//       type: chrome.declarativeNetRequest.RuleActionType.UPGRADE_SCHEME,

//     },
//     condition: {
//       urlFilter: "https://poe.com/api/gql_POST",
//       resourceTypes: allResourceTypes,
//     },
//   },
// ];

// chrome.declarativeNetRequest.getDynamicRules((previousRules) => {
//   const previousRuleIds = previousRules.map((rule) => rule.id);
//   chrome.declarativeNetRequest.updateDynamicRules({
//     removeRuleIds: previousRuleIds,
//     addRules: rules,
//   });
// });

// chrome.webRequest.onBeforeRequest.addListener(
//   (details) => {
//     if (
//       details.method === "POST" &&
//       details.url === "https://poe.com/api/gql_POST" &&
//       details.requestBody &&
//       details.requestBody.raw
//     ) {
//       const requestBody = new TextDecoder("utf-8").decode(
//         details.requestBody.raw[0].bytes
//       );
//       const requestBodyJson = JSON.parse(requestBody);

//       console.log(requestBodyJson);

//       requestBodyJson.variables.query = "modified";

//       return {
//         redirectUrl: details.url,
//         requestBody: JSON.stringify(requestBodyJson),
//       };
//     }
//   },
//   { urls: ["<all_urls>"] },
//   ["requestBody"]
// );

export function background() {
  return "background";
}
