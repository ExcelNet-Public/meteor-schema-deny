Package.describe({
  name: "excelnet:schema-deny",
  summary: "Deny inserting or updating certain properties through schema options",
  version: "3.0.1",
  documentation: '../../README.md',
  git: "https://github.com/ExcelNet-Public/meteor-schema-deny.git"
});

Package.onUse(function(api) {
  api.use([
    'excelnet:collection2@3.0.2',
    'ecmascript@0.6.1',
  ]);

  api.mainModule('deny.js');
});
