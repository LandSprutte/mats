import { Context } from '../../context';

export type CreateProfile = {
  bio?: string;
};

export type CreateUser = {
  email: string;
  name: string;
  profile?: CreateProfile;
};

export const createUser = async (user: CreateUser, ctx: Context) => {
  return await ctx.prisma.user.create({
    data: user,
  });
};
