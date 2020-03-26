/**
 * This is a helper class that makes de-serialization of query parameters
 * very easy. The @Query() annotation just takes this as type and voila,
 * one can access all the fields easily.
 */
export class SearchHelperDto {
  service: string;
  species: string;
  PLZ: string;
  distance: string;
  begin: string;
  end: string;
  gender: string;
  action: string;
}
