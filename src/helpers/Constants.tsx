export const BASE_URL = "https://api.github.com/search/";
export enum ENTITY {
    USER = "users",
    REPOSITORY = "repositories"
};
export enum QUERY {
    ACTIVE_USERS = "?q=created:>2021-06-28+sort:repositories+type:user",
    TRENDING_USERS = "?q=created:>2021-06-28+sort:followers+type:user",
    REPOSITORIES = "?q=created:%3E2020-09-29+sort:stars+type:repositories"
}
export enum SEARCH_TERM {
    FOR_USERS = "in:login",
    FOR_REPOSITORIES = "in:full_name"
}
export enum PAGINATION {
    FOR_USERS = "&page=1&per_page=3",
    FOR_REPOSITORIES = "&page=1&per_page=4"
}
export const SORT_AND_PAGINAATION_FOR_USER_REPO = "?q=sort:stars&page=1&per_page=1";
