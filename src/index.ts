/**
 * Level of awesomeness is determined by whether someone follows Jade
 * Enter an array of names to check if either of them include the name 'Jade'
 */
export const levelOfAwesomeness = (names: string[] = []): string =>
  isJadeInArray(names) ? "Awesome" : "Lame";

/**
 * Check if supplied string contains a name 'Jade'
 */
export const isJade = (name: string): boolean =>
  name.toLowerCase().includes("jade");

/**
 * Check if an array of strings contains a name 'Jade'
 */
export const isJadeInArray = (names: string[]): boolean =>
  names.some((name) => isJade(name));
