export class PaginationData {
    static pageSize = 5;

    static getTotalPage(nPosts: number) {
        return Math.ceil(nPosts / this.pageSize);
    }
}