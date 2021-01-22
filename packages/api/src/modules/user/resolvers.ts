import { model as User } from '../user';
import { model as Auth } from '../auth';

async function me(_parent, _args, context) {
  const user = await User.findOne({ _id: context.user });
  const auth = await Auth.findOne({ user: context.user });

  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName,
    email: auth.email,
    createdAt: auth.createdAt,
    updatedAt: auth.updateAt,
  };
}

export const queries = { me };
