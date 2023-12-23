import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int, { description: 'Post ID' })
  id: number;

  @Field(() => Int, { nullable: false, description: 'Author of the file' })
  author: number;

  @Field(() => String, { description: '' })
  post: string;
}
