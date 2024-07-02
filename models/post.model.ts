export class PostModel {
    data: PostHeaderModel; 
    content: any;
}

export class PostHeaderModel {
    title: string;
    description: string;
    date: Date | string;
    tags: string[];
}