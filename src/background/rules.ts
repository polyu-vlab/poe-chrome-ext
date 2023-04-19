const allResourceTypes = Object.values(
  chrome.declarativeNetRequest.ResourceType
);

const rules: chrome.declarativeNetRequest.Rule[] = [
  {
    id: 1,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
      responseHeaders: [
        {
          operation: chrome.declarativeNetRequest.HeaderOperation.SET,
          header: "x-test-response-header",
          value: "test-value",
        },
      ],
    },
    condition: {
      urlFilter: "https://testheaders.com/exampleAPI",
      resourceTypes: allResourceTypes,
    },
  },
];

export default rules;
