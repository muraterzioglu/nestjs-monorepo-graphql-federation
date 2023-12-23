import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'ID', nullable: false })
  id: number;

  @Field(() => String, { description: 'Username', nullable: false })
  username: string;
}
