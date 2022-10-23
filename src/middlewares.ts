import { AuthChecker, MiddlewareFn } from 'type-graphql';

import { AUTH_NAMES, decryptToken } from './modules/auth/utils';
import { User } from './entities';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LogAccess: MiddlewareFn<any> = ({ context }, next) => {
  return next();
};

export const customAuthChecker: AuthChecker<any> = async (
  { context },  
) => {
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
  
  const { req } = context;
  let atPayload = null; //access_token payload  
  try {
    atPayload = decryptToken(req, AUTH_NAMES.ACCESS_TOKEN_KEY, process.env.ACCESS_TOKEN_SECRET!);    
  } catch (error) {
    console.log('an error decrypting token', error);
    return false;
  }

  if (!atPayload) {
    return false;
  }
  
  const user = await User.findOneBy({ id: atPayload.userId });

  if (!user) {
    return false;
  }

  return true;
};
