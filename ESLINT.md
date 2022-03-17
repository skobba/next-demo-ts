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

## Airbnb ESLint Config
Add eslint-config-airbnb and peerDeps:
```
npm i -D eslint-config-airbnb
npx install-peerdeps --dev eslint-config-airbnb
```

Add to .eslintrc:
```
"extends": ["airbnb", "airbnb/hooks"] to your 
```

## Add Airbnb ESLint Typescript support
Add eslint-config-airbnb-typescript and peerDeps:
```
npm install -D eslint-config-airbnb-typescript
npx install-peerdeps --dev eslint-config-airbnb-typescript
```

Add to extends:
```
extends: [
    "airbnb",
    "airbnb-typescript"
]
```
