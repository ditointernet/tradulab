export const ROLES = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // VIEWER: 'viewer',
=======
>>>>>>> Update Role
=======
  // VIEWER: 'viewer',
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Update Role
  CONTRIBUTOR: 'contributor',
  PROOFREADER: 'proofreader',
  DEVELOPER: 'developer',
  MANAGER: 'manager',
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
  OWNER: 'owner',
  MANAGER: 'manager',
  DEVELOPER: 'developer',
  PROOFREADER: 'proofreader',
  CONTRIBUTOR: 'contributor',
  // VIEWER: 'viewer',
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Array ordenado hierarquicamente
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
export const ROLES_LIST = [
=======
export const ROLES_LIST = [ // mudar nome
>>>>>>> remove comments
=======
export const ROLES_LIST = [
>>>>>>> erase comments
=======
  OWNER: 'owner',
};

// Arrey ordenado Hierarquicamente
export const ROLES_LIST = [ // mudar nome
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
  ROLES.OWNER,
  ROLES.MANAGER,
  ROLES.DEVELOPER,
  ROLES.PROOFREADER,
  ROLES.CONTRIBUTOR,
  // ROLES.VIEWER,
];

export const ERROR_CODES = {
  INVITED_YOURSELF: 'INVITED_YOURSELF',
  INVITED_EXISTING_ROLE: 'INVITED_EXISTING_ROLE',
  INVITED_SAME_OR_HIGHER_ROLE: 'INVITED_SAME_OR_HIGHER_ROLE',
  UPDATED_YOURSELF: 'UPDATED_YOURSELF',
  UPDATED_NOT_EXISTING_ROLE: 'UPDATED_NOT_EXISTING_ROLE',
  UPDATED_TO_SAME_OR_HIGHER_ROLE: 'UPDATED_TO_SAME_OR_HIGHER_ROLE',
  UPDATED_FROM_SAME_OR_HIGHER_ROLE: 'UPDATED_FROM_SAME_OR_HIGHER_ROLE',
  REMOVED_NOT_EXISTING_ROLE: 'REMOVED_NOT_EXISTING_ROLE',
  REMOVED_YOURSELF_AS_OWNER: 'REMOVED_YOURSELF_AS_OWNER',
  REMOVED_SAME_OR_HIGHER_ROLE: 'REMOVED_SAME_OR_HIGHER_ROLE',
};

export const ERROR_MESSAGES = {
  INVITED_YOURSELF: 'You cannot invite yourself.',
  INVITED_EXISTING_ROLE: 'The provided user is already part of the project.',
  INVITED_SAME_OR_HIGHER_ROLE: 'You cannot invite an user with the same or higher role.',
  UPDATED_YOURSELF: 'You cannot update your own role.',
  UPDATED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  UPDATED_TO_SAME_OR_HIGHER_ROLE: 'You can not give the same or higher role than your own to an user.',
  UPDATED_FROM_SAME_OR_HIGHER_ROLE: 'You can not update someone with the same or higher role than your own.',
  REMOVED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  REMOVED_YOURSELF_AS_OWNER: 'You cannot remove your ownership from the project.',
  REMOVED_SAME_OR_HIGHER_ROLE: 'You can not remove someone with the same or higher role than your own.',
};
