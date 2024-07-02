export class PostModel {
    data: PostHeader; 
    content: any;
}

export class PostHeaderModel {
    title: string;
    description: string;
    date: Date | string;
    tags: string[];
}