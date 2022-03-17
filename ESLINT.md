# Configuration

## Add prefer-arrow
```
npm i -D eslint-plugin-prefer-arrow
````

Add to .eslintrc:
```
"plugins": [
    "prefer-arrow"
],
```

Add rule:
```
"prefer-arrow/prefer-arrow-functions": [
    "warn",
    {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": false
    }
    ]
```
