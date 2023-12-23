import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => Int, { nullable: false, description: 'Post ID' })
  id: number;

  @Field(() => Int, { nullable: false, description: 'Author of the file' })
  author: number;

  @Field(() => String, { nullable: false, description: '' })
  post: string;
}
