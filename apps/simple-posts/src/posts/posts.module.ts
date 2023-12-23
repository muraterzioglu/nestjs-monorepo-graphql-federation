import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';

@Module({
  providers: [PostsResolver, PostsService],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        path: 'schemas/simple-posts.schema.gql',
        federation: 2,
      },
      sortSchema: true,
      playground: process.env.NODE_ENV != 'prd',
      plugins: [ApolloServerPluginInlineTrace()],
    }),
  ],
})
export class PostsModule {}
