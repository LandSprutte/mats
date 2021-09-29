import { Context, createMockContext, MockContext } from '../context';
import { createUser } from '../src/services/user';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

describe('User', () => {
  it('should create a new user', async () => {
    const user = {
      id: 1,
      email: 'test@test',
      name: 'test',
    };

    mockCtx.prisma.user.create.mockResolvedValue(user);

    await expect(createUser(user, ctx)).resolves.toEqual({
      id: 1,
      email: 'test@test',
      name: 'test',
    });
  });
  it('should create a new user with a profile', async () => {
    const user = {
      id: 1,
      email: 'donger@donger',
      name: 'donger',
      profile: {
        bio: 'hello',
      },
    };

    mockCtx.prisma.user.create.mockResolvedValue(user);

    await expect(createUser(user, ctx)).resolves.toHaveProperty('profile');
  });
});
