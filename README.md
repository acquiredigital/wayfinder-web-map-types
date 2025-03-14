# Wayfinder Web Map API Type Definitions

This repository includes definition files for the Wayfinder Web Map 2.0 API. JsDoc annotations provide intellisense in compatible IDE's.
![An example of type definitions within a codebase.](example.png)

## Installation

The package is available on NPM. Add it to your dev dependencies.

```sh
# npm
npm install --save-dev @acquireweb/wayfinder-web-map-types

# pnpm
pnpm add -D @acquireweb/wayfinder-web-map-types
```

## Usage

To make the types available in your project, add the packaged to the `types` field of `compilerOptions` in tsconfig.json:

```json
{
  "compilerOptions": {
    "types": ["@acquireweb/wayfinder-web-map-types"]
  }
}
```

All types are exported under the 'WF' namespace. You can access them by prefixing a type with 'WF'.

## Examples

```ts
const destination: WF.Destination =
  window.wayfinder.database.destinations.asArray[0];
```

```ts
function getAmenityName(amenity: WF.Amenity): string {
  const amenityTypes = window.wayfinder.database.amenityTypes.asMap;
  const amenityType = amenityTypes[amenity.type];
  //      ^? const amenityType: AmenityType
  return amenityType.name;
}
```
