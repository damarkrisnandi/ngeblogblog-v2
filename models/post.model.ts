export class PostModel {
    data: PostHeaderModel = new PostHeaderModel(); 
    content: any;
}

export class PostHeaderModel {
    title: string = '';
    description: string = '';
    date: Date | string = new Date();
    tags: string[] = [];
}