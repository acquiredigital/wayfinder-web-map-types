# Wayfinder Web Map API Type Definitions

This repository includes definition files for the Wayfinder Web Map 2.0 API.

## Installation

The package is not currently published to NPM. However, you can install it directly from the GitHub repoitory by adding the following line to your dependencies in package.json:

```json
"wayfinder-web-map-types": "github:acquiredigital/wayfinder-web-map-types"
```

## Usage

To make the types available in your project, add the packaged to the `types` field of `compilerOptions` in tsconfig.json:

```json
{
  "compilerOptions": {
    "types": ["wayfinder-web-map-types"]
  }
}
```

All types are exported under the 'Wayfinder' namespace. You can access them by prefixing a type with 'Wayfinder'.

## Examples

```ts
const destination: Wayfinder.Destination =
  window.wayfinder.database.destinations.asArray[0];
```

```ts
function getAmenityName(amenity: Wayfinder.Amenity): string {
  const amenityTypes = window.wayfinder.database.amenityTypes.asMap;
  const amenityType = amenityTypes[amenity.type];
  //      ^? const amenityType: AmenityType
  return amenityType.name;
}
```
