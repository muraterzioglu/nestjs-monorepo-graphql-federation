import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'ID', nullable: false })
  id: number;

  @Field(() => String, { description: 'Username', nullable: false })
  username: string;
}
