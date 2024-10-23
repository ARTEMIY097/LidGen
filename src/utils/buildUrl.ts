class UrlBuilder {
  private readonly rootPath: string;

  constructor(PATH: string) {
    this.rootPath = PATH;
  }

  private buildQueryString = (queryParams?: { [key: string]: string }) => {
    if (!queryParams) return "";

    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    return `?${queryString}`;
  };

  buildUrl = (path: string, queryParams?: { [key: string]: string }) => {
    return `${this.rootPath}${path}${this.buildQueryString(queryParams)}`;
  };
}

export default UrlBuilder;
