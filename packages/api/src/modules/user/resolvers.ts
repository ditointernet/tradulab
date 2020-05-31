async function me(parent, args, context) {
  return context.user;
}

export const queries = { me };
