import { CreateUserInput } from './create-user.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends CreateUserInput {}
