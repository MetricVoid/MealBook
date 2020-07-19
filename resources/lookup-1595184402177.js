(function(window, undefined) {
  var dictionary = {
    "761b5c9f-d641-4bb9-854b-ce804f2dc83a": "Generate for the day",
    "2d1fc974-947f-41ed-81f4-0c10ebb84327": "chicken_soup",
    "123b786f-df06-4f87-9296-58e9b9a10f92": "profile",
    "8662d51c-b384-46d7-9061-86bda392a037": "mealplan",
    "18991bd8-7581-484e-99b3-7cfe4c524bdc": "bbq",
    "55581af8-20c2-4af6-90b3-9ad3035f88c8": "chocolate",
    "40ee2091-aaa0-4dcd-a57e-71b1ac64dc7a": "Generate for a week",
    "6fa971b7-2234-4d81-952d-66c09bdd6794": "create",
    "6f574da9-5f0d-4c6e-af72-3f8423297a60": "camera",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "home",
    "e409ca50-e301-4437-bf3b-c4560fc321b9": "shopping list",
    "4fdbd5d3-e699-41a7-9160-f1a1dd822e7b": "search",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);