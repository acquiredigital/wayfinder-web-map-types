export {};

declare global {
  type SearchResult =
    | (Wayfinder.Amenity & {
        discriminator: 'amenity';
      })
    | (Wayfinder.Destination & {
        discriminator: 'destination';
      });
}
