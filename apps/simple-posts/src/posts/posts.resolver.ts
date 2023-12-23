import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from '@entity/posts';
import { CreatePostInput, UpdatePostInput } from '@dto/posts';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  createPost(@Args('payload') payload: CreatePostInput) {
    return this.postsService.create(payload);
  }

  @Mutation(() => Post)
  updatePost(@Args('payload') payload: UpdatePostInput) {
    return this.postsService.update(payload.id, payload);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.remove(id);
  }
}
