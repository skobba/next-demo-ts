# Configuration

## Add prefer-arrow
```
npm i -D eslint-plugin-prefer-arrow
```

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

## Add Prettier
```
npm i -D eslint-config-prettier eslint-plugin-prettier
```

Add to plugins and extends:
```
"plugins": [
    "prettier"
],
"extends": [
    "prettier"
]
```

Add rule:
```
"prettier/prettier": [
    "error",
    {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80
    }
]
```